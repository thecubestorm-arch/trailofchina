export interface SearchItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  category: "destination" | "guide" | "tip" | "blog" | "basics";
  keywords?: string[];
}

export const searchIndex: SearchItem[] = [
  // Destinations — Main Pages
  { id: "shanghai", title: "Shanghai", subtitle: "The Paris of the East", href: "/destinations/shanghai", category: "destination", keywords: ["city", "bund", "skyline", "east", "modern", "tower", "french concession"] },
  { id: "beijing", title: "Beijing", subtitle: "Ancient Capital of China", href: "/destinations/beijing", category: "destination", keywords: ["city", "capital", "great wall", "forbidden city", "tiananmen", "hutong"] },
  { id: "xian", title: "Xi'an", subtitle: "Home of the Terracotta Warriors", href: "/destinations/xian", category: "destination", keywords: ["city", "terracotta", "warriors", "ancient", "silk road", "city wall"] },
  { id: "chengdu", title: "Chengdu", subtitle: "Home of the Giant Pandas", href: "/destinations/chengdu", category: "destination", keywords: ["city", "pandas", "hotpot", "sichuan", "base", "tea"] },
  { id: "chongqing", title: "Chongqing", subtitle: "The Mountain City", href: "/destinations/chongqing", category: "destination", keywords: ["city", "mountain", "hotpot", "yangtze", "dusk", "river"] },

  // Shanghai Attractions
  { id: "shanghai-bund", title: "The Bund", subtitle: "Colonial waterfront promenade", href: "/destinations/shanghai/what-to-do/bund", category: "destination", keywords: ["bund", "waterfront", "colonial", "skyline", "night", "view"] },
  { id: "shanghai-tower", title: "Shanghai Tower", subtitle: "China's tallest skyscraper", href: "/destinations/shanghai/what-to-do/shanghai-tower", category: "destination", keywords: ["tower", "skyscraper", "view", "observation", "tallest"] },
  { id: "shanghai-yu-garden", title: "Yu Garden", subtitle: "Classical Chinese garden", href: "/destinations/shanghai/what-to-do/yu-garden", category: "destination", keywords: ["garden", "classical", "tea", "bazaar", "traditional"] },
  { id: "shanghai-french-concession", title: "French Concession", subtitle: "Tree-lined streets and cafes", href: "/destinations/shanghai/what-to-do/french-concession", category: "destination", keywords: ["french", "concession", "trees", "cafe", "colonial", "walk"] },
  { id: "shanghai-tianzifang", title: "Tianzifang", subtitle: "Arts and crafts enclave", href: "/destinations/shanghai/what-to-do/tianzifang", category: "destination", keywords: ["tianzifang", "arts", "crafts", "alleys", "shopping", "local"] },
  { id: "shanghai-jade-buddha", title: "Jade Buddha Temple", subtitle: "Serene Buddhist temple", href: "/destinations/shanghai/what-to-do/jade-buddha-temple", category: "destination", keywords: ["buddha", "temple", "jade", "buddhist", "serene"] },

  // Beijing Attractions
  { id: "beijing-great-wall", title: "Great Wall of China", subtitle: "One of the Seven Wonders", href: "/destinations/beijing/what-to-do/great-wall", category: "destination", keywords: ["great wall", "wonder", "hike", "mutianyu", "badaling"] },
  { id: "beijing-forbidden-city", title: "Forbidden City", subtitle: "Imperial palace complex", href: "/destinations/beijing/what-to-do/forbidden-city", category: "destination", keywords: ["forbidden city", "palace", "imperial", "ming", "dynasty"] },
  { id: "beijing-temple-heaven", title: "Temple of Heaven", subtitle: "Ming dynasty temple complex", href: "/destinations/beijing/what-to-do/temple-of-heaven", category: "destination", keywords: ["temple", "heaven", "ming", "park", "locals"] },
  { id: "beijing-summer-palace", title: "Summer Palace", subtitle: "Imperial garden and lake", href: "/destinations/beijing/what-to-do/summer-palace", category: "destination", keywords: ["summer palace", "garden", "lake", "kunming", "imperial"] },
  { id: "beijing-hutong", title: "Hutongs", subtitle: "Historic alleyway neighborhoods", href: "/destinations/beijing/what-to-do/hutong", category: "destination", keywords: ["hutong", "alley", "historic", "old", "traditional", "bike"] },
  { id: "beijing-lama-temple", title: "Lama Temple", subtitle: "Tibetan Buddhist temple", href: "/destinations/beijing/what-to-do/lama-temple", category: "destination", keywords: ["lama", "tibetan", "buddhist", "temple", "incense"] },
  { id: "beijing-798", title: "798 Art District", subtitle: "Contemporary art galleries", href: "/destinations/beijing/what-to-do/798-art-district", category: "destination", keywords: ["798", "art", "gallery", "contemporary", "industrial"] },

  // Xi'an Attractions
  { id: "xian-terracotta", title: "Terracotta Warriors", subtitle: "8,000 ancient clay soldiers", href: "/destinations/xian/what-to-do/terracotta-warriors", category: "destination", keywords: ["terracotta", "warriors", "army", "qin", "emperor", "museum"] },
  { id: "xian-city-wall", title: "Xi'an City Wall", subtitle: "Ancient fortified wall", href: "/destinations/xian/what-to-do/city-wall", category: "destination", keywords: ["city wall", "fortified", "bike", "ancient", "view"] },
  { id: "xian-muslim-quarter", title: "Muslim Quarter", subtitle: "Street food and bazaar", href: "/destinations/xian/what-to-do/muslim-quarter", category: "destination", keywords: ["muslim", "street food", "bazaar", "night", "kebab"] },
  { id: "xian-big-goose", title: "Big Wild Goose Pagoda", subtitle: "Buddhist pagoda and square", href: "/destinations/xian/what-to-do/big-wild-goose-pagoda", category: "destination", keywords: ["pagoda", "goose", "fountain", "buddhist", "tang"] },
  { id: "xian-bell-drum", title: "Bell & Drum Tower", subtitle: "Historic timekeeping towers", href: "/destinations/xian/what-to-do/bell-drum-tower", category: "destination", keywords: ["bell", "drum", "tower", "time", "historic", "center"] },

  // Chengdu Attractions
  { id: "chengdu-pandas", title: "Giant Panda Base", subtitle: "Meet China's national treasure", href: "/destinations/chengdu/what-to-do/panda-base", category: "destination", keywords: ["panda", "base", "cute", "conservation", "bamboo"] },
  { id: "chengdu-jinli", title: "Jinli Ancient Street", subtitle: "Traditional snack street", href: "/destinations/chengdu/what-to-do/jinli-ancient-street", category: "destination", keywords: ["jinli", "street", "snack", "traditional", "lanterns"] },
  { id: "chengdu-wenshu", title: "Wenshu Monastery", subtitle: "Tang dynasty Buddhist temple", href: "/destinations/chengdu/what-to-do/wenshu-monastery", category: "destination", keywords: ["wenshu", "monastery", "temple", "tea", "tang"] },
  { id: "chengdu-kuanzhai", title: "Kuanzhai Alley", subtitle: "Historic courtyard lanes", href: "/destinations/chengdu/what-to-do/kuanzhai-alley", category: "destination", keywords: ["kuanzhai", "alley", "courtyard", "historic", "local"] },
  { id: "chengdu-peoples-park", title: "People's Park Teahouse", subtitle: "Local tea culture experience", href: "/destinations/chengdu/what-to-do/peoples-park-teahouse", category: "destination", keywords: ["people's park", "teahouse", "tea", "ear cleaning", "relax"] },
  { id: "chengdu-sichuan-opera", title: "Sichuan Opera", subtitle: "Face-changing performance", href: "/destinations/chengdu/what-to-do/sichuan-opera", category: "destination", keywords: ["opera", "sichuan", "face change", "performance", "culture"] },

  // Chongqing Attractions
  { id: "chongqing-hongya", title: "Hongya Cave", subtitle: "Stilted riverside buildings", href: "/destinations/chongqing/what-to-do/hongya-cave", category: "destination", keywords: ["hongya", "cave", "stilted", "river", "night", "lights"] },
  { id: "chongqing-ciqikou", title: "Ciqikou Ancient Town", subtitle: "Ming dynasty porcelain town", href: "/destinations/chongqing/what-to-do/ciqikou", category: "destination", keywords: ["ciqikou", "ancient", "porcelain", "ming", "snacks"] },
  { id: "chongqing-liziba", title: "Liziba Monorail", subtitle: "Train through a building", href: "/destinations/chongqing/what-to-do/liziba-monorail", category: "destination", keywords: ["liziba", "monorail", "train", "building", "viral"] },
  { id: "chongqing-cable-car", title: "Yangtze Cable Car", subtitle: "Historic river crossing", href: "/destinations/chongqing/what-to-do/yangtze-cable-car", category: "destination", keywords: ["cable car", "yangtze", "river", "view", "historic"] },
  { id: "chongqing-eling", title: "Eling Park", subtitle: "City views and gardens", href: "/destinations/chongqing/what-to-do/eling-park", category: "destination", keywords: ["eling", "park", "view", "garden", "cityscape"] },
  { id: "chongqing-museum", title: "Three Gorges Museum", subtitle: "Yangtze River history", href: "/destinations/chongqing/what-to-do/three-gorges-museum", category: "destination", keywords: ["three gorges", "museum", "yangtze", "history", "dam"] },

  // China Basics — Internet & Connectivity
  { id: "vpn", title: "VPN for China", subtitle: "Stay connected behind the Great Firewall", href: "/china-basics/what-apps-to-use/vpn", category: "basics", keywords: ["internet", "firewall", "expressvpn", "nordvpn", "surfshark", "blocked"] },
  { id: "alipay", title: "Alipay", subtitle: "China's mobile payment super-app", href: "/china-basics/what-apps-to-use/alipay", category: "basics", keywords: ["payment", "money", "wallet", "qr code", "taobao", "pay"] },
  { id: "wechat", title: "WeChat", subtitle: "The app for everything in China", href: "/china-basics/what-apps-to-use/communication", category: "basics", keywords: ["chat", "messaging", "communication", "mini programs", "pay", "wechat pay"] },
  { id: "didi", title: "DiDi", subtitle: "China's Uber equivalent", href: "/china-basics/what-apps-to-use/didi", category: "basics", keywords: ["taxi", "ride", "car", "transport", "app", "uber"] },
  { id: "baidu-maps", title: "Baidu Maps", subtitle: "Navigation in China", href: "/china-basics/what-apps-to-use/maps", category: "basics", keywords: ["maps", "navigation", "gps", "directions", "amap"] },
  { id: "internet", title: "How to Get Internet", subtitle: "eSIM, SIM cards, and WiFi", href: "/china-basics/how-to-get-internet", category: "basics", keywords: ["wifi", "esim", "sim", "airalo", "holafly", "connection", "data"] },
  { id: "airalo", title: "Airalo eSIM", subtitle: "Best for short visits to China", href: "/china-basics/how-to-get-internet/airalo-esim", category: "basics", keywords: ["esim", "airalo", "data", "short visit", "qr code"] },
  { id: "holafly", title: "Holafly eSIM", subtitle: "Unlimited data plans for China", href: "/china-basics/how-to-get-internet/holafly-esim", category: "basics", keywords: ["esim", "holafly", "unlimited", "data", "plan"] },
  { id: "physical-sim", title: "Physical SIM Card", subtitle: "Buy a local SIM in China", href: "/china-basics/how-to-get-internet/physical-sim", category: "basics", keywords: ["sim", "physical", "local", "china unicom", "store"] },
  { id: "trip-com", title: "Trip.com", subtitle: "Book trains, flights, hotels", href: "/china-basics/what-apps-to-use/trip-com", category: "basics", keywords: ["trip.com", "booking", "train", "flight", "hotel", "ctrip"] },
  { id: "meituan", title: "Meituan", subtitle: "Food delivery and services", href: "/china-basics/what-apps-to-use/meituan", category: "basics", keywords: ["meituan", "food delivery", "takeout", "services", "app"] },
  { id: "wechat-pay", title: "WeChat Pay", subtitle: "Mobile payments via WeChat", href: "/china-basics/what-apps-to-use/wechat-pay", category: "basics", keywords: ["wechat pay", "payment", "wallet", "qr", "money"] },
  { id: "travel-apps", title: "Travel Apps Overview", subtitle: "All the apps you need for China", href: "/china-basics/what-apps-to-use", category: "basics", keywords: ["apps", "overview", "download", "setup", "before"] },

  // China Basics — How to Get Around
  { id: "transport", title: "How to Get Around", subtitle: "Trains, metros, taxis, and buses", href: "/china-basics/how-to-get-around", category: "basics", keywords: ["train", "metro", "taxi", "bus", "didi", "transport", "12306"] },
  { id: "train-12306", title: "Train Tickets (12306)", subtitle: "China's official train booking", href: "/china-basics/how-to-get-around/12306", category: "basics", keywords: ["12306", "train", "bullet", "high speed", "rail", "ticket"] },
  { id: "high-speed-rail", title: "High-Speed Rail", subtitle: "300+ km/h bullet trains", href: "/china-basics/how-to-get-around/train", category: "basics", keywords: ["high speed", "bullet", "train", "crh", "fast"] },
  { id: "metro-subway", title: "Metro & Subway", subtitle: "Subway systems in major cities", href: "/china-basics/how-to-get-around/metro-subway", category: "basics", keywords: ["metro", "subway", "underground", "mrt", "city"] },
  { id: "taxi", title: "Taxis in China", subtitle: "How to hail and pay", href: "/china-basics/how-to-get-around/taxi", category: "basics", keywords: ["taxi", "cab", "hail", "pay", "ride"] },
  { id: "bus", title: "Buses in China", subtitle: "Public bus travel guide", href: "/china-basics/how-to-get-around/bus", category: "basics", keywords: ["bus", "public", "transport", "cheap"] },
  { id: "plane", title: "Domestic Flights", subtitle: "Flying within China", href: "/china-basics/how-to-get-around/plane", category: "basics", keywords: ["flight", "domestic", "airport", "plane", "flying"] },
  { id: "bicycle", title: "Bikes & Scooters", subtitle: "Shared bikes and e-scooters", href: "/china-basics/how-to-get-around/bicycle", category: "basics", keywords: ["bike", "bicycle", "scooter", "shared", "mobike", "hello"] },
  { id: "car", title: "Car Rental & Driving", subtitle: "Renting and driving in China", href: "/china-basics/how-to-get-around/car", category: "basics", keywords: ["car", "rental", "driving", "license", "idp"] },
  { id: "city-to-city", title: "City-to-City Transport", subtitle: "Moving between Chinese cities", href: "/china-basics/how-to-get-around/city-to-city", category: "basics", keywords: ["city", "travel", "between", "move", "transport"] },

  // China Basics — Know Before You Go
  { id: "censorship", title: "Internet Censorship", subtitle: "What the Great Firewall blocks", href: "/china-basics/how-china-differs/censorship", category: "basics", keywords: ["firewall", "blocked", "great firewall", "vpn", "access", "google"] },
  { id: "culture", title: "Chinese Culture", subtitle: "Customs, etiquette, and norms", href: "/china-basics/how-china-differs/cultural-differences", category: "basics", keywords: ["customs", "etiquette", "manners", "behavior", "tipping", "culture"] },
  { id: "safety", title: "Safety in China", subtitle: "Is China safe for tourists?", href: "/china-basics/before-you-go/is-china-safe", category: "basics", keywords: ["safe", "crime", "scams", "police", "emergency", "security"] },
  { id: "passport", title: "Passport Rules", subtitle: "What you need to carry", href: "/china-basics/how-china-differs/passport-rules", category: "basics", keywords: ["id", "registration", "hotel", "police", "documents", "carry"] },
  { id: "visa-guide", title: "Visa Guide", subtitle: "Do you need a visa for China?", href: "/china-basics/how-china-differs/visa-guide", category: "basics", keywords: ["passport", "entry", "requirements", "144 hours", "visa free", "transit"] },
  { id: "security-standards", title: "Security Standards", subtitle: "Airport and train station checks", href: "/china-basics/how-china-differs/security-standards", category: "basics", keywords: ["security", "airport", "train", "check", "scan", "x-ray"] },

  // China Basics — Before You Go
  { id: "packing", title: "Packing List", subtitle: "What to bring to China", href: "/china-basics/before-you-go/packing-list", category: "basics", keywords: ["pack", "luggage", "clothes", "essentials", "bring", "toiletries"] },

  // Plan Your Trip — Itineraries
  { id: "itinerary-7", title: "7-Day China Itinerary", subtitle: "Beijing + Xi'an + Shanghai", href: "/plan-your-trip/preplanned-trips/7-day-route", category: "guide", keywords: ["trip", "route", "week", "beijing", "xian", "shanghai", "first"] },
  { id: "itinerary-10", title: "10-Day China Itinerary", subtitle: "Extended route with Chengdu", href: "/plan-your-trip/preplanned-trips/10-day-route", category: "guide", keywords: ["trip", "route", "panda", "chengdu", "extended", "panda"] },
  { id: "itinerary-14", title: "14-Day China Itinerary", subtitle: "The grand tour of China", href: "/plan-your-trip/preplanned-trips/14-day-route", category: "guide", keywords: ["trip", "route", "grand", "comprehensive", "all cities", "complete"] },
  { id: "travel-planner", title: "Travel Planner", subtitle: "Build your custom trip", href: "/plan-your-trip/travel-planner", category: "guide", keywords: ["custom", "plan", "build", "itinerary", "personalized", "tool"] },
  { id: "best-time", title: "Best Time to Visit", subtitle: "When to go to China", href: "/plan-your-trip/best-time-to-visit", category: "guide", keywords: ["weather", "season", "when", "spring", "autumn", "climate"] },

  // Plan Your Trip — Tips
  { id: "packing-guide", title: "Packing List", subtitle: "What to bring to China", href: "/plan-your-trip/packing-list", category: "tip", keywords: ["pack", "luggage", "clothes", "essentials", "bring", "list"] },
  { id: "budget", title: "Budget Guide", subtitle: "How much does China cost?", href: "/plan-your-trip/budget", category: "tip", keywords: ["cost", "money", "cheap", "expensive", "price", "yuan", "daily"] },
  { id: "visa", title: "Visa Guide", subtitle: "Do you need a visa for China?", href: "/plan-your-trip/visa", category: "tip", keywords: ["passport", "entry", "requirements", "144 hours", "visa free", "transit"] },
  { id: "cheatsheet", title: "China Cheat Sheet", subtitle: "Downloadable travel guide PDF", href: "/#cheat-sheet", category: "tip", keywords: ["pdf", "download", "guide", "quick", "reference", "free"] },

  // Blog Posts
  { id: "blog-esim", title: "Best eSIM for China 2025", subtitle: "Airalo vs Holafly vs China Unicom", href: "/blog/best-esim-china", category: "blog", keywords: ["esim", "internet", "airalo", "holafly", "data"] },
  { id: "blog-vpn", title: "Best VPN for China 2025", subtitle: "ExpressVPN vs NordVPN vs Surfshark", href: "/blog/best-vpn-china", category: "blog", keywords: ["vpn", "privacy", "firewall", "expressvpn", "nordvpn"] },

  // Top-level Pages
  { id: "home", title: "Home", subtitle: "Trail of China — First-trip travel guide", href: "/", category: "guide", keywords: ["home", "start", "begin", "main"] },
  { id: "destinations-hub", title: "All Destinations", subtitle: "Explore China's best cities", href: "/destinations", category: "destination", keywords: ["cities", "places", "where", "go", "all"] },
  { id: "china-basics-hub", title: "China Basics", subtitle: "Essential prep knowledge", href: "/china-basics", category: "basics", keywords: ["basics", "prep", "prepare", "essential", "start"] },
  { id: "plan-hub", title: "Plan Your Trip", subtitle: "Itineraries and planning tools", href: "/plan-your-trip", category: "guide", keywords: ["plan", "trip", "itinerary", "route", "organize"] },
  { id: "blog-hub", title: "Blog", subtitle: "Travel tips and insights", href: "/blog", category: "blog", keywords: ["blog", "articles", "news", "tips", "stories"] },
  { id: "interactive-map", title: "Interactive Map", subtitle: "Explore destinations on a map", href: "/interactive-map", category: "guide", keywords: ["map", "interactive", "explore", "visual", "location"] },
];
