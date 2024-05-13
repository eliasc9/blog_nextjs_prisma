import prisma from '@/app/lib/db';
import PostsList from '@/app/components/PostsList'
import PostsFilter from '@/app/components/PostsFilter'
import PostsPagination from '../components/PostsPagination';
import { Suspense } from 'react';
import Link from 'next/link'

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
    <>
      <div className='container mx-auto flex flex-col space-y-4 my-6 items-center'>
        <Link href="/posts"><h1 className='text-3xl font-extralight hover:underline'>Blog posts</h1></Link>
        <PostsFilter currentUserId={userId}/>
        <Suspense fallback="Loading...">
          <PostsList posts={posts} />
        </Suspense>
        <PostsPagination totalPages={totalPages} page={page} />
        {/* <Error title='Error deleting a post' message='The post could not be deleted'/> */}
      </div>
      <div className="h-32"></div>
    </>
  )
}