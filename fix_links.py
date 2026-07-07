import csv, re, os

with open('docs/prune-plan-final.csv') as f:
    reader = csv.DictReader(f)
    archive = set(r['url'] for r in reader if r['decision'] == 'ARCHIVE')
    keep = set(r['url'] for r in reader if r['decision'] == 'KEEP')

# Files to process and archived hrefs to remove
fixes = [
    {
        'file': 'app/china-basics/ChinaBasicsClient.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/censorship',
            '/china-basics/how-china-differs/cultural-differences',
            '/china-basics/how-china-differs/passport-rules',
            '/china-basics/how-to-get-around/12306',
        ]
    },
    {
        'file': 'app/china-basics/how-to-get-around/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-to-get-around/12306',
            '/china-basics/how-to-get-around/bus',
            '/china-basics/how-to-get-around/bicycle',
            '/china-basics/how-to-get-around/car',
        ]
    },
    {
        'file': 'app/china-basics/before-you-go/is-china-safe/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/censorship',
            '/china-basics/how-china-differs/passport-rules',
        ]
    },
    {
        'file': 'app/china-basics/before-you-go/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/passport-rules',
        ]
    },
    {
        'file': 'app/china-basics/how-china-differs/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/censorship',
            '/china-basics/how-china-differs/cultural-differences',
            '/china-basics/how-china-differs/passport-rules',
            '/china-basics/how-china-differs/security-standards',
        ]
    },
    {
        'file': 'app/china-basics/how-china-differs/visa-guide/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/passport-rules',
        ]
    },
    {
        'file': 'app/china-basics/what-apps-to-use/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/censorship',
        ]
    },
    {
        'file': 'app/china-basics/what-apps-to-use/travel/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-to-get-around/12306',
        ]
    },
    {
        'file': 'app/china-basics/what-apps-to-use/vpn/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-china-differs/censorship',
        ]
    },
    {
        'file': 'app/china-basics/how-to-get-around/city-to-city/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-to-get-around/12306',
        ]
    },
    {
        'file': 'app/china-basics/how-to-get-around/train/page.tsx',
        'remove_hrefs': [
            '/china-basics/how-to-get-around/12306',
        ]
    },
]

def remove_jsx_element(content, href):
    """Remove JSX element containing the given href. This is a best-effort approach."""
    # Pattern to match href="..." or href='...'
    # We'll look for Link components or <a> tags with this href
    
    # Try different patterns
    patterns = [
        # Link component with href on same line
        rf'(<Link[^>]*href=["\']{re.escape(href)}["\'][^>]*>[\s\S]*?</Link>)',
        rf'(<a[^>]*href=["\']{re.escape(href)}["\'][^>]*>[\s\S]*?</a>)',
        # href: "/path" pattern (in data arrays)
        rf'(href:\s*["\']{re.escape(href)}["\'].*?[\n,])',
    ]
    
    for pattern in patterns:
        if re.search(pattern, content):
            # For array items, we need to remove the entire object/array element
            if 'href:' in pattern:
                # Try to find and remove the entire array/object element
                # Look for the start of the object ({
                idx = content.find(f'href: "{href}"')
                if idx == -1:
                    idx = content.find(f"href: '{href}'")
                if idx == -1:
                    continue
                    
                # Find the start of the containing object
                # Go backwards to find the start
                start = idx
                brace_count = 0
                found_start = False
                for i in range(idx, -1, -1):
                    if content[i] == '}':
                        brace_count += 1
                    elif content[i] == '{':
                        brace_count -= 1
                        if brace_count == -1:
                            start = i
                            found_start = True
                            break
                
                if found_start:
                    # Find the end of the object
                    end = idx
                    brace_count = 0
                    found_end = False
                    for i in range(idx, len(content)):
                        if content[i] == '{':
                            brace_count += 1
                        elif content[i] == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                end = i + 1
                                # Include trailing comma and whitespace
                                while end < len(content) and content[end] in ' \t\n,':
                                    end += 1
                                found_end = True
                                break
                    
                    if found_end:
                        content = content[:start] + content[end:]
                        return content
            else:
                # Simple replacement for JSX elements
                content = re.sub(pattern, '', content)
                return content
    
    return content

for fix in fixes:
    filepath = fix['file']
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    for href in fix['remove_hrefs']:
        new_content = remove_jsx_element(content, href)
        if new_content != content:
            print(f"Removed link to {href} from {filepath}")
        content = new_content
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated: {filepath}")
    else:
        print(f"No changes needed: {filepath}")

print("\nDone processing china-basics files!")
