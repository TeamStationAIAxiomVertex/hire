
"use client";
/** @Spec

Feature: Global Header
Type: component
Route: N/A
Description: The header component for the entire application, containing navigation and primary calls-to-action. Includes an SEO-optimized dropdown for roles.
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ ≥6 verified internal links
✅ Valid canonical + JSON-LD schema
✅ Included in sitemap.xml */

'use client';

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Users, Calendar, ChevronDown, Building, LogIn, Menu, BookOpen, Briefcase, List } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/categories";
import { corporateLinks } from "@/lib/corporateLinks";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-bg-elev/80 backdrop-blur-sm supports-[backdrop-filter]:bg-bg-elev/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <Link
          href="/"
          className="mr-4 flex items-center gap-2"
          aria-label="Back to homepage"
        >
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold tracking-tight">
            TeamStation AI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-muted transition-colors hover:text-text focus:outline-none">
              <Users className="h-4 w-4" />
              <span>Roles</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
               <DropdownMenuItem asChild>
                  <Link
                    href="/roles"
                    title="All Nearshore Engineering Roles"
                    className="flex items-start gap-3"
                  >
                    <List className="mr-2 h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">All Nearshore Engineering Roles</div>
                      <p className="text-xs text-muted whitespace-normal">
                        Browse our full list of vetted technology and role categories.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuItem key={category.slug} asChild>
                  <Link
                    href={`/roles/${category.slug}`}
                    title={category.keywordPhrase}
                    className="flex items-start gap-3"
                  >
                    <category.icon className="mr-2 h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{category.name}</div>
                      <p className="text-xs text-muted whitespace-normal">
                        {category.summary}
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-muted transition-colors hover:text-text focus:outline-none">
              <Building className="h-4 w-4" />
              <span>Company</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              {corporateLinks.map((link) => (
                <DropdownMenuItem key={link.title} asChild>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    className="flex items-start gap-3"
                  >
                    <div>
                      <div className="font-semibold">{link.title}</div>
                      <p className="text-xs text-muted whitespace-normal">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
           <Link href="/cto/nearshore-team-topology" className="flex items-center gap-2 text-muted transition-colors hover:text-text focus:outline-none">
                <BookOpen className="h-4 w-4" />
                <span>Topology Guide</span>
            </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
           <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link
                  href="https://app.teamstation.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Platform Login
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
           </div>
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-6 p-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl font-bold tracking-tight">
                      TeamStation AI
                    </span>
                  </Link>
                  <div className="flex flex-col gap-4">
                    <Link href="/roles" className="flex items-start gap-3 text-muted" onClick={() => setIsMobileMenuOpen(false)}>
                        <List className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-text">All Nearshore Engineering Roles</div>
                           <p className="text-xs">Browse all of our specializations.</p>
                        </div>
                    </Link>

                    <h3 className="font-semibold text-lg border-t pt-4 mt-2">Roles by Category</h3>
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/roles/${category.slug}`}
                        className="flex items-start gap-3 text-muted"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <category.icon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-text">{category.name}</div>
                          <p className="text-xs">{category.summary}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                   <div className="flex flex-col gap-4 border-t pt-6">
                    <h3 className="font-semibold text-lg">Company</h3>
                    {corporateLinks.map((link) => (
                       <Link
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-muted"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div>
                          <div className="font-semibold text-text">{link.title}</div>
                          <p className="text-xs">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                   </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
