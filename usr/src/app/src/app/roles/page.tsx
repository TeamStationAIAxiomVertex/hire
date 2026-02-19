/** @Spec

Feature: Engineering Roles Hub
Type: page
Route: /roles
Description: Displays a grid of all engineering role categories, linking to dedicated pages for each.
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ ≥6 verified internal links
✅ Valid canonical + JSON-LD schema
✅ Included in sitemap.xml */

import Link from "next/link";
import { Metadata } from "next";
import { categories } from "@/lib/categories";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SchemaInjector } from "@/components/SchemaInjector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Engineering Roles | Vetted Nearshore Talent | TeamStation AI",
    description:
    "Explore elite nearshore engineering roles including Frontend, Backend, DevOps, Data & AI, and more. Find AI-vetted experts for your team.",
  };

const rolesSchema = {
   "@context": "https://schema.org",
   "@type": "ItemList",
   "name": "Engineering Role Categories",
   "itemListOrder": "http://schema.org/ItemListOrderAscending",
   "itemListElement": [
     {"@type":"ListItem","position":1,"item":{"@type":"Service","name":"Frontend & Web","url":"/roles/frontend-web"}},
     {"@type":"ListItem","position":2,"item":{"@type":"Service","name":"Backend & APIs","url":"/roles/backend-services"}},
     {"@type":"ListItem","position":3,"item":{"@type":"Service","name":"DevOps & Cloud","url":"/roles/devops-cloud"}},
     {"@type":"ListItem","position":4,"item":{"@type":"Service","name":"Data & AI","url":"/roles/data-ai"}},
     {"@type":"ListItem","position":5,"item":{"@type":"Service","name":"Salesforce Ecosystem","url":"/roles/salesforce-ecosystem"}},
     {"@type":"ListItem","position":6,"item":{"@type":"Service","name":"SAP Ecosystem","url":"/roles/sap-ecosystem"}},
     {"@type":"ListItem","position":7,"item":{"@type":"Service","name":"Microsoft Ecosystem","url":"/roles/microsoft-ecosystem"}},
     {"@type":"ListItem","position":8,"item":{"@type":"Service","name":"Oracle Ecosystem","url":"/roles/oracle-ecosystem"}},
     {"@type": "ListItem", "position": 9, "item": { "@type": "Service", "name": "Databases", "url": "/roles/databases"}},
     {"@type":"ListItem","position":10,"item":{"@type":"Service","name":"QA & Security","url":"/roles/qa-security"}},
     {"@type":"ListItem","position":11,"item":{"@type":"Service","name":"Architecture & Integrations","url":"/roles/architecture-integrations"}},
     {"@type":"ListItem","position":12,"item":{"@type":"Service","name":"Mobile","url":"/roles/mobile"}},
     {"@type":"ListItem","position":13,"item":{"@type":"Service","name":"Vetting & Cognitive AI","url":"/roles/vetted-talent"}},
   ]
};

 const faqs = [
    { q: "How fast can we start?", a: "Most teams see shortlists in 72–96 hours and offers in ~9 days." },
    { q: "What seniorities are available?", a: "Senior, Staff, Principal, and Fractional Architecture." },
    { q: "Do you replace if a fit isn’t right?", a: "Yes—alignment guarantee with fast backfills." },
    { q: "How is Axiom Cortex different from code tests?", a: "We evaluate reasoning, collaboration, and trade-off intelligence—not trivia recall." },
 ];


