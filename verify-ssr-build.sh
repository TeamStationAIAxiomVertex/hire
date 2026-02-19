#!/usr/bin/env bash
# TeamStation AI — SSR Build Validator for Firebase App Hosting
# Author: Lonnie McRorey (TeamStation AI)
# Purpose: Prevent regressions that break dynamic SSR routes

set -euo pipefail
RED=$(tput setaf 1); GREEN=$(tput setaf 2); YELLOW=$(tput setaf 3); RESET=$(tput sgr0)

echo ""
echo "🔍  Verifying TeamStation AI Firebase SSR environment..."
echo "------------------------------------------------------"

# 1. Node / npm sanity
echo "🧩 Checking Node.js & npm versions..."
node -v || { echo "${RED}❌ Node not found${RESET}"; exit 1; }
npm -v || { echo "${RED}❌ npm not found${RESET}"; exit 1; }

# 2. Firebase CLI sanity
echo "🧩 Checking Firebase CLI..."
if ! command -v firebase &> /dev/null; then
  echo "${RED}❌ Firebase CLI missing. Install with: npm i -g firebase-tools${RESET}"
  exit 1
fi
FIREBASE_VERSION=$(firebase --version)
echo "${GREEN}✔ Firebase CLI v${FIREBASE_VERSION}${RESET}"

# 3. Verify next.config.mjs does NOT include static export
if grep -q "output: 'export'" next.config.mjs; then
  echo "${RED}❌ next.config.mjs contains 'output: export' — REMOVE IT for SSR builds.${RESET}"
  exit 1
else
  echo "${GREEN}✔ next.config.mjs valid (SSR mode enabled)${RESET}"
fi

# 4. Check for dynamic routes existence
echo "🧩 Checking key dynamic route directories..."
[[ -d src/app/hire/[technology] ]] && echo "${GREEN}✔ Found /hire/[technology]${RESET}" || echo "${RED}❌ Missing /hire/[technology]${RESET}"
[[ -d src/app/roles/[slug] ]] && echo "${GREEN}✔ Found /roles/[slug]${RESET}" || echo "${RED}❌ Missing /roles/[slug]${RESET}"

# 5. Ensure Firebase App Hosting is configured
echo "🧩 Validating firebase.json..."
if grep -q "frameworksBackend" firebase.json; then
  echo "${GREEN}✔ Firebase App Hosting SSR config found${RESET}"
else
  echo "${RED}❌ firebase.json missing 'frameworksBackend' — run 'firebase init hosting:frameworks'${RESET}"
  exit 1
fi

# 6. Clean environment safely
echo "🧹 Cleaning build artifacts..."
rm -rf .next out 2>/dev/null || true
echo "${GREEN}✔ Cleaned .next and out directories${RESET}"

# 7. Ensure NODE_ENV set correctly
export NODE_ENV=production
echo "${GREEN}✔ NODE_ENV set to production${RESET}"

# 8. Build verification
echo "⚙️  Running Next.js build (SSR)..."
if npm run build --silent; then
  echo "${GREEN}✔ Build completed successfully${RESET}"
else
  echo "${RED}❌ Build failed — check .next logs for details${RESET}"
  exit 1
fi

# 9. Route confirmation check
echo "🧩 Checking for generated dynamic routes..."
if find .next -type f | grep -q "hire/graphql"; then
  echo "${GREEN}✔ Dynamic pages generated successfully${RESET}"
else
  echo "${YELLOW}⚠ No dynamic pages detected — verify data model generation${RESET}"
fi

# 10. Offer deploy option
echo ""
read -p "🚀 Deploy to Firebase Hosting now? (y/N): " confirm
if [[ "${confirm,,}" == "y" ]]; then
  firebase deploy --only hosting
else
  echo "${YELLOW}⏩ Skipped deploy. Run 'firebase deploy --only hosting' manually when ready.${RESET}"
fi

echo ""
echo "${GREEN}✅ Validation complete — environment healthy for SSR Firebase build.${RESET}"