'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState, useCallback } from 'react'

export default function PostsFilter({ currentUserId } : { currentUserId: number | undefined}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [userId, setUserId] = useState(currentUserId ? String(currentUserId) : "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const onClick = () => {
    router.push(pathname + '?' + createQueryString('userId', String(userId)))
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value)
  }

  return(
    <>
      <div>
        <form className='flex flex-row space-x-4'>
          <input value={userId} onChange={onChange} placeholder="Filter by userId" className='p-2 rounded shadow'/>
          <button className='p-2 rounded shadow bg-primary text-neutral-50 hover:bg-secondary' onClick={onClick}>Filter</button>
        </form>
      </div>
    </>
  )
}