/**
 * @Spec
 * Feature: Build Guard Validator
 * Type: script
 * Route: /src/scripts/build-guard.ts
 * Description: Enforces deterministic build, lint, and SEO validation pipeline.
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const logPath = "/tmp/build-guard.log";

function runCommand(cmd: string, label: string) {
  console.log(`\n🔍 Running ${label}...`);
  try {
    execSync(cmd, { stdio: "inherit" });
    console.log(`✅ ${label} passed.`);
  } catch (err) {
    fs.appendFileSync(logPath, `❌ ${label} failed.\n${err}\n`);
    console.error(`\n❌ ${label} failed. Check ${logPath} for details.`);
    process.exit(1);
  }
}

function validateReports() {
  const navmeshReport = "/tmp/navmesh-report.log";
  if (fs.existsSync(navmeshReport)) {
    const contents = fs.readFileSync(navmeshReport, "utf8");
    if (contents.includes("[FAIL]")) {
      console.error("\n❌ NavMesh validation failed. Aborting deployment.\n");
      fs.appendFileSync(logPath, contents);
      process.exit(1);
    } else {
      console.log("✅ NavMesh validation passed.");
    }
  }
}

function main() {
  console.log("🚀 Running TeamStation AI Build Guard...");
  fs.writeFileSync(
    logPath,
    `Build Guard Report - ${new Date().toISOString()}\n`,
  );

  runCommand("npx next build", "Next.js Build");
  runCommand("npx eslint .", "ESLint Validation");
  runCommand("npx prettier --check .", "Prettier Format Check");
  runCommand(
    "npx tsx src/scripts/validate-navmesh.ts",
    "NavMesh Link Validation",
  );
  runCommand("npx tsx src/scripts/generate-sitemap.ts", "Sitemap Generation");

  validateReports();

  console.log("\n✅ Build Guard Completed Successfully.");
  console.log("📄 Logs written to:", logPath);
}

main();
