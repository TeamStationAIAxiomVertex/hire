/** @Spec
 * Feature: Centralized Category Data
 * Type: lib
 * Route: /src/lib/categories.ts
 * Description: Provides a centralized, typed definition for all technology categories, including SEO-optimized keyword phrases.
 * Acceptance:
 * ✅ Compiles without TypeScript errors
 * ✅ Lints and formats cleanly
 * ✅ Exports a valid categories array.
 * ✅ Included in sitemap.xml
 */

import type { PainPoint } from "@/data/tech";

export interface Category {
  name: string;
  slug: string;
  description: string;
  summary: string;
  icon: string;
  keywordPhrase: string;
  pains: Omit<PainPoint, "icon">[];
}

export const categories: Category[] = [
  {
    name: "Frontend & UI/UX",
    slug: "frontend-web",
    summary: "Build high-performance, AI-native user experiences with elite nearshore architects.",
    description: "Your frontend is the cognitive and conversational interface for your entire platform. We provide the elite nearshore architects who understand this shift. They move beyond building mere responsive layouts to engineer high-performance, AI-native experiences that work flawlessly on both modern and legacy systems. Our Axiom Cortex™ engine vets for mastery of browser performance, WCAG compliance, and the ability to build UIs that are not just functional, but cognitively intuitive.",
    icon: "Code",
    keywordPhrase: "Hire Nearshore Frontend and Web Developers",
    pains: [
      {
        pain: "Is your frontend team delivering slow, 'janky' UIs that fail Core Web Vitals?",
        problem:
          "You have a team that knows React syntax, but they still produce applications with excessive re-renders and poor interaction-to-next-paint (INP) scores. This directly impacts user retention and SEO ranking, costing you revenue. The root issue is a lack of deep architectural skill, a gap that traditional hiring consistently misses.",
        solution:
          "Stop hiring for framework keywords. We provide engineers who are masters of the render cycle and performance profiling. They don't just build features; they engineer a high-performance user experience. As a result, our clients see demonstrably improved Core Web Vitals and a reduction in INP by over 50%.",
        kpi: "Achieve 'Good' Core Web Vitals scores across all pages and reduce INP by over 50%.",
      },
      {
        pain: "Is your business trapped in a legacy frontend monolith?",
        problem:
            "Your core product runs on an older Angular or jQuery application that is now brittle, slow, and a significant business risk. Your team is afraid to touch it, and every minor change becomes a high-stakes, multi-week project. You can't integrate modern AI features, and you're falling behind.",
        solution:
            "A full rewrite is often the wrong answer. We provide senior engineers who specialize in the 'strangler fig' pattern—safely and incrementally migrating legacy systems to a modern stack like Next.js with zero downtime. This allows you to start shipping valuable features in weeks, not years, and to safely introduce AI capabilities into your most critical applications.",
        kpi: "Incrementally modernize your legacy frontend with zero downtime and start shipping features in weeks, not years."
      },
       {
        pain: "Is your state management a complex, bug-prone mess?",
        problem:
          "Your team struggles with a mix of prop-drilling, oversized context providers, and legacy state management patterns. This creates a 'spaghetti state' that is difficult to debug, makes adding new features slow and risky, and leads to unpredictable UI behavior.",
        solution:
          "We vet for engineers who can architect clean, scalable state solutions. They are experts in modern libraries like Zustand for client state and TanStack Query for server cache, ensuring a clear separation of concerns and a resilient, maintainable application.",
        kpi: "Proven ability to architect scalable state with modern libraries.",
      },
      {
        pain: "Is your component library just a folder of inconsistent parts?",
        problem:
          "Without a disciplined approach, your component library lacks a coherent API, has poor accessibility (A11y), and is difficult to use, forcing developers to reinvent the wheel for every new feature. This slows down development and leads to an inconsistent user experience.",
        solution:
          "We hire engineers who treat component development as API design. They are vetted on their ability to create reusable, composable, and accessible components using tools like Storybook and headless UI libraries, building a true force multiplier for your team.",
        kpi: "Focus on reusable, accessible, and well-documented components.",
      }
    ],
  },
  {
    name: "Backend & APIs",
    slug: "backend-services",
    summary: "Architect robust, low-latency microservices and APIs designed for AI-driven requests.",
    description: "Your backend is no longer just a data provider; it's the secure, scalable engine that powers intelligent workflows and LLM integrations. Your APIs are the central nervous system of your entire AI strategy, making the quality of your nearshore software development team paramount. We provide elite engineers who build for this new reality. They architect robust, low-latency microservices and APIs designed to handle the demands of AI-driven requests, ensuring your legacy systems and modern services can communicate seamlessly. Axiom Cortex™ vets for mastery of API security, distributed systems design, and performance at scale.",
    icon: "Server",
    keywordPhrase: "Hire Nearshore Backend and API Developers",
    pains: [
      {
        pain: "Are your vendor-supplied backend engineers creating security holes and performance bottlenecks?",
        problem:
          "Traditional staffing firms don't vet for modern backend practices. You get engineers who write inefficient N+1 queries, neglect security headers, and build monolithic services that can't scale. This creates massive operational risk and technical debt.",
        solution:
          "Don't let your backend become a liability. TeamStation AI is an intelligent infrastructure platform, not a staffing agency. Our Cognitive AI vets every engineer for mastery of API security, database optimization, and microservice architecture. We deliver talent that builds resilient, scalable, and secure systems from day one.",
        kpi: "Elimination of common OWASP API security vulnerabilities in new code.",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    slug: "devops-cloud",
    summary: "Engineer observable, cost-optimized cloud platforms ready for AI and GPU workloads.",
    description: "Modern DevOps is about building the intelligent, self-healing infrastructure that AI workloads demand. Your cloud is the factory floor for your models and data pipelines, and a successful nearshore software development strategy requires architects, not just script-runners. We provide elite cloud architects who build AI-ready platforms. They move beyond simple scripting to engineer observable, cost-optimized environments on AWS, Azure, and GCP. Our Axiom Cortex™ engine vets for mastery of Infrastructure-as-Code (Terraform), container orchestration (Kubernetes), and the ability to manage the unique demands of GPU-intensive workloads.",
    icon: "Building",
    keywordPhrase: "Hire Nearshore DevOps and Cloud Engineers",
    pains: [
      {
        pain: "Are you paying top dollar for 'DevOps' engineers who just run manual scripts?",
        problem:
          "Legacy vendors often supply sysadmins disguised as DevOps engineers. They lack expertise in Infrastructure-as-Code (IaC), CI/CD automation, and observability, leading to manual, error-prone processes that slow down your release velocity and increase operational risk.",
        solution:
          "Your cloud spend is too high for manual operators. Our platform predicts a candidate's true automation mindset. We vet for deep expertise in Terraform, Kubernetes, and automated deployment strategies (like blue/green and canary). You get a true DevOps practitioner who builds a reliable, self-service infrastructure, not a manual operator.",
        kpi: "Increase deployment frequency by 5x while reducing change failure rate.",
      },
    ],
  },
  {
    name: "Data & AI",
    slug: "data-ai",
    summary: "Operationalize your data strategy with experts in data engineering, MLOps, and ML models.",
    description:
      "Data & AI' has evolved from a department into the core of your competitive advantage. Winning in this space requires a nearshore software development team that can build the entire data value chain, from raw data ingestion to production-grade ML model deployment. We provide the elite talent that bridges data engineering, data science, and MLOps. They don't just build models in notebooks; they engineer scalable data pipelines, robust training systems, and observable ML deployments. Our Axiom Cortex™ engine vets for a deep understanding of the modern data stack and the ability to turn data into a strategic, operational asset.",
    icon: "BrainCircuit",
    keywordPhrase: "Hire Nearshore Data and AI Specialists",
    pains: [
      {
        pain: "Are your 'data scientists' from staffing vendors unable to deploy a model into production?",
        problem:
          "Many nearshore firms provide academic data scientists who are skilled in notebooks but lack the engineering and MLOps expertise to build and deploy scalable, production-ready data pipelines and ML models. This leaves your most valuable insights trapped in a research phase.",
        solution:
          "A model in a notebook is worthless. Axiom Cortex™ specifically vets for production-oriented data engineers and ML specialists. We assess their ability to build robust ETL/ELT pipelines, manage data warehouses, and use MLOps principles to deploy and monitor models at scale. We deliver engineers who operationalize your data strategy, not just analyze it.",
        kpi: "Reduce model deployment time from months to weeks.",
      },
    ],
  },
    {
    name: "Salesforce Ecosystem",
    slug: "salesforce-ecosystem",
    summary: "Build scalable Apex logic and integrate with external AI services and Lightning Web Components.",
    description: "Your CRM is the data backbone for predictive forecasting and customer intelligence. A poorly customized Salesforce instance is a data silo that blocks innovation, making it a critical focus for any nearshore software development initiative. We provide elite nearshore Salesforce experts who think like enterprise architects. They move beyond simple page layouts to build scalable Apex logic, integrate with external AI services, and develop Lightning Web Components that provide real business value. Our Axiom Cortex™ engine vets for a deep understanding of governor limits, bulkification, and modern development practices to ensure your Salesforce org is a high-performance asset.",
    icon: "Cloud",
    keywordPhrase: "Hire Nearshore Salesforce Developers",
    pains: [
        {
            pain: "Is your Salesforce implementation a mess of technical debt and unmanaged code?",
            problem: "Salesforce projects often accumulate significant technical debt from poorly written Apex and disorganized Lightning components. This makes the system slow, buggy, and impossible to maintain or upgrade, hindering your sales and operations teams.",
            solution: "A custom Salesforce org should accelerate, not hinder, your business. We provide vetted Salesforce developers who are experts in clean code, governor limits, and modern development practices. We validate mastery of bulk-safe Apex and modular Lightning Web Components to ensure your Salesforce instance is a reliable, high-performance asset, not a liability.",
            kpi: "Reduction in Apex CPU timeout errors and improved Lightning page load speeds."
        }
    ]
  },
  {
    name: "SAP Ecosystem",
    slug: "sap-ecosystem",
    summary: "Bridge legacy ECC or S/4HANA systems to modern, cloud-native AI capabilities.",
    description: "Your SAP system holds the key to optimizing your supply chain, finance, and operations. However, legacy ABAP code and clunky GUIs are a barrier to leveraging this data for intelligent automation. For any CTO considering nearshore software development for SAP, modernization is key. We provide elite nearshore SAP developers who can bridge the gap between your legacy ECC or S/4HANA systems and modern AI capabilities. They are experts in performance-tuning ABAP for HANA, building modern Fiori applications, and integrating SAP with external data platforms. Our Axiom Cortex™ engine vets for a deep understanding of both classic SAP modules and modern, cloud-native extension methodologies.",
    icon: "Briefcase",
    keywordPhrase: "Hire Nearshore SAP Developers",
    pains: [
      {
        pain: "Is your custom ABAP code a performance bottleneck and preventing you from moving to S/4HANA?",
        problem: "Legacy ABAP code is often inefficient and not optimized for the HANA database. This not only slows down critical business processes but also creates a massive roadblock for your S/4HANA migration, trapping you in an outdated architecture.",
        solution: "Modernize your SAP landscape without the risk. We provide elite ABAP developers who are masters of modern, performance-optimized code. We vet their ability to write 'code-to-data' logic using Core Data Services (CDS) and to build clean, upgrade-safe enhancements, accelerating your journey to a modern SAP landscape.",
        kpi: "Successful migration of critical custom code to S/4HANA with measurable performance gains."
      }
    ]
  },
  {
      name: "Microsoft Ecosystem",
      slug: "microsoft-ecosystem",
      summary: "Architect solutions connecting Dynamics 365, Power BI, and custom .NET on Azure.",
      description: "A fragmented Microsoft stack leaves immense value on the table, a common challenge addressed by strategic nearshore software development. Your stack should be an integrated ecosystem for building intelligent business applications, from Azure AI services to the Power Platform. We provide nearshore experts who understand the entire Microsoft landscape. They don't just write C#; they architect solutions that seamlessly connect Dynamics 365, Power BI, and custom .NET applications running on Azure. Our Axiom Cortex™ engine vets for the ability to design secure, scalable, and integrated systems that maximize your investment in the Microsoft cloud.",
      icon: "Box",
      keywordPhrase: "Hire Nearshore Microsoft Stack Experts",
      pains: [
          {
              pain: "Is your business struggling to integrate its disparate Microsoft applications?",
              problem: "Your business runs on Microsoft, but your data is siloed across Dynamics 365, SharePoint, and custom .NET apps. This lack of integration creates manual processes, data inconsistencies, and a fragmented view of your operations.",
              solution: "Stop building data silos. Our experts are proficient in the entire Microsoft ecosystem. We provide vetted talent who can build robust integrations using Power Automate, Azure Logic Apps, and custom .NET services to create a seamless, automated workflow across your entire Microsoft stack.",
              kpi: "Automation of manual data entry processes and creation of a unified business dashboard."
          }
      ]
  },
  {
      name: "Oracle Ecosystem",
      slug: "oracle-ecosystem",
      summary: "Modernize your data platform with experts in performance tuning and Oracle APEX.",
      description: "Your Oracle database is more than a transactional system; it's a treasure trove of historical data that can power intelligent applications, but legacy PL/SQL and outdated UIs are holding you back. Modernizing this core asset is a perfect use case for a specialized nearshore software development team. We provide elite nearshore Oracle experts who can modernize your data platform. They are masters of performance tuning, ensuring your mission-critical systems are fast and reliable, while also being skilled in modern tools like Oracle APEX to build fast, secure web frontends for your data. Our Axiom Cortex™ engine vets for deep expertise in both database optimization and modern application development on the Oracle stack.",
      icon: "Layers",
      keywordPhrase: "Hire Nearshore Oracle Developers",
      pains: [
          {
              pain: "Is your Oracle database performance a bottleneck for your critical enterprise applications?",
              problem: "Oracle databases power mission-critical systems, but they can become slow and inefficient without expert management. Poorly tuned queries and incorrect configuration can lead to significant performance degradation and high licensing costs.",
              solution: "Don't let your database be the bottleneck. We provide elite Oracle DBAs and developers who are masters of performance tuning. They are experts in query optimization, indexing strategies, and leveraging advanced features of the Oracle Database to ensure your most critical systems run at peak performance.",
              kpi: "Measurable reduction in critical query execution times and optimized infrastructure costs."
          }
      ]
  },
  {
    name: "Databases",
    slug: "databases",
    summary: "Architect performant, scalable data layers with SQL and NoSQL experts.",
    description:
      "Choosing the wrong database for the job will cripple your application before it scales. Your database strategy is the foundation of your entire platform, making it a crucial component of any nearshore software development plan. We provide elite database experts who understand this reality. They are masters of both relational (PostgreSQL, MySQL) and NoSQL (MongoDB, DynamoDB) systems, and can architect a data layer that is performant, scalable, and purpose-built for your specific workload. Our Axiom Cortex™ engine vets for deep knowledge of query optimization, data modeling, and high-availability architecture.",
    icon: "Database",
    keywordPhrase: "Hire Nearshore Database Administrators and Experts",
    pains: [
      {
        pain: "Are slow database queries from your nearshore team killing your application's performance?",
        problem:
          "Staffing vendors provide developers who lack a deep understanding of database internals. They write inefficient queries, design poor schemas, and fail to implement proper indexing, leading to a slow, unresponsive application that is expensive to scale.",
        solution:
          "A slow database query is a business problem. Our cognitive AI predicts a candidate's ability to think in terms of data performance. We vet for experts who can perform query plan analysis, implement advanced indexing strategies, and design normalized, scalable schemas for both SQL and NoSQL systems.",
        kpi: "Achieve sub-100ms query response times for critical application paths.",
      },
    ],
  },
  {
    name: "QA & Security",
    slug: "qa-security",
    summary: "Embed automated quality and security gates into your development lifecycle.",
    description:
      "In the age of AI, security and quality assurance are more critical than ever. Prompt injection, data poisoning, and model inversion are new, complex threats, while the speed of development demands fully automated quality gates. We provide elite nearshore QA and Security engineers who understand these modern challenges. They move beyond manual testing to build comprehensive, automated frameworks for UI (Playwright), API, and security (SAST/DAST) testing. Our Axiom Cortex™ engine vets for a 'shift-left' mindset, ensuring quality and security are built into the development lifecycle, not bolted on at the end.",
    icon: "Shield",
    keywordPhrase: "Hire Nearshore QA and Security Engineers",
    pains: [
      {
        pain: "Is your nearshore QA team just running manual tests and filing endless bug tickets?",
        problem:
          "Traditional QA vendors sell manual testing services that don't scale. They act as a bottleneck, slowing down your releases without fundamentally improving code quality. They find bugs late in the cycle, making them expensive to fix.",
        solution:
          "Shift left on quality, don't just find bugs at the end. We provide QA Automation and Security Engineers who build quality in. Our Cognitive AI vets for expertise in building robust, automated test suites (UI, API, performance) and integrating security scanning (SAST/DAST) directly into the CI/CD pipeline. They prevent bugs, rather than just finding them.",
        kpi: "95% of new bugs caught in CI before reaching production.",
      },
    ],
  },
  {
    name: "Architects & Integrations",
    slug: "architecture-integrations",
    summary: "Design resilient, evolvable systems with experts in microservices and event-driven patterns.",
    description:
      "Modern software architecture is about designing distributed, intelligent systems. A successful nearshore software development engagement hinges on having architects who can orchestrate microservices, event streams, and AI models into a coherent, scalable platform. We provide elite nearshore architects who can design these systems. They are not just diagram-drawers; they are hands-on practitioners who have built and scaled complex applications using microservices, event-driven patterns, and Domain-Driven Design. Our Axiom Cortex™ engine vets for the ability to manage complexity, make critical trade-off decisions, and design systems that are resilient, evolvable, and ready for the future.",
    icon: "Workflow",
    keywordPhrase: "Hire Nearshore Software and Solutions Architects",
    pains: [
      {
        pain: "Does your nearshore vendor provide 'architects' who can only draw diagrams?",
        problem:
          "Many nearshore consultancies offer theoretical architects who lack hands-on, production-level experience. They design systems that are overly complex, don't account for real-world operational constraints, and create more problems than they solve.",
        solution:
          "An architect who can't ship code is a liability. Our platform identifies architects who are also elite practitioners. Axiom Cortex™ assesses their ability to design scalable, resilient systems (e.g., microservices, event-driven architectures) and their deep, hands-on expertise in the tools required to build and operate them. We deliver architects who build, not just talk.",
        kpi: "Design architectures that are proven to scale to 1M+ users with high availability.",
      },
    ],
  },
  {
    name: "Mobile",
    slug: "mobile",
    summary: "Build high-performance, native-quality experiences for iOS and Android.",
    description:
      "Your mobile application is a powerful endpoint for on-device machine learning and personalized experiences. A generic, slow cross-platform app is a competitive disadvantage in today's market, making specialized talent a key part of your nearshore software development strategy. We provide nearshore mobile experts who can build high-performance, native-quality experiences. They are masters of both native iOS/Android and modern cross-platform frameworks like React Native and Flutter. Our Axiom Cortex™ engine vets for a deep understanding of mobile performance, platform-specific UI/UX, and the ability to integrate with on-device AI models.",
    icon: "Smartphone",
    keywordPhrase: "Hire Nearshore Mobile App Developers",
    pains: [
      {
        pain: "Is your cross-platform mobile app slow and delivering a poor user experience?",
        problem:
          "Vendors often push cross-platform solutions without vetting for the deep performance optimization skills required. This results in apps that feel 'janky,' have slow startup times, and fail to meet the high expectations of mobile users, leading to bad reviews and uninstalls.",
        solution:
          "A bad mobile experience loses customers. Our Cognitive AI vetting process specifically targets mobile performance expertise. Whether it's React Native or Flutter, we validate a candidate's ability to debug the bridge, optimize render performance, and write efficient state management logic to deliver a smooth, native-quality experience.",
        kpi: "Achieve a consistent 60 FPS on all critical user interactions.",
      },
    ],
  },
  {
    name: "Vetting & Cognitive AI",
    slug: "vetted-talent",
    summary: "Go beyond resumes to assess the cognitive traits that define elite engineering talent.",
    description:
      "Relying on resumes and coding trivia is a failed model that results in costly mis-hires and slow time-to-fill. A successful nearshore software development program requires an intelligent, data-driven hiring process. TeamStation AI was built to solve this. Our Axiom Cortex™ engine is the culmination of our research into what makes an elite engineer. We have productized the science of talent evaluation, moving beyond what a candidate knows to *how they think*. This category explores the very core of our platform—the cognitive AI that powers our vetting process and enables us to build high-performance nearshore teams with unparalleled predictability and success.",
    icon: "TestTube2",
    keywordPhrase: "Explore Our Vetting and Cognitive AI",
    pains: [
      {
        pain: "Is your hiring process a slow, expensive, and unreliable black box?",
        problem:
          "Traditional hiring relies on resume keywords and simplistic coding challenges, which are poor predictors of on-the-job success. This leads to a long time-to-hire, high recruitment costs, and a constant risk of making a bad hire that drains team productivity.",
        solution:
          "We've productized the science of talent evaluation. Axiom Cortex™ is our proprietary Cognitive AI engine that moves beyond what a candidate knows to *how they think*. It assesses problem-solving, architectural reasoning, and collaborative aptitude, providing a predictive model of a candidate's ability to succeed on your team.",
        kpi: "Reduce time-to-hire by 80% and increase 90-day success rate to over 97%.",
      },
    ],
  },
];
