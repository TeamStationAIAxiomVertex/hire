/** @Spec
* Feature: Technology Data Source - Salesforce Ecosystem
* Type: lib
* Route: /src/lib/data/salesforce-ecosystem.ts
* Description: Central data source for Salesforce Ecosystem specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const salesforceEcosystem: Record<string, TechEntry> = {
  "salesforce-apex": {
    slug: "salesforce-apex",
    name: "Salesforce Apex",
    category: "Salesforce Ecosystem",
    categorySlug: "salesforce-ecosystem",
    seo_title: "Hire Salesforce Apex Developers | Nearshore Software Development",
    meta_description: "Build scalable and robust backend logic on the Salesforce Platform. Hire nearshore Apex experts vetted for governor limit optimization, triggers, and complex business logic implementation.",
    intro: "Apex is the strongly-typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Salesforce Platform. You need an expert who can write efficient, bulk-safe Apex code that respects governor limits and extends your Salesforce functionality with powerful custom logic. Our vetting finds developers who master Apex triggers, batch jobs, and integration callouts.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your custom Apex code constantly hitting governor limits?",
        problem: "Inexperienced developers write Apex that isn't 'bulkified,' making too many SOQL queries or DML statements within loops. This causes transactions to fail under load and hits platform governor limits, bringing business processes to a halt.",
        solution: "We vet for developers who are experts in writing bulk-safe Apex. They must demonstrate mastery of using collections, maps, and efficient SOQL queries to process records in bulk, ensuring your code is performant and scalable within the platform's constraints.",
        kpi: "Elimination of 'Too many SOQL queries' errors."
      },
      {
        icon: "AlertTriangle",
        pain: "Are your Apex triggers a complex, unpredictable mess?",
        problem: "A common anti-pattern is to have multiple, disorganized triggers per object, with business logic scattered everywhere. This 'trigger hell' makes it impossible to predict the order of execution and leads to a maintenance nightmare.",
        solution: "Our experts are proficient in the 'one trigger per object' pattern. They are vetted on their ability to build a single, well-structured trigger that delegates logic to handler classes, ensuring a predictable, testable, and maintainable trigger framework.",
        kpi: "Consolidated, single-trigger framework per object."
      }
    ],
    evaluation: [
      "Apex Triggers and Trigger Frameworks",
      "Bulkification and Governor Limit Optimization",
      "Asynchronous Apex (Batch, Future, Queueable)",
      "Apex Test Classes and Code Coverage",
      "Integration with REST and SOAP APIs"
    ],
    technical_analysis: "The Apex evaluation focuses on building scalable and maintainable backend logic on the Salesforce platform. Candidates are required to write a complex trigger and associated test class, demonstrating their understanding of bulkification and governor limits. A critical assessment is their ability to design and implement an asynchronous process using Batch Apex to handle large data volumes. We also test their knowledge of how to make secure callouts to external web services.",
    interlink_slugs: ["salesforce-lwc", "c-sharp", "java"]
  },
  "salesforce-lwc": {
    slug: "salesforce-lwc",
    name: "Salesforce LWC",
    category: "Salesforce Ecosystem",
    categorySlug: "salesforce-ecosystem",
    seo_title: "Hire Salesforce LWC Developers | Nearshore Software Development",
    meta_description: "Build fast, modern, and responsive user interfaces on the Salesforce Platform. Hire nearshore Lightning Web Components (LWC) experts vetted for UI/UX, performance, and best practices.",
    intro: "Lightning Web Components (LWC) is a modern UI framework for the Salesforce Platform that uses standard web technologies like HTML, JavaScript, and CSS. You need an expert who can build fast, responsive, and user-friendly components that provide a world-class experience for your Salesforce users. Our vetting process finds developers who are masters of the LWC framework. We test their ability to build complex UIs, communicate with Apex, and adhere to Salesforce's security best practices.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your Lightning pages slow to load and unresponsive?",
        problem: "Poorly written LWCs can be slow, making too many server calls or performing inefficient client-side rendering. This leads to a frustrating user experience and low adoption of your custom Salesforce UI.",
        solution: "We vet for developers who are experts in LWC performance. They must demonstrate the ability to use caching, asynchronous operations, and efficient data binding to build components that are fast and responsive, even on complex pages.",
        kpi: "Improved Lightning page EPT (Experienced Page Time)."
      },
      {
        icon: "AlertTriangle",
        pain: "Are your components a tangled mess of imperative code?",
        problem: "Developers unfamiliar with modern web standards often write LWCs that directly manipulate the DOM and use complex, imperative logic, making the components difficult to test and maintain.",
        solution: "Our experts are proficient in modern, declarative JavaScript. They are vetted on their ability to build reactive components with clean data flow, leveraging the framework's features to keep code simple, declarative, and maintainable.",
        kpi: "Adherence to modern JavaScript and LWC best practices."
      }
    ],
    evaluation: [
      "LWC Framework and Component Lifecycle",
      "Communication with Apex (Wire Service, Imperative Calls)",
      "Lightning Data Service and Base Components",
      "Events and Component Communication",
      "Security Best Practices (Locker Service)"
    ],
    technical_analysis: "The LWC evaluation focuses on building modern, performant user interfaces on the Salesforce platform. Candidates are required to build a complex component that fetches and displays data from Apex, demonstrating their mastery of the framework. A critical assessment is their ability to write clean, reusable, and secure code that follows best practices. We also test their knowledge of the Lightning App Builder and how to assemble components into a complete user experience.",
    interlink_slugs: ["salesforce-apex", "javascript", "react"]
  },
};
