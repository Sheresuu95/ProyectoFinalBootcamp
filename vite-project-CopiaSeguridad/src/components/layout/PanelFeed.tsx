import { FC } from 'react';

interface Post {
  id: number;
  imageUrl: string;
  username: string;
  timestamp: string;
  content: string;
}

interface CardPanelProps {
  post: Post;
}

const PanelFeed: FC<CardPanelProps> = ({ post }) => {
  const { imageUrl, username, timestamp, content } = post;

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="User" />
        <span className="card-title">{username}</span>
        <span className="card-title right">{timestamp}</span>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-action">
        <a href="#">Like</a>
        <a href="#">Comment</a>
      </div>
    </div>
  );
};

export default PanelFeed;
