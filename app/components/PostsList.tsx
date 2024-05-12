import PostCard from '@/app/components/PostCard'
import { PostCardProps } from '@/app/components/PostCard'

type PostsListProps = {
  posts: Array<PostCardProps>
}

export default async function PostsList({ posts } : PostsListProps) {
  return (
    <>
      <ul className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>
      {posts.length === 0 && <p>No posts</p>}
    </>
  )
}