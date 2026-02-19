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
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="https://builtin.com/sites/www.builtin.com/files/2025-01/TS%20new%20logo%20concept%202024.png"
      alt="TeamStation AI Logo"
      width={32}
      height={32}
      className={cn("w-8 h-8", className)}
      priority
    />
  );
}
