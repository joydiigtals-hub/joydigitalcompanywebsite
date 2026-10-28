const fs = require('fs');

// 1. Update components/layout/Header.tsx
let header = fs.readFileSync('components/layout/Header.tsx', 'utf8');
header = header.replace(/\r\n/g, '\n');

const oldLanguages = `const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "Arabic", flag: "🇦🇪" },
  { code: "sw", label: "Swahili", flag: "🇰🇪" },
  { code: "af", label: "Afrikaans", flag: "🇿🇦" },
  { code: "fr", label: "French", flag: "🇫🇷" },
  { code: "es", label: "Spanish", flag: "🇪🇸" },
  { code: "de", label: "German", flag: "🇩🇪" },
  { code: "hi", label: "Hindi", flag: "🇮🇳" },
];`;

const newLanguages = `const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
];`;

if (header.includes(oldLanguages)) {
  header = header.replace(oldLanguages, newLanguages);
  fs.writeFileSync('components/layout/Header.tsx', header, 'utf8');
  console.log('Updated LANGUAGES in Header.tsx');
} else {
  console.log('Could not find oldLanguages in Header.tsx, trying regex...');
  header = header.replace(/const LANGUAGES = \[[\s\S]*?\];/, newLanguages);
  fs.writeFileSync('components/layout/Header.tsx', header, 'utf8');
  console.log('Updated LANGUAGES via regex in Header.tsx');
}

// 2. Remove GoogleTranslateLoader from app/layout.tsx
let layout = fs.readFileSync('app/layout.tsx', 'utf8');
layout = layout.replace(/\r\n/g, '\n');
layout = layout.replace('<GoogleTranslateLoader />\n', '');
layout = layout.replace('<GoogleTranslateLoader />', '');
layout = layout.replace('import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";\n', '');
layout = layout.replace('import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";', '');
fs.writeFileSync('app/layout.tsx', layout, 'utf8');
console.log('Removed GoogleTranslateLoader from app/layout.tsx');

// 3. Clean hreflang languages in country routes
// Target: app/[country]/page.tsx
let countryHome = fs.readFileSync('app/[country]/page.tsx', 'utf8');
countryHome = countryHome.replace(/\r\n/g, '\n');
countryHome = countryHome.replace(
  /languages:\s*\{[\s\S]*?\},/g,
  `languages: {
        "x-default": "https://www.joydigital.in",
        "en-IN": "https://www.joydigital.in",
        "en-US": "https://www.joydigital.in/us",
        "en-GB": "https://www.joydigital.in/uk",
        "en-AE": "https://www.joydigital.in/ae",
        "en-CA": "https://www.joydigital.in/ca",
        "en-AU": "https://www.joydigital.in/au",
      },`
);
fs.writeFileSync('app/[country]/page.tsx', countryHome, 'utf8');
console.log('Updated app/[country]/page.tsx hreflangs');

// Target: app/[country]/contact/page.tsx
let countryContact = fs.readFileSync('app/[country]/contact/page.tsx', 'utf8');
countryContact = countryContact.replace(/\r\n/g, '\n');
countryContact = countryContact.replace(
  /languages:\s*\{[\s\S]*?\},/g,
  `languages: {
        "x-default": "https://www.joydigital.in/contact",
        "en-IN": "https://www.joydigital.in/contact",
        "en-US": "https://www.joydigital.in/us/contact",
        "en-GB": "https://www.joydigital.in/uk/contact",
        "en-AE": "https://www.joydigital.in/ae/contact",
        "en-CA": "https://www.joydigital.in/ca/contact",
        "en-AU": "https://www.joydigital.in/au/contact",
      },`
);
fs.writeFileSync('app/[country]/contact/page.tsx', countryContact, 'utf8');
console.log('Updated app/[country]/contact/page.tsx hreflangs');

// Target: app/[country]/seo-services/page.tsx
let countrySeo = fs.readFileSync('app/[country]/seo-services/page.tsx', 'utf8');
countrySeo = countrySeo.replace(/\r\n/g, '\n');
countrySeo = countrySeo.replace(
  /languages:\s*\{[\s\S]*?\},/g,
  `languages: {
        "x-default": "https://www.joydigital.in/seo-services",
        "en-IN": "https://www.joydigital.in/seo-services",
        "en-US": "https://www.joydigital.in/us/seo-services",
        "en-GB": "https://www.joydigital.in/uk/seo-services",
        "en-AE": "https://www.joydigital.in/ae/seo-services",
        "en-CA": "https://www.joydigital.in/ca/seo-services",
        "en-AU": "https://www.joydigital.in/au/seo-services",
      },`
);
fs.writeFileSync('app/[country]/seo-services/page.tsx', countrySeo, 'utf8');
console.log('Updated app/[country]/seo-services/page.tsx hreflangs');

