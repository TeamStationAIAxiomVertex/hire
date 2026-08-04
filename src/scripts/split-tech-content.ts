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
/**
 * @Spec
 * Feature: Split and Lazy-Load Technology Content
 * Type: script
 * Route: /src/scripts/split-tech-content.ts
 * Description: Splits technologyskillscontent.ts into category modules and builds a lazy loader.
 */

import fs from "fs";
import path from "path";

const SRC = path.join(process.cwd(), "src/lib/technologyskillscontent.ts");
const OUT_DIR = path.join(process.cwd(), "src/lib/data");

/**
 * Ensures the output directory exists.
 */
function ensureDir() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }
}

/**
 * Parse technologyskillscontent.ts and split it into per-category modules.
 */
function parseAndSplit() {
  console.log("🔍 Reading technologyskillscontent.ts...");
  const content = fs.readFileSync(SRC, "utf8");

  // Match individual tech objects inside allTech or export const allTech.
  // Uses a non-greedy match to avoid runaway regex expansion.
  const entries = content.split(/(?=(?:\s*["'][[\w\-\/]+["']:\s*{))/g);

  const buckets: Record<string, string[]> = {};

  for (const entry of entries) {
    const match = entry.match(/categorySlug["\']?\s*:\s*["\']([^"\']+)["\']/);
    const slug = match ? match[1] : "misc";
    if (!buckets[slug]) buckets[slug] = [];
    buckets[slug].push(entry.trim());
  }

  ensureDir();

  console.log(`📦 Found ${Object.keys(buckets).length} categories.`);

  for (const [slug, parts] of Object.entries(buckets)) {
    const filePath = path.join(OUT_DIR, `${slug}.ts`);
    const exportObj = parts.join(",\\n");
    const fileContent = `export default {\\n${exportObj}\\n};\\n`;
    fs.writeFileSync(filePath, fileContent, "utf8");
    console.log(`✅ Created module: ${slug}.ts (${parts.length} entries)`);
  }

  // Generate index.ts (lazy loader)
  const indexContent = `/**
 * @Spec
 * Feature: Lazy Loader for Technology Modules
 * Type: lib
 * Route: /src/lib/data/index.ts
 * Description: Dynamically imports category modules for incremental builds.
 */

export const loadCategory = async (category: string) => {
  switch (category) {
${Object.keys(buckets)
  .map(
    (c) => `    case "${c}":
      return import("./${c}.ts").then(m => m.default);`,
  )
  .join("\\n")}
    default:
      throw new Error(\`Unknown category: \${category}\`);
  }
};
`;
  fs.writeFileSync(path.join(OUT_DIR, "index.ts"), indexContent, "utf8");
  console.log("⚙️  Lazy loader index.ts generated successfully.");
}

parseAndSplit();
