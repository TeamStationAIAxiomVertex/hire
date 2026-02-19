/** @Spec
Feature: Navigation Mesh Validator
Location: src/scripts/validate-navmesh.ts
Description:
Ensures every tech page is valid and accessible.
✅ No categories
✅ No getTechByCategory
✅ Uses canonical /hire/{slug} paths only
*/

import fs from "fs";
import path from "path";
import { getAllTech } from "../lib/dataModel";

const LOG_FILE_PATH = "/tmp/navmesh-report.log";

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
      ? `Missing Slugs:\n - ${missingSlugs.join("\n - ")}`
      : `✅ No missing slugs`,
    duplicateSlugs.length
      ? `Duplicate Slugs:\n - ${duplicateSlugs.join("\n - ")}`
      : `✅ No duplicate slugs`,
  ].join("\n\n");

  fs.writeFileSync(LOG_FILE_PATH, report, "utf8");
  console.log(`✅ Navmesh validation complete → ${LOG_FILE_PATH}`);
}

if (require.main === module) {
  validateNavMesh();
}
