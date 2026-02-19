export interface PainPoint {
  icon?: string;        // <- string, not a component
  pain: string;
  problem: string;
  solution: string;
  kpi?: string;
}

export type TechEntry = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  seo_title: string;
  meta_description: string;
  intro: string;
  pains: PainPoint[];
  evaluation: string[];
  technical_analysis: string;
  interlink_slugs: string[];
};
