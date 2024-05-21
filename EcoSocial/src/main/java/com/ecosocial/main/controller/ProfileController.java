package com.ecosocial.main.controller;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ecosocial.main.controller.dto.PostDto;
import com.ecosocial.main.controller.dto.ProfileDto;
import com.ecosocial.main.entities.Post;
import com.ecosocial.main.entities.Profile;
import com.ecosocial.main.repository.PostRepository;
import com.ecosocial.main.repository.ProfileRepository;
import com.ecosocial.main.services.ProfileService;

@RestController
@RequestMapping("/profiles")
@CrossOrigin("*")
public class ProfileController {
	 @Autowired
	    private ProfileRepository profileRepository;
	 @Autowired
	 private ProfileService profileService;
	 
	 @Autowired
	 private PostRepository postRepository;

	    // Obtener todos los perfiles
	    @GetMapping
	    public ResponseEntity<List<ProfileDto>> getAllProfiles() {
	        List<ProfileDto> profiles = profileService.getAllProfiles();
	        return new ResponseEntity<>(profiles, HttpStatus.OK);
	    }
	    
	    // Obtener el ranking de los amigos según el ID de un usuario
	    @GetMapping("ranking-friends/{id}")
	    public ResponseEntity<List<ProfileDto>> getRankingFriends(@PathVariable("id") Integer profileId) {
	        List<ProfileDto> profiles = profileService.getRanking(profileId);
	        return new ResponseEntity<>(profiles, HttpStatus.OK);
	    }
	    
	    @GetMapping("/global-ranking")
	    public ResponseEntity<List<ProfileDto>> getGlobalRanking(){
	    	List<ProfileDto> profiles = profileService.getGlobalRanking();
	    	return new ResponseEntity<>(profiles, HttpStatus.OK);
	    }
	    
	    // Obtener un perfil por su ID
	    /*@GetMapping("/{id}")
	    public ResponseEntity<Profile> getProfileById(@PathVariable("id") int id) {
	        Optional<Profile> profileOptional = profileRepository.findById(id);
	        if (profileOptional.isPresent()) {
	            return new ResponseEntity<>(profileOptional.get(), HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }*/
	    
	    //Obtener un perfil mediante su ID
	    @GetMapping("/{id}")
	    public ProfileDto getProfile (@PathVariable("id") Integer profileId) {
	    	return profileService.getProfileById(profileId);
	    }
	    
	    //Obtener los perfiles de los amigos de un perfil mediante su ID
	    @GetMapping("/friends/{id}")
	    public ResponseEntity<List<ProfileDto>> getAllFriendsByProfile(@PathVariable("id") Integer profileId) {
	        List<ProfileDto> profiles = profileService.getFriendshipByUser(profileId);
	        return new ResponseEntity<>(profiles, HttpStatus.OK);
	    }

	    // Crear un nuevo perfil
	    @PostMapping("/")
	    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile) {
	        Profile createdProfile = profileRepository.save(profile);
	        return new ResponseEntity<>(createdProfile, HttpStatus.CREATED);
	    }

	    // Actualizar un perfil existente
	    @PutMapping("/{id}")
	    public ResponseEntity<Profile> updateProfile(@PathVariable("id") int id, @RequestBody Profile profile) {
	        Optional<Profile> profileOptional = profileRepository.findById(id);
	        if (profileOptional.isPresent()) {
	            profile.setId(id); // Aseguramos que el ID sea el correcto
	            Profile updatedUser = profileRepository.save(profile);
	            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    // Eliminar un perfil por su ID
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteProfile(@PathVariable("id") int id) {
	        Optional<Profile> profileOptional = profileRepository.findById(id);
	        if (profileOptional.isPresent()) {
	            profileRepository.deleteById(id);
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	    
	    //Ver publicaciones del perfil
	    @GetMapping("/{id}/posts")
	    public List<PostDto> profilePosts(@PathVariable("id") int id){
	    	Profile profile =  profileService.getProfileById2(id);
	    	
	    	List<Post> posts = new ArrayList<>();
	    	
	    	List<PostDto> result = new ArrayList<>();
	    	
	    	for (Post post : profile.getPosts()) {
	    		posts.add(post);
	    	}
	    	for (Post p : posts) {
	        		PostDto postDto = new PostDto();
	        		postDto.setName(p.getProfile().getName());
	        		postDto.setTitle(p.getTitle());
	        		postDto.setContent(p.getContent());
	        		postDto.setNumLikes(postDto.calculateNumLikes(p.getLikes()));
	        		postDto.setPublishedAt(p.getPublishedAt());
	        		result.add(postDto);
	    }
	    	result.sort(Comparator.comparing(PostDto::getPublishedAt).reversed());
	    	return result;
	}
	    
	    @PostMapping("post/{id}")
	    public Post postContent(@PathVariable int id,@RequestBody Map<String, String> postContent) {
	    	String title = postContent.get("title");
	        String content = postContent.get("content");
	    	
	    	Post post = new Post();
	    	Profile profile = profileRepository.findProfileById(id);
	    	post.setProfile(profile);
	    	post.setTitle(title);
	    	post.setContent(content);
	    	
	    	postRepository.save(post);
	    	
	    	return post;
	    }
	    
	    @GetMapping("/feed/{id}")
	    public ResponseEntity<List<PostDto>> getFeed(@PathVariable("id") Integer profileId) {
	        List<ProfileDto> profiles = profileService.getFriendshipByUser2(profileId);
	        List<PostDto> feed = new ArrayList<>();
	        
	        for (ProfileDto profile : profiles) {
	            for (Post post : profile.getPosts()) {
	                PostDto postDto = new PostDto();
	                postDto.setName(post.getProfile().getName());
	                postDto.setTitle(post.getTitle());
	                postDto.setContent(post.getContent());
	                postDto.setNumLikes(postDto.calculateNumLikes(post.getLikes()));
	                postDto.setPublishedAt(post.getPublishedAt());
	                feed.add(postDto);
	            }
	        }
	        feed.sort(Comparator.comparing(PostDto::getPublishedAt).reversed());
	        
	        return new ResponseEntity<>(feed, HttpStatus.OK);
	    }
	    
	    //Search
	    @GetMapping("/search/")
	    public List<ProfileDto> searchProfilesByName(@RequestParam String name) {
	        return profileService.searchProfile(name);
	    }

}