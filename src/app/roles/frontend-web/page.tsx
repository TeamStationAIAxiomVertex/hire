/** @Spec
* Feature: Role Category Page
* Type: page
* Route: /roles/frontend-web
* Description: Displays a list of technologies for the Frontend & UI/UX role category.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Generates dynamic pages for each category.
* ✅ Included in sitemap.xml
*/

import type { Metadata } from &quot;next&quot;;
import { notFound } from &quot;next/navigation&quot;;
import Link from &quot;next/link&quot;;
import { categories } from &quot;@/lib/categories&quot;;
import { getAllTech } from &quot;@/lib/dataModel&quot;;
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from &quot;@/components/ui/card&quot;;
import { ArrowRight, AlertTriangle, CheckCircle, ShieldQuestion, BrainCircuit, GraduationCap, Star, Shield, Trophy } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { FrontendWebSEOArticle } from &quot;@/components/roles/articles/frontend-web-article&quot;;
import DynamicIcon from &quot;@/components/DynamicIcon&quot;;

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories.find((c) => c.slug === ’frontend-web’);
  if (!category) {
    return {
      title: &quot;Role Not Found&quot;,
      description: &quot;The requested engineering role category does not exist.&quot;,
    };
  }

  const title = `Hire ${category.name} Experts | TeamStation AI`;

  return {
    title,
    description: category.description,
    alternates: {
      canonical: `/roles/frontend-web`,
    },
  };
}

const getSeniorityLevels = (categoryName: string) => [
    {
        level: &quot;L1 Proficient&quot;,
        role: &quot;Guided Contributor&quot;,
        icon: GraduationCap,
        description: `Contributes on component-level tasks within the ${categoryName} domain. Foundational knowledge and learning agility are validated.`,
        evaluation: &quot;Axiom Cortex™ validates core competencies via correctness, method clarity, and fluency scoring. We ensure they can reliably execute assigned tasks.&quot;,
        pricing: {
            rate: &quot;$20 /hour&quot;,
            monthly: &quot;$3,460/mo&quot;,
            annual: &quot;$41,520/yr&quot;,
            variance: &quot;± $5 USD&quot;
        }
    },
    {
        level: &quot;L2 Mid-Level&quot;,
        role: &quot;Independent Feature Owner&quot;,
        icon: Star,
        description: `Independently ships features and services in the ${categoryName} space, handling ambiguity with minimal supervision.`,
        evaluation: &quot;We assess their mental model accuracy and problem-solving via composite scores and role-level normalization. They can own features end-to-end.&quot;,
        pricing: {
            rate: &quot;$30 / hour&quot;,
            monthly: &quot;$5,190/mo&quot;,
            annual: &quot;$62,280/yr&quot;,
            variance: &quot;± $5 USD&quot;
        }
    },
    {
        level: &quot;L3 Senior&quot;,
        role: &quot;Leads Complex Projects&quot;,
        icon: Shield,
        description: `Leads cross-component projects, raises standards, and provides mentorship within the ${categoryName} discipline.`,
        evaluation: `Axiom Cortex™ measures their system design skills and architectural instinct specific to the ${categoryName} domain via trait synthesis and semantic alignment scoring. They are force-multipliers.`,
        pricing: {
            rate: &quot;$40 / hour&quot;,
            monthly: &quot;$6,920/mo&quot;,
            annual: &quot;$83,040/yr&quot;,
            variance: &quot;± $5 USD&quot;
        }
    },
    {
        level: &quot;L4 Expert&quot;,
        role: &quot;Org-Level Architect&quot;,
        icon: Trophy,
        description: `Sets architecture and technical strategy for ${categoryName} across teams, solving your most complex business problems.`,
        evaluation: `We validate their ability to make critical trade-offs related to the ${categoryName} domain via utility-optimized decision gates and multi-objective analysis. They drive innovation at an organizational level.`,
         pricing: {
            rate: &quot;$50 / hour&quot;,
            monthly: &quot;$8,650/mo&quot;,
            annual: &quot;$103,800/yr&quot;,
            variance: &quot;± $10 USD&quot;
        }
    }
];


