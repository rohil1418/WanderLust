import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/ui/Navbar";
import Footer from "@/shared/ui/Footer";

export const metadata: Metadata = {
  title: "WanderLust",
  description: "Full-Stack Accommodation Booking Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}