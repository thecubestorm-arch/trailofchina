import fs from 'fs';
import path from 'path';

const CWD = '/data/.openclaw/workspace/trailofchina';

// Define all pages and their breadcrumb paths
const pages = [
  // China Basics
  { file: 'app/china-basics/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }] },
  { file: 'app/china-basics/how-china-differs/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How China Differs", path: "/china-basics/how-china-differs" }] },
  { file: 'app/china-basics/how-china-differs/visa-guide/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How China Differs", path: "/china-basics/how-china-differs" }, { name: "Visa Guide", path: "/china-basics/how-china-differs/visa-guide" }] },
  { file: 'app/china-basics/how-china-differs/censorship/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How China Differs", path: "/china-bina-differs" }, { name: "Censorship", path: "/china-basics/how-china-differs/censorship" }] },
  { file: 'app/china-basics/how-china-differs/cultural-differences/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How China Differs", path: "/china-basics/how-china-differs" }, { name: "Cultural Differences", path: "/china-basics/how-china-differs/cultural-differences" }] },
  { file: 'app/china-basics/how-china-differs/passport-rules/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How China Differs", path: "/china-basics/how-china-differs" }, { name: "Passport Rules", path: "/china-basics/how-china-differs/passport-rules" }] },
  { file: 'app/china-basics/how-china-differs/security-standards/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How China Differs", path: "/china-basics/how-china-differs" }, { name: "Security Standards", path: "/china-basics/how-china-differs/security-standards" }] },
  { file: 'app/china-basics/what-apps-to-use/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "What Apps to Use", path: "/china-basics/what-apps-to-use" }] },
  { file: 'app/china-basics/what-apps-to-use/payment/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "What Apps to Use", path: "/china-basics/what-apps-to-use" }, { name: "Payment", path: "/china-basics/what-apps-to-use/payment" }] },
  { file: 'app/china-basics/what-apps-to-use/didi/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "What Apps to Use", path: "/china-basics/what-apps-to-use" }, { name: "DiDi", path: "/china-basics/what-apps-to-use/didi" }] },
  { file: 'app/china-basics/what-apps-to-use/meituan/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "What Apps to Use", path: "/china-basics/what-apps-to-use" }, { name: "Meituan", path: "/china-basics/what-apps-to-use/meituan" }] },
  { file: 'app/china-basics/how-to-get-internet/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Internet", path: "/china-basics/how-to-get-internet" }] },
  { file: 'app/china-basics/how-to-get-internet/esim/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Internet", path: "/china-basics/how-to-get-internet" }, { name: "eSIM", path: "/china-basics/how-to-get-internet/esim" }] },
  { file: 'app/china-basics/how-to-get-internet/physical-sim/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Internet", path: "/china-basics/how-to-get-internet" }, { name: "Physical SIM", path: "/china-basics/how-to-get-internet/physical-sim" }] },
  { file: 'app/china-basics/how-to-get-around/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }] },
  { file: 'app/china-basics/how-to-get-around/train/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Train", path: "/china-basics/how-to-get-around/train" }] },
  { file: 'app/china-basics/how-to-get-around/plane/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Plane", path: "/china-basics/how-to-get-around/plane" }] },
  { file: 'app/china-basics/how-to-get-around/taxi/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Taxi", path: "/china-basics/how-to-get-around/taxi" }] },
  { file: 'app/china-basics/how-to-get-around/didi/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "DiDi", path: "/china-basics/how-to-get-around/didi" }] },
  { file: 'app/china-basics/how-to-get-around/metro-subway/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Metro & Subway", path: "/china-basics/how-to-get-around/metro-subway" }] },
  { file: 'app/china-basics/how-to-get-around/bus/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Bus", path: "/china-basics/how-to-get-around/bus" }] },
  { file: 'app/china-basics/how-to-get-around/bicycle/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Bicycle", path: "/china-basics/how-to-get-around/bicycle" }] },
  { file: 'app/china-basics/how-to-get-around/car/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "Car", path: "/china-basics/how-to-get-around/car" }] },
  { file: 'app/china-basics/how-to-get-around/city-to-city/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "How to Get Around", path: "/china-basics/how-to-get-around" }, { name: "City to City", path: "/china-basics/how-to-get-around/city-to-city" }] },
  { file: 'app/china-basics/before-you-go/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "Before You Go", path: "/china-basics/before-you-go" }] },
  { file: 'app/china-basics/before-you-go/is-china-safe/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "Before You Go", path: "/china-basics/before-you-go" }, { name: "Is China Safe?", path: "/china-basics/before-you-go/is-china-safe" }] },
  { file: 'app/china-basics/before-you-go/packing-list/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "China Basics", path: "/china-basics" }, { name: "Before You Go", path: "/china-basics/before-you-go" }, { name: "Packing List", path: "/china-basics/before-you-go/packing-list" }] },
  // Destinations
  { file: 'app/destinations/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }] },
  { file: 'app/destinations/beijing/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Beijing", path: "/destinations/beijing" }] },
  { file: 'app/destinations/shanghai/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Shanghai", path: "/destinations/shanghai" }] },
  { file: 'app/destinations/xian/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Xi'an", path: "/destinations/xian" }] },
  { file: 'app/destinations/chengdu/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Chengdu", path: "/destinations/chengdu" }] },
  { file: 'app/destinations/chongqing/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }, { name: "Chongqing", path: "/destinations/chongqing" }] },
  // Plan Your Trip
  { file: 'app/plan-your-trip/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }] },
  { file: 'app/plan-your-trip/budget/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Budget", path: "/plan-your-trip/budget" }] },
  { file: 'app/plan-your-trip/best-time-to-visit/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Best Time to Visit", path: "/plan-your-trip/best-time-to-visit" }] },
  { file: 'app/plan-your-trip/travel-planner/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Travel Planner", path: "/plan-your-trip/travel-planner" }] },
  { file: 'app/plan-your-trip/preplanned-trips/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Preplanned Trips", path: "/plan-your-trip/preplanned-trips" }] },
  { file: 'app/plan-your-trip/preplanned-trips/7-day-route/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Preplanned Trips", path: "/plan-your-trip/preplanned-trips" }, { name: "7 Day Route", path: "/plan-your-trip/preplanned-trips/7-day-route" }] },
  { file: 'app/plan-your-trip/preplanned-trips/10-day-route/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Preplanned Trips", path: "/plan-your-trip/preplanned-trips" }, { name: "10 Day Route", path: "/plan-your-trip/preplanned-trips/10-day-route" }] },
  { file: 'app/plan-your-trip/preplanned-trips/14-day-route/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Plan Your Trip", path: "/plan-your-trip" }, { name: "Preplanned Trips", path: "/plan-your-trip/preplanned-trips" }, { name: "14 Day Route", path: "/plan-your-trip/preplanned-trips/14-day-route" }] },
  // Other
  { file: 'app/about/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }] },
  { file: 'app/blog/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }] },
  { file: 'app/privacy/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }] },
  { file: 'app/cookie-policy/page.tsx', crumbs: [{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookie-policy" }] },
];

function processPage(pageInfo) {
  const filePath = path.join(CWD, pageInfo.file);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${pageInfo.file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix the typo in censorship path
  let crumbs = pageInfo.crumbs;
  if (pageInfo.file.includes('censorship')) {
    crumbs = crumbs.map(c => c.path === '/china-bina-differs' ? { ...c, path: '/china-basics/how-china-differs' } : c);
  }

  // Generate the breadcrumb JSON-LD variable
  const crumbsStr = crumbs.map(c => `{ name: "${c.name}", path: "${c.path}" }`).join(', ');
  const breadcrumbVarDecl = `const breadcrumbJsonLd = breadcrumbSchema([${crumbsStr}]);`;
  const breadcrumbScript = `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />`;

  // 1. Add import
  const hasSchemaImport = content.includes("from '@/lib/schema'");
  const hasBreadcrumbImport = content.includes("breadcrumbSchema");

  if (hasSchemaImport && !hasBreadcrumbImport) {
    // Add breadcrumbSchema to existing import
    content = content.replace(
      /import\s*\{([^}]*)\}\s*from\s*'@\/lib\/schema'/,
      (match, imports) => {
        const trimmed = imports.trim();
        return `import { ${trimmed}, breadcrumbSchema } from '@/lib/schema'`;
      }
    );
  } else if (!hasSchemaImport) {
    // Add new import line after the last import
    const importLines = content.match(/^import .+$/gm);
    if (importLines) {
      const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
      const afterLastImport = lastImportIndex + importLines[importLines.length - 1].length;
      content = content.slice(0, afterLastImport) + "\nimport { breadcrumbSchema } from '@/lib/schema'" + content.slice(afterLastImport);
    }
  }

  // 2. Add breadcrumb variable declaration
  // Find the export default function line and add after the opening
  const funcMatch = content.match(/export default function \w+\([^)]*\)\s*\{?\s*/);
  if (funcMatch) {
    const funcStart = content.indexOf(funcMatch[0]) + funcMatch[0].length;
    
    // Check if there's already a const before the return
    // Find the first return statement
    const afterFunc = content.slice(funcStart);
    const returnMatch = afterFunc.match(/\n(\s*)return/);
    if (returnMatch) {
      const indent = returnMatch[1];
      const returnPos = funcStart + afterFunc.indexOf(returnMatch[0]);
      content = content.slice(0, returnPos) + `\n${indent}${breadcrumbVarDecl}\n` + content.slice(returnPos);
    }
  }

  // 3. Add script tag in JSX
  // Look for existing <script type="application/ld+json" to add alongside
  if (content.includes('<script type="application/ld+json"')) {
    // Add after the last existing ld+json script tag
    // Find the last occurrence and add after its closing />
    const lastScriptIdx = content.lastIndexOf('<script type="application/ld+json"');
    // Find the end of that script tag (dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />)
    const afterScript = content.slice(lastScriptIdx);
    const scriptEnd = afterScript.indexOf('/>') + 2;
    const insertPos = lastScriptIdx + scriptEnd;
    // Get the indentation from the existing script
    const lineStart = content.slice(0, lastScriptIdx).lastIndexOf('\n') + 1;
    const indent = content.slice(lineStart, lastScriptIdx).match(/^\s*/)[0];
    content = content.slice(0, insertPos) + `\n${indent}${breadcrumbScript}` + content.slice(insertPos);
  } else if (content.includes('<>') || content.includes('<React.Fragment>')) {
    // Already has a fragment, add inside it
    const fragStart = content.indexOf('<>');
    if (fragStart !== -1) {
      const afterFrag = fragStart + 2;
      const nextLine = content.indexOf('\n', afterFrag);
      const indent = content.slice(afterFrag, nextLine).match(/^\s*/)?.[0] || '      ';
      content = content.slice(0, afterFrag) + `\n      ${breadcrumbScript}` + content.slice(afterFrag);
    }
  } else {
    // Need to wrap the return in a fragment
    // Find the return statement and wrap it
    const returnMatch = content.match(/return\s*\(\s*/);
    if (returnMatch) {
      // Replace `return (` with `return (<>` and close with `</>)`
      // Actually, let's wrap the entire return expression
      content = content.replace(
        /return\s*\(\s*/,
        `return (\n      <>\n        ${breadcrumbScript}\n        `
      );
      // Close the fragment before the final closing paren
      // Find the last `)` that closes the return
      // This is tricky - let's find the last line before the closing }
      const lines = content.split('\n');
      let braceDepth = 0;
      let returnDepth = null;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('return (')) returnDepth = braceDepth;
        for (const ch of lines[i]) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }
      }
      // Simpler approach: find the closing of the main component function
      // and add </> before the last )
      // Actually, let me handle this differently for different page patterns
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`DONE: ${pageInfo.file}`);
}

for (const page of pages) {
  processPage(page);
}