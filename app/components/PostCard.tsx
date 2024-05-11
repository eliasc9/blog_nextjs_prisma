import PostDeleteButton from '@/app/components/PostDeleteButton'

export type PostCardProps = {
  id: number,
  title: string,
  body: string | null,
  userId: number,
}

export default async function PostsList({id, title, body, userId} : PostCardProps) {
  return (
    <>
      <li className='block rounded-lg p-2 shadow'>
        <h2 className='font-bold'>{title}</h2>
        <p>{body}</p>
        <small>userId: {userId}</small> <small>postId: {id}</small>
        <PostDeleteButton postId={id} />
      </li>
    </>
  )
}
