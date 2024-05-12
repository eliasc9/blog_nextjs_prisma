import PostDeleteConfirmDialog from '@/app/components/PostDeleteConfirmDialog'
import PostDeleteButton from '@/app/components/PostDeleteButton'
import ErrorBoundary from './ErrorBoundary'
import Error from './Error'
import Link from 'next/link'

export type PostCardProps = {
  id: number,
  title: string,
  body: string | null,
  userId: number,
}

export default async function PostCard({id, title, body, userId} : PostCardProps) {
  return (
    <>
      <li className='flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex-col justify-between '>
        <div className='pb-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>{body}</p>
        </div>
        <div className='flex flex-row'>
          <div>
          <Link href={`/posts?userId=${userId}`}>
           <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">userId {userId}</span>
          </Link>
          </div>
          
          <ErrorBoundary fallback={<Error title='An error has occurred' message='Please try again later.' />}>
            <PostDeleteConfirmDialog key={id} postId={id}>
              <PostDeleteButton postId={id} />
            </PostDeleteConfirmDialog>
          </ErrorBoundary>
        </div>
      </li>
    </>
  )
}
