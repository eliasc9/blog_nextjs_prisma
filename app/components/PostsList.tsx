import PostCard from '@/app/components/PostCard'
import { PostCardProps } from '@/app/components/PostCard'

type PostsListProps = {
  posts: Array<PostCardProps>
}

export default async function PostsList({ posts } : PostsListProps) {
  return (
    <>
      <ul>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>
      {posts.length === 0 && <p>No posts</p>}
    </>
  )
}