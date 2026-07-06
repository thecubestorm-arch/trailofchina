import csv
import re

# Build the complete prune plan from scratch
# This ensures correct redirects without chains

keeps = [
    # Core & Legal
    ("/", "core page"),
    ("/about", "core page"),
    ("/imprint", "legal page"),
    ("/privacy", "legal page"),
    ("/cookie-policy", "legal page"),
    # Blog
    ("/blog", "blog hub"),
    ("/blog/[slug]", "blog dynamic route"),
    ("/blog/category/[slug]", "blog category"),
    # China Basics
    ("/china-basics", "section hub"),
    ("/china-basics/before-you-go", "section hub"),
    ("/china-basics/before-you-go/is-china-safe", "key content"),
    ("/china-basics/before-you-go/packing-list", "key content"),
    ("/china-basics/how-china-differs", "section hub"),
    ("/china-basics/how-china-differs/visa-guide", "key content"),
    ("/china-basics/how-to-get-around", "section hub"),
    ("/china-basics/how-to-get-around/city-to-city", "getting around cluster"),
    ("/china-basics/how-to-get-around/didi", "getting around cluster"),
    ("/china-basics/how-to-get-around/metro-subway", "getting around cluster"),
    ("/china-basics/how-to-get-around/plane", "getting around cluster"),
    ("/china-basics/how-to-get-around/taxi", "getting around cluster"),
    ("/china-basics/how-to-get-around/train", "getting around cluster"),
    ("/china-basics/how-to-get-internet", "section hub"),
    ("/china-basics/how-to-get-internet/airalo-esim", "SACRED PAGE — top traffic URL frozen"),
    ("/china-basics/how-to-get-internet/esim", "eSIM cluster"),
    ("/china-basics/how-to-get-internet/holafly-esim", "eSIM cluster"),
    ("/china-basics/how-to-get-internet/physical-sim", "eSIM cluster"),
    ("/china-basics/what-apps-to-use", "section hub"),
    ("/china-basics/what-apps-to-use/alipay", "payment page"),
    ("/china-basics/what-apps-to-use/communication", "apps cluster"),
    ("/china-basics/what-apps-to-use/didi", "apps cluster"),
    ("/china-basics/what-apps-to-use/maps", "apps cluster"),
    ("/china-basics/what-apps-to-use/meituan", "apps cluster"),
    ("/china-basics/what-apps-to-use/payment", "payment page"),
    ("/china-basics/what-apps-to-use/travel", "apps cluster"),
    ("/china-basics/what-apps-to-use/trip-com", "apps cluster"),
    ("/china-basics/what-apps-to-use/vpn", "apps cluster"),
    ("/china-basics/what-apps-to-use/wechat-pay", "payment page"),
    # Destinations Hub
    ("/destinations", "section hub"),
    # Beijing
    ("/destinations/beijing", "core city hub"),
    ("/destinations/beijing/day-trips", "city sub-hub"),
    ("/destinations/beijing/local-experiences", "city sub-hub"),
    ("/destinations/beijing/local-tips", "city sub-hub"),
    ("/destinations/beijing/transport-guide", "city sub-hub"),
    ("/destinations/beijing/what-to-do", "city sub-hub"),
    ("/destinations/beijing/where-to-eat", "city sub-hub"),
    ("/destinations/beijing/where-to-eat/jianbing", "traffic page — Google pos ~10"),
    ("/destinations/beijing/where-to-stay", "city sub-hub"),
    # Chengdu
    ("/destinations/chengdu", "core city hub"),
    ("/destinations/chengdu/day-trips", "city sub-hub"),
    ("/destinations/chengdu/local-experiences", "city sub-hub"),
    ("/destinations/chengdu/local-tips", "city sub-hub"),
    ("/destinations/chengdu/what-to-do", "city sub-hub"),
    ("/destinations/chengdu/where-to-eat", "city sub-hub"),
    ("/destinations/chengdu/where-to-stay", "city sub-hub"),
    # Chongqing
    ("/destinations/chongqing", "core city hub"),
    ("/destinations/chongqing/day-trips", "city sub-hub"),
    ("/destinations/chongqing/local-experiences", "city sub-hub"),
    ("/destinations/chongqing/local-tips", "city sub-hub"),
    ("/destinations/chongqing/what-to-do", "city sub-hub"),
    ("/destinations/chongqing/where-to-eat", "city sub-hub"),
    ("/destinations/chongqing/where-to-stay", "city sub-hub"),
    # Guangzhou (hub only)
    ("/destinations/guangzhou", "city hub"),
    # Shanghai
    ("/destinations/shanghai", "core city hub"),
    ("/destinations/shanghai/day-trips", "city sub-hub"),
    ("/destinations/shanghai/local-experiences", "city sub-hub"),
    ("/destinations/shanghai/local-tips", "city sub-hub"),
    ("/destinations/shanghai/transport-guide", "city sub-hub"),
    ("/destinations/shanghai/what-to-do", "city sub-hub"),
    ("/destinations/shanghai/what-to-do/shanghai-tower", "traffic page"),
    ("/destinations/shanghai/where-to-eat", "city sub-hub"),
    ("/destinations/shanghai/where-to-stay", "city sub-hub"),
    # Shenzhen (hub only)
    ("/destinations/shenzhen", "city hub"),
    ("/destinations/shenzhen/what-to-do/ping-an-finance-centre", "traffic page"),
    # Xi'an
    ("/destinations/xian", "core city hub"),
    ("/destinations/xian/day-trips", "city sub-hub"),
    ("/destinations/xian/local-experiences", "city sub-hub"),
    ("/destinations/xian/local-tips", "city sub-hub"),
    ("/destinations/xian/what-to-do", "city sub-hub"),
    ("/destinations/xian/where-to-eat", "city sub-hub"),
    ("/destinations/xian/where-to-stay", "city sub-hub"),
    # Plan Your Trip
    ("/plan-your-trip", "section hub"),
    ("/plan-your-trip/beijing-shanghai-xian", "itinerary page"),
    ("/plan-your-trip/best-time-to-visit", "traffic page"),
    ("/plan-your-trip/budget", "traffic page"),
    ("/plan-your-trip/chengdu-chongqing", "itinerary page"),
    ("/plan-your-trip/preplanned-trips", "preplanned trips hub"),
    ("/plan-your-trip/preplanned-trips/10-day-route", "preplanned trip"),
    ("/plan-your-trip/preplanned-trips/14-day-route", "preplanned trip"),
    ("/plan-your-trip/preplanned-trips/7-day-route", "traffic page"),
    ("/plan-your-trip/shanghai-hangzhou-suzhou", "itinerary page"),
    ("/plan-your-trip/shenzhen-guangzhou-hongkong", "itinerary page"),
]

