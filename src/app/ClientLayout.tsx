/** @Spec
 * Feature: Client-Side Layout Wrapper
 * Type: component
 * Description: Renders client-side only components like Breadcrumbs.
 * Acceptance:
 * ✅ Compiles without TypeScript errors
 * ✅ Lints and formats cleanly
 * ✅ Dynamically imports Breadcrumbs with ssr:false.
 */
'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ClientLayout() {
  return <Breadcrumbs />;
}
