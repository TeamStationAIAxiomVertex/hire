/** @Spec
* Feature: Role Category Page
* Type: page
* Route: /roles/[slug]
* Description: Displays a list of technologies for a specific role category.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Generates dynamic pages for each category.
* ✅ Included in sitemap.xml
*/

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getAllTech } from "@/lib/dataModel";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, CheckCircle, ShieldQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);
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
      canonical: `/roles/${params.slug}`,
    },
  };
}

export default function RolePage({ params }: PageProps) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) {
    return notFound();
  }

  const allTechs = getAllTech();
  const techsInCategory = allTechs.filter(tech => tech.categorySlug === category.slug);

  const Icon = category.icon;

  return (
    <div className="container mx-auto py-16 space-y-12 max-w-screen-xl">
      <header className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-4">
          <Icon className="w-10 h-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            {category.name}
          </h1>
        </div>
        <p className="text-lg text-muted">{category.description}</p>
      </header>
      
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
  return categories.map((category) => ({
    slug: category.slug,
  }));
}
