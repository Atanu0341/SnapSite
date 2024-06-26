import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnapSite",
  description: "Capture the essence of any website with a single URL. Instantly visualize web pages as images, simplifying your browsing experience",
  openGraph:{
    type: "website",
    images: [
      {
        url: "https://postimg.cc/ZBV1Kr8f",
        width: 1200,
        height: 630,
        alt: "SnapSite",
      },
    ],
  }
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