export default function RolesPage() {
    return (
    <>
    <SchemaInjector schema={rolesSchema} />
    <main className="container mx-auto px-4 py-12 max-w-screen-xl">
        <header className="text-center mb-16">
            <div className="relative rounded-xl border border-border p-8 md:p-12
             bg-[radial-gradient(80%_60%_at_50%_0%,rgba(138,180,255,0.1),transparent_70%)]">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tighter text-text">
                    Engineering Role Categories
                </h1>
                <p className="text-muted text-lg max-w-3xl mx-auto">
                  Build roles that think together. From AI systems engineers to React experts, every hire is mapped to cognitive and operational DNA for optimal nearshore velocity.
                </p>
                <p className="text-muted text-base max-w-3xl mx-auto mt-4">
                  Build cognitive-aligned nearshore teams in Latin America. Each engineering role — frontend, backend, DevOps, data, or platform — is selected not by résumé but by reasoning. TeamStation AI identifies how each engineer thinks, ensuring they integrate with your architecture from day one.
                </p>
            </div>
        </header>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="text-2xl font-semibold text-text flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-primary" /> Cognitive Architecture ➜ Teams that Think Together
          </h2>
          <p className="mt-4 text-muted max-w-3xl leading-relaxed">
            At TeamStation, roles form part of a distributed cognitive network. 
            Each function — from UI design to cloud engineering — is modeled for reasoning compatibility. 
            We measure not just skill, but the mental patterns that define how engineers solve, collaborate, and adapt.
          </p>
          <ul className="list-disc pl-6 mt-4 text-sm text-muted space-y-2">
            <li><strong>Reduced Cognitive Friction:</strong> Balanced reasoning modes lower iteration latency.</li>
            <li><strong>Team Reasoning Mesh:</strong> Engineers with complementary cognitive grammars reduce decision collisions.</li>
            <li><strong>Operational Throughput:</strong> Cognitive calibration increases delivery velocity by 42% after sprint three.</li>
          </ul>
        </section>

        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-text mb-4">Engineering Archetypes for the AI Era</h2>
            <p className="text-muted text-center max-w-3xl mx-auto">
              Explore the cognitive role families below. Each one is mapped to reasoning archetypes that power composable nearshore pods — optimized for reliability, adaptability, and high-signal collaboration.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link href={`/roles/${category.slug}`} key={category.slug} className="group">
                            <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col hover:border-primary/50 bg-bg-elev">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="p-2 rounded-lg bg-bg text-primary">
                                                <Icon className="w-6 h-6" />
                                            </span>
                                            <CardTitle className="font-semibold text-xl">{category.name}</CardTitle>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-muted transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription>{category.summary}</CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </section>

        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl font-semibold text-text flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" /> Proof ➜ Quantifiable Precision
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-bg-elev border p-4">
              <CardHeader>
                <CardTitle className="text-lg text-text">9-Day Time-to-Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted">Automated vetting pipelines deliver fully evaluated candidates in under 10 days.</p>
              </CardContent>
            </Card>
            <Card className="bg-bg-elev border p-4">
              <CardHeader>
                <CardTitle className="text-lg text-text">95% Day-One Tool Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted">All engineers are CI/CD provisioned with full environment compatibility verified.</p>
              </CardContent>
            </Card>
            <Card className="bg-bg-elev border p-4">
              <CardHeader>
                <CardTitle className="text-lg text-text">42% Delivery Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted">Cognitive calibration across pods enables faster alignment and fewer regressions.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center border-t pt-16 mt-16">
            <div className="relative rounded-xl border border-border p-8 md:p-12 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(138,180,255,0.1),transparent_70%)]">
                <h2 className="font-semibold text-3xl mb-4 tracking-tighter">Elite, Not Top 5%</h2>
                <p className="text-muted text-lg max-w-3xl mx-auto">Most platforms chase test scores. We map cognition under pressure—who leads, adapts, and multiplies team intelligence. That’s the difference between fast and elite.</p>
            </div>
        </section>
        
        <section className="mt-20 border-t border-border pt-12 text-center max-w-3xl mx-auto">
            <p className="text-muted leading-7">
                “A U.S. healthtech scaled its product platform using LATAM engineers from TeamStation.
                After cognitive calibration, average sprint velocity improved 38%, and onboarding dropped from 18 to 9 days.
                The key wasn’t better code — it was better alignment of reasoning modes.”
            </p>
        </section>

        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full mt-8 border-t border-border">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-lg font-semibold text-left hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="item-4">
              <AccordionTrigger>How does cognitive alignment improve delivery?</AccordionTrigger>
              <AccordionContent>
                Cognitive alignment creates predictable reasoning under uncertainty. 
                This means teams adapt faster to evolving requirements without losing velocity or code integrity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What differentiates TeamStation from BairesDev or Toptal?</AccordionTrigger>
              <AccordionContent>
                Traditional vendors staff based on skills. TeamStation builds teams on cognitive fit — ensuring synergy, retention, and measurable throughput.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center pt-16 mt-8">
             <h3 className="font-semibold text-2xl mb-6">
                    Explore Our Platform
                </h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link href="/hire/react" className="text-primary hover:underline">Hire React Developers</Link>
                <Link href="/hire/python" className="text-primary hover:underline">Hire Python Developers</Link>
                <Link href="/hire/nextjs" className="text-primary hover:underline">Hire Next.js Developers</Link>
                <Link href="/roles/vetted-talent" className="text-primary hover:underline">Vetting & Cognitive AI</Link>
                <Link href="/playbook/nearshore-vs-offshore" className="text-primary hover:underline">Nearshore vs Offshore (Playbook)</Link>
            </div>
             <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mt-4">
                 <Link href="/about" className="text-muted hover:text-primary hover:underline">About Us</Link>
                 <span className="text-muted">•</span>
                <Link href="/contact" className="text-muted hover:text-primary hover:underline">Contact</Link>
                 <span className="text-muted">•</span>
                <Link href="/sitemap" className="text-muted hover:text-primary hover:underline">Full Sitemap</Link>
            </div>
             <div className="mt-12 text-center max-w-3xl mx-auto">
                <h2 className="font-semibold text-3xl mb-4 tracking-tighter">Build teams that think together.</h2>
                <p className="text-muted text-lg">TeamStation’s AI doesn’t just find developers — it assembles cognitive ecosystems. Talk to a Co-Pilot and see how precision hiring becomes a competitive advantage.</p>
             </div>
        </section>
    </main>
    </>
  );
}
