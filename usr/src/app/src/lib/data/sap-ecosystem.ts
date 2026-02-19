/** @Spec
* Feature: Technology Data Source - SAP Ecosystem
* Type: lib
* Route: /src/lib/data/sap-ecosystem.ts
* Description: Central data source for SAP Ecosystem specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const sapEcosystem: Record<string, TechEntry> = {
  "sap-abap": {
    slug: "sap-abap",
    name: "SAP ABAP",
    category: "SAP Ecosystem",
    categorySlug: "sap-ecosystem",
    seo_title: "Hire SAP ABAP Developers | Nearshore Software Development",
    meta_description: "Develop custom enhancements and reports for your SAP system. Hire nearshore ABAP developers vetted for modern ABAP syntax, performance tuning, and Core Data Services (CDS).",
    intro: "ABAP is the high-level programming language created by SAP for building enterprise applications on the SAP platform. You need an expert who can write clean, performant, and modern ABAP code to customize and extend your SAP systems. Our vetting finds developers who are masters of ABAP, from classic reports and Dynpro to modern ABAP on HANA, RAP, and Core Data Services.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your custom ABAP code slow, inefficient, and difficult to maintain?",
        problem: "Legacy ABAP code is often procedural, inefficient, and doesn't take advantage of the underlying HANA database, leading to slow performance and a high total cost of ownership. It becomes a bottleneck for critical business processes.",
        solution: "We vet for developers who are experts in modern, object-oriented ABAP and performance tuning. They must demonstrate the ability to write efficient Open SQL, leverage Core Data Services (CDS) views for a 'code-to-data' paradigm, and build scalable solutions that perform optimally on SAP HANA.",
        kpi: "Adoption of modern ABAP syntax and significant performance improvement in custom reports and transactions."
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to build custom extensions that are upgrade-safe?",
        problem: "Modifying standard SAP objects directly is a recipe for disaster, creating huge challenges during system upgrades and patches. This approach is brittle and creates a massive maintenance burden.",
        solution: "Our experts are proficient in modern SAP extension methodologies. They are vetted on their ability to use Business Add-Ins (BAdIs), enhancement spots, and the SAP Cloud Platform Extension Suite to build custom logic that is decoupled from the core, ensuring your extensions are stable and upgrade-safe.",
        kpi: "Implementation of decoupled, upgrade-safe extensions using modern enhancement frameworks."
      }
    ],
    evaluation: [
      "Modern ABAP Syntax (Object-Oriented, ABAP on HANA)",
      "Core Data Services (CDS) and the ABAP RESTful Application Programming Model (RAP)",
      "Performance Tuning and Open SQL Optimization",
      "Enhancement Framework (BAdIs, Enhancement Spots)",
      "Integration with RFC, BAPIs, and OData services"
    ],
    technical_analysis: "The ABAP evaluation focuses on building robust and performant extensions for SAP systems. Candidates are required to solve a complex business requirement by writing a custom ABAP program, demonstrating their mastery of modern syntax and data access techniques. A critical assessment is their ability to design a data model using CDS views and expose it as an OData service. We also test their knowledge of the SAP enhancement framework and their ability to find and implement the correct BAdI for a given requirement.",
    interlink_slugs: ["sap-fiori-ui5", "devops-cloud", "java", "c-sharp"]
  },
  "sap-fiori-ui5": {
    slug: "sap-fiori-ui5",
    name: "SAP Fiori/UI5",
    category: "SAP Ecosystem",
    categorySlug: "sap-ecosystem",
    seo_title: "Hire SAP Fiori/UI5 Developers | Nearshore Software Development",
    meta_description: "Build modern, responsive, and user-friendly applications for your SAP landscape. Hire nearshore Fiori/UI5 experts vetted for their UI/UX design and development skills.",
    intro: "SAP Fiori is the design language that brings a modern, consumer-grade user experience to SAP applications. SAPUI5 is the HTML5 framework for building these apps. You need an expert who can create intuitive, responsive, and beautiful Fiori applications that your users will love. Our vetting process finds developers who are masters of the Fiori/UI5 framework. We test their ability to build complex layouts, connect to OData services, and adhere to the Fiori design guidelines.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your users frustrated with the classic, clunky SAP GUI?",
        problem: "The traditional SAP GUI is complex, not user-friendly, and not accessible on mobile devices. This leads to low user adoption, high training costs, and decreased productivity.",
        solution: "We vet for developers who are experts in the SAP Fiori design principles. They must demonstrate the ability to build simple, role-based, and responsive applications that provide a delightful user experience on any device, driving user adoption and productivity.",
        kpi: "Improved user satisfaction and adoption rates for custom SAP applications."
      },
      {
        icon: "AlertTriangle",
        pain: "Are your Fiori apps slow and performing poorly?",
        problem: "A poorly written Fiori app can be slow to load and unresponsive, making too many backend calls or using inefficient client-side code. This negates the benefits of a modern user experience.",
        solution: "Our experts are proficient in Fiori/UI5 performance optimization. They are vetted on their ability to use data binding, model management, and asynchronous loading to build applications that are fast and efficient, even when dealing with large datasets.",
        kpi: "Faster load times and improved responsiveness of Fiori applications."
      }
    ],
    evaluation: [
      "SAP Fiori Design Guidelines and Principles",
      "SAPUI5 Framework and MVC Architecture",
      "Consuming OData services and managing data models",
      "Building custom UI5 controls",
      "Deployment to SAP Business Technology Platform (BTP) and Fiori Launchpad"
    ],
    technical_analysis: "The Fiori/UI5 evaluation focuses on building modern, high-performance user interfaces for SAP. Candidates are required to build a Fiori application from scratch that consumes an OData service, demonstrating their mastery of the UI5 framework and data binding. A critical assessment is their ability to create a pixel-perfect UI that adheres to the Fiori design guidelines. We also test their knowledge of performance best practices and their ability to deploy and configure an application in the Fiori Launchpad.",
    interlink_slugs: ["sap-abap", "react", "angular", "vue"]
  },
};

    