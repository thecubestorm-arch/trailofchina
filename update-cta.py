import re
import os

BASE = '/data/.openclaw/workspace/trailofchina'

pages = [
    {
        'file': 'app/destinations/shanghai/what-to-do/french-concession/page.tsx',
        'searchQuery': 'French Concession Shanghai walking tour',
        'headline': 'Want More Than a Standard French Concession Walk?',
        'desc': 'Skip the obvious streets. Book a private walking tour through hidden lane houses, Art Deco villas, and local food stops that most visitors never find.',
        'button': 'Book a Walking Tour →',
        'bullets': ['✓ Hidden lane houses & courtyards', '✓ Art Deco architecture focus', '✓ Local food stops included']
    },
    {
        'file': 'app/destinations/shanghai/what-to-do/shanghai-tower/page.tsx',
        'searchQuery': 'Shanghai Tower observation deck tour',
        'headline': 'Want More Than Just the Observation Deck?',
        'desc': 'Skip the long lines. Book a guided architecture tour that includes neighborhood context, skyline stories, and priority access to the observation deck.',
        'button': 'Book a Priority Tour →',
        'bullets': ['✓ Skip-the-line access', '✓ Neighborhood context & stories', '✓ Architecture focus']
    },
    {
        'file': 'app/destinations/shanghai/what-to-do/yu-garden/page.tsx',
        'searchQuery': 'Yu Garden Shanghai guided tour',
        'headline': 'Want More Than a Quick Yu Garden Snapshot?',
        'desc': 'Understand the symbolism behind every pavilion. Book a guided visit that includes the teahouse experience and hidden lanes of the Old City.',
        'button': 'Book a Guided Visit →',
        'bullets': ['✓ Garden symbolism explained', '✓ Teahouse experience included', '✓ Old City lanes explored']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/forbidden-city/page.tsx',
        'searchQuery': 'Forbidden City private tour Beijing',
        'headline': 'Want More Than a Standard Forbidden City Visit?',
        'desc': 'Skip the crowds. Book a private tour with skip-the-line access that dives into 600 years of imperial history and visits restricted areas.',
        'button': 'Book a Private Tour →',
        'bullets': ['✓ Skip-the-line access', '✓ 600 years of history explained', '✓ Restricted areas visited']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/great-wall/page.tsx',
        'searchQuery': 'Great Wall of China private tour',
        'headline': 'Want More Than the Tourist-Trap Wall Experience?',
        'desc': 'Avoid the crowds at Badaling. Book a private tour to uncrowded sections with sunrise or sunset timing and access to local villages.',
        'button': 'Book a Private Tour →',
        'bullets': ['✓ Uncrowded sections only', '✓ Sunrise or sunset timing', '✓ Local village access']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/temple-of-heaven/page.tsx',
        'searchQuery': 'Temple of Heaven private tour Beijing',
        'headline': 'Want More Than a Quick Temple Photo?',
        'desc': 'Experience the Temple of Heaven at dawn. Book a guided tour that includes tai chi with locals, ancient ritual explanations, and park culture insights.',
        'button': 'Book a Guided Visit →',
        'bullets': ['✓ Tai chi at dawn experience', '✓ Ancient rituals explained', '✓ Local park culture insights']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/summer-palace/page.tsx',
        'searchQuery': 'Summer Palace private tour Beijing',
        'headline': 'Want to Actually Understand the Summer Palace?',
        'desc': 'Go beyond the pretty gardens. Book a private tour that uncovers imperial stories, includes a boat ride on Kunming Lake, and explains the garden symbolism.',
        'button': 'Book a Private Tour →',
        'bullets': ['✓ Imperial stories & scandals', '✓ Boat ride on Kunming Lake', '✓ Garden symbolism decoded']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/lama-temple/page.tsx',
        'searchQuery': 'Lama Temple private tour Beijing',
        'headline': 'Want More Than a Quick Temple Visit?',
        'desc': 'Understand what you are seeing. Book a guided tour that includes Buddhist ceremonies, the story of the sandalwood Buddha, and incense ritual participation.',
        'button': 'Book a Guided Visit →',
        'bullets': ['✓ Buddhist ceremony access', '✓ Sandalwood Buddha story', '✓ Incense ritual participation']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/798-art-district/page.tsx',
        'searchQuery': '798 Art District tour Beijing',
        'headline': "Want to Really Understand 798's Art Scene?",
        'desc': 'Go beyond the selfies. Book a gallery tour with insider access to artist studios, meetups with local creators, and hidden exhibitions.',
        'button': 'Book a Gallery Tour →',
        'bullets': ['✓ Gallery insider access', '✓ Artist meetups', '✓ Hidden studios & exhibitions']
    },
    {
        'file': 'app/destinations/beijing/what-to-do/hutong/page.tsx',
        'searchQuery': 'Beijing hutong private tour',
        'headline': 'Want More Than a Tourist Hutong Tour?',
        'desc': 'Skip the rickshaw gimmicks. Book a walking tour with real family visits, local food stops, and stories from disappearing neighborhoods.',
        'button': 'Book a Walking Tour →',
        'bullets': ['✓ Real family courtyard visits', '✓ Local food stops', '✓ Disappearing neighborhood stories']
    },
    {
        'file': 'app/destinations/chengdu/what-to-do/panda-base/page.tsx',
        'searchQuery': 'Chengdu panda base tour',
        'headline': 'Want More Than Just Panda Photos?',
        'desc': 'See the pandas the right way. Book a guided tour that includes red panda viewing, behind-the-scenes breeding center access, and volunteer program options.',
        'button': 'Book a Panda Tour →',
        'bullets': ['✓ Red panda viewing included', '✓ Breeding center access', '✓ Volunteer program options']
    },
    {
        'file': 'app/destinations/chengdu/what-to-do/jinli-ancient-street/page.tsx',
        'searchQuery': 'Jinli Ancient Street Chengdu tour',
        'headline': 'Want More Than a Crowded Jinli Walk?',
        'desc': 'Experience Jinli after dark. Book an evening tour with a local guide who knows the hidden snack stalls, the best Sichuan opera spots, and the stories behind the lanterns.',
        'button': 'Book an Evening Tour →',
        'bullets': ['✓ Evening atmosphere & lanterns', '✓ Hidden snack stalls', '✓ Sichuan opera access']
    },
    {
        'file': 'app/destinations/chengdu/what-to-do/kuanzhai-alley/page.tsx',
        'searchQuery': 'Kuanzhai Alley Chengdu tour',
        'headline': 'Want to See Beyond the Renovated Alley?',
        'desc': 'Look deeper than the storefronts. Book a guided walk through courtyard culture, traditional teahouses, and the local art scene that most visitors miss.',
        'button': 'Book a Walking Tour →',
        'bullets': ['✓ Courtyard culture explained', '✓ Traditional teahouse visits', '✓ Local art scene access']
    },
    {
        'file': 'app/destinations/chengdu/what-to-do/peoples-park-teahouse/page.tsx',
        'searchQuery': 'Chengdu teahouse culture tour',
        'headline': "Want to Really Experience Chengdu's Teahouse Culture?",
        'desc': 'Do more than sip tea. Book a cultural experience that includes a proper tea ceremony, a visit to the matchmaker corner, and the legendary ear-cleaning ritual.',
        'button': 'Book a Cultural Experience →',
        'bullets': ['✓ Traditional tea ceremony', '✓ Matchmaker corner visit', '✓ Ear-cleaning ritual included']
    },
    {
        'file': 'app/destinations/chengdu/what-to-do/sichuan-opera/page.tsx',
        'searchQuery': 'Sichuan opera face changing show Chengdu',
        'headline': 'Want More Than Just the Face-Changing Show?',
        'desc': 'Go backstage. Book a VIP experience that includes backstage access, an explanation of the ancient art, and a visit to an authentic performance venue.',
        'button': 'Book a VIP Experience →',
        'bullets': ['✓ Backstage access', '✓ Art & history explained', '✓ Authentic venue guaranteed']
    },
    {
        'file': 'app/destinations/chengdu/what-to-do/wenshu-monastery/page.tsx',
        'searchQuery': 'Wenshu Monastery Chengdu tour',
        'headline': 'Want More Than a Quick Temple Visit?',
        'desc': 'Experience monastery life. Book a guided visit that includes a vegetarian lunch, conversations with monks, and a tea meditation session in the courtyard.',
        'button': 'Book a Guided Visit →',
        'bullets': ['✓ Vegetarian monastery lunch', '✓ Monk conversations', '✓ Tea meditation session']
    },
    {
        'file': 'app/destinations/xian/what-to-do/terracotta-warriors/page.tsx',
        'searchQuery': "Terracotta Warriors private tour Xi'an",
        'headline': 'Want More Than a Quick Warrior Snapshot?',
        'desc': 'Understand the army. Book a private tour with an expert guide who reveals Pit 2 details, tells the story of the farmer who found them, and gets you skip-the-line access.',
        'button': 'Book a Private Tour →',
        'bullets': ['✓ Pit 2 details & insights', '✓ Story of the farmer who found them', '✓ Skip-the-line access']
    },
    {
        'file': 'app/destinations/xian/what-to-do/city-wall/page.tsx',
        'searchQuery': "Xi'an City Wall cycling tour",
        'headline': 'Want More Than a Standard Wall Walk?',
        'desc': 'Ride the wall at sunset. Book a cycling tour that includes the best gate views, historical context for each section, and the magic of the city at night.',
        'button': 'Book a Cycling Tour →',
        'bullets': ['✓ Sunset cycling experience', '✓ Gate history explained', '✓ Night views included']
    },
    {
        'file': 'app/destinations/xian/what-to-do/muslim-quarter/page.tsx',
        'searchQuery': "Xi'an Muslim Quarter food tour",
        'headline': 'Want More Than a Food Tourist Walk?',
        'desc': 'Eat like a local. Book a food tour through hidden alley eateries with introductions to local families and deep insights into Hui culture and history.',
        'button': 'Book a Food Tour →',
        'bullets': ['✓ Hidden alley eateries', '✓ Local family introductions', '✓ Hui culture & history']
    },
    {
        'file': 'app/destinations/xian/what-to-do/bell-drum-tower/page.tsx',
        'searchQuery': "Xi'an Bell Tower Drum Tower tour",
        'headline': "Want to Understand Xi'an's Ancient Center?",
        'desc': 'Hear the towers come alive. Book a guided visit that explains the acoustic design, the history of time-keeping in imperial China, and access to rooftop views at sunset.',
        'button': 'Book a Guided Visit →',
        'bullets': ['✓ Acoustic design explained', '✓ Time-keeping history', '✓ Rooftop sunset views']
    },
    {
        'file': 'app/destinations/xian/what-to-do/big-wild-goose-pagoda/page.tsx',
        'searchQuery': "Big Wild Goose Pagoda tour Xi'an",
        'headline': 'Want More Than Just the Pagoda View?',
        'desc': 'Discover the full story. Book a tour that covers the Buddhist history, includes the evening fountain show, and gets you access to the monastery grounds beyond the tourist areas.',
        'button': 'Book a Guided Tour →',
        'bullets': ['✓ Buddhist history deep dive', '✓ Evening fountain show', '✓ Monastery ground access']
    }
]


