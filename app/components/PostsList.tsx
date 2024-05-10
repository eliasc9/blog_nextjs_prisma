import prisma from '@/app/lib/db';

type PostsListProps = {
  userId?: number,
  page?: number,
}

const perPage = 10

export default async function PostsList({ userId, page = 0 } : PostsListProps) {
  const posts = await prisma.post.findMany({ where : { userId }, take: perPage, skip: page * perPage})

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='block rounded-lg p-2 shadow'>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
            <small>userId: {post.userId}</small>
            <button className='bg-red-300'>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}