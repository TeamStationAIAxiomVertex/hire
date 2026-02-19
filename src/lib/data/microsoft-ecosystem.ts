/** @Spec
* Feature: Technology Data Source - Microsoft Ecosystem
* Type: lib
* Route: /src/lib/data/microsoft-ecosystem.ts
* Description: Central data source for Microsoft Ecosystem specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const microsoftEcosystem: Record<string, TechEntry> = {
  "power-platform": {
    slug: "power-platform",
    name: "Microsoft Power Platform",
    category: "Microsoft Ecosystem",
    categorySlug: "microsoft-ecosystem",
    seo_title: "Hire Power Platform Developers | Nearshore Software Development",
    meta_description: "Build low-code apps, automations, and BI dashboards. Hire nearshore Power Platform experts vetted for Power Apps, Power Automate, and Dataverse.",
    intro: "The Microsoft Power Platform is a line of business intelligence, app development, and app connectivity software applications. You need an expert who can leverage this low-code platform to rapidly build and deploy solutions that solve real business problems. Our vetting process finds developers who are masters of the Power Platform. We test their ability to build canvas and model-driven apps, create complex automations, and design a robust data model in Dataverse.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your business processes still manual and error-prone?",
        problem: "Manual, paper-based, or spreadsheet-driven processes are slow, inefficient, and a major source of errors. They prevent your business from scaling and adapting to change.",
        solution: "We vet for developers who are experts in business process automation. They must demonstrate the ability to use Power Automate to create complex, multi-step workflows that automate your manual processes, reduce errors, and free up your employees to focus on higher-value work.",
        kpi: "Automation of key business processes."
      },
      {
        icon: "AlertTriangle",
        pain: "Are your teams building siloed apps without a coherent data strategy?",
        problem: "When every team builds their own apps with their own data silos, it leads to data fragmentation, inconsistency, and a lack of a single source of truth for your business.",
        solution: "Our experts are proficient in Microsoft Dataverse. They are vetted on their ability to design and build a robust, scalable, and secure data model in Dataverse that can serve as the foundation for all of your Power Platform solutions.",
        kpi: "A unified and secure data model in Dataverse."
      }
    ],
    evaluation: [
      "Power Apps (Canvas and Model-Driven)",
      "Power Automate for workflow automation",
      "Microsoft Dataverse data modeling and security",
      "Power BI for data visualization",
      "Integration with other Microsoft 365 and Dynamics 365 services"
    ],
    technical_analysis: "The Power Platform evaluation focuses on building end-to-end business solutions. Candidates are required to design and build a Power App that solves a given business problem, demonstrating their understanding of the platform's capabilities. A critical assessment is their ability to create a well-designed data model in Dataverse and to use Power Automate to automate the associated business processes. We also test their knowledge of how to integrate the Power Platform with other Microsoft services.",
    interlink_slugs: ["dynamics-365", "azure", "c-sharp"]
  },
  "dynamics-365": {
    slug: "dynamics-365",
    name: "Microsoft Dynamics 365",
    category: "Microsoft Ecosystem",
    categorySlug: "microsoft-ecosystem",
    seo_title: "Hire Dynamics 365 Experts | Nearshore Software Development",
    meta_description: "Implement and customize your ERP and CRM solutions. Hire nearshore Dynamics 365 experts vetted for Finance, Sales, and Customer Service modules.",
    intro: "Microsoft Dynamics 365 is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences. You need an expert who can help you implement, customize, and integrate Dynamics 365 to meet the unique needs of your business. Our vetting process finds functional and technical consultants who are masters of the Dynamics 365 platform. We test their deep knowledge of the core modules and their ability to extend the platform with custom code and integrations.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your Dynamics 365 implementation failing to meet your business needs?",
        problem: "An out-of-the-box Dynamics 365 implementation rarely meets the unique needs of a complex business. Without proper customization and configuration, you are left with a system that creates more work than it saves.",
        solution: "We vet for experts who can tailor Dynamics 365 to your exact business processes. They must demonstrate the ability to configure the system, customize forms and views, and build custom plugins and workflows to extend the platform's functionality.",
        kpi: "A Dynamics 365 implementation that is a perfect fit for your business."
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to integrate Dynamics 365 with your other systems?",
        problem: "Your business runs on a variety of systems, and if Dynamics 365 doesn't talk to them, you are left with data silos and manual processes.",
        solution: "Our experts are proficient in integrating Dynamics 365 with other systems. They are vetted on their ability to use the Dataverse APIs, Power Automate, and Azure Logic Apps to build robust and reliable integrations.",
        kpi: "A seamlessly integrated enterprise application landscape."
      }
    ],
    evaluation: [
      "Core Dynamics 365 modules (e.g., Sales, Customer Service, Finance)",
      "Configuration and customization (forms, views, business rules)",
      "Extending the platform with plugins and custom code",
      "Data migration and integration",
      "Security model and user administration"
    ],
    technical_analysis: "The Dynamics 365 evaluation focuses on implementing and customizing the platform to meet business needs. Candidates are required to solve a set of business case studies, demonstrating their deep functional knowledge of the core modules. A critical assessment is their ability to design and implement a complex customization, including custom entities, plugins, and workflows. We also test their knowledge of the Dynamics 365 security model and data migration best practices.",
    interlink_slugs: ["power-platform", "azure", "c-sharp"]
  },
};
