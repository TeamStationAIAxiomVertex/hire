/** @Spec
Feature: [Feature Name]
Type: [page|component|script|lib]
Route: [Exact Route]
Description: [Concise summary]
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ ≥6 verified internal links
✅ Valid canonical + JSON-LD schema
✅ Included in sitemap.xml */
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SchemaInjector } from '@/components/SchemaInjector';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { categories } from '@/lib/categories';
import { homePageSchema } from '@/lib/schema';
import DynamicIcon from '@/components/DynamicIcon';
import data from '@/content/pages_data/hire/landing.json';

export const metadata: Metadata = {
  title: "TeamStation AI | Elite Nearshore Engineering Teams",
  description: "Build elite nearshore software teams vetted by our Axiom Cortex™ cognitive AI. We deliver top-tier talent in React, Python, Java, AI/ML, and more.",
};

const generateFaqSchema = (faqItems: any[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
});

const augmentedHomePageSchema = {
  ...homePageSchema,
  "@graph": [
    ...homePageSchema["@graph"],
    {
      "@type": "TechArticle",
      "headline": "AI-Driven Nearshore Engineering Alignment",
      "description": "TeamStation AI transforms nearshore staffing into cognitive engineering architecture, using AI to vet for reasoning depth and team alignment over simple coding skills.",
      "keywords": "nearshore AI team building, cognitive alignment, AI vetting, LATAM engineers, high-performance teams",
      "author": { "@id": "https://teamstation.dev/#organization" },
      "publisher": { "@id": "https://teamstation.dev/#organization" }
    }
  ]
};

const proofIcons: { [key: string]: string } = {
  "95% day-one tool readiness": "UserCheck",
  "9-day time-to-offer": "CalendarDays",
  "2.6M LATAM profiles": "Globe",
  "90% project retention at 6 months": "ShieldCheck",
};

const hiringFlow = [
    { step: 1, title: "Book a Demo Call", description: "See the live console: jobs, short-lists, devices/MDM, compliance, KPIs.", artifact: "Demo environment + sample dashboards." },
    { step: 2, title: "Platform Onboarding", description: "Create your org, users, roles, and legal entity; connect tools (Slack/Jira/GitHub/IdP).", artifact: "Org workspace, SSO, billing & DPA on file." },
    { step: 3, title: "Add Jobs & Calibrate Success", description: "Define stack, level (L1–L4), ownership scope, and the 90-day outcome you need.", artifact: "Role profile + 'Success at 90 Days' spec." },
    { step: 4, title: "Country Targeting & Market Bands", description: "Pick LATAM cities; align salary bands, benefits norms, and hiring constraints.", artifact: "Country shortlist + comp/benefit bands." },
    { step: 5, title: "Cognitive AI Sourcing & Short-List", description: "Our Cognitive AI is always-on sourcing; candidates are scored against your role profile to find the ideal mental shape.", artifact: "5–8 candidate short-list (relevance ≥ 85%)." },
    { step: 6, title: "Technical Evaluation (Bias-Aware)", description: "A human expert conducts a structured, evidence-based interview. Our Cognitive AI then synthesizes the conversation to generate an 'Evidence Locker' with explainable scoring.", artifact: "Scorecards + hiring signal; mismatch rate ≤ 10%." },
    { step: 7, title: "Client Interview Loop", description: "Calibrated panel agenda; consolidate notes and go/no-go in the platform.", artifact: "Finalist(s) + reference checks." },
    { step: 8, title: "Offer, EOR & Compliance", description: "We issue enforceable contracts, handle payroll, taxes, and statutory benefits.", artifact: "Signed offer; compliant start date set." },
    { step: 9, title: "Devices, MDM & Day-1 Access", description: "Procure/ship device, enroll MDM, verify tool/account access before Day-1.", artifact: "Device MTPD ≤ 5 days, MDM enrollment ≥ 99%." },
    { step: 10, title: "Day-1 to First PR + 30-60-90", description: "First ticket assigned; pair intro; measurable ramp to autonomy.", artifact: "Time-to-First-PR 7–14 days, 90-day retention ≥ 96%." }
];

const securityGuarantees = [
    { title: "EOR & Country Compliance", concern: "Worried about navigating complex local labor laws?", solution: "Contracts, payroll, statutory benefits, PTO, taxes—fully compliant per country and contractually guaranteed in the SOW.", proof: "Zero compliance overhead" },
    { title: "Device Security & MDM", concern: "Exposed by insecure remote laptops?", solution: "Encrypted endpoints, provisioning, auto-patching, 24/7 monitoring, and remote lock/wipe, all governed by the MSA.", proof: "MDM enrollment ≥99% (24h)" },
    { title: "Insurance & IP Protection", concern: "Carrying all the liability for vendor mistakes?", solution: "Cyber/E&O coverage, NDAs & DPAs, and work-for-hire IP assignment, all defined in the Master Services Agreement.", proof: "Liability shield included" },
    { title: "Background & Identity Checks", concern: "Unsure who you’re really hiring?", solution: "KYC, criminal record, employment & education verification, with results stored in an auditable evidence locker.", proof: "100% auditable record" }
];

