export const dynamic = "force-dynamic";
/** @Spec
* Feature: Technology Detail Page
* Type: page
* Route: /hire/[technology]
* Description: Displays detailed information for a specific technology, including pains, evaluation criteria, and technical analysis.
* Acceptance:
*  - ✅ Compiles without TypeScript errors
*  - ✅ Lints and formats cleanly
*  - ✅ Dynamically generates pages for each technology slug
*  - ✅ Valid canonical + JSON-LD schema
*  - ✅ Included in sitemap.xml
*/

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SchemaInjector } from "@/components/SchemaInjector";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { PainPoint, TechEntry } from "@/data/tech";
import { getAllTech, getTechBySlug } from "@/lib/dataModel";
import DynamicIcon from "@/components/DynamicIcon";
import { BrainCircuit, GraduationCap, Star, Shield, Trophy } from "lucide-react";

type PageProps = {
  params: {
    technology: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const tech = getTechBySlug(params.technology);

  if (!tech) {
    return {};
  }

  const title = tech.seo_title || `Hire ${tech.name} Developers | Nearshore Software Development`;
  const description = tech.meta_description;

  return {
    title,
    description,
    alternates: {
      canonical: `/hire/${tech.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    }
  };
}

export async function generateStaticParams() {
  const techs = getAllTech();
  return techs
    .filter((tech) => tech.slug)
    .map((tech) => ({
      technology: tech.slug,
    }));
}

const getSeniorityLevels = (techName: string) => [
    {
        level: "L1 Proficient",
        role: "Guided Contributor",
        icon: 'GraduationCap',
        description: `Contributes on component-level tasks within the ${techName} domain. Foundational knowledge and learning agility are validated.`,
        evaluation: "Axiom Cortex™ validates core competencies via correctness, method clarity, and fluency scoring. We ensure they can reliably execute assigned tasks.",
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
        icon: 'Star',
        description: `Independently ships features and services in the ${techName} space, handling ambiguity with minimal supervision.`,
        evaluation: "We assess their mental model accuracy and problem-solving via composite scores and role-level normalization. They can own features end-to-end.",
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
        icon: 'Shield',
        description: `Leads cross-component projects, raises standards, and provides mentorship within the ${techName} discipline.`,
        evaluation: `Axiom Cortex™ measures their system design skills and architectural instinct specific to the ${techName} domain via trait synthesis and semantic alignment scoring. They are force-multipliers.`,
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
        icon: 'Trophy',
        description: `Sets architecture and technical strategy for ${techName} across teams, solving your most complex business problems.`,
        evaluation: `We validate their ability to make critical trade-offs related to the ${techName} domain via utility-optimized decision gates and multi-objective analysis. They drive innovation at an organizational level.`,
         pricing: {
            rate: "$50 / hour",
            monthly: "$8,650/mo",
            annual: "$103,800/yr",
            variance: "± $10 USD"
        }
    }
];

export default function TechnologyPage({ params }: PageProps) {
  const tech = getTechBySlug(params.technology);

  if (!tech) {
    notFound();
  }
  
  const seniorityLevels = getSeniorityLevels(tech.name);
  const allTechData = getAllTech();

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": tech.seo_title,
    "description": tech.meta_description,
    "url": `https://hire.teamstation.dev/hire/${tech.slug}`,
    "isPartOf": {
        "@id": "https://hire.teamstation.dev/#website"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Nearshore ${tech.name} Development`,
    "provider": {
      "@type": "Organization",
      "name": "TeamStation AI",
    },
    "areaServed": {
      "@type": "Country",
      "name": "USA",
    },
    "name": tech.seo_title,
    "description": tech.meta_description,
  };

  const faqSchema = tech.pains.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tech.pains.map((pain: PainPoint) => ({
      "@type": "Question",
      "name": pain.pain,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": pain.solution,
      },
    })),
  } : null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-screen-xl">
      <SchemaInjector schema={pageSchema} />
      <SchemaInjector schema={serviceSchema} />
      {faqSchema && <SchemaInjector schema={faqSchema} />}
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-12">
             <div className="relative rounded-xl border shadow-brand bg-[radial-gradient(80%_60%_at_50%_0%,rgba(138,180,255,.12),transparent_70%),linear-gradient(180deg,rgba(255,255,255,.02),transparent)] px-6 py-10 sm:px-10 sm:py-14">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text">
                  {tech.seo_title}
                </h1>
                <p className="mt-4 max-w-2xl text-[15px] text-muted">{tech.intro}</p>
            </div>
          </header>

          {tech.pains.length > 0 && (
            <section className="space-y-8 mb-12">
                {tech.pains.map((pain, index) => {
                    const iconName = (pain.icon as string) || 'AlertTriangle';
                    return (
                        <Card
                            key={index}
                            className="flex flex-col transform transition-all duration-300"
                        >
                            <CardHeader>
                            <CardTitle className="font-semibold text-lg flex items-start gap-3 text-muted">
                                <DynamicIcon name={iconName} className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                                <span>{pain.pain}</span>
                            </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-6">
                            <div>
                                <h3 className="flex items-center gap-2 mb-2 font-semibold text-sm">
                                <DynamicIcon name="ThumbsDown" className="w-5 h-5 text-destructive" />
                                <span>The Problem</span>
                                </h3>
                                <CardDescription>{pain.problem}</CardDescription>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 mb-2 font-semibold text-text text-sm">
                                <DynamicIcon name="ThumbsUp" className="w-5 h-5 text-green-500" />
                                <span>The TeamStation AI Solution</span>
                                </h3>
                                <p className="text-sm text-muted">{pain.solution}</p>
                            </div>
                            </CardContent>
                            <CardFooter className="bg-bg px-6 py-4 border-t">
                            <div className="flex items-center gap-2 text-sm text-muted">
                                <DynamicIcon name="CheckCircle" className="h-5 w-5 text-green-500" />
                                <span className="font-mono text-xs tracking-tight">
                                Proof: {pain.kpi}
                                </span>
                            </div>
                            </CardFooter>
                        </Card>
                    );
                })}
            </section>
          )}
          
          <section className="my-16 border-t pt-12">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-text flex items-center justify-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-primary" />
                    How We Measure Seniority: From L1 to L4 Certified Expert
                </h2>
                <p className="text-muted mt-4">We don’t just match keywords; we measure cognitive ability. Our Axiom Cortex™ engine evaluates every candidate against a 44-point psychometric and technical framework to precisely map their seniority and predict their success on your team. This data-driven approach allows for transparent, value-based pricing.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seniorityLevels.map(level => {
                    return (
                        <Card key={level.level} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <DynamicIcon name={level.icon} className="w-6 h-6 text-primary" />
                                    <CardTitle className="text-lg font-semibold">{level.level}</CardTitle>
                                </div>
                                <CardDescription>{level.role}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                               <p className="text-sm text-muted">{level.description}</p>
                               <div>
                                 <h4 className="font-semibold text-xs uppercase tracking-wider text-muted/80 mb-2">Evaluation Focus</h4>
                                 <p className="text-xs text-muted/90 border-l-2 border-primary/30 pl-3">{level.evaluation}</p>
                               </div>
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


          {tech.evaluation.length > 0 && (
            <section className="mb-12">
                <h2 className="text-2xl font-semibold tracking-tight mb-6">
                  Core Competencies We Validate for {tech.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tech.evaluation.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-bg-elev border p-4 rounded-xl"
                    >
                      <DynamicIcon name="CheckCircle" className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
            </section>
          )}

          {tech.technical_analysis && (
            <section className="prose prose-lg dark:prose-invert max-w-none mb-12 text-muted leading-7">
                <h2 className="text-2xl font-semibold tracking-tight text-text">
                  Our Technical Analysis for {tech.name}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: tech.technical_analysis.replace(/\\n/g, '<br />') }} />
            </section>
          )}

          {tech.interlink_slugs.length > 0 && (
            <section className="mb-12 bg-bg-elev p-6 rounded-xl border">
                <h2 className="text-xl font-semibold tracking-tight mb-4">
                  Related Specializations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tech.interlink_slugs.map((slug) => {
                    const linkedTech = allTechData.find((t) => t.slug === slug);
                    return linkedTech ? (
                      <Button asChild variant="outline" size="sm" key={slug}>
                        <Link
                          href={`/hire/${slug}`}
                          title={`Hire Elite ${linkedTech.name} developers`}
                        >
                          {linkedTech.name}
                        </Link>
                      </Button>
                    ) : null;
                  })}
                </div>
            </section>
          )}

          <section className="mb-12">
             <h2 className="text-xl font-semibold tracking-tight mb-4 text-center">
              Explore Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <Card>
                    <CardHeader>
                        <DynamicIcon name="Building" className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <CardTitle className="font-semibold text-lg">About TeamStation AI</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted mb-4">Learn about our mission to redefine nearshore software development.</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" asChild>
                            <Link href="/about">About Us</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <DynamicIcon name="BookOpen" className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <CardTitle className="font-semibold text-lg">Nearshore vs. Offshore</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted mb-4">Read our CTO’s guide to making the right global talent decision.</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" asChild>
                            <Link href="/playbook/nearshore-vs-offshore">Read the Playbook</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
          </section>

          <section className="text-center py-12 border-t">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Ready to Hire a {tech.name} Expert?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Stop searching, start building. We provide top-tier, vetted
              nearshore {tech.name} talent ready to integrate and deliver from
              day one.
            </p>
            <Button asChild size="lg">
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </Link>
            </Button>
          </section>
        </article>
      </div>
    </div>
  );
}
    
