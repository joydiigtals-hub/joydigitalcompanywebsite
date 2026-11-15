import { ChatStep, FlowId } from "./types";

export const INITIAL_WELCOME_STEP: ChatStep = {
  id: "welcome_start",
  flowId: "welcome",
  question: "Hi 👋 Welcome to Joy Digital!\n\nHow can we help your business today? Choose an option below or ask any question.",
  type: "options",
  options: [
    { label: "🎯 Custom Project Proposal", value: "cost_estimator", nextStepId: "calc_project_type" },
    { label: "🌐 I need a new website", value: "new_website", nextStepId: "web_type" },
    { label: "🔄 Website redesign", value: "redesign", nextStepId: "redesign_improve" },
    { label: "📈 SEO & Google Ranking", value: "seo", nextStepId: "seo_type" },
    { label: "🤖 AI Search Optimization", value: "ai_search", nextStepId: "ai_info" },
    { label: "📢 Digital Marketing", value: "digital_marketing", nextStepId: "dm_service" },
    { label: "💰 I want a quotation", value: "quotation", nextStepId: "quote_service" },
    { label: "💬 Ask a question", value: "general_question", nextStepId: "gq_topic" },
  ],
};

export const CHAT_STEPS_MAP: Record<string, ChatStep> = {
  // --- FLOW 0: CUSTOM PROJECT PROPOSAL ---
  calc_project_type: {
    id: "calc_project_type",
    flowId: "cost_estimator",
    question: "🎯 Custom Project Proposal\n\nWhat kind of website or digital solution does your business need?",
    type: "options",
    fieldKey: "websiteType",
    nextStepId: "calc_industry",
    options: [
      { label: "🏢 Business / Corporate Site", value: "Business Website" },
      { label: "🛍️ E-Commerce / Online Store", value: "E-commerce Website" },
      { label: "🚀 High-Converting Landing Page", value: "Landing Page" },
      { label: "⚙️ Custom Web App / SaaS Portal", value: "Custom Web Application" },
      { label: "🔄 Redesign Existing Site", value: "Website Redesign" },
    ],
  },
  calc_industry: {
    id: "calc_industry",
    flowId: "cost_estimator",
    question: "What is your business industry or sector?",
    type: "options",
    fieldKey: "industry",
    nextStepId: "calc_scope",
    options: [
      { label: "🏢 Corporate / B2B Services", value: "Corporate / B2B" },
      { label: "🛍️ Retail / E-commerce / D2C", value: "Retail / E-commerce" },
      { label: "🏥 Healthcare / Clinic / Hospital", value: "Healthcare" },
      { label: "🏗️ Real Estate / Construction", value: "Real Estate" },
      { label: "🎓 Education / Academy", value: "Education" },
      { label: "⚙️ Tech / SaaS / Software", value: "Technology" },
      { label: "✨ Other Industry", value: "Other Industry" },
    ],
  },
  calc_scope: {
    id: "calc_scope",
    flowId: "cost_estimator",
    question: "What is your expected project scope or size?",
    type: "options",
    fieldKey: "businessSize",
    nextStepId: "calc_priority",
    options: [
      { label: "1 – 5 Pages (Starter / Fast Launch)", value: "1-5 Pages (Starter)" },
      { label: "5 – 15 Pages (Standard Business)", value: "5-15 Pages (Standard)" },
      { label: "15 – 30 Pages (Growth Business)", value: "15-30 Pages (Growth)" },
      { label: "30+ Pages / Custom Portal", value: "Enterprise Scope" },
    ],
  },
  calc_priority: {
    id: "calc_priority",
    flowId: "cost_estimator",
    question: "What is your top technical priority?",
    type: "options",
    fieldKey: "improvements",
    nextStepId: "calc_result",
    options: [
      { label: "⚡ 95+ Google PageSpeed & Next.js 16", value: "Ultra-Fast Speed" },
      { label: "📈 High Google Search / Local SEO Rank", value: "Google SEO" },
      { label: "💳 Payment Gateway & WhatsApp Checkout", value: "E-Commerce Checkout" },
      { label: "🎨 Premium Modern UI/UX Design", value: "Premium UI/UX" },
    ],
  },
  calc_result: {
    id: "calc_result",
    flowId: "cost_estimator",
    question: "🎯 Project Scope Configured!\n\nWebsite pricing & delivery timeline vary based on your specific industry, business size, and required features.\n\nOur technical lead (Saravanan) will review your project and prepare a tailored roadmap and transparent proposal.\n\nWhere should we send your customized quote?",
    type: "options",
    fieldKey: "requirement",
    options: [
      { label: "📋 Continue & Send My Proposal", value: "Request Proposal", nextStepId: "calc_business" },
      { label: "💬 Chat Directly on WhatsApp", value: "WhatsApp Direct", nextStepId: "calc_contact" },
      { label: "🔄 Recalculate / Other Service", value: "Restart", nextStepId: "welcome_start" },
    ],
  },
  calc_business: {
    id: "calc_business",
    flowId: "cost_estimator",
    question: "What's your business name or brand name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Acme Tech or Personal Name",
    nextStepId: "calc_contact",
  },
  calc_contact: {
    id: "calc_contact",
    flowId: "cost_estimator",
    question: "Where should Saravanan send the customized quote & timeline?",
    type: "contact_form",
  },

  // --- FLOW 1: NEW WEBSITE ---
  web_type: {
    id: "web_type",
    flowId: "new_website",
    question: "Great! What type of website are you looking for?",
    type: "options",
    fieldKey: "websiteType",
    nextStepId: "web_business_size",
    options: [
      { label: "Business Website", value: "Business Website" },
      { label: "E-commerce Website", value: "E-commerce Website" },
      { label: "Portfolio Website", value: "Portfolio Website" },
      { label: "Landing Page", value: "Landing Page" },
      { label: "Custom Web Application", value: "Custom Web Application" },
      { label: "Not sure", value: "Not sure" },
    ],
  },
  web_business_size: {
    id: "web_business_size",
    flowId: "new_website",
    question: "What is your business size or stage?",
    type: "options",
    fieldKey: "businessSize",
    nextStepId: "web_timeline",
    options: [
      { label: "🌱 Startup / Early Stage", value: "Startup" },
      { label: "🏢 Growing Business / SMB", value: "Growing SMB" },
      { label: "🏛️ Established Corporate / Enterprise", value: "Enterprise" },
      { label: "🛍️ E-Commerce / Online Brand", value: "E-Commerce" },
      { label: "👤 Professional / Individual", value: "Individual" },
    ],
  },
  web_timeline: {
    id: "web_timeline",
    flowId: "new_website",
    question: "When do you want to launch the website?",
    type: "options",
    fieldKey: "timeline",
    nextStepId: "web_business",
    options: [
      { label: "ASAP (Within 1 week)", value: "ASAP" },
      { label: "Within 2 weeks", value: "Within 2 weeks" },
      { label: "Within 1 month", value: "Within 1 month" },
      { label: "Just exploring", value: "Just exploring" },
    ],
  },
  web_business: {
    id: "web_business",
    flowId: "new_website",
    question: "What's your business name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Acme Enterprises or Your Name",
    nextStepId: "web_contact",
  },
  web_contact: {
    id: "web_contact",
    flowId: "new_website",
    question: "Where should we send your customized quote & proposal?",
    type: "contact_form",
  },

  // --- FLOW 2: REDESIGN ---
  redesign_improve: {
    id: "redesign_improve",
    flowId: "redesign",
    question: "What would you like to improve on your website?",
    type: "options",
    fieldKey: "improvements",
    nextStepId: "redesign_url",
    options: [
      { label: "Modern UI / Design", value: "Modern UI/design" },
      { label: "Mobile Responsiveness", value: "Mobile responsiveness" },
      { label: "SEO & Google Rankings", value: "SEO" },
      { label: "Website Speed & Core Vitals", value: "Website speed" },
      { label: "More Enquiries / Leads", value: "More enquiries/leads" },
      { label: "Complete Redesign", value: "Complete redesign" },
      { label: "Not sure", value: "Not sure" },
    ],
  },
  redesign_url: {
    id: "redesign_url",
    flowId: "redesign",
    question: "Please share your existing website URL.",
    type: "text",
    fieldKey: "websiteUrl",
    placeholder: "e.g. www.example.com",
    nextStepId: "redesign_business",
  },
  redesign_business: {
    id: "redesign_business",
    flowId: "redesign",
    question: "What is your business name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Acme Brand",
    nextStepId: "redesign_contact",
  },
  redesign_contact: {
    id: "redesign_contact",
    flowId: "redesign",
    question: "Where should we send the free audit & proposal?",
    type: "contact_form",
  },

  // --- FLOW 3: SEO / LOCAL SEO ---
  seo_type: {
    id: "seo_type",
    flowId: "seo",
    question: "What type of SEO do you need?",
    type: "options",
    fieldKey: "subService",
    nextStepId: "seo_url",
    options: [
      { label: "Google SEO", value: "Google SEO" },
      { label: "Local SEO", value: "Local SEO" },
      { label: "Google Business Profile", value: "Google Business Profile" },
      { label: "E-commerce SEO", value: "E-commerce SEO" },
      { label: "Technical SEO", value: "Technical SEO" },
      { label: "Not sure", value: "Not sure" },
    ],
  },
  seo_url: {
    id: "seo_url",
    flowId: "seo",
    question: "What is your website URL?",
    type: "text",
    fieldKey: "websiteUrl",
    placeholder: "e.g. www.mybusiness.com (or 'Don't have one')",
    nextStepId: "seo_location",
  },
  seo_location: {
    id: "seo_location",
    flowId: "seo",
    question: "Which location or market are you targeting?",
    type: "options",
    fieldKey: "targetLocation",
    nextStepId: "seo_business",
    options: [
      { label: "Madurai", value: "Madurai" },
      { label: "Chennai", value: "Chennai" },
      { label: "Tamil Nadu", value: "Tamil Nadu" },
      { label: "India", value: "India" },
      { label: "Worldwide", value: "Worldwide" },
    ],
  },
  seo_business: {
    id: "seo_business",
    flowId: "seo",
    question: "What is your business name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Star Services",
    nextStepId: "seo_contact",
  },
  seo_contact: {
    id: "seo_contact",
    flowId: "seo",
    question: "Where should we send your custom SEO roadmap?",
    type: "contact_form",
  },

  // --- FLOW 4: AI SEARCH OPTIMIZATION ---
  ai_info: {
    id: "ai_info",
    flowId: "ai_search",
    question: "AI Search Optimization helps your business become more visible when potential customers search through AI platforms such as ChatGPT, Gemini and Perplexity.\n\nDo you already have a website?",
    type: "options",
    fieldKey: "hasWebsite",
    options: [
      { label: "Yes", value: "Yes", nextStepId: "ai_url" },
      { label: "No", value: "No", nextStepId: "ai_business" },
      { label: "Website is under development", value: "Under Development", nextStepId: "ai_business" },
    ],
  },
  ai_url: {
    id: "ai_url",
    flowId: "ai_search",
    question: "What is your website URL?",
    type: "text",
    fieldKey: "websiteUrl",
    placeholder: "e.g. https://mybrand.com",
    nextStepId: "ai_business",
  },
  ai_business: {
    id: "ai_business",
    flowId: "ai_search",
    question: "What is your business name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Global Tech",
    nextStepId: "ai_market",
  },
  ai_market: {
    id: "ai_market",
    flowId: "ai_search",
    question: "Which market are you targeting?",
    type: "options",
    fieldKey: "targetMarket",
    nextStepId: "ai_contact",
    options: [
      { label: "Local", value: "Local" },
      { label: "India", value: "India" },
      { label: "International", value: "International" },
      { label: "Both Local & International", value: "Both Local & International" },
    ],
  },
  ai_contact: {
    id: "ai_contact",
    flowId: "ai_search",
    question: "Where should we contact you?",
    type: "contact_form",
  },

  // --- FLOW 5: DIGITAL MARKETING ---
  dm_service: {
    id: "dm_service",
    flowId: "digital_marketing",
    question: "What service are you interested in?",
    type: "options",
    fieldKey: "marketingService",
    nextStepId: "dm_stage",
    options: [
      { label: "Social Media Marketing", value: "Social Media Marketing" },
      { label: "Google Ads", value: "Google Ads" },
      { label: "Meta Ads (FB & Insta)", value: "Meta Ads" },
      { label: "Content Marketing", value: "Content Marketing" },
      { label: "Lead Generation", value: "Lead Generation" },
      { label: "Complete Digital Marketing", value: "Complete Digital Marketing" },
      { label: "Not sure", value: "Not sure" },
    ],
  },
  dm_stage: {
    id: "dm_stage",
    flowId: "digital_marketing",
    question: "What is your current business marketing goal?",
    type: "options",
    fieldKey: "businessSize",
    nextStepId: "dm_business",
    options: [
      { label: "🚀 Immediate Lead Generation", value: "Lead Generation" },
      { label: "📈 Brand Awareness & Growth", value: "Brand Awareness" },
      { label: "🛍️ E-Commerce Sales & ROAS", value: "E-Commerce Sales" },
      { label: "🌟 Local Footfall & Inquiries", value: "Local Footfall" },
    ],
  },
  dm_business: {
    id: "dm_business",
    flowId: "digital_marketing",
    question: "What is your business name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Apex Marketing",
    nextStepId: "dm_contact",
  },
  dm_contact: {
    id: "dm_contact",
    flowId: "digital_marketing",
    question: "Where should we send your customized marketing proposal?",
    type: "contact_form",
  },

  // --- FLOW 6: GET QUOTATION ---
  quote_service: {
    id: "quote_service",
    flowId: "quotation",
    question: "What service do you need a quotation for?",
    type: "options",
    fieldKey: "quotationService",
    nextStepId: "quote_detail",
    options: [
      { label: "Next.js Website", value: "Website" },
      { label: "E-commerce Store", value: "E-commerce" },
      { label: "SEO & Google Ranking", value: "SEO" },
      { label: "Local SEO / Google Maps", value: "Local SEO" },
      { label: "AI Search Optimization", value: "AI Search Optimization" },
      { label: "Digital Marketing", value: "Digital Marketing" },
      { label: "Custom Project Requirement", value: "Custom Requirement" },
    ],
  },
  quote_detail: {
    id: "quote_detail",
    flowId: "quotation",
    question: "Tell us briefly about your business and requirement.",
    type: "textarea",
    fieldKey: "requirement",
    placeholder: "e.g. We are a clinic/consultancy needing a 10-page modern website with booking and WhatsApp integration...",
    nextStepId: "quote_business",
  },
  quote_business: {
    id: "quote_business",
    flowId: "quotation",
    question: "What's your business or company name?",
    type: "text",
    fieldKey: "businessName",
    placeholder: "e.g. Elite Consultancy",
    nextStepId: "quote_contact",
  },
  quote_contact: {
    id: "quote_contact",
    flowId: "quotation",
    question: "Where should Saravanan send the customized quotation?",
    type: "contact_form",
  },

  // --- FLOW 7: GENERAL QUESTION (Always converts to lead) ---
  gq_topic: {
    id: "gq_topic",
    flowId: "general_question",
    question: "What would you like to know?",
    type: "options",
    fieldKey: "questionCategory",
    options: [
      { label: "Website pricing", value: "Website pricing", nextStepId: "gq_pricing" },
      { label: "Website development time", value: "Website development time", nextStepId: "gq_timeline" },
      { label: "SEO pricing", value: "SEO pricing", nextStepId: "gq_seo_pricing" },
      { label: "Our Core Services", value: "Services", nextStepId: "gq_services" },
      { label: "Talk to Saravanan directly", value: "Talk to a person", nextStepId: "gq_talk_person" },
      { label: "Other Question", value: "Other", nextStepId: "gq_detail" },
    ],
  },
  gq_pricing: {
    id: "gq_pricing",
    flowId: "general_question",
    question: "Website investment is completely custom-tailored based on your industry, business size, and required features (pages, custom design, SEO, integrations).\n\nTo share a tailored quotation for your business, where should Saravanan send the proposal?",
    type: "contact_form",
  },
  gq_timeline: {
    id: "gq_timeline",
    flowId: "general_question",
    question: "Landing pages take 3–5 business days, and complete corporate business sites take 7–12 days from design approval to live deployment ⏱️\n\nWhere can Saravanan send an exact project schedule and proposal?",
    type: "contact_form",
  },
  gq_seo_pricing: {
    id: "gq_seo_pricing",
    flowId: "general_question",
    question: "SEO pricing varies depending on your target market (Local Chennai/Madurai, All-India, or Global) and competition level.\n\nTo share a customized SEO roadmap and quotation for your brand, where should Saravanan send the details?",
    type: "contact_form",
  },
  gq_services: {
    id: "gq_services",
    flowId: "general_question",
    question: "We engineer Next.js 16 websites, High-Speed E-commerce, Technical SEO, Google Business Profile ranking, and AI Search Optimization ⚡\n\nWhere can we reach you to discuss your project requirements?",
    type: "contact_form",
  },
  gq_talk_person: {
    id: "gq_talk_person",
    flowId: "general_question",
    question: "Saravanan from our technical leadership team is ready to connect with you directly 👍\n\nPlease share your contact details and we'll reach out shortly:",
    type: "contact_form",
  },
  gq_detail: {
    id: "gq_detail",
    flowId: "general_question",
    question: "Please share your question or requirement details.",
    type: "textarea",
    fieldKey: "requirement",
    placeholder: "Type your question here...",
    nextStepId: "gq_contact",
  },
  gq_contact: {
    id: "gq_contact",
    flowId: "general_question",
    question: "Where should we contact you?",
    type: "contact_form",
  },

  // --- CONTEXTUAL SPRINT 1 FLOWS (Proactive AI SDR) ---
  travel_quick_start: {
    id: "travel_quick_start",
    flowId: "welcome",
    question: "🌴 Tour & Safari Web Development\n\nWe build direct-booking websites for safari operators & tour agencies that eliminate 25% OTA commissions.\n\nWhat kind of travel solution are you looking for?",
    type: "options",
    fieldKey: "websiteType",
    options: [
      { label: "🦁 Tour & Safari Booking Portal", value: "Safari Booking Portal", nextStepId: "calc_scope" },
      { label: "📲 Direct WhatsApp Itinerary Booking", value: "WhatsApp Itinerary Booking", nextStepId: "calc_scope" },
      { label: "🔄 Redesign Existing Travel Site", value: "Travel Site Redesign", nextStepId: "redesign_improve" },
      { label: "💬 Chat Directly on WhatsApp", value: "WhatsApp Direct", nextStepId: "calc_contact" },
    ],
  },
  speed_quick_start: {
    id: "speed_quick_start",
    flowId: "welcome",
    question: "⚡ Sub-Second Next.js Performance\n\nEvery 1-second delay in page load time cuts conversions by 7%. We engineer websites that achieve 95+ PageSpeed scores on mobile.\n\nHow can we help your web performance today?",
    type: "options",
    fieldKey: "improvements",
    options: [
      { label: "🚀 Migrate WordPress/Wix to Next.js", value: "WordPress to Next.js Migration", nextStepId: "calc_scope" },
      { label: "🔍 Audit My Core Web Vitals (LCP/INP)", value: "Core Web Vitals Audit", nextStepId: "redesign_url" },
      { label: "⚡ Build New Sub-Second Platform", value: "Sub-Second Next.js Platform", nextStepId: "calc_project_type" },
      { label: "💬 Chat Directly on WhatsApp", value: "WhatsApp Direct", nextStepId: "calc_contact" },
    ],
  },
  export_quick_start: {
    id: "export_quick_start",
    flowId: "welcome",
    question: "🌐 Global B2B Export & Manufacturing Web Architecture\n\nWe help manufacturers and exporters generate verified RFQ inquiries across the USA, UAE, and Europe.\n\nWhat is your primary export goal?",
    type: "options",
    fieldKey: "websiteType",
    options: [
      { label: "🚢 Multi-Region Export Web Portal", value: "Export Web Portal", nextStepId: "calc_scope" },
      { label: "🌍 Global SEO & International Strategy", value: "Global SEO", nextStepId: "seo_type" },
      { label: "📑 Custom B2B RFQ Funnel", value: "Custom RFQ Funnel", nextStepId: "calc_scope" },
      { label: "💬 Chat Directly on WhatsApp", value: "WhatsApp Direct", nextStepId: "calc_contact" },
    ],
  },
  local_seo_quick_start: {
    id: "local_seo_quick_start",
    flowId: "welcome",
    question: "📍 Local SEO & Google Maps 3-Pack Growth\n\nWant to dominate local search results and receive daily customer phone calls and store visits?\n\nWhat local service do you need?",
    type: "options",
    fieldKey: "service",
    options: [
      { label: "🗺️ Google Maps 3-Pack Optimization", value: "Google Maps 3-Pack", nextStepId: "seo_location" },
      { label: "📞 High-Converting Local Website", value: "Local Business Website", nextStepId: "calc_project_type" },
      { label: "🔍 Free Local SEO Audit", value: "Local SEO Audit", nextStepId: "seo_url" },
      { label: "💬 Chat Directly on WhatsApp", value: "WhatsApp Direct", nextStepId: "calc_contact" },
    ],
  },
  ecommerce_quick_start: {
    id: "ecommerce_quick_start",
    flowId: "welcome",
    question: "🛍️ High-Conversion E-Commerce Architecture\n\nWe build lightning-fast online stores with instant cart checkout, payment gateways, and automated WhatsApp order alerts.\n\nWhat are you planning to sell?",
    type: "options",
    fieldKey: "websiteType",
    options: [
      { label: "⚡ Custom Next.js Online Store", value: "Custom Next.js Store", nextStepId: "calc_scope" },
      { label: "📲 WhatsApp Direct Order Store", value: "WhatsApp Store", nextStepId: "calc_scope" },
      { label: "🔄 Redesign / Speed Up Existing Store", value: "E-Commerce Redesign", nextStepId: "redesign_improve" },
      { label: "💬 Chat Directly on WhatsApp", value: "WhatsApp Direct", nextStepId: "calc_contact" },
    ],
  },
};

// WhatsApp URL builder helper
export function generateWhatsAppUrl(
  phone: string,
  leadData: {
    service: string;
    businessName?: string;
    subService?: string;
    industry?: string;
    businessSize?: string;
    budget?: string;
    timeline?: string;
    name: string;
    phone: string;
  }
): string {
  const targetNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919080026133";
  
  const text = `Hi Joy Digital,

I would like to enquire about your ${leadData.service || "Web Services"}.

Business Name: ${leadData.businessName || "N/A"}
Industry/Scale: ${leadData.industry || leadData.businessSize || "Custom"}
Requirement: ${leadData.subService || leadData.service || "Website Development"}
Timeline: ${leadData.timeline || "N/A"}

Name: ${leadData.name}
WhatsApp: ${leadData.phone}

I received this enquiry through the Joy Digital website.`;

  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
}
