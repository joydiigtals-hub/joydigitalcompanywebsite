const fs = require('fs');

// 1. Update app/contact/page.tsx
let contactContent = fs.readFileSync('app/contact/page.tsx', 'utf8');

// Add import
if (!contactContent.includes('from "@/lib/siteConfig"')) {
  contactContent = contactContent.replace(
    'import { buildPageGraphSchema } from "@/lib/seo/schema";',
    'import { buildPageGraphSchema } from "@/lib/seo/schema";\nimport { SITE_URL, siteConfig } from "@/lib/siteConfig";'
  );
}

// Replace contactEmail
contactContent = contactContent.replace(
  'const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com";',
  'const contactEmail = siteConfig.email;'
);

// Replace hardcoded canonicals
contactContent = contactContent.replace(
  'canonical: "https://www.joydigital.in/contact",',
  'canonical: `${SITE_URL}/contact`,'
);
contactContent = contactContent.replace(
  '"x-default": "https://www.joydigital.in/contact",',
  '"x-default": `${SITE_URL}/contact`,'
);
contactContent = contactContent.replace(
  '"en-us": "https://www.joydigital.in/us/contact",',
  '"en-us": `${SITE_URL}/us/contact`,'
);
contactContent = contactContent.replace(
  '"en-gb": "https://www.joydigital.in/uk/contact",',
  '"en-gb": `${SITE_URL}/uk/contact`,'
);
contactContent = contactContent.replace(
  '"en-ae": "https://www.joydigital.in/ae/contact",',
  '"en-ae": `${SITE_URL}/ae/contact`,'
);
contactContent = contactContent.replace(
  '"en-in": "https://www.joydigital.in/contact",',
  '"en-in": `${SITE_URL}/contact`,'
);
contactContent = contactContent.replace(
  'url: "https://www.joydigital.in/contact",',
  'url: `${SITE_URL}/contact`,'
);
contactContent = contactContent.replace(
  'images: [{ url: "https://www.joydigital.in/assets/images/hero-banner.webp",',
  'images: [{ url: `${SITE_URL}/assets/images/hero-banner.webp`,'
);
contactContent = contactContent.replace(
  'const canonicalUrl = "https://www.joydigital.in/contact";',
  'const canonicalUrl = `${SITE_URL}/contact`;'
);
contactContent = contactContent.replace(
  '{ name: "Home", item: "https://www.joydigital.in" },',
  '{ name: "Home", item: SITE_URL },'
);

// Add Chennai Partner Office card under HQ Office card in contact page
const hqCardTarget = `                {/* Location Card */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7C3AED] text-xl flex-shrink-0 shadow-sm border border-purple-100">
                    <i className="fa-solid fa-map-location-dot" />
                  </div>
                  <div className="flex flex-col">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-purple-100 text-[#6D28D9] text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                      Office Address
                    </span>
                    <span className="text-[15px] font-bold text-slate-900 leading-snug">
                      Joy Digital Growth Agency, Madurai, Tamil Nadu, India
                    </span>
                  </div>
                </div>`;

const hqCardReplacement = `                {/* Office Address (HQ) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7C3AED] text-xl flex-shrink-0 shadow-sm border border-purple-100">
                    <i className="fa-solid fa-map-location-dot" />
                  </div>
                  <div className="flex flex-col">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-purple-100 text-[#6D28D9] text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                      HQ Office
                    </span>
                    <span className="text-[15px] font-bold text-slate-900 leading-snug">
                      Joy Digital Growth Agency, Madurai, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                {/* Chennai Partner Office */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 text-xl flex-shrink-0 shadow-sm border border-slate-200">
                    <i className="fa-solid fa-handshake" />
                  </div>
                  <div className="flex flex-col">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-extrabold uppercase tracking-wider w-fit mb-1">
                      Chennai (Partner Office)
                    </span>
                    <span className="text-[13px] text-slate-700 leading-snug">
                      11, Jothi nagar 5th street, Murugappa polytechnic nearby, Avadi, Chennai 600053
                    </span>
                  </div>
                </div>`;

// Normalize line endings for replacement
contactContent = contactContent.replace(/\r\n/g, '\n');
const normalizedTarget = hqCardTarget.replace(/\r\n/g, '\n');
if (contactContent.includes(normalizedTarget)) {
  contactContent = contactContent.replace(normalizedTarget, hqCardReplacement.replace(/\r\n/g, '\n'));
} else {
  console.log('HQ card target not exact match, searching flexible...');
}
fs.writeFileSync('app/contact/page.tsx', contactContent, 'utf8');
console.log('contact page updated.');

// 2. Remove personal LinkedIn from company sameAs in:
const filesWithPersonalSameAs = [
  'app/custom-website-development/page.tsx',
  'app/seo-services-chennai/page.tsx',
  'app/website-development-company-chennai/page.tsx'
];

for (const f of filesWithPersonalSameAs) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/"https:\/\/www\.linkedin\.com\/in\/saravanan-l-34a861154\/",\s*/g, '');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Cleaned sameAs in ${f}`);
  }
}
