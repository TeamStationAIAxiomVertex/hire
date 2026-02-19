
/** @Spec
 * Feature: New Page Verifier
 * Type: script
 * Route: /src/scripts/verify-new-pages.ts
 * Description: Verifies that all recently added technology pages are correctly loaded into the data model.
 * Acceptance:
 *  - ✅ Compiles without TypeScript errors.
 *  - ✅ Lints and formats cleanly.
 *  - ✅ Checks for all 23 missing slugs.
 *  - ✅ Exits with an error if any slug is not found.
 */

import { getTechBySlug } from '../lib/dataModel';

const slugsToVerify = [
  'argo-cd',
  'django',
  'dotnet',
  'ef-core',
  'external-secrets',
  'fastapi',
  'fastify',
  'fiber',
  'github-actions',
  'gitlab-ci',
  'golang',
  'hibernate',
  'kafka',
  'laravel',
  'memcached',
  'nats',
  'nestjs',
  'prisma',
  'rabbitmq',
  'spring-boot',
  'sqlalchemy',
  'symfony',
  'typeorm',
];

function main() {
  console.log('🚀 Running verification for newly added pages...');
  const missingPages: string[] = [];
  let successCount = 0;

  for (const slug of slugsToVerify) {
    const tech = getTechBySlug(slug);
    if (tech && tech.slug) {
      console.log(`✅ [SUCCESS] Found page for: /hire/${slug}`);
      successCount++;
    } else {
      console.error(`❌ [FAILURE] Could not find page for: /hire/${slug}`);
      missingPages.push(slug);
    }
  }

  console.log('\n--- Verification Summary ---');
  console.log(`✅ Successfully verified ${successCount} out of ${slugsToVerify.length} pages.`);

  if (missingPages.length > 0) {
    console.error(`\n❌ The following ${missingPages.length} pages are still missing from the data model:`);
    missingPages.forEach(slug => console.error(`  - ${slug}`));
    console.error('\nVerification failed. Please check the data model imports.');
    process.exit(1);
  }

  console.log('\n✅ All new pages are correctly connected and will render.');
}

main();
