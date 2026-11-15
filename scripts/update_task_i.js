const fs = require('fs');

// 1. Update components/layout/Header.tsx
let header = fs.readFileSync('components/layout/Header.tsx', 'utf8');
header = header.replace(/\r\n/g, '\n');

// Replace desktop GetQuoteModal with Link to /free-website-audit
const oldDesktopQuote = `<GetQuoteModal
              triggerText="Get Quote"
              source="Header Desktop CTA"
              triggerClassName="!py-2.5 !px-5 !text-xs !font-bold !rounded-full shadow-md shrink-0"
            />`;

const newDesktopQuote = `<Link
              href="/free-website-audit"
              title="Get a Free Website Audit"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white !py-2.5 !px-5 !text-xs !font-bold !rounded-full shadow-md shrink-0 transition-all hover:scale-105 active:scale-95 flex items-center justify-center text-center"
            >
              Get a Free Website Audit
            </Link>`;

if (header.includes(oldDesktopQuote)) {
  header = header.replace(oldDesktopQuote, newDesktopQuote);
  console.log('Updated desktop CTA in Header.tsx');
} else {
  console.log('Could not find exact oldDesktopQuote in Header.tsx, trying regex...');
  header = header.replace(/<GetQuoteModal[\s\S]*?triggerText="Get Quote"[\s\S]*?\/>/, newDesktopQuote);
  console.log('Updated desktop CTA via regex');
}

// Replace mobile drawer GetQuoteModal with Link
const oldMobileQuote = `<GetQuoteModal
            triggerText="Get Free Quote"
            source="Mobile Navigation Drawer"
            triggerClassName="w-full justify-center !py-3.5 !text-sm !font-bold !rounded-xl shadow-md mt-4"
          />

          <Link
            href="/free-website-audit"
            title="Free Website Audit"
            className="bg-[#2563EB] hover:bg-[#3B82F6] text-white text-center font-bold px-6 py-3.5 rounded-full shadow-md mt-2"
          >
            Free Website Audit
          </Link>`;

const newMobileQuote = `<Link
            href="/free-website-audit"
            title="Get a Free Website Audit"
            onClick={() => setIsMobileOpen(false)}
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center font-bold text-sm py-3.5 px-6 rounded-xl shadow-md mt-4 transition-all block"
          >
            Get a Free Website Audit
          </Link>`;

if (header.includes(oldMobileQuote)) {
  header = header.replace(oldMobileQuote, newMobileQuote);
  console.log('Updated mobile CTA in Header.tsx');
} else {
  console.log('Could not find exact oldMobileQuote, searching...');
  header = header.replace(/<GetQuoteModal[\s\S]*?triggerText="Get Free Quote"[\s\S]*?\/>\s*<Link[\s\S]*?Free Website Audit[\s\S]*?<\/Link>/, newMobileQuote);
  console.log('Updated mobile CTA via regex');
}

fs.writeFileSync('components/layout/Header.tsx', header, 'utf8');

// 2. Update components/sections/ModernHeroSection.tsx CTA button text
let hero = fs.readFileSync('components/sections/ModernHeroSection.tsx', 'utf8');
hero = hero.replace(/\r\n/g, '\n');
hero = hero.replace(
  '<span>Request Free Consultation &amp; Proposal</span>',
  '<span>Get a Free Website Audit</span>'
);
fs.writeFileSync('components/sections/ModernHeroSection.tsx', hero, 'utf8');
console.log('Updated ModernHeroSection.tsx CTA button text');

// 3. Update components/sections/HomePageComponent.tsx line 1330
let homeComp = fs.readFileSync('components/sections/HomePageComponent.tsx', 'utf8');
homeComp = homeComp.replace(/\r\n/g, '\n');

const oldHomeCTA = `<GetQuoteModal
                    triggerText="Get a Free Consultation"
                    source="Free Tools Lead Consultation"
                    defaultService="Web Design & Landing Page"
                    triggerClassName="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer inline-flex items-center justify-center"
                    replaceClassName
                    hideIcons
                  />`;

const newHomeCTA = `<Link
                    href="/free-website-audit"
                    className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer inline-flex items-center justify-center"
                  >
                    Get a Free Website Audit
                  </Link>`;

if (homeComp.includes(oldHomeCTA)) {
  homeComp = homeComp.replace(oldHomeCTA, newHomeCTA);
  fs.writeFileSync('components/sections/HomePageComponent.tsx', homeComp, 'utf8');
  console.log('Updated Free Tools CTA in HomePageComponent.tsx');
}

// 4. Update components/sections/PricingSection.tsx
let pricing = fs.readFileSync('components/sections/PricingSection.tsx', 'utf8');
pricing = pricing.replace(/\r\n/g, '\n');

// Replace scope badge on all cards with starting price + Custom Quote
const oldScopeBadge1 = `{/* Scope Badge (No Price Displayed) */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Essential Presence</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                Custom Quote
              </span>
            </div>`;

const newScopeBadge1 = `{/* Pricing Badge */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">Starting from</span>
                <span className="text-sm font-extrabold text-[#7C3AED]">$1,200</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-purple-100 shadow-xs">
                Custom Quote
              </span>
            </div>`;

const oldScopeBadge2 = `{/* Scope Badge (No Price Displayed) */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Growth &amp; Conversion</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                Custom Quote
              </span>
            </div>`;

const newScopeBadge2 = `{/* Pricing Badge */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">Starting from</span>
                <span className="text-sm font-extrabold text-[#7C3AED]">$1,200</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-purple-100 shadow-xs">
                Custom Quote
              </span>
            </div>`;

const oldScopeBadge3 = `{/* Scope Badge (No Price Displayed) */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-dark">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Bespoke Engineering</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-100">
                Custom Quote
              </span>
            </div>`;

const newScopeBadge3 = `{/* Pricing Badge */}
            <div className="mb-6 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#6B6478] uppercase tracking-wider">Starting from</span>
                <span className="text-sm font-extrabold text-[#7C3AED]">$1,200</span>
              </div>
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-purple-100 shadow-xs">
                Custom Quote
              </span>
            </div>`;

pricing = pricing.replace(oldScopeBadge1, newScopeBadge1);
pricing = pricing.replace(oldScopeBadge2, newScopeBadge2);
pricing = pricing.replace(oldScopeBadge3, newScopeBadge3);

fs.writeFileSync('components/sections/PricingSection.tsx', pricing, 'utf8');
console.log('Updated PricingSection.tsx prices');
