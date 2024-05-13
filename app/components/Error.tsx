'use client'

import { useState } from 'react'

export default function Error({ title, message }: { title: string, message: string }) {
  const [isVisible, setIsVisible] = useState(true);

  const onClick = () => {
    setIsVisible(false)
  }

  return (
    <>
    { isVisible && 
      <>
        <button className="fixed w-full bottom-0 left-0 z-10 group" onClick={onClick}>
          <div className="bg-red-100 group-hover:bg-red-50 border-t border-red-800 text-red-800 px-4 py-3 relative" role="alert">
            <p className="font-bold">{title}</p>
            <p className="text-sm">{message}</p>

            <div className="absolute top-0 bottom-0 right-0 px-4 py-5">
              <span className='px-1 underline font-bold text-sm text-red-700 group-hover:text-red-500'>
                Click to Close
              </span>
            </div>
          </div>
        </button>
      </>
    }
    </>
  )
}