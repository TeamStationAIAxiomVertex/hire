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
import type { TechEntry } from &quot;@/data/tech&quot;;
import { architectureIntegrations } from &quot;./data/architecture-integrations&quot;;
import { backendServices } from &quot;./data/backend-services&quot;;
import { dataAi } from &quot;./data/data-ai&quot;;
import { databases } from &quot;./data/databases&quot;;
import { devopsCloud } from &quot;./data/devops-cloud&quot;;
import { frontendWeb } from &quot;./data/frontend-web&quot;;
import { microsoftEcosystem } from &quot;./data/microsoft-ecosystem&quot;;
import { mobile } from &quot;./data/mobile&quot;;
import { oracleEcosystem } from &quot;./data/oracle-ecosystem&quot;;
import { qaSecurity } from &quot;./data/qa-security&quot;;
import { salesforceEcosystem } from &quot;./data/salesforce-ecosystem&quot;;
import { sapEcosystem } from &quot;./data/sap-ecosystem&quot;;
import { vettedTalent } from &quot;./data/cognitive-ai-vetting&quot;;
import { goLang } from &quot;./data/go-lang&quot;;

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