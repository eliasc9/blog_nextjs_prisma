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
        <button className="py-1.5 px-4 font-bold text-white bg-red-500 hover:bg-red-600">
          Delete Post
        </button>
      </form>
    </>
  )
}