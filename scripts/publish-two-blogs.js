const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const dns = require('dns');

// Public DNS servers to resolve MongoDB SRV records reliably
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  console.warn('DNS setServers error:', e.message);
}

const uri = process.env.MONGODB_URI || "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";

// ==========================================
// BLOG 1 DATA
// ==========================================
const blog1Slug = "is-your-slow-website-costing-you-customers-how-custom-coding-drives-growth";
const blog1Title = "Is Your Slow Website Costing You Customers? How Custom Coding Drives Growth";
const blog1Description = "Is your slow website costing you customers? Discover why load speeds over 3 seconds drive high bounce rates, lost sales, and poor Google rankings—and how custom coding unlocks massive business growth.";

const blog1Content = `Imagine walking into a shop where the door takes forever to open. You would probably walk away, right? Your website visitors do the exact same thing. If your site takes more than three seconds to load, you are losing potential clients every single day. In today’s fast digital world, speed is everything. Let's look at why website speed matters and how custom coding helps your business grow.

Whether you run a local service enterprise, a high-volume B2B manufacturing firm, or an e-commerce platform, your website acts as your primary digital storefront. Every second a prospect spends staring at a blank screen or a spinning loading indicator damages their confidence in your brand.

---

## Why Website Speed Can Make or Break Your Business

Google cares deeply about user experience, and speed is a top priority. When users click a link, they expect near-instant responses. Here is what happens when your site is slow:

### 1. High Bounce Rates
Over half of mobile users will leave a site if it takes longer than three seconds to open. 

According to benchmark research conducted across millions of mobile sessions:
* A jump from **1 second to 3 seconds** in page load time increases the probability of a bounce by **32%**.
* Delaying from **1 second to 5 seconds** spikes bounce rates by **90%**.
* When load times exceed **6 seconds**, the probability of an immediate exit surges past **106%**.

When prospective buyers bounce immediately, they do not just leave your page—they click back to Google search results and navigate directly to your closest competitor.

### 2. Lost Sales and Decreased Conversions
For online stores and service providers, even a one-second delay can drastically reduce conversions and completed orders.

A single second delay in page responsiveness often results in:
* **7% drop in conversion rates:** For a company generating ₹10,00,000 monthly online, that single second costs ₹70,000 in lost revenue every month.
* **11% fewer page views:** Visitors navigate fewer product categories or case studies, reducing their likelihood of contacting your sales team.
* **16% drop in customer satisfaction:** Frustrated buyers are less likely to return or recommend your services.

Every checkout bottleneck or sluggish quotation form directly leaks revenue from your sales pipeline.

### 3. Lower Google Rankings
Slow websites get pushed down in search results, meaning fewer people find your business.

Since Google rolled out its **Core Web Vitals** initiative as an official ranking signal, search bots actively evaluate real-world user experience metrics:
* **Largest Contentful Paint (LCP):** Measures perceived loading speed. Google requires primary content to appear within **2.5 seconds**.
* **Interaction to Next Paint (INP):** Measures interface responsiveness. Delayed tap and click responses hurt your organic score.
* **Cumulative Layout Shift (CLS):** Measures visual stability to ensure buttons or banners do not unexpectedly shift as images load.

If your web platform fails these Core Web Vitals thresholds, search engines downrank your pages in favor of faster, modern competitors—diminishing your organic reach.

### 4. Wasted Advertising Spend
If you run paid campaigns through Google Ads, Meta Ads, or LinkedIn, every click costs real money. When you pay for ad traffic that lands on a slow-loading page, visitors bounce before the conversion tracking pixel or enquiry form even renders. 

Furthermore, Google Ads factors landing page load speed into your **Quality Score**. A slow page elevates your Cost-Per-Click (CPC), forcing you to spend significantly more budget for fewer qualified leads.

---

## Why Off-the-Shelf Templates Become Sluggish Over Time

Ready-made templates often come packed with heavy plugins, messy code, and scripts you do not even need.

When you install a generic WordPress theme or visual page builder:
1. **Excessive Code Bloat:** Page builders output massive nested DOM structures, loading thousands of lines of unused CSS and JavaScript across every single page.
2. **Third-Party Plugin Overhead:** Adding plugins for simple functionalities—such as basic sliders, WhatsApp buttons, form handlers, or SEO tags—creates dozens of additional external HTTP requests.
3. **Database Bottlenecks:** Every page hit triggers multiple dynamic SQL queries, leading to sluggish server response times (Time to First Byte - TTFB).
4. **Unoptimized Assets:** Pre-made themes rarely automate image compression, delivering bulky uncompressed PNG or JPEG files that choke mobile bandwidth.

While drag-and-drop builders seem convenient during initial setup, they quickly become an anchor dragging down your business's online performance.

---

## How Custom Coding Fixes Slow Load Times

On the other hand, custom website development ensures:

* **Only clean, necessary code is written:** Custom architectures omit heavy dependencies, unused libraries, and bloated stylesheets. Every single line of code is engineered specifically for your business workflow and user journey.
* **Advanced caching and image optimization are built directly into the foundation:** Modern frameworks automatically convert visual assets into next-generation **WebP** and **AVIF** formats, serve assets from global Content Delivery Networks (CDNs), and leverage edge-level server-side rendering (SSR) and static generation (SSG).
* **Your mobile site runs lightning-fast, keeping your visitors engaged and happy:** By minimizing the critical rendering path and optimizing client-side hydration, custom-coded web applications open instantly even on average 4G/5G mobile connections.

### Comparison: Bloated Templates vs. Custom Modern Engineering

| Performance Factor | Generic CMS Template / Page Builder | Custom Web App (Next.js / Node.js) |
| :--- | :--- | :--- |
| **Typical Page Load Time** | 4.5 – 8.5 seconds | Under 1.2 seconds |
| **Google PageSpeed Score** | Frequently 35 – 65 / 100 | Consistently 90 – 100 / 100 |
| **Code Payload Size** | 2.5MB – 5MB+ | 250KB – 600KB |
| **Core Web Vitals Pass Rate** | Often fails LCP & INP benchmarks | 100% Green Core Web Vitals |
| **Third-Party Dependency** | 20+ plugins requiring updates | Zero plugin baggage; native code |
| **Security Risk Profile** | High exposure to plugin exploits | Isolated, compiled, highly secure |

---

## How Custom Website Speed Drives Business Growth

Investing in custom web engineering delivers measurable, compounding commercial returns:

### 1. Surging Organic Traffic & Search Dominance
Fast websites win higher organic positions on search engine result pages. When your site effortlessly clears Google's Core Web Vitals benchmarks, your domain gains search authority, allowing target keywords to outrank sluggish competitors.

### 2. Higher Inquiries and Lead Velocity
A frictionless user experience directly encourages conversions. When visitors click a phone call button, submit a consultation form, or open a WhatsApp chat, the interaction happens instantaneously. Fast interactions eliminate purchase hesitation and dramatically improve user satisfaction.

### 3. Superior Mobile User Engagement
Over 70% of web traffic across modern consumer and B2B sectors originates from mobile devices. Custom-coded web applications deliver app-like responsiveness on smartphones, keeping visitors engaged, reducing drop-offs, and cultivating repeat customer loyalty.

---

## 5 Practical Steps to Audit and Fix Your Website Speed

1. **Benchmark Your Site Speed:** Run your website URL through [Google PageSpeed Insights](https://pagespeed.web.dev/) and evaluate your field data for Mobile and Desktop.
2. **Audit Render-Blocking Resources:** Identify external stylesheets, tracking pixels, and analytics scripts that delay initial content rendering.
3. **Compress and Modernize Media:** Replace legacy JPG/PNG images with responsive WebP or AVIF formats using responsive \`srcset\` rules.
4. **Reduce Server Response Time (TTFB):** Implement Redis caching or migrate to modern serverless edge hosting.
5. **Migrate to Modern Custom Architecture:** Transition away from fragile, plugin-heavy themes to modern frameworks like **Next.js** paired with lightweight backend systems.

---

## Conclusion

Do not let a slow website hold your business back. Stop relying on heavy templates and invest in clean performance.

Saving money upfront on an off-the-shelf template often proves to be an expensive mistake when measured against lost customers, diminished Google rankings, and wasted ad spend. When your website operates at sub-second speeds, you provide an unforgettable customer experience that differentiates your brand from the competition and maximizes your conversion rates.

---

## Call to Action

**Is your current website feeling sluggish?** Let our experts audit your site speed and show you how to fix it. 

* [Click here to explore Joy Digital Custom Website Services](https://www.joydigital.in/website-development)
* [Run a Free Website Speed & SEO Audit](https://www.joydigital.in/free-website-audit)
* [Migrate from WordPress to Next.js](https://www.joydigital.in/wordpress-to-nextjs-migration)`;

