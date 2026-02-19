export type RoleVariant =
  | "Software Developers"
  | "Software Engineers"
  | "Software Architects"
  | "IT Talent";

/** Category defaults — use your existing slugs */
const CATEGORY_DEFAULT: Record<string, RoleVariant> = {
  "frontend-web": "Software Developers",
  "backend-services": "Software Engineers",
  "devops-cloud": "Software Architects",
  "data-ai": "IT Talent",
  "databases": "IT Talent",
  "qa-security": "IT Talent",
  "architecture-integrations": "IT Talent",
  "mobile": "Software Developers",
  "vetted-talent": "IT Talent",
};

/** Normalize tech names for matching (lowercase, strip punctuation/paren) */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[™©®]/g, "")
    .replace(/\(.*?\)/g, " ")
    .replace(/[^a-z0-9+.# ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Explicit exceptions by normalized tech name */
const EXCEPTIONS_BY_NAME: Record<string, RoleVariant> = {
  // ── DevOps/Cloud exceptions
  "kubernetes": "Software Architects",
  "docker": "Software Architects",
  "terraform": "Software Architects",
  "aws cloudformation": "Software Engineers",
  "amazon web services aws": "Software Engineers",
  "aws": "Software Engineers",
  "microsoft azure": "Software Engineers",
  "azure": "Software Engineers",
  "google cloud platform gcp": "Software Engineers",
  "gcp": "Software Engineers",
  "jenkins": "IT Talent",
  "ansible": "IT Talent",
  "prometheus": "IT Talent",
  "grafana": "IT Talent",
  "istio": "IT Talent",
  "helm": "IT Talent",
  "hashicorp vault": "IT Talent",
  "vault": "IT Talent",
  "gitops": "IT Talent",
  "serverless architecture": "IT Talent",

  // ── Data & AI exceptions
  "data science": "Software Architects",
  "retrieval augmented generation rag": "Software Engineers",
  "rag": "Software Engineers",
  "langchain": "Software Developers", // building agents/pipelines
  "llms large language models": "IT Talent",
  "llms": "IT Talent",
  "pandas": "IT Talent",
  "numpy": "IT Talent",
  "apache spark": "IT Talent",
  "dbt data build tool": "IT Talent",
  "dbt": "IT Talent",
  "airbyte": "IT Talent",
  "fivetran": "IT Talent",
  "looker": "IT Talent",
  "tableau": "IT Talent",
  "power bi": "IT Talent",
  "snowflake": "IT Talent",
  "presto": "IT Talent",
  "trino": "IT Talent",
  "sql": "IT Talent",
  "etl": "IT Talent",
  "etl elt": "IT Talent",
  "data engineering": "IT Talent",
  "data warehousing": "IT Talent",
  "data governance": "IT Talent",

  // ── Architecture & Integrations
  "event sourcing": "Software Architects",

  // ── Backend canonical list → Engineers
  "node.js": "Software Engineers",
  "nodejs": "Software Engineers",
  "java spring jvm": "Software Engineers",
  "java": "Software Engineers",
  "python": "Software Engineers",
  "go golang": "Software Engineers",
  "golang": "Software Engineers",
  "c# .net": "Software Engineers",
  "dotnet": "Software Engineers",
  "c#": "Software Engineers",
  "rust": "Software Engineers",
  "php": "Software Engineers",
  "ruby on rails": "Software Engineers",
  "rails": "Software Engineers",
  "kotlin": "Software Engineers",
  "scala": "Software Engineers",
  "erlang": "Software Engineers",
  "haskell": "Software Engineers",
  "elixir": "Software Engineers",

  // ── Frontend canonical list → Developers
  "react": "Software Developers",
  "react typescript": "Software Developers",
  "typescript": "Software Developers",
  "next.js": "Software Developers",
  "nextjs": "Software Developers",
  "angular": "Software Developers",
  "vue.js": "Software Developers",
  "vue": "Software Developers",
  "pinia vue state": "Software Developers",
  "remix": "Software Developers",
  "svelte": "Software Developers",
  "sveltek it": "Software Developers",
  "web accessibility a11y": "Software Developers",
  "a11y": "Software Developers",
  "rxjs": "Software Developers",

  // ── Mobile canonical list → Developers
  "react native": "Software Developers",
  "flutter": "Software Developers",
  "ios swift": "Software Developers",
  "swift": "Software Developers",
};

/** Heuristic fallbacks by keyword if not matched in exceptions */
function heuristicByName(n: string): RoleVariant | null {
  if (
    /\b(react|typescript|next|angular|vue|remix|svelte|rxjs|a11y)\b/.test(n)
  ) return "Software Developers";

  if (
    /\b(node|java|python|golang|go|dotnet|\.net|c#|rust|php|rails|kotlin|scala|erlang|haskell|elixir)\b/.test(n)
  ) return "Software Engineers";

  if (
    /\b(kubernetes|docker|terraform|istio|helm|vault|gitops|jenkins|cicd|prometheus|grafana|cloudformation|aws|azure|gcp|serverless)\b/.test(n)
  ) return "Software Architects";

  if (
    /\b(data|ml|ai|llm|rag|langchain|spark|dbt|snowflake|airbyte|etl|warehouse|governance|bi|tableau|looker|pandas|numpy|presto|trino)\b/.test(n)
  ) return "IT Talent";

  if (
    /\b(graphql|grpc|rest|ddd|event sourcing|message queues|api gateway|system design|api security)\b/.test(n)
  ) return "IT Talent";

  if (/\b(react native|flutter|ios|swift)\b/.test(n)) return "Software Developers";

  return null;
}

/**
 * Get the role variant string for phrases like:
 *   "Hire Elite {Tech} {RoleVariant}"
 *
 * Backward-compatible with your current footer call:
 *   getRoleVariant(tech.name)
 * You can optionally pass categorySlug for stronger accuracy:
 *   getRoleVariant(tech.name, tech.categorySlug)
 */
export function getRoleVariant(name: string, categorySlug?: string): RoleVariant {
  const n = norm(name);

  // 1) Hard exceptions by name
  if (EXCEPTIONS_BY_NAME[n]) return EXCEPTIONS_BY_NAME[n];

  // 2) Category default (if provided)
  if (categorySlug && CATEGORY_DEFAULT[categorySlug]) {
    return CATEGORY_DEFAULT[categorySlug];
    // Note: DevOps default is Architects; Data/AI default is IT Talent
  }

  // 3) Heuristic fallbacks by keywords
  const h = heuristicByName(n);
  if (h) return h;

  // 4) Final fallback
  return "IT Talent";
}

/** Helper to build the full anchor phrase */
export function buildHirePhrase(techName: string, categorySlug?: string): string {
  return `Hire Elite ${techName} ${getRoleVariant(techName, categorySlug)}`;
}
