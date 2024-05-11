import prisma from '@/app/lib/db';
import { revalidatePath } from "next/cache"
import PostDeleteConfirmDialog from '@/app/components/PostDeleteConfirmDialog'

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
      <PostDeleteConfirmDialog />
      <form action={deletePost}>
        <input type="hidden" name="postId" value={postId} />
        <button className='bg-red-300'>Delete</button>
      </form>
    </>
  )
}