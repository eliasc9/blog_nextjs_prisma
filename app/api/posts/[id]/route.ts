import prisma from '@/app/lib/db';
import { createErrorResponse } from '@/app/lib/response';

export const dynamic = 'force-dynamic'

export async function DELETE(request: Request, { params }: { params: { id : String } }) {
  const idString = params.id
  const id : number = Number(idString)
  try {
    const res = await prisma.post.delete({where: { id }} ) // use deleteMany to not error
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
  } catch {
    return createErrorResponse('Invalid postId')
  }
}