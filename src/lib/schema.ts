export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://teamstation.dev/#organization",
      "name": "TeamStation AI",
      "url": "https://teamstation.dev",
      "logo": { "@type": "ImageObject", "url": "https://builtin.com/sites/www.builtin.com/files/2025-01/TS%20new%20logo%20concept%202024.png" },
      "foundingDate": "2023-01-01",
      "description": "TeamStation AI builds elite nearshore software teams vetted by cognitive AI modeling for U.S. CTOs seeking efficiency and security.",
      "sameAs": [
        "https://www.linkedin.com/company/teamstation-ai/",
        "https://github.com/teamstation-ai",
        "https://cto.teamstation.dev"
      ],
      "areaServed": { "@type": "Country", "name": "United States" },
      "brand": { "@id": "https://teamstation.dev/#brand-axiom-cortex" },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "platform@teamstation.dev",
          "areaServed": "US",
          "availableLanguage": "en"
        }
      ]
    },
    {
      "@type": "Brand",
      "@id": "https://teamstation.dev/#brand-axiom-cortex",
      "name": "Axiom Cortex™ AI",
      "url": "https://hire.teamstation.dev/roles/vetted-talent"
    },
    {
      "@type": "WebSite",
      "@id": "https://hire.teamstation.dev/#website",
      "url": "https://hire.teamstation.dev",
      "name": "TeamStation AI: Elite Nearshore Software & AI Talent",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://teamstation.dev/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://hire.teamstation.dev/sitemap?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://hire.teamstation.dev/#webpage",
      "url": "https://hire.teamstation.dev",
      "name": "TeamStation AI | Elite Nearshore Engineering Teams",
      "headline": "Elite Nearshore Teams, Vetted by Cognitive AI",
      "description": "Build elite nearshore software teams vetted by our Axiom Cortex™ cognitive AI. We deliver top-tier talent in React, Python, Java, AI/ML, and more.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://hire.teamstation.dev/#website" },
      "about": { "@id": "https://teamstation.dev/#organization" },
      "mainEntityOfPage": { "@id": "https://hire.teamstation.dev/#website" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": "https://hire.teamstation.dev/og-image.png" }
      // datePublished / dateModified → inject client-side to avoid hydration drift
    },
    {
      "@type": "Service",
      "@id": "https://hire.teamstation.dev/#service",
      "name": "Nearshore Software Development for U.S. CTOs",
      "serviceType": "IT Staff Augmentation",
      "provider": { "@id": "https://teamstation.dev/#organization" },
      "brand": { "@id": "https://teamstation.dev/#brand-axiom-cortex" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "offers": {
        "@type": "Offer",
        "url": "https://hire.teamstation.dev/contact",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};
