import prisma from '@/app/lib/db';
import PostCard from '@/app/components/PostCard'

type PostsListProps = {
  userId?: number,
  page?: number,
}

const perPage = 10

export default async function PostsList({ userId, page = 0 } : PostsListProps) {
  const posts = await prisma.post.findMany({ where : { userId }, take: perPage, skip: page * perPage})

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