const blog1Faqs = [
  {
    question: "Why is website speed so critical for business growth?",
    answer: "Website speed directly affects user satisfaction, bounce rates, and conversion numbers. Over 50% of mobile users abandon websites taking longer than 3 seconds to load. A faster site delivers better user engagement, higher search engine rankings, and more closed sales."
  },
  {
    question: "How does website speed affect Google search rankings?",
    answer: "Google uses page speed and Core Web Vitals (LCP, INP, CLS) as official search ranking factors. Fast-loading websites receive higher search visibility and lower bounce rates, while sluggish sites get pushed down in search results."
  },
  {
    question: "Why do WordPress and page builder templates load slowly?",
    answer: "Ready-made templates often rely on heavy page builders, unminified CSS, redundant JavaScript libraries, and dozens of third-party plugins. This creates excessive code bloat, high server overhead, and delayed page rendering."
  },
  {
    question: "How does custom coding with Next.js improve site performance?",
    answer: "Custom coding with Next.js produces clean, semantic code with zero unnecessary plugins. Features like automatic WebP image optimization, server-side pre-rendering, and global edge caching enable pages to load in under 1.5 seconds."
  },
  {
    question: "Can Joy Digital audit and speed up our existing website?",
    answer: "Yes. At Joy Digital, we conduct comprehensive speed and Core Web Vitals audits to pinpoint performance bottlenecks, optimize assets, and re-engineer websites to achieve top-tier PageSpeed scores."
  }
];

