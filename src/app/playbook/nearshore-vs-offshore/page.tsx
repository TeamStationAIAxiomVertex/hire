export const dynamic = "force-dynamic";
/** @Spec
* Feature: Nearshore vs. Offshore Playbook Page
* Type: page
* Route: /playbook/nearshore-vs-offshore
* Description: A detailed playbook for CTOs comparing nearshore and offshore software development models.
* Acceptance:
*  - ✅ Compiles without TypeScript errors
*  - ✅ Lints and formats cleanly
*  - ✅ ≥6 verified internal links
*  - ✅ Valid canonical + JSON-LD schema
*  - ✅ Included in sitemap.xml
*/
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SchemaInjector } from '@/components/SchemaInjector';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: "Nearshore vs. Offshore: A CTO’s Guide | TeamStation AI",
    description: "A data-driven playbook for CTOs comparing the total cost of ownership (TCO) and velocity implications of nearshore vs. offshore software development.",
    alternates: {
        canonical: "/playbook/nearshore-vs-offshore",
    },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Nearshore vs. Offshore Software Development: The CTO’s Decision Framework",
  "author": {
    "@type": "Organization",
    "name": "TeamStation AI"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TeamStation AI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://teamstation.dev/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hire.teamstation.dev/playbook/nearshore-vs-offshore"
  }
};

const fivePaths = [
    {
        title: "1. Build (In-House)",
        pain: "Headcount freeze vs critical path.",
        implication: "Extremely high cost, long time-to-hire (60+ days), and significant operational overhead. The 'Vacancy Tax' compounds daily.",
        useWhen: "For deeply proprietary domains and core architectural roles where long-term ownership is non-negotiable.",
        quote: "Can you afford a 3-month delay on your most critical roadmap item?"
    },
    {
        title: "2. Onshore (US Contract)",
        pain: "Fully-loaded cost and scarce supply.",
        implication: "Perfect time-zone overlap but carries brutal budget pressure and the same slow hiring cycle as in-house.",
        useWhen: "High-stakes discovery work, projects requiring extreme exec adjacency, or handling highly regulated data (e.g., ITAR).",
        quote: "Are you paying a 2x premium for work that could run in daylight elsewhere?"
    },
    {
        title: "3. Offshore (Legacy)",
        pain: "Overnight PRs = one day lost per question.",
        implication: "The 'Human Latency Tax' destroys agile. Appears cheap on a rate card but is expensive in reality due to rework, coordination overhead, and stalled velocity. A poor choice for nearshore software development needs.",
        useWhen: "The backlog is simple, latency is tolerable, and the primary driver is the appearance of low hourly costs.",
        quote: "How many quarters died waiting for “LGTM”?"
    },
    {
        title: "4. Nearshore (Legacy)",
        pain: "Better hours, same vendor theater.",
        implication: "Good time-zone overlap, but you still inherit the risk of weak vetting ('resume theater'), unmanaged devices, and a lack of true operational governance. This is a common pitfall in nearshore software development.",
        useWhen: "You need overlap but have the internal capacity to manage the security, compliance, and quality risks yourself.",
        quote: "Who can read prod today—and how fast can you revoke it?"
    },
    {
        title: "5. Nearshore IT Co-Pilot (New Gen)",
        pain: "PR latency, vacancy drag, audit friction, vendor sprawl.",
        implication: "An integrated platform that unifies hiring, cognition, and performance, eliminating hidden taxes and delivering observable ROI.",
        useWhen: "Observable cadence, defensible TCO, faster time-to-useful PR.",
        quote: "If you switched tomorrow, would production even notice?"
    }
];


