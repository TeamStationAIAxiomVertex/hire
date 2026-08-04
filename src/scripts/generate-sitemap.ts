/** @Spec
Feature: Sitemap Index Generator
Location: src/scripts/generate-sitemap.ts
Description:
Programmatically builds a sitemap index to connect hire.teamstation.dev with cto.teamstation.dev.
✅ Generates a local sitemap for hire pages.
✅ Generates a root sitemap index file.
✅ Google SEO compliant.
*/

import { getAllTech } from "../lib/dataModel";
import fs from "fs";
import path from "path";
import { categories } from "../lib/categories";
import { productCategory } from "@/lib/data/product";

const BASE_URL = "https://hire.teamstation.dev";
const CTO_SITEMAPS = [
  "https://cto.teamstation.dev/sitemaps/static.xml",
  "https://cto.teamstation.dev/sitemaps/playbook.xml",
  "https://cto.teamstation.dev/sitemaps/case-studies.xml",
  "https://cto.teamstation.dev/sitemaps/comparisons.xml",
  "https://cto.teamstation.dev/sitemaps/research.xml",
  "https://cto.teamstation.dev/sitemaps/hire-pages.xml"
];

function generateLocalSitemap() {
  const techs = getAllTech();
  const allCategories = [...categories, productCategory];

  const staticPages = [
    "", // home
    "/about",
    "/contact",
    "/roles",
    "/sitemap",
    "/legal/privacy",
    "/legal/terms",
    "/nearshore-software-development",
    "/compare/bairesdev",
    "/cto/nearshore-team-topology"
  ];
  
  const techUrls = techs.map((tech) => `${BASE_URL}/hire/${tech.slug}`);

  const roleUrls = allCategories.map(cat => `${BASE_URL}/roles/${cat.slug}`);

  const staticUrls = staticPages.map(page => `${BASE_URL}${page}`);

  const allUrls = [...new Set([...staticUrls, ...techUrls, ...roleUrls])];
  
  const today = new Date().toISOString();

  const urlsetXML = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => {
        let priority = "0.8"; // Default priority
        if (url === BASE_URL || url === `${BASE_URL}/`) {
            priority = "1.0";
        } else if (url.endsWith('/nearshore-software-development')) {
            priority = "0.9";
        } else if (url.includes('/compare/') || url.includes('/playbook/')) {
            priority = "0.8";
        } else if (url.includes('/roles') || url.includes('/hire/')) {
            priority = "0.7";
        } else if (url.includes('/about') || url.includes('/contact')) {
            priority = "0.6";
        } else if (url.includes('/sitemap')) {
            priority = "0.5";
        } else if (url.includes('/legal/')) {
            priority = "0.3";
        }

        return `
    <url>
      <loc>${url}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>`;
      }
    )
    .join("")}
</urlset>`.trim();

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const outPath = path.join(publicDir, "sitemap-local.xml");
  fs.writeFileSync(outPath, urlsetXML, "utf8");
  console.log(`✅ Local sitemap written to: ${outPath}`);
}

export function generateSitemapIndex() {
  const today = new Date().toISOString();
  
  const allSitemaps = [
    `${BASE_URL}/sitemap-local.xml`,
    ...CTO_SITEMAPS
  ];

  const sitemapIndexXML = `
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allSitemaps
    .map(
      (url) => `
  <sitemap>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
    )
    .join("")}
</sitemapindex>`.trim();

  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, sitemapIndexXML, "utf8");
  console.log(`✅ Sitemap Index written to: ${outPath}`);
  console.log(`ℹ️  Remember to submit ${BASE_URL}/sitemap.xml to Google Search Console.`);
}

// Allow running via `ts-node` or script automation
if (require.main === module) {
  generateLocalSitemap();
  generateSitemapIndex();
}
