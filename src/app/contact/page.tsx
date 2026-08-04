export const dynamic = "force-dynamic";
/** @Spec
* Feature: Contact Page
* Type: page
* Route: /contact
* Description: Provides contact information and a call to action for scheduling a discovery call.
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
import { Calendar, BookOpen, Briefcase, FileText, AlertTriangle, CheckCircle, ArrowRight, TrendingUp, Calculator, Clock, Check } from 'lucide-react';
import { corporateLinks } from '@/lib/corporateLinks';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
    title: "Contact Us | Schedule a Discovery Call | TeamStation AI",
    description: "Schedule a call to learn how TeamStation AI can help you hire elite, vetted nearshore developers and accelerate your product roadmap.",
    alternates: {
      canonical: "/contact",
    },
};

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "headline": "Contact TeamStation AI to Hire Nearshore Developers",
    "description": "Get in touch with TeamStation AI to hire vetted nearshore developers or for any inquiries.",
    "publisher": {
        "@type": "Organization",
        "name": "TeamStation AI",
        "url": "https://teamstation.dev"
    }
};

const sandlerPainPoints = [
    {
        title: "The Competence Gap",
        pain: "You've hired engineers from nearshore vendors who pass basic coding tests but lack the architectural instinct to build scalable, maintainable systems. They can follow instructions but can't design a solution, forcing your senior talent to spend their time re-architecting and hand-holding instead of innovating.",
        impact: "This 'competence gap' is a massive hidden tax on your team's velocity. Every hour a senior engineer spends mentoring a mid-level developer on basic system design is an hour not spent on your most critical, high-leverage projects. It leads to a fragile codebase, burned-out senior staff, and a product that scales poorly.",
        solution: "We specialize in identifying senior and staff-level engineers with proven architectural abilities. Our Axiom Cortex™ engine vets for the cognitive traits that define elite talent: systems thinking, problem decomposition, and the ability to anticipate second-order effects. You get an engineer who is a force multiplier, not a resource drain."
    },
    {
        title: "The Human Latency Tax",
        pain: "Your offshore team is 12 hours ahead. A simple question on a pull request blocks progress for a full day. Your US-based team is forced into late-night or early-morning meetings, disrupting their workflow and leading to burnout. Agility is impossible when your feedback loop is 24 hours long.",
        impact: "This 'human latency tax' quietly destroys your roadmap. A feature that should take a week takes three. Your team's velocity grinds to a halt, you miss market windows, and your competitors out-innovate you. The low hourly rate of an offshore team is a mirage when you factor in the massive cost of delay.",
        solution: "We specialize in the LATAM time-zone, providing elite engineers who work your hours. Real-time collaboration is the default. Questions are answered in minutes, not days. Pair programming is seamless. Our nearshore model eliminates the human latency tax, restoring the agile workflow your team needs to compete and win."
    },
    {
        title: "The Vendor Shell Game",
        pain: "You've been burned by opaque nearshore vendors who promise senior talent but deliver mid-level developers at inflated rates. Their vetting process is a black box, their pricing is confusing, and you have no real relationship with the engineers who are supposedly part of your team.",
        impact: "This lack of transparency erodes trust and creates a transactional, low-accountability relationship. You spend more time managing the vendor than building your product. You're never sure if you're getting what you paid for, and the constant churn and quality issues make it impossible to build a cohesive, high-performing team.",
        solution: "TeamStation AI is an intelligent infrastructure platform, not a traditional agency. We offer radical transparency into our vetting process and pricing model. You get a direct relationship with your engineers and a single, simple monthly invoice that covers everything. We are a long-term partner, not a body shop."
    }
]

const hiringMetrics = [
    { label: "Time-to-Offer", value: "~9 days" },
    { label: "Time-to-First PR", value: "7–14 days" },
    { label: "Short-list Relevance", value: "≥85%" },
    { label: "Mismatch Rate", value: "≤10%" },
    { label: "Day-1 Tool Readiness", value: "≥95%" },
    { label: "Device Provisioning", value: "≤5 days, ≥99% enrolled" },
]

export default function ContactPage() {
    const researchLinks = corporateLinks.filter(link => 
        link.title.toLowerCase().includes('research') || 
        link.title.toLowerCase().includes('science') ||
        link.title.toLowerCase().includes('playbook')
    );
     const platformLinks = corporateLinks.filter(link => 
        !researchLinks.find(rl => rl.title === link.title) &&
        !['About', 'Contact', 'Sitemap', 'Privacy', 'Terms', 'Application Login'].includes(link.title)
    );


    return (
        <>
            <SchemaInjector schema={contactSchema} />
            <div className="container mx-auto px-4 py-16 max-w-screen-xl">
                <header className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="font-semibold text-3xl md:text-4xl tracking-tighter mb-4">
                        Stop Interviewing. Start Building.
                    </h1>
                    <p className="text-lg md:text-xl text-muted">
                        You're here because the traditional model of nearshore IT staffing is broken. It's a slow, expensive, and high-risk numbers game that wastes your most valuable asset: your senior engineering time. This discovery call is not a sales pitch; it's an architectural session to diagnose your current hiring constraints and design a talent pipeline that delivers pre-vetted, elite engineers who align with your technical and cognitive needs from day one.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule a 30-Min Discovery Call
                        </Link>
                    </Button>
                </header>

                 <section className="mb-20">
                    <h2 className="font-semibold text-3xl tracking-tight text-center mb-12">The True Cost of a Mis-Hire: A CTO's Dilemma</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sandlerPainPoints.map((point, index) => (
                           <Card key={index} className="flex flex-col">
                                <CardHeader>
                                   <AlertTriangle className="w-8 h-8 text-destructive mb-2" />
                                    <CardTitle className="font-semibold text-xl tracking-tight">{point.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow">
                                    <div>
                                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">The Pain</h3>
                                        <p className="text-sm mt-1 text-muted">{point.pain}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">The Business Impact</h3>
                                        <p className="text-sm mt-1 text-muted">{point.impact}</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="bg-bg p-6 border-t mt-6">
                                     <div>
                                        <h3 className="font-semibold text-sm uppercase tracking-wider flex items-center gap-2 text-green-500">
                                            <CheckCircle className="w-4 h-4 text-green-500"/>
                                            <span>The TeamStation AI Solution</span>
                                        </h3>
                                        <p className="text-sm mt-2 text-muted">{point.solution}</p>
                                    </div>
                                </CardFooter>
                           </Card>
                        ))}
                    </div>
                </section>

                <section className="my-20 pt-16 border-t">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-semibold text-3xl tracking-tight text-text mb-4 flex items-center gap-3">
                                <Calculator className="w-8 h-8 text-primary"/>
                                The Math: The True Cost of a Vacancy
                            </h2>
                            <p className="text-muted mb-6">Show this to your CFO. A slow hiring process isn't just an inconvenience; it's a direct tax on your revenue. We can help you quantify it.</p>
                            <div className="prose prose-sm dark:prose-invert text-muted bg-bg-elev p-6 rounded-lg border">
                                <p>Assume a new feature is worth **$1,000,000 ARR** per year.</p>
                                <ul>
                                    <li>Traditional hire time: **45 days**</li>
                                    <li>TeamStation AI hire time: **9 days**</li>
                                </ul>
                                <p>Days saved: 45 - 9 = **36 days**</p>
                                <p>Vacancy tax avoided:</p>
                                <p>`36 days / 365 days ≈ 0.09863`</p>
                                <p className="font-bold text-lg text-text">`$1,000,000 * 0.09863 ≈ $98,630 in ARR`</p>
                                <p className="text-primary font-semibold">You pull forward nearly $100k in revenue this year by hiring faster.</p>
                            </div>
                        </div>
                         <div>
                            <h3 className="font-semibold text-xl text-text mb-4 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-primary"/>
                                Nearshore IT Staffing Performance Metrics
                            </h3>
                             <p className="text-muted text-sm mb-6">Our data-driven process delivers predictable results and a clear ROI.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {hiringMetrics.map(metric => (
                                    <div key={metric.label} className="bg-bg-elev p-4 rounded-lg border">
                                        <p className="text-sm text-muted">{metric.label}</p>
                                        <p className="text-lg font-semibold text-text">{metric.value}</p>
                                    </div>
                                ))}
                            </div>
                             <div className="mt-6 text-sm text-muted space-y-2 border-t pt-4">
                                <h4 className="font-semibold text-text">Annual Comp Examples:</h4>
                                <p className="text-xs">(Based on 173 workable hours/month)</p>
                                <ul className="list-disc pl-5 text-xs">
                                    <li>L1 Proficient ($20/hr): **$41,520/yr**</li>
                                    <li>L2 Mid-Level ($30/hr): **$62,280/yr**</li>
                                    <li>L3 Senior ($40/hr): **$83,040/yr**</li>
                                    <li>L4 Expert ($50/hr): **$103,800/yr**</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="pt-16 border-t mt-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-semibold text-3xl tracking-tight mb-4">Your Strategic Resource Hub</h2>
                        <p className="text-muted mb-12">
                            We believe in transparent, data-driven partnerships. Before our call, review the research, platform architecture, and pricing models that differentiate our intelligent infrastructure from traditional staffing agencies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="space-y-4 rounded-xl border bg-bg-elev p-6">
                            <h3 className="font-semibold text-xl flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" />
                                Platform & Services
                            </h3>
                             <ul className="space-y-3">
                               {platformLinks.map(link => (
                                   <li key={link.title}>
                                       <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group">
                                           <span>{link.title}</span>
                                           <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                       </Link>
                                   </li>
                               ))}
                            </ul>
                        </div>
                        <div className="space-y-4 rounded-xl border bg-bg-elev p-6">
                            <h3 className="font-semibold text-xl flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                Research & Science
                            </h3>
                            <ul className="space-y-3">
                               {researchLinks.map(link => (
                                   <li key={link.title}>
                                       <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group">
                                            <span>{link.title}</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                       </Link>
                                   </li>
                               ))}
                                <li>
                                    <Link href="https://cto.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group">
                                        <span>The CTO's Playbook Hub</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                         <div className="space-y-4 rounded-xl border bg-bg-elev p-6">
                            <h3 className="font-semibold text-xl flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-primary" />
                                Key Site Pages
                            </h3>
                            <ul className="space-y-3">
                                <li><Link href="/sitemap" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group"><span>Sitemap</span><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/about" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group"><span>About Us</span><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/legal/privacy" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group"><span>Privacy Policy</span><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/legal/terms" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group"><span>Terms of Service</span><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                                <li><Link href="/roles" className="text-sm text-muted hover:text-primary hover:underline flex justify-between items-center group"><span>All Engineering Roles</span><ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center text-sm text-muted">
                    <p>For general inquiries, partnership opportunities, or press, please reach out to us at <a href="mailto:platform@teamstation.dev" className="underline hover:text-primary">platform@teamstation.dev</a>.</p>
                     <p className="mt-1">TeamStation AI is headquartered in Boston, MA, with operations across Latin America.</p>
                </div>
            </div>
        </>
    );
}
