package com.ecosocial.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecosocial.main.entities.PostLikesId;
import com.ecosocial.main.entities.Profile;
import com.ecosocial.main.entities.Post;
import com.ecosocial.main.entities.PostLikes;

public interface PostLikesRepository extends JpaRepository<PostLikes, PostLikesId> {
    void deleteById(PostLikesId id);
}
