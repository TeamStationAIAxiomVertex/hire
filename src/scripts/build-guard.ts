/**
 * @Spec
 * Feature: Build Guard Validator
 * Type: script
 * Route: /src/scripts/build-guard.ts
 * Description: Enforces deterministic build, lint, and SEO validation pipeline.
 */

import { execSync } from &quot;child_process&quot;;
import fs from &quot;fs&quot;;
import path from &quot;path&quot;;

const logPath = &quot;/tmp/build-guard.log&quot;;

function runCommand(cmd: string, label: string) {
  console.log(`\n🔍 Running ${label}...`);
  try {
    execSync(cmd, { stdio: &quot;inherit&quot; });
    console.log(`✅ ${label} passed.`);
  } catch (err) {
    fs.appendFileSync(logPath, `❌ ${label} failed.\n${err}\n`);
    console.error(`\n❌ ${label} failed. Check ${logPath} for details.`);
    process.exit(1);
  }
}

function validateReports() {
  const navmeshReport = &quot;/tmp/navmesh-report.log&quot;;
  if (fs.existsSync(navmeshReport)) {
    const contents = fs.readFileSync(navmeshReport, &quot;utf8&quot;);
    if (contents.includes(&quot;[FAIL]&quot;)) {
      console.error(&quot;\n❌ NavMesh validation failed. Aborting deployment.\n&quot;);
      fs.appendFileSync(logPath, contents);
      process.exit(1);
    } else {
      console.log(&quot;✅ NavMesh validation passed.&quot;);
    }
  }
}

function main() {
  console.log(&quot;🚀 Running TeamStation AI Build Guard...&quot;);
  fs.writeFileSync(
    logPath,
    `Build Guard Report - ${new Date().toISOString()}\n`,
  );

  runCommand(&quot;npx next build&quot;, &quot;Next.js Build&quot;);
  runCommand(&quot;npx eslint .&quot;, &quot;ESLint Validation&quot;);
  runCommand(&quot;npx prettier --check .&quot;, &quot;Prettier Format Check&quot;);
  runCommand(
    &quot;npx tsx src/scripts/validate-navmesh.ts&quot;,
    &quot;NavMesh Link Validation&quot;,
  );
  runCommand(&quot;npx tsx src/scripts/generate-sitemap.ts&quot;, &quot;Sitemap Generation&quot;);

  validateReports();

  console.log(&quot;\n✅ Build Guard Completed Successfully.&quot;);
  console.log(&quot;📄 Logs written to:&quot;, logPath);
}

main();
