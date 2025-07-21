import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "IZUMI Customer Portal",
  description: "Customer portal for IZUMI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
