import csv, os, re

with open('docs/prune-plan-final.csv') as f:
    reader = csv.DictReader(f)
    archive = set(r['url'] for r in reader if r['decision'] == 'ARCHIVE')

# Pattern to match href: "/some/path" or href: '/some/path'
pattern = re.compile(r"href:\s*[\"']([^\"']+)[\"']")

for root, dirs, files in os.walk('app'):
    for f in files:
        if f.endswith('.tsx'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r') as fp:
                content = fp.read()
            for match in pattern.finditer(content):
                href = match.group(1)
                if href in archive:
                    print(f'{filepath}: href={href}')
