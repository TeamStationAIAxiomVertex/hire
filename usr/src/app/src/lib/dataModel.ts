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
import { architectureIntegrations } from "./data/architecture-integrations";
import { backendServices } from "./data/backend-services";
import { dataAi } from "./data/data-ai";
import { databases } from "./data/databases";
import { devopsCloud } from "./data/devops-cloud";
import { frontendWeb } from "./data/frontend-web";
import { microsoftEcosystem } from "./data/microsoft-ecosystem";
import { mobile } from "./data/mobile";
import { oracleEcosystem } from "./data/oracle-ecosystem";
import { qaSecurity } from "./data/qa-security";
import { salesforceEcosystem } from "./data/salesforce-ecosystem";
import { sapEcosystem } from "./data/sap-ecosystem";
import { vettedTalent } from "./data/cognitive-ai-vetting";
import { goLang } from "./data/go-lang";
import { newBackendServices } from "./data/new-backend-services";
import { newDatabases } from "./data/new-databases";
import { newDevopsCloud } from "./data/new-devops-cloud";
import { newOrms } from "./data/new-orm";

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
  ...newBackendServices,
  ...newDatabases,
  ...newDevopsCloud,
  ...newOrms,
};

/**
 * Minimal, safe helpers over the canonical tech map.
 */

export function getAllTech(): TechEntry[] {
  return Object.values(allTechData);
}

export function getTechBySlug(slug: string): TechEntry | null {
  const normalizedSlug = slug.toLowerCase();
  
  if (normalizedSlug === 'golang') {
      return allTechData['go-lang'] ?? null;
  }
  if (normalizedSlug === 'dotnet') {
      return allTechData['c-sharp'] ?? null;
  }
    
  return allTechData[normalizedSlug] ?? null;
}
