# Blog NextJS + Prisma

### Run App

```bash
npm run dev
```

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

- [ ] Production ready
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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
