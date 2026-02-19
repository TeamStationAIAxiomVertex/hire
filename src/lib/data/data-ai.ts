/** @Spec
* Feature: Technology Data Source - Data & AI
* Type: lib
* Route: /src/lib/data/data-ai.ts
* Description: Central data source for Data & AI specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const dataAi: Record<string, TechEntry> = {
  "data-engineering": {
    slug: "data-engineering",
    name: "Data Engineering",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Data Engineers | Nearshore Software Development",
    meta_description:
      "Build scalable data infrastructure. Hire nearshore Data Engineers vetted for Spark, Kafka, dbt, and modern data stack mastery for your software team.",
    intro:
      "Data Engineering is the backbone of any data-driven organization. You need engineers who can build robust, scalable, and reliable data pipelines that transform raw data into actionable insights. Our vetting process, powered by Axiom Cortex™, finds experts in the modern data stack. We test their ability to build high-throughput ETL/ELT pipelines, manage data warehouses, and work with tools like Apache Spark, Kafka, and dbt.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your data pipelines brittle, slow, and failing silently?",
        problem:
          "Poorly designed data pipelines are a maintenance nightmare. They are slow, prone to failure, and often fail silently, leading to corrupt or stale data in your analytics systems.",
        solution:
          "We vet for engineers who are experts in building resilient and observable data pipelines. They must demonstrate the ability to use tools like Airflow for orchestration, Spark for processing, and modern data quality frameworks to ensure data integrity.",
        kpi: "Resilient and Observable Data Pipelines",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your data warehouse a disorganized 'data swamp'?",
        problem:
          "Without proper data modeling and governance, a data warehouse can quickly become a 'data swamp' where data is duplicated, inconsistent, and untrustworthy, making it useless for analytics.",
        solution:
          "Our engineers are proficient in modern data warehousing and modeling techniques. They are vetted on their ability to use tools like dbt and Snowflake to build a well-structured, documented, and trustworthy data warehouse that serves as a single source of truth.",
        kpi: "Well-Modeled and Governed Data Warehouse",
      },
    ],
    evaluation: [
      "ETL/ELT pipeline design and implementation",
      "Apache Spark and distributed data processing",
      "Data warehousing (Snowflake, BigQuery, Redshift)",
      "Data modeling and transformation with dbt",
      "Streaming data with Kafka or Kinesis",
    ],
    technical_analysis:
      "The Data Engineering evaluation focuses on building scalable and reliable data systems. Candidates are required to design an end-to-end data pipeline, from ingestion to transformation and loading into a data warehouse. A critical assessment is their ability to use Apache Spark to process a large dataset efficiently. We also test their knowledge of data warehousing concepts and their ability to use a tool like dbt to build a clean and maintainable data model. Finally, we assess their understanding of streaming data and their ability to build a real-time data pipeline with Kafka.",
    interlink_slugs: ["apache-spark", "dbt", "snowflake", "kafka"],
  },
  sql: {
    slug: "sql",
    name: "SQL",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire SQL Experts | Nearshore Software Development",
    meta_description:
      "Unlock your relational data. Hire nearshore SQL experts vetted for advanced querying, performance tuning, and complex data analysis for your software team.",
    intro:
      "SQL is the universal language of data. You need an expert who can write clean, efficient, and powerful SQL to unlock the insights hidden in your relational databases. Our vetting process, powered by Axiom Cortex™, finds engineers who are true masters of SQL. We test their ability to write complex queries, optimize performance, and work with a variety of relational database systems.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are slow database queries grinding your application to a halt?",
        problem:
          "A single, poorly written SQL query can consume massive database resources, slowing down your entire application and leading to a poor user experience.",
        solution:
          "We vet for engineers who are experts in SQL performance tuning. They must demonstrate the ability to analyze query execution plans, optimize indexes, and rewrite queries for maximum performance.",
        kpi: "High-Performance SQL Querying",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to answer complex business questions with your data?",
        problem:
          "Simple `SELECT *` queries are not enough to answer the complex business questions you have. You need to be able to perform complex aggregations, joins, and analysis to get the insights you need.",
        solution:
          "Our engineers are proficient in advanced SQL features like window functions, common table expressions (CTEs), and complex joins. They are vetted on their ability to write powerful SQL to answer even the most challenging business questions.",
        kpi: "Advanced Data Analysis with SQL",
      },
    ],
    evaluation: [
      "Advanced SQL (Window Functions, CTEs)",
      "Query performance tuning and execution plan analysis",
      "Indexing strategies",
      "Transaction management and isolation levels",
      "Data modeling and normalization",
    ],
    technical_analysis:
      "The SQL evaluation focuses on advanced querying and performance. Candidates are required to solve a series of complex data analysis problems using SQL, demonstrating their mastery of advanced features. A critical assessment is their ability to diagnose and fix a slow-running query by analyzing its execution plan. We also test their understanding of database fundamentals like indexing, transactions, and data modeling. Finally, we assess their experience with a variety of SQL databases, such as PostgreSQL, MySQL, and SQL Server.",
    interlink_slugs: ["postgresql", "mysql", "sql-server", "data-engineering"],
  },
  "etl-elt": {
    slug: "etl-elt",
    name: "ETL/ELT",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire ETL/ELT Experts | Nearshore Software Development",
    meta_description:
      "Build robust and scalable data integration pipelines. Hire elite nearshore ETL/ELT experts vetted for designing and building modern data movement solutions.",
    intro:
      "ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) are the foundational processes for moving data from various sources into a centralized data warehouse or data lake. You need an expert who can design and build robust, scalable, and reliable data pipelines that can handle the volume and variety of your data. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of modern data integration. We test their ability to work with a variety of data sources, build efficient transformation logic, and orchestrate complex data workflows.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your data pipelines slow, brittle, and difficult to maintain?",
        problem:
          "Poorly designed ETL/ELT pipelines are a constant source of pain. They are slow, fail frequently, and require a huge amount of manual effort to maintain.",
        solution:
          "We vet for engineers who are experts in building modern, resilient data pipelines. They must demonstrate the ability to use tools like Airflow for orchestration, Spark or dbt for transformation, and to build pipelines that are automated, observable, and easy to maintain.",
        kpi: "Robust and Maintainable Data Pipelines",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to integrate data from a growing number of sources?",
        problem:
          "As your business grows, so does the number of data sources you need to integrate. Building and maintaining custom integrations for each source is a slow and expensive process.",
        solution:
          "Our engineers are proficient in modern data integration tools and platforms like Airbyte or Fivetran. They are vetted on their ability to quickly and easily integrate data from a wide variety of sources, allowing you to focus on generating insights, not building connectors.",
        kpi: "Rapid and Scalable Data Integration",
      },
    ],
    evaluation: [
      "ETL vs. ELT architectures",
      "Data pipeline orchestration with Airflow or Prefect",
      "Data transformation with Spark or dbt",
      "Data integration with tools like Airbyte or Fivetran",
      "Data quality and testing",
    ],
    technical_analysis:
      "The ETL/ELT evaluation focuses on designing and building modern data pipelines. Candidates are required to design an end-to-end data integration solution, demonstrating their understanding of the trade-offs between ETL and ELT. A critical assessment is their ability to use a modern data stack (e.g., Airflow, dbt, Snowflake) to build a robust and scalable pipeline. We also test their knowledge of data quality and how to build tests and validation into their pipelines. Finally, we assess their experience with a variety of data sources and destinations.",
    interlink_slugs: ["data-engineering", "dbt", "airbyte", "snowflake"],
  },
  "apache-spark": {
    slug: "apache-spark",
    name: "Apache Spark",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Apache Spark Developers | Nearshore Software Development",
    meta_description:
      "Process massive datasets at scale. Hire nearshore Apache Spark experts vetted for building high-performance, distributed data processing applications.",
    intro:
      "Apache Spark is a unified analytics engine for large-scale data processing. It provides high-level APIs in Java, Scala, Python, and R, and an optimized engine that supports general execution graphs. You need an expert who can leverage Spark to process massive datasets quickly and efficiently. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of distributed data processing. We test their ability to write efficient Spark code, tune performance, and build complex data processing pipelines.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your data processing jobs slow and expensive?",
        problem:
          "Processing large datasets can be a slow and expensive process, especially if your code is not optimized for a distributed environment.",
        solution:
          "We vet for engineers who are experts in Spark performance tuning. They must demonstrate the ability to write efficient Spark code, optimize data shuffling, and correctly configure a Spark cluster to process data quickly and cost-effectively.",
        kpi: "High-Performance and Cost-Effective Data Processing",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to build complex, multi-stage data pipelines?",
        problem:
          "Building a complex data processing pipeline that involves multiple stages of transformation and aggregation can be a difficult undertaking.",
        solution:
          "Our engineers are proficient in Spark's powerful APIs, including the DataFrame API and Spark SQL. They are vetted on their ability to build complex, multi-stage data pipelines that are clean, maintainable, and easy to reason about.",
        kpi: "Complex and Maintainable Data Pipelines",
      },
    ],
    evaluation: [
      "Spark architecture and core concepts (RDDs, DataFrames, Datasets)",
      "Spark SQL and DataFrame API",
      "Performance tuning and optimization",
      "Structured Streaming for real-time processing",
      "Deployment on YARN or Kubernetes",
    ],
    technical_analysis:
      "The Apache Spark evaluation focuses on large-scale data processing. Candidates are required to write a Spark application to process a large dataset, demonstrating their mastery of the DataFrame API and Spark SQL. A critical assessment is their ability to diagnose and fix performance bottlenecks in a Spark job. We also test their knowledge of Structured Streaming for building real-time data processing applications. Finally, we assess their experience in deploying and managing Spark applications in a production environment.",
    interlink_slugs: ["data-engineering", "scala", "python", "kafka"],
  },
  dbt: {
    slug: "dbt",
    name: "dbt (Data Build Tool)",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire dbt Experts | Nearshore Software Development",
    meta_description:
      "Transform data in your warehouse. Hire nearshore dbt experts vetted for building modular, testable, and documented data models for your software team.",
    intro:
      "dbt (data build tool) is a transformation workflow that lets teams quickly and collaboratively deploy analytics code following software engineering best practices like modularity, portability, CI/CD, and documentation. You need an expert who can use dbt to bring discipline and rigor to your analytics code, transforming your data warehouse into a reliable source of truth. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of analytics engineering. We test their ability to build modular data models, write comprehensive data tests, and create a well-documented and trustworthy data warehouse.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your data warehouse a black box of undocumented, untrusted SQL scripts?",
        problem:
          "A collection of ad-hoc SQL scripts is not a data warehouse. It's a 'data swamp' that is impossible to maintain, difficult to trust, and a nightmare to onboard new team members to.",
        solution:
          "We vet for engineers who are experts in building clean, documented, and trustworthy data models with dbt. They must demonstrate the ability to apply software engineering best practices to analytics code, creating a data warehouse that is a true asset to your organization.",
        kpi: "Documented, Tested, and Trusted Data Models",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you constantly fighting fires caused by bad data?",
        problem:
          "Without a robust testing framework, bad data can silently creep into your data warehouse, leading to incorrect reports, poor business decisions, and a loss of trust in your data.",
        solution:
          "Our engineers are proficient in dbt's testing framework. They are vetted on their ability to write comprehensive data tests to ensure the quality, integrity, and correctness of your data, allowing you to catch issues before they impact your business.",
        kpi: "Improved Data Quality and Reliability",
      },
    ],
    evaluation: [
      "dbt core concepts and project structure",
      "Advanced Jinja and macro development",
      "Data modeling and materializations",
      "Data testing and documentation",
      "CI/CD for dbt projects",
    ],
    technical_analysis:
      "The dbt evaluation focuses on analytics engineering best practices. Candidates are required to build a dbt project from scratch, demonstrating their ability to create modular models, write tests, and generate documentation. A critical assessment is their ability to use Jinja and macros to write clean, reusable, and maintainable transformation logic. We also test their understanding of dbt's different materialization strategies and when to use each one. Finally, we assess their experience in setting up a CI/CD pipeline for a dbt project to automate testing and deployment.",
    interlink_slugs: ["data-engineering", "sql", "snowflake", "bigquery"],
  },
  snowflake: {
    slug: "snowflake",
    name: "Snowflake",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Snowflake Experts | Nearshore Software Development",
    meta_description:
      "Unlock the power of the Data Cloud. Hire nearshore Snowflake experts vetted for data warehousing, performance optimization, and modern data architecture.",
    intro:
      "Snowflake is the Data Cloud, a global network where thousands of organizations mobilize data with near-unlimited scale, concurrency, and performance. You need an expert who can leverage Snowflake's unique architecture to build a fast, flexible, and scalable data platform. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the Snowflake platform. We test their ability to design and manage a modern data warehouse, optimize query performance, and implement robust data governance and security.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your traditional data warehouse slow and difficult to scale?",
        problem:
          "Legacy data warehouses are often slow, expensive, and struggle to handle the volume and variety of modern data, creating a bottleneck for your analytics and data science teams.",
        solution:
          "We vet for engineers who are experts in Snowflake's multi-cluster, shared data architecture. They must demonstrate the ability to design a data platform that can scale compute and storage independently, providing near-unlimited performance and concurrency for all your data workloads.",
        kpi: "Scalable and High-Performance Data Warehousing",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to share data securely with partners and customers?",
        problem:
          "Sharing data with external parties is often a slow, insecure, and manual process involving ETL jobs and FTP servers, creating data silos and security risks.",
        solution:
          "Our engineers are proficient in Snowflake's Secure Data Sharing. They are vetted on their ability to share live, ready-to-query data with partners and customers in a secure, governed, and real-time manner, without creating data copies.",
        kpi: "Secure and Real-Time Data Sharing",
      },
    ],
    evaluation: [
      "Snowflake architecture (multi-cluster, shared data)",
      "Virtual warehouses and performance tuning",
      "Data loading and unloading (Snowpipe)",
      "Secure Data Sharing and governance",
      "Time Travel and Zero-Copy Cloning",
    ],
    technical_analysis:
      "The Snowflake evaluation focuses on modern cloud data warehousing. Candidates are required to design a data warehousing solution, demonstrating their understanding of Snowflake's unique architecture. A critical assessment is their ability to optimize query performance by correctly sizing and configuring virtual warehouses. We also test their knowledge of Snowflake's data loading and sharing capabilities. Finally, we assess their understanding of Snowflake's powerful features like Time Travel and Zero-Copy Cloning for data protection and agile development.",
    interlink_slugs: ["data-engineering", "dbt", "sql", "tableau"],
  },
  airbyte: {
    slug: "airbyte",
    name: "Airbyte",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Airbyte Experts | Nearshore Software Development",
    meta_description:
      "Replicate data from any source. Hire nearshore Airbyte experts vetted for building and managing scalable, open-source data integration pipelines.",
    intro:
      "Airbyte is an open-source data integration platform that helps you consolidate your data in your data warehouses, data lakes, and databases. With a rapidly growing library of connectors, it's the modern, flexible way to handle ELT. You need an expert who can leverage Airbyte to build a robust and scalable data integration solution without being locked into a proprietary vendor. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the Airbyte platform. We test their ability to deploy and manage Airbyte, configure connectors, and build custom connectors when needed.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are you paying a fortune for a proprietary, black-box data integration tool?",
        problem:
          "Proprietary ELT tools can be expensive, inflexible, and lack the transparency you need to debug issues or build custom integrations.",
        solution:
          "We vet for engineers who are experts in open-source data integration. They must demonstrate the ability to use Airbyte to build a cost-effective, flexible, and transparent data integration solution that you have full control over.",
        kpi: "Flexible and Cost-Effective Data Integration",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you unable to integrate data from a niche or custom data source?",
        problem:
          "Your business relies on data from a variety of sources, but your ELT tool doesn't have a connector for that one critical, niche application.",
        solution:
          "Our engineers are proficient in Airbyte's Connector Development Kit (CDK). They are vetted on their ability to build custom connectors for any data source, ensuring you can get all of your data into your warehouse.",
        kpi: "Custom Connector Development",
      },
    ],
    evaluation: [
      "Airbyte architecture and deployment",
      "Configuring sources, destinations, and connections",
      "Change Data Capture (CDC) with Airbyte",
      "Connector Development Kit (CDK)",
      "Integration with dbt for transformations",
    ],
    technical_analysis:
      "The Airbyte evaluation focuses on open-source data integration. Candidates are required to set up an Airbyte instance and configure a data replication pipeline from a source like a PostgreSQL database to a destination like Snowflake. A critical assessment is their understanding of how to use Airbyte for Change Data Capture (CDC). We also test their ability to use the CDK to build a basic custom connector. Finally, we assess their experience in integrating Airbyte into a modern data stack with tools like dbt and Airflow.",
    interlink_slugs: ["data-engineering", "etl-elt", "dbt", "snowflake"],
  },
  "data-governance": {
    slug: "data-governance",
    name: "Data Governance",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Data Governance Experts | Nearshore Software Development",
    meta_description:
      "Ensure your data is accurate, secure, and compliant. Hire nearshore Data Governance experts vetted for building robust data governance frameworks.",
    intro:
      "Data governance is the process of managing the availability, usability, integrity, and security of the data in enterprise systems. You need an expert who can establish and enforce policies and procedures to ensure your data is a trustworthy and valuable asset. Our vetting process, powered by Axiom Cortex™, finds engineers and analysts who are masters of data governance. We test their ability to implement data quality frameworks, manage data catalogs, and ensure compliance with regulations like GDPR and CCPA.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your data a 'wild west' of inconsistency and poor quality?",
        problem:
          "Without a data governance framework, your data can quickly become a mess of inconsistent formats, duplicate records, and poor quality, making it useless for analytics and decision making.",
        solution:
          "We vet for experts who can bring order to your data chaos. They must demonstrate the ability to establish data quality rules, implement data stewardship processes, and use data cataloging tools to create a single source of truth for your data.",
        kpi: "Improved Data Quality and Trust",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you at risk of non-compliance with data privacy regulations?",
        problem:
          "Regulations like GDPR and CCPA have strict requirements for how you manage personal data. Failure to comply can result in massive fines and reputational damage.",
        solution:
          "Our engineers are proficient in data privacy and compliance. They are vetted on their ability to implement data governance policies and tools to ensure compliance with data privacy regulations, including data lineage, access control, and data masking.",
        kpi: "Compliance with Data Privacy Regulations",
      },
    ],
    evaluation: [
      "Data governance frameworks (e.g., DAMA-DMBOK)",
      "Data quality management and tools",
      "Data cataloging and metadata management",
      "Data privacy and compliance (GDPR, CCPA)",
      "Master Data Management (MDM)",
    ],
    technical_analysis:
      "The Data Governance evaluation focuses on the policies, processes, and tools for managing enterprise data. Candidates are required to design a data governance framework for a fictional company, demonstrating their understanding of the key components of data governance. A critical assessment is their ability to design a data quality program, including defining data quality rules and establishing a data stewardship process. We also test their knowledge of data privacy regulations and how to implement technical controls to ensure compliance. Finally, we assess their experience with data governance tools, such as data catalogs and MDM platforms.",
    interlink_slugs: [
      "data-engineering",
      "snowflake",
      "dbt",
      "security-engineering",
    ],
  },
  "machine-learning": {
    slug: "machine-learning",
    name: "Machine Learning",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Machine Learning Engineers | Nearshore Software Development",
    meta_description:
      "Build and deploy intelligent applications. Hire nearshore Machine Learning Engineers vetted for model development, MLOps, and production deployment.",
    intro:
      "Machine Learning is transforming industries by enabling applications to learn from data and make intelligent decisions. You need an engineer who can not only build accurate models but also deploy and maintain them in a production environment. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the end-to-end machine learning lifecycle. We test their ability to work with data, train models, and use MLOps best practices to deploy and monitor them at scale.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your machine learning models stuck in a Jupyter notebook?",
        problem:
          "Building a model is only the first step. Many data scientists struggle to bridge the gap between a research environment and a production system, leaving valuable models on the shelf.",
        solution:
          "We vet for engineers who are experts in MLOps. They must demonstrate the ability to package, deploy, and monitor machine learning models in a production environment, ensuring they deliver real business value.",
        kpi: "End-to-End Machine Learning Lifecycle",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your model's performance degrading over time?",
        problem:
          "The world is constantly changing, and a model that was accurate yesterday may not be accurate today. Without proper monitoring, your model's performance can degrade silently, leading to poor business outcomes.",
        solution:
          "Our engineers are proficient in model monitoring and retraining. They are vetted on their ability to implement systems to monitor for model drift and to automate the process of retraining and redeploying models to ensure they remain accurate and effective over time.",
        kpi: "Continuous Model Monitoring and Improvement",
      },
    ],
    evaluation: [
      "Machine learning fundamentals (supervised, unsupervised learning)",
      "Model development with Python (Scikit-learn, TensorFlow, PyTorch)",
      "MLOps (model deployment, monitoring, CI/CD for ML)",
      "Feature engineering and data preprocessing",
      "Cloud ML platforms (SageMaker, Vertex AI)",
    ],
    technical_analysis:
      "The Machine Learning Engineer evaluation focuses on the practical application of ML. Candidates are required to build and deploy a machine learning model, demonstrating their understanding of the entire lifecycle. A critical assessment is their ability to use MLOps tools and practices to create a reproducible and automated model deployment pipeline. We also test their knowledge of feature engineering and their ability to work with large, complex datasets. Finally, we assess their experience with cloud-based ML platforms and their ability to choose the right tool for the job.",
    interlink_slugs: ["python", "data-science", "aws", "google-cloud"],
  },
  "data-warehousing": {
    slug: "data-warehousing",
    name: "Data Warehousing",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Data Warehousing Experts | Nearshore Software Development",
    meta_description:
      "Build your single source of truth for analytics. Hire nearshore Data Warehousing experts vetted for Snowflake, BigQuery, Redshift, and data modeling.",
    intro:
      "A data warehouse is the core of any modern analytics platform, providing a centralized, trusted source of data for business intelligence and data science. You need an expert who can design, build, and manage a scalable and performant data warehouse in the cloud. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of modern data warehousing. We test their ability to work with platforms like Snowflake, BigQuery, and Redshift, and to apply data modeling best practices to build a system that is both powerful and easy to use.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your data scattered across dozens of disconnected silos?",
        problem:
          "When data is spread across multiple systems, it's impossible to get a single, unified view of your business, leading to inconsistent reporting and poor decision making.",
        solution:
          "We vet for engineers who are experts in building a centralized data warehouse that serves as a single source of truth for your entire organization. They must demonstrate the ability to integrate data from various sources and to build a clean, consistent data model.",
        kpi: "Single Source of Truth for Analytics",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your data warehouse slow and expensive to operate?",
        problem:
          "Traditional, on-premises data warehouses are often slow, difficult to scale, and require a large upfront investment and ongoing maintenance.",
        solution:
          "Our engineers are proficient in modern cloud data warehouses like Snowflake and BigQuery. They are vetted on their ability to leverage the elasticity and performance of the cloud to build a data warehouse that is both fast and cost-effective.",
        kpi: "Scalable and Cost-Effective Cloud Data Warehousing",
      },
    ],
    evaluation: [
      "Cloud data warehouse platforms (Snowflake, BigQuery, Redshift)",
      "Data modeling (Kimball, Inmon, Data Vault)",
      "ETL/ELT and data integration",
      "SQL and performance tuning",
      "Data governance and security",
    ],
    technical_analysis:
      "The Data Warehousing evaluation focuses on designing and building modern analytical data platforms. Candidates are required to design a data warehouse schema for a given business domain, demonstrating their understanding of different data modeling methodologies. A critical assessment is their ability to write efficient SQL and to tune the performance of a cloud data warehouse. We also test their knowledge of data integration and ETL/ELT processes. Finally, we assess their understanding of data governance and security in a data warehousing context.",
    interlink_slugs: ["data-engineering", "snowflake", "bigquery", "sql"],
},
  "power-bi": {
    slug: "power-bi",
    name: "Power BI",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Power BI Developers | Nearshore Software Development",
    meta_description:
      "Turn data into actionable insights. Hire nearshore Power BI experts vetted for data modeling, DAX, and building impactful reports for your business.",
    intro:
      "Microsoft Power BI is a leading business analytics service that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards. You need an expert who can transform your raw data into rich, interactive reports that drive business decisions. Our vetting process, powered by Axiom Cortex™, finds developers who are masters of the Power BI platform. We test their ability to connect to data, build robust data models, write complex DAX calculations, and design beautiful, effective reports.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your reports slow, inaccurate, and difficult to understand?",
        problem:
          "A poorly designed Power BI report can be more confusing than helpful. Slow performance, incorrect calculations, and cluttered visuals can lead to a lack of trust in your data.",
        solution:
          "We vet for developers who are experts in building high-quality Power BI solutions. They must demonstrate the ability to build an optimized data model, write accurate DAX, and design reports that are both visually appealing and easy to understand.",
        kpi: "Accurate, Performant, and Actionable Reports",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your 'self-service' BI platform actually creating data chaos?",
        problem:
          "Without a proper governance model and a certified set of datasets, a self-service BI environment can quickly devolve into a mess of inconsistent reports and untrusted data.",
        solution:
          "Our experts are proficient in Power BI governance. They are vetted on their ability to create a 'single source of truth' by building and certifying shared datasets, enabling true, governed self-service BI across your organization.",
        kpi: "Governed Self-Service Business Intelligence",
      },
    ],
    evaluation: [
      "Power Query for data ingestion and transformation",
      "Data modeling in Power BI Desktop",
      "Advanced DAX for complex calculations",
      "Report and dashboard design best practices",
      "Power BI Service administration and governance",
    ],
    technical_analysis:
      "The Power BI evaluation focuses on end-to-end business intelligence development. Candidates are required to build a complete Power BI report from scratch, including connecting to data, transforming it with Power Query, building a data model, writing DAX measures, and designing the report layout. A critical assessment is their ability to write complex and performant DAX. We also test their understanding of data modeling best practices, such as star schemas. Finally, we assess their knowledge of the Power BI Service and how to manage and govern a BI environment.",
    interlink_slugs: ["tableau", "sql-server", "azure", "data-warehousing"],
  },
  tableau: {
    slug: "tableau",
    name: "Tableau",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Tableau Developers | Nearshore Software Development",
    meta_description:
      "Help people see and understand data. Hire nearshore Tableau experts vetted for creating powerful, interactive data visualizations and dashboards.",
    intro:
      "Tableau is a powerful and flexible end-to-end data analytics platform that helps people see and understand data. You need an expert who can use Tableau to connect to your data and create beautiful, interactive visualizations that inspire action. Our vetting process, powered by Axiom Cortex™, finds developers who are masters of data visualization. We test their ability to connect to a wide variety of data sources, build complex calculations, and design dashboards that are both insightful and intuitive.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your dashboards just a collection of charts without a clear story?",
        problem:
          "A dashboard that doesn't tell a clear story or answer a specific business question is just a collection of pretty pictures. It fails to deliver the insights your business needs.",
        solution:
          "We vet for developers who are experts in data storytelling. They must demonstrate the ability to design dashboards that are focused, intuitive, and guide the user to a clear set of insights and actions.",
        kpi: "Insightful and Actionable Dashboards",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your Tableau performance slow and frustrating for users?",
        problem:
          "A slow-loading dashboard will not be used. Poor performance can be caused by a variety of factors, from inefficient data connections to poorly designed calculations.",
        solution:
          "Our experts are proficient in Tableau performance tuning. They are vetted on their ability to use tools like the Performance Recorder to diagnose and fix performance issues, ensuring your dashboards are fast and responsive.",
        kpi: "High-Performance and Responsive Dashboards",
      },
    ],
    evaluation: [
      "Connecting to and preparing data",
      "Advanced calculations and Level of Detail (LOD) expressions",
      "Dashboard design and data storytelling",
      "Tableau Server/Cloud administration and governance",
      "Performance tuning and optimization",
    ],
    technical_analysis:
      "The Tableau evaluation focuses on data visualization and storytelling. Candidates are required to build an interactive dashboard that answers a set of business questions, demonstrating their mastery of Tableau's features. A critical assessment is their ability to use advanced calculations, especially LOD expressions, to create sophisticated analytics. We also test their understanding of visual design best practices and their ability to create a dashboard that is both beautiful and effective. Finally, we assess their knowledge of Tableau Server/Cloud and how to manage and govern a Tableau deployment.",
    interlink_slugs: ["power-bi", "snowflake", "sql", "data-warehousing"],
  },
  fivetran: {
    slug: "fivetran",
    name: "Fivetran",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Fivetran Experts | Nearshore Software Development",
    meta_description:
      "Automate your data integration. Hire nearshore Fivetran experts vetted for building and managing reliable, zero-maintenance data pipelines.",
    intro:
      "Fivetran is the leader in automated data movement, providing reliable, zero-maintenance data pipelines that centralize data from all your sources into a single cloud data warehouse. You need an expert who can leverage Fivetran to automate your data integration and free up your data engineering team to focus on higher-value tasks. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of automated ELT. We test their ability to configure and manage Fivetran connectors, monitor data pipelines, and integrate Fivetran into a modern data stack.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your data engineering team spending all their time building and maintaining brittle data pipelines?",
        problem:
          "Building and maintaining data pipelines by hand is a time-consuming, expensive, and never-ending task that distracts your team from more strategic work.",
        solution:
          "We vet for engineers who are experts in automating data integration. They must demonstrate the ability to use Fivetran to build a fully automated, zero-maintenance data pipeline in minutes, not months.",
        kpi: "Automated and Zero-Maintenance Data Pipelines",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling with data downtime and reliability issues?",
        problem:
          "When a data pipeline breaks, it can take hours or even days to fix, leading to data downtime and a loss of trust in your data.",
        solution:
          "Our experts are proficient in Fivetran's reliable and resilient architecture. They are vetted on their ability to build data pipelines that are self-healing and automatically recover from failures, ensuring your data is always fresh and available.",
        kpi: "Improved Data Uptime and Reliability",
      },
    ],
    evaluation: [
      "Fivetran architecture and core concepts",
      "Connector configuration and management",
      "Data synchronization and replication strategies",
      "Integration with dbt for transformations",
      "Monitoring and alerting",
    ],
    technical_analysis:
      "The Fivetran evaluation focuses on automated data integration. Candidates are required to set up a Fivetran pipeline to replicate data from a source like Salesforce or a transactional database to a cloud data warehouse. A critical assessment is their understanding of how Fivetran handles schema changes and data updates automatically. We also test their ability to integrate Fivetran with dbt for post-load transformations. Finally, we assess their knowledge of how to monitor and troubleshoot Fivetran pipelines to ensure data reliability.",
    interlink_slugs: ["airbyte", "dbt", "snowflake", "data-engineering"],
  },
  looker: {
    slug: "looker",
    name: "Looker",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Looker Developers | Nearshore Software Development",
    meta_description:
      "Go beyond traditional BI. Hire nearshore Looker experts vetted for LookML development, data modeling, and building embedded analytics.",
    intro:
      "Looker is a modern business intelligence and data application platform that helps you explore, analyze, and share real-time business analytics. Its powerful, reusable data modeling layer, LookML, provides a single source of truth for your entire organization. You need an expert who can use Looker to build a data platform that empowers your entire team to make data-driven decisions. Our vetting process, powered by Axiom Cortex™, finds developers who are masters of the Looker platform. We test their ability to write clean and maintainable LookML, build intuitive data explorations, and create powerful data applications.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your business logic scattered across dozens of inconsistent reports?",
        problem:
          "When every report has its own, slightly different definition of a key metric like 'revenue' or 'active user', it leads to confusion, mistrust, and poor decision making.",
        solution:
          "We vet for developers who are experts in building a single source of truth with LookML. They must demonstrate the ability to create a centralized, version-controlled data model that provides consistent, reliable metrics for the entire organization.",
        kpi: "Single Source of Truth with LookML",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your BI tool just for analysts, leaving the rest of your team in the dark?",
        problem:
          "Traditional BI tools are often too complex for non-technical users, creating a bottleneck where the data team is constantly fielding ad-hoc requests.",
        solution:
          "Our experts are proficient in building intuitive and self-service data experiences with Looker. They are vetted on their ability to create user-friendly Explores and dashboards that empower everyone in your organization to answer their own questions with data.",
        kpi: "Empowered Self-Service Analytics",
      },
    ],
    evaluation: [
      "LookML development and data modeling",
      "Building Explores, Looks, and Dashboards",
      "Liquid for dynamic content",
      "Embedded analytics and data applications",
      "Performance tuning and optimization",
    ],
    technical_analysis:
      "The Looker evaluation focuses on building a modern, scalable BI platform. Candidates are required to build a LookML model from scratch, demonstrating their mastery of views, explores, and joins. A critical assessment is their ability to write clean, maintainable, and reusable LookML code. We also test their ability to build intuitive dashboards and to use Liquid for advanced customization. Finally, we assess their experience with embedded analytics and building data applications on top of the Looker platform.",
    interlink_slugs: ["dbt", "snowflake", "bigquery", "data-governance"],
  },
  presto: {
    slug: "presto",
    name: "Presto / Trino",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Presto/Trino Experts | Nearshore Software Development",
    meta_description:
      "Query anything, anywhere. Hire nearshore Presto/Trino experts vetted for federated queries, performance tuning, and large-scale data analytics.",
    intro:
      "Presto (and its fork, Trino) is a high-performance, distributed SQL query engine for big data. Its key feature is the ability to query data where it lives, including in Hadoop, S3, Cassandra, and relational databases, without moving it. You need an expert who can leverage Presto/Trino to build a powerful, federated analytics platform. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of distributed SQL. We test their ability to write complex federated queries, tune performance, and manage a large-scale Presto/Trino cluster.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your data silos preventing you from getting a complete view of your data?",
        problem:
          "Your data is spread across multiple systems—a data lake in S3, a NoSQL database, and a relational data warehouse. Getting a unified view requires complex and slow ETL jobs.",
        solution:
          "We vet for engineers who are experts in federated queries. They must demonstrate the ability to use Presto/Trino to write a single SQL query that joins data from multiple, disparate data sources, providing a real-time, unified view of your data.",
        kpi: "Federated Queries Across Data Silos",
      },
      {
        icon: "AlertTriangle",
        pain: "Are your ad-hoc queries on your data lake slow and inefficient?",
        problem:
          "Querying large datasets in a data lake with traditional tools can be incredibly slow, preventing your analysts and data scientists from exploring data at the speed of thought.",
        solution:
          "Our experts are proficient in Presto/Trino performance tuning. They are vetted on their ability to optimize query execution and to configure a Presto/Trino cluster for high-performance, interactive queries on massive datasets.",
        kpi: "Interactive-Speed Queries on Big Data",
      },
    ],
    evaluation: [
      "Presto/Trino architecture and core concepts",
      "Connector configuration for various data sources",
      "Federated query writing and optimization",
      "Performance tuning and resource management",
      "Deployment and management of a Presto/Trino cluster",
    ],
    technical_analysis:
      "The Presto/Trino evaluation focuses on large-scale, federated data analytics. Candidates are required to write a complex SQL query that joins data from multiple different data sources (e.g., S3, MySQL, MongoDB), demonstrating their understanding of the federated query model. A critical assessment is their ability to diagnose and fix a slow-running query by analyzing the query plan and tuning the cluster configuration. We also test their knowledge of the various connectors and how to configure them. Finally, we assess their experience in deploying and managing a Presto/Trino cluster in a production environment.",
    interlink_slugs: ["data-engineering", "sql", "aws", "apache-spark"],
  },
  "data-science": {
    slug: "data-science",
    name: "Data Science",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Data Scientists | Nearshore Software Development",
    meta_description:
      "Turn data into business value. Hire nearshore Data Scientists vetted for statistical modeling, machine learning, and communicating insights.",
    intro:
      "Data Science is the discipline of using scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. You need a data scientist who can not only build complex models but also understand your business and communicate their findings effectively. Our vetting process, powered by Axiom Cortex™, finds data scientists who are a unique blend of statistician, software engineer, and business consultant. We test their ability to frame business problems, analyze data, build models, and tell a compelling story with their results.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your data science projects failing to deliver real business impact?",
        problem:
          "Many data science projects end up as interesting but ultimately useless science experiments. They fail because the data scientist didn't fully understand the business problem or couldn't communicate the value of their work.",
        solution:
          "We vet for data scientists who are focused on business outcomes. They must demonstrate the ability to translate a business problem into a data science problem, and to communicate their results in a clear, compelling way that drives action.",
        kpi: "Business-Focused and Action-Oriented Insights",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your data science work ad-hoc and not reproducible?",
        problem:
          "If your data science work is a collection of messy notebooks and one-off scripts, it's impossible to reproduce your results, build on your work, or put your models into production.",
        solution:
          "Our data scientists are proficient in software engineering best practices. They are vetted on their ability to write clean, modular, and version-controlled code, ensuring their work is reproducible, maintainable, and ready for production.",
        kpi: "Reproducible and Production-Ready Data Science",
      },
    ],
    evaluation: [
      "Statistical analysis and experimental design",
      "Machine learning modeling (classification, regression, clustering)",
      "Python data science stack (Pandas, NumPy, Scikit-learn)",
      "Data visualization and communication",
      "Framing business problems and delivering insights",
    ],
    technical_analysis:
      "The Data Scientist evaluation is a comprehensive assessment of their technical and business skills. Candidates are given a real-world business problem and a dataset, and are required to perform an end-to-end analysis, from data cleaning and exploration to modeling and presenting their findings. A critical assessment is their ability to clearly articulate the business implications of their work. We also test their technical skills in Python, SQL, and machine learning. Finally, we assess their ability to work in a team and to collaborate with engineers and product managers.",
    interlink_slugs: ["machine-learning", "python", "pandas", "numpy"],
  },
  llms: {
    slug: "llms",
    name: "LLMs (Large Language Models)",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire LLM & Generative AI Experts | Nearshore Software Development",
    meta_description:
      "Build intelligent apps with LLMs. Hire nearshore LLM experts vetted for prompt engineering, RAG, fine-tuning, and production deployment.",
    intro:
      "Large Language Models (LLMs) are a transformative new technology that is enabling a new generation of intelligent applications. You need an expert who can navigate the rapidly evolving landscape of LLMs and apply them to solve real business problems. Our vetting process, powered by Axiom Cortex™, finds engineers who are at the forefront of this new field. We test their ability to work with models from OpenAI, Anthropic, and open-source providers, and to build complex applications using frameworks like LangChain and LlamaIndex.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your LLM-powered features unreliable and prone to 'hallucinations'?",
        problem:
          "LLMs are powerful, but they can also be unpredictable and make things up. Building a reliable application on top of them requires a deep understanding of their limitations and how to mitigate them.",
        solution:
          "We vet for engineers who are experts in building reliable LLM applications. They must demonstrate the ability to use techniques like Retrieval-Augmented Generation (RAG) to ground the model in your own data, reducing hallucinations and improving accuracy.",
        kpi: "Reliable and Factual LLM-Powered Applications",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to move your LLM prototypes into production?",
        problem:
          "Building a production-ready LLM application involves more than just calling an API. You need to manage prompts, handle context, evaluate performance, and deploy your application in a scalable and cost-effective way.",
        solution:
          "Our engineers are proficient in the emerging field of LLMOps. They are vetted on their ability to use tools and best practices to build, deploy, and monitor LLM applications at scale, ensuring they are reliable, performant, and cost-effective.",
        kpi: "Production-Ready LLM Applications",
      },
    ],
    evaluation: [
      "LLM fundamentals and model selection (OpenAI, Anthropic, open-source)",
      "Prompt engineering and optimization",
      "Retrieval-Augmented Generation (RAG) with vector databases",
      "Fine-tuning and model customization",
      "LLMOps (deployment, monitoring, evaluation)",
    ],
    technical_analysis:
      "The LLM evaluation focuses on the practical application of large language models. Candidates are required to build a complete LLM-powered application, such as a question-answering system over a set of documents. A critical assessment is their ability to implement a robust RAG pipeline, including document chunking, embedding, and retrieval. We also test their prompt engineering skills and their ability to fine-tune a model for a specific task. Finally, we assess their understanding of the operational challenges of running LLM applications in production.",
    interlink_slugs: [
      "python",
      "data-science",
      "machine-learning",
      "vector-databases",
    ],
  },
  pandas: {
    slug: "pandas",
    name: "Pandas",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Pandas Experts | Nearshore Software Development",
    meta_description:
      "Master your data with Pandas. Hire nearshore Python developers vetted for their expertise in data manipulation, analysis, and visualization with Pandas.",
    intro:
      "Pandas is the fundamental library for data analysis and manipulation in Python. It provides high-performance, easy-to-use data structures and data analysis tools that are the foundation of almost every data science workflow. You need an expert who is fluent in the Pandas API and can use it to efficiently clean, transform, and analyze your data. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of data wrangling. We test their ability to write clean, efficient, and idiomatic Pandas code to solve complex data manipulation challenges.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your data analysis code slow and consuming too much memory?",
        problem:
          "Writing inefficient Pandas code, such as using loops instead of vectorized operations, can be incredibly slow and memory-intensive, especially on large datasets.",
        solution:
          "We vet for engineers who are experts in Pandas performance. They must demonstrate the ability to write vectorized, idiomatic Pandas code that is both fast and memory-efficient, enabling you to analyze large datasets with ease.",
        kpi: "Performant and Memory-Efficient Data Manipulation",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your data cleaning and preprocessing code a complex, unmaintainable mess?",
        problem:
          "The process of cleaning and preparing data for analysis can be complex. Without a structured approach, your code can quickly become a tangled mess that is difficult to understand and maintain.",
        solution:
          "Our engineers are proficient in writing clean and maintainable data processing pipelines with Pandas. They are vetted on their ability to use method chaining and custom functions to create a clear, readable, and reproducible data cleaning workflow.",
        kpi: "Clean and Reproducible Data Pipelines",
      },
    ],
    evaluation: [
      "Pandas DataFrame and Series APIs",
      "Data cleaning and preprocessing techniques",
      "Grouping, merging, and reshaping data",
      "Time series analysis",
      "Performance optimization and vectorization",
    ],
    technical_analysis:
      "The Pandas evaluation focuses on practical data manipulation and analysis. Candidates are given a messy, real-world dataset and are required to clean, transform, and analyze it to answer a set of business questions. A critical assessment is their ability to write efficient, vectorized code and to avoid common performance pitfalls. We also test their mastery of the more advanced features of Pandas, such as multi-level indexing and time series analysis. Finally, we assess their ability to integrate Pandas into a larger data science workflow.",
    interlink_slugs: ["python", "numpy", "data-science", "machine-learning"],
  },
  numpy: {
    slug: "numpy",
    name: "NumPy",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire NumPy Experts | Nearshore Software Development",
    meta_description:
      "Power your numerical apps with NumPy. Hire nearshore Python developers vetted for expertise in high-performance numerical computing for your software team.",
    intro:
      "NumPy is the fundamental package for scientific computing with Python. It provides a powerful N-dimensional array object, sophisticated (broadcasting) functions, tools for integrating C/C++ and Fortran code, and useful linear algebra, Fourier transform, and random number capabilities. You need an expert who can leverage NumPy to build high-performance numerical applications. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of numerical computing. We test their ability to write efficient, vectorized code and to solve complex mathematical and scientific problems with NumPy.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your numerical code slow and inefficient?",
        problem:
          "Performing mathematical operations on large arrays of data using standard Python lists and loops is incredibly slow and inefficient.",
        solution:
          "We vet for engineers who are experts in vectorized computing with NumPy. They must demonstrate the ability to use NumPy's universal functions and broadcasting to perform complex mathematical operations at near-C speed.",
        kpi: "High-Performance Numerical Computing",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to implement complex mathematical algorithms?",
        problem:
          "Implementing complex algorithms from scratch can be a time-consuming and error-prone process.",
        solution:
          "Our engineers are proficient in NumPy's rich library of mathematical functions. They are vetted on their ability to use NumPy's linear algebra, Fourier analysis, and random number generation capabilities to solve complex scientific and engineering problems.",
        kpi: "Rapid Implementation of Mathematical Algorithms",
      },
    ],
    evaluation: [
      "NumPy ndarray and its attributes",
      "Vectorization and broadcasting",
      "Universal functions (ufuncs)",
      "Linear algebra and random number generation",
      "Integration with other scientific Python libraries",
    ],
    technical_analysis:
      "The NumPy evaluation focuses on high-performance numerical computing. Candidates are required to solve a set of mathematical problems using NumPy, demonstrating their mastery of vectorization and broadcasting. A critical assessment is their ability to write efficient code that avoids the use of Python loops. We also test their knowledge of NumPy's more advanced features, such as its linear algebra and random number generation modules. Finally, we assess their ability to integrate NumPy with other libraries in the scientific Python ecosystem, such as SciPy and Pandas.",
    interlink_slugs: ["python", "pandas", "data-science", "machine-learning"],
  },
  "llm-engineer": {
    slug: "llm-engineer",
    name: "LLM Engineer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire LLM Engineers | TeamStation AI",
    meta_description: "Build smarter with nearshore LLM engineers from LATAM. Experts in GPT, Claude, and Mistral model integration, prompt engineering, and RAG pipelines.",
    intro: "LLM Engineers are the architects of modern AI applications. They bridge the gap between powerful Large Language Models and real-world business problems, designing and building systems that can reason, generate, and interact. We provide elite engineers vetted for their expertise in model integration, prompt engineering, and building robust RAG pipelines.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your AI prototypes failing to reach production?",
        problem: "Moving from a proof-of-concept in a notebook to a scalable, reliable production service is a massive engineering challenge. Prototypes often lack the necessary error handling, scalability, and observability required for real-world use.",
        solution: "Our LLM Engineers are production-focused. We vet their ability to build robust, scalable services around LLMs, using modern MLOps principles. They build systems with proper logging, monitoring, and automated evaluation to ensure reliability and performance at scale.",
        kpi: "Production-ready, scalable LLM-based services."
      },
       {
        icon: "AlertTriangle",
        pain: "Is prompt engineering more art than science for your team?",
        problem: "Teams often rely on trial and error to create prompts, leading to inconsistent model behavior and unreliable outputs. This makes it impossible to build a predictable application.",
        solution: "Our engineers apply a systematic approach to prompt engineering. They are experts in techniques like chain-of-thought, few-shot prompting, and structured output formats (e.g., JSON) to create robust and reliable prompts that guide the model effectively.",
        kpi: "Systematic, reliable, and optimized prompt design."
      }
    ],
    evaluation: [
      "LLM API Integration (OpenAI, Anthropic, Google)",
      "Prompt Engineering & Optimization",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "Vector Database Integration",
      "LLMOps and Production Monitoring"
    ],
    technical_analysis: "Candidates are evaluated on their ability to build an end-to-end RAG system. This includes data ingestion, chunking, embedding, and retrieval from a vector database to augment an LLM prompt. We assess their prompt engineering skills and their ability to design a system that is both accurate and resistant to hallucinations.",
    interlink_slugs: ["langchain", "rag-architect", "vector-databases", "mlops"]
  },
  langchain: {
    slug: "langchain",
    name: "LangChain Developer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire LangChain Developers | TeamStation AI",
    meta_description: "Build conversational AI and agentic systems with vetted LangChain developers from TeamStation AI. Experts in creating complex LLM chains and agents.",
    intro: "LangChain provides the essential building blocks for creating applications powered by Large Language Models. Our LangChain developers are experts in using this framework to build complex chains, autonomous agents, and data-aware systems that can reason and act. We provide talent vetted for their ability to architect robust, maintainable, and powerful agentic systems.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your agentic system unpredictable and hard to debug?",
        problem: "Building autonomous agents that reliably perform complex tasks is difficult. Chains can become overly complex, state management is a challenge, and debugging the 'thought process' of an agent is a non-trivial task.",
        solution: "Our developers are experts in the LangChain Expression Language (LCEL), which provides a declarative and transparent way to build complex chains. They are vetted on their ability to create observable and debuggable agentic systems, using tools like LangSmith to trace and understand the agent's behavior.",
        kpi: "Reliable and debuggable agentic systems."
      },
       {
        icon: "AlertTriangle",
        pain: "Are you struggling to connect your LLMs to external tools and data sources?",
        problem: "LLMs are powerful but isolated. Without a framework to connect them to APIs, databases, and other tools, their utility is severely limited. Building these integrations from scratch is complex and error-prone.",
        solution: "Our LangChain experts specialize in building 'tool-using' agents. They can securely connect your LLM to any external data source or API, allowing it to perform actions in the real world, such as querying a database, sending an email, or interacting with a third-party service.",
        kpi: "Seamless integration of LLMs with external tools and APIs."
      }
    ],
    evaluation: [
      "LangChain Expression Language (LCEL)",
      "Agent and Tool Development",
      "Data-Aware Chains (RAG)",
      "State Management in Conversational AI",
      "Debugging with LangSmith"
    ],
    technical_analysis: "Candidates are required to build a multi-tool agent using LangChain. This involves defining custom tools, creating an agent with a ReAct or similar framework, and managing the state of a conversation. We assess their mastery of LCEL and their ability to debug the agent's reasoning process using LangSmith.",
    interlink_slugs: ["llm-engineer", "python", "rag-architect", "prompt-engineer"]
  },
  mlops: {
    slug: "mlops",
    name: "MLOps Engineer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire MLOps Engineers | TeamStation AI",
    meta_description: "Deploy, scale, and monitor ML models seamlessly with nearshore MLOps engineers vetted by Axiom Cortex™. Experts in CI/CD for ML, automation, and infrastructure.",
    intro: "MLOps is the discipline of bringing DevOps principles to Machine Learning. Our MLOps Engineers automate and streamline the end-to-end machine learning lifecycle, from data ingestion and model training to deployment and monitoring. We provide experts who can build a reliable and scalable platform for your data science teams, enabling them to ship models faster and with greater confidence.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your 'model deployment' a manual, multi-week process?",
        problem: "Without an MLOps platform, deploying a new model is a slow, manual, and risky process involving data scientists, software engineers, and operations. This bottleneck prevents the business from benefiting from the latest model improvements.",
        solution: "Our MLOps engineers are experts in CI/CD for Machine Learning. They are vetted on their ability to build automated pipelines for model training, validation, and deployment using tools like Kubeflow, MLflow, and cloud-native services. This reduces deployment time from weeks to hours.",
        kpi: "Fully automated model training and deployment pipelines."
      },
      {
        icon: "AlertTriangle",
        pain: "Is model performance a black box after deployment?",
        problem: "Models degrade over time due to data drift. Without robust monitoring, you have no visibility into a model's real-world performance, leading to 'silent failures' that can negatively impact business outcomes and erode trust in AI initiatives.",
        solution: "We provide experts in production model monitoring. They implement automated systems to track model accuracy, data drift, and fairness metrics, with alerts to trigger retraining pipelines before performance degradation affects users. This ensures your models remain reliable and effective over time.",
        kpi: "Comprehensive model monitoring and automated drift detection."
      }
    ],
    evaluation: [
      "CI/CD for Machine Learning (MLflow, Kubeflow)",
      "Infrastructure as Code for ML (Terraform, CloudFormation)",
      "Model Serving & Inference Infrastructure (KServe, Seldon)",
      "Model Monitoring and Drift Detection",
      "Feature Stores and Data Versioning"
    ],
    technical_analysis: "Candidates must design and implement a complete CI/CD pipeline for an ML model. This includes automating the training process, versioning the model in a registry like MLflow, and deploying it as a scalable inference service on Kubernetes. We assess their ability to implement monitoring to detect data and model drift in production.",
    interlink_slugs: ["machine-learning", "kubernetes", "devops-engineering", "ai-infrastructure"]
  },
  "rag-architect": {
    slug: "rag-architect",
    name: "RAG Architect",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire RAG Architects | TeamStation AI",
    meta_description: "Build retrieval-augmented generation pipelines with experts in vector search and embedding orchestration. Ensure your LLMs are accurate and up-to-date.",
    intro: "Retrieval-Augmented Generation (RAG) is the key to building LLM applications that are grounded in your private data, reducing hallucinations and providing accurate, up-to-date responses. Our RAG Architects are experts in designing and building the complex data pipelines that power these systems. We provide talent vetted for their expertise in data chunking, embedding models, vector databases, and retrieval strategies.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your LLM's answers out-of-date or irrelevant?",
        problem: "LLMs trained on public data have no knowledge of your internal documents, databases, or real-time information. This leads to generic, unhelpful, or completely incorrect answers, making the application useless for specific business contexts.",
        solution: "Our RAG Architects are experts in building data ingestion and retrieval pipelines. They are vetted on their ability to efficiently process, chunk, and embed your proprietary data into a vector database, and to design effective retrieval strategies that provide the LLM with the precise context it needs to generate relevant and accurate answers.",
        kpi: "Measurable improvement in response accuracy and relevance."
      },
       {
        icon: "AlertTriangle",
        pain: "Is your retrieval system returning low-quality or noisy context?",
        problem: "Simply finding 'similar' documents is not enough. Poor chunking strategies, basic retrieval algorithms, and a lack of re-ranking can provide the LLM with irrelevant or conflicting information, leading to worse, not better, answers.",
        solution: "Our architects are masters of advanced retrieval techniques. They can implement sophisticated chunking strategies, use hybrid search (keyword + vector) to improve recall, and apply re-ranking models to ensure only the most relevant, high-quality context is passed to the LLM.",
        kpi: "Advanced retrieval strategies for high-quality context."
      }
    ],
    evaluation: [
      "Data Ingestion and Chunking Strategies",
      "Embedding Model Selection and Optimization",
      "Vector Database Architecture and Indexing",
      "Advanced Retrieval Strategies (Hybrid Search, Re-ranking)",
      "Evaluation of RAG Pipeline Performance"
    ],
    technical_analysis: "Candidates are required to design an end-to-end RAG architecture for a complex knowledge base. They must justify their choice of chunking strategy, embedding model, and vector database index. We assess their ability to design a retrieval system that can handle complex queries and their plan for evaluating and improving the performance of the entire pipeline.",
    interlink_slugs: ["vector-databases", "llm-engineer", "langchain", "ai-infrastructure"]
  },
  "vector-databases": {
    slug: "vector-databases",
    name: "Vector Database Specialist",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Vector Database Specialists | TeamStation AI",
    meta_description: "Experts in Weaviate, Milvus, and Chroma for enterprise AI search and contextual intelligence. Build fast, scalable similarity search applications.",
    intro: "Vector databases are the specialized storage and retrieval systems that power modern AI applications. Our Vector Database Specialists are experts in deploying, managing, and optimizing these systems for performance and scale. We provide talent vetted for their deep knowledge of platforms like Weaviate, Milvus, Pinecone, and Chroma, and their ability to design indexing strategies for fast and accurate similarity search.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your similarity search too slow for a real-time application?",
        problem: "Performing a brute-force vector search across millions of items is computationally impossible for real-time applications. Without a specialized database and indexing strategy, your AI features will be too slow to be useful.",
        solution: "Our specialists are experts in Approximate Nearest Neighbor (ANN) indexing. They are vetted on their ability to choose and tune the right index (e.g., HNSW, IVF) for a given dataset and performance requirement, enabling low-latency similarity search at massive scale.",
        kpi: "Sub-100ms vector search latency at scale."
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to filter vector search results by metadata?",
        problem: "Similarity search alone is often not enough. Business applications require the ability to filter results based on structured attributes (e.g., product category, creation date) before or after the vector search, a feature many vector databases struggle with.",
        solution: "Our experts understand the nuances of metadata filtering. They can design a schema and select a vector database that efficiently supports pre-filtering or post-filtering, ensuring you can build complex, real-world search experiences that combine vector relevance with business logic.",
        kpi: "Efficient metadata filtering for production search."
      }
    ],
    evaluation: [
      "Vector Database Architecture (e.g., Weaviate, Milvus, Pinecone)",
      "ANN Indexing Algorithms (HNSW, IVF)",
      "Performance Tuning and Scalability",
      "Metadata Filtering and Hybrid Search",
      "Data Ingestion and Management"
    ],
    technical_analysis: "Candidates must design a vector database solution for a specific use case, such as a product recommendation engine. They must justify their choice of database and indexing algorithm, and explain how they would tune it for a balance of speed and accuracy. We assess their ability to handle metadata filtering and implement a hybrid search strategy.",
    interlink_slugs: ["rag-architect", "data-engineering", "mlops", "llm-engineer"]
  },
  "ai-infrastructure": {
    slug: "ai-infrastructure",
    name: "AI Infrastructure Engineer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire AI Infrastructure Engineers | TeamStation AI",
    meta_description: "Build scalable GPU-backed pipelines and inference infrastructure for modern AI workloads. Experts in Kubernetes, Docker, and cloud GPU management.",
    intro: "Modern AI workloads require a specialized infrastructure that can handle massive data processing and GPU-intensive computation. Our AI Infrastructure Engineers are experts in building and managing this platform. We provide talent vetted for their expertise in Kubernetes, GPU management (NVIDIA), distributed training, and scalable model serving.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your GPU resources underutilized and expensive?",
        problem: "GPUs are expensive, and without a proper scheduling and orchestration system, they are often left idle, leading to massive waste in cloud spending. Managing GPU drivers and dependencies across a cluster is also a major operational headache.",
        solution: "Our engineers are experts in GPU orchestration on Kubernetes. They are vetted on their ability to use tools like the NVIDIA device plugin and GPU-aware schedulers to maximize utilization and efficiently share GPU resources across multiple teams and workloads, dramatically reducing costs.",
        kpi: "Improved GPU utilization and reduced cloud spend."
      },
       {
        icon: "AlertTriangle",
        pain: "Is deploying a new model a complex, manual process?",
        problem: "Getting a trained model into a production environment that can handle real-time inference traffic at scale is a huge challenge. It requires knowledge of containerization, networking, and high-performance serving frameworks that most data scientists don't possess.",
        solution: "Our AI Infrastructure Engineers are experts in model serving. They can containerize any model and deploy it on a scalable, high-performance inference server like NVIDIA Triton or KServe, complete with auto-scaling, health checks, and traffic management.",
        kpi: "Automated, scalable, and high-performance model serving."
      }
    ],
    evaluation: [
      "Kubernetes for AI/ML workloads",
      "GPU Management (NVIDIA drivers, device plugins)",
      "Distributed Training Frameworks (e.g., Horovod)",
      "High-Performance Model Serving (e.g., Triton Inference Server)",
      "Storage for Large Datasets (e.g., S3, distributed file systems)"
    ],
    technical_analysis: "Candidates must design the infrastructure for a complete ML platform on Kubernetes. This includes setting up a cluster with GPU nodes, configuring it for distributed training, and deploying a high-performance inference server like NVIDIA Triton. We assess their ability to solve common infrastructure challenges related to networking, storage, and resource management in an AI context.",
    interlink_slugs: ["mlops", "devops-engineering", "kubernetes", "docker"]
  },
  "prompt-engineer": {
    slug: "prompt-engineer",
    name: "Prompt Engineer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Prompt Engineers | TeamStation AI",
    meta_description: "Bridge human intent and machine reasoning with expert prompt engineers from TeamStation AI. Masters of crafting and optimizing prompts for reliable LLM output.",
    intro: "Prompt Engineering is the art and science of communicating effectively with Large Language Models. A well-crafted prompt is the difference between a generic, unhelpful response and a precise, actionable one. Our Prompt Engineers are experts in this new discipline, combining creativity with a rigorous, data-driven approach to optimize prompts for performance, reliability, and cost.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your LLM responses inconsistent and unreliable?",
        problem: "Poorly designed prompts lead to unpredictable LLM behavior. The model may misunderstand the user's intent, follow instructions incorrectly, or produce output in the wrong format, making it impossible to build a reliable application.",
        solution: "Our prompt engineers are experts in structured prompting techniques. They are vetted on their ability to use methods like few-shot prompting, chain-of-thought, and structured output formats (e.g., JSON) to guide the model towards a consistent, reliable, and parseable response.",
        kpi: "Measurable increase in output consistency and reliability."
      },
       {
        icon: "AlertTriangle",
        pain: "Is prompt development a slow, manual process of trial and error?",
        problem: "Without a systematic approach, prompt development becomes a guessing game. Teams waste countless hours and API credits trying to find a prompt that works, with no guarantee of success or a way to measure improvement.",
        solution: "We hire engineers who apply a scientific method to prompt engineering. They are proficient in creating evaluation datasets and using automated testing frameworks to systematically iterate on and A/B test prompt variations, finding the optimal prompt based on metrics for quality, cost, and latency.",
        kpi: "Systematic, data-driven prompt evaluation and optimization."
      }
    ],
    evaluation: [
      "Advanced Prompting Techniques (Chain-of-Thought, Few-Shot)",
      "Structured Output Formatting (JSON, XML)",
      "Prompt Templating and Management",
      "Evaluation and A/B Testing of Prompts",
      "Cost and Latency Optimization"
    ],
    technical_analysis: "Candidates are given a complex task and an LLM, and they must design a prompt that reliably produces the correct output in a specified JSON format. We assess their iterative process, their use of advanced techniques to guide the model, and their ability to create a prompt that is robust to variations in user input.",
    interlink_slugs: ["llm-engineer", "langchain", "rag-architect", "data-science"]
  },
  "ai-security": {
    slug: "ai-security",
    name: "AI Security Engineer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire AI Security Engineers | TeamStation AI",
    meta_description: "Protect LLMs and data pipelines from prompt injection, data leaks, and model vulnerabilities. Secure your AI systems from end to end.",
    intro: "As AI systems become more powerful and integrated into critical business processes, they also become a major target for new types of attacks. Our AI Security Engineers are experts in identifying and mitigating these emerging threats. We provide talent vetted for their expertise in prompt injection defense, data privacy in RAG pipelines, and securing the entire AI/ML supply chain.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your LLM application vulnerable to prompt injection attacks?",
        problem: "A malicious user can craft an input that hijacks the LLM, causing it to ignore its original instructions and perform unintended actions, such as revealing sensitive information or executing harmful commands. This is a critical vulnerability for any public-facing LLM application.",
        solution: "Our AI Security Engineers are experts in prompt injection defense. They are vetted on their ability to implement multiple layers of protection, including input filtering, instruction defense, and output monitoring, to detect and block these attacks.",
        kpi: "Robust defense against OWASP Top 10 for LLMs."
      },
      {
        icon: "AlertTriangle",
        pain: "Does your RAG pipeline leak sensitive data?",
        problem: "If your RAG system retrieves and presents information from documents with different access levels, a user might trick the LLM into revealing confidential data they are not authorized to see, creating a massive data breach risk.",
        solution: "We hire experts in secure RAG design. They can implement access control at the retrieval stage, ensuring that the documents fetched to provide context respect the user's permissions. This prevents the LLM from ever seeing, and therefore leaking, unauthorized information.",
        kpi: "Secure, permission-aware retrieval in RAG systems."
      }
    ],
    evaluation: [
      "LLM Application Security (OWASP Top 10 for LLMs)",
      "Prompt Injection Defense Mechanisms",
      "Data Privacy and Security in RAG Systems",
      "Secure AI/ML Supply Chain (Model Provenance)",
      "Adversarial Attack and Red Teaming Simulation"
    ],
    technical_analysis: "Candidates are tasked with performing a security audit of an existing LLM application. They must identify potential vulnerabilities, including prompt injection and data leakage risks, and demonstrate how to exploit them. The critical assessment is their ability to then design and implement effective countermeasures to secure the application.",
    interlink_slugs: ["security-engineering", "llm-engineer", "mlops", "rag-architect"]
  },
  "model-monitoring": {
    slug: "model-monitoring",
    name: "Model Monitoring Specialist",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Model Monitoring Specialists | TeamStation AI",
    meta_description: "Ensure model reliability, fairness, and drift detection with monitored AI systems. Experts in production ML monitoring and evaluation.",
    intro: "A machine learning model is not a 'deploy and forget' asset. Its performance can degrade over time due to changes in the real world. Our Model Monitoring Specialists are experts in building the systems that track, evaluate, and alert on model performance in production. We provide talent vetted for their expertise in statistical monitoring, drift detection, and building automated feedback loops.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your model's performance silently degrading in production?",
        problem: "Changes in input data distributions ('data drift') or the relationship between inputs and outputs ('concept drift') can cause a model's predictive accuracy to degrade over time. Without monitoring, this 'silent failure' can lead to poor business outcomes.",
        solution: "Our specialists are experts in drift detection. They are vetted on their ability to implement statistical monitoring systems that track input and output distributions, automatically detecting drift and triggering alerts or retraining pipelines before performance is significantly impacted.",
        kpi: "Automated data and concept drift detection."
      },
       {
        icon: "AlertTriangle",
        pain: "Are you unable to explain why your model made a specific decision?",
        problem: "Many complex models, especially deep learning models, are 'black boxes.' When a model makes a critical decision (e.g., declining a loan), an inability to explain the 'why' can lead to regulatory issues and a lack of trust from users.",
        solution: "Our experts are proficient in model explainability (XAI) techniques. They can implement and interpret results from tools like SHAP and LIME to provide insights into individual predictions, ensuring transparency and building trust in your AI systems.",
        kpi: "Implementation of model explainability and interpretability."
      }
    ],
    evaluation: [
      "Statistical Process Control for Model Monitoring",
      "Data Drift and Concept Drift Detection Techniques",
      "Model Evaluation Metrics and Business KPIs",
      "Observability for ML (Logging, Tracing)",
      "Automated Retraining and Feedback Loops"
    ],
    technical_analysis: "Candidates are given a production model and a stream of new data. They must design and implement a monitoring system that can detect a subtle drift in the data. We assess their choice of statistical methods, their alerting strategy, and their plan for automating the retraining and redeployment of the model.",
    interlink_slugs: ["mlops", "data-science", "ai-infrastructure", "machine-learning"]
  },
  "data-annotation": {
    slug: "data-annotation",
    name: "Data Annotation Engineer",
    category: "Data & AI",
    categorySlug: "data-ai",
    seo_title: "Hire Data Annotation Engineers | TeamStation AI",
    meta_description: "Ensure training data quality for AI models with experts in labeling, taxonomy, and NLP preprocessing. High-quality data for high-quality models.",
    intro: "High-quality training data is the foundation of any successful machine learning model. Our Data Annotation Engineers are experts in the complex process of labeling, cleaning, and preparing datasets. We provide talent vetted for their expertise in building efficient labeling workflows, managing data quality, and using modern annotation platforms.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is 'garbage in, garbage out' crippling your model performance?",
        problem: "Inaccurate, inconsistent, or noisy labels in your training data are the number one cause of poor model performance. No amount of algorithmic tuning can fix a bad dataset.",
        solution: "Our engineers are experts in data quality. They are vetted on their ability to design clear labeling guidelines, implement quality control processes (e.g., consensus, review), and use programmatic techniques to clean and enhance datasets, ensuring your model is trained on high-quality, reliable data.",
        kpi: "Measurable improvement in label accuracy and consistency."
      },
      {
        icon: "AlertTriangle",
        pain: "Is your data labeling process slow, expensive, and unscalable?",
        problem: "Manually labeling large datasets is a slow, costly, and often mind-numbing task. It doesn't scale as your data volumes grow, creating a major bottleneck for your entire AI development lifecycle.",
        solution: "Our engineers are proficient in modern annotation strategies. They can implement programmatic labeling techniques, weak supervision, and active learning to dramatically reduce the amount of manual labeling required, making the process faster, cheaper, and more scalable.",
        kpi: "Reduced cost and time for data annotation projects."
      }
    ],
    evaluation: [
      "Data Labeling and Annotation Workflows",
      "Data Quality and Inter-Annotator Agreement",
      "Annotation Tooling (e.g., Labelbox, Scale AI)",
      "Programmatic Labeling and Weak Supervision",
      "Data Preprocessing and Augmentation"
    ],
    technical_analysis: "Candidates are given a raw dataset and a labeling task. They must design a complete annotation project, including creating clear guidelines for human labelers, defining a quality control process, and selecting the appropriate tooling. We assess their ability to manage the trade-offs between cost, quality, and speed in a data labeling project.",
    interlink_slugs: ["data-engineering", "machine-learning", "llm-engineer", "python"]
  }
};
