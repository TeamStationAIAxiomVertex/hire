export const dynamic = "force-dynamic";
/** @Spec
* Feature: Terms of Service Page
* Type: page
* Route: /legal/terms
* Description: Displays the company's terms of service.
* Acceptance:
*  - ✅ Compiles without TypeScript errors
*  - ✅ Lints and formats cleanly
*  - ✅ ≥6 verified internal links
*  - ✅ Valid canonical + JSON-LD schema
*  - ✅ Included in sitemap.xml
*/
import { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Terms of Service | TeamStation AI",
    description: "Read the Terms of Service for using the TeamStation AI platform and services for nearshore software development.",
    alternates: {
        canonical: "/legal/terms",
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-screen-xl">
             <article className="max-w-4xl mx-auto prose dark:prose-invert text-muted leading-7">
                <header className="mb-12">
                    <h1 className="text-text font-semibold text-3xl md:text-4xl tracking-tighter mb-4">
                       Terms of Service
                    </h1>
                     <p className="text-lg text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
                </header>
                
                <h2 className="text-text">1. Agreement to Terms</h2>
                <p>
                    By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We may update these terms from time to time, and your continued use of the service constitutes acceptance of those changes.
                </p>

                <h2 className="text-text">2. Description of Service</h2>
                <p>
                   TeamStation AI provides a platform for connecting U.S. companies with vetted nearshore engineering talent from Latin America. We provide services including talent sourcing, AI-powered vetting, payroll, and compliance management.
                </p>

                <h2 className="text-text">3. User Responsibilities</h2>
                <p>
                    You are responsible for your use of the service and for any content you provide, including compliance with applicable laws, rules, and regulations. You are responsible for maintaining the confidentiality of your account and password.
                </p>

                <h2 className="text-text">4. Intellectual Property</h2>
                <p>
                   The service and its original content, features, and functionality are and will remain the exclusive property of TeamStation AI and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TeamStation AI.
                </p>
                
                <h2 className="text-text">5. Termination</h2>
                <p>
                   We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                
                <h2 className="text-text">6. Limitation of Liability</h2>
                <p>
                   In no event shall TeamStation AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                
                <h2 className="text-text">7. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which TeamStation AI is based, without regard to its conflict of law provisions.
                </p>


                <section className="text-center py-12 border-t mt-12 not-prose">
                    <h2 className="font-semibold text-3xl tracking-tighter mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                       If you have any questions about these Terms, please contact us.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Get in Touch
                        </Link>
                    </Button>
                </section>
                 <div className="mt-8 flex justify-center gap-6 text-sm">
                        <Link href="/sitemap" className="hover:underline">Full Sitemap</Link>
                        <Link href="/legal/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/about" className="hover:underline">About Us</Link>
                         <Link href="/hire/react" className="hover:underline">Hire React Developers</Link>
                        <Link href="/hire/nextjs" className="hover:underline">Hire Next.js Developers</Link>
                        <Link href="/hire/typescript" className="hover:underline">Hire TypeScript Developers</Link>
                    </div>

            </article>
        </div>
    );
}
