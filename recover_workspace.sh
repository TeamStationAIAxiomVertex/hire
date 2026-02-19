#!/bin/bash
# @Spec
# Feature: ADA-Safe Workspace Recovery
# Type: script
# Route: ./recover_workspace.sh
# Description: Archives the current workspace and provides instructions for a clean restore.
# Acceptance:
#   - ✅ Does NOT modify application source code.
#   - ✅ Creates a non-destructive archive.
#   - ✅ Provides clear, actionable recovery steps.

set -e

echo "🚀 Starting TeamStation AI safe recovery..."
BACKUP_NAME="teamstation-ai-full-$(date +%Y%m%d-%H%M%S).tar.gz"

# ✅ Ensure workspace root
cd ~/studio || cd /workspace || true

# ✅ Clean caches safely (no source removal)
rm -rf .next/cache 2>/dev/null || true
rm -rf node_modules/.cache 2>/dev/null || true

# ✅ Create backup without build clutter
tar --exclude=node_modules --exclude=.next --exclude=.git -czvf "$BACKUP_NAME" .

# ✅ Verify backup integrity
if tar -tzf "$BACKUP_NAME" > /dev/null; then
  echo "✅ Verified backup: $BACKUP_NAME"
  echo "⚡ You can now right-click $BACKUP_NAME in the Explorer and select Download."
  echo "📁 After downloading, go to https://studio.firebase.google.com/new to import it into a fresh workspace."
else
  echo "❌ Backup failed integrity check — please rerun this script."
fi