export default function RolePage({ params }: PageProps) {
  const category = categories.find((c) => c.slug === ’frontend-web’);
  if (!category) {
    return notFound();
  }

  const allTechs = getAllTech();
  const techsInCategory = allTechs.filter(tech => tech.categorySlug === category.slug);
  const seniorityLevels = getSeniorityLevels(category.name);

  return (
    <div className=&quot;container mx-auto py-16 space-y-12 max-w-screen-xl&quot;>
      <header className=&quot;text-center max-w-3xl mx-auto&quot;>
        <div className=&quot;flex justify-center items-center gap-4 mb-4&quot;>
          <DynamicIcon name={category.icon} className=&quot;w-10 h-10 text-primary&quot; />
          <h1 className=&quot;text-3xl md:text-4xl font-semibold tracking-tighter&quot;>
            {category.name}
          </h1>
        </div>
        <p className=&quot;text-lg text-muted&quot;>{category.description}</p>
      </header>

      <FrontendWebSEOArticle />
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
        {techsInCategory.map((tech) => (
          <Link href={`/hire/${tech.slug}`} key={tech.slug} className=&quot;group&quot;>
            <Card className=&quot;h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col hover:border-primary/50 bg-bg-elev&quot;>
              <CardHeader>
                <div className=&quot;flex items-center justify-between&quot;>
                  <CardTitle className=&quot;font-semibold text-lg&quot;>{tech.name}</CardTitle>
                  <ArrowRight className=&quot;w-5 h-5 text-muted transition-transform duration-300 group-hover:translate-x-1&quot; />
                </div>
              </CardHeader>
              <CardContent className=&quot;flex-grow&quot;>
                <CardDescription className=&quot;text-sm&quot;>
                  {tech.meta_description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

       <section className=&quot;my-16 border-t pt-12&quot;>
            <header className=&quot;text-center max-w-3xl mx-auto mb-12&quot;>
                <h2 className=&quot;text-3xl font-semibold tracking-tight text-text flex items-center justify-center gap-3&quot;>
                    <BrainCircuit className=&quot;w-8 h-8 text-primary&quot; />
                    How We Measure Seniority in {category.name}
                </h2>
                <p className=&quot;text-muted mt-4&quot;>For the {category.name.toLowerCase()} domain, our Axiom Cortex™ engine measures the cognitive traits required for success. This data-driven approach allows for transparent, value-based pricing for every seniority level.</p>
            </header>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                {seniorityLevels.map(level => {
                    const Icon = level.icon;
                    return (
                        <Card key={level.level} className=&quot;flex flex-col&quot;>
                            <CardHeader>
                                <div className=&quot;flex items-center gap-3&quot;>
                                    <Icon className=&quot;w-6 h-6 text-primary&quot; />
                                    <CardTitle className=&quot;text-lg font-semibold&quot;>{level.level}</CardTitle>
                                </div>
                                <CardDescription>{level.role}</CardDescription>
                            </CardHeader>
                            <CardContent className=&quot;flex-grow space-y-4&quot;>
                                <p className=&quot;text-sm text-muted&quot;>{level.description}</p>
                               <div>
                                 <h4 className=&quot;font-semibold text-xs uppercase tracking-wider text-muted/80 mb-2&quot;>Evaluation Focus</h4>
                                 <p className=&quot;text-xs text-muted/90 border-l-2 border-primary/30 pl-3&quot;>{level.evaluation}</p>
                               </div>
                            </CardContent>
                            <CardFooter className=&quot;flex flex-col items-start bg-bg-elev border-t p-4&quot;>
                                <p className=&quot;font-semibold text-lg&quot;>{level.pricing.rate}</p>
                                <p className=&quot;text-xs text-muted&quot;>{level.pricing.monthly} &middot; {level.pricing.annual}</p>
                                <p className=&quot;text-xs text-muted/50 mt-1&quot;>{level.pricing.variance}</p>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
             <p className=&quot;text-xs text-muted text-center mt-6&quot;>Pricing estimates are calculated using the U.S. standard of 173 workable hours per month, which represents the realistic full-time workload after adjusting for federal holidays, paid time off (PTO), and sick leave.</p>
        </section>

      {category.pains && category.pains.length > 0 && (
        <section className=&quot;pt-16 mt-16 border-t&quot;>
            <header className=&quot;text-center max-w-3xl mx-auto mb-12&quot;>
                <h2 className=&quot;text-3xl font-semibold tracking-tight text-text&quot;>How We Vet for Elite {category.name} Talent</h2>
                <p className=&quot;text-muted mt-4&quot;>Our Axiom Cortex™ engine identifies top-tier talent by simulating real-world challenges specific to {category.name.toLowerCase()}. We select for engineers who have already solved your hardest problems.</p>
            </header>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                {category.pains.map((painPoint, index) => (
                    <Card key={index} className=&quot;flex flex-col bg-bg-elev border-border&quot;>
                        <CardHeader>
                            <div className=&quot;flex items-start gap-4&quot;>
                                <AlertTriangle className=&quot;h-8 w-8 text-destructive mt-1 flex-shrink-0&quot; />
                                <div>
                                    <CardTitle className=&quot;font-semibold text-lg text-text&quot;>The Pain: &quot;{painPoint.pain}&quot;</CardTitle>
                                    <CardDescription className=&quot;mt-2 text-sm&quot;>{painPoint.problem}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className=&quot;flex-grow&quot;>
                             <div className=&quot;border-l-2 border-primary/30 pl-6 ml-4&quot;>
                                 <h3 className=&quot;font-semibold flex items-center gap-2 text-sm text-muted&quot;>
                                    <ShieldQuestion className=&quot;h-4 w-4&quot; />
                                    <span>The Business Impact</span>
                                 </h3>
                                <p className=&quot;text-sm text-muted mt-2&quot;>This isn’t just a technical issue; it’s a drag on velocity and a source of production risk. A single mis-hire here costs you revenue, team morale, and market position.</p>
                            </div>
                        </CardContent>
                        <CardFooter className=&quot;bg-bg p-6 border-t&quot;>
                             <div className=&quot;flex items-start gap-4&quot;>
                                <CheckCircle className=&quot;h-8 w-8 text-green-500 mt-1 flex-shrink-0&quot; />
                                <div>
                                    <h3 className=&quot;font-semibold text-text&quot;>The TeamStation AI Solution</h3>
                                    <p className=&quot;text-sm text-muted mt-2&quot;>{painPoint.solution}</p>
                                    {painPoint.kpi && (
                                        <div className=&quot;mt-4 text-xs font-mono tracking-tight text-primary/80 border-t border-dashed border-primary/20 pt-3&quot;>
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

      <section className=&quot;mt-20 border-t border-border pt-12&quot;>
          <h2 className=&quot;text-2xl font-semibold text-text flex items-center gap-2&quot;>
            <CheckCircle className=&quot;w-6 h-6 text-green-500&quot; /> Proof ➜ Quantifiable Precision
          </h2>
          <div className=&quot;grid md:grid-cols-3 gap-4 mt-6&quot;>
            <Card className=&quot;bg-bg-elev border p-4&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-lg text-text&quot;>9-Day Time-to-Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-sm text-muted&quot;>Automated vetting pipelines deliver fully evaluated candidates in under 10 days.</p>
              </CardContent>
            </Card>
            <Card className=&quot;bg-bg-elev border p-4&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-lg text-text&quot;>95% Day-One Tool Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-sm text-muted&quot;>All engineers are CI/CD provisioned with full environment compatibility verified.</p>
              </CardContent>
            </Card>
            <Card className=&quot;bg-bg-elev border p-4&quot;>
              <CardHeader>
                <CardTitle className=&quot;text-lg text-text&quot;>42% Delivery Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-sm text-muted&quot;>Cognitive calibration across pods enables faster alignment and fewer regressions.</p>
              </CardContent>
            </Card>
          </div>
        </section>


       <section className=&quot;text-center py-16 mt-16 border-t&quot;>
            <h2 className=&quot;font-semibold text-3xl tracking-tighter mb-4&quot;>
              Ready to Hire an Elite {category.name} Expert?
            </h2>
            <p className=&quot;text-lg text-muted max-w-2xl mx-auto mb-8&quot;>
              Stop interviewing resumes and start hiring for cognitive fit. Our Axiom Cortex™ engine identifies top-tier talent in the {category.name} discipline, ready to integrate with your team and deliver from day one.
            </p>
            <Button asChild size=&quot;lg&quot;>
              <Link href=&quot;/contact&quot;>Book a Discovery Call</Link>
            </Button>
        </section>
    </div>
  );
}

export async function generateStaticParams() {
    // This is now a static page for a single category, but Next.js expects this function.
    // We can just return the slug for this specific page.
    return [{ slug: ’frontend-web’ }];
}

  