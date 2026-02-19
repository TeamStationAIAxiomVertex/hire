/** @Spec
* Feature: Technology Data Source - Vetting & Cognitive AI
* Type: lib
* Route: /src/lib/data/vetted-talent.ts
* Description: Central data source for Vetting & Cognitive AI specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from ’@/data/tech’;

export const vettedTalent: Record<string, TechEntry> = {
  &quot;axiom-cortex&quot;: {
    slug: &quot;axiom-cortex&quot;,
    name: &quot;Axiom Cortex™&quot;,
    category: &quot;Vetting & Cognitive AI&quot;,
    categorySlug: &quot;cognitive-ai-vetting&quot;,
    seo_title: &quot;Explore Our Cognitive AI Vetting Process | Axiom Cortex™&quot;,
    meta_description:
      &quot;Learn how TeamStation AI’s Axiom Cortex™ engine moves beyond coding trivia to assess the deep cognitive traits that define elite engineering talent.&quot;,
    intro:
      &quot;Axiom Cortex™ is our proprietary Cognitive AI engine that moves beyond what a candidate knows to *how they think*. It assesses problem-solving, architectural reasoning, and collaborative aptitude, providing a predictive model of a candidate’s ability to succeed on your team.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your hiring process a slow, expensive, and unreliable black box?&quot;,
        problem:
          &quot;Traditional hiring relies on resume keywords and simplistic coding challenges, which are poor predictors of on-the-job success. This leads to a long time-to-hire, high recruitment costs, and a constant risk of making a bad hire that drains team productivity.&quot;,
        solution:
          &quot;We’ve productized the science of talent evaluation. Our platform provides a level of predictability and quality assurance that traditional staff augmentation simply cannot match, reducing your time-to-offer to just 9 days and ensuring a 90% project retention rate at six months.&quot;,
        kpi: &quot;Reduce time-to-hire by 80% and increase 90-day success rate to over 97%.&quot;,
      },
    ],
    evaluation: [
      &quot;Systems Reasoning and Problem Decomposition&quot;,
      &quot;Adaptive Execution and Learning Agility&quot;,
      &quot;Collaborative Signal and Communication&quot;,
      &quot;Architectural Instinct and Trade-off Analysis&quot;,
      &quot;Ownership and Quality Mindset&quot;,
    ],
    technical_analysis:
      &quot;Axiom Cortex™ uses a series of simulated, production-style scenarios to evaluate a candidate’s cognitive abilities. We don’t ask trivia questions; we create situations that test their ability to handle ambiguity, manage trade-offs, and design resilient systems. The engine analyzes over 44 neuropsychometric factors to build a detailed cognitive profile, giving you unprecedented insight into a candidate’s problem-solving style and potential for growth. This data-driven approach is how we consistently identify the top 1% of engineering talent.&quot;,
    interlink_slugs: [&quot;react&quot;, &quot;python&quot;, &quot;devops-engineering&quot;, &quot;data-ai&quot;, &quot;machine-learning&quot;],
  },
};

    