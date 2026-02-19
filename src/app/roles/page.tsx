import Link from "next/link";
import { Metadata } from "next";
import { categories } from "@/lib/categories";
import { productCategory } from "@/lib/data/product";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight, BrainCircuit, ShieldCheck, CheckCircle, Package, PiggyBank, Users, GraduationCap, Star, Shield, Trophy, Zap, Computer, Building, TrendingUp, UserCheck, CreditCard, List } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SchemaInjector } from "@/components/SchemaInjector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DynamicIcon from "@/components/DynamicIcon";


export const metadata: Metadata = {
    title: "Engineering Roles | Vetted Nearshore Talent | TeamStation AI",
    description:
    "Explore elite nearshore engineering roles including Frontend, Backend, DevOps, Data & AI, and more. Find AI-vetted experts for your team.",
  };

const allCategories = [...categories, productCategory];

const rolesSchema = {
   "@context": "https://schema.org",
   "@type": "ItemList",
   "name": "Engineering Role Categories",
   "itemListOrder": "http://schema.org/ItemListOrderAscending",
   "itemListElement": allCategories.map((category, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": category.name,
      "url": `/roles/${category.slug}`
    }
  }))
};

 const faqs = [
    { q: "How fast can we start?", a: "Most teams see shortlists in 72–96 hours and offers in ~9 days." },
    { q: "What seniorities are available?", a: "Senior, Staff, Principal, and Fractional Architecture." },
    { q: "Do you replace if a fit isn't right?", a: "Yes—alignment guarantee with fast backfills." },
    { q: "How is Axiom Cortex™ different from code tests?", a: "We evaluate reasoning, collaboration, and trade-off intelligence—not trivia recall." },
 ];

const seniorityLevels = [
    {
        level: "L1 Proficient",
        role: "Guided Contributor",
        description: "Contributes on component-level tasks with guidance. Foundational knowledge and learning agility are validated via Axiom Cortex™ correctness, method clarity, and fluency scoring.",
        icon: GraduationCap,
        pricing: {
            rate: "$20 /hour",
            monthly: "$3,460/mo",
            annual: "$41,520/yr",
            variance: "± $5 USD"
        }
    },
    {
        level: "L2 Mid-Level",
        role: "Independent Feature Owner",
        description: "Independently ships features and services in a specific domain, handling ambiguity with minimal supervision. Assessed for mental model accuracy and problem-solving via composite scores and role-level normalization.",
        icon: Star,
        pricing: {
            rate: "$30 / hour",
            monthly: "$5,190/mo",
            annual: "$62,280/yr",
            variance: "± $5 USD"
        }
    },
    {
        level: "L3 Senior",
        role: "Leads Complex Projects",
        description: "Leads cross-functional projects, raises standards through mentorship, and makes key architectural decisions. Axiom Cortex™ measures system design skill and architectural instinct via trait synthesis and semantic alignment.",
        icon: Shield,
        pricing: {
            rate: "$40 / hour",
            monthly: "$6,920/mo",
            annual: "$83,040/yr",
            variance: "± $5 USD"
        }
    },
    {
        level: "L4 Expert",
        role: "Org-Level Architect",
        description: "Sets architecture and technical strategy across teams, solving your most complex business problems. Validated on ability to make critical trade-offs via utility-optimized decision gates and multi-objective analysis.",
        icon: Trophy,
         pricing: {
            rate: "$50 / hour",
            monthly: "$8,650/mo",
            annual: "$103,800/yr",
            variance: "± $10 USD"
        }
    }
];

const includedServices = [
    { title: "LATAM Employer of Record (EOR)", description: "Ensuring compliance with local laws and payroll management.", icon: Users },
    { title: "Onboarding Automation", description: "Efficient onboarding processes to integrate new hires seamlessly, controlled by our Platform Technology.", icon: Zap },
    { title: "Devices & Security Monitoring", description: "Fully managed devices with 24/7 endpoint monitoring and patch SLAs.", icon: Computer },
    { title: "Cybersecurity Insurance", description: "Comprehensive coverage for protection against data breaches and cyber threats.", icon: ShieldCheck },
    { title: "LATAM Office Spaces", description: "Access to professional workspaces to foster collaboration (extended use fees may apply).", icon: Building },
    { title: "Dedicated SaaS Platform", description: "A single Nearshore IT platform to manage your Remote team's performance and documentation.", icon: Package },
    { title: "Rapid Scalability", description: "Access our vast IT talent pool and expand your team accurately and rapidly using our advanced hiring technologies.", icon: TrendingUp },
    { title: "Advanced Talent Retention", description: "Our model enables budget bandwidth to invest in the brightest minds without breaking the bank.", icon: UserCheck },
    { title: "Dedicated Account Manager", description: "A single point of contact to streamline communication and ensure client goals are met efficiently.", icon: UserCheck },
    { title: "Dedicated Billing Support", description: "Transparent invoicing and flexible billing cycles to simplify financial management for clients.", icon: CreditCard },
];

