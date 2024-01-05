import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create 1xbet account",
  description:
    "how to create a 1xbet account without a problem, more easy and advanced, and more secure. 100% official account with M300TK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#090c2b] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
