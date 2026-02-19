import fs from "fs";
import path from "path";

const srcDir = "./public/json/tech";
fs.mkdirSync(srcDir, { recursive: true });

// master list of expected technologies (from sitemap/roles)
const expected = [
  "airbyte","angular","ansible","apache-spark","api-gateway","api-security","aws","azure",
  "c-sharp","cassandra","ci-cd","cloudformation","cypress","data-engineering","data-governance",
  "data-science","data-warehousing","dbt","devops-engineering","docker","domain-driven-design",
  "dynamics-365","dynamodb","elasticsearch","elixir","erlang","etl-elt","event-sourcing",
  "fivetran","flutter","gitops","go-lang","google-cloud","grafana","graphql","grpc","haskell",
  "helm","ios","istio","java","jenkins","jest","kotlin","kubernetes","llms","looker",
  "machine-learning","message-queues","microservices","mongodb","mysql","nextjs","node",
  "numpy","oracle-apex","oracle-database","pandas","penetration-testing","php","pinia",
  "playwright","postgresql","power-bi","power-platform","presto","prometheus","python",
  "qa-automation","react","react-native","redis","remix","rest-api-design","ruby-on-rails",
  "rust","rx-js","salesforce-apex","salesforce-lwc","sap-abap","sap-fiori-ui5","scala",
  "security-engineering","serverless","snowflake","sql","sql-server","svelte","swift",
  "system-design","tableau","terraform","typescript","vault","vector-databases","vitest","vue","web-accessibility"
];

for (const tech of expected) {
  const filePath = path.join(srcDir, `${tech}.json`);
  if (!fs.existsSync(filePath)) {
    const obj = {
      slug: tech,
      name: tech.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
      category: "Engineering & Technology",
      categorySlug: "engineering-tech",
      seo_title: `Hire Nearshore ${tech} Engineers | TeamStation AI`,
      meta_description: `Hire elite nearshore ${tech} engineers vetted by Axiom Cortex™ for cognitive fit, scalability, and U.S. time-zone alignment.`,
      intro: `${tech.replace(/-/g, " ")} engineers from TeamStation AI deliver production-grade systems with cognitive calibration and measurable performance.`,
      pains: [],
      evaluation: [],
      technical_analysis: "",
      interlink_slugs: []
    };
    fs.writeFileSync(filePath, JSON.stringify(obj, null, 2));
    console.log(`🆕 Created: ${tech}.json`);
  }
}

console.log("\n✅ All missing tech JSON files have been created.\n");
