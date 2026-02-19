/** @Spec
Feature: Sitemap Index Generator
Location: src/scripts/generate-sitemap.ts
Description:
Programmatically builds a sitemap index to connect hire.teamstation.dev with cto.teamstation.dev.
✅ Generates a local sitemap for hire pages.
✅ Generates a root sitemap index file.
✅ Google SEO compliant.
*/

import { getAllTech } from &quot;../lib/dataModel&quot;;
import fs from &quot;fs&quot;;
import path from &quot;path&quot;;
import { categories } from &quot;../lib/categories&quot;;
import { productCategory } from &quot;@/lib/data/product&quot;;

const BASE_URL = &quot;https://hire.teamstation.dev&quot;;
const CTO_SITEMAPS = [
  &quot;https://cto.teamstation.dev/sitemaps/static.xml&quot;,
  &quot;https://cto.teamstation.dev/sitemaps/playbook.xml&quot;,
  &quot;https://cto.teamstation.dev/sitemaps/case-studies.xml&quot;,
  &quot;https://cto.teamstation.dev/sitemaps/comparisons.xml&quot;,
  &quot;https://cto.teamstation.dev/sitemaps/research.xml&quot;,
  &quot;https://cto.teamstation.dev/sitemaps/hire-pages.xml&quot;
];

function generateLocalSitemap() {
  const techs = getAllTech();
  const allCategories = [...categories, productCategory];

  const staticPages = [
    &quot;&quot;, // home
    &quot;/about&quot;,
    &quot;/contact&quot;,
    &quot;/roles&quot;,
    &quot;/sitemap&quot;,
    &quot;/legal/privacy&quot;,
    &quot;/legal/terms&quot;,
    &quot;/nearshore-software-development&quot;,
    &quot;/compare/bairesdev&quot;,
    &quot;/cto/nearshore-team-topology&quot;
  ];
  
  const techUrls = techs.map((tech) => `${BASE_URL}/hire/${tech.slug}`);

  const roleUrls = allCategories.map(cat => `${BASE_URL}/roles/${cat.slug}`);

  const staticUrls = staticPages.map(page => `${BASE_URL}${page}`);

  const allUrls = [...new Set([...staticUrls, ...techUrls, ...roleUrls])];
  
  const today = new Date().toISOString();

  const urlsetXML = `
<urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;>
  ${allUrls
    .map(
      (url) => {
        let priority = &quot;0.8&quot;; // Default priority
        if (url === BASE_URL || url === `${BASE_URL}/`) {
            priority = &quot;1.0&quot;;
        } else if (url.endsWith('apos;/nearshore-software-development'apos;)) {
            priority = &quot;0.9&quot;;
        } else if (url.includes('apos;/compare/'apos;) || url.includes('apos;/playbook/'apos;)) {
            priority = &quot;0.8&quot;;
        } else if (url.includes('apos;/roles'apos;) || url.includes('apos;/hire/'apos;)) {
            priority = &quot;0.7&quot;;
        } else if (url.includes('apos;/about'apos;) || url.includes('apos;/contact'apos;)) {
            priority = &quot;0.6&quot;;
        } else if (url.includes('apos;/sitemap'apos;)) {
            priority = &quot;0.5&quot;;
        } else if (url.includes('apos;/legal/'apos;)) {
            priority = &quot;0.3&quot;;
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
    .join(&quot;&quot;)}
</urlset>`.trim();

  const publicDir = path.join(process.cwd(), &quot;public&quot;);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const outPath = path.join(publicDir, &quot;sitemap-local.xml&quot;);
  fs.writeFileSync(outPath, urlsetXML, &quot;utf8&quot;);
  console.log(`✅ Local sitemap written to: ${outPath}`);
}

export function generateSitemapIndex() {
  const today = new Date().toISOString();
  
  const allSitemaps = [
    `${BASE_URL}/sitemap-local.xml`,
    ...CTO_SITEMAPS
  ];

  const sitemapIndexXML = `
<sitemapindex xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;>
  ${allSitemaps
    .map(
      (url) => `
  <sitemap>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`,
    )
    .join(&quot;&quot;)}
</sitemapindex>`.trim();

  const outPath = path.join(process.cwd(), &quot;public&quot;, &quot;sitemap.xml&quot;);
  fs.writeFileSync(outPath, sitemapIndexXML, &quot;utf8&quot;);
  console.log(`✅ Sitemap Index written to: ${outPath}`);
  console.log(`ℹ️  Remember to submit ${BASE_URL}/sitemap.xml to Google Search Console.`);
}

// Allow running via `ts-node` or script automation
if (require.main === module) {
  generateLocalSitemap();
  generateSitemapIndex();
}
