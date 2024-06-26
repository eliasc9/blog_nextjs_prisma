import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//import PostDeleteButton from '@/app/components/PostDeleteButton'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog using NextJS and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