keep_urls = {url for url, _ in keeps}

# Now handle ARCHIVE entries from the draft
archives = []
with open('docs/prune-plan-draft.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        if row['decision'] == 'ARCHIVE':
            url = row['url']
            # Find correct redirect target
            parts = url.rstrip('/').split('/')
            target = None
            # Walk up from deepest parent
            for i in range(len(parts)-1, 0, -1):
                parent = '/'.join(parts[:i])
                if not parent:
                    parent = '/'
                if parent in keep_urls:
                    target = parent
                    break
            if not target:
                # Section fallbacks
                if url.startswith('/destinations/'):
                    target = '/destinations'
                elif url.startswith('/china-basics/'):
                    target = '/china-basics'
                elif url.startswith('/plan-your-trip/'):
                    target = '/plan-your-trip'
                elif url.startswith('/blog/'):
                    target = '/blog'
                else:
                    target = '/'
            
            reason = row['reason']
            # Add redirect info to reason
            archives.append((url, target, reason))

# Write final CSV
with open('docs/prune-plan-final.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['url', 'decision', 'redirect_target', 'reason'])
    for url, reason in keeps:
        writer.writerow([url, 'KEEP', '', reason])
    for url, target, reason in archives:
        writer.writerow([url, 'ARCHIVE', target, reason])

print(f"KEEP: {len(keeps)}")
print(f"ARCHIVE: {len(archives)}")
print(f"Total: {len(keeps) + len(archives)}")

# Validate
print("\n--- Validation ---")
chain_count = 0
for url, target, _ in archives:
    if target not in keep_urls:
        chain_count += 1
        print(f"⚠ Chain: {url} -> {target}")
if chain_count == 0:
    print("✓ No redirect chains")
else:
    print(f"✗ {chain_count} chains found")

# Check sacred pages
for sacred in ['/china-basics/how-to-get-internet/airalo-esim']:
    if sacred in keep_urls:
        print(f"✓ {sacred} is KEEP")
    else:
        print(f"✗ {sacred} MISSING")

# Section summary
sections = {}
for url, reason in keeps:
    if url == '/':
        section = 'homepage'
    elif url.startswith('/destinations/'):
        parts = url.split('/')
        if len(parts) <= 2:
            section = 'destinations/hub'
        else:
            section = f"destinations/{parts[2]}"
    elif url.startswith('/china-basics/'):
        parts = url.split('/')
        if len(parts) <= 2:
            section = 'china-basics/hub'
        else:
            section = f"china-basics/{parts[2]}"
    elif url.startswith('/plan-your-trip/'):
        section = 'plan-your-trip'
    elif url.startswith('/blog/'):
        section = 'blog'
    elif url in ['/about', '/imprint', '/privacy', '/cookie-policy']:
        section = 'legal/core'
    else:
        section = 'other'
    sections[section] = sections.get(section, 0) + 1

print("\n--- KEEP by Section ---")
for s, c in sorted(sections.items()):
    print(f"  {s}: {c}")
