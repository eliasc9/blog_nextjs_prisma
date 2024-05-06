import { PrismaClient } from '@prisma/client'

import usersJson from './users.json';
import postsJson from './posts.json';

const prisma = new PrismaClient()

async function main() {
  for (const userJson of usersJson) {
    await prisma.user.upsert({
      where: { email: userJson.email },
      update: {},
      create: {
        id: userJson.id,
        email: userJson.email,
        name: userJson.name,
      },
    })
  }

  for (const postJson of postsJson) {
    await prisma.post.upsert({
      where: { id: postJson.id },
      update: {},
      create: {
        id: postJson.id,
        title: postJson.title,
        body: postJson.body,
        userId: postJson.userId
      },
    })
  }

  console.log("Done!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })