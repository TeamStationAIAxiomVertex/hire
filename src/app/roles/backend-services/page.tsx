/** @Spec
* Feature: Role Category Page - Backend & APIs
* Type: page
* Route: /roles/backend-services
* Description: Displays a list of technologies for the Backend & APIs role category.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Generates a static page for the backend-services category.
* ✅ Included in sitemap.xml
*/

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getAllTech } from "@/lib/dataModel";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, CheckCircle, ShieldQuestion, BrainCircuit, GraduationCap, Star, Shield, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackendApisSEOArticle } from "@/components/roles/articles/backend-apis-article";
import DynamicIcon from "@/components/DynamicIcon";

export async function generateMetadata(): Promise<Metadata> {
  const category = categories.find((c) => c.slug === 'backend-services');
  if (!category) {
    return {
      title: "Role Not Found",
      description: "The requested engineering role category does not exist.",
    };
  }

  const title = `Hire ${category.name} Experts | TeamStation AI`;

  return {
    title,
    description: category.description,
    alternates: {
      canonical: `/roles/backend-services`,
    },
  };
}

const getSeniorityLevels = (categoryName: string) => [
    {
        level: "L1 Proficient",
        role: "Guided Contributor",
        icon: GraduationCap,
        description: `Contributes on component-level tasks within the ${categoryName} domain. Foundational knowledge and learning agility are validated.`,
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
        icon: Star,
        description: `Independently ships features and services in the ${categoryName} space, handling ambiguity with minimal supervision.`,
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
        icon: Shield,
        description: `Leads cross-component projects, raises standards, and provides mentorship within the ${categoryName} discipline.`,
        evaluation: `Axiom Cortex™ measures their system design skills and architectural instinct specific to the ${categoryName} domain via trait synthesis and semantic alignment scoring. They are force-multipliers.`,
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
        icon: Trophy,
        description: `Sets architecture and technical strategy for ${categoryName} across teams, solving your most complex business problems.`,
        evaluation: `We validate their ability to make critical trade-offs related to the ${categoryName} domain via utility-optimized decision gates and multi-objective analysis. They drive innovation at an organizational level.`,
         pricing: {
            rate: "$50 / hour",
            monthly: "$8,650/mo",
            annual: "$103,800/yr",
            variance: "± $10 USD"
        }
    }
];


export default function RolePage() {
  const category = categories.find((c) => c.slug === 'backend-services');
  if (!category) {
    return notFound();
  }

  const allTechs = getAllTech();
  const techsInCategory = allTechs.filter(tech => tech.categorySlug === category.slug);
  const seniorityLevels = getSeniorityLevels(category.name);

  return (
    <div className="container mx-auto py-16 space-y-12 max-w-screen-xl">
      <header className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-4">
          <DynamicIcon name={category.icon} className="w-10 h-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            {category.name}
          </h1>
        </div>
        <p className="text-lg text-muted">{category.description}</p>
      </header>
      
      <BackendApisSEOArticle />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techsInCategory.map((tech) => (
          <Link href={`/hire/${tech.slug}`} key={tech.slug} className="group">
            <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col hover:border-primary/50 bg-bg-elev">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-semibold text-lg">{tech.name}</CardTitle>
                  <ArrowRight className="w-5 h-5 text-muted transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm">
                  {tech.meta_description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

       <section className="my-16 border-t pt-12">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-text flex items-center justify-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-primary" />
                    How We Measure Seniority in {category.name}
                </h2>
                <p className="text-muted mt-4">For the {category.name.toLowerCase()} domain, our Axiom Cortex™ engine measures the cognitive traits required for success. This data-driven approach allows for transparent, value-based pricing for every seniority level.</p>
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
                            <CardContent className="flex-grow space-y-4">
                                <p className="text-sm text-muted">{level.description}</p>
                               <div>
                                 <h4 className="font-semibold text-xs uppercase tracking-wider text-muted/80 mb-2">Evaluation Focus</h4>
                                 <p className="text-xs text-muted/90 border-l-2 border-primary/30 pl-3">{level.evaluation}</p>
                               </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start bg-bg-elev border-t p-4">
                                <p className="font-semibold text-lg">{level.pricing.rate}</p>
                                <p className="text-xs text-muted">{level.pricing.monthly} · {level.pricing.annual}</p>
                                <p className="text-xs text-muted/50 mt-1">{level.pricing.variance}</p>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
             <p className="text-xs text-muted text-center mt-6">Pricing estimates are calculated using the U.S. standard of 173 workable hours per month, which represents the realistic full-time workload after adjusting for federal holidays, paid time off (PTO), and sick leave.</p>
        </section>

      {category.pains && category.pains.length > 0 && (
        <section className="pt-16 mt-16 border-t">
            <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-text">How We Vet for Elite {category.name} Talent</h2>
                <p className="text-muted mt-4">Our Axiom Cortex™ engine identifies top-tier talent by simulating real-world challenges specific to {category.name.toLowerCase()}. We select for engineers who have already solved your hardest problems.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.pains.map((painPoint, index) => (
                    <Card key={index} className="flex flex-col bg-bg-elev border-border">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-8 w-8 text-destructive mt-1 flex-shrink-0" />
                                <div>
                                    <CardTitle className="font-semibold text-lg text-text">The Pain: "{painPoint.pain}"</CardTitle>
                                    <CardDescription className="mt-2 text-sm">{painPoint.problem}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <div className="border-l-2 border-primary/30 pl-6 ml-4">
                                 <h3 className="font-semibold flex items-center gap-2 text-sm text-muted">
                                    <ShieldQuestion className="h-4 w-4" />
                                    <span>The Business Impact</span>
                                 </h3>
                                <p className="text-sm text-muted mt-2">This isn't just a technical issue; it's a drag on velocity and a source of production risk. A single mis-hire here costs you revenue, team morale, and market position.</p>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-bg p-6 border-t">
                             <div className="flex items-start gap-4">
                                <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-text">The TeamStation AI Solution</h3>
                                    <p className="text-sm text-muted mt-2">{painPoint.solution}</p>
                                    {painPoint.kpi && (
                                        <div className="mt-4 text-xs font-mono tracking-tight text-primary/80 border-t border-dashed border-primary/20 pt-3">
                                            Vetting Proof: {painPoint.kpi}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
      )}

      <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl font-semibold text-text flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" /> Proof ➜ Quantifiable Precision
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


       <section className="text-center py-16 mt-16 border-t">
            <h2 className="font-semibold text-3xl tracking-tighter mb-4">
              Ready to Hire an Elite {category.name} Expert?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Stop interviewing resumes and start hiring for cognitive fit. Our Axiom Cortex™ engine identifies top-tier talent in the {category.name} discipline, ready to integrate with your team and deliver from day one.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
        </section>
    </div>
  );
}

export async function generateStaticParams() {
    // This is now a static page for a single category, but Next.js expects this function.
    // We can just return the slug for this specific page.
    return [{ slug: 'backend-services' }];
}

  