// /app/posts/page.tsx (NextJs)
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Page() {
  return <h1>Here page</h1>
}