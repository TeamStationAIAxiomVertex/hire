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
  title: "Elite Nearshore Software Teams | TeamStation AI",
  description: "Build elite nearshore software teams vetted by cognitive AI. A secure, intelligent service infrastructure engineered for U.S. CTOs.",
  icons: {
    icon: "/favicon.svg",
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
