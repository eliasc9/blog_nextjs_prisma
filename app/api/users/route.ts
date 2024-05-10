import prisma from '@/app/lib/db';
import { createSuccessResponse } from '@/app/lib/response';

export const dynamic = 'force-dynamic'

export async function GET() {
  const users = await prisma.user.findMany()
  return createSuccessResponse(`List users`, users)
}
