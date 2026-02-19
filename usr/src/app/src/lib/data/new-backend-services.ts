/** @Spec
* Feature: Technology Data Source - New Backend Services
* Type: lib
* Route: /src/lib/data/new-backend-services.ts
* Description: Central data source for new Backend & APIs specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const newBackendServices: Record<string, TechEntry> = {
  django: {
    slug: "django",
    name: "Django",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Django Developers | Nearshore Software Development",
    meta_description:
      "Build secure, scalable, and maintainable web applications with Django. Hire elite nearshore Python developers vetted for their expertise in the Django framework.",
    intro:
      "Django's 'batteries-included' philosophy allows for rapid development of complex, data-driven web applications. You need an engineer who can leverage its powerful ORM, admin interface, and security features to build robust backends quickly. Our vetting process finds Python experts who have mastered the Django ecosystem, from building RESTful APIs with Django REST Framework to managing production deployments.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your database query performance suffering?",
        problem:
          "Django's ORM is powerful, but if used naively, it can lead to a high number of inefficient database queries (N+1 problems), slowing down your application.",
        solution:
          "We vet for engineers who are experts in Django's ORM performance. They must demonstrate mastery of `select_related` and `prefetch_related` to optimize database access and build high-performance applications.",
        kpi: "Efficient QuerySet Optimization",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your large Django project becoming a monolith?",
        problem:
          "As a Django project grows, it can become a monolithic 'big ball of mud' that is difficult to maintain and extend if not properly structured.",
        solution:
          "Our engineers are proficient in building modular Django applications. They are vetted on their ability to structure a large project into reusable apps, following best practices that ensure the codebase is maintainable and scalable.",
        kpi: "Modular and Scalable App Architecture",
      },
    ],
    evaluation: [
      "Django ORM and advanced querying",
      "Django REST Framework for API development",
      "Class-Based Views and Function-Based Views",
      "Testing with Django's test framework",
      "Deployment and performance tuning",
    ],
    technical_analysis:
      "The Django evaluation focuses on building a complete, production-ready web application. Candidates are required to design a data model and build a RESTful API using Django REST Framework, demonstrating their understanding of serializers, viewsets, and routing. A critical assessment is their ability to write efficient queries and to structure the project in a modular and scalable way. We also test their knowledge of Django's security features and their ability to write comprehensive tests for their code.",
    interlink_slugs: ["python", "fastapi", "react", "postgresql", "aws"],
  },
  fastapi: {
    slug: "fastapi",
    name: "FastAPI",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire FastAPI Developers | Nearshore Software Development",
    meta_description:
      "Build high-performance APIs with Python. Hire nearshore FastAPI experts vetted for their mastery of asynchronous programming and modern API design.",
    intro:
      "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. You need an expert who can leverage FastAPI's speed and developer-friendly features to build high-performance, well-documented APIs. Our vetting process, powered by Axiom Cortex™, finds Python engineers who are masters of modern API development. We test their ability to use FastAPI's asynchronous capabilities, dependency injection system, and automatic documentation features to build robust and scalable services.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your API slow and struggling to handle concurrent requests?",
        problem:
          "Traditional synchronous Python web frameworks can be slow and inefficient, struggling to handle a high volume of concurrent requests, which leads to a poor user experience.",
        solution:
          "We vet for engineers who are experts in asynchronous programming with FastAPI. They must demonstrate the ability to build non-blocking APIs that can handle a massive number of concurrent requests with low latency, leveraging Python's `async/await` syntax.",
        kpi: "High-Performance Asynchronous APIs",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your API documentation always out of date?",
        problem:
          "Manually writing and maintaining API documentation is a time-consuming and error-prone process, leading to documentation that is often incomplete or incorrect.",
        solution:
          "Our engineers are proficient in FastAPI's automatic documentation features. They are vetted on their ability to use Python type hints and Pydantic models to automatically generate interactive API documentation (via Swagger UI and ReDoc) that is always up-to-date.",
        kpi: "Automatic and Interactive API Documentation",
      },
    ],
    evaluation: [
      "Asynchronous programming with `async/await`",
      "Pydantic for data modeling and validation",
      "Dependency Injection system",
      "API documentation with OpenAPI",
      "Testing asynchronous applications",
    ],
    technical_analysis:
      "The FastAPI evaluation focuses on building high-performance, modern APIs. Candidates are required to build an asynchronous API from scratch, demonstrating their mastery of FastAPI's features. A critical assessment is their ability to design a clean and efficient data model using Pydantic. We also test their knowledge of the dependency injection system and their ability to write testable code. Finally, we assess their understanding of how to deploy and scale a FastAPI application in a production environment.",
    interlink_slugs: ["python", "django", "docker", "gcp"],
  },
  kafka: {
    slug: "kafka",
    name: "Apache Kafka",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Kafka Experts | Nearshore Software Development",
    meta_description:
      "Build real-time data pipelines and streaming apps. Hire nearshore Kafka experts vetted for distributed systems, performance tuning, and ecosystem mastery.",
    intro:
      "Apache Kafka is a distributed event streaming platform capable of handling trillions of events a day. You need an expert who can architect and manage a highly scalable, fault-tolerant, and real-time data backbone for your organization. Our vetting process finds engineers who are masters of distributed systems and the Kafka ecosystem. We test their ability to design topics, manage partitions, and build resilient producers and consumers that can handle massive throughput.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your data pipelines unable to keep up with real-time demands?",
        problem:
          "Traditional batch-oriented data pipelines are too slow for modern, real-time applications. They create data latency that prevents you from reacting to events as they happen.",
        solution:
          "We vet for engineers who are experts in building real-time streaming data pipelines with Kafka. They must demonstrate the ability to design a system that can process millions of events per second with low latency, enabling you to build responsive, event-driven applications.",
        kpi: "Low-Latency, High-Throughput Event Streaming",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your messaging system a single point of failure?",
        problem:
          "A traditional messaging system can be a single point of failure. If the broker goes down, your entire system can grind to a halt.",
        solution:
          "Our engineers are proficient in Kafka's distributed and fault-tolerant architecture. They are vetted on their ability to design and manage a Kafka cluster that is resilient to failure, ensuring your data pipelines are always available.",
        kpi: "Fault-Tolerant and Highly Available Architecture",
      },
    ],
    evaluation: [
      "Kafka architecture (brokers, topics, partitions, Zookeeper)",
      "Producer and Consumer APIs",
      "Kafka Streams and ksqlDB for stream processing",
      "Performance tuning and monitoring",
      "Kafka Connect for data integration",
    ],
    technical_analysis:
      "The Kafka evaluation focuses on building and operating a large-scale, real-time event streaming platform. Candidates are required to design a complete data pipeline, demonstrating their understanding of Kafka's core concepts. A critical assessment is their ability to tune the performance of producers and consumers and to reason about delivery guarantees. We also test their knowledge of the broader Kafka ecosystem, including Kafka Streams for stream processing and Kafka Connect for integrating with other systems. Finally, we assess their experience in managing a Kafka cluster in production.",
    interlink_slugs: ["data-engineering", "apache-spark", "java", "microservices"],
  },
  laravel: {
    slug: "laravel",
    name: "Laravel",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Laravel Developers | Nearshore Software Development",
    meta_description:
      "Build elegant and robust web applications with PHP. Hire elite nearshore Laravel developers vetted for their expertise in the complete Laravel ecosystem.",
    intro:
      "Laravel is a web application framework with expressive, elegant syntax. It attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching. You need an expert who can leverage Laravel's full ecosystem to build modern, feature-rich applications quickly. Our vetting process finds PHP developers who are masters of Laravel, testing their ability to use its ORM (Eloquent), templating engine (Blade), and powerful features like Queues and Events.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your development cycle slow and bogged down by boilerplate code?",
        problem:
          "Building common web application features from scratch is time-consuming and error-prone, slowing down your ability to deliver value to your customers.",
        solution:
          "We vet for engineers who are experts in leveraging Laravel's rich feature set to accelerate development. They must demonstrate the ability to rapidly build features like authentication, data-driven UIs, and background jobs using Laravel's built-in tools, enabling you to ship faster.",
        kpi: "Rapid Application Development",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your application difficult to test and maintain?",
        problem:
          "A lack of clear structure and a testable architecture can lead to a codebase that is a nightmare to maintain and extend.",
        solution:
          "Our engineers are proficient in building clean, testable applications with Laravel. They are vetted on their ability to use Laravel's service container for dependency injection, to write comprehensive tests with PHPUnit, and to structure their code in a way that is easy to understand and maintain.",
        kpi: "Testable and Maintainable Architecture",
      },
    ],
    evaluation: [
      "Laravel core concepts (routing, middleware, service container)",
      "Eloquent ORM and database migrations",
      "Blade templating engine",
      "Asynchronous tasks with Queues and Jobs",
      "Testing with PHPUnit and Laravel Dusk",
    ],
    technical_analysis:
      "The Laravel evaluation focuses on building a complete, modern web application. Candidates are required to build a feature from scratch, demonstrating their mastery of the framework. A critical assessment is their ability to design a clean data model and to use the Eloquent ORM efficiently. We also test their knowledge of Laravel's more advanced features, such as the event system and task scheduling. Finally, we assess their ability to write comprehensive tests for their application, ensuring they can deliver high-quality, maintainable code.",
    interlink_slugs: ["php", "symfony", "vue", "mysql", "devops-cloud"],
  },
  nestjs: {
    slug: "nestjs",
    name: "NestJS",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire NestJS Developers | Nearshore Software Development",
    meta_description:
      "Build efficient, scalable Node.js server-side applications. Hire nearshore NestJS experts vetted for their mastery of TypeScript, modular architecture, and microservices.",
    intro:
      "NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). You need an expert who can leverage NestJS's powerful, Angular-like architecture to build robust and maintainable backend systems. Our vetting process finds TypeScript developers who are masters of the NestJS framework. We test their ability to build modular applications, to use dependency injection, and to create scalable microservices.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your Node.js codebase an unstructured 'spaghetti' of callbacks and requires?",
        problem:
          "Without a strong architectural foundation, Node.js applications can quickly become a tangled mess that is difficult to test, maintain, and scale.",
        solution:
          "We vet for engineers who are experts in building structured, modular applications with NestJS. They must demonstrate the ability to use modules, controllers, and providers to create a clean, organized, and highly testable codebase.",
        kpi: "Modular and Testable Architecture",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to use TypeScript effectively on the backend?",
        problem:
          "Simply adding TypeScript to a Node.js project is not enough. Without a framework that fully embraces it, you miss out on the full benefits of static typing and modern language features.",
        solution:
          "Our engineers are proficient in leveraging NestJS's first-class TypeScript support. They are vetted on their ability to use decorators, interfaces, and modern TS features to build strongly-typed, self-documenting, and robust backend applications.",
        kpi: "First-Class TypeScript Support",
      },
    ],
    evaluation: [
      "NestJS core concepts (modules, controllers, providers)",
      "Dependency Injection and Inversion of Control",
      "Microservice and WebSocket support",
      "Integration with TypeORM or other ORMs",
      "Testing with Jest",
    ],
    technical_analysis:
      "The NestJS evaluation focuses on building scalable and maintainable server-side applications. Candidates are required to build a RESTful API from scratch, demonstrating their mastery of the framework's core concepts. A critical assessment is their ability to structure the application in a modular way and to use the dependency injection system effectively. We also test their knowledge of how to build and communicate with microservices using NestJS. Finally, we assess their ability to write comprehensive unit and e2e tests for their application.",
    interlink_slugs: ["node", "typescript", "typeorm", "microservices", "react"],
  },
  "spring-boot": {
    slug: "spring-boot",
    name: "Spring Boot",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Spring Boot Developers | Nearshore Software Development",
    meta_description:
      "Build production-grade, stand-alone Spring applications. Hire elite nearshore Java/Kotlin developers vetted for microservices, cloud-native patterns, and performance.",
    intro:
      "Spring Boot makes it easy to create stand-alone, production-grade Spring-based Applications that you can 'just run'. It takes an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. You need an expert who can leverage Spring Boot to rapidly develop robust, scalable, and cloud-native microservices. Our vetting process finds Java and Kotlin developers who are masters of the Spring ecosystem. We test their ability to build auto-configured applications, manage dependencies, and integrate with the vast array of Spring projects.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your Spring configuration a complex XML nightmare?",
        problem:
          "Traditional Spring applications require a large amount of XML configuration, making them verbose, difficult to understand, and slow to start up.",
        solution:
          "We vet for engineers who are experts in Spring Boot's auto-configuration and opinionated defaults. They must demonstrate the ability to build a complete application with minimal configuration, focusing on business logic instead of boilerplate.",
        kpi: "Rapid, Convention-over-Configuration Development",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to build and deploy applications for the cloud?",
        problem:
          "Building an application that is ready for the cloud requires more than just business logic. You need to handle configuration, health checks, metrics, and more.",
        solution:
          "Our engineers are proficient in building cloud-native applications with Spring Boot. They are vetted on their ability to use Spring Cloud to handle distributed systems patterns like service discovery, circuit breakers, and centralized configuration, creating resilient and observable microservices.",
        kpi: "Cloud-Native and Microservice Ready",
      },
    ],
    evaluation: [
      "Spring Boot core concepts and auto-configuration",
      "Building RESTful APIs with Spring MVC",
      "Data persistence with Spring Data JPA/JDBC",
      "Microservice patterns with Spring Cloud",
      "Testing with JUnit and Mockito",
    ],
    technical_analysis:
      "The Spring Boot evaluation focuses on building production-ready, cloud-native applications. Candidates are required to build a microservice from scratch, demonstrating their mastery of Spring Boot's features. A critical assessment is their ability to use Spring Cloud to implement common distributed systems patterns. We also test their knowledge of data persistence and their ability to write efficient database queries with Spring Data. Finally, we assess their ability to write comprehensive tests for their application and to package it for deployment in a container.",
    interlink_slugs: ["java", "kotlin", "microservices", "kubernetes", "aws"],
  },
  symfony: {
    slug: "symfony",
    name: "Symfony",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Symfony Developers | Nearshore Software Development",
    meta_description:
      "Build high-performance, modular PHP applications. Hire elite nearshore Symfony developers vetted for their expertise in reusable components and modern architecture.",
    intro:
      "Symfony is a set of reusable PHP components and a PHP framework to build web applications, APIs, microservices, and web services. You need an expert who can leverage Symfony's components to build high-performance, decoupled, and maintainable applications. Our vetting process finds PHP developers who are masters of the Symfony framework. We test their ability to use the dependency injection container, the event dispatcher, and the extensive component library to build robust and scalable systems.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your application a monolithic 'big ball of mud'?",
        problem:
          "Without a strong architectural foundation, it's easy to build a monolithic application that is difficult to maintain, test, and scale.",
        solution:
          "We vet for engineers who are experts in building modular, decoupled applications with Symfony. They must demonstrate the ability to use Symfony's components and bundles to create a clean, service-oriented architecture that is easy to extend and maintain.",
        kpi: "Decoupled and Component-Based Architecture",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you reinventing the wheel for common application tasks?",
        problem:
          "Building features like form handling, validation, authentication, and caching from scratch is time-consuming and error-prone.",
        solution:
          "Our engineers are proficient in leveraging Symfony's rich ecosystem of reusable components. They are vetted on their ability to use these components to rapidly build robust and feature-rich applications without reinventing the wheel.",
        kpi: "Efficient Development with Reusable Components",
      },
    ],
    evaluation: [
      "Symfony core concepts (Kernel, DI Container, Event Dispatcher)",
      "Building APIs and web apps with Symfony components",
      "Database interaction with Doctrine ORM",
      "Form component and validation",
      "Testing with PHPUnit",
    ],
    technical_analysis:
      "The Symfony evaluation focuses on building high-performance, component-based applications. Candidates are required to build a web application or API from scratch, demonstrating their mastery of the Symfony framework and its components. A critical assessment is their ability to design a clean, service-oriented architecture and to use the dependency injection container effectively. We also test their knowledge of the Doctrine ORM for data persistence. Finally, we assess their ability to write comprehensive tests for their application.",
    interlink_slugs: ["php", "laravel", "docker", "devops-cloud"],
  },
  fastify: {
    slug: "fastify",
    name: "Fastify",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Fastify Developers | Nearshore Software Development",
    meta_description:
      "Build blazing-fast Node.js APIs. Hire nearshore Fastify experts vetted for high-performance backend development, schema validation, and plugin architecture.",
    intro:
      "Fastify is a high-performance, low-overhead web framework for Node.js, focused on providing the best developer experience with the least overhead. You need an expert who can leverage Fastify's speed and extensibility to build some of the fastest APIs on the market. Our vetting finds Node.js engineers who have mastered Fastify's plugin architecture, schema-based validation, and performance-first philosophy.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your Node.js API slow and inefficient?",
        problem:
          "Many Node.js frameworks have significant overhead, slowing down your API and increasing infrastructure costs. Inefficient request parsing and serialization can be major bottlenecks.",
        solution:
          "We vet for engineers who are experts in high-performance Node.js. They must demonstrate the ability to use Fastify's architecture, which uses a fast JSON serializer and schema-based optimization, to build APIs that can handle thousands of requests per second with minimal latency.",
        kpi: "Achieve top-tier benchmark performance for Node.js APIs."
      },
      {
        icon: "AlertTriangle",
        pain: "Is your codebase disorganized due to a lack of structure?",
        problem:
          "Without a clear architectural pattern, a Node.js application can quickly become difficult to maintain and scale. Logic becomes scattered, and reusability suffers.",
        solution:
          "Our engineers are proficient in Fastify's plugin architecture. They are vetted on their ability to build modular and encapsulated features using plugins, decorators, and hooks, creating a clean, organized, and highly maintainable codebase.",
        kpi: "Modular and maintainable codebase via plugin architecture."
      }
    ],
    evaluation: [
      "Fastify lifecycle and hooks",
      "Schema-based validation and serialization (JSON Schema)",
      "Plugin architecture and encapsulation",
      "Asynchronous programming and error handling",
      "Performance benchmarking and optimization"
    ],
    technical_analysis:
      "The Fastify evaluation is focused on raw performance and architectural discipline in Node.js. Candidates are required to build a high-throughput API, demonstrating their ability to leverage Fastify's schema-based optimizations. A critical assessment is their design of a modular application using plugins and decorators. We also test their understanding of the request lifecycle and how to use hooks effectively for tasks like authentication and logging.",
    interlink_slugs: ["node", "nestjs", "typescript", "docker"]
  },
  gin: {
    slug: "gin",
    name: "Gin",
    category: "Backend & APIs",
    categorySlug: "backend-services",
    seo_title: "Hire Gin Developers | Nearshore Software Development",
    meta_description:
      "Build high-performance web applications and microservices with Go. Hire nearshore Gin experts vetted for building fast, reliable, and production-ready Go backends.",
    intro:
      "Gin is a high-performance web framework written in Go (Golang). It features a Martini-like API with much better performance, up to 40 times faster thanks to httprouter. If you need performance and good productivity, you will love Gin. You need an expert who can leverage Gin's performance and simplicity to build blazing-fast APIs and microservices. Our vetting finds Go developers who are masters of Gin. We test their ability to build high-throughput services, design robust middleware, and create maintainable, production-grade applications.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your Go web service development slow and boilerplate-heavy?",
        problem:
          "While Go's standard library is powerful, building web services with it can be verbose and require a lot of repetitive code for routing, request parsing, and response generation.",
        solution:
          "We vet for engineers who are experts in using Gin to accelerate Go web development. They must demonstrate the ability to use Gin's expressive API and middleware to quickly build robust and maintainable web services without sacrificing performance.",
        kpi: "Rapid and Performant API Development",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling with error handling and validation in your APIs?",
        problem:
          "Properly handling errors and validating incoming requests is critical for building robust APIs, but it can be a tedious and error-prone process.",
        solution:
          "Our engineers are proficient in Gin's built-in error handling and validation capabilities. They are vetted on their ability to create a centralized error handling middleware and to use validators to ensure the integrity of incoming data, resulting in more reliable and secure APIs.",
        kpi: "Robust Error Handling and Validation",
      },
    ],
    evaluation: [
      "Gin routing and middleware",
      "Request binding and validation",
      "JSON/XML/ProtoBuf rendering",
      "Error management",
      "Building and testing production-ready services",
    ],
    technical_analysis:
      "The Gin evaluation focuses on building high-performance, production-ready web services with Go. Candidates are required to build a RESTful API using Gin, demonstrating their mastery of its routing, middleware, and data binding features. A critical assessment is their ability to structure the application in a clean, maintainable way and to handle errors gracefully. We also test their knowledge of how to write comprehensive tests for a Gin application. Finally, we assess their experience in deploying and operating a Gin-based service in a production environment.",
    interlink_slugs: ["go-lang", "docker", "kubernetes", "grpc"],
  },
};

    