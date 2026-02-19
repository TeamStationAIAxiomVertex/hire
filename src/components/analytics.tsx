/** @Spec

Feature: Analytics
Type: component
Route: N/A
Description: Provides Google Analytics integration using Next.js's Script component for optimized loading.
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ Uses afterInteractive strategy to defer script loading.
✅ Included in sitemap.xml */
"use client";

import Script from "next/script";

// You can create a .env.local file and add your GA ID there
// NEXT_PUBLIC_GA_ID='G-XXXXXXXXXX'
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-P581EMT096';

export function Analytics() {
  // Don't track in development or if the ID is missing
  if (process.env.NODE_ENV !== "production" || !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="gtm"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="gtm-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