export default function NearshoreVsOffshorePage() {
    return (
    <>
      <SchemaInjector schema={pageSchema} />
      <div className="container mx-auto px-4 py-12 max-w-screen-xl">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">The CTO’s Playbook</p>
            <h1 className="font-semibold text-3xl md:text-4xl tracking-tighter mb-4">
              Nearshore vs. Offshore: The CTO’s Guide to Shipping Faster
            </h1>
          </header>

          <section className="prose prose-lg dark:prose-invert max-w-none text-muted leading-7 my-16">
            <h2 className="font-semibold text-2xl tracking-tighter text-text mb-6">The Pain: The Human Latency Tax</h2>
            <p className='mb-6'>
              You’re here because the <strong>12-hour time lag</strong> with your offshore team is silently killing your roadmap. A simple question on a pull request turns into a 24-hour game of telephone. Your senior engineers are forced into late-night calls, burning them out and wasting their high-value time on coordination, not creation. This "human latency tax" is the single biggest hidden cost in <strong>nearshore software development</strong>, and it’s a direct result of prioritizing a low hourly rate over a functional workflow.
            </p>
            <p>
              This playbook provides a data-driven framework to quantify that tax. It’s the business case for why daylight-native <strong>nearshore software development</strong> isn’t just "better"—it’s fundamentally more capital-efficient. We’ll give you the models to prove that a slightly higher hourly rate that eliminates latency delivers a dramatically lower Total Cost of Ownership (TCO) and faster time-to-market.
            </p>
          </section>

          <section className="my-24">
            <h2 className="font-semibold text-3xl tracking-tighter text-center mb-8">The Five Paths to Scaling Your Team: A CTO’s Decision Matrix</h2>
             <p className="text-center text-muted mb-12 max-w-2xl mx-auto">Each model represents a distinct trade-off between cost, control, speed, and risk. The wrong choice here is the most expensive decision a CTO can make.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fivePaths.map((path) => (
                    <Card key={path.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className='font-semibold tracking-tight text-lg'>{path.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <div>
                                <h3 className="font-semibold text-sm text-muted">Pain</h3>
                                <p className="text-sm">{path.pain}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-muted">Implication</h3>
                                <p className="text-sm">{path.implication}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-muted">Use When</h3>
                                <p className="text-sm">{path.useWhen}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <CardDescription className='text-sm italic'>" {path.quote} "</CardDescription>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          </section>


          <section className="prose prose-lg dark:prose-invert max-w-none text-muted leading-7 my-24">
            <h2 className="font-semibold text-2xl tracking-tighter mt-12 text-text">New-Gen Nearshore vs Onshore, Offshore, and Legacy Nearshore</h2>
            <p>We count the hidden taxes—PR latency, vacancy days, failed-change costs, and management overhead—not just the sticker price. The Nearshore IT Co-Pilot wins because it removes lag and makes outcomes observable. This is the new standard for <strong>nearshore software development</strong>.</p>
             <p className="text-sm italic text-muted">Basis Hours: 173 | Blended Dev Rate: $85 | Onshore Overhead: 20% | Offshore Overhead: 25% | Legacy Nearshore Overhead: 10%</p>
            </section>
            <div className="my-8 not-prose">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Build-In (In-House)</TableHead>
                            <TableHead>Onshore (US)</TableHead>
                            <TableHead>Offshore (Legacy)</TableHead>
                            <TableHead>Nearshore (Legacy)</TableHead>
                            <TableHead>Nearshore IT Co-Pilot (New Gen)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         <TableRow>
                            <TableCell className="font-medium text-xs text-muted" colSpan={6}>Includes EOR • Devices/MDM • SSO/SAML/SCIM • Compliance</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Fully-loaded seat cost (monthly)</TableCell>
                            <TableCell>$19,500</TableCell>
                            <TableCell>$24,912 – $31,140</TableCell>
                            <TableCell>$9,731 – $14,056</TableCell>
                            <TableCell>$8,564 – $12,370</TableCell>
                            <TableCell>$6,920 – $8,131</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Effective hourly</TableCell>
                            <TableCell>$113</TableCell>
                            <TableCell>$144 – $180</TableCell>
                            <TableCell>$56 – $81</TableCell>
                            <TableCell>$50 – $72</TableCell>
                            <TableCell>$40 – $47</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Time-zone overlap (hrs/day)</TableCell>
                            <TableCell>8+</TableCell>
                            <TableCell>8+</TableCell>
                            <TableCell>0-2</TableCell>
                            <TableCell>4-8</TableCell>
                            <TableCell>4-8</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">PR review median (hrs)</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">PR latency cost vs 1h (monthly)</TableCell>
                            <TableCell>$10,200</TableCell>
                            <TableCell>$10,200</TableCell>
                            <TableCell>$30,600</TableCell>
                            <TableCell>$10,200</TableCell>
                            <TableCell>$0</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Mgmt overhead tax (monthly)</TableCell>
                            <TableCell>$2,750</TableCell>
                            <TableCell>$3,300</TableCell>
                            <TableCell>$5,500</TableCell>
                            <TableCell>$3,300</TableCell>
                            <TableCell>$0</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Compliance readiness (audit hrs saved / mo)</TableCell>
                            <TableCell>$733</TableCell>
                            <TableCell>$733</TableCell>
                            <TableCell>$183</TableCell>
                            <TableCell>$1,100</TableCell>
                            <TableCell>$2,292</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Total TCO / month</TableCell>
                            <TableCell>$31,717</TableCell>
                            <TableCell>$40,793</TableCell>
                            <TableCell>$47,810</TableCell>
                            <TableCell>$22,867</TableCell>
                            <TableCell>$5,234</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <section className="text-center py-12 border-t mt-24">
              <h2 className="font-semibold text-3xl tracking-tighter mb-4">
                Go to the Full CTO Playbook
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                For more details on our data-driven approach to nearshore software development, see the full playbook hub.
              </p>
              <Button asChild size="lg">
                <Link href="http://cto.teamstation.dev" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Visit cto.teamstation.dev
                </Link>
              </Button>
            </section>

          <section className="text-center py-12 border-t mt-12">
            <h2 className="font-semibold text-3xl tracking-tighter mb-4">Ready to Build a Better Team?</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Discover how our AI-vetted nearshore talent can help you accelerate your roadmap and reduce your TCO.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </section>
          
           <section className="mt-16 text-center text-sm text-muted">
                <h3 className="font-semibold mb-2">Explore Related Services</h3>
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
                     <Link href="/hire/react" className="hover:underline">Hire React Developers</Link>
                     <Link href="/hire/python" className="hover:underline">Hire Python Developers</Link>
                     <Link href="/hire/java" className="hover:underline">Hire Java Developers</Link>
                     <Link href="/about" className="hover:underline">About TeamStation AI</Link>
                     <Link href="/sitemap" className="hover:underline">View All Specializations</Link>
                     <Link href="/contact" className="hover:underline">Contact Us</Link>
                </div>
            </section>
        </article>
      </div>
    </>
  );
}
