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
import type { TechEntry } from ’@/data/tech’;

export const newDevopsCloud: Record<string, TechEntry> = {
  &quot;argo-cd&quot;: {
    slug: &quot;argo-cd&quot;,
    name: &quot;Argo CD&quot;,
    category: &quot;DevOps & Cloud&quot;,
    categorySlug: &quot;devops-cloud&quot;,
    seo_title: &quot;Hire Argo CD Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Implement declarative, GitOps-based continuous delivery for Kubernetes. Hire nearshore Argo CD experts vetted for their mastery of GitOps workflows and automated deployments.&quot;,
    intro:
      &quot;Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. It allows you to define your application’s desired state in Git and automatically syncs it with your cluster, providing a single source of truth and a complete audit trail. You need an expert who can implement a robust GitOps workflow with Argo CD to make your deployments faster, safer, and more reliable. Our vetting process finds engineers who are masters of cloud-native CI/CD. We test their ability to structure Git repositories, manage multi-environment promotions, and automate the entire deployment lifecycle with Argo CD.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your deployment process manual, risky, and causing configuration drift?&quot;,
        problem:
          &quot;Imperative deployment scripts and manual `kubectl apply` commands lead to inconsistent environments, a lack of auditability, and a high risk of human error. It’s impossible to know the true state of your cluster.&quot;,
        solution:
          &quot;We vet for engineers who are experts in GitOps. They must demonstrate the ability to use Argo CD to implement a fully declarative deployment process where Git is the single source of truth, eliminating configuration drift and providing a complete audit trail for every change.&quot;,
        kpi: &quot;Declarative, Auditable, and Drift-Free Deployments&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling to manage deployments across multiple clusters and environments?&quot;,
        problem:
          &quot;Promoting applications from development to staging to production across multiple Kubernetes clusters is a complex and error-prone process, often involving manual configuration changes and a high risk of misconfiguration.&quot;,
        solution:
          &quot;Our engineers are proficient in Argo CD’s multi-cluster and multi-environment capabilities. They are vetted on their ability to use features like ApplicationSets and configuration management tools (Kustomize, Helm) to automate the promotion of applications across your entire landscape in a safe and repeatable way.&quot;,
        kpi: &quot;Automated Multi-Environment Application Promotion&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is recovering from a bad deployment a slow and manual process?&quot;,
        problem:
          &quot;When a bad deployment occurs, you need to be able to roll back to a previous stable state quickly and reliably. Without a clear, automated rollback strategy, you are left scrambling to manually revert changes, leading to prolonged downtime.&quot;,
        solution:
          &quot;Our experts are masters of Argo CD’s rollback capabilities. We vet their ability to use Argo CD’s history and rollback features to instantly and safely revert an application to any previous version with a single command or click, dramatically reducing Mean Time to Recovery (MTTR).&quot;,
        kpi: &quot;Instant and reliable rollbacks&quot;
      },
       {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Do developers lack visibility into the status of their applications in Kubernetes?&quot;,
        problem:
          &quot;Developers often have no easy way to see the live state of their applications in different environments, what version is running, or whether it’s healthy. This lack of visibility creates a disconnect between development and operations.&quot;,
        solution:
          &quot;We hire engineers who can leverage Argo CD’s powerful UI and visualization features. They are experts in creating a self-service platform where developers can get a real-time view of their application’s status, sync state, and deployment history, empowering them and improving collaboration.&quot;,
        kpi: &quot;Improved developer visibility and self-service&quot;
      }
    ],
    evaluation: [
      &quot;GitOps principles and Argo CD architecture&quot;,
      &quot;Application and AppProject configuration&quot;,
      &quot;Sync strategies and automated sync policies&quot;,
      &quot;Multi-cluster and multi-environment management with ApplicationSets&quot;,
      &quot;Integration with Helm and Kustomize&quot;,
    ],
    technical_analysis:
      &quot;The Argo CD evaluation focuses on implementing a complete GitOps workflow. Candidates are required to set up Argo CD and configure it to deploy an application from a Git repository. A critical assessment is their ability to manage the application’s configuration for different environments using a tool like Kustomize or Helm. We also test their understanding of Argo CD’s health checks, sync waves, and rollback capabilities. Finally, we assess their experience in managing a large-scale Argo CD deployment with multiple clusters and teams.&quot;,
    interlink_slugs: [&quot;gitops&quot;, &quot;kubernetes&quot;, &quot;helm&quot;, &quot;ci-cd&quot;, &quot;devops-engineering&quot;],
  },
  &quot;external-secrets&quot;: {
    slug: &quot;external-secrets&quot;,
    name: &quot;External Secrets Operator&quot;,
    category: &quot;DevOps & Cloud&quot;,
    categorySlug: &quot;devops-cloud&quot;,
    seo_title: &quot;Hire External Secrets Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Securely manage Kubernetes secrets. Hire nearshore External Secrets experts vetted for integrating Kubernetes with external secret management systems like Vault or AWS Secrets Manager.&quot;,
    intro:
      &quot;The External Secrets Operator is a Kubernetes operator that integrates with external secret management systems (e.g., AWS Secrets Manager, HashiCorp Vault, Google Secret Manager). It automatically fetches secrets from these systems and injects them as native Kubernetes `Secret` objects. You need an expert who can use the External Secrets Operator to build a secure and auditable secrets management workflow for your Kubernetes applications. Our vetting process finds engineers who are masters of cloud-native security. We test their ability to deploy and configure the operator, to define `ExternalSecret` resources, and to securely manage application secrets without ever checking them into Git.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you storing Kubernetes secrets in Git?&quot;,
        problem:
          &quot;Storing base64-encoded Kubernetes `Secret` manifests in Git is a major security risk. It exposes your sensitive data to anyone with access to the repository and makes secret rotation a manual, error-prone process.&quot;,
        solution:
          &quot;We vet for engineers who are experts in secure secrets management. They must demonstrate the ability to use the External Secrets Operator to keep secrets out of Git entirely, synchronizing them directly from a secure, external secret store into the cluster at runtime.&quot;,
        kpi: &quot;Secure, Git-Free Secrets Management&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is secret rotation a painful, manual process?&quot;,
        problem:
          &quot;Manually updating and redeploying your applications every time a secret changes is a slow and risky process that often leads to teams using long-lived, static secrets.&quot;,
        solution:
          &quot;Our engineers are proficient in automating secret rotation. They are vetted on their ability to configure the External Secrets Operator to automatically poll for changes in the external secret store and to roll out updated secrets to your applications with zero downtime.&quot;,
        kpi: &quot;Automated and Zero-Downtime Secret Rotation&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is access to secrets not granular enough?&quot;,
        problem:
          &quot;If all applications in a namespace can access all secrets, it violates the principle of least privilege. A compromise of one application could lead to the compromise of all secrets.&quot;,
        solution:
          &quot;Our experts are proficient in the security model of the External Secrets Operator. We vet their ability to configure separate `SecretStore` resources and use RBAC to ensure that each application can only access the specific secrets it needs, dramatically limiting the blast radius of a potential compromise.&quot;,
        kpi: &quot;Least-privilege access control for secrets&quot;
      },
       {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling to provide secrets to non-Kubernetes applications?&quot;,
        problem:
          &quot;Managing secrets consistently for applications running both inside and outside of Kubernetes is a major challenge. This often leads to having two separate secret management systems and processes, which is inefficient and increases security risk.&quot;,
        solution:
          &quot;We hire engineers who think about the entire secrets ecosystem. By using an external secrets manager as the source of truth, they ensure a consistent and centralized way to manage secrets for all applications, whether they are running on Kubernetes, VMs, or serverless platforms.&quot;,
        kpi: &quot;A unified secrets management strategy for all applications&quot;
      }
    ],
    evaluation: [
      &quot;External Secrets Operator architecture and core concepts&quot;,
      &quot;Configuration of `SecretStore` and `ExternalSecret` resources&quot;,
      &quot;Integration with various backend secret providers (Vault, AWS/GCP/Azure)&quot;,
      &quot;Secret rotation and synchronization strategies&quot;,
      &quot;RBAC and security best practices&quot;,
    ],
    technical_analysis:
      &quot;The External Secrets Operator evaluation focuses on secure, automated secrets management in Kubernetes. Candidates are required to deploy the operator and configure it to sync a secret from an external provider (like AWS Secrets Manager) into a Kubernetes `Secret`. A critical assessment is their understanding of the security model and how to configure IAM roles or other authentication methods to grant the operator least-privilege access to the secret store. We also test their knowledge of different synchronization strategies and how to handle secret rotation. Finally, we assess their experience in using External Secrets as part of a secure GitOps workflow.&quot;,
    interlink_slugs: [&quot;kubernetes&quot;, &quot;vault&quot;, &quot;aws&quot;, &quot;gcp&quot;, &quot;security-engineering&quot;],
  },
  &quot;github-actions&quot;: {
    slug: &quot;github-actions&quot;,
    name: &quot;GitHub Actions&quot;,
    category: &quot;DevOps & Cloud&quot;,
    categorySlug: &quot;devops-cloud&quot;,
    seo_title: &quot;Hire GitHub Actions Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Automate your workflows directly in GitHub. Hire nearshore GitHub Actions experts vetted for building complex CI/CD pipelines, custom actions, and secure workflows.&quot;,
    intro:
      &quot;GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. You need an expert who can leverage GitHub Actions to create powerful, flexible, and secure automation pipelines that are deeply integrated with your development process. Our vetting process finds engineers who are masters of workflow automation. We test their ability to design complex CI/CD pipelines, write custom actions, and manage secrets and environments securely.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your CI/CD system a separate, disconnected tool?&quot;,
        problem:
          &quot;Using a third-party CI/CD tool adds complexity, cost, and another system to manage. It creates a disjointed experience for developers who have to switch between tools to see the status of their builds and deployments.&quot;,
        solution:
          &quot;We vet for engineers who are experts in building integrated developer experiences. They must demonstrate the ability to use GitHub Actions to build a complete CI/CD pipeline directly within GitHub, providing a seamless experience where developers can see everything from code to deployment in one place.&quot;,
        kpi: &quot;Natively Integrated CI/CD in GitHub&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are your workflows difficult to reuse and maintain?&quot;,
        problem:
          &quot;Copy-pasting YAML between different repositories is a recipe for disaster, leading to inconsistent, out-of-date, and difficult-to-maintain automation.&quot;,
        solution:
          &quot;Our engineers are proficient in creating reusable workflows and composite actions. They are vetted on their ability to build a library of shared, version-controlled actions that can be used across your entire organization, ensuring consistency and maintainability.&quot;,
        kpi: &quot;Reusable and Maintainable Workflows&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your pipeline security a black box?&quot;,
        problem:
          &quot;Giving your CI/CD pipeline broad permissions to access cloud resources and production secrets is a massive security risk. It’s often difficult to enforce least-privilege access or get a clear audit trail of what the pipeline is doing.&quot;,
        solution:
          &quot;Our experts are masters of GitHub Actions security. We vet their ability to use OpenID Connect (OIDC) for passwordless authentication to cloud providers and to use environments with required reviewers to protect production deployments, creating a secure and auditable CI/CD process.&quot;,
        kpi: &quot;Secure, passwordless deployments with OIDC&quot;
      },
       {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are your build and test times slowing down your team?&quot;,
        problem:
          &quot;As your project grows, your test suite can become a major bottleneck, forcing developers to wait for long periods to get feedback. Slow pipelines lead to developer frustration and reduced productivity.&quot;,
        solution:
          &quot;We hire engineers who are experts in GitHub Actions performance optimization. They are vetted on their ability to use caching for dependencies, matrix builds for parallelization, and to select the right runner size to dramatically reduce pipeline execution time.&quot;,
        kpi: &quot;Faster feedback loops with optimized pipelines&quot;
      }
    ],
    evaluation: [
      &quot;GitHub Actions workflow syntax (jobs, steps, triggers)&quot;,
      &quot;Using and creating custom actions&quot;,
      &quot;Reusable workflows and composite actions&quot;,
      &quot;Managing secrets and environments&quot;,
      &quot;Matrix builds and advanced strategies&quot;,
    ],
    technical_analysis:
      &quot;The GitHub Actions evaluation focuses on building complex and secure CI/CD pipelines. Candidates are required to create a multi-stage pipeline for a given application, demonstrating their mastery of the workflow syntax. A critical assessment is their ability to create a reusable composite action to encapsulate a common task. We also test their knowledge of how to manage secrets securely and how to use environments to control deployments. Finally, we assess their experience with more advanced features like matrix builds for parallel testing.&quot;,
    interlink_slugs: [&quot;ci-cd&quot;, &quot;devops-engineering&quot;, &quot;docker&quot;],
  },
  &quot;gitlab-ci&quot;: {
    slug: &quot;gitlab-ci&quot;,
    name: &quot;GitLab CI/CD&quot;,
    category: &quot;DevOps & Cloud&quot;,
    categorySlug: &quot;devops-cloud&quot;,
    seo_title: &quot;Hire GitLab CI/CD Experts | Nearshore Software Development&quot;,
    meta_description:
      &quot;Build a single application for the entire DevOps lifecycle. Hire nearshore GitLab CI/CD experts vetted for pipeline design, security scanning, and advanced deployment strategies.&quot;,
    intro:
      &quot;GitLab is a single application for the entire DevOps lifecycle. From project planning and source code management to CI/CD and monitoring, GitLab provides a complete, integrated platform. You need an expert who can leverage the full power of GitLab CI/CD to build fast, secure, and compliant software delivery pipelines. Our vetting process finds engineers who are masters of the GitLab platform. We test their ability to design complex pipelines, use built-in security scanning (Auto DevOps), and manage deployments to various environments.&quot;,
    pains: [
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you stitching together a complex and costly toolchain for DevOps?&quot;,
        problem:
          &quot;Managing a collection of disparate tools for source control, CI/CD, security scanning, and artifact management is complex, expensive, and creates a fragmented developer experience.&quot;,
        solution:
          &quot;We vet for engineers who are experts in leveraging GitLab as a single, unified DevOps platform. They must demonstrate the ability to use GitLab’s built-in features to create a complete software delivery lifecycle, reducing toolchain complexity and cost.&quot;,
        kpi: &quot;A Unified and Integrated DevOps Platform&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Is your CI/CD pipeline unaware of security and compliance?&quot;,
        problem:
          &quot;A pipeline that only builds and tests code is a security blind spot. It allows vulnerabilities and license compliance issues to slip into production, creating significant risk for your business.&quot;,
        solution:
          &quot;Our engineers are proficient in GitLab’s built-in security and compliance features (DevSecOps). They are vetted on their ability to integrate SAST, DAST, dependency scanning, and license scanning directly into the CI/CD pipeline, providing a comprehensive security and compliance gate.&quot;,
        kpi: &quot;Integrated Security and Compliance Scanning&quot;,
      },
      {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are your pipeline configurations duplicated across many projects?&quot;,
        problem:
          &quot;Copying and pasting `.gitlab-ci.yml` configurations across dozens of repositories is inefficient and leads to inconsistencies. When a change is needed, it has to be manually applied everywhere, which is a maintenance nightmare.&quot;,
        solution:
          &quot;Our experts are masters of GitLab’s CI/CD templating and inheritance features. We vet their ability to use `include` and `extends` to create a centralized library of reusable pipeline configurations, ensuring consistency and easy maintenance across the entire organization.&quot;,
        kpi: &quot;Reusable and maintainable pipelines with CI/CD templates&quot;
      },
       {
        icon: &quot;AlertTriangle&quot;,
        pain: &quot;Are you struggling to manage complex deployment workflows?&quot;,
        problem:
          &quot;Simple linear deployments are not sufficient for complex applications. You need to be able to run jobs in parallel, create dynamic pipelines based on code changes, and control the flow of your deployments with manual approvals.&quot;,
        solution:
          &quot;We hire engineers who are experts in GitLab’s advanced pipeline features. They are vetted on their ability to use Directed Acyclic Graphs (DAG), parent-child pipelines, and manual jobs to build sophisticated deployment workflows that match your exact business requirements.&quot;,
        kpi: &quot;Sophisticated and flexible deployment workflows&quot;
      }
    ],
    evaluation: [
      &quot;`.gitlab-ci.yml` syntax (stages, jobs, variables)&quot;,
      &quot;GitLab Runners and executors&quot;,
      &quot;Built-in security scanning (SAST, DAST, etc.)&quot;,
      &quot;Environments and deployment strategies&quot;,
      &quot;CI/CD templates and parent-child pipelines&quot;,
    ],
    technical_analysis:
      &quot;The GitLab CI/CD evaluation focuses on leveraging the full power of the GitLab platform. Candidates are required to build a complex, multi-stage pipeline, demonstrating their mastery of the `.gitlab-ci.yml` syntax. A critical assessment is their ability to integrate GitLab’s built-in security scanning tools into the pipeline. We also test their knowledge of how to use GitLab environments and deployment features to manage releases. Finally, we assess their experience with advanced features like parent-child pipelines for building complex, dynamic workflows.&quot;,
    interlink_slugs: [&quot;ci-cd&quot;, &quot;devops-engineering&quot;, &quot;kubernetes&quot;, &quot;docker&quot;],
  },
};

    
