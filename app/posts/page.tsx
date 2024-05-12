import prisma from '@/app/lib/db';
import PostsList from '@/app/components/PostsList'
import PostsFilter from '@/app/components/PostsFilter'
import PostsPagination from '../components/PostsPagination';
import Error from '../components/Error';
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
    <>
      <div className="container mx-auto flex flex-col space-y-2 my-6">
        <div className='flex flex-row justify-between px-6'>
          <h1 className='text-2xl font-bold'>Blog posts</h1>
          <PostsFilter currentUserId={userId}/>
        </div>
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