import Link from 'next/link'

export default function NotFound() {
  return <div className='container mx-auto flex flex-col space-y-4 my-6 items-center'>
      <h1 className='text-3xl font-extralight'>Not found – 404!</h1>
      <div>
        <Link className='underline text-xl font-bold' href="/posts">Go to posts list</Link>
      </div>
  </div>
}