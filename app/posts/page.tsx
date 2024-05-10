/*
This is /pages as required

# Filter by userId and pagination

List or "Card" elements

Use tailwind css

Each card has a DELETE BUTTON

Confirmation dialog before DELETE

Show an error
*/
// 'use client';

import prisma from '@/app/lib/db';
import Button from '@/app/components/Button'
import PostsList from '@/app/components/PostsList'
import { Suspense } from 'react';


export default async function Page() {
  const posts = await prisma.post.findMany()

  return (
    <div className="container mx-auto">
      <div>
        <input type="text" placeholder="userId"/>
        <Button />
      </div>
      <div>
        Page 1, 2, 3 ... 5
      </div>
      <div>
        <Suspense fallback="Loading...">
          <PostsList />
        </Suspense>
        {posts.map(post => (
          <div key={post.id} className='block rounded-lg p-2 shadow'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button className='bg-red-500'>Delete</button>
          </div>
        ))}
        {posts.length === 0 && <p>No posts</p>}
      </div>
    </div>
  )
}