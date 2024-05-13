# Blog NextJS + Prisma

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eliasc9/blog_nextjs_prisma)

### Setup Prisma

Run migrations to create the SQLite database

```bash
npx prisma migrate dev
```

Seed with users and post

```bash
npx prisma db seed
```

## TODO (Higher priority at the bottom)

- [x] Production ready
- [x] QA: 404, empty, return link to correct, colors (dark/white)
- [x] Test using playwright
- [x] Test "bad connection" (Pagination)
- [x] Endpoint error handling component
- [x] Delete confirmation dialog
- [x] Post delete button component
- [x] Post card component
- [x] Filter Posts by userId and test
- [x] List Posts and test
- [x] Seed scripts from https://jsonplaceholder.typicode.com/users https://jsonplaceholder.typicode.com/posts.
- [x] Setup Prisma ORM (add .env to git)
- [x] Init NextJS project

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
