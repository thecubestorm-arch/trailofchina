#!/usr/bin/env bash
set -euo pipefail

cd /data/.openclaw/workspace/trailofchina

# Create _archive directory
mkdir -p _archive

# Parse CSV and move archive pages
# Format: url,decision,redirect_target,reason
tail -n +2 docs/prune-plan-final.csv | while IFS= read -r line; do
    # Skip empty lines
    [[ -z "$line" ]] && continue
    
    # Parse CSV fields
    url=$(echo "$line" | awk -F',' '{print $1}')
    decision=$(echo "$line" | awk -F',' '{print $2}')
    
    [[ "$decision" != "ARCHIVE" ]] && continue
    
    # Skip root pages (shouldn't be archived)
    [[ "$url" == "/" ]] && continue
    
    # Build source path from URL
    # URL like /destinations/beijing/what-to-do/forbidden-city -> app/destinations/beijing/what-to-do/forbidden-city
    src_dir="app${url}"
    
    # Destination in _archive
    dest_dir="_archive${url}"
    
    # Check if source exists
    if [[ -d "$src_dir" ]]; then
        echo "ARCHIVING: $src_dir -> $dest_dir"
        
        # Create destination directory
        mkdir -p "$(dirname "$dest_dir")"
        
        # Move the directory
        mv "$src_dir" "$dest_dir"
        
        # Remove original
        # Already moved, but clean up parent if empty
        parent="$(dirname "$src_dir")"
        # Don't remove if it still has page.tsx (hub pages kept)
        if [[ -d "$parent" ]]; then
            # Check if directory is now empty
            if [[ -z "$(ls -A "$parent" 2>/dev/null)" ]]; then
                echo "  Removing empty parent: $parent"
                rmdir "$parent" 2>/dev/null || true
            fi
        fi
    else
        echo "MISSING: $src_dir (URL: $url)"
    fi
done

echo "Done archiving."
