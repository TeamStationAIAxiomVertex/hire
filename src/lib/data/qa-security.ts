/** @Spec
* Feature: Technology Data Source - QA & Security
* Type: lib
* Route: /src/lib/data/qa-security.ts
* Description: Central data source for QA & Security specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const qaSecurity: Record<string, TechEntry> = {
  playwright: {
    slug: "playwright",
    name: "Playwright",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire Playwright Experts | Nearshore Software Development",
    meta_description:
      "Build reliable and fast end-to-end tests for modern web apps. Hire nearshore Playwright experts vetted for building robust, flake-free test suites.",
    intro:
      "Playwright is a modern, fast, and reliable framework for end-to-end testing of web applications. It's built by Microsoft and supports all modern rendering engines including Chromium, WebKit, and Firefox. You need an expert who can use Playwright to build a comprehensive, reliable, and fast end-to-end test suite that gives you the confidence to ship quickly. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of modern test automation. We test their ability to write clean, maintainable tests, debug test failures, and integrate testing into your CI/CD pipeline.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are your end-to-end tests slow, flaky, and a pain to maintain?",
        problem:
          "Traditional end-to-end testing frameworks are often slow, unreliable, and produce tests that are difficult to debug and maintain, leading many teams to abandon them altogether.",
        solution:
          "We vet for engineers who are experts in building robust and reliable test suites with Playwright. They must demonstrate the ability to use Playwright's auto-waits, tracing, and debugging tools to write tests that are fast, reliable, and easy to maintain.",
        kpi: "Fast, Reliable, and Flake-Free Tests",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to test complex user interactions and scenarios?",
        problem:
          "Modern web applications have complex user interfaces and interactions that can be difficult to test with traditional automation tools.",
        solution:
          "Our engineers are proficient in Playwright's powerful API. They are vetted on their ability to test complex scenarios, including network interception, authentication, and interactions with iframes and web components.",
        kpi: "Comprehensive Testing of Modern Web Apps",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your test suite unable to run on all modern browsers?",
        problem:
          "Bugs often appear in one browser but not another. A test suite that only runs on a single browser (like Chromium) provides a false sense of security and misses critical cross-browser compatibility issues.",
        solution:
          "Our experts leverage Playwright's cross-browser capabilities. We vet their ability to write and execute tests across Chromium, Firefox, and WebKit simultaneously, ensuring your application works flawlessly for all your users, regardless of their browser.",
        kpi: "Comprehensive cross-browser test coverage"
      },
      {
        icon: "AlertTriangle",
        pain: "Are you manually creating test data and setting up application state?",
        problem:
          "Manually preparing the state for each test run is slow, error-prone, and leads to tests that are not isolated. This makes it difficult to run tests in parallel and get reliable results.",
        solution:
          "We hire engineers who are experts in test isolation and setup. They are vetted on their ability to use Playwright's authentication and storage state features to programmatically log in and prepare the application state for each test, ensuring fast, reliable, and isolated test execution.",
        kpi: "Automated test setup and state management"
      }
    ],
    evaluation: [
      "Playwright architecture and core concepts",
      "Writing and debugging tests",
      "Auto-waits and selectors",
      "Network interception and mocking",
      "CI/CD integration and parallel execution",
    ],
    technical_analysis:
      "The Playwright evaluation focuses on modern end-to-end testing. Candidates are required to write a set of tests for a complex web application, demonstrating their mastery of the Playwright API. A critical assessment is their ability to write reliable tests that are not prone to flakiness. We also test their debugging skills and their ability to use the Playwright Trace Viewer to diagnose test failures. Finally, we assess their experience in integrating Playwright into a CI/CD pipeline and running tests in parallel.",
    interlink_slugs: ["cypress", "qa-automation", "typescript", "ci-cd"],
  },
  cypress: {
    slug: "cypress",
    name: "Cypress",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire Cypress Experts | Nearshore Software Development",
    meta_description:
      "Fast, easy, and reliable testing for browsers. Hire nearshore Cypress experts vetted for building comprehensive and developer-friendly test suites.",
    intro:
      "Cypress is a next-generation front-end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications. You need an expert who can leverage Cypress's unique architecture and developer-friendly experience to build a fast, reliable, and easy-to-maintain test suite. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of testing with Cypress. We test their ability to write clean tests, debug with ease, and create a culture of quality within your team.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your testing process slow and disconnected from development?",
        problem:
          "Traditional testing tools are often slow and run in a separate process from the application, making it difficult for developers to write and debug tests as part of their daily workflow.",
        solution:
          "We vet for engineers who are experts in Cypress's developer-friendly experience. They must demonstrate the ability to use Cypress's interactive Test Runner to write and debug tests in real-time, making testing a natural part of the development process.",
        kpi: "Improved Developer Experience and Productivity",
      },
      {
        icon: "AlertTriangle",
        pain: "Are your tests flaky and difficult to debug?",
        problem:
          "Flaky tests are a major drain on productivity and can erode a team's confidence in their test suite. Debugging these issues in a traditional testing framework can be a painful process.",
        solution:
          "Our engineers are proficient in Cypress's unique features for writing reliable, flake-free tests. They are vetted on their ability to use features like automatic waiting, time-travel debugging, and real-time reloads to write tests that are robust and easy to debug.",
        kpi: "Reliable and Easy-to-Debug Tests",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to test API endpoints from your frontend tests?",
        problem:
          "Verifying that your frontend correctly integrates with your backend APIs often requires a separate testing setup. It's difficult to make API requests directly from your end-to-end tests to set up state or make assertions.",
        solution:
          "Our experts are masters of Cypress's `cy.request()` command. We vet their ability to seamlessly make HTTP requests to your backend from within their Cypress tests, allowing them to seed a database, check an endpoint's response, or test user flows that span both frontend and backend.",
        kpi: "Seamless frontend and backend API testing"
      },
      {
        icon: "AlertTriangle",
        pain: "Is your team manually creating custom commands for every project?",
        problem:
          "Repetitive actions like logging in or creating a specific piece of test data lead to duplicated code across your test files, making the test suite hard to maintain and update.",
        solution:
          "We hire engineers who are experts in creating custom Cypress commands. They are vetted on their ability to encapsulate complex, multi-step actions into simple, reusable commands, keeping your tests clean, readable, and DRY (Don't Repeat Yourself).",
        kpi: "Clean, maintainable tests with custom commands"
      }
    ],
    evaluation: [
      "Cypress architecture and Test Runner",
      "Writing and organizing tests",
      "Commands, assertions, and automatic waiting",
      "Network request mocking and stubbing",
      "CI/CD integration and the Cypress Dashboard",
    ],
    technical_analysis:
      "The Cypress evaluation focuses on building a developer-friendly and reliable testing workflow. Candidates are required to write a suite of tests for a modern web application, demonstrating their mastery of the Cypress API and best practices. A critical assessment is their ability to use the interactive Test Runner to efficiently write and debug tests. We also test their knowledge of how to mock network requests and to manage test data. Finally, we assess their experience in integrating Cypress into a CI/CD pipeline and using the Cypress Dashboard to analyze test results.",
    interlink_slugs: ["playwright", "qa-automation", "javascript", "react"],
  },
  "qa-automation": {
    slug: "qa-automation",
    name: "QA Automation",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire QA Automation Engineers | Nearshore Software Development",
    meta_description:
      "Ship with confidence. Hire nearshore QA Automation Engineers vetted for building comprehensive test strategies and robust automation frameworks.",
    intro:
      "QA Automation is about more than just writing tests. It's about building a culture of quality and creating a fast, reliable feedback loop that enables your team to ship with confidence. You need an engineer who can design and implement a comprehensive test automation strategy that covers everything from unit and integration tests to end-to-end and performance tests. Our vetting process, powered by Axiom Cortex™, finds engineers who are true leaders in quality. We test their ability to build robust automation frameworks, integrate testing into the CI/CD pipeline, and drive a quality-first mindset across the entire engineering organization.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are you still relying on manual testing, slowing down your releases?",
        problem:
          "Manual regression testing is a slow, expensive, and error-prone process that simply can't keep up with the pace of modern software development.",
        solution:
          "We vet for engineers who are experts in building a comprehensive test automation strategy. They must demonstrate the ability to identify the right tests to automate at each level of the testing pyramid, and to build a robust automation framework that provides fast, reliable feedback.",
        kpi: "Increased Test Coverage and Faster Release Cycles",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your test automation effort failing to deliver the expected ROI?",
        problem:
          "Many test automation initiatives fail because they focus on the wrong things, resulting in a test suite that is brittle, slow, and provides little value.",
        solution:
          "Our engineers are proficient in building a test automation strategy that is aligned with your business goals. They are vetted on their ability to focus on high-value tests, to build a maintainable and scalable framework, and to measure and communicate the value of test automation to the business.",
        kpi: "A High-ROI Test Automation Strategy",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your test suite failing to catch performance regressions?",
        problem:
          "Functional tests are great, but they don't catch performance issues. A new feature can pass all its functional tests but still bring your application to its knees in production due to slow response times or high resource consumption.",
        solution:
          "Our QA automation experts are skilled in performance testing. We vet their ability to use tools like k6, JMeter, or Gatling to build automated performance tests that run as part of your CI/CD pipeline, catching performance regressions before they impact your users.",
        kpi: "Automated performance testing to prevent regressions"
      },
      {
        icon: "AlertTriangle",
        pain: "Does your team lack a unified view of test results and quality metrics?",
        problem:
          "Test results are scattered across different tools and dashboards, making it impossible to get a clear, consolidated view of your application's quality. It's hard to track trends, identify flaky tests, or understand your true risk level.",
        solution:
          "We hire engineers who are experts in test reporting and observability. They are vetted on their ability to integrate test results from all levels of the pyramid into a centralized reporting tool (like ReportPortal or Allure), providing a single pane of glass for quality across the entire organization.",
        kpi: "Centralized and actionable quality dashboards"
      }
    ],
    evaluation: [
      "Test automation strategy and the testing pyramid",
      "UI automation with Playwright or Cypress",
      "API testing with Postman or REST Assured",
      "Performance testing with k6 or JMeter",
      "CI/CD integration and reporting",
    ],
    technical_analysis:
      "The QA Automation Engineer evaluation is a holistic assessment of their ability to lead a quality engineering effort. Candidates are required to design a complete test strategy for a new product, demonstrating their understanding of the different types of testing and when to apply them. A critical assessment is their ability to design and build a test automation framework from scratch. We also test their hands-on skills with a variety of automation tools for UI, API, and performance testing. Finally, we assess their ability to integrate testing into a CI/CD pipeline and to effectively communicate test results and quality metrics.",
    interlink_slugs: ["playwright", "cypress", "ci-cd", "devops-engineering"],
  },
  "security-engineering": {
    slug: "security-engineering",
    name: "Security Engineering",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire Security Engineers | Nearshore Software Development",
    meta_description:
      "Embed security into your development lifecycle. Hire nearshore Security Engineers vetted for threat modeling, secure coding, and cloud security.",
    intro:
      "Security Engineering is the discipline of building systems that are secure by design. It's about shifting security left and embedding it into every phase of the development lifecycle. You need an engineer who can be a partner to your development teams, helping them build secure applications without slowing them down. Our vetting process, powered by Axiom Cortex™, finds engineers who are experts in modern application and cloud security. We test their ability to perform threat modeling, implement secure coding practices, and automate security testing.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is security an afterthought, discovered only after a breach?",
        problem:
          "Treating security as a final gate before release is a recipe for disaster. It's slow, expensive, and often too late to fix fundamental design flaws.",
        solution:
          "We vet for engineers who are experts in 'shifting left' on security. They must demonstrate the ability to integrate security into the entire development lifecycle, from threat modeling in the design phase to automated security testing in the CI/CD pipeline.",
        kpi: "Secure by Design Development Lifecycle",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your cloud infrastructure a black box of security risks?",
        problem:
          "The dynamic and complex nature of cloud environments can make it difficult to maintain a strong security posture, leaving you vulnerable to misconfigurations and attacks.",
        solution:
          "Our engineers are proficient in cloud security best practices. They are vetted on their ability to secure cloud infrastructure using Infrastructure as Code, to implement least-privilege access control, and to continuously monitor for security threats.",
        kpi: "Secure and Compliant Cloud Infrastructure",
      },
      {
        icon: "AlertTriangle",
        pain: "Do your developers understand how to write secure code?",
        problem:
          "Developers are your first line of defense, but they often lack the training to identify and mitigate common security vulnerabilities like SQL injection, XSS, and CSRF. This leaves your application open to attack.",
        solution:
          "Our security engineers are also teachers and mentors. We vet their ability to perform secure code reviews, provide actionable feedback to developers, and lead training sessions on secure coding practices, creating a culture of security within your engineering team.",
        kpi: "A culture of security and a reduction in common vulnerabilities"
      },
      {
        icon: "AlertTriangle",
        pain: "Are you failing to keep your third-party dependencies up to date and secure?",
        problem:
          "Modern applications are built on a mountain of open-source dependencies, each one a potential security risk. Failing to track and update these dependencies leaves you vulnerable to known exploits.",
        solution:
          "We hire experts in software composition analysis (SCA). They are vetted on their ability to implement automated dependency scanning tools (like Snyk or Dependabot) into the CI/CD pipeline, ensuring that vulnerable dependencies are identified and updated before they reach production.",
        kpi: "Automated vulnerability scanning for all third-party dependencies"
      }
    ],
    evaluation: [
      "Threat modeling and secure design principles",
      "SAST, DAST, and IAST for automated security testing",
      "Cloud security (AWS, GCP, Azure)",
      "Container and Kubernetes security",
      "Identity and access management (IAM)",
    ],
    technical_analysis:
      "The Security Engineer evaluation is a deep dive into modern security practices. Candidates are required to perform a threat model for a given application architecture and to identify and prioritize potential vulnerabilities. A critical assessment is their ability to set up and configure a DevSecOps pipeline with automated security testing tools. We also test their knowledge of cloud and container security best practices. Finally, we assess their ability to respond to a security incident and to perform a root cause analysis.",
    interlink_slugs: ["devops-engineering", "aws", "kubernetes", "penetration-testing"],
  },
  "penetration-testing": {
    slug: "penetration-testing",
    name: "Penetration Testing",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire Penetration Testers | Nearshore Software Development",
    meta_description:
      "Find and fix vulnerabilities before attackers do. Hire nearshore Penetration Testers vetted for their expertise in ethical hacking and security research.",
    intro:
      "Penetration testing, or ethical hacking, is the practice of testing a computer system, network, or web application to find security vulnerabilities that an attacker could exploit. You need an expert who can think like an attacker and help you identify and fix your security weaknesses before they are exploited. Our vetting process, powered by Axiom Cortex™, finds ethical hackers who are masters of their craft. We test their ability to perform comprehensive penetration tests, to clearly document their findings, and to provide actionable remediation advice.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are you unsure of your true security posture?",
        problem:
          "You may have security tools and policies in place, but without a real-world test, you have no way of knowing if they are actually effective against a determined attacker.",
        solution:
          "We vet for ethical hackers who can provide you with a realistic assessment of your security posture. They must demonstrate the ability to simulate a real-world attack and to identify the vulnerabilities that could be exploited by an attacker.",
        kpi: "Realistic and Comprehensive Security Assessment",
      },
      {
        icon: "AlertTriangle",
        pain: "Are your penetration test reports just a list of vulnerabilities with no context?",
        problem:
          "A penetration test report that is just a list of CVEs is not very helpful. You need to understand the business impact of each vulnerability and how to prioritize your remediation efforts.",
        solution:
          "Our penetration testers are proficient in communicating risk. They are vetted on their ability to write clear, actionable reports that explain the business impact of each finding and provide concrete steps for remediation.",
        kpi: "Actionable and Business-Focused Reporting",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your testing limited to just web applications?",
        problem:
          "A modern enterprise has a vast attack surface, including mobile apps, cloud infrastructure, and internal networks. Focusing only on web application testing leaves you blind to other critical vulnerabilities.",
        solution:
          "Our experts are full-stack penetration testers. We vet for experience across a wide range of domains, including mobile application security (iOS, Android), network penetration testing, and cloud security configuration reviews (AWS, GCP, Azure), providing a holistic view of your security posture.",
        kpi: "Comprehensive testing across web, mobile, and cloud"
      },
      {
        icon: "AlertTriangle",
        pain: "Are you failing to validate your security fixes?",
        problem:
          "Once a vulnerability is found and a fix is deployed, how do you know the fix is effective and didn't introduce a new vulnerability? Without a re-testing and validation process, you may still be at risk.",
        solution:
          "We hire testers who understand the full lifecycle. They are experts in performing re-testing and regression testing to validate that security fixes are effective and have not introduced new issues, ensuring a continuous improvement in your security posture.",
        kpi: "A continuous cycle of testing, fixing, and validation"
      }
    ],
    evaluation: [
      "Penetration testing methodology (e.g., PTES, OSSTMM)",
      "Web application security (OWASP Top 10)",
      "Network and infrastructure security",
      "Manual and automated testing tools (e.g., Burp Suite, Nmap)",
      "Reporting and remediation",
    ],
    technical_analysis:
      "The Penetration Tester evaluation is a hands-on assessment of their ethical hacking skills. Candidates are given a target application and are required to find and exploit a set of vulnerabilities. A critical assessment is their ability to think like an attacker and to find creative ways to bypass security controls. We also test their ability to clearly document their findings and to provide actionable remediation advice. Finally, we assess their understanding of the legal and ethical considerations of penetration testing.",
    interlink_slugs: [
      "security-engineering",
      "api-security",
    ],
  },
  jest: {
    slug: "jest",
    name: "Jest",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire Jest Experts | Nearshore Software Development",
    meta_description:
      "Ship delightful JavaScript with zero-config testing. Hire nearshore Jest experts vetted for unit, integration, and snapshot testing of your applications.",
    intro:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works out of the box for most JavaScript projects, providing a powerful and easy-to-use toolkit for writing unit, integration, and snapshot tests. You need an expert who can leverage Jest to build a comprehensive and maintainable test suite for your JavaScript applications. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of testing with Jest. We test their ability to write clean, effective tests, to use mocking and spying, and to create a fast and reliable testing workflow.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your testing setup complex and slowing down your team?",
        problem:
          "A complex testing setup with a lot of boilerplate and configuration can be a major barrier to writing tests, leading to low test coverage and a buggy application.",
        solution:
          "We vet for engineers who are experts in Jest's zero-configuration philosophy. They must demonstrate the ability to get a project up and running with a comprehensive test suite quickly and easily, enabling your team to focus on writing tests, not configuring them.",
        kpi: "Zero-Configuration and Fast Test Setup",
      },
      {
        icon: "AlertTriangle",
        pain: "Are your UI components breaking unexpectedly?",
        problem:
          "It's easy to accidentally introduce a visual regression in a complex UI component. Without a way to catch these changes automatically, they can easily slip into production.",
        solution:
          "Our engineers are proficient in Jest's snapshot testing feature. They are vetted on their ability to use snapshot tests to automatically detect unintended changes in your UI components, giving you a safety net against visual regressions.",
        kpi: "Automated Visual Regression Testing",
      },
      {
        icon: "AlertTriangle",
        pain: "Are your tests slow and running sequentially?",
        problem:
          "As your test suite grows, running tests sequentially can become a major bottleneck in your CI/CD pipeline, slowing down developer feedback and deployments.",
        solution:
          "Our experts are skilled in optimizing Jest's performance. We vet their ability to configure Jest to run tests in parallel, to use test caching, and to identify and fix slow tests, ensuring your test suite runs as fast as possible.",
        kpi: "Fast and parallel test execution"
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to get accurate code coverage reports?",
        problem:
          "Code coverage is a useful metric, but it can be misleading if not configured correctly. It's easy to have 100% coverage but still have untested logic paths in your code.",
        solution:
          "We hire engineers who have a deep understanding of code coverage metrics. They are vetted on their ability to configure Jest to generate accurate coverage reports and to analyze those reports to find gaps in their testing, not just chase a vanity metric.",
        kpi: "Accurate and meaningful code coverage analysis"
      }
    ],
    evaluation: [
      "Jest core concepts and matchers",
      "Mocking, spying, and stubbing",
      "Snapshot testing",
      "Asynchronous testing",
      "Configuration and integration with other tools (e.g., Babel, TypeScript)",
    ],
    technical_analysis:
      "The Jest evaluation focuses on building a comprehensive and maintainable JavaScript test suite. Candidates are required to write a set of tests for a given codebase, demonstrating their mastery of Jest's API. A critical assessment is their ability to use mocking and spying to isolate the code under test. We also test their understanding of snapshot testing and when it's appropriate to use it. Finally, we assess their ability to configure Jest for a complex project, including integration with TypeScript and Babel.",
    interlink_slugs: ["vitest", "react", "typescript", "qa-automation"],
  },
  vitest: {
    slug: "vitest",
    name: "Vitest",
    category: "QA & Security",
    categorySlug: "qa-security",
    seo_title: "Hire Vitest Experts | Nearshore Software Development",
    meta_description:
      "Supercharge your testing workflow with a blazing-fast, Vite-native unit test framework. Hire nearshore Vitest experts for modern JavaScript testing.",
    intro:
      "Vitest is a blazing fast unit-test framework powered by Vite. It's designed to be a modern replacement for Jest, offering a similar API but with a focus on performance and a better developer experience in a Vite-powered project. You need an expert who can leverage Vitest's speed and modern features to create a testing workflow that is both fast and enjoyable. Our vetting process, powered by Axiom Cortex™, finds engineers who are at the forefront of modern JavaScript testing. We test their ability to write clean tests, to use the latest language features, and to build a testing setup that is a joy to work with.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your test feedback loop slow and frustrating?",
        problem:
          "A slow test runner can be a major drag on productivity, forcing developers to wait for minutes to get feedback on their changes.",
        solution:
          "We vet for engineers who are experts in building a high-speed testing workflow with Vitest. They must demonstrate the ability to leverage Vitest's smart and instant Hot Module Reload (HMR) to get near-instant feedback on their tests, dramatically improving developer productivity.",
        kpi: "Blazing-Fast Test Execution",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your testing setup a complex mess of configuration files?",
        problem:
          "Configuring a testing framework to work with a modern JavaScript toolchain (like Vite, TypeScript, and JSX) can be a complex and frustrating process.",
        solution:
          "Our engineers are proficient in Vitest's seamless integration with the Vite ecosystem. They are vetted on their ability to set up a comprehensive test suite with minimal configuration, allowing your team to focus on writing tests, not on fighting with their tools.",
        kpi: "Simple and Modern Test Configuration",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your test coverage for UI components weak?",
        problem:
          "Unit testing business logic is important, but if you're not also testing how your UI components render and behave, you're missing a huge class of potential bugs.",
        solution:
          "Our experts are skilled in component testing with Vitest. We vet their ability to use the DOM testing environment to write tests for React or Vue components, ensuring that both the logic and the rendering of your UI are correct and bug-free.",
        kpi: "Robust UI component testing"
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to test TypeScript and modern JS features?",
        problem:
          "Many older test runners require complex configuration and plugins to work with modern JavaScript features like ES Modules, top-level await, and TypeScript. This adds friction to the development process.",
        solution:
          "We hire engineers who are experts in the modern JavaScript ecosystem. Vitest supports these features out of the box, and our experts are vetted on their ability to leverage them to write cleaner, more modern, and more effective tests.",
        kpi: "Seamless testing of modern TypeScript and JavaScript"
      }
    ],
    evaluation: [
      "Vitest core concepts and Jest-compatible API",
      "Integration with Vite",
      "Mocking and spying",
      "In-source testing and other modern features",
      "TypeScript and JSX support",
    ],
    technical_analysis:
      "The Vitest evaluation focuses on modern, high-performance JavaScript testing. Candidates are required to set up a test suite for a Vite-based project, demonstrating their understanding of how Vitest integrates with the broader ecosystem. A critical assessment is their ability to write tests for a modern codebase that uses TypeScript and React/Vue. We also test their knowledge of Vitest's unique features, such as in-source testing. Finally, we assess their ability to migrate an existing project from Jest to Vitest.",
    interlink_slugs: ["jest", "typescript", "vue"],
  },
};

    