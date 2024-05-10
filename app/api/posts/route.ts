import prisma from '../../../db'
import { NextRequest, NextResponse } from 'next/server'

function createResponse(success: boolean, message: string, data: any, status: number = 200) {
  return NextResponse.json({ success, message, data }, { status });
}

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  if (searchParams.has('userId') ) {
    const userIdString = searchParams.get('userId')
    const userId: number = Number(userIdString)
    if (isNaN(userId)) {
      return createResponse(false, 'Invalid userId, must be a number', null, 400)
    }
    const posts = await prisma.post.findMany({ where: { userId } })
    return createResponse(true, `List posts for user ID ${userId}`, posts)
  } else {
    const posts = await prisma.post.findMany()
    return createResponse(true, 'List posts', posts)
  }
}
