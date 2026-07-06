#!/usr/bin/env python3
"""Archive pages marked ARCHIVE in prune-plan-final.csv"""

import csv
import os
import shutil
from pathlib import Path

BASE = Path('/data/.openclaw/workspace/trailofchina')
APP = BASE / 'app'
ARCHIVE = BASE / '_archive'

# Read CSV
archive_urls = set()
keep_urls = set()
redirect_targets = {}

with open(BASE / 'docs' / 'prune-plan-final.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        url = row['url'].strip()
        decision = row['decision'].strip()
        target = row.get('redirect_target', '').strip()
        if decision == 'ARCHIVE':
            archive_urls.add(url)
            if target:
                redirect_targets[url] = target
        elif decision == 'KEEP':
            keep_urls.add(url)

print(f"Archive URLs: {len(archive_urls)}")
print(f"Keep URLs: {len(keep_urls)}")

def url_to_dir(url):
    """Convert URL path to app directory path"""
    return APP / url.lstrip('/')

def get_all_children(url):
    """Get all child URLs (prefix match)"""
    children = set()
    for u in archive_urls | keep_urls:
        if u.startswith(url + '/') and u != url:
            children.add(u)
    return children

def get_kept_children_dirs(url):
    """Get kept child directories under a URL"""
    kept_dirs = []
    dir_path = url_to_dir(url)
    if not dir_path.exists():
        return kept_dirs
    for item in dir_path.iterdir():
        if item.is_dir():
            # Check if this subdirectory corresponds to a kept URL
            rel = item.relative_to(APP)
            child_url = '/' + str(rel).replace('\\', '/')
            if child_url in keep_urls:
                kept_dirs.append(item)
    return kept_dirs

moved_count = 0
skipped_count = 0
errors = []

for url in sorted(archive_urls):
    src_dir = url_to_dir(url)
    dest_dir = ARCHIVE / url.lstrip('/')
    
    if not src_dir.exists():
        print(f"MISSING: {src_dir}")
        skipped_count += 1
        continue
    
    # Check if this directory has kept children
    kept_children = get_kept_children_dirs(url)
    
    if kept_children:
        # Mixed directory: only move page.tsx and archived subdirectories
        print(f"MIXED: {src_dir} (kept children: {[c.name for c in kept_children]})")
        
        # Move page.tsx if it exists
        page_file = src_dir / 'page.tsx'
        if page_file.exists():
            dest_dir.mkdir(parents=True, exist_ok=True)
            try:
                shutil.move(str(page_file), str(dest_dir / 'page.tsx'))
                print(f"  Moved page.tsx")
                moved_count += 1
            except Exception as e:
                errors.append(f"Error moving {page_file}: {e}")
        
        # Move archived subdirectories
        for item in src_dir.iterdir():
            if item.is_dir():
                rel = item.relative_to(APP)
                child_url = '/' + str(rel).replace('\\', '/')
                if child_url in archive_urls:
                    child_dest = ARCHIVE / str(rel).replace('\\', '/')
                    child_dest.parent.mkdir(parents=True, exist_ok=True)
                    try:
                        shutil.move(str(item), str(child_dest))
                        print(f"  Moved subdir: {item.name}")
                        moved_count += 1
                    except Exception as e:
                        errors.append(f"Error moving {item}: {e}")
        
        # Clean up src_dir if now empty
        remaining = list(src_dir.iterdir())
        if not remaining:
            try:
                src_dir.rmdir()
                print(f"  Removed empty parent: {src_dir}")
            except:
                pass
    else:
        # No kept children - move entire directory
        dest_dir.parent.mkdir(parents=True, exist_ok=True)
        try:
            shutil.move(str(src_dir), str(dest_dir))
            print(f"MOVED: {src_dir} -> {dest_dir}")
            moved_count += 1
            
            # Clean up empty parent directories
            parent = src_dir.parent
            while parent != APP:
                try:
                    if not any(parent.iterdir()):
                        parent.rmdir()
                        print(f"  Removed empty parent: {parent}")
                    parent = parent.parent
                except:
                    break
        except Exception as e:
            errors.append(f"Error moving {src_dir}: {e}")

print(f"\nDone. Moved: {moved_count}, Skipped: {skipped_count}, Errors: {len(errors)}")
if errors:
    print("Errors:")
    for e in errors:
        print(f"  {e}")
