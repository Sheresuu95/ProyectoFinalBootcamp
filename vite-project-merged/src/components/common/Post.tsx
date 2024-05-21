import React, { useState } from 'react';

interface PostFormProps {
  onSubmit: (postDetail: { title: string, content: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostSubmit({ title, content });
  };

  const handlePostSubmit = async (postDetail: { title: string, content: string }) => {
    try {
      const response = await fetch('http://127.0.0.1:8080/profiles/post/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: postDetail.title,
          content: postDetail.content,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const newPost = await response.json();
      onSubmit({ title: newPost.title, content: newPost.content });
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="form-control"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PostForm;



