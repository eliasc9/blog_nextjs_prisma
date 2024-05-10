/*
This is /pages as required

# Filter by userId

List or "Card" elements

Use tailwind css

Each card has a DELETE BUTTON

Confirmation dialog before DELETE

Show an error
*/
import prisma from '@/app/lib/db';

export default async function Home() {
  const posts = await prisma.post.findMany()

  return (
    <div className="container mx-auto">
      <div>
        {posts.map(post => (
          <div key={post.id} className='block rounded-lg p-2 shadow'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
        {posts.length === 0 && <p>No posts</p>}
      </div>
    </div>
  )
}