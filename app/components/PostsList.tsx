import prisma from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

type PostsListProps = {
  userId?: number,
  page?: number,
}

const perPage = 999

export default async function PostsList({ userId, page = 0 } : PostsListProps) {
  const posts = await prisma.post.findMany({ where : { userId }, take: perPage, skip: page * perPage})

  // await new Promise((resolve) => setTimeout(resolve, 1000))

  const deletePost = async (formData: FormData) => {
    "use server";

    await prisma.post.deleteMany({ where : { id: Number(formData.get("postId") as string) }})

    revalidatePath("/posts")
  }

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='block rounded-lg p-2 shadow'>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
            <small>userId: {post.userId}</small> <small>postId: {post.id}</small>
            <form action={deletePost}>
              <input type="hidden" name="postId" value={post.id} />
              <button className='bg-red-300'>Delete</button>
            </form>
          </li>
        ))}
      </ul>

      {posts.length === 0 && <p>No posts</p>}
    </>
  )
}