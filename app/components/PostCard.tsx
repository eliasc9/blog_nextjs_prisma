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
      <li className='flex max-w-sm p-6 flex-col justify-between border'>
        <div className='pb-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight'>{title}</h5>
          <p className='text-neutral-950 font-extralight'>{body}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='text-xs'>
            by
            <Link href={`/posts?userId=${userId}`}>
            <span className="px-1 underline font-bold hover:text-neutral-700">userId {userId}</span>
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
