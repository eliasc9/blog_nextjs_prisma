"use server"

import prisma from '@/app/lib/db';
import { revalidatePath } from "next/cache"

type PostDeleteButtonProps = {
  postId?: number,
}

export default async function PostDeleteButton({ postId } : PostDeleteButtonProps) {
  const deletePost = async (formData: FormData) => {
    "use server";

    await prisma.post.deleteMany({ where : { id: Number(formData.get("postId") as string) }})

    revalidatePath("/posts")
  }

  return (
    <>
      <form action={deletePost}>
        <input type="hidden" name="postId" value={postId} />
        <button className=''>
          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Confirm?</span>
        </button>
      </form>
    </>
  )
}