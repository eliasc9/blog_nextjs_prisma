'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function PostsFilter() {
  const router = useRouter()
  const [userId, setUserId] = useState("");

  const onClick = () => {
    router.push(`?userId=${userId}`)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value)
  }

  return(
    <>
      <div>
        <div>
          <input value={userId} onChange={onChange} placeholder="Filter by userId"/>
          <button className='bg-blue-300' onClick={onClick} >Filter</button>
        </div>
      </div>

      <div>
        Page 1, 2, 3 ... 5
      </div>
    </>
  )
}