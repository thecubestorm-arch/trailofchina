#!/usr/bin/env bash
set -euo pipefail

# Dry-run script for pruning archived pages
# Reads prune-plan-draft.csv and prints what would be removed
# DOES NOT ACTUALLY DELETE ANYTHING

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CSV_FILE="$SCRIPT_DIR/docs/prune-plan-draft.csv"

while IFS=',' read -r url decision redirect_target reason; do
    # Skip header line
    if [ "$url" = "url" ]; then
        continue
    fi

    # Skip empty lines
    if [ -z "$url" ]; then
        continue
    fi

    if [ "$decision" = "ARCHIVE" ]; then
        # Convert URL path to app file path
        if [ "$url" = "/" ]; then
            app_path="app/page.tsx"
        else
            app_path="app${url}/page.tsx"
        fi
        echo "Would remove: $app_path → redirect to $redirect_target"
    fi
done < "$CSV_FILE"
