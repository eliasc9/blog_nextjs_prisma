import prisma from '@/app/lib/db';

export default async function PostsList(userId : number) {
  const posts = await prisma.post.findMany({ where : { userId }})

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