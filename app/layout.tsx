import type { Metadata } from "next";
import { Cabin, Inter } from "next/font/google";
import "./globals.css";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cabin.className + " bg-black flex justify-center"}>
        <div className="w-3/6">{children}</div>
      </body>
    </html>
  );
}
