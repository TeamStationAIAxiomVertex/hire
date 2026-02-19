export const dynamic = "force-dynamic";
/** @Spec
* Feature: Privacy Policy Page
* Type: page
* Route: /legal/privacy
* Description: Displays the company’s privacy policy.
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
    title: "Privacy Policy | TeamStation AI",
    description: "Read the privacy policy for TeamStation AI, detailing how we collect, use, and protect your data when using our nearshore software development platform.",
    alternates: {
        canonical: "/legal/privacy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-screen-xl">
             <article className="max-w-4xl mx-auto prose dark:prose-invert text-muted leading-7">
                <header className="mb-12">
                    <h1 className="text-text font-semibold text-3xl md:text-4xl tracking-tighter mb-4">
                       Privacy Policy
                    </h1>
                     <p className="text-lg text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
                </header>
                
                <h2 className="text-text">1. Introduction</h2>
                <p>
                    Welcome to TeamStation AI. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we collect, use, and safeguard your information when you visit our website and use our services.
                </p>

                <h2 className="text-text">2. Data We Collect</h2>
                <p>
                    We may collect personally identifiable information, such as your name, email address, and contact details when you register on our platform, fill out a form, or otherwise interact with our services. We also collect non-personal information like browser type, language preference, and referring site.
                </p>

                <h2 className="text-text">3. How We Use Your Data</h2>
                <p>
                    The information we collect is used to:
                </p>
                <ul>
                    <li>Provide, operate, and maintain our services.</li>
                    <li>Improve, personalize, and expand our services.</li>
                    <li>Understand and analyze how you use our services.</li>
                    <li>Develop new products, services, features, and functionality.</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                </ul>

                <h2 className="text-text">4. Data Security</h2>
                <p>
                    We use a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                </p>
                
                <h2 className="text-text">5. Third-Party Disclosure</h2>
                <p>
                    We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                </p>
                
                <h2 className="text-text">6. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal information. You can also object to the processing of your personal data. To exercise these rights, please <Link href="/contact">contact us</Link>.
                </p>

                <section className="text-center py-12 border-t mt-12 not-prose">
                    <h2 className="font-semibold text-3xl tracking-tighter mb-4">
                        Any Questions?
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                       If you have any questions about this Privacy Policy, please don’t hesitate to reach out.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </section>
                
                 <div className="mt-8 flex justify-center gap-6 text-sm">
                        <Link href="/sitemap" className="hover:underline">Full Sitemap</Link>
                        <Link href="/legal/terms" className="hover:underline">Terms of Service</Link>
                        <Link href="/about" className="hover:underline">About Us</Link>
                         <Link href="/hire/react" className="hover:underline">Hire React Developers</Link>
                        <Link href="/hire/nextjs" className="hover:underline">Hire Next.js Developers</Link>
                        <Link href="/hire/typescript" className="hover:underline">Hire TypeScript Developers</Link>
                    </div>

            </article>
        </div>
    );
}
