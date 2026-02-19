import fs from "fs";
import path from "path";

const srcDir = "./public/json/tech";
const backupDir = `./backup/json-tech-${new Date().toISOString().split("T")[0]}`;
fs.mkdirSync(backupDir, { recursive: true });

const defaultPains = [
  {
    icon: {},
    pain: "Is your architecture fragile under load?",
    problem: "Improper modularization and lack of performance awareness create brittle systems.",
    solution: "We ensure modular design, proper dependency isolation, and measurable optimization.",
    kpi: "Improved stability and throughput under production conditions"
  }
];

const defaultEvaluation = [
  "Architecture design and modularity",
  "Performance profiling and debugging",
  "Security and code quality awareness",
  "CI/CD readiness and automation mindset"
];

const defaultTechnicalAnalysis =
  "Engineers are evaluated for depth of reasoning, performance awareness, and cognitive adaptability. Each candidate demonstrates real-world debugging and architectural decision-making aligned with U.S. product standards.";

const defaults = ["react", "nextjs", "typescript", "python", "node"];

console.log("🔧 Enriching all technology JSON files...\n");

for (const file of fs.readdirSync(srcDir)) {
  if (!file.endsWith(".json")) continue;

  const filePath = path.join(srcDir, file);
  const backupPath = path.join(backupDir, file);
  fs.copyFileSync(filePath, backupPath);

  const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const name = json.name || file.replace(".json", "");
  const slug = json.slug || file.replace(".json", "");

  json.slug = slug;
  json.name = name;
  json.category ||= "Engineering & Technology";
  json.categorySlug ||= "engineering-tech";
  json.seo_title ||= `Hire Nearshore ${name} Engineers | TeamStation AI`;
  json.meta_description ||= `Hire elite nearshore ${name} engineers vetted by Axiom Cortex™ for cognitive fit, scalability, and U.S. time-zone alignment.`;
  json.intro ||= `${name} engineers from TeamStation AI deliver production-grade systems with cognitive calibration and measurable performance.`;

  if (!Array.isArray(json.pains) || json.pains.length === 0)
    json.pains = defaultPains;
  if (!Array.isArray(json.evaluation) || json.evaluation.length === 0)
    json.evaluation = defaultEvaluation;
  if (!json.technical_analysis) json.technical_analysis = defaultTechnicalAnalysis;

  if (!Array.isArray(json.interlink_slugs)) json.interlink_slugs = [];
  json.interlink_slugs = [...new Set([...json.interlink_slugs, ...defaults])];

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
  console.log(`✅ Enriched: ${file}`);
}

console.log(`\n📦 Backup saved to: ${backupDir}`);
console.log("✨ All JSON files enriched successfully.\n");
