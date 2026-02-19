/** @Spec

Feature: [Feature Name]
Type: [page|component|script|lib]
Route: [Exact Route]
Description: [Concise summary]
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ ≥6 verified internal links
✅ Valid canonical + JSON-LD schema
✅ Included in sitemap.xml */
import { clsx, type ClassValue } from &quot;clsx&quot;;
import { twMerge } from &quot;tailwind-merge&quot;;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, &quot;-&quot;) // Replace spaces with -
    .replace(/&/g, &quot;-and-&quot;) // Replace & with 'apos;and'apos;
    .replace(/[^À-ſa-z0-9-]+/g, &quot;&quot;) // Remove all non-word chars
    .replace(/--+/g, &quot;-&quot;); // Replace multiple - with single -
}
