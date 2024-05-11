/*
This is /pages as required ✅

# Filter by userId and pagination (in progress)

List or "Card" elements ✅

Use tailwind css ✅

Each card has a DELETE BUTTON ✅

Confirmation dialog before DELETE ❌

Show an error ❌
*/
// 'use client';

import PostsList from '@/app/components/PostsList'
import PostsFilter from '@/app/components/PostsFilter'
import { Suspense } from 'react';

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({params, searchParams}: PageProps) {
  let userId : number | undefined = Number(searchParams?.userId) || undefined
  let page : number = Number(searchParams?.page) || 1
  page--

  return (
    <div className="container mx-auto">
      <PostsFilter />

      <div>
        <Suspense fallback="Loading...">
          <PostsList userId={userId} page={page} />
        </Suspense>
      </div>
    </div>
  )
}