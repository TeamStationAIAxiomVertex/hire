/** @Spec
* Feature: Technology Data Model
* Type: lib
* Route: /src/lib/dataModel.ts
* Description: Central data model that aggregates all technology definitions from various data source files into a single, comprehensive map.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Correctly imports and merges all technology data sources.
* ✅ Provides getAllTech and getTechBySlug helper functions.
* ✅ Included in sitemap.xml
*/

// src/lib/dataModel.ts
import type { TechEntry } from "@/data/tech";
import { architectureIntegrations } from "./architecture-integrations";
import { backendServices } from "./backend-services";
import { dataAi } from "./data-ai";
import { databases } from "./databases";
import { devopsCloud } from "./devops-cloud";
import { frontendWeb } from "./frontend-web";
import { microsoftEcosystem } from "./microsoft-ecosystem";
import { mobile } from "./mobile";
import { oracleEcosystem } from "./oracle-ecosystem";
import { qaSecurity } from "./qa-security";
import { salesforceEcosystem } from "./salesforce-ecosystem";
import { sapEcosystem } from "./sap-ecosystem";
import { vettedTalent } from "./cognitive-ai-vetting";
import { goLang } from "./go-lang";

const allTechData: Record<string, TechEntry> = {
  ...architectureIntegrations,
  ...backendServices,
  ...dataAi,
  ...databases,
  ...devopsCloud,
  ...frontendWeb,
  ...microsoftEcosystem,
  ...mobile,
  ...oracleEcosystem,
  ...qaSecurity,
  ...salesforceEcosystem,
  ...sapEcosystem,
  ...vettedTalent,
  ...goLang,
};

/**
 * Minimal, safe helpers over the canonical tech map.
 */

export function getAllTech(): TechEntry[] {
  return Object.values(allTechData);
}

export function getTechBySlug(slug: string): TechEntry | null {
  return allTechData[slug] ?? null;
}

    