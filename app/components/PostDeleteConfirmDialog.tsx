'use client'

import PostDeleteButton from '@/app/components/PostDeleteButton'
import { useState, Suspense } from "react";

export default function PostDeleteConfirmDialog({ postId } : { postId?: number }) {
  const [open, setOpen] = useState(false);

  const onClick = (postId?: number) => {
    setOpen(!open)
  }

  return (
    <>
      <button className='' onClick={() => onClick(postId)}>
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Delete postId {postId}</span>
      </button>

      <div className={open ? "" : "hidden"}>
        Aqui el modal
        <Suspense fallback="Loading...">
          {open && <PostDeleteButton postId={postId} />}
        </Suspense>
      </div>
    </>
  )
}
