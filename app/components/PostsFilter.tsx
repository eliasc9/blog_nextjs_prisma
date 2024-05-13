'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState, useCallback, useEffect } from 'react'

export default function PostsFilter({ currentUserId } : { currentUserId: number | undefined}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [userId, setUserId] = useState(currentUserId ? String(currentUserId) : "");

  useEffect(() => {
    if (currentUserId) {
      setUserId(String(currentUserId));
    }
  }, [currentUserId]);

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
        <form className='flex flex-row space-x-2 mt-12 mb-6'>
          <input value={userId} onChange={onChange} placeholder="Filter by userId" className='px-2 font-normal border-b'/>
          <button className='py-1.5 px-4 bg-black text-neutral-200 hover:bg-neutral-700 hover:text-neutral-50 font-bold' onClick={onClick}>Filter</button>
        </form>
      </div>
    </>
  )
}