const blog1InternalLinks = [
  { anchorText: "Free Website Speed Audit Tool", targetUrl: "/free-website-audit" },
  { anchorText: "Custom Website Development Services", targetUrl: "/website-development" },
  { anchorText: "Next.js Development Agency", targetUrl: "/nextjs-development-agency" },
  { anchorText: "WordPress to Next.js Migration", targetUrl: "/wordpress-to-nextjs-migration" },
  { anchorText: "How Fast Should Corporate Website Load", targetUrl: "/blog/how-fast-should-corporate-website-load-rank-google" }
];

const blog1Tags = [
  "Website Speed",
  "Business Growth",
  "Custom Web Development",
  "Core Web Vitals",
  "Conversion Rate Optimization",
  "Next.js"
];

// ==========================================
// BLOG 2 DATA
// ==========================================
const blog2Slug = "template-websites-vs-custom-web-apps-best-investment";
const blog2Title = "Template Websites vs. Custom Web Apps: What is the Best Investment for Growing Businesses?";
const blog2Description = "Template websites vs custom web apps: Compare upfront costs, long-term ROI, security, scalability, and performance to choose the best digital investment for your growing business.";

const blog2Content = `Starting a new business or taking your brand online brings up a big question: should you use a cheap drag-and-drop template, or invest in custom development? While templates look easy and affordable at first, do they actually support long-term growth? Let’s break down which option makes the most sense for your business.

In today's competitive landscape, your digital presence is not simply an aesthetic brochure—it is your central sales hub, operational engine, and brand authority cornerstone. Choosing the wrong technical foundation early on can lead to costly rebuilds, security vulnerabilities, and sluggish performance that suffocates your momentum.

---

## Template Websites: The Pros and Cons

Platform templates (like WordPress builders, Wix, or Squarespace) are very popular for good reasons:

### The Good
* **Quick Setup:** Pre-designed layouts allow basic landing pages to go live within a few days.
* **Low Starting Cost:** Modest upfront financial commitment, with hundreds of off-the-shelf themes available for under $100.
* **No Coding Knowledge Required:** Non-technical teams can easily adjust text, replace images, and add standard content blocks using drag-and-drop editors.

### The Catch
* **Limited Customization:** You are confined to the rigid constraints of the template's layout. Adapting the design to match complex business workflows or distinctive branding often leads to frustrating design compromises.
* **Higher Security Risks Due to Plugin Updates:** Off-the-shelf platforms rely heavily on third-party plugins for functionality. Over 90% of WordPress vulnerabilities originate from outdated or poorly maintained plugins and themes, exposing your business to data breaches and malware.
* **Sites That Slow Down or Crash as Traffic Grows:** Monolithic template themes suffer from severe code bloat, uncompressed scripts, and redundant CSS. As you add content or experience traffic spikes, database queries stall and server response times degrade.
* **The "Template Tax" (Hidden Recurring Costs):** While initial setup is cheap, ongoing theme renewals, paid plugin subscriptions (for forms, SEO, backups, and security), and emergency developer fixes quickly balloon into high recurring expenses.

---

## Custom Web Apps: Built for Real Growth

Websites built completely from scratch are designed specifically around your business goals:

### Complete Flexibility
Add any unique feature, interactive calculator, customer portal, or operational workflow you need as your business expands. A custom codebase seamlessly integrates with your existing CRM, enterprise ERP, inventory databases, payment gateways, and WhatsApp Business APIs without requiring third-party plugins.

### Standout Branding & Unmatched User Experience
Create a unique user experience that sets you apart from competitors using the same standard templates. Custom web engineering allows you to design every user flow, micro-animation, and mobile interface strictly around your ideal customer's conversion journey.

### Enhanced Security & Enterprise Stability
Custom-built security layers keep your business data safe from threats. By engineering dedicated endpoints and compiled server architectures without publicly exposed admin panels (\`/wp-admin\`), your digital platform is virtually impervious to generic automated bot attacks and plugin exploits.

### Proprietary Intellectual Property
When you invest in custom web development, your business owns 100% of the clean, unencumbered source code. You are never held hostage by proprietary platform lock-in, recurring theme license expirations, or vendor price hikes.

---

## Head-to-Head Comparison: Template vs. Custom Web App

| Evaluation Factor | Platform Template (WordPress/Wix) | Custom Web Application (Next.js/React) |
| :--- | :--- | :--- |
| **Initial Investment** | Low upfront investment | Moderate upfront investment |
| **3-Year Total Cost of Ownership (TCO)** | High (plugins, licenses, bug fixing, rebuilds) | Low (no plugin licenses, minimal maintenance) |
| **Page Speed & Core Web Vitals** | Typically 3 – 8 seconds (heavy code bloat) | Under 1.5 seconds (sub-second edge rendering) |
| **SEO Ranking Capabilities** | Basic; hampered by code bloat & slow speeds | Superior; clean semantic markup, fast LCP/INP |
| **Scalability & Traffic Spikes** | Prone to crashes without costly hosting upgrades | Effortlessly handles millions of requests |
| **Custom Workflow Integration** | Restricted to available plugin marketplace | Limitless; tailored to exact business logic |
| **Security & Vulnerability Exposure** | High risk from unpatched third-party plugins | Robust; custom endpoints & compiled code |
| **Brand Differentiation** | Cookie-cutter look shared by thousands | 100% unique, bespoke corporate brand identity |

---

## Which One Should You Choose?

### When a Template Might Be Acceptable:
* You are testing an unproven business concept or running a personal hobby project.
* You only need a simple, temporary 1-page online brochure for a local mom-and-pop store.
* You have zero budget and do not rely on your website for inbound lead generation, client onboarding, or revenue.

### When a Custom Web App Is the Smartest Long-Term Investment:
* **Growing Service & B2B Enterprises:** You need high search visibility, rapid lead capture, and authoritative industry positioning.
* **Exporters & Manufacturers:** You require international multilingual support, sub-second global loading speeds, and integrated Request-for-Quotation (RFQ) engines.
* **E-Commerce & Digital Booking Brands:** You require frictionless checkout, custom product configurators, and reliable high-traffic holiday scaling.
* **Companies Requiring Workflow Automation:** You want your website to directly sync customer inquiries into WhatsApp, CRMs, or accounting platforms.

If you only need a basic online brochure for a local shop, a template might work fine. But if you want unique workflows, high security, and a platform ready to scale as your business grows, custom web development is the smartest long-term investment.

---

## Conclusion

Saving money upfront with a template might seem smart, but a custom website pays off by supporting your growth without future headaches.

Treating your website as an operational asset rather than a cosmetic expense transforms your online presence into a dependable 24/7 client acquisition engine. A custom web application engineered with modern frameworks like **Next.js** ensures lightning-fast speeds, airtight cybersecurity, and the structural flexibility to scale alongside your commercial ambitions.

---

## Call to Action

**Unsure whether your growing business needs a template or a custom web app?** Talk to our tech experts to find the right path for your budget. 

* [Click here to check out our custom web development solutions](https://www.joydigital.in/website-development)
* [Explore Next.js High-Performance Development](https://www.joydigital.in/nextjs-development-agency)
* [Discover Custom UI/UX Web Design Services](https://www.joydigital.in/web-design-services)
* [Read the Ultimate 8-Step Guide to Website Development](https://www.joydigital.in/blog/ultimate-8-step-guide-website-development-process)`;

