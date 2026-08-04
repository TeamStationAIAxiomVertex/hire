export const dynamic = "force-dynamic";
/** @Spec
* Feature: About Page
* Type: page
* Route: /about
* Description: Explains the mission, process, and value proposition of TeamStation AI, contrasting it with traditional IT staff augmentation.
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
import { CheckCircle, AlertTriangle, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
    title: "About Us | The TeamStation AI Mission & Platform",
    description: "Learn about our mission to build elite nearshore teams. We contrast our AI-driven platform with the failures of traditional IT staff augmentation.",
    alternates: {
      canonical: "/about",
    },
};

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "headline": "About TeamStation AI's Intelligent Nearshore Platform",
    "description": "Our mission, our process, and our commitment to building high-performance nearshore engineering teams through cognitive AI vetting.",
    "publisher": {
        "@type": "Organization",
        "name": "TeamStation AI",
        "url": "https://teamstation.dev"
    }
};

const painPoints = [
    {
        pain: "The Hidden Costs of a Bad Hire",
        problem: "Traditional IT staff augmentation is a numbers game that you are destined to lose. Vendors flood you with keyword-matched resumes, forcing your senior engineers to waste countless hours interviewing unqualified candidates. A bad hire isn't just a salary loss; it's a drag on your team's velocity, a hit to morale, and a source of production-level risk.",
        solution: "Our platform provides a pre-vetted, on-demand talent pool. Because our cognitive AI has already validated the technical and problem-solving abilities of our engineers, we can move from initial contact to a productive team member in as little as two weeks.",
        kpi: "Reduce interview time by 80% and increase 90-day success rate."
    },
    {
        pain: "The 'Vacancy Tax'",
        problem: "Every day an engineering role sits empty, you pay a 'Vacancy Tax.' Projects stall, roadmap items slip, and your existing team burns out carrying the extra load. The opportunity cost of a 60-90 day hiring cycle can be measured in lost revenue and missed market windows.",
        solution: "We eliminate the Vacancy Tax by transforming hiring from a slow, manual process into a fast, predictable one. Our platform provides a pre-vetted, on-demand talent pool ready to integrate with your team.",
        kpi: "Fill critical engineering roles in under 14 days."
    }
]

export default function AboutPage() {
    return (
        <>
            <SchemaInjector schema={aboutSchema} />
            <div className="container mx-auto px-4 py-16 max-w-screen-xl">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-16">
                        <h1 className="font-semibold text-3xl md:text-4xl tracking-tighter mb-4">
                            Building a Smarter Talent Infrastructure
                        </h1>
                        <p className="text-lg md:text-xl text-muted">
                           TeamStation AI was founded on a simple premise: talent is universal, but opportunity is not. We engineered a new class of intelligent infrastructure to bridge the gap between world-class engineers in Latin America and innovative U.S. companies that need to scale efficiently and securely.
                        </p>
                    </header>

                    <section className="mb-16">
                        <h2 className="font-semibold text-3xl tracking-tighter text-center mb-10">The Failure of Traditional Nearshore IT Staffing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {painPoints.map((pain, index) => (
                             <Card
                                key={index}
                                className="flex flex-col transform transition-all duration-300"
                              >
                                <CardHeader>
                                  <CardTitle className="font-semibold text-xl flex items-start gap-3 text-muted">
                                    <AlertTriangle className="h-8 w-8 text-destructive mt-1 flex-shrink-0" />
                                    <span>{pain.pain}</span>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-6">
                                  <div>
                                    <h3 className="flex items-center gap-2 mb-2 font-semibold">
                                      <ThumbsDown className="w-5 h-5 text-destructive" />
                                      <span>The Problem</span>
                                    </h3>
                                    <p className="text-sm text-muted">{pain.problem}</p>
                                  </div>
                                  <div>
                                    <h3 className="flex items-center gap-2 mb-2 font-semibold text-text">
                                      <ThumbsUp className="w-5 h-5 text-green-500" />
                                      <span>The TeamStation AI Solution</span>
                                    </h3>
                                    <p className="text-sm">{pain.solution}</p>
                                  </div>
                                </CardContent>
                                <CardFooter className="bg-bg px-6 py-3 border-t">
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="font-mono text-xs tracking-tight">
                                        Proof: {pain.kpi}
                                        </span>
                                    </div>
                                </CardFooter>
                              </Card>
                           ))}
                        </div>
                    </section>
                    
                    <section className="my-16">
                        <h2 className="font-semibold text-3xl tracking-tighter text-center mb-10">Platform vs. Process: The TeamStation AI Difference</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <ThumbsDown className="w-6 h-6 text-destructive" />
                                        <span>Legacy Staff Augmentation</span>
                                    </CardTitle>
                                    <CardDescription>A transactional, manual process.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-muted">
                                    <p>Legacy vendors operate a manual pipeline: they source resumes, run basic keyword filters, and forward the results. The client (you) bears the entire burden of technical vetting, quality control, and risk.</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong>Black Box Vetting:</strong> Relies on unverified resumes and simple coding tests.</li>
                                        <li><strong>High Interview Overhead:</strong> Your senior engineers waste cycles on unqualified candidates.</li>
                                        <li><strong>Reactive & Transactional:</strong> Fills seats, but doesn't build strategic team capability.</li>
                                        <li><strong>Opaque Pricing:</strong> You pay a high margin for a low-value service.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-primary/50">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <ThumbsUp className="w-6 h-6 text-green-500" />
                                        <span>The TeamStation AI Platform</span>
                                    </CardTitle>
                                    <CardDescription>An intelligent, automated infrastructure.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm">
                                    <p>TeamStation AI is not a staffing agency; it's an intelligent platform. Our Axiom Cortex™ engine productizes the vetting process, delivering a predictable supply of elite, cognitively-aligned talent.</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong>Cognitive Vetting:</strong> We measure reasoning, problem-solving, and architectural instinct.</li>
                                        <li><strong>Zero Interview Overhead:</strong> We deliver pre-vetted candidates, saving your team's time.</li>
                                        <li><strong>Predictive & Strategic:</strong> We build team topologies based on cognitive fit and project needs.</li>
                                        <li><strong>Transparent Pricing:</strong> A clear, all-inclusive rate for an end-to-end service.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>


                    <section className="prose prose-lg dark:prose-invert max-w-none mb-12 text-muted leading-7">
                        <h2 className='font-semibold text-3xl tracking-tighter mb-4 text-text'>Our Mission: To Platform Nearshore Talent</h2>
                        <p className="mb-6">
                            Traditional IT staff augmentation is broken. It's a transactional, low-trust model built on opaque vendor margins and superficial keyword matching. This system is slow, expensive, and often results in misaligned hires that cost you time, money, and team morale.
                        </p>
                        <p className="mb-8">
                            We're here to fix that. Our mission is to provide a seamless, AI-powered platform for building elite nearshore engineering teams. TeamStation AI is not a staffing agency; it is an intelligent infrastructure layer that handles the vetting, compliance, and logistics, so you can focus on what you do best: building great products. We offer a transparent, high-trust partnership designed for the unique needs of U.S. CTOs and engineering leaders.
                        </p>
                    </section>

                    <section className="bg-bg-elev p-8 rounded-xl mb-12">
                        <h2 className="font-semibold text-3xl tracking-tighter text-center mb-6">Our Core Principles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Vetted Excellence</h3>
                                    <p className="text-muted">Only the top 1% of engineers who pass our rigorous, AI-driven cognitive vetting process are invited to join our network. We select for architectural thinking and problem-solving, not just keywords.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Seamless Integration</h3>
                                    <p className="text-muted">Our engineers operate in your timezone, ensuring real-time collaboration. We manage all HR, payroll, and compliance, so they integrate into your team as full-time members, not siloed contractors.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Radical Transparency</h3>
                                    <p className="text-muted">We provide a transparent, all-inclusive rate with no hidden fees. You get a direct relationship with your engineers and full visibility into our vetting process.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Operational Simplicity</h3>
                                    <p className="text-muted">We provide a single, simple monthly invoice. All legal, compliance, and device management is handled by our platform, giving you the benefit of a global workforce with the simplicity of a single vendor relationship.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-12 border-t">
                        <h2 className="font-semibold text-3xl tracking-tighter mb-4">Ready to Hire Your Next Engineer?</h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                            Browse our vetted specializations and discover how TeamStation AI's intelligent platform can accelerate your roadmap and de-risk your hiring process.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/sitemap">
                                    Explore Technologies
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">
                                    Schedule a Call
                                </Link>
                            </Button>
                        </div>
                    </section>

                     <section className="mt-12 text-center text-sm text-muted">
                        <h3 className="font-semibold mb-2">Explore Our Services</h3>
                        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
                             <Link href="/hire/react" className="hover:underline">Hire React Developers</Link>
                             <Link href="/hire/python" className="hover:underline">Hire Python Developers</Link>
                             <Link href="/hire/node" className="hover:underline">Hire Node.js Developers</Link>
                             <Link href="/hire/angular" className="hover:underline">Hire Angular Developers</Link>
                             <Link href="/hire/devops-engineering" className="hover:underline">Hire DevOps Engineers</Link>
                              <Link href="/playbook/nearshore-vs-offshore" className="hover:underline">Nearshore vs. Offshore</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
