import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "Track IP addresses and their locations",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${rubikSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
