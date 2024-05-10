/*
This is /pages as required ✅

# Filter by userId and pagination ❌

List or "Card" elements ✅

Use tailwind css ✅

Each card has a DELETE BUTTON ✅

Confirmation dialog before DELETE ❌

Show an error ❌
*/
// 'use client';

import Button from '@/app/components/Button'
import PostsList from '@/app/components/PostsList'
import { Suspense } from 'react';


export default async function Page() {
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
      </div>
    </div>
  )
}