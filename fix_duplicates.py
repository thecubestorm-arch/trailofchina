import csv, os, shutil

# Read all rows
with open('docs/prune-plan-final.csv') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

# Find duplicate URLs
from collections import defaultdict
duplicates = defaultdict(list)
for i, row in enumerate(rows):
    duplicates[row['url']].append((i, row['decision']))

# Remove duplicate ARCHIVE entries when there's also a KEEP
to_remove = set()
for url, entries in duplicates.items():
    if len(entries) > 1:
        decisions = [e[1] for e in entries]
        if 'KEEP' in decisions and 'ARCHIVE' in decisions:
            for idx, decision in entries:
                if decision == 'ARCHIVE':
                    to_remove.add(idx)
                    print(f"Removing duplicate ARCHIVE: {url} at row {idx+2}")

# Filter out the duplicates
filtered_rows = [row for i, row in enumerate(rows) if i not in to_remove]

print(f"\nTotal rows before: {len(rows)}")
print(f"Total rows after: {len(filtered_rows)}")
print(f"Removed: {len(to_remove)}")

# Write back preserving all columns
with open('docs/prune-plan-final.csv', 'w', newline='') as f:
    fieldnames = list(filtered_rows[0].keys())
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for row in filtered_rows:
        writer.writerow(row)

print("\nDone! CSV updated.")

# Now remove the 32 parent page.tsx files that were incorrectly restored
archive_set = set(r['url'] for r in filtered_rows if r['decision'] == 'ARCHIVE')
keep_set = set(r['url'] for r in filtered_rows if r['decision'] == 'KEEP')

# Parent dirs that should be archived
parent_dirs = [
    'beijing/day-trips', 'beijing/local-experiences', 'beijing/local-tips', 
    'beijing/transport-guide', 'beijing/what-to-do', 'beijing/where-to-stay',
    'chengdu/day-trips', 'chengdu/local-experiences', 'chengdu/local-tips',
    'chengdu/what-to-do', 'chengdu/where-to-eat', 'chengdu/where-to-stay',
    'chongqing/day-trips', 'chongqing/local-experiences', 'chongqing/local-tips',
    'chongqing/what-to-do', 'chongqing/where-to-eat', 'chongqing/where-to-stay',
    'shanghai/day-trips', 'shanghai/local-experiences', 'shanghai/local-tips',
    'shanghai/transport-guide', 'shanghai/what-to-do', 'shanghai/where-to-eat',
    'shanghai/where-to-stay',
    'xian/day-trips', 'xian/local-experiences', 'xian/local-tips',
    'xian/what-to-do', 'xian/where-to-eat', 'xian/where-to-stay',
]

moved = 0
for pd in parent_dirs:
    src = f'app/destinations/{pd}/page.tsx'
    if os.path.exists(src):
        # Move to _archive
        dst = f'_archive/destinations/{pd}/page.tsx'
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.move(src, dst)
        print(f"Moved: {src} -> {dst}")
        moved += 1

print(f"\nMoved {moved} parent page.tsx files to _archive/")
