import prisma from '@/app/lib/db';

export const dynamic = 'force-dynamic'

export async function DELETE(request: Request, { params }: { params: { id : String } }) {
  const idString = params.id
  const id : number = Number(idString)

  await prisma.post.delete({where: { id }} )

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
}