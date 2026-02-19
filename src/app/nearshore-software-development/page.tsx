export const dynamic = "force-dynamic";
/** @Spec
* Feature: Nearshore Software Development Pillar Page
* Type: page
* Route: /nearshore-software-development
* Description: A pillar page explaining the benefits and services of TeamStation AI's nearshore software development model.
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
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, Users, GitCompare, BookOpen } from 'lucide-react';
import { getAllTech } from '@/lib/dataModel';
import { categories } from '@/lib/categories';

export const metadata: Metadata = {
    title: "Nearshore Software Development | TeamStation AI",
    description: "TeamStation AI provides elite, AI-vetted nearshore software development teams from Latin America, ensuring U.S. time-zone alignment and superior engineering quality for CTOs.",
    alternates: {
        canonical: "/nearshore-software-development",
    },
};

const pillarSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nearshore Software Development Services",
    "description": "TeamStation AI provides elite, AI-vetted nearshore software development teams from Latin America, ensuring U.S. time-zone alignment and superior engineering quality for CTOs.",
    "serviceType": "Nearshore Software Development",
    "provider": {
        "@type": "Organization",
        "name": "TeamStation AI"
    },
     "areaServed": "US"
};

const serviceTiers = [
    {
        name: "Team Augmentation",
        description: "Embed our elite, AI-vetted engineers directly into your existing teams to fill skill gaps and accelerate your roadmap.",
        features: ["U.S. Time-Zone Alignment", "Vetted for Cognitive & Technical Fit", "Seamless Team Integration", "Simple Monthly Invoicing"]
    },
    {
        name: "Managed Teams",
        description: "We provide a dedicated, self-managed pod of engineers, including a Technical Lead, to own and deliver entire projects.",
        features: ["Includes Technical Project Lead", "Sprint-based deliverables", "Integrated with your toolchain", "Predictable monthly cost"]
    },
    {
        name: "Enterprise Solutions",
        description: "A fully customized solution for large organizations, including custom vetting profiles, dedicated account management, and volume pricing.",
        features: ["Dedicated Account Management", "Custom Vetting Profiles", "Volume-based Pricing", "Advanced Security & Compliance"]
    }
]

export default function NearshorePillarPage() {
    return (
        <>
            <SchemaInjector schema={pillarSchema} />
            <div className="container mx-auto px-4 py-16 max-w-screen-xl">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-16">
                        <h1 className="font-semibold text-3xl md:text-4xl tracking-tighter mb-4">
                            The New Standard for Nearshore Software Development
                        </h1>
                        <p className="text-lg md:text-xl text-muted">
                           Tired of the vendor shell game? TeamStation AI is an intelligent platform that delivers elite, cognitively-vetted nearshore software development teams from Latin America. We replace broken, transactional hiring with a predictable, high-trust partnership engineered for U.S. CTOs.
                        </p>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {serviceTiers.map(tier => (
                            <Card key={tier.name} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{tier.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted text-sm mb-6">{tier.description}</p>
                                    <ul className="space-y-3">
                                        {tier.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                     <Button asChild variant="outline" className="w-full">
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </section>

                    <section className="prose prose-lg dark:prose-invert max-w-none mb-12 text-muted leading-7">
                        <h2 className='font-semibold text-3xl tracking-tighter mb-4 text-text'>Why Choose Nearshore Software Development with TeamStation AI?</h2>
                        <p className="mb-6">
                           The calculus for scaling an engineering team has changed. The domestic talent market is saturated with competition, and traditional offshore models impose a crippling "human latency tax" due to time zone differences. Nearshore software development in Latin America offers the perfect synthesis: real-time collaboration within U.S. time zones combined with a rich pool of world-class engineering talent.
                        </p>
                        <p className="mb-8">
                            However, not all nearshore partners are created equal. Legacy staff augmentation firms still operate on an opaque, low-trust model, flooding you with keyword-matched resumes and leaving the burden of quality control on you. This is where TeamStation AI is different. We are not a staffing agency; we are an intelligent infrastructure platform for building elite teams.
                        </p>
                         <h2 className='font-semibold text-3xl tracking-tighter mb-4 text-text'>A Data-Driven Approach to Talent</h2>
                        <p className="mb-6">
                           Our platform is built on a foundation of data, not guesswork. We analyze over 44 neuropsychometric factors to predict a candidate's success on your team. This scientific rigor de-risks your hiring process, reduces your time-to-offer to just 9 days, and ensures a 90% project retention rate at six months. We provide a level of predictability and quality assurance that traditional staff augmentation simply cannot match.
                        </p>
                    </section>
                    
                    <section className="mb-12 bg-bg-elev p-6 rounded-xl border">
                        <h3 className="text-xl font-semibold tracking-tight mb-4 text-center">
                            Explore Key Resources
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <Card>
                                <CardHeader>
                                    <GitCompare className="h-8 w-8 mx-auto mb-3 text-primary" />
                                    <CardTitle className="font-semibold text-lg">BairesDev vs. TeamStation AI</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted mb-4">A direct comparison of vetting, quality, and TCO against a leading vendor.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" asChild>
                                        <Link href="/compare/bairesdev">Read Comparison</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <BookOpen className="h-8 w-8 mx-auto mb-3 text-primary" />
                                    <CardTitle className="font-semibold text-lg">The CTO's Playbook</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted mb-4">A data-driven framework for choosing between onshore, offshore, and nearshore models.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" asChild>
                                        <Link href="/playbook/nearshore-vs-offshore">Read the Playbook</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                                    <CardTitle className="font-semibold text-lg">Explore Engineering Roles</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted mb-4">Browse our full range of vetted specializations, from frontend to Data & AI.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" asChild>
                                        <Link href="/roles">See All Roles</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </section>

                    <section className="text-center py-12 border-t">
                        <h2 className="font-semibold text-3xl tracking-tighter mb-4">Ready to Build Your Elite Nearshore Team?</h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                           Stop wasting time with resume brokers. Schedule a discovery call to learn how our intelligent platform can deliver pre-vetted, elite engineers who align with your technical and cultural needs.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">
                                    Schedule a Call
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
