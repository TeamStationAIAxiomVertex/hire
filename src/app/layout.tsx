/** @Spec

Feature: Root Layout
Type: page
Route: /
Description: The root layout for the entire application, including metadata, fonts, and global components.
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ ≥6 verified internal links
✅ Valid canonical + JSON-LD schema
✅ Included in sitemap.xml */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ClientLayout from "./ClientLayout";
import { Suspense } from "react";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hire.teamstation.dev"),
  title: "TeamStation AI: Elite Nearshore Software & AI Talent",
  description: "Hire elite nearshore engineers vetted by cognitive AI. We build high-performance software, data, and AI teams for US companies. Scale smarter.",
  icons: {
    icon: "https://builtin.com/sites/www.builtin.com/files/2025-01/TS%20new%20logo%20concept%202024.png",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} dark font-body`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hire.teamstation.dev" />
      </head>
      <body className="antialiased text-[15px] leading-7">
        <div className="flex min-h-screen flex-col">
          <Header />
          <Suspense>
            <ClientLayout />
          </Suspense>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
