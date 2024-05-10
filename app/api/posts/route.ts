import prisma from '../../../db'
import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userIdString = searchParams.get('userId')
  let posts
  
  if (userIdString) {
    const userId: number = Number(userIdString)
    if (userId) {
      posts = await prisma.post.findMany({ where: { userId } })
      return NextResponse.json(
        {
          success: true,
          message: `List posts for user ID ${userId}`,
          data: posts,
        },
        {
          status: 200,
        }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid userId',
          data: null,
        },
        {
          status: 400,
        }
      )
    }
  } else {
    posts = await prisma.post.findMany()
    return NextResponse.json(
      {
        success: true,
        message: 'List posts',
        data: posts,
      },
      {
        status: 200,
      }
    )
  }
}
