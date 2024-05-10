import prisma from '@/app/lib/db';
import PostDeleteButton from '@/app/components/PostDeleteButton'

type PostsListProps = {
  userId?: number,
  page?: number,
}

const perPage = 999

export default async function PostsList({ userId, page = 0 } : PostsListProps) {
  const posts = await prisma.post.findMany({ where : { userId }, take: perPage, skip: page * perPage})

  // await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='block rounded-lg p-2 shadow'>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
            <small>userId: {post.userId}</small> <small>postId: {post.id}</small>
            <PostDeleteButton postId={post.id} />
          </li>
        ))}
      </ul>

      {posts.length === 0 && <p>No posts</p>}
    </>
  )
}