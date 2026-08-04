/** @Spec
* Feature: Technology Data Source - Product Roles
* Type: lib
* Route: /src/lib/data/product.ts
* Description: Central data source for Product specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';
import type { Category } from '@/lib/categories';

export const productCategory: Category = {
    name: "Product & Design",
    slug: "product",
    summary: "Build products that win with elite nearshore product managers, designers, and owners.",
    description: "Your product strategy and user experience are the foundation of your success. We provide elite nearshore product leaders who can translate business goals into exceptional products, ensuring your engineering efforts are always focused on delivering real value to your customers.",
    icon: 'Users',
    keywordPhrase: "Hire Nearshore Product & Design Experts",
    pains: [
      {
        pain: "Your product team ships slowly or misses the mark.",
        problem: "Design and engineering are misaligned, leading to endless rework and unclear priorities.",
        solution: "We provide cognitively vetted product leaders and UX engineers who translate strategy into execution. They combine product intuition with technical fluency, ensuring every sprint produces measurable outcomes.",
        kpi: "Deliver features 40% faster with improved cross-functional alignment."
      },
      {
        pain: "Is your user experience an afterthought, leading to low adoption?",
        problem: "A powerful backend is useless if the user interface is confusing or difficult to use. A poor user experience leads to low engagement, high churn, and a damaged brand reputation.",
        solution: "Our product designers are masters of user-centered design. They create intuitive, accessible, and beautiful interfaces that make your product a joy to use, driving user adoption and satisfaction.",
        kpi: "Measurable improvements in user engagement, satisfaction, and retention rates."
      }
    ]
};

export const product: Record<string, TechEntry> = {
  "product-manager": {
    slug: "product-manager",
    name: "Product Manager",
    category: "Product & Design",
    categorySlug: "product",
    seo_title: "Hire Nearshore AI Product Managers | TeamStation AI",
    meta_description: "Hire elite nearshore Product Managers vetted for their ability to define AI product vision, strategy, and deliver business outcomes in the AI era.",
    intro: "In the AI era, a Product Manager does more than manage a backlog; they architect the human-AI interaction. They are responsible for defining the 'why' behind an AI-driven product, ensuring that complex models translate into tangible user value and business outcomes. Our vetting process finds product leaders who can navigate the ambiguity of AI development, from defining success metrics for probabilistic systems to prioritizing features that leverage the unique capabilities of LLMs and machine learning.",
    pains: [
      {
        pain: "Is your AI strategy disconnected from user needs?",
        problem: "Teams often get excited about a new AI technology without a clear vision of the user problem it solves. This leads to impressive tech demos that fail to gain traction because they don't address a real-world pain point.",
        solution: "We provide Product Managers who are experts in AI product discovery. They are vetted on their ability to identify high-value use cases for AI, conduct user research to validate assumptions, and define a product strategy that ensures your AI investment solves a meaningful problem.",
        kpi: "A clear, user-validated AI product strategy."
      },
      {
        pain: "Are you struggling to measure the success of your AI features?",
        problem: "Traditional success metrics don't always apply to AI features. It's difficult to measure the 'accuracy' of a generative model or the 'quality' of a recommendation engine, making it hard to know if you are making progress.",
        solution: "Our Product Managers are skilled in defining and tracking metrics for AI products. They can develop a framework for evaluating model performance against user-facing outcomes, using a combination of quantitative metrics and qualitative feedback to guide the product's evolution.",
        kpi: "A comprehensive framework for measuring AI product success."
      }
    ],
    evaluation: ["AI Product Strategy & Vision", "Data-Driven Roadmapping for AI", "Defining Metrics for ML Systems", "User-Centered AI Design Principles", "Agile for AI/ML Projects"],
    technical_analysis: "Our evaluation for AI Product Managers focuses on their ability to lead in an environment of high technical ambiguity. Candidates are given a case study for a new generative AI product and must develop a lean canvas, a high-level roadmap, and a set of hypotheses to test. We assess their understanding of core AI concepts, their ability to communicate effectively with both data scientists and UX designers, and their strategy for launching and iterating on a probabilistic, non-deterministic product. They must articulate how they would balance user experience with model limitations and define a clear path to delivering business value.",
    interlink_slugs: ["product-designer", "business-analyst", "scrum-master", "product-owner", "react", "node"],
  },
  "product-designer": {
    slug: "product-designer",
    name: "Product Designer",
    category: "Product & Design",
    categorySlug: "product",
    seo_title: "Hire Nearshore AI Product Designers | TeamStation AI",
    meta_description: "Hire elite nearshore Product Designers vetted for creating intuitive user experiences for complex AI-powered applications and conversational interfaces.",
    intro: "Designing for AI is a new frontier. It requires a designer who can create interfaces for systems that learn, adapt, and sometimes make mistakes. Our Product Designers are experts in this domain, skilled in creating user experiences that are not only beautiful but also build trust and transparency between the user and the AI. They design for the entire AI interaction, from loading and thinking states to gracefully handling 'hallucinations' and providing users with the controls they need.",
    pains: [
      {
        pain: "Is your AI feature a 'black box' that confuses users?",
        problem: "When users don't understand why an AI made a particular decision or recommendation, they lose trust in the system. A lack of transparency leads to low adoption and a poor user experience.",
        solution: "We vet for designers who are experts in AI explainability and user trust. They are skilled in creating interfaces that provide context and transparency, helping users understand the AI's reasoning and building their confidence in the system.",
        kpi: "Designs that measurably increase user trust in AI features."
      },
      {
        pain: "Is your conversational UI clunky and unnatural?",
        problem: "Building a chatbot or voice interface that feels natural and helpful is incredibly difficult. Most conversational UIs are rigid, easily break, and frustrate users by failing to understand their intent.",
        solution: "Our Product Designers are experts in conversational design (CUI). They can map out complex conversation flows, design for ambiguity and error recovery, and create a persona for the AI that aligns with your brand, resulting in a more natural and effective user interaction.",
        kpi: "A well-designed conversational flow with high user success rates."
      }
    ],
    evaluation: ["User-Centered Design for AI", "Conversational UI/UX Design", "Prototyping for AI Interactions", "Handling AI States (Loading, Errors, Ambiguity)", "Ethics and Transparency in AI Design"],
    technical_analysis: "The Product Designer evaluation focuses on their ability to tackle the unique challenges of designing for AI. Candidates are given a complex AI-driven feature (e.g., a personalized content feed or a generative art tool) and are required to produce wireframes and a prototype that demonstrate their design process. We assess their ability to design for non-deterministic and probabilistic states, to create interfaces that build user trust, and to design effective feedback loops for model improvement. They must demonstrate a deep understanding of how to make the AI's capabilities and limitations clear to the end-user.",
    interlink_slugs: ["product-manager", "business-analyst", "scrum-master", "product-owner", "react", "vue"],
  },
  "product-owner": {
    slug: "product-owner",
    name: "Product Owner",
    category: "Product & Design",
    categorySlug: "product",
    seo_title: "Hire Nearshore Agile Product Owners | TeamStation AI",
    meta_description: "Hire elite nearshore Product Owners vetted for their ability to maximize the value of the product resulting from the work of the Development Team, especially in AI/ML projects.",
    intro: "In an Agile team building AI products, the Product Owner plays a critical role. They are responsible for translating the high-level product vision into a detailed, prioritized backlog of user stories and technical tasks that a data science and engineering team can execute on. Our vetting process finds Product Owners who excel at this, with a special focus on their ability to manage the unique challenges of an AI development lifecycle.",
    pains: [
        {
            pain: "Is your backlog for AI projects vague and un-actionable?",
            problem: "It's difficult to break down a complex AI goal (e.g., 'improve recommendation accuracy') into small, incremental stories that a team can work on. This leads to long, risky research spikes and a lack of demonstrable progress.",
            solution: "We provide Product Owners who are skilled at creating a well-defined backlog for AI projects. They are experts at writing user stories that are independent, negotiable, valuable, estimable, small, and testable (INVEST), even for experimental ML tasks.",
            kpi: "A clear, actionable backlog for AI/ML projects."
        },
        {
            pain: "Is your team struggling with the uncertainty of research-heavy sprints?",
            problem: "AI development is often more experimental than traditional software development. Sprints can easily fail to deliver a 'done' increment, leading to frustration and a sense of unpredictability.",
            solution: "Our Product Owners are experienced in managing Agile for AI. They know how to structure sprints that balance research spikes with engineering tasks, and how to define a 'valuable increment' that might be a learning outcome rather than a shippable feature, keeping the team motivated and productive.",
            kpi: "Improved predictability and morale in AI-focused sprints."
        }
    ],
    evaluation: ["Agile for AI/ML", "Backlog Management for Research & Engineering", "Writing User Stories for Data Science", "Sprint Goal Definition for Experimental Work", "Stakeholder Communication on Probabilistic Outcomes"],
    technical_analysis: "Our evaluation for Product Owners in an AI context focuses on their ability to manage uncertainty. Candidates are given a project brief for a new machine learning feature and are required to create a story-mapped backlog for the first three sprints. We assess their ability to break down the work into a mix of data exploration, model training, and engineering tasks. They must be able to define clear acceptance criteria for a data science 'experiment' and explain how they would communicate progress to stakeholders when the outcome is uncertain.",
    interlink_slugs: ["scrum-master", "product-manager", "business-analyst", "product-designer", "jira", "agile"],
  },
  "scrum-master": {
    slug: "scrum-master",
    name: "Scrum Master",
    category: "Product & Design",
    categorySlug: "product",
    seo_title: "Hire Nearshore Agile Scrum Masters | TeamStation AI",
    meta_description: "Hire elite nearshore Scrum Masters vetted for their ability to facilitate Agile processes, especially for teams building complex AI and data-intensive systems.",
    intro: "In a team that includes data scientists, ML engineers, and software developers, the role of the Scrum Master as a facilitator and coach is more important than ever. You need an expert who can adapt the Scrum framework to the unique, often experimental, nature of AI development. Our vetting process finds Scrum Masters who can foster a culture of collaboration, remove impediments, and help high-performing, cross-functional teams thrive.",
    pains: [
        {
            pain: "Are your Agile ceremonies failing to accommodate your data scientists?",
            problem: "The work of a data scientist can be more experimental and less predictable than that of a software engineer. Forcing them into a rigid Scrum process designed for traditional software can lead to frustration and a feeling that Agile 'doesn't work' for AI.",
            solution: "We provide Scrum Masters who are experts at adapting Agile practices. They are vetted on their ability to facilitate a process that provides structure while still allowing for the flexibility needed for research and experimentation, ensuring the whole team feels productive and included.",
            kpi: "A tailored Agile process that works for a cross-functional AI team."
        },
        {
            pain: "Is your team's velocity unpredictable and your sprint goals often missed?",
            problem: "In AI projects, unpredictable research outcomes and data quality issues can make sprint planning difficult and lead to frequently missed commitments, damaging team morale and stakeholder trust.",
            solution: "Our Scrum Masters are expert coaches and problem solvers. They are skilled at helping teams improve their estimation, break down work more effectively, and use retrospectives to learn and adapt, leading to more predictable delivery and a continuous improvement in performance.",
            kpi: "Improved sprint velocity consistency and a higher rate of achieving sprint goals."
        }
    ],
    evaluation: ["Advanced Scrum/Agile Facilitation", "Coaching High-Performing Teams", "Impediment Removal in a Technical Environment", "Agile Metrics for AI Teams", "Conflict Resolution and Communication"],
    technical_analysis: "The Scrum Master evaluation is based on their coaching and facilitation skills in a technical, AI-focused context. We present them with scenarios of team conflict, missed deadlines, and technical roadblocks, and assess their process for helping the team resolve the issues. They must demonstrate a deep understanding of servant-leadership and their ability to create an environment of psychological safety where a cross-functional team can do its best work. We also test their knowledge of how to apply agile principles to the non-deterministic work of data science and machine learning.",
    interlink_slugs: ["product-owner", "product-manager", "business-analyst", "agile", "jira"],
  },
  "business-analyst": {
    slug: "business-analyst",
    name: "Business Analyst",
    category: "Product & Design",
    categorySlug: "product",
    seo_title: "Hire Nearshore Business Analysts | TeamStation AI",
    meta_description: "Hire elite nearshore Business Analysts vetted for their ability to use modern data tools to analyze business needs and define requirements for technical solutions, including AI systems.",
    intro: "In the AI era, a Business Analyst is not just a documenter of requirements; they are a data-driven investigator who can bridge the gap between business problems and AI-powered solutions. Our Business Analysts are experts at using modern tools to analyze data, model processes, and translate complex business needs into clear, actionable requirements that engineering and data science teams can build upon.",
    pains: [
        {
            pain: "Are your requirements documents based on opinion, not data?",
            problem: "Without a data-driven approach to requirements gathering, projects are often based on guesswork and internal politics, leading to solutions that don't solve the most important business problems.",
            solution: "We provide Business Analysts who are skilled in data analysis. They are vetted on their ability to use SQL, Python, and BI tools to analyze business data, identify trends and opportunities, and use that data to inform and validate requirements.",
            kpi: "Requirements that are backed by quantitative data analysis."
        },
        {
            pain: "Are you struggling to define the requirements for an AI or machine learning project?",
            problem: "Defining requirements for a probabilistic system like an ML model is different from a traditional software project. It requires an understanding of data, model evaluation, and the iterative nature of AI development.",
            solution: "Our Business Analysts are trained in the fundamentals of AI and machine learning. They can work with business stakeholders to define success criteria for an ML model, identify the necessary data sources, and write requirements that are suited for an experimental, data-driven development process.",
            kpi: "Clear, well-defined requirements for AI and machine learning projects."
        }
    ],
    evaluation: ["Data-Driven Requirements Analysis", "Business Process Modeling (BPMN)", "SQL and Data Analysis Tools", "Defining Requirements for AI/ML Systems", "Stakeholder Communication and Facilitation"],
    technical_analysis: "The Business Analyst evaluation focuses on their analytical and communication skills in a data-rich environment. Candidates are given a business problem and a dataset and are required to perform an analysis to identify the root cause and propose a solution. They must be able to document their findings and translate them into a set of clear requirements for a technical team. We assess their proficiency with SQL for data querying and their ability to model a business process using a standard like BPMN. For AI-related projects, we test their understanding of how to define requirements for a non-deterministic system.",
    interlink_slugs: ["product-manager", "product-owner", "scrum-master", "sql", "data-governance"],
  },
};
