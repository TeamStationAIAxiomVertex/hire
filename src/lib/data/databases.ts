/** @Spec
* Feature: Technology Data Source - Databases
* Type: lib
* Route: /src/lib/data/databases.ts
* Description: Central data source for Database specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const databases: Record<string, TechEntry> = {
  cassandra: {
    slug: "cassandra",
    name: "Apache Cassandra",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire Cassandra Experts | Nearshore Software Development",
    meta_description:
      "Build highly available, scalable apps. Hire nearshore Cassandra experts vetted for data modeling, performance tuning, and cluster management.",
    intro:
      "Apache Cassandra is a free and open-source, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. You need an expert who can leverage Cassandra's unique architecture to build a massively scalable and resilient application. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of distributed databases. We test their ability to design a query-driven data model, tune performance, and manage a large-scale Cassandra cluster.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your database struggling to handle your write-heavy workload?",
        problem:
          "Traditional relational databases can struggle to handle high-velocity, write-heavy workloads, leading to performance bottlenecks and scalability issues.",
        solution:
          "We vet for engineers who are experts in Cassandra's log-structured merge-tree (LSM) architecture. They must demonstrate the ability to design a data model and a cluster that can handle a massive volume of writes with low latency and linear scalability.",
        kpi: "Massively Scalable Write Throughput",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your application at risk of downtime due to a database failure?",
        problem:
          "A single database failure can take down your entire application, leading to a poor user experience and lost revenue. Traditional master-slave architectures have a single point of failure.",
        solution:
          "Our engineers are proficient in Cassandra's peer-to-peer, masterless architecture. They are vetted on their ability to design and manage a multi-datacenter Cassandra cluster that is fault-tolerant and provides continuous availability, even in the face of network partitions or server failures.",
        kpi: "Continuous Availability and Fault Tolerance",
      },
    ],
    evaluation: [
      "Cassandra architecture and data model (keyspaces, tables, partitions)",
      "Query-driven data modeling with CQL",
      "Consistency levels and the CAP theorem",
      "Performance tuning (compaction, caching)",
      "Cluster management and monitoring",
    ],
    technical_analysis:
      "The Cassandra evaluation focuses on building highly scalable and available systems. Candidates are required to design a data model for a write-heavy application, demonstrating their understanding of Cassandra's query-driven modeling approach. A critical assessment is their ability to reason about consistency levels and the trade-offs between consistency, availability, and performance. We also test their knowledge of how to tune and operate a Cassandra cluster in a production environment. Finally, we assess their experience with the Cassandra driver and how to integrate it into an application.",
    interlink_slugs: ["java", "data-engineering", "kafka"],
  },
  dynamodb: {
    slug: "dynamodb",
    name: "Amazon DynamoDB",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire DynamoDB Experts | Nearshore Software Development",
    meta_description:
      "Build serverless, high-performance apps at any scale. Hire nearshore DynamoDB experts vetted for data modeling, performance, and cost management.",
    intro:
      "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. You need an expert who can master DynamoDB's unique data modeling patterns to build a fast, scalable, and cost-effective serverless application. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of DynamoDB. We test their ability to design a single-table schema, optimize for performance and cost, and integrate DynamoDB into a modern serverless architecture.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your database a bottleneck for your serverless application?",
        problem:
          "A traditional relational database can be a performance and scalability bottleneck in a serverless architecture, and managing a database server adds operational overhead you wanted to avoid.",
        solution:
          "We vet for engineers who are experts in building high-performance, serverless applications with DynamoDB. They must demonstrate the ability to design a data model that provides consistent, single-digit millisecond performance, no matter how large your application grows.",
        kpi: "Single-Digit Millisecond Performance at Any Scale",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your DynamoDB bill spiraling out of control?",
        problem:
          "DynamoDB's pay-per-request pricing model is powerful, but a poorly designed data model can lead to inefficient queries that result in a surprisingly high bill.",
        solution:
          "Our engineers are proficient in DynamoDB cost optimization. They are vetted on their ability to design a data model that minimizes the number of read and write operations, and to use features like On-Demand capacity and reserved capacity to optimize for cost.",
        kpi: "Cost-Optimized Data Modeling",
      },
    ],
    evaluation: [
      "DynamoDB core concepts (tables, items, attributes, keys)",
      "Single-table vs. multi-table design",
      "Secondary indexes (GSI, LSI)",
      "Querying and scanning best practices",
      "Cost optimization and capacity planning",
    ],
    technical_analysis:
      "The DynamoDB evaluation focuses on serverless data modeling and performance. Candidates are required to design a single-table schema for a complex application, demonstrating their understanding of how to model one-to-many and many-to-many relationships. A critical assessment is their ability to design a data model that can satisfy all of the application's access patterns efficiently. We also test their knowledge of DynamoDB's consistency models and their ability to choose the right one for the job. Finally, we assess their experience in integrating DynamoDB with other AWS services like Lambda and AppSync.",
    interlink_slugs: ["serverless", "aws", "lambda"],
  },
  elasticsearch: {
    slug: "elasticsearch",
    name: "Elasticsearch",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire Elasticsearch Experts | Nearshore Software Development",
    meta_description:
      "Build powerful search and analytics solutions. Hire nearshore Elasticsearch experts vetted for cluster management, query optimization, and relevance models.",
    intro:
      "Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected. You need an expert who can leverage Elasticsearch to build a fast, scalable, and relevant search experience for your users. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of search. We test their ability to design and manage an Elasticsearch cluster, write complex queries, and tune for relevance and performance.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your application's search slow, irrelevant, and frustrating for users?",
        problem:
          "A poor search experience can be a major source of user frustration, leading to lost engagement and revenue. Building a search engine that is both fast and relevant is a complex challenge.",
        solution:
          "We vet for engineers who are experts in building world-class search experiences with Elasticsearch. They must demonstrate the ability to design a relevance model that understands user intent, and to tune the performance of the search engine to provide instant results.",
        kpi: "Fast, Relevant, and Intuitive Search",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your Elasticsearch cluster unstable and difficult to manage?",
        problem:
          "Managing a distributed system like Elasticsearch can be a complex operational challenge. An improperly configured cluster can be unstable, prone to data loss, and difficult to scale.",
        solution:
          "Our engineers are proficient in Elasticsearch cluster management. They are vetted on their ability to design, deploy, and manage a scalable and resilient Elasticsearch cluster, ensuring your search engine is always available and performant.",
        kpi: "Stable and Scalable Cluster Management",
      },
    ],
    evaluation: [
      "Elasticsearch architecture and core concepts (indices, documents, shards)",
      "Mapping and text analysis",
      "Query DSL and aggregations",
      "Relevance tuning and scoring",
      "Cluster administration and performance tuning",
    ],
    technical_analysis:
      "The Elasticsearch evaluation focuses on building high-quality search applications. Candidates are required to design a search solution for a given dataset, demonstrating their understanding of mapping, text analysis, and query DSL. A critical assessment is their ability to tune the relevance of search results to meet a set of business requirements. We also test their knowledge of how to operate and scale an Elasticsearch cluster in a production environment. Finally, we assess their experience with the broader Elastic Stack, including Kibana and Logstash.",
    interlink_slugs: ["devops-engineering"],
  },
  postgresql: {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire PostgreSQL Experts | Nearshore Software Development",
    meta_description:
      "Build reliable and feature-rich applications. Hire elite nearshore PostgreSQL experts vetted for advanced SQL, performance tuning, and data modeling.",
    intro:
      "PostgreSQL is the world's most advanced open source relational database, known for its reliability, feature robustness, and performance. You need an engineer who can harness the full power of PostgreSQL, from complex query optimization to its extensible architecture. Our vetting finds experts who can design robust schemas, write efficient, advanced SQL, and manage a production database for high availability and performance. By hiring a PostgreSQL expert, you invest in a rock-solid data foundation for your most critical applications.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your database queries slow and holding back your application?",
        problem:
          "Many developers write simple queries that perform poorly on large datasets. They lack the expertise to use advanced PostgreSQL features, analyze query plans, or design an effective indexing strategy, leading to a slow user experience and high infrastructure costs.",
        solution:
          "We vet for engineers who are masters of SQL performance tuning. They must demonstrate the ability to use `EXPLAIN ANALYZE` to diagnose slow queries, implement advanced indexing (e.g., GIN, GiST, BRIN), and write complex, efficient SQL using CTEs and window functions.",
        kpi: "Advanced SQL and Query Performance Optimization",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your database schema brittle and difficult to evolve?",
        problem:
          "A poorly designed database schema without proper normalization and constraints can lead to data integrity issues and become a major bottleneck when you need to add new features. Refactoring becomes a high-risk, painful process.",
        solution:
          "Our engineers are proficient in relational data modeling. They are vetted on their ability to design normalized, well-structured schemas that use constraints to enforce data integrity, ensuring your database is both reliable and easy to evolve.",
        kpi: "Robust Data Modeling and Schema Design",
      },
    ],
    evaluation: [
      "Advanced SQL (Window Functions, CTEs, Recursive Queries)",
      "Performance Tuning (`EXPLAIN ANALYZE`, Indexing)",
      "Data Modeling and Normalization",
      "Transaction Management and Concurrency Control (MVCC)",
      "High Availability and Replication Strategies",
    ],
    technical_analysis:
      "The PostgreSQL evaluation is a deep dive into relational database mastery. Candidates are given a complex data model and are required to write a series of advanced queries to solve business problems, testing their fluency in window functions and CTEs. A critical assessment is their ability to diagnose and fix a slow query by analyzing its execution plan and proposing a specific indexing strategy. We also test their understanding of PostgreSQL's transactional and concurrency control mechanisms (MVCC). Finally, we assess their knowledge of operational concerns, including backup/restore procedures and setting up high-availability replication.",
    interlink_slugs: ["sql", "data-engineering", "python", "java", "node"],
  },
  mysql: {
    slug: "mysql",
    name: "MySQL",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire MySQL Experts | Nearshore Software Development",
    meta_description:
      "Power your web applications with the world's most popular open-source database. Hire nearshore MySQL experts vetted for performance and reliability.",
    intro:
      "MySQL is the world's most popular open-source database, powering a huge number of web applications from startups to large enterprises. You need an expert who understands how to build and operate a high-performance, reliable MySQL environment. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of MySQL. We test their ability to design efficient schemas, write optimized queries, and manage a production MySQL instance for performance and high availability.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your website slow due to inefficient database queries?",
        problem:
          "Slow database queries are a common cause of poor website performance. Developers who don't understand how to write efficient SQL or how to properly index their tables can bring an application to its knees.",
        solution:
          "We vet for engineers who are experts in MySQL performance tuning. They must demonstrate the ability to use the `EXPLAIN` statement to analyze query performance, to design an effective indexing strategy, and to write efficient SQL.",
        kpi: "MySQL Query Optimization and Indexing",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you at risk of data loss or downtime from a database failure?",
        problem:
          "A single database failure can lead to catastrophic data loss and prolonged downtime for your application. Without a proper backup and replication strategy, you are putting your business at risk.",
        solution:
          "Our engineers are proficient in MySQL high availability and disaster recovery. They are vetted on their ability to set up and manage a replication topology (e.g., primary-replica), to perform regular backups, and to execute a point-in-time recovery.",
        kpi: "High Availability and Disaster Recovery",
      },
    ],
    evaluation: [
      "MySQL architecture and storage engines (InnoDB)",
      "SQL query optimization and `EXPLAIN`",
      "Indexing strategies (B-Tree, Full-text)",
      "Replication and high availability",
      "Backup and recovery procedures",
    ],
    technical_analysis:
      "The MySQL evaluation focuses on building reliable and performant web-scale database systems. Candidates are required to design a database schema for a typical web application and write a set of queries to support its functionality. A critical assessment is their ability to optimize slow queries by analyzing the output of `EXPLAIN` and creating the appropriate indexes. We also test their understanding of the InnoDB storage engine and its features, like transactions and row-level locking. Finally, we assess their operational knowledge, including how to set up and manage a high-availability replication cluster.",
    interlink_slugs: ["sql", "php", "python", "data-engineering"],
  },
  "sql-server": {
    slug: "sql-server",
    name: "Microsoft SQL Server",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire SQL Server Experts | Nearshore Software Development",
    meta_description:
      "Power your enterprise applications with Microsoft's data platform. Hire nearshore SQL Server experts vetted for T-SQL, performance, and BI.",
    intro:
      "Microsoft SQL Server is a comprehensive database platform for enterprise data management and business intelligence. You need an expert who can leverage the full power of the SQL Server ecosystem to build robust, scalable, and intelligent applications. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the Microsoft data platform. We test their ability to write complex T-SQL, tune performance, and integrate SQL Server with other Microsoft technologies like .NET and Power BI.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your database operations a performance bottleneck?",
        problem:
          "A poorly performing SQL Server instance can be a major drag on your business. Slow queries, inefficient stored procedures, and poor indexing can lead to a frustrating user experience and high licensing costs.",
        solution:
          "We vet for engineers who are experts in SQL Server performance tuning. They must demonstrate the ability to use tools like the Query Store and Extended Events to diagnose performance issues, and to optimize queries, indexes, and server configuration for maximum performance.",
        kpi: "SQL Server Performance Tuning and Optimization",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to get business insights from your data?",
        problem:
          "Your database contains a wealth of valuable data, but without the right tools and expertise, it's difficult to turn that data into actionable insights for your business.",
        solution:
          "Our engineers are proficient in the SQL Server business intelligence stack. They are vetted on their ability to use SQL Server Integration Services (SSIS) for ETL, SQL Server Analysis Services (SSAS) for data modeling, and SQL Server Reporting Services (SSRS) or Power BI for visualization.",
        kpi: "Microsoft Business Intelligence Stack Expertise",
      },
    ],
    evaluation: [
      "Advanced T-SQL (stored procedures, triggers, functions)",
      "Performance tuning (Query Store, indexing, execution plans)",
      "SQL Server Integration Services (SSIS)",
      "SQL Server Analysis Services (SSAS)",
      "High availability and disaster recovery (Always On)",
    ],
    technical_analysis:
      "The SQL Server evaluation focuses on enterprise data management and business intelligence. Candidates are required to design a database schema and write a set of stored procedures and functions to implement a piece of business logic. A critical assessment is their ability to tune the performance of a slow-running query using SQL Server's built-in tools. We also test their knowledge of the broader Microsoft BI stack and their ability to build a simple ETL process with SSIS. Finally, we assess their understanding of high availability concepts and how to configure an Always On availability group.",
    interlink_slugs: ["c-sharp", "azure", "power-bi", "data-warehousing"],
  },
  mongodb: {
    slug: "mongodb",
    name: "MongoDB",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire MongoDB Experts | Nearshore Software Development",
    meta_description:
      "Build fast, flexible applications with the leading document database. Hire nearshore MongoDB experts vetted for data modeling, performance, and scaling.",
    intro:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. You need an expert who can leverage MongoDB's flexible data model and powerful query language to build modern, agile applications. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the document model. We test their ability to design effective schemas, optimize query performance, and manage a MongoDB cluster at scale.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your rigid relational schema slowing down development?",
        problem:
          "A strict, predefined schema can be a major bottleneck in a fast-moving development environment, requiring complex migrations for every small change.",
        solution:
          "We vet for engineers who are experts in flexible data modeling with MongoDB. They must demonstrate the ability to design a schema that can easily evolve with your application, enabling rapid iteration and faster time to market.",
        kpi: "Agile and Flexible Data Modeling",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to scale your database to meet demand?",
        problem:
          "Scaling a traditional relational database can be a complex and expensive undertaking, often requiring specialized hardware and expert knowledge.",
        solution:
          "Our engineers are proficient in MongoDB's horizontal scaling capabilities. They are vetted on their ability to design and manage a sharded cluster, allowing your database to scale out seamlessly on commodity hardware to handle massive amounts of data and traffic.",
        kpi: "Horizontal Scaling with Sharding",
      },
    ],
    evaluation: [
      "MongoDB data modeling and schema design",
      "Query language and aggregation framework",
      "Indexing and performance tuning",
      "Replication and high availability",
      "Sharding and horizontal scaling",
    ],
    technical_analysis:
      "The MongoDB evaluation focuses on building scalable and flexible applications with a document database. Candidates are required to design a data model for a complex application, demonstrating their understanding of embedding, referencing, and other document modeling patterns. A critical assessment is their ability to write complex queries using the aggregation framework and to optimize their performance with the right indexes. We also test their knowledge of MongoDB's replication and sharding features for building a highly available and scalable system. Finally, we assess their experience with the MongoDB driver and integrating it into an application.",
    interlink_slugs: ["node", "react", "python", "serverless"],
  },
  redis: {
    slug: "redis",
    name: "Redis",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire Redis Experts | Nearshore Software Development",
    meta_description:
      "Supercharge your application performance. Hire nearshore Redis experts vetted for caching strategies, data structures, and high-availability setups.",
    intro:
      "Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker. You need an expert who can leverage Redis to dramatically improve the performance and responsiveness of your application. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of in-memory computing. We test their ability to use Redis's rich set of data structures, to implement effective caching strategies, and to manage a highly available Redis cluster.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your application slow due to repeated, expensive database queries?",
        problem:
          "Constantly hitting your primary database for the same data is a major performance bottleneck, leading to a slow user experience and high database load.",
        solution:
          "We vet for engineers who are experts in implementing caching strategies with Redis. They must demonstrate the ability to use patterns like cache-aside to dramatically reduce database load and improve application response times.",
        kpi: "Effective Caching and Improved Performance",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to implement real-time features like leaderboards or rate limiters?",
        problem:
          "Building real-time features with a traditional database can be complex and inefficient. You need a data store that is optimized for speed and provides the right data structures for the job.",
        solution:
          "Our engineers are proficient in Redis's versatile data structures. They are vetted on their ability to use sorted sets for leaderboards, hashes for object caching, and simple keys with expirations for rate limiting, enabling you to build a wide range of real-time features with ease.",
        kpi: "Real-Time Application Features",
      },
    ],
    evaluation: [
      "Redis data structures (strings, hashes, lists, sets, sorted sets)",
      "Caching patterns and strategies",
      "Persistence options (RDB and AOF)",
      "High availability with Redis Sentinel",
      "Scaling with Redis Cluster",
    ],
    technical_analysis:
      "The Redis evaluation focuses on high-performance, in-memory data management. Candidates are required to solve a set of problems using Redis's various data structures, demonstrating their understanding of which structure is best for a given use case. A critical assessment is their ability to design and implement a robust caching layer for an existing application. We also test their knowledge of Redis's persistence and high-availability options. Finally, we assess their experience with operating a Redis cluster in a production environment.",
    interlink_slugs: ["node", "python", "microservices"],
  },
   "vector-databases": {
    slug: "vector-databases",
    name: "Vector Databases",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire Vector Database Experts | Nearshore Software Development",
    meta_description:
      "Power your AI applications with fast similarity search. Hire nearshore Vector Database experts vetted for Pinecone, Weaviate, and RAG architectures.",
    intro:
      "Vector databases are a new type of database designed to store, manage, and search high-dimensional vector embeddings, the foundation of modern AI applications like semantic search, recommendation engines, and Retrieval-Augmented Generation (RAG). You need an expert who can leverage a vector database to build intelligent, scalable AI features. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of this emerging field. We test their ability to work with leading vector databases (e.g., Pinecone, Weaviate, Milvus), to design efficient indexing strategies, and to integrate them into a production AI/ML pipeline.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your similarity search slow and unable to scale?",
        problem:
          "Performing nearest-neighbor search on a large number of high-dimensional vectors using traditional methods is computationally expensive and slow, making it impossible to build real-time AI applications.",
        solution:
          "We vet for engineers who are experts in vector search. They must demonstrate the ability to use a vector database to perform approximate nearest neighbor (ANN) search at scale, providing low-latency results for even the most demanding AI applications.",
        kpi: "Low-Latency, High-Throughput Vector Search",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to build a reliable Retrieval-Augmented Generation (RAG) system?",
        problem:
          "Building a RAG system that provides accurate, relevant, and up-to-date information to your LLM is a complex challenge. You need a reliable way to store and retrieve the right context for your prompts.",
        solution:
          "Our engineers are proficient in building RAG pipelines with vector databases. They are vetted on their ability to chunk and embed documents, store them in a vector database, and retrieve the most relevant context to augment LLM prompts, reducing hallucinations and improving the quality of your responses.",
        kpi: "Robust and Accurate RAG Pipelines",
      },
    ],
    evaluation: [
      "Vector database concepts (embeddings, ANN, indexing)",
      "Leading vector database platforms (Pinecone, Weaviate, Milvus)",
      "Data ingestion and embedding pipelines",
      "Retrieval-Augmented Generation (RAG) architecture",
      "Performance tuning and filtering",
    ],
    technical_analysis:
      "The Vector Database evaluation focuses on building modern AI applications. Candidates are required to design and build a RAG pipeline, demonstrating their understanding of the end-to-end process from document ingestion to context retrieval. A critical assessment is their ability to choose the right indexing strategy and to tune the performance of the vector search. We also test their knowledge of different embedding models and their trade-offs. Finally, we assess their experience in operating a vector database in a production environment and integrating it with LLM frameworks like LangChain or LlamaIndex.",
    interlink_slugs: ["llms", "machine-learning", "python", "data-science"],
  },
};
