/** @Spec
* Feature: Technology Data Source - New Databases
* Type: lib
* Route: /src/lib/data/new-databases.ts
* Description: Central data source for new Database specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const newDatabases: Record<string, TechEntry> = {
  memcached: {
    slug: "memcached",
    name: "Memcached",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire Memcached Experts | Nearshore Software Development",
    meta_description:
      "Accelerate your applications with a high-performance, distributed memory object caching system. Hire nearshore Memcached experts vetted for caching strategies and performance.",
    intro:
      "Memcached is a high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load. You need an expert who can effectively use Memcached to reduce latency and database load, dramatically improving your application's performance. Our vetting process finds engineers who are masters of caching. We test their ability to design and implement effective caching strategies and manage a Memcached deployment at scale.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your database the bottleneck of your application?",
        problem:
          "High database load is a common performance bottleneck, leading to slow response times and a poor user experience, especially under heavy traffic.",
        solution:
          "We vet for engineers who are experts in using Memcached to alleviate database load. They must demonstrate the ability to implement effective caching strategies that dramatically reduce the number of database reads, improving performance and scalability.",
        kpi: "Reduced Database Load and Improved Response Times",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to scale your caching layer?",
        problem:
          "A single-node cache can quickly become a new bottleneck. You need a distributed caching solution that can scale with your application.",
        solution:
          "Our engineers are proficient in Memcached's distributed, shared-nothing architecture. They are vetted on their ability to set up and manage a distributed Memcached cluster, ensuring your caching layer can scale horizontally to meet any demand.",
        kpi: "Scalable, Distributed Caching",
      },
    ],
    evaluation: [
      "Memcached architecture and commands",
      "Caching strategies (e.g., cache-aside, write-through)",
      "Data serialization and storage",
      "Distributed caching and client-side hashing",
      "Monitoring and performance tuning",
    ],
    technical_analysis:
      "The Memcached evaluation focuses on high-performance distributed caching. Candidates are required to design a caching strategy for a given application, demonstrating their understanding of different caching patterns. A critical assessment is their ability to reason about cache eviction policies and consistency. We also test their knowledge of how to operate a Memcached cluster in a production environment. Finally, we assess their experience with a Memcached client library in a language like Python or Java.",
    interlink_slugs: ["redis", "mysql", "python", "devops-cloud"],
  },
  nats: {
    slug: "nats",
    name: "NATS.io",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire NATS.io Experts | Nearshore Software Development",
    meta_description:
      "Build high-performance, resilient messaging systems. Hire nearshore NATS experts vetted for cloud-native messaging, streaming, and distributed systems.",
    intro:
      "NATS.io is a simple, secure, and performant open source messaging system for cloud-native applications, IoT devices, and microservices architectures. You need an expert who can leverage NATS to build a fast, reliable, and scalable communication layer for your distributed systems. Our vetting process finds engineers who are masters of modern messaging. We test their ability to design messaging patterns, build resilient systems with NATS Streaming, and manage a NATS cluster at scale.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your messaging system complex and slow?",
        problem:
          "Traditional enterprise messaging systems can be complex, bloated, and slow, creating a bottleneck in your distributed architecture.",
        solution:
          "We vet for engineers who are experts in NATS's simple, high-performance design. They must demonstrate the ability to build a messaging system that is lightweight, fast, and easy to operate, enabling low-latency communication between your services.",
        kpi: "High-Performance and Lightweight Messaging",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling with message delivery and persistence?",
        problem:
          "Core NATS is 'at-most-once' delivery, which is not suitable for all use cases. You need a way to ensure messages are delivered and to persist them for later processing.",
        solution:
          "Our engineers are proficient in NATS Streaming (Stan) and JetStream. They are vetted on their ability to use these components to add persistence, message redelivery, and durable subscriptions to your messaging architecture, building a truly reliable system.",
        kpi: "Reliable Messaging with NATS Streaming/JetStream",
      },
    ],
    evaluation: [
      "NATS core messaging (pub/sub, request/reply)",
      "NATS Streaming/JetStream for persistence and delivery guarantees",
      "Clustering and high availability",
      "Security and authentication",
      "Observability and monitoring",
    ],
    technical_analysis:
      "The NATS.io evaluation focuses on building high-performance, cloud-native messaging systems. Candidates are required to design a distributed application that uses NATS for communication, demonstrating their understanding of different messaging patterns. A critical assessment is their ability to use NATS Streaming or JetStream to build a reliable system with delivery guarantees. We also test their knowledge of how to secure and operate a NATS cluster in production. Finally, we assess their experience with a NATS client in a language like Go or Rust.",
    interlink_slugs: ["go-lang", "rust", "microservices", "kubernetes"],
  },
  rabbitmq: {
    slug: "rabbitmq",
    name: "RabbitMQ",
    category: "Databases",
    categorySlug: "databases",
    seo_title: "Hire RabbitMQ Experts | Nearshore Software Development",
    meta_description:
      "Build reliable, decoupled, and scalable applications. Hire nearshore RabbitMQ experts vetted for AMQP, message routing, and high-availability clustering.",
    intro:
      "RabbitMQ is one of the most popular open source message brokers. It's lightweight and easy to deploy on-premises and in the cloud, offering a wide range of features for building reliable, asynchronous applications. You need an expert who can leverage RabbitMQ's flexible routing capabilities and reliability features to build a robust messaging backbone for your microservices. Our vetting process finds engineers who are masters of the AMQP protocol and the RabbitMQ ecosystem. We test their ability to design complex routing topologies, ensure message durability, and manage a highly available RabbitMQ cluster.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your inter-service communication brittle and unreliable?",
        problem:
          "Direct, synchronous communication between services creates a tightly coupled system where a single service failure can cause a cascading outage.",
        solution:
          "We vet for engineers who are experts in building decoupled, asynchronous systems with RabbitMQ. They must demonstrate the ability to use messaging to create a resilient architecture where services can fail and recover independently, without impacting the entire system.",
        kpi: "Decoupled and Resilient Microservice Architecture",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to implement complex messaging workflows?",
        problem:
          "Simple pub/sub is not enough for many real-world scenarios. You need to be able to route messages based on complex rules, implement dead-lettering for failed messages, and ensure messages are processed in the correct order.",
        solution:
          "Our engineers are proficient in RabbitMQ's advanced features. They are vetted on their ability to use different exchange types (direct, topic, fanout, headers) and features like dead-letter exchanges and message TTL to build sophisticated and reliable messaging workflows.",
        kpi: "Advanced Message Routing and Workflow Design",
      },
    ],
    evaluation: [
      "AMQP 0-9-1 protocol and RabbitMQ concepts",
      "Exchanges, queues, and bindings",
      "Message durability, delivery acknowledgements, and publisher confirms",
      "Clustering and high availability",
      "Error handling and dead-lettering",
    ],
    technical_analysis:
      "The RabbitMQ evaluation focuses on building reliable and flexible messaging systems. Candidates are required to design a messaging architecture for a complex application, demonstrating their mastery of RabbitMQ's routing capabilities. A critical assessment is their understanding of message reliability and their ability to configure publishers and consumers to ensure no messages are lost. We also test their knowledge of how to set up and manage a highly available RabbitMQ cluster. Finally, we assess their experience with a RabbitMQ client library and their ability to write robust, production-ready messaging code.",
    interlink_slugs: ["message-queues", "microservices", "java", "python", "devops-cloud"],
  },
};
