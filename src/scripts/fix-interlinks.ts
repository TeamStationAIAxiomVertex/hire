/** @Spec

Feature: [Feature Name]
Type: [page|component|script|lib]
Route: [Exact Route]
Description: [Concise summary]
Acceptance:
✅ Compiles without TypeScript errors
✅ Lints and formats cleanly
✅ ≥6 verified internal links
✅ Valid canonical + JSON-LD schema
✅ Included in sitemap.xml */
/**
 * @Spec
 * Feature: Automatic Interlink Fixer
 * Type: script
 * Route: /src/scripts/fix-interlinks.ts
 * Description: Automatically adds missing interlinks to known failing pages to ensure NavMesh compliance.
 */
import fs from &quot;fs&quot;;
import path from &quot;path&quot;;

const DATA_DIR = path.join(process.cwd(), &quot;src/lib/data&quot;);

// Function to read a file, apply a regex replacement, and write it back.
function patchFile(
  filePath: string,
  patches: { techSlug: string; linksToAdd: string[] }[],
) {
  if (!fs.existsSync(filePath)) {
    console.warn(`- File not found: ${filePath}. Skipping.`);
    return;
  }

  console.log(`\n🔍 Patching ${path.basename(filePath)}...`);
  let content = fs.readFileSync(filePath, &quot;utf8&quot;);
  let changed = false;

  for (const patch of patches) {
    const { techSlug, linksToAdd } = patch;
    // Regex to find the interlink_slugs array for a specific technology slug, allowing for multi-line arrays.
    const regex = new RegExp(
      `(&quot;${techSlug}&quot;:\s*\{[\s\S]*?&quot;interlink_slugs&quot;:\s*\[)([\s\S]*?)(\])`,
    );

    const match = content.match(regex);

    if (match) {
      const existingLinksRaw = match[2] || &quot;&quot;;
      const existingLinks = existingLinksRaw
        .split(&quot;,&quot;)
        .map((s) => s.trim().replace(/&quot;/g, &quot;&quot;))
        .filter(Boolean);
      const linksSet = new Set([...existingLinks, ...linksToAdd]);

      if (linksSet.size > existingLinks.length) {
        const newLinksRaw =
          &quot;\n          &quot; +
          Array.from(linksSet)
            .map((s) => `&quot;${s}&quot;`)
            .join(&quot;,\n          &quot;) +
          &quot;\n        &quot;;
        content = content.replace(
          regex,
          `${match[1]}${newLinksRaw}${match[3]}`,
        );
        console.log(
          `  ✅ Added ${linksSet.size - existingLinks.length} link(s) to 'apos;${techSlug}'apos;.`,
        );
        changed = true;
      } else {
        console.log(`  - Links for 'apos;${techSlug}'apos; are already sufficient.`);
      }
    } else {
      console.warn(
        `  ⚠️ Could not find interlink_slugs for 'apos;${techSlug}'apos; in this file.`,
      );
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, &quot;utf8&quot;);
    console.log(`💾 Saved changes to ${path.basename(filePath)}.`);
  } else {
    console.log(`- No changes needed for ${path.basename(filePath)}.`);
  }
}

function main() {
  console.log(&quot;🚀 Running automatic interlink repair script...&quot;);

  // As per the navmesh report, patch react-native and flutter in mobile.ts
  patchFile(path.join(DATA_DIR, &quot;mobile.ts&quot;), [
    {
      techSlug: &quot;react-native&quot;,
      linksToAdd: [&quot;flutter&quot;, &quot;mobile&quot;, &quot;typescript&quot;, &quot;frontend-web&quot;],
    },
    {
      techSlug: &quot;flutter&quot;,
      linksToAdd: [&quot;react-native&quot;, &quot;mobile&quot;, &quot;typescript&quot;, &quot;qa-automation&quot;],
    },
  ]);

  console.log(&quot;\n✅ Interlink repair script finished.&quot;);
}

main();