def generate_cta(page):
    bullets = '\n              '.join([f'<span>{b}</span>' for b in page['bullets']])
    return f'''      customToursCTA={{
        <section className="mb-10">
          <div className="rounded-2xl border-2 border-[#ebe4d8] bg-[#faf8f4] p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[var(--foreground)]">
              {page['headline']}
            </h2>
            <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed">
              {page['desc']}
            </p>
            <a
              href={{`https://www.viator.com/searchResults/allText?text=${{searchQuery}}`}}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block rounded-xl bg-[#af5d32] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#8f4d28] hover:shadow-lg transition-all"
            >
              {page['button']}
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--muted)]">
              {bullets}
            </div>
          </div>
        </section>
      }}'''


for page in pages:
    file_path = os.path.join(BASE, page['file'])
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add searchQuery before export default function
    search_line = f"const searchQuery = encodeURIComponent('{page['searchQuery']}');\n\n"
    content = content.replace('export default function', search_line + 'export default function', 1)

    # Find the final closing of AttractionPage:    />
    # followed by   );\n}
    pattern = r'(\n    />\s*\n  \);\s*\n\})$'
    match = re.search(pattern, content)
    if match:
        cta = generate_cta(page)
        content = content[:match.start()] + '\n' + cta + match.group(1)
    else:
        # Fallback: insert before last `    />`
        idx = content.rfind('\n    />')
        if idx != -1:
            cta = generate_cta(page)
            content = content[:idx] + '\n' + cta + content[idx:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print('Updated', page['file'])
