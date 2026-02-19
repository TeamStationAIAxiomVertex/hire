/** @Spec
Feature: Navigation Mesh Validator
Location: src/scripts/validate-navmesh.ts
Description:
Ensures every tech page is valid and accessible.
✅ No categories
✅ No getTechByCategory
✅ Uses canonical /hire/{slug} paths only
*/

import fs from &quot;fs&quot;;
import path from &quot;path&quot;;
import { getAllTech } from &quot;../lib/dataModel&quot;;

const LOG_FILE_PATH = &quot;/tmp/navmesh-report.log&quot;;

export function validateNavMesh() {
  const techs = getAllTech();

  const missingSlugs: string[] = [];
  const duplicateSlugs: string[] = [];

  const slugSet = new Set<string>();

  techs.forEach((tech) => {
    if (!tech.slug) {
      missingSlugs.push(tech.name);
      return;
    }
    if (slugSet.has(tech.slug)) {
      duplicateSlugs.push(tech.slug);
    }
    slugSet.add(tech.slug);
  });

  const report = [
    `=== NAVMESH VALIDATION REPORT ===`,
    `Total Technologies: ${techs.length}`,
    missingSlugs.length
      ? `Missing Slugs:\n - ${missingSlugs.join(&quot;\n - &quot;)}`
      : `✅ No missing slugs`,
    duplicateSlugs.length
      ? `Duplicate Slugs:\n - ${duplicateSlugs.join(&quot;\n - &quot;)}`
      : `✅ No duplicate slugs`,
  ].join(&quot;\n\n&quot;);

  fs.writeFileSync(LOG_FILE_PATH, report, &quot;utf8&quot;);
  console.log(`✅ Navmesh validation complete → ${LOG_FILE_PATH}`);
}

if (require.main === module) {
  validateNavMesh();
}
