
'use client';

/** @Spec
Feature: Footer Component
Location: src/components/footer.tsx
Description: Global footer with navigation + internal link mesh
Acceptance:
✅ No category lookups
✅ ≥6 internal links
✅ Uses /hire/[slug] canonical routes
✅ Compiles cleanly */

import Link from "next/link";
import { Logo } from "@/components/logo";
import { getAllTech } from "@/lib/dataModel";
import { categories } from "@/lib/categories";
import type { TechEntry } from "@/data/tech";
import { getRoleVariant } from "@/lib/seoUtils";
import { corporateLinks } from "@/lib/corporateLinks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, CheckCircle, Globe } from "lucide-react";
import { productCategory } from "@/lib/data/product";
import DynamicIcon from "./DynamicIcon";


const countryData = [
    { name: "Mexico", description: "Leverage the largest and most mature nearshore market, with deep expertise in enterprise software and a huge pool of bilingual engineers.", fact: "3-hour overlap with PST/CST/EST", url: "https://cto.teamstation.dev/hire/by-country/mexico" },
    { name: "Colombia", description: "Tap into the vibrant ecosystems of Bogotá and Medellín, known for their adaptable workforce and strong government support for tech.", fact: "Top 5 in LATAM English proficiency", url: "https://cto.teamstation.dev/hire/by-country/colombia" },
    { name: "Brazil", description: "Access the largest talent pool in LATAM, with world-class expertise in FinTech, Data Science, and complex backend systems.", fact: "LATAM's #1 talent market by volume", url: "https://cto.teamstation.dev/hire/by-country/brazil" },
    { name: "Argentina", description: "Benefit from a mature market with exceptionally high English proficiency and a deep pool of senior and lead-level engineers.", fact: "Highest English proficiency in LATAM", url: "https://cto.teamstation.dev/hire/by-country/argentina" },
    { name: "Chile", description: "Engage with one of the most stable and economically advanced countries in the region, with a strong emphasis on engineering and data science.", fact: "Regional leader in B2B/financial tech", url: "https://cto.teamstation.dev/hire/by-country/chile" },
    { name: "Peru", description: "Tap into a rising tech scene with a growing pool of skilled mobile and web developers known for their strong work ethic.", fact: "Strong cost/quality ratio", url: "https://cto.teamstation.dev/hire/by-country/peru" },
    { name: "Costa Rica", description: "Hire from a major hub for U.S. tech companies, with a highly educated, bilingual workforce accustomed to enterprise-level expectations.", fact: "Major hub for US tech companies", url: "https://cto.teamstation.dev/hire/by-country/costa-rica" },
    { name: "Uruguay", description: "Access a highly skilled, specialized talent pool in one of LATAM's most digitally advanced countries, with excellent infrastructure.", fact: "Top software exporter per capita", url: "https://cto.teamstation.dev/hire/by-country/uruguay" },
    { name: "Ecuador", description: "Explore an emerging talent market with a growing number of skilled engineers and a strong desire to work with U.S. companies.", fact: "Significant cost advantage", url: "https://cto.teamstation.dev/hire/by-country/ecuador" },
    { name: "Guatemala", description: "Leverage a growing pool of young, motivated engineers in a market with strong U.S. cultural ties and a focus on service industries.", fact: "Central Time Zone alignment", url: "https://cto.teamstation.dev/hire/by-country/guatemala" },
];


export function Footer() {
  const allTech = getAllTech();
  const mainCategories = [...categories, productCategory].filter(c => c.slug !== 'vetted-talent');

  const groupedTech = allTech.reduce(
    (acc, tech) => {
      const { categorySlug } = tech;
      if (!acc[categorySlug]) {
        acc[categorySlug] = [];
      }
      acc[categorySlug].push(tech);
      return acc;
    },
    {} as Record<string, TechEntry[]>,
  );

  return (
    <footer className="mt-24 border-t py-16 bg-bg-elev/30">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="lg:grid-cols-12">
          {/* Brand & Company Links */}
          <div className="space-y-4">
             <div className="space-y-2">
                <Link href="/" className="flex items-center gap-2">
                  <Logo className="w-8 h-8 text-primary" />
                  <span className="font-headline font-bold text-lg">TeamStation AI</span>
                </Link>
                <p className="text-sm text-muted max-w-xs">
                  The integrated platform for building and scaling elite nearshore engineering teams.
                </p>
             </div>
             <address className="text-xs text-muted not-italic space-y-1">
                <p>One Seaport Square, 77 Sleeper St</p>
                <p>5830 E 2nd St, Ste 7000 #14687</p>
                <p>Boston, MA 02210</p>
             </address>
              <div className="pt-4 mt-4 border-t border-border">
                <h4 className="font-semibold text-base mb-4">
                    Company
                </h4>
                 <div className="flex flex-wrap gap-2">
                  {[
                    { title: 'All Nearshore Engineering Roles', url: '/roles' },
                    ...corporateLinks
                  ].map((link) => (
                    <Button asChild variant="outline" size="sm" key={link.title}>
                      <Link
                        href={link.url}
                        className="text-xs"
                        target={link.url.startsWith('http') ? "_blank" : "_self"}
                        rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                      >
                        {link.title}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16">
            <div className="space-y-8">
              {mainCategories.map(category => {
                  const techs = groupedTech[category.slug] || [];
                  if (techs.length === 0) return null;
                  return (
                    <div key={category.slug} className="border-t pt-4">
                      <h4 className="font-semibold text-base mb-4 flex items-center gap-2">
                          <DynamicIcon name={category.icon} className="w-4 h-4 text-primary" />
                          {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          {techs.map((tech) => {
                            const roleVariant = getRoleVariant(tech.name, tech.categorySlug);
                            const phrase = `Hire Elite ${tech.name} ${roleVariant}`;
                            return (
                              <Link
                                key={tech.slug}
                                href={`/hire/${tech.slug}`}
                                title={`${phrase} for Nearshore Software Development | TeamStation AI`}
                                className="text-muted hover:text-primary hover:underline"
                              >
                                {phrase}
                              </Link>
                            );
                          })}
                      </div>
                  </div>
                  )
                })}
            </div>
          </div>
        </div>

        <section className="mt-20 pt-16 border-t">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-semibold text-3xl tracking-tight mb-2">Need US time-zone overlap with a massive talent pool?</h3>
            <p className="text-muted">Explore our core nearshore markets—each vetted for engineering excellence, English proficiency, and cultural alignment with U.S. teams.</p>
            <Button asChild variant="outline" className="mt-4">
                <Link href="https://cto.teamstation.dev/hire/by-country" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit the Hire by Country Hub
                </Link>
            </Button>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryData.map(country => (
                <Card key={country.name} className="flex flex-col">
                    <CardHeader>
                        <CardTitle>{country.name}</CardTitle>
                        <CardDescription>{country.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <div className="flex items-center gap-2 text-xs text-muted">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{country.fact}</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                         <Button asChild variant="secondary" className="w-full group">
                            <Link href={country.url} target="_blank" rel="noopener noreferrer">
                                Explore Talent in {country.name}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
          </div>
        </section>


        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center text-sm text-muted">
          <div className="order-2 sm:order-1 mt-4 sm:mt-0">
            © {new Date().getFullYear()} TeamStation AI. All rights reserved.
          </div>
          <div className="order-1 sm:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/sitemap" className="hover:underline">Full Sitemap</Link>
            <Link href="/legal/privacy" className="hover:underline">Privacy</Link>
            <Link href="/legal/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
