import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House Hive",
  description: "A Real Estate Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${onest.className} antialiased`}>{children}</body>
    </html>
  );
}