const blog2Faqs = [
  {
    question: "What is the key difference between a template website and a custom web app?",
    answer: "A template website relies on pre-built page themes and third-party plugins with limited customization and heavy code bloat. A custom web app is engineered from the ground up tailored to your exact business logic, offering unmatched speed, security, and scalability."
  },
  {
    question: "Is a custom website more cost-effective in the long run?",
    answer: "Yes. While templates appear cheaper upfront, recurring plugin licenses, security patches, performance slowdowns, and eventual rebuilds make them expensive over 2 to 3 years. A custom web app eliminates plugin subscriptions and delivers higher conversion ROI."
  },
  {
    question: "Why do custom websites rank higher on Google than template sites?",
    answer: "Custom websites built with modern frameworks like Next.js feature clean semantic HTML, zero code bloat, and sub-second load times that easily pass Google Core Web Vitals, resulting in superior organic search rankings."
  },
  {
    question: "Can our business migrate an existing template site to a custom web app?",
    answer: "Yes. At Joy Digital, we frequently migrate clients from sluggish WordPress, Wix, or Shopify templates to high-performance custom Next.js applications while preserving all existing URLs and SEO authority."
  },
  {
    question: "How long does custom web application development take?",
    answer: "A custom corporate web application typically takes between 2 to 4 weeks depending on workflow requirements, while complex custom platforms or e-commerce apps take 6 to 10 weeks."
  }
];

