/** @Spec
* Feature: Technology Data Source - New DevOps & Cloud
* Type: lib
* Route: /src/lib/data/new-devops-cloud.ts
* Description: Central data source for new DevOps & Cloud specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const newDevopsCloud: Record<string, TechEntry> = {
  "argo-cd": {
    slug: "argo-cd",
    name: "Argo CD",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire Argo CD Experts | Nearshore Software Development",
    meta_description:
      "Implement declarative, GitOps-based continuous delivery for Kubernetes. Hire nearshore Argo CD experts vetted for their mastery of GitOps workflows and automated deployments.",
    intro:
      "Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. It allows you to define your application's desired state in Git and automatically syncs it with your cluster, providing a single source of truth and a complete audit trail. You need an expert who can implement a robust GitOps workflow with Argo CD to make your deployments faster, safer, and more reliable. Our vetting process finds engineers who are masters of cloud-native CI/CD. We test their ability to structure Git repositories, manage multi-environment promotions, and automate the entire deployment lifecycle with Argo CD.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your deployment process manual, risky, and causing configuration drift?",
        problem:
          "Imperative deployment scripts and manual `kubectl apply` commands lead to inconsistent environments, a lack of auditability, and a high risk of human error. It's impossible to know the true state of your cluster.",
        solution:
          "We vet for engineers who are experts in GitOps. They must demonstrate the ability to use Argo CD to implement a fully declarative deployment process where Git is the single source of truth, eliminating configuration drift and providing a complete audit trail for every change.",
        kpi: "Declarative, Auditable, and Drift-Free Deployments",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to manage deployments across multiple clusters and environments?",
        problem:
          "Promoting applications from development to staging to production across multiple Kubernetes clusters is a complex and error-prone process, often involving manual configuration changes and a high risk of misconfiguration.",
        solution:
          "Our engineers are proficient in Argo CD's multi-cluster and multi-environment capabilities. They are vetted on their ability to use features like ApplicationSets and configuration management tools (Kustomize, Helm) to automate the promotion of applications across your entire landscape in a safe and repeatable way.",
        kpi: "Automated Multi-Environment Application Promotion",
      },
    ],
    evaluation: [
      "GitOps principles and Argo CD architecture",
      "Application and AppProject configuration",
      "Sync strategies and automated sync policies",
      "Multi-cluster and multi-environment management with ApplicationSets",
      "Integration with Helm and Kustomize",
    ],
    technical_analysis:
      "The Argo CD evaluation focuses on implementing a complete GitOps workflow. Candidates are required to set up Argo CD and configure it to deploy an application from a Git repository. A critical assessment is their ability to manage the application's configuration for different environments using a tool like Kustomize or Helm. We also test their understanding of Argo CD's health checks, sync waves, and rollback capabilities. Finally, we assess their experience in managing a large-scale Argo CD deployment with multiple clusters and teams.",
    interlink_slugs: ["gitops", "kubernetes", "helm", "ci-cd", "devops-engineering"],
  },
  "external-secrets": {
    slug: "external-secrets",
    name: "External Secrets Operator",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire External Secrets Experts | Nearshore Software Development",
    meta_description:
      "Securely manage Kubernetes secrets. Hire nearshore External Secrets experts vetted for integrating Kubernetes with external secret management systems like Vault or AWS Secrets Manager.",
    intro:
      "The External Secrets Operator is a Kubernetes operator that integrates with external secret management systems (e.g., AWS Secrets Manager, HashiCorp Vault, Google Secret Manager). It automatically fetches secrets from these systems and injects them as native Kubernetes `Secret` objects. You need an expert who can use the External Secrets Operator to build a secure and auditable secrets management workflow for your Kubernetes applications. Our vetting process finds engineers who are masters of cloud-native security. We test their ability to deploy and configure the operator, to define `ExternalSecret` resources, and to securely manage application secrets without ever checking them into Git.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are you storing Kubernetes secrets in Git?",
        problem:
          "Storing base64-encoded Kubernetes `Secret` manifests in Git is a major security risk. It exposes your sensitive data to anyone with access to the repository and makes secret rotation a manual, error-prone process.",
        solution:
          "We vet for engineers who are experts in secure secrets management. They must demonstrate the ability to use the External Secrets Operator to keep secrets out of Git entirely, synchronizing them directly from a secure, external secret store into the cluster at runtime.",
        kpi: "Secure, Git-Free Secrets Management",
      },
      {
        icon: "AlertTriangle",
        pain: "Is secret rotation a painful, manual process?",
        problem:
          "Manually updating and redeploying your applications every time a secret changes is a slow and risky process that often leads to teams using long-lived, static secrets.",
        solution:
          "Our engineers are proficient in automating secret rotation. They are vetted on their ability to configure the External Secrets Operator to automatically poll for changes in the external secret store and to roll out updated secrets to your applications with zero downtime.",
        kpi: "Automated and Zero-Downtime Secret Rotation",
      },
    ],
    evaluation: [
      "External Secrets Operator architecture and core concepts",
      "Configuration of `SecretStore` and `ExternalSecret` resources",
      "Integration with various backend secret providers (Vault, AWS/GCP/Azure)",
      "Secret rotation and synchronization strategies",
      "RBAC and security best practices",
    ],
    technical_analysis:
      "The External Secrets Operator evaluation focuses on secure, automated secrets management in Kubernetes. Candidates are required to deploy the operator and configure it to sync a secret from an external provider (like AWS Secrets Manager) into a Kubernetes `Secret`. A critical assessment is their understanding of the security model and how to configure IAM roles or other authentication methods to grant the operator least-privilege access to the secret store. We also test their knowledge of different synchronization strategies and how to handle secret rotation. Finally, we assess their experience in using External Secrets as part of a secure GitOps workflow.",
    interlink_slugs: ["kubernetes", "vault", "aws", "gcp", "security-engineering"],
  },
  "github-actions": {
    slug: "github-actions",
    name: "GitHub Actions",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire GitHub Actions Experts | Nearshore Software Development",
    meta_description:
      "Automate your workflows directly in GitHub. Hire nearshore GitHub Actions experts vetted for building complex CI/CD pipelines, custom actions, and secure workflows.",
    intro:
      "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. You need an expert who can leverage GitHub Actions to create powerful, flexible, and secure automation pipelines that are deeply integrated with your development process. Our vetting process finds engineers who are masters of workflow automation. We test their ability to design complex CI/CD pipelines, write custom actions, and manage secrets and environments securely.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your CI/CD system a separate, disconnected tool?",
        problem:
          "Using a third-party CI/CD tool adds complexity, cost, and another system to manage. It creates a disjointed experience for developers who have to switch between tools to see the status of their builds and deployments.",
        solution:
          "We vet for engineers who are experts in building integrated developer experiences. They must demonstrate the ability to use GitHub Actions to build a complete CI/CD pipeline directly within GitHub, providing a seamless experience where developers can see everything from code to deployment in one place.",
        kpi: "Natively Integrated CI/CD in GitHub",
      },
      {
        icon: "AlertTriangle",
        pain: "Are your workflows difficult to reuse and maintain?",
        problem:
          "Copy-pasting YAML between different repositories is a recipe for disaster, leading to inconsistent, out-of-date, and difficult-to-maintain automation.",
        solution:
          "Our engineers are proficient in creating reusable workflows and composite actions. They are vetted on their ability to build a library of shared, version-controlled actions that can be used across your entire organization, ensuring consistency and maintainability.",
        kpi: "Reusable and Maintainable Workflows",
      },
    ],
    evaluation: [
      "GitHub Actions workflow syntax (jobs, steps, triggers)",
      "Using and creating custom actions",
      "Reusable workflows and composite actions",
      "Managing secrets and environments",
      "Matrix builds and advanced strategies",
    ],
    technical_analysis:
      "The GitHub Actions evaluation focuses on building complex and secure CI/CD pipelines. Candidates are required to create a multi-stage pipeline for a given application, demonstrating their mastery of the workflow syntax. A critical assessment is their ability to create a reusable composite action to encapsulate a common task. We also test their knowledge of how to manage secrets securely and how to use environments to control deployments. Finally, we assess their experience with more advanced features like matrix builds for parallel testing.",
    interlink_slugs: ["ci-cd", "devops-engineering", "docker"],
  },
  "gitlab-ci": {
    slug: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire GitLab CI/CD Experts | Nearshore Software Development",
    meta_description:
      "Build a single application for the entire DevOps lifecycle. Hire nearshore GitLab CI/CD experts vetted for pipeline design, security scanning, and advanced deployment strategies.",
    intro:
      "GitLab is a single application for the entire DevOps lifecycle. From project planning and source code management to CI/CD and monitoring, GitLab provides a complete, integrated platform. You need an expert who can leverage the full power of GitLab CI/CD to build fast, secure, and compliant software delivery pipelines. Our vetting process finds engineers who are masters of the GitLab platform. We test their ability to design complex pipelines, use built-in security scanning (Auto DevOps), and manage deployments to various environments.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Are you stitching together a complex and costly toolchain for DevOps?",
        problem:
          "Managing a collection of disparate tools for source control, CI/CD, security scanning, and artifact management is complex, expensive, and creates a fragmented developer experience.",
        solution:
          "We vet for engineers who are experts in leveraging GitLab as a single, unified DevOps platform. They must demonstrate the ability to use GitLab's built-in features to create a complete software delivery lifecycle, reducing toolchain complexity and cost.",
        kpi: "A Unified and Integrated DevOps Platform",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your CI/CD pipeline unaware of security and compliance?",
        problem:
          "A pipeline that only builds and tests code is a security blind spot. It allows vulnerabilities and license compliance issues to slip into production, creating significant risk for your business.",
        solution:
          "Our engineers are proficient in GitLab's built-in security and compliance features (DevSecOps). They are vetted on their ability to integrate SAST, DAST, dependency scanning, and license scanning directly into the CI/CD pipeline, providing a comprehensive security and compliance gate.",
        kpi: "Integrated Security and Compliance Scanning",
      },
    ],
    evaluation: [
      "`.gitlab-ci.yml` syntax (stages, jobs, variables)",
      "GitLab Runners and executors",
      "Built-in security scanning (SAST, DAST, etc.)",
      "Environments and deployment strategies",
      "CI/CD templates and parent-child pipelines",
    ],
    technical_analysis:
      "The GitLab CI/CD evaluation focuses on leveraging the full power of the GitLab platform. Candidates are required to build a complex, multi-stage pipeline, demonstrating their mastery of the `.gitlab-ci.yml` syntax. A critical assessment is their ability to integrate GitLab's built-in security scanning tools into the pipeline. We also test their knowledge of how to use GitLab environments and deployment features to manage releases. Finally, we assess their experience with advanced features like parent-child pipelines for building complex, dynamic workflows.",
    interlink_slugs: ["ci-cd", "devops-engineering", "kubernetes", "docker"],
  },
};

    