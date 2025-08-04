import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
      <body className={` ${onest.className} antialiased`}>
        <>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </>
      </body>
    </html>
  );
}