const recognitions = [
    { title: "Market Leader Award", description: "Recognized for Cognitive AI innovation in nearshore IT delivery." },
    { title: "Service Excellence", description: "Selected for service excellence and trust signals." },
    { title: "Peer-Reviewed Research", description: "Scientific papers on Cognitive AI in talent evaluation and performance." },
    { title: "Field-Proven", description: "2.6M+ profiles, ≈9-day TTO, 96% retention." }
];


export default async function LandingPage() {
  const faqSchema = generateFaqSchema(data.faq);

  return (
    <div className="bg-bg text-text">
      <SchemaInjector schema={augmentedHomePageSchema} />
      <SchemaInjector schema={faqSchema} />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-16 md:space-y-24 py-16 md:py-24">
        
        <section className="text-center max-w-4xl mx-auto">
           <div className="relative rounded-xl border border-border p-8 md:p-12
             bg-[radial-gradient(80%_60%_at_50%_0%,rgba(138,180,255,0.1),transparent_70%)]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text">Elite Nearshore Teams, Vetted by Cognitive AI</h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-muted">{data.hero.subline}</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href={data.hero.primaryCta.href}>{data.hero.primaryCta.label}</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="w-full sm:w-auto hover:bg-accent/20 hover:text-text">
                   <Link href={data.hero.secondaryCta.href}>{data.hero.secondaryCta.label}</Link>
                </Button>
              </div>
           </div>
        </section>

        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 p-8 border border-border rounded-xl bg-bg-elev">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-primary">The Pain</h3>
            <p className="mt-2 text-lg text-muted">{data.psp.pain}</p>
            <h3 className="mt-6 font-semibold text-primary">The Solution</h3>
            <p className="mt-2 text-lg text-text">{data.psp.solution}</p>
          </div>
          <div className="border-t border-border md:border-t-0 md:border-l md:pl-8 pt-8 md:pt-0">
            <h3 className="font-semibold text-primary">The Proof</h3>
            <ul className="mt-4 space-y-3">
              {data.psp.proof.map((item: string) => {
                const iconName = proofIcons[item] || 'Check';
                return (
                  <li key={item} className="flex items-center gap-3">
                    <DynamicIcon name={iconName} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">The Axiom Cortex Engine</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted">
            Our platform is not a job board. It is an intelligent infrastructure layer powered by Axiom Cortex, our proprietary cognitive vetting engine. It moves beyond keyword matching to map the deep cognitive attributes that define elite engineering talent.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-bg-elev border-border">
              <CardHeader>
                <DynamicIcon name="BrainCircuit" className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Cognitive Graph Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">We map reasoning, problem-decomposition, and systems-thinking patterns across 2.6M+ LATAM engineers. This allows us to predict team fit and performance with 92% accuracy.</p>
              </CardContent>
            </Card>
            <Card className="bg-bg-elev border-border">
              <CardHeader>
                <DynamicIcon name="Target" className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Predictive Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Axiom Cortex evaluates how candidates handle ambiguity and trade-offs under pressure. The result is a 90% engineer retention rate at 12 months and 42% faster onboarding to full productivity.</p>
              </CardContent>
            </Card>
            <Card className="bg-bg-elev border-border">
              <CardHeader>
                <DynamicIcon name="Scaling" className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Engineered Team Topologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">We do not staff roles; we compose high-throughput cognitive systems. By balancing strategic, analytical, and creative reasoning types, our teams deliver 1.9x faster under uncertainty.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">Nearshore IT Co-Pilot Platform</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted">This isn’t a checklist; it’s an engineered system. Our Nearshore IT Co-Pilot™ provides one accountable workflow for hiring, compliance, and secure devices, governed by a single MSA/SOW.</p>
            <div className="mt-4 text-sm font-semibold text-primary">Time-to-Offer ≈ 9 days • Day-1 Tool Readiness ≥ 95% • First PR in 7–14 days</div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Your Platform-Driven Hiring Flow</h3>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 h-full w-0.5 bg-border -z-10" />

                <div className="space-y-12">
                {hiringFlow.map(item => (
                    <div key={item.step} className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">{item.step}</div>
                        <div className="flex-grow">
                            <h4 className="font-semibold text-lg text-text">{item.title}</h4>
                            <p className="text-muted mt-1">{item.description}</p>
                            <div className="mt-2 flex items-center gap-2 text-xs text-muted/80">
                                <DynamicIcon name="FileText" className="w-3.5 h-3.5" />
                                <span>Artifact: {item.artifact}</span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
          </div>

           <div className="mt-16 pt-12 border-t border-border">
             <h3 className="text-2xl font-semibold text-center mb-8">Security, Compliance & Liability — Under One SLA</h3>
             <p className="text-center text-muted max-w-2xl mx-auto mb-10">We carry the risk, contractually. You keep the velocity.</p>
             <div className="grid md:grid-cols-2 gap-6">
                {securityGuarantees.map(item => (
                    <Card key={item.title} className="bg-bg-elev border-border">
                        <CardHeader>
                            <p className="text-sm font-semibold text-amber-400">{item.concern}</p>
                            <CardTitle className="tracking-tight font-semibold text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted">{item.solution}</p>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
                                <DynamicIcon name="CheckSquare" className="w-4 h-4" />
                                <span>Proof: {item.proof}</span>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
             </div>
           </div>

            <div className="mt-16 pt-12 border-t border-border">
             <h3 className="text-2xl font-semibold text-center mb-8">Recognized. Research-Backed. Field-Proven.</h3>
             <p className="text-center text-muted max-w-2xl mx-auto mb-10">Independent awards and peer-reviewed research underpin the platform that powers your LATAM teams.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {recognitions.map(item => (
                    <div key={item.title}>
                        <DynamicIcon name="Award" className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h4 className="font-semibold text-text">{item.title}</h4>
                        <p className="text-xs text-muted mt-1">{item.description}</p>
                    </div>
                ))}
             </div>
           </div>
        </section>
        
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">{data.contrastSection.title}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {data.contrastSection.body.map((item: { icon: string; phrase: string }, i: number) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-border rounded-xl bg-bg-elev">
                <DynamicIcon name={item.icon} className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted">{item.phrase}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          {data.testimonials.map((testimonial: any, i: number) => (
             <blockquote key={i} className="text-center p-8 border-l-4 border-primary bg-bg-elev rounded-r-lg">
                <DynamicIcon name="Quote" className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-xl md:text-2xl font-medium italic">"{testimonial.quote}"</p>
                <footer className="mt-4 text-sm text-muted">- {testimonial.attribution}</footer>
            </blockquote>
          ))}
        </section>
        
        <section>
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">Stop Hiring Resumes. Start Hiring for Cognitive Fit.</h2>
            <p className="mt-4 text-lg text-muted">
              Our proprietary Cognitive AI driven process identifies the elite engineers who solve your hardest problems, not just complete tickets. This is how you de-risk hiring and accelerate your roadmap.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(c => c.slug !== 'vetted-talent').map((category) => {
                return (
                  <Link href={`/roles/${category.slug}`} key={category.slug} className="group">
                    <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col hover:border-primary/50 bg-bg-elev">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-lg bg-bg text-primary">
                                        <DynamicIcon name={category.icon} className="w-6 h-6" />
                                    </span>
                                    <CardTitle className="tracking-tight font-semibold text-xl text-text">{category.name}</CardTitle>
                                </div>
                                <DynamicIcon name="ArrowRight" className="w-5 h-5 text-muted transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </CardHeader>
                         <CardContent className="flex-grow">
                            <CardDescription className="text-sm text-muted">
                              {category.pains[0].solution}
                            </CardDescription>
                        </CardContent>
                    </Card>
                  </Link>
                )
            })}
          </div>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-text">Cognitive Infrastructure ➜ The New Nearshore</h2>
              <p className="text-muted leading-7">
                Traditional nearshore is a logistics operation. It moves bodies from one geography to another. This model is broken because it assumes talent is a commodity. It is not.
              </p>
              <p className="text-muted leading-7">
                TeamStation AI was built on this principle. We are not a staffing firm; we are an intelligent infrastructure platform that engineers high-performance teams through deep cognitive vetting. This is the difference between staff augmentation and strategic team engineering.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="bg-bg border-destructive/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <DynamicIcon name="ThumbsDown" className="w-6 h-6 text-destructive" />
                    <span>The Old Way: Staff Augmentation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted">A numbers game of resumes and keyword matching that creates management overhead and delivery risk.</p>
                </CardContent>
              </Card>
              <Card className="bg-bg-elev border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <DynamicIcon name="ThumbsUp" className="w-6 h-6 text-green-500" />
                    <span>The New Way: Delivery Intelligence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted">A platform that delivers fully-formed, cognitively-aligned engineering pods with transparent performance metrics and predictable output.</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <DynamicIcon name="Check" className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Predictable Velocity:</strong> Hit target velocity 42% faster.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <DynamicIcon name="Check" className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Reduced Overhead:</strong> Managed pods free your core leadership.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <DynamicIcon name="Check" className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Mitigated Risk:</strong> Cognitive alignment reduces mis-hires by over 40%.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-text">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full mt-8 border-t border-border">
            {data.faq.map((item: any, i: number) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-lg font-semibold text-left hover:no-underline text-text">{item.q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">{data.finalCta.headline}</h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">{data.finalCta.subline}</p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href={data.finalCta.primaryCta.href}>{data.finalCta.primaryCta.label}</Link>
            </Button>
          </div>
        </section>

        <section className="max-w-4xl mx-auto pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-center mb-6 text-muted">Explore Further</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {data.internalLinks.map((link: any) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 hover:underline p-2 rounded-md focus:outline-none focus-visible:ring-2 ring-ring ring-offset-bg"
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="/compare/bairesdev"
                className="text-primary hover:text-primary/80 hover:underline p-2 rounded-md focus:outline-none focus-visible:ring-2 ring-ring ring-offset-bg"
              >
                vs. BairesDev
              </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
