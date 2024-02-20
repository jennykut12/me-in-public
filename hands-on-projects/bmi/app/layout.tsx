import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BMI Calculator",
  description: "Calculator your BMI",
  icons: {
    icon: ["favicon.ico?v=4"],
    apple: ["apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
