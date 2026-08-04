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
import type { TechEntry } from '@/data/tech';

export const vettedTalent: Record<string, TechEntry> = {
  "axiom-cortex": {
    slug: "axiom-cortex",
    name: "Axiom Cortex™",
    category: "Vetting & Cognitive AI",
    categorySlug: "cognitive-ai-vetting",
    seo_title: "Explore Our Cognitive AI Vetting Process | Axiom Cortex™",
    meta_description:
      "Learn how TeamStation AI's Axiom Cortex™ engine moves beyond coding trivia to assess the deep cognitive traits that define elite engineering talent.",
    intro:
      "Axiom Cortex™ is our proprietary Cognitive AI engine that moves beyond what a candidate knows to *how they think*. It assesses problem-solving, architectural reasoning, and collaborative aptitude, providing a predictive model of a candidate's ability to succeed on your team.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your hiring process a slow, expensive, and unreliable black box?",
        problem:
          "Traditional hiring relies on resume keywords and simplistic coding challenges, which are poor predictors of on-the-job success. This leads to a long time-to-hire, high recruitment costs, and a constant risk of making a bad hire that drains team productivity.",
        solution:
          "We've productized the science of talent evaluation. Our platform provides a level of predictability and quality assurance that traditional staff augmentation simply cannot match, reducing your time-to-offer to just 9 days and ensuring a 90% project retention rate at six months.",
        kpi: "Reduce time-to-hire by 80% and increase 90-day success rate to over 97%.",
      },
    ],
    evaluation: [
      "Systems Reasoning and Problem Decomposition",
      "Adaptive Execution and Learning Agility",
      "Collaborative Signal and Communication",
      "Architectural Instinct and Trade-off Analysis",
      "Ownership and Quality Mindset",
    ],
    technical_analysis:
      "Axiom Cortex™ uses a series of simulated, production-style scenarios to evaluate a candidate's cognitive abilities. We don't ask trivia questions; we create situations that test their ability to handle ambiguity, manage trade-offs, and design resilient systems. The engine analyzes over 44 neuropsychometric factors to build a detailed cognitive profile, giving you unprecedented insight into a candidate's problem-solving style and potential for growth. This data-driven approach is how we consistently identify the top 1% of engineering talent.",
    interlink_slugs: ["react", "python", "devops-engineering", "data-ai", "machine-learning"],
  },
};

    