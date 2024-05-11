/*
This is /pages as required ✅

# Filter by userId and pagination ✅

List or "Card" elements ✅

Use tailwind css ✅

Each card has a DELETE BUTTON ✅

Confirmation dialog before DELETE ❌

Show an error ❌
*/
// 'use client';

import prisma from '@/app/lib/db';
import PostsList from '@/app/components/PostsList'
import PostsFilter from '@/app/components/PostsFilter'
import PostsPagination from '../components/PostsPagination';
import { Suspense } from 'react';

const PER_PAGE = 12

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({params, searchParams}: PageProps) {
  let userId : number | undefined = Number(searchParams?.userId) || undefined
  let page : number = Number(searchParams?.page)
  if (isNaN(page) || page < 1) {
    page = 1
  }

  const [totalPosts, posts] = await prisma.$transaction([
    prisma.post.count({ where : { userId }}),
    prisma.post.findMany({ where : { userId }, take: PER_PAGE, skip: (page - 1) * PER_PAGE}),
  ])

  const totalPages = Math.ceil(totalPosts / PER_PAGE)

  return (
    <div className="container mx-auto">
      <PostsFilter />
      <PostsPagination totalPages={totalPages} page={page} />
      <Suspense fallback="Loading...">
        <PostsList posts={posts} />
      </Suspense>
    </div>
  )
}