/** @Spec
 * Feature: Dynamic Breadcrumbs
 * Type: component
 * Description: Renders breadcrumb navigation based on the current URL path.
 * Acceptance:
 * ✅ Compiles without TypeScript errors
 * ✅ Lints and formats cleanly
 * ✅ Handles root, static, and dynamic routes.
 */

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment, memo } from 'react';
import { getTechBySlug } from '@/lib/dataModel';
import { categories } from '@/lib/categories';

// Function to convert a slug to a title-cased string
const toTitleCase = (str: string) => {
  return str
    .replace(/-/g, ' ')
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

// Memoize the component to prevent re-renders when parent client components change.
export const Breadcrumbs = memo(function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname) return null;

  // Filter out empty segments that result from trailing slashes
  const segments = pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on the homepage
  if (segments.length === 0) {
    return null;
  }

  let breadcrumbs: { href: string; title: string; isLast: boolean }[] = [];

  // Special handling for the CTO Topology Guide page
  if (pathname.includes('/cto/nearshore-team-topology')) {
      breadcrumbs = [{
          href: '/cto/nearshore-team-topology',
          title: 'Topology Guide',
          isLast: true,
      }];
  } else {
    breadcrumbs = segments.map((segment, index) => {
      const isLast = index === segments.length - 1;
      let href = '/' + segments.slice(0, index + 1).join('/');
      let title = toTitleCase(segment);

      // Custom logic for titles and hrefs
      if(segments[0] === 'hire') {
          if(index === 0) {
              href = '/roles';
              title = 'Roles';
          }
          if(index === 1) {
              const tech = getTechBySlug(segment);
              if (tech) title = tech.name;
          }
      } else if (segments[0] === 'roles' ) {
          if (index === 0) {
              href = '/roles';
          }
          if(index === 1) {
              const category = categories.find(c => c.slug === segment);
              if (category) title = category.name;
          }
      } else if (segments[0] === 'legal') {
          if (index === 0) {
              href = '/legal/privacy';
          }
      } else if (segments[0] === 'playbook') {
          if (index === 0) {
              // The "Playbook" breadcrumb should link to the main corporate site as a logical parent.
              href = 'https://cto.teamstation.dev';
          }
      }

      return { href, title, isLast };
    });
  }


  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-8 max-w-screen-xl">
      <ol className="flex items-center space-x-2 text-sm text-muted">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {breadcrumbs.map((crumb) => (
          <Fragment key={crumb.href}>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link
                href={crumb.href}
                className={crumb.isLast ? "font-medium text-text" : "hover:text-primary transition-colors"}
                aria-current={crumb.isLast ? 'page' : undefined}
                target={crumb.href.startsWith('http') ? '_blank' : undefined}
                rel={crumb.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {crumb.title}
              </Link>
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
});
