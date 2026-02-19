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
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/lib/data");

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
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const patch of patches) {
    const { techSlug, linksToAdd } = patch;
    // Regex to find the interlink_slugs array for a specific technology slug, allowing for multi-line arrays.
    const regex = new RegExp(
      `("${techSlug}":\s*\{[\s\S]*?"interlink_slugs":\s*\[)([\s\S]*?)(\])`,
    );

    const match = content.match(regex);

    if (match) {
      const existingLinksRaw = match[2] || "";
      const existingLinks = existingLinksRaw
        .split(",")
        .map((s) => s.trim().replace(/"/g, ""))
        .filter(Boolean);
      const linksSet = new Set([...existingLinks, ...linksToAdd]);

      if (linksSet.size > existingLinks.length) {
        const newLinksRaw =
          "\n          " +
          Array.from(linksSet)
            .map((s) => `"${s}"`)
            .join(",\n          ") +
          "\n        ";
        content = content.replace(
          regex,
          `${match[1]}${newLinksRaw}${match[3]}`,
        );
        console.log(
          `  ✅ Added ${linksSet.size - existingLinks.length} link(s) to '${techSlug}'.`,
        );
        changed = true;
      } else {
        console.log(`  - Links for '${techSlug}' are already sufficient.`);
      }
    } else {
      console.warn(
        `  ⚠️ Could not find interlink_slugs for '${techSlug}' in this file.`,
      );
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`💾 Saved changes to ${path.basename(filePath)}.`);
  } else {
    console.log(`- No changes needed for ${path.basename(filePath)}.`);
  }
}

function main() {
  console.log("🚀 Running automatic interlink repair script...");

  // As per the navmesh report, patch react-native and flutter in mobile.ts
  patchFile(path.join(DATA_DIR, "mobile.ts"), [
    {
      techSlug: "react-native",
      linksToAdd: ["flutter", "mobile", "typescript", "frontend-web"],
    },
    {
      techSlug: "flutter",
      linksToAdd: ["react-native", "mobile", "typescript", "qa-automation"],
    },
  ]);

  console.log("\n✅ Interlink repair script finished.");
}

main();
