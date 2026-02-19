/** @Spec
* Feature: Technology Data Source - New ORMs
* Type: lib
* Route: /src/lib/data/new-orm.ts
* Description: Central data source for new ORM specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from ’@/data/tech’;

export const newOrms: Record<string, TechEntry> = {
  &quot;ef-core&quot;: {
    slug: &quot;ef-core&quot;,
    name: &quot;Entity Framework Core&quot;,
    category: &quot;Backend & APIs&quot;,
    categorySlug: &quot;backend-services&quot;,
    seo_title: &quot;Hire EF Core Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Build data-driven .NET applications with ease. Hire nearshore Entity Framework Core experts vetted for performance tuning, query optimization, and complex data modeling.&quot;,
    intro:
      &quot;Entity Framework (EF) Core is a modern object-database mapper for .NET. It enables .NET developers to work with a database using .NET objects, eliminating the need for most of the data-access code they usually need to write. You need an expert who can leverage EF Core to build high-performance, data-driven applications. Our vetting process finds .NET developers who are masters of EF Core. We test their ability to design complex data models, write efficient queries with LINQ, and tune performance for demanding applications.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your database access slow and inefficient?&quot;,
        problem:
          &quot;A naive use of EF Core can lead to inefficient queries, such as the N+1 problem, which can cripple your application’s performance.&quot;,
        solution:
          &quot;We vet for engineers who are experts in EF Core performance tuning. They must demonstrate the ability to use tools like `ToQueryString()` and SQL Server Profiler to diagnose and fix slow queries, and to use features like `AsNoTracking` and compiled queries for maximum performance.&quot;,
        kpi: &quot;Efficient Query Generation and Performance&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling to manage database schema changes?&quot;,
        problem:
          &quot;Managing database schema changes over time can be a complex and error-prone process, especially in a team environment.&quot;,
        solution:
          &quot;Our engineers are proficient in EF Core Migrations. They are vetted on their ability to use migrations to manage schema changes in a safe, repeatable, and version-controlled way, ensuring your database schema always stays in sync with your application code.&quot;,
        kpi: &quot;Safe and Repeatable Schema Migrations&quot;,
      },
    ],
    evaluation: [
      &quot;EF Core data modeling and configuration&quot;,
      &quot;LINQ for querying and data manipulation&quot;,
      &quot;Performance tuning and query optimization&quot;,
      &quot;Managing schema with Migrations&quot;,
      &quot;Handling concurrency and transactions&quot;,
    ],
    technical_analysis:
      &quot;The EF Core evaluation focuses on building high-performance, data-driven .NET applications. Candidates are required to build a data access layer for a given application, demonstrating their mastery of EF Core. A critical assessment is their ability to write efficient LINQ queries and to diagnose and fix performance issues. We also test their knowledge of how to manage database schema changes with migrations. Finally, we assess their understanding of how to handle transactions and concurrency in a multi-user environment.&quot;,
    interlink_slugs: [&quot;c-sharp&quot;, &quot;sql-server&quot;, &quot;azure&quot;],
  },
  hibernate: {
    slug: &quot;hibernate&quot;,
    name: &quot;Hibernate&quot;,
    category: &quot;Backend & APIs&quot;,
    categorySlug: &quot;backend-services&quot;,
    seo_title: &quot;Hire Hibernate Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Build robust, data-driven Java applications. Hire nearshore Hibernate experts vetted for performance tuning, caching strategies, and complex mappings.&quot;,
    intro:
      &quot;Hibernate is a high-performance object/relational persistence and query service for Java. It provides a framework for mapping an object-oriented domain model to a relational database. You need an expert who can leverage Hibernate to build scalable and maintainable data access layers for your Java applications. Our vetting process finds Java developers who are masters of Hibernate. We test their ability to design complex mappings, write efficient queries with HQL and the Criteria API, and tune performance for high-throughput systems.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your application slow due to inefficient database access?&quot;,
        problem:
          &quot;A naive use of Hibernate can lead to the N+1 selects problem, excessive database roundtrips, and other performance issues that can bring your application to a crawl.&quot;,
        solution:
          &quot;We vet for engineers who are experts in Hibernate performance tuning. They must demonstrate the ability to use fetch strategies, caching (first and second-level), and query optimization to build a high-performance data access layer.&quot;,
        kpi: &quot;High-Performance Data Access Layer&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling with complex object-relational mappings?&quot;,
        problem:
          &quot;Mapping a complex object model to a relational database can be a challenging task, often leading to a data access layer that is difficult to maintain and extend.&quot;,
        solution:
          &quot;Our engineers are proficient in Hibernate’s advanced mapping capabilities. They are vetted on their ability to handle complex associations, inheritance hierarchies, and custom types, creating a clean and maintainable mapping between your object model and your database.&quot;,
        kpi: &quot;Clean and Maintainable Mappings&quot;,
      },
    ],
    evaluation: [
      &quot;Hibernate core concepts and architecture&quot;,
      &quot;Object/Relational Mapping (ORM) with JPA annotations&quot;,
      &quot;HQL (Hibernate Query Language) and Criteria API&quot;,
      &quot;Caching (first-level, second-level, query cache)&quot;,
      &quot;Performance tuning and optimization&quot;,
    ],
    technical_analysis:
      &quot;The Hibernate evaluation focuses on building scalable and performant data access layers for Java applications. Candidates are required to build a data access layer for a given domain model, demonstrating their mastery of Hibernate’s mapping and query capabilities. A critical assessment is their ability to diagnose and fix performance problems, such as the N+1 problem. We also test their knowledge of Hibernate’s caching mechanisms and how to use them effectively. Finally, we assess their understanding of transaction management and concurrency control.&quot;,
    interlink_slugs: [&quot;java&quot;, &quot;spring-boot&quot;, &quot;sql&quot;, &quot;data-engineering&quot;],
  },
  prisma: {
    slug: &quot;prisma&quot;,
    name: &quot;Prisma&quot;,
    category: &quot;Backend & APIs&quot;,
    categorySlug: &quot;backend-services&quot;,
    seo_title: &quot;Hire Prisma Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Build modern, type-safe database applications. Hire nearshore Node.js developers vetted for their expertise in the Prisma ORM for TypeScript and Node.js.&quot;,
    intro:
      &quot;Prisma is a next-generation ORM for Node.js and TypeScript. It helps you build faster and make fewer errors with an auto-generated and type-safe query builder. You need an expert who can leverage Prisma to build a robust, maintainable, and type-safe data access layer for your backend applications. Our vetting process finds TypeScript developers who are masters of Prisma. We test their ability to design a schema, write complex queries, and manage database migrations with ease.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your data access code error-prone and not type-safe?&quot;,
        problem:
          &quot;Writing raw SQL queries or using a traditional ORM without type safety can lead to a host of runtime errors that are difficult to debug.&quot;,
        solution:
          &quot;We vet for engineers who are experts in building type-safe applications. They must demonstrate the ability to use Prisma’s auto-generated, type-safe client to build a data access layer where database queries are fully type-checked at compile time, eliminating an entire class of errors.&quot;,
        kpi: &quot;Fully Type-Safe Database Access&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is managing database schema changes a manual and risky process?&quot;,
        problem:
          &quot;Manually writing and applying SQL migration scripts is a slow, error-prone process that can easily lead to inconsistencies between your application code and your database schema.&quot;,
        solution:
          &quot;Our engineers are proficient in Prisma Migrate. They are vetted on their ability to use a declarative schema definition to automatically generate and apply database migrations, ensuring your schema is always in sync with your code in a safe and repeatable way.&quot;,
        kpi: &quot;Declarative and Safe Schema Migrations&quot;,
      },
    ],
    evaluation: [
      &quot;Prisma Schema Language&quot;,
      &quot;Type-safe query building with Prisma Client&quot;,
      &quot;Database migrations with Prisma Migrate&quot;,
      &quot;Advanced querying (filtering, sorting, pagination, relations)&quot;,
      &quot;Integration with frameworks like NestJS or Express&quot;,
    ],
    technical_analysis:
      &quot;The Prisma evaluation focuses on building modern, type-safe backend applications. Candidates are required to design a Prisma schema and build a data access layer for a given application, demonstrating their mastery of the Prisma Client API. A critical assessment is their ability to write complex queries that involve relations and filtering. We also test their knowledge of how to use Prisma Migrate to manage the database schema. Finally, we assess their experience in integrating Prisma into a larger backend application built with a framework like NestJS.&quot;,
    interlink_slugs: [&quot;typescript&quot;, &quot;node&quot;, &quot;nestjs&quot;, &quot;graphql&quot;, &quot;postgresql&quot;],
  },
  sqlalchemy: {
    slug: &quot;sqlalchemy&quot;,
    name: &quot;SQLAlchemy&quot;,
    category: &quot;Backend & APIs&quot;,
    categorySlug: &quot;backend-services&quot;,
    seo_title: &quot;Hire SQLAlchemy Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Build powerful, data-driven Python applications. Hire nearshore SQLAlchemy experts vetted for their mastery of the SQL Expression Language and the ORM.&quot;,
    intro:
      &quot;SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL. You need an expert who can wield SQLAlchemy to build high-performance, maintainable data access layers. Our vetting process finds Python developers who are masters of SQLAlchemy. We test their ability to use both the high-level ORM for rapid development and the low-level SQL Expression Language for fine-grained control and performance.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your ORM hiding the power of SQL from you?&quot;,
        problem:
          &quot;Many ORMs abstract away SQL to the point where it’s difficult to write complex, high-performance queries, forcing you to drop down to raw SQL and lose the benefits of the ORM.&quot;,
        solution:
          &quot;We vet for engineers who are experts in SQLAlchemy’s layered approach. They must demonstrate the ability to use the full power of the SQL Expression Language to build any query imaginable, while still benefiting from the convenience of the ORM where appropriate.&quot;,
        kpi: &quot;Full Power of SQL with a Pythonic API&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling with database connection management and transactions?&quot;,
        problem:
          &quot;Properly managing database connections, sessions, and transactions is a complex task that can easily lead to bugs and performance issues if not handled correctly.&quot;,
        solution:
          &quot;Our engineers are proficient in SQLAlchemy’s Session and Engine management. They are vetted on their ability to design a robust and efficient connection management strategy, and to correctly handle transactions to ensure data consistency.&quot;,
        kpi: &quot;Robust Session and Transaction Management&quot;,
      },
    ],
    evaluation: [
      &quot;SQLAlchemy Core and SQL Expression Language&quot;,
      &quot;ORM patterns and declarative mapping&quot;,
      &quot;Session and transaction management&quot;,
      &quot;Relationship configuration and loading strategies&quot;,
      &quot;Alembic for database migrations&quot;,
    ],
    technical_analysis:
      &quot;The SQLAlchemy evaluation is a deep dive into Python database programming. Candidates are required to build a data access layer, demonstrating their ability to use both the ORM and the Core Expression Language. A critical assessment is their understanding of the Session lifecycle and how to manage transactions correctly. We also test their knowledge of different relationship loading strategies and their performance implications. Finally, we assess their experience with Alembic for managing database schema migrations.&quot;,
    interlink_slugs: [&quot;python&quot;, &quot;django&quot;, &quot;fastapi&quot;, &quot;postgresql&quot;, &quot;mysql&quot;],
  },
  typeorm: {
    slug: &quot;typeorm&quot;,
    name: &quot;TypeORM&quot;,
    category: &quot;Backend & APIs&quot;,
    categorySlug: &quot;backend-services&quot;,
    seo_title: &quot;Hire TypeORM Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Build scalable, data-driven applications with TypeScript. Hire nearshore TypeORM experts vetted for their mastery of the ORM for TypeScript and JavaScript.&quot;,
    intro:
      &quot;TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript. Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases. You need an expert who can leverage TypeORM to build a robust and type-safe data access layer for your backend. Our vetting process finds TypeScript developers who are masters of TypeORM. We test their ability to model complex entities, write powerful queries with the query builder, and manage schema synchronization and migrations.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your data access code not taking full advantage of TypeScript?&quot;,
        problem:
          &quot;Using a database library that doesn’t fully embrace TypeScript means you are missing out on the benefits of static typing, leading to less reliable and harder-to-maintain code.&quot;,
        solution:
          &quot;We vet for engineers who are experts in building type-safe data access layers. They must demonstrate the ability to use TypeORM’s decorators and powerful type inference to create a fully type-safe API for your database.&quot;,
        kpi: &quot;Fully Type-Safe Data Access with TypeScript&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling to write complex queries with your ORM?&quot;,
        problem:
          &quot;Many ORMs provide a simple API for basic CRUD operations but make it difficult to write complex queries with joins, aggregations, and subqueries.&quot;,
        solution:
          &quot;Our engineers are proficient in TypeORM’s flexible query builder. They are vetted on their ability to write any complex query you need, while still benefiting from the safety and convenience of a typed API.&quot;,
        kpi: &quot;Powerful and Flexible Query Builder&quot;,
      },
    ],
    evaluation: [
      &quot;Entity definition with decorators or configuration&quot;,
      &quot;Querying with `find` options and the QueryBuilder&quot;,
      &quot;Relations (OneToOne, OneToMany, ManyToMany)&quot;,
      &quot;Migrations and schema synchronization&quot;,
      &quot;Integration with NestJS or other frameworks&quot;,
    ],
    technical_analysis:
      &quot;The TypeORM evaluation focuses on building robust, data-driven applications with TypeScript. Candidates are required to design a set of entities and build a data access layer, demonstrating their mastery of TypeORM’s features. A critical assessment is their ability to write complex queries using the QueryBuilder. We also test their knowledge of how to manage the database schema with migrations. Finally, we assess their experience in integrating TypeORM into a larger application and handling transactions and concurrency.&quot;,
    interlink_slugs: [&quot;typescript&quot;, &quot;node&quot;, &quot;nestjs&quot;, &quot;postgresql&quot;, &quot;graphql&quot;],
  },
};
