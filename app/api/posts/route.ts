import prisma from '@/app/lib/db';
import { NextRequest } from 'next/server'
import { createSuccessResponse, createErrorResponse } from '@/app/lib/response';

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  if (searchParams.has('userId') ) {
    const userIdString = searchParams.get('userId')
    const userId: number = Number(userIdString)
    if (isNaN(userId)) {
      return createErrorResponse('Invalid userId, must be a number')
    }
    const posts = await prisma.post.findMany({ where: { userId } })
    return createSuccessResponse(`List posts for user ID ${userId}`, posts)
  } else {
    const posts = await prisma.post.findMany()
    return createSuccessResponse('List posts', posts)
  }
}
