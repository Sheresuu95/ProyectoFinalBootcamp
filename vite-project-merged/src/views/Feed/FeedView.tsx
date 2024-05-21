import { FC } from 'react'
import Feed from '../../components/layout/Feed.tsx'
import { UserProvider } from '../../components/common/UserContext.tsx';

const FeedView: FC = () => {
  const posts: any = [
    // Add your posts here
  ];

  return (
    <div id="root">
    <UserProvider>
      <Feed posts={posts} />
    </UserProvider>
  </div>
  )
}

export default FeedView