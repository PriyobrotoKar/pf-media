import type { Metadata } from "next";
import { Open_Sans, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const opensans = Open_Sans({
  subsets: ["latin"],
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

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
      <body className={`${opensans.className} font-display antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