// Target: app/[country]/website-development/page.tsx
let countryWeb = fs.readFileSync('app/[country]/website-development/page.tsx', 'utf8');
countryWeb = countryWeb.replace(/\r\n/g, '\n');
countryWeb = countryWeb.replace(
  /languages:\s*\{[\s\S]*?\},/g,
  `languages: {
        "x-default": "https://www.joydigital.in/website-development",
        "en-IN": "https://www.joydigital.in/website-development",
        "en-US": "https://www.joydigital.in/us/website-development",
        "en-GB": "https://www.joydigital.in/uk/website-development",
        "en-AE": "https://www.joydigital.in/ae/website-development",
        "en-CA": "https://www.joydigital.in/ca/website-development",
        "en-AU": "https://www.joydigital.in/au/website-development",
      },`
);
fs.writeFileSync('app/[country]/website-development/page.tsx', countryWeb, 'utf8');
console.log('Updated app/[country]/website-development/page.tsx hreflangs');

// Target: app/contact/page.tsx
let mainContact = fs.readFileSync('app/contact/page.tsx', 'utf8');
mainContact = mainContact.replace(/\r\n/g, '\n');
mainContact = mainContact.replace(
  /languages:\s*\{[\s\S]*?\},/g,
  `languages: {
      "x-default": \`\${SITE_URL}/contact\`,
      "en-IN": \`\${SITE_URL}/contact\`,
      "en-US": \`\${SITE_URL}/us/contact\`,
      "en-GB": \`\${SITE_URL}/uk/contact\`,
      "en-AE": \`\${SITE_URL}/ae/contact\`,
      "en-CA": \`\${SITE_URL}/ca/contact\`,
      "en-AU": \`\${SITE_URL}/au/contact\`,
    },`
);
fs.writeFileSync('app/contact/page.tsx', mainContact, 'utf8');
console.log('Updated app/contact/page.tsx hreflangs');

// Target: app/seo-services/page.tsx
let mainSeo = fs.readFileSync('app/seo-services/page.tsx', 'utf8');
mainSeo = mainSeo.replace(/\r\n/g, '\n');
if (mainSeo.includes('languages:')) {
  mainSeo = mainSeo.replace(
    /languages:\s*\{[\s\S]*?\},/g,
    `languages: {
      "x-default": "https://www.joydigital.in/seo-services",
      "en-IN": "https://www.joydigital.in/seo-services",
      "en-US": "https://www.joydigital.in/us/seo-services",
      "en-GB": "https://www.joydigital.in/uk/seo-services",
      "en-AE": "https://www.joydigital.in/ae/seo-services",
      "en-CA": "https://www.joydigital.in/ca/seo-services",
      "en-AU": "https://www.joydigital.in/au/seo-services",
    },`
  );
  fs.writeFileSync('app/seo-services/page.tsx', mainSeo, 'utf8');
  console.log('Updated app/seo-services/page.tsx hreflangs');
}

// Target: app/website-development/page.tsx
let mainWeb = fs.readFileSync('app/website-development/page.tsx', 'utf8');
mainWeb = mainWeb.replace(/\r\n/g, '\n');
if (mainWeb.includes('languages:')) {
  mainWeb = mainWeb.replace(
    /languages:\s*\{[\s\S]*?\},/g,
    `languages: {
      "x-default": "https://www.joydigital.in/website-development",
      "en-IN": "https://www.joydigital.in/website-development",
      "en-US": "https://www.joydigital.in/us/website-development",
      "en-GB": "https://www.joydigital.in/uk/website-development",
      "en-AE": "https://www.joydigital.in/ae/website-development",
      "en-CA": "https://www.joydigital.in/ca/website-development",
      "en-AU": "https://www.joydigital.in/au/website-development",
    },`
  );
  fs.writeFileSync('app/website-development/page.tsx', mainWeb, 'utf8');
  console.log('Updated app/website-development/page.tsx hreflangs');
}
