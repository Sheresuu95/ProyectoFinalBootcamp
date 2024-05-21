import { FC } from 'react';
import PanelFeed from './PanelFeed';

interface Post {
    id: number;
    imageUrl: string;
    username: string;
    timestamp: string;
    content: string;
}

interface FeedProps {
    posts: Post[];
}

const Feed: FC<FeedProps> = ({ posts }) => {
    return (
        <div className="container">
            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col s12 m6">
                        <PanelFeed post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;