const blog2InternalLinks = [
  { anchorText: "Custom Web Development Solutions", targetUrl: "/website-development" },
  { anchorText: "Next.js Development Agency", targetUrl: "/nextjs-development-agency" },
  { anchorText: "Custom Web Design Services", targetUrl: "/web-design-services" },
  { anchorText: "WordPress to Next.js Migration", targetUrl: "/wordpress-to-nextjs-migration" },
  { anchorText: "Ultimate 8-Step Guide to Website Development", targetUrl: "/blog/ultimate-8-step-guide-website-development-process" }
];

const blog2Tags = [
  "Template Websites",
  "Custom Web Apps",
  "Web Development",
  "Business Growth",
  "Next.js",
  "Web Performance"
];

// ==========================================
// PUBLISHING FUNCTION
// ==========================================
async function publishBlogs() {
  const client = new MongoClient(uri);
  const today = new Date().toISOString().split("T")[0];

  const blogPosts = [
    {
      slug: blog1Slug,
      title: blog1Title,
      description: blog1Description,
      date: today,
      lastUpdatedDate: today,
      category: "Web Speed",
      author: "Saravanan L",
      image: "/assets/images/gsc-performance-dashboard.webp",
      imageAlt: blog1Title,
      imageCaption: "Website Speed, Core Web Vitals, and Business Conversion Growth",
      tags: blog1Tags,
      showTableOfContents: true,
      showAuthorInfo: true,
      showFeaturedImage: true,
      seoTitle: blog1Title + " | Joy Digital",
      metaDescription: blog1Description,
      focusKeyword: "slow website costing customers",
      secondaryKeywords: "website speed and business growth, custom coding for web speed, slow website bounce rate, Next.js page speed optimization, Core Web Vitals",
      canonicalUrl: "https://www.joydigital.in/blog/" + blog1Slug,
      robots: "Index, Follow",
      internalLinks: blog1InternalLinks,
      autoSuggestRelated: true,
      manualRelatedSlugs: [
        "why-slow-website-costing-your-business-customers",
        "how-fast-should-corporate-website-load-rank-google",
        "why-international-businesses-need-fast-website"
      ],
      authorName: "Saravanan L",
      authorRole: "Technical Web & SEO Specialist",
      authorBio: "Digital marketing strategist and Next.js web developer focusing on search optimization, sub-second web architecture, and conversion rate growth.",
      authorImage: "/assets/images/logo.webp",
      authorProfileUrl: "https://www.joydigital.in/about",
      faqs: blog1Faqs,
      ogTitle: blog1Title + " | Joy Digital",
      ogDescription: blog1Description,
      ogImage: "https://www.joydigital.in/assets/images/gsc-performance-dashboard.webp",
      twitterTitle: blog1Title + " | Joy Digital",
      twitterDescription: blog1Description,
      twitterImage: "https://www.joydigital.in/assets/images/gsc-performance-dashboard.webp",
      status: "Published",
      scheduledPublishDate: "",
      seoScore: 98,
      content: blog1Content,
      isDeleted: false,
      updatedAt: new Date()
    },
    {
      slug: blog2Slug,
      title: blog2Title,
      description: blog2Description,
      date: today,
      lastUpdatedDate: today,
      category: "Web Development",
      author: "Saravanan L",
      image: "/assets/images/hero-banner.webp",
      imageAlt: blog2Title,
      imageCaption: "Template Websites vs Custom Web Applications: Choosing the Right Investment for Business Scalability",
      tags: blog2Tags,
      showTableOfContents: true,
      showAuthorInfo: true,
      showFeaturedImage: true,
      seoTitle: blog2Title + " | Joy Digital",
      metaDescription: blog2Description,
      focusKeyword: "template websites vs custom web apps",
      secondaryKeywords: "custom website vs template ROI, WordPress vs custom web application, Next.js web app advantages, best website investment for business growth, custom web development",
      canonicalUrl: "https://www.joydigital.in/blog/" + blog2Slug,
      robots: "Index, Follow",
      internalLinks: blog2InternalLinks,
      autoSuggestRelated: true,
      manualRelatedSlugs: [
        "ultimate-8-step-guide-website-development-process",
        "custom-website-development-requirements-guide",
        "what-is-website-design-and-development"
      ],
      authorName: "Saravanan L",
      authorRole: "Technical Web & SEO Specialist",
      authorBio: "Digital marketing strategist and Next.js web developer focusing on search optimization, sub-second web architecture, and conversion rate growth.",
      authorImage: "/assets/images/logo.webp",
      authorProfileUrl: "https://www.joydigital.in/about",
      faqs: blog2Faqs,
      ogTitle: blog2Title + " | Joy Digital",
      ogDescription: blog2Description,
      ogImage: "https://www.joydigital.in/assets/images/hero-banner.webp",
      twitterTitle: blog2Title + " | Joy Digital",
      twitterDescription: blog2Description,
      twitterImage: "https://www.joydigital.in/assets/images/hero-banner.webp",
      status: "Published",
      scheduledPublishDate: "",
      seoScore: 98,
      content: blog2Content,
      isDeleted: false,
      updatedAt: new Date()
    }
  ];

  try {
    console.log("1. Connecting to MongoDB Atlas...");
    await client.connect();
    const db = client.db("joydigital");
    const blogsCol = db.collection("blogs");

    for (const post of blogPosts) {
      console.log(`Publishing '${post.title}' to MongoDB...`);
      await blogsCol.updateOne(
        { slug: post.slug },
        { $set: post },
        { upsert: true }
      );
      console.log(` Successfully uploaded '${post.slug}' to MongoDB!`);

      // Write Local Markdown File
      const mdContent = "---\n" +
        "title: " + JSON.stringify(post.title) + "\n" +
        "description: " + JSON.stringify(post.description) + "\n" +
        "date: " + JSON.stringify(post.date) + "\n" +
        "lastUpdatedDate: " + JSON.stringify(post.lastUpdatedDate) + "\n" +
        "category: " + JSON.stringify(post.category) + "\n" +
        "author: " + JSON.stringify(post.author) + "\n" +
        "image: " + JSON.stringify(post.image) + "\n" +
        "imageAlt: " + JSON.stringify(post.imageAlt) + "\n" +
        "imageCaption: " + JSON.stringify(post.imageCaption) + "\n" +
        "tags:\n" + post.tags.map(t => "  - " + t).join("\n") + "\n" +
        "showTableOfContents: " + post.showTableOfContents + "\n" +
        "showAuthorInfo: " + post.showAuthorInfo + "\n" +
        "showFeaturedImage: " + post.showFeaturedImage + "\n" +
        "seoTitle: " + JSON.stringify(post.seoTitle) + "\n" +
        "metaDescription: " + JSON.stringify(post.metaDescription) + "\n" +
        "focusKeyword: " + JSON.stringify(post.focusKeyword) + "\n" +
        "secondaryKeywords: " + JSON.stringify(post.secondaryKeywords) + "\n" +
        "canonicalUrl: " + JSON.stringify(post.canonicalUrl) + "\n" +
        "robots: " + JSON.stringify(post.robots) + "\n" +
        "internalLinks:\n" + post.internalLinks.map(l => "  - anchorText: " + JSON.stringify(l.anchorText) + "\n    targetUrl: " + JSON.stringify(l.targetUrl)).join("\n") + "\n" +
        "autoSuggestRelated: " + post.autoSuggestRelated + "\n" +
        "manualRelatedSlugs:\n" + post.manualRelatedSlugs.map(s => "  - " + s).join("\n") + "\n" +
        "authorName: " + JSON.stringify(post.authorName) + "\n" +
        "authorRole: " + JSON.stringify(post.authorRole) + "\n" +
        "authorBio: " + JSON.stringify(post.authorBio) + "\n" +
        "authorImage: " + JSON.stringify(post.authorImage) + "\n" +
        "authorProfileUrl: " + JSON.stringify(post.authorProfileUrl) + "\n" +
        "faqs:\n" + post.faqs.map(f => "  - question: " + JSON.stringify(f.question) + "\n    answer: " + JSON.stringify(f.answer)).join("\n") + "\n" +
        "ogTitle: " + JSON.stringify(post.ogTitle) + "\n" +
        "ogDescription: " + JSON.stringify(post.ogDescription) + "\n" +
        "ogImage: " + JSON.stringify(post.ogImage) + "\n" +
        "twitterTitle: " + JSON.stringify(post.twitterTitle) + "\n" +
        "twitterDescription: " + JSON.stringify(post.twitterDescription) + "\n" +
        "twitterImage: " + JSON.stringify(post.twitterImage) + "\n" +
        "status: " + JSON.stringify(post.status) + "\n" +
        "scheduledPublishDate: \"\"\n" +
        "seoScore: " + post.seoScore + "\n" +
        "---\n\n" + post.content + "\n";

      const BLOG_DIR = path.join(process.cwd(), "content/blog");
      if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
      const mdPath = path.join(BLOG_DIR, post.slug + ".md");
      fs.writeFileSync(mdPath, mdContent, "utf-8");
      console.log(` Successfully saved local markdown file: ${mdPath}`);
    }

    console.log("\n All 2 blog posts have been published to MongoDB and saved as local Markdown files!");
  } catch (err) {
    console.error("Error during publishing:", err);
  } finally {
    await client.close();
  }
}

publishBlogs();
