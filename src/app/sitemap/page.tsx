import Link from "next/link";
import { Metadata } from "next";
import { getAllTech } from "@/lib/dataModel";
import { categories } from "@/lib/categories";
import { Button } from "@/components/ui/button";
import { SchemaInjector } from "@/components/SchemaInjector";
import { productCategory } from "@/lib/data/product";
import DynamicIcon from "@/components/DynamicIcon";

export const metadata: Metadata = {
  title: "Sitemap | Nearshore Engineering Roles | TeamStation AI",
  description: "Explore all nearshore engineering specializations available through TeamStation AI. Find and hire elite, AI-vetted developers for React, Python, Java, and more.",
    alternates: {
        canonical: "/sitemap",
    },
};

export default function SitemapPage() {
  const techs = getAllTech();
  const allCategories = [...categories, productCategory];
  
  const groupedTech = techs.reduce((acc, tech) => {
      const catSlug = tech.categorySlug;
      if (!acc[catSlug]) {
          const category = allCategories.find(c => c.slug === catSlug);
          acc[catSlug] = {
              name: category?.name || "Unknown",
              icon: category?.icon || "Code",
              techs: []
          };
      }
      acc[catSlug].techs.push(tech);
      return acc;
  }, {} as Record<string, {name: string, icon: string, techs: typeof techs}>)

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Sitemap | Hire Elite Nearshore Software Developers",
    "description": "Explore all nearshore engineering specializations and company pages available on TeamStation AI.",
    "url": "https://hire.teamstation.dev/sitemap",
     "mainEntity": {
        "@type": "ItemList",
        "itemListElement": techs.map((tech, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "WebPage",
                "name": `Hire ${tech.name} Developers`,
                "url": `https://hire.teamstation.dev/hire/${tech.slug}`
            }
        }))
    }
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-screen-xl">
      <SchemaInjector schema={pageSchema} />
      <header className="text-center mb-16">
        <h1 className="text-3xl font-semibold mb-4 tracking-tighter">
            TeamStation AI Sitemap: Your Guide to Elite Nearshore Talent
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-center text-muted leading-7">
            <p>
                Welcome to the central index of TeamStation AI's specialized <Link href="/nearshore-software-development" className="text-primary/80 hover:underline">nearshore software development</Link> talent. This page provides a comprehensive overview of every technology, framework, and architectural discipline for which we source, vet, and place elite engineers. Unlike traditional staffing agencies that rely on keyword-matching and unverified resumes, TeamStation AI is an intelligent platform built on a single, powerful premise: true engineering skill is measurable, predictable, and quantifiable.
            </p>
            <p>
                Use this sitemap to explore our capabilities and discover how our AI-driven approach can help you build a higher-performing, more cost-effective engineering team.
            </p>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
            {Object.keys(groupedTech).map(slug => {
                const categoryData = groupedTech[slug];
                if (!categoryData || categoryData.techs.length === 0) return null;

                const category = allCategories.find(c => c.slug === slug);
                if (!category) return null;

                return (
                    <section key={slug}>
                        <div className="mb-6 border-b pb-4">
                            <h2 className="text-2xl font-semibold flex items-center gap-3">
                                <DynamicIcon name={categoryData.icon} className="w-6 h-6 text-primary" />
                               <Link href={`/roles/${slug}`} className="hover:text-primary transition-colors">{categoryData.name}</Link>
                            </h2>
                             <p className="mt-2 text-sm text-muted">{category.description}</p>
                        </div>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                            {categoryData.techs.map((tech) => (
                            <li key={tech.slug}>
                                <Link
                                href={`/hire/${tech.slug}`}
                                className="text-muted hover:text-primary hover:underline"
                                >
                                {tech.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                )
            })}
        </div>
        <aside className="space-y-8 sticky top-24 self-start">
             <section className="bg-bg-elev border p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                    Company
                </h2>
                <ul className="space-y-3">
                    <li><Link href="/about" className="text-muted hover:text-primary hover:underline">About Us</Link></li>
                    <li><Link href="/contact" className="text-muted hover:text-primary hover:underline">Contact</Link></li>
                     <li><Link href="/playbook/nearshore-vs-offshore" className="text-muted hover:text-primary hover:underline">Nearshore vs. Offshore Playbook</Link></li>
                     <li><Link href="/nearshore-software-development" className="text-muted hover:text-primary hover:underline">Nearshore Software Development</Link></li>
                </ul>
            </section>
             <section className="bg-bg-elev border p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                    Legal
                </h2>
                <ul className="space-y-3">
                    <li><Link href="/legal/privacy" className="text-muted hover:text-primary hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/legal/terms" className="text-muted hover:text-primary hover:underline">Terms of Service</Link></li>
                </ul>
            </section>
        </aside>
      </div>

       <section className="text-center py-16 mt-16 border-t">
            <h2 className="font-semibold text-3xl tracking-tighter mb-4">
              Ready to Build a Better Team?
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
              You've seen the breadth of our expertise. Now, experience the depth of our talent. Schedule a no-obligation discovery call to discuss your specific technical needs and learn how TeamStation AI's vetted nearshore engineers can help you achieve your goals faster and more efficiently than ever before.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
        </section>
    </main>
  );
}