const pricingFactors = [
    { title: "Role & Talent Signal", items: ["Level & scope (L1–L4), ownership, leadership signals", "Stack fit & specialization (AI/ML, Salesforce, etc.)", "Interview evidence (technical correctness, mental model)", "Candidate salary requirements & scarcity premiums"] },
    { title: "Country & Statutory Reality", items: ["Holidays/PTO cadence that won't break sprints", "Statutory items (social contributions, mandated bonuses)", "FX, banking & cross-border transfer fees", "City-level compensation benchmarks"] },
    { title: "Platform Services & Risk Shield (Included)", items: ["Company devices with MDM, patch SLAs, endpoint monitoring", "Security workflows, IP/NDAs, incident response guardrails", "Day-one readiness (access, 30-60-90 plan)", "Employer of Record (EOR)—we carry employer liability", "Background checks, contracts, payroll & benefits admin"] },
    { title: "Delivery & Utilization (Time = Money)", items: ["Time-to-Offer ≈ 9 days; first PR 7–14 days", "Short-list relevance ≥85%; mismatch ≤10%", "Fewer vacancy days = less ARR lost to hiring latency", "Faster ramp = earlier value recognition", "Predictable cost per productive engineer"] }
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

        <section className="my-16 border-t border-border pt-16">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight text-text mb-4 flex items-center justify-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-primary"/>
                    Cognitive Architecture ➜ Teams that Think Together
                </h2>
                <p className="text-muted leading-relaxed">
                    At TeamStation, roles form part of a distributed cognitive network. 
                    Each function — from UI design to cloud engineering — is modeled for reasoning compatibility. 
                    We measure not just skill, but the mental patterns that define how engineers and product leaders solve, collaborate, and adapt.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-bg-elev/50 border-dashed">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500"/>
                            Reduced Cognitive Friction
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted">Balanced reasoning modes lower iteration latency and reduce misunderstandings.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-bg-elev/50 border-dashed">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                           <CheckCircle className="w-5 h-5 text-green-500"/>
                           Team Reasoning Mesh
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted">Professionals with complementary cognitive grammars reduce decision collisions and improve solution quality.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-bg-elev/50 border-dashed">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500"/>
                            Operational Throughput
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted">Cognitive calibration increases delivery velocity by 42% after sprint three.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="my-16 border-t pt-16">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-text flex items-center justify-center gap-3">
                    <PiggyBank className="w-8 h-8 text-primary" />
                    Predictable Cost, Elite Talent: Our Pricing Tiers
                </h2>
                <p className="text-muted mt-4">One fully-loaded hourly rate—clear, defensible, and optimized for value. We align talent expectations with local market reality and bundle critical services under one accountable SLA.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seniorityLevels.map(level => {
                    const Icon = level.icon;
                    return (
                        <Card key={level.level} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Icon className="w-6 h-6 text-primary" />
                                    <CardTitle className="text-lg font-semibold">{level.level}</CardTitle>
                                </div>
                                <CardDescription>{level.role}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                               <p className="text-sm text-muted">{level.description}</p>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start bg-bg-elev border-t p-4">
                                <p className="font-semibold text-lg">{level.pricing.rate}</p>
                                <p className="text-xs text-muted">{level.pricing.monthly} &middot; {level.pricing.annual}</p>
                                <p className="text-xs text-muted/50 mt-1">{level.pricing.variance}</p>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
             <p className="text-xs text-muted text-center mt-6">Pricing estimates are calculated using the U.S. standard of 173 workable hours per month, which represents the realistic full-time workload after adjusting for federal holidays, paid time off (PTO), and sick leave.</p>
        </section>

        <section className="my-16 border-t pt-16">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-text flex items-center justify-center gap-3">
                    <Package className="w-8 h-8 text-primary" />
                    The TeamStation AI Platform: Your All-in-One Service Layer
                </h2>
                <p className="text-muted mt-4">Providing end-to-end remote IT staffing with proven reliability you can trust. Your rate includes all of this, and more.</p>
            </header>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {includedServices.map(service => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title}>
                        <CardHeader>
                            <div className="flex items-start gap-4">
                              <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                              <CardTitle className="text-base font-semibold">{service.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted">{service.description}</p>
                        </CardContent>
                    </Card>
                  )
                })}
            </div>
        </section>

        <section className="my-16 border-t pt-16">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-text">How We Determine Your Rate: A Transparent Model</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pricingFactors.map(factor => (
                    <div key={factor.title} className="rounded-xl border bg-bg-elev p-6">
                        <h3 className="font-semibold text-lg text-primary mb-4">{factor.title}</h3>
                        <ul className="space-y-3">
                            {factor.items.map(item =>(
                                <li key={item} className="flex items-start gap-3 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>


        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-text mb-4">Engineering Archetypes for the AI Era</h2>
            <p className="text-muted text-center max-w-3xl mx-auto">
              Explore the cognitive role families below. Each one is mapped to reasoning archetypes that power composable nearshore pods — optimized for reliability, adaptability, and high-signal collaboration.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCategories.map((category) => (
                        <Link href={`/roles/${category.slug}`} key={category.slug} className="group">
                            <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col hover:border-primary/50 bg-bg-elev">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="p-2 rounded-lg bg-bg text-primary">
                                                <DynamicIcon name={category.icon} className="w-6 h-6" />
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
                    ))}
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
                <p className="text-muted text-lg max-w-3xl mx-auto">Most platforms chase test scores. We map cognition under pressure—who leads, adapts, and multiplies team intelligence. That's the difference between fast and elite.</p>
            </div>
        </section>
        
        <section className="mt-20 border-t border-border pt-12 text-center max-w-3xl mx-auto">
            <p className="text-muted leading-7">
                "A U.S. healthtech scaled its product platform using LATAM engineers from TeamStation.
                After cognitive calibration, average sprint velocity improved 38%, and onboarding dropped from 18 to 9 days.
                The key wasn't better code — it was better alignment of reasoning modes."
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
                <p className="text-muted text-lg">TeamStation's AI doesn't just find developers — it assembles cognitive ecosystems. Talk to a Co-Pilot and see how precision hiring becomes a competitive advantage.</p>
             </div>
        </section>
    </main>
    </>
  );
}
