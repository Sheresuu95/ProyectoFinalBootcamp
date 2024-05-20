import { FC } from 'react'
import Feed from '../../components/layout/Feed.tsx'

const FeedView: FC = () => {
  const posts: any = [
    // Add your posts here
  ];

  return (
    <body>
        <Feed posts={posts} />
    </body>
  )
}

export default FeedView