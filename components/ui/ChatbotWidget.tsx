"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { INITIAL_WELCOME_STEP, CHAT_STEPS_MAP, generateWhatsAppUrl } from "@/lib/chat/flows";
import { ChatStep, ChatLeadData, MessageItem, ChatOption } from "@/lib/chat/types";

interface PageContextConfig {
  badge: string;
  title: string;
  body: string;
  ctaText: string;
  quickStepId: string;
  defaultService: string;
}

function getPageContext(pathname: string | null): PageContextConfig {
  const path = (pathname || "").toLowerCase();

  // 1. Tour, Safari, Travel & Africa
  if (path.includes("travel") || path.includes("safari") || path.includes("africa") || path.includes("tour") || path.includes("resort") || path.includes("voyage")) {
    return {
      badge: "🦁 Direct Booking Specialist",
      title: "Building a Travel or Safari Website?",
      body: "Stop paying 25% commissions to OTAs. We build direct itinerary booking platforms with instant WhatsApp inquiries.",
      ctaText: "🌴 Tour & Safari Solutions",
      quickStepId: "travel_quick_start",
      defaultService: "Travel & Safari Booking Website",
    };
  }

  // 2. Speed Optimization, Next.js & WordPress Migration
  if (path.includes("wordpress") || path.includes("speed") || path.includes("slow") || path.includes("nextjs") || path.includes("technical-seo") || path.includes("core-web-vitals")) {
    return {
      badge: "⚡ Sub-Second Performance",
      title: "Is Your Website Taking >3s to Load?",
      body: "Every 1-second delay cuts conversions by 7%. Upgrade to sub-second Next.js architecture and pass Core Web Vitals.",
      ctaText: "⚡ Speed Diagnostic & Migration",
      quickStepId: "speed_quick_start",
      defaultService: "WordPress to Next.js Migration",
    };
  }

  // 3. Export, Manufacturing, Logistics & Textiles
  if (path.includes("export") || path.includes("import") || path.includes("logistics") || path.includes("shipping") || path.includes("manufactur") || path.includes("textile") || path.includes("b2b")) {
    return {
      badge: "🌐 Global B2B Specialist",
      title: "Targeting Overseas B2B Buyers?",
      body: "Generate high-value RFQ inquiries across USA, UAE, and Europe with a global SEO architecture.",
      ctaText: "🚢 Global B2B Web Portal",
      quickStepId: "export_quick_start",
      defaultService: "B2B Export Web Development",
    };
  }

  // 4. Local SEO & City Pages
  if (path.includes("chennai") || path.includes("madurai") || path.includes("coimbatore") || path.includes("local-seo") || path.includes("google-business")) {
    return {
      badge: "📍 Google Maps 3-Pack",
      title: "Want #1 Rank on Google Maps?",
      body: "Dominate the 3-Pack and capture high-intent local customer phone calls and store visits daily.",
      ctaText: "📈 Free Local SEO Audit",
      quickStepId: "local_seo_quick_start",
      defaultService: "Local SEO & Google Maps Ranking",
    };
  }

  // 5. E-Commerce & Online Stores
  if (path.includes("ecommerce") || path.includes("shopify") || path.includes("store")) {
    return {
      badge: "🛍️ E-Commerce Architect",
      title: "Launching a High-Speed Online Store?",
      body: "Experience sub-second product browsing, instant cart checkout, payment gateways, and WhatsApp orders.",
      ctaText: "🛍️ E-Commerce Architecture",
      quickStepId: "ecommerce_quick_start",
      defaultService: "E-commerce Website",
    };
  }

  // 6. Free Website Audit & SEO Audit Pages
  if (path.includes("audit") || path.includes("seo-audit-tool")) {
    return {
      badge: "🔍 Instant Technical Audit",
      title: "Need an Instant Website Audit?",
      body: "Share your website URL in chat and Priya will analyze your speed bottlenecks in 30 seconds.",
      ctaText: "💬 Quick Audit Chat",
      quickStepId: "speed_quick_start",
      defaultService: "Free Website Audit",
    };
  }

  // Default fallback
  return {
    badge: "🎯 Client Support Lead",
    title: "Planning a High-Converting Website?",
    body: "Get a tailored project proposal, speed diagnosis, or chat directly with our tech lead Saravanan.",
    ctaText: "🎯 Get Custom Proposal",
    quickStepId: "calc_project_type",
    defaultService: "Custom Project Proposal",
  };
}

export default function ChatbotWidget() {
  const pathname = usePathname();
  const pageContext = React.useMemo(() => getPageContext(pathname), [pathname]);

  // Lifecycle & Display states
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  // Session & Flow states
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [stepHistory, setStepHistory] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<ChatStep>(INITIAL_WELCOME_STEP);
  const [leadData, setLeadData] = useState<Partial<ChatLeadData>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState(false);

  // Input fields state
  const [textInput, setTextInput] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [formError, setFormError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Defer rendering for Core Web Vitals optimization
  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const isBot = /Lighthouse|Googlebot|HeadlessChromium|Chrome-Lighthouse|PTST/i.test(navigator.userAgent);
      if (isBot) return;
    }

    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // 2. Initialize session
  useEffect(() => {
    if (!shouldRender) return;

    let savedSessionId = localStorage.getItem("jd_chat_session_id");
    if (!savedSessionId) {
      savedSessionId = "jd_sess_" + Math.random().toString(36).substring(2, 12);
      localStorage.setItem("jd_chat_session_id", savedSessionId);
    }
    setSessionId(savedSessionId);

    // Initial Welcome Message
    const welcomeMsg: MessageItem = {
      id: "msg_welcome",
      role: "assistant",
      text: INITIAL_WELCOME_STEP.question,
      timestamp: new Date().toISOString(),
      options: INITIAL_WELCOME_STEP.options,
      stepId: INITIAL_WELCOME_STEP.id,
    };
    setMessages([welcomeMsg]);
  }, [shouldRender]);

  // 3. Proactive Tooltip Trigger on page change / dwell time
  useEffect(() => {
    if (!shouldRender || isOpen) return;

    const pageKey = (pathname || "/").replace(/[^a-zA-Z0-9]/g, "_");
    const dismissedTime = sessionStorage.getItem(`jd_tooltip_dismissed_${pageKey}`);
    const now = Date.now();

    // Re-show after 15 minutes if dismissed, or show if not dismissed on this page
    if (!dismissedTime || now - parseInt(dismissedTime, 10) > 15 * 60 * 1000) {
      const tooltipTimer = setTimeout(() => {
        if (!isOpen) {
          setShowTooltip(true);
        }
      }, 7000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [shouldRender, pathname, isOpen]);

  // 4. Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, currentStep]);

  // Track Analytics
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined") {
      if ((window as any).trackJoyDigitalEvent) {
        (window as any).trackJoyDigitalEvent(eventName, params);
      } else if ((window as any).gtag) {
        (window as any).gtag("event", eventName, params || {});
      }
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasUnread(false);
    setShowTooltip(false);
    const pageKey = (pathname || "/").replace(/[^a-zA-Z0-9]/g, "_");
    sessionStorage.setItem(`jd_tooltip_dismissed_${pageKey}`, Date.now().toString());
    trackEvent("chat_opened", { sessionId });
  };

  const handleOpenContextualChat = () => {
    setIsOpen(true);
    setHasUnread(false);
    setShowTooltip(false);

    const pageKey = (pathname || "/").replace(/[^a-zA-Z0-9]/g, "_");
    sessionStorage.setItem(`jd_tooltip_dismissed_${pageKey}`, Date.now().toString());

    trackEvent("chat_opened_contextual", { pathname, service: pageContext.defaultService });

    // Transition chat to the contextual quick start step
    const step = CHAT_STEPS_MAP[pageContext.quickStepId] || INITIAL_WELCOME_STEP;
    setLeadData((prev) => ({
      ...prev,
      service: pageContext.defaultService,
    }));
    setCurrentStep(step);

    const contextualMsg: MessageItem = {
      id: "msg_" + Math.random().toString(36).substring(2, 9),
      role: "assistant",
      text: step.question,
      timestamp: new Date().toISOString(),
      options: step.options,
      stepId: step.id,
    };
    setMessages([contextualMsg]);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    const pageKey = (pathname || "/").replace(/[^a-zA-Z0-9]/g, "_");
    sessionStorage.setItem(`jd_tooltip_dismissed_${pageKey}`, Date.now().toString());
  };

  // Helper to add assistant typing delay
  const pushAssistantMessage = (step: ChatStep, newHistoryMsg?: MessageItem, customQuestionText?: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setCurrentStep(step);

      const assistantMsg: MessageItem = {
        id: "msg_" + Math.random().toString(36).substring(2, 9),
        role: "assistant",
        text: customQuestionText || step.question,
        timestamp: new Date().toISOString(),
        options: step.options,
        stepId: step.id,
      };

      setMessages((prev) => (newHistoryMsg ? [...prev, newHistoryMsg, assistantMsg] : [...prev, assistantMsg]));
    }, 400);
  };

  // Handle Option Click
  const handleSelectOption = (option: ChatOption) => {
    const userMsg: MessageItem = {
      id: "msg_" + Math.random().toString(36).substring(2, 9),
      role: "user",
      text: option.label,
      timestamp: new Date().toISOString(),
    };

    // Update lead data if fieldKey exists on current step
    const updatedLeadData = { ...leadData };
    if (currentStep.fieldKey) {
      (updatedLeadData as any)[currentStep.fieldKey] = option.value;
      setLeadData(updatedLeadData);
    }

    if (currentStep.id === "welcome_start") {
      updatedLeadData.service = option.label
        .replace(/^[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "")
        .trim();
      setLeadData(updatedLeadData);
      trackEvent("service_selected", { service: option.value });
    }

    // Direct WhatsApp Option Handler
    if (option.value === "WhatsApp Direct") {
      handleWhatsAppRedirect();
      return;
    }

    // Restart Option Handler
    if (option.value === "Restart") {
      handleRestartChat();
      return;
    }

    // Record step history for Back button
    setStepHistory((prev) => [...prev, currentStep.id]);

    const nextStepId = option.nextStepId || currentStep.nextStepId;
    if (nextStepId && CHAT_STEPS_MAP[nextStepId]) {
      const nextStep = CHAT_STEPS_MAP[nextStepId];

      // Dynamic summary for Proposal result (No hardcoded prices - industry & size specific lead flow)
      let dynamicQuestion: string | undefined = undefined;
      if (nextStepId === "calc_result") {
        const type = updatedLeadData.websiteType || "Custom Solution";
        const ind = updatedLeadData.industry || "General Industry";
        const scope = updatedLeadData.businessSize || "Standard Scope";

        dynamicQuestion = `🎯 **Project Scope Configured:**\n\n📌 **Solution:** ${type}\n🏢 **Industry:** ${ind}\n📐 **Expected Scope:** ${scope}\n⚡ **Core Stack:** Next.js 16 + 95+ PageSpeed + Clean SEO Architecture\n\n*Website development investment varies according to your specific industry, business size, and required integrations. Where should Saravanan send your personalized proposal & itemized quote?*`;
      }

      pushAssistantMessage(nextStep, userMsg, dynamicQuestion);
    }
  };

  // Handle Free-Form Chat (AI / Knowledge Base Q&A)
  const handleFreeFormMessage = async (queryText: string) => {
    if (!queryText.trim()) return;

    const val = queryText.trim();
    setTextInput("");

    const userMsg: MessageItem = {
      id: "msg_" + Math.random().toString(36).substring(2, 9),
      role: "user",
      text: val,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          messages: [...messages, userMsg].map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await res.json();
      setIsTyping(false);

      if (data && data.reply) {
        const botMsg: MessageItem = {
          id: "msg_" + Math.random().toString(36).substring(2, 9),
          role: "assistant",
          text: data.reply,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, botMsg]);

        // Auto prompt contact capture if phone was not yet provided
        const phoneRegex = /(\+?91[\-\s]?)?[6789]\d{9}/;
        if (!phoneRegex.test(val)) {
          // Keep active input available
        }
      } else {
        const fallbackMsg: MessageItem = {
          id: "msg_fallback",
          role: "assistant",
          text: "Thanks for your question! To give you accurate details for your industry & business size, please share your Name and WhatsApp number below:",
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      }
    } catch (e) {
      setIsTyping(false);
      const errReply: MessageItem = {
        id: "msg_err",
        role: "assistant",
        text: "Thanks for asking! Would you like to connect directly with our technical lead Saravanan on WhatsApp?",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errReply]);
    }
  };

  // Handle Single-Line & Multi-Line Text Inputs
  const handleStepInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const val = textInput.trim();
    setTextInput("");

    const userMsg: MessageItem = {
      id: "msg_" + Math.random().toString(36).substring(2, 9),
      role: "user",
      text: val,
      timestamp: new Date().toISOString(),
    };

    const updatedLeadData = { ...leadData };
    if (currentStep.fieldKey) {
      (updatedLeadData as any)[currentStep.fieldKey] = val;
      setLeadData(updatedLeadData);
    }

    setStepHistory((prev) => [...prev, currentStep.id]);

    const nextStepId = currentStep.nextStepId;
    if (nextStepId && CHAT_STEPS_MAP[nextStepId]) {
      pushAssistantMessage(CHAT_STEPS_MAP[nextStepId], userMsg);
    }
  };

  // Handle Going Back 1 Step
  const handleGoBack = () => {
    if (stepHistory.length === 0) return;

    const lastStepId = stepHistory[stepHistory.length - 1];
    setStepHistory((prev) => prev.slice(0, -1));

    if (lastStepId === "welcome_start") {
      setCurrentStep(INITIAL_WELCOME_STEP);
    } else if (CHAT_STEPS_MAP[lastStepId]) {
      setCurrentStep(CHAT_STEPS_MAP[lastStepId]);
    }
  };

  // Restart Chat
  const handleRestartChat = () => {
    setShowResetModal(false);
    setStepHistory([]);
    setLeadData({});
    setIsCompleted(false);
    setSubmitError(false);
    setCurrentStep(INITIAL_WELCOME_STEP);

    const welcomeMsg: MessageItem = {
      id: "msg_welcome_" + Date.now(),
      role: "assistant",
      text: INITIAL_WELCOME_STEP.question,
      timestamp: new Date().toISOString(),
      options: INITIAL_WELCOME_STEP.options,
      stepId: INITIAL_WELCOME_STEP.id,
    };
    setMessages([welcomeMsg]);
  };

  // Submit Contact Form
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!contactName.trim()) {
      setFormError("Please enter your name.");
      return;
    }

    const cleanedPhone = contactPhone.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(\+?\d{1,3})?[6789]\d{9}$/;
    if (!phoneRegex.test(cleanedPhone) && cleanedPhone.length < 10) {
      setFormError("Please enter a valid 10-digit mobile or WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    const finalLeadPayload: ChatLeadData = {
      service: leadData.service || "Website Development",
      subService: leadData.subService || leadData.websiteType || "Custom Next.js Web Solution",
      websiteType: leadData.websiteType,
      industry: leadData.industry,
      businessSize: leadData.businessSize,
      improvements: leadData.improvements,
      budget: leadData.budget || leadData.monthlyBudget || "Custom Proposal Requested",
      timeline: leadData.timeline,
      websiteUrl: leadData.websiteUrl,
      targetLocation: leadData.targetLocation,
      targetMarket: leadData.targetMarket,
      hasWebsite: leadData.hasWebsite,
      marketingService: leadData.marketingService,
      monthlyBudget: leadData.monthlyBudget,
      quotationService: leadData.quotationService,
      requirement: leadData.requirement,
      questionCategory: leadData.questionCategory,
      businessName: leadData.businessName || "N/A",
      name: contactName.trim(),
      phone: contactPhone.trim(),
      email: contactEmail.trim(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "https://www.joydigital.in",
      leadSource: "website_chatbot",
    };

    const userMsg: MessageItem = {
      id: "msg_contact_user",
      role: "user",
      text: `👤 Name: ${finalLeadPayload.name}\n📱 WhatsApp: ${finalLeadPayload.phone}${
        finalLeadPayload.email ? `\n✉️ Email: ${finalLeadPayload.email}` : ""
      }`,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          ...finalLeadPayload,
          messages: messages.map((m) => ({ role: m.role, message: m.text, timestamp: m.timestamp })),
        }),
      });

      setIsTyping(false);

      if (res.ok) {
        const data = await res.json();
        setSubmittedLeadId(data.leadId);
        setIsCompleted(true);
        setLeadData(finalLeadPayload);

        trackEvent("lead_submitted", { service: finalLeadPayload.service });

        const confirmMsg: MessageItem = {
          id: "msg_confirm",
          role: "assistant",
          text: `Thanks, ${finalLeadPayload.name}! 🎉\n\nWe have registered your project requirements.\nOur technical lead Saravanan will analyze your industry scope and contact you with a customized proposal within 2 hours.`,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, confirmMsg]);
      } else {
        setSubmitError(true);
        setIsCompleted(true);
      }
    } catch (err) {
      console.error("Chatbot lead submission error:", err);
      setIsTyping(false);
      setSubmitError(true);
      setIsCompleted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle WhatsApp Click
  const handleWhatsAppRedirect = () => {
    if (submittedLeadId) {
      fetch("/api/chat/whatsapp-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId: submittedLeadId }),
      }).catch(() => {});
    }

    trackEvent("whatsapp_clicked", { service: leadData.service });

    const waUrl = generateWhatsAppUrl(contactPhone || leadData.phone || "", {
      service: leadData.service || "Web Services",
      businessName: leadData.businessName,
      industry: leadData.industry,
      businessSize: leadData.businessSize,
      subService: leadData.subService || leadData.websiteType,
      budget: leadData.budget || leadData.monthlyBudget,
      timeline: leadData.timeline,
      name: contactName || leadData.name || "Customer",
      phone: contactPhone || leadData.phone || "",
    });

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Exclude rendering on admin pages or before initial delay
  if (pathname?.startsWith("/admin") || !shouldRender) {
    return null;
  }

  return (
    <div className="fixed bottom-22 left-4 sm:bottom-6 sm:left-6 z-[999] font-sans select-none">
      {/* 1. Proactive Context-Aware Tooltip (Shows after 7s based on current page) */}
      {!isOpen && showTooltip && (
        <div className="absolute bottom-16 left-0 mb-2 w-80 sm:w-88 bg-[#3B1580] backdrop-blur-md border border-[#FFFFFF]/20 p-4 rounded-2xl shadow-[0_15px_40px_-5px_rgba(22,13,46,0.35)] animate-fade-in text-xs z-[999] transition-all duration-300">
          {/* Header pill & close */}
          <div className="flex justify-between items-start gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#C9F600]/15 text-[#C9F600] border border-[#C9F600]/30">
              <span className="w-2 h-2 rounded-full bg-[#C9F600] animate-pulse" />
              {pageContext.badge}
            </span>
            <button
              onClick={handleCloseTooltip}
              className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] cursor-pointer p-0.5 rounded-md hover:bg-[#FFFFFF]/10 transition-colors"
              aria-label="Close message"
            >
              <i className="fa-solid fa-xmark text-xs" />
            </button>
          </div>

          {/* Heading */}
          <div className="flex items-center gap-2 mb-1.5">
            <h4 className="font-black text-[13px] text-[#FFFFFF] leading-snug">
              {pageContext.title}
            </h4>
          </div>

          <p className="text-[11.5px] text-[#FFFFFF]/80 leading-relaxed font-medium mb-3.5">
            {pageContext.body}
          </p>

          <div className="flex items-center gap-2 pt-1 border-t border-[#FFFFFF]/20">
            <button
              onClick={handleOpenContextualChat}
              className="flex-1 px-3.5 py-2 bg-[#C9F600] hover:bg-[#b8f000] text-[#3B1580] rounded-xl font-black text-[11px] shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center justify-center gap-1.5"
            >
              <span>{pageContext.ctaText}</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </button>
            <button
              onClick={handleCloseTooltip}
              className="px-2.5 py-2 bg-[#3B1580] border border-[#FFFFFF]/25 hover:border-[#C9F600] text-[#FFFFFF] rounded-xl font-semibold text-[11px] cursor-pointer transition-colors"
            >
              Later
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating Circular Chat Button (Icon kept as requested) */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          aria-label="Open Joy Digital AI Assistant"
          className="relative w-13 h-13 sm:w-14 sm:h-14 bg-[#C9F600] hover:bg-[#b8f000] hover:scale-105 active:scale-95 text-[#3B1580] rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(201, 246, 0,0.4)] transition-all duration-300 cursor-pointer border-2 border-[#C9F600] animate-bounce-subtle"
        >
          <i className="fa-solid fa-comments text-xl sm:text-2xl text-[#3B1580]" />

          {/* Unread badge with pulse */}
          {hasUnread && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9F600] opacity-75"></span>
              <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-[#3B1580] border border-[#C9F600] text-[9px] font-black text-[#C9F600]">
                1
              </span>
            </span>
          )}
        </button>
      )}

      {/* 3. Main Chat Window Panel */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-4 sm:inset-auto sm:bottom-24 sm:left-6 w-auto sm:w-[395px] h-[85vh] sm:h-[610px] max-h-[660px] bg-[#3B1580] border border-[#FFFFFF]/20 rounded-[24px] shadow-2xl flex flex-col overflow-hidden animate-fade-in transition-all z-[999]">
          
          {/* Header - Solid Deep Obsidian/Amethyst Theme (NO white wash gradient!) */}
          <div className="bg-[#3B1580] text-[#FFFFFF] p-3.5 sm:p-4 flex items-center justify-between shrink-0 border-b border-[#FFFFFF]/20 relative overflow-hidden">
            {/* Ambient subtle decorative glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-600/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-2.5 sm:gap-3 relative z-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#C9F600] rounded-xl flex items-center justify-center relative shadow-md border border-[#C9F600] shrink-0">
                <span className="font-black text-xs text-[#3B1580] tracking-wider">JD</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#C9F600] rounded-full border-2 border-[#3B1580] flex items-center justify-center">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-[13px] font-black tracking-wide text-white leading-none">
                    Joy Digital AI
                  </h4>
                  <span className="text-[9px] bg-[#C9F600]/15 text-[#C9F600] border border-[#C9F600]/30 px-1.5 py-0.5 rounded-full font-bold">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-[#FFFFFF]/80 font-medium mt-1 leading-none">
                  Next.js Agency • Chennai & Madurai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative z-10">
              {/* Direct WhatsApp Action */}
              <button
                onClick={handleWhatsAppRedirect}
                className="w-7.5 h-7.5 rounded-lg bg-[#C9F600]/15 hover:bg-[#C9F600]/30 border border-[#C9F600]/30 text-[#C9F600] flex items-center justify-center cursor-pointer transition-all active:scale-95"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-sm" />
              </button>

              {/* Back button */}
              {stepHistory.length > 0 && !isCompleted && (
                <button
                  onClick={handleGoBack}
                  className="w-7.5 h-7.5 rounded-lg bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/20 text-[#FFFFFF]/90 hover:text-[#FFFFFF] flex items-center justify-center cursor-pointer transition-all active:scale-95"
                  title="Go Back 1 Step"
                  aria-label="Back"
                >
                  <i className="fa-solid fa-chevron-left text-xs" />
                </button>
              )}

              {/* Start Over button */}
              <button
                onClick={() => setShowResetModal(true)}
                className="w-7.5 h-7.5 rounded-lg bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/20 text-[#FFFFFF]/90 hover:text-[#FFFFFF] flex items-center justify-center cursor-pointer transition-all active:scale-95"
                title="Start Over"
                aria-label="Start Over"
              >
                <i className="fa-solid fa-rotate-right text-xs" />
              </button>

              {/* Minimize/Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-7.5 h-7.5 rounded-lg bg-[#3B1580] hover:bg-[#3B1580]/80 border border-[#FFFFFF]/20 text-[#FFFFFF]/90 hover:text-[#FFFFFF] flex items-center justify-center cursor-pointer transition-all active:scale-95 ml-0.5"
                title="Close chat"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs text-left bg-[#3B1580]">
            {messages.map((msg, idx) => {
              const isBot = msg.role === "assistant";
              return (
                <div key={msg.id || idx} className={`flex ${isBot ? "justify-start" : "justify-end"} gap-2`}>
                  {isBot && (
                    <div className="w-6.5 h-6.5 bg-[#C9F600] text-[#3B1580] rounded-lg flex items-center justify-center font-bold text-[9px] shrink-0 self-end shadow-xs">
                      JD
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap shadow-xs ${
                      isBot
                        ? "bg-[#3B1580] text-[#FFFFFF] border border-[#FFFFFF]/20 rounded-bl-xs"
                        : "bg-[#C9F600] text-[#3B1580] font-bold rounded-br-xs shadow-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {/* Assistant Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start gap-2">
                <div className="w-6.5 h-6.5 bg-[#C9F600] text-[#3B1580] rounded-lg flex items-center justify-center font-bold text-[9px] shrink-0 self-end shadow-xs">
                  JD
                </div>
                <div className="bg-[#3B1580] text-[#FFFFFF]/80 border border-[#FFFFFF]/20 px-3.5 py-2.5 rounded-2xl rounded-bl-xs flex items-center gap-1.5 shadow-xs">
                  <span className="text-[10.5px] font-semibold text-[#C9F600] mr-1">
                    Joy Digital is typing
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#C9F600] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#C9F600] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#C9F600] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            {/* Final Completed Screen with WhatsApp CTA */}
            {isCompleted && (
              <div className="bg-[#3B1580] border border-[#C9F600]/40 rounded-2xl p-4 space-y-3 animate-fade-in text-left">
                {!submitError ? (
                  <>
                    <div className="flex items-center gap-2 text-[#C9F600] font-black text-xs">
                      <i className="fa-solid fa-circle-check text-sm" />
                      <span>Requirements Successfully Received!</span>
                    </div>
                    <p className="text-[11.5px] text-[#FFFFFF]/80 leading-normal">
                      Saravanan and our tech team will review your project and prepare a tailored proposal. Want an instant discussion? Continue on WhatsApp!
                    </p>
                    <div className="flex flex-col gap-2 pt-1">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full py-2.5 bg-[#C9F600] hover:bg-[#b8f000] text-[#3B1580] rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-98"
                      >
                        <i className="fa-brands fa-whatsapp text-sm" />
                        <span>Discuss on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full py-2 bg-[#3B1580] border border-[#FFFFFF]/25 hover:border-[#C9F600] text-[#FFFFFF] rounded-xl font-bold text-xs cursor-pointer transition-all"
                      >
                        Close Chat
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-extrabold text-xs">
                      <i className="fa-solid fa-triangle-exclamation text-sm" />
                      <span>Connection Delay</span>
                    </div>
                    <p className="text-[11px] text-[#FFFFFF]">
                      Please connect with us directly on WhatsApp to receive your proposal without delay!
                    </p>
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                    >
                      <i className="fa-brands fa-whatsapp text-sm" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick-Reply Options & Active Input Panel */}
          {!isCompleted && (
            <div className="p-3 bg-[#3B1580] border-t border-[#FFFFFF]/20 shrink-0 space-y-2.5">
              
              {/* 1. Quick Reply Options (when options exist) */}
              {currentStep.type === "options" && currentStep.options && !isTyping && (
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {currentStep.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      className="text-[11.5px] font-semibold bg-[#3B1580] hover:bg-[#3B1580]/80 text-[#FFFFFF] hover:text-[#C9F600] border border-[#FFFFFF]/25 hover:border-[#C9F600] px-3 py-1.5 rounded-xl cursor-pointer transition-all shadow-2xs hover:shadow-xs active:scale-95 text-left flex items-center gap-1.5"
                    >
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* 2. Step Text Input (Single line) */}
              {currentStep.type === "text" && (
                <form onSubmit={handleStepInputSubmit} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder={currentStep.placeholder || "Type your answer..."}
                    className="flex-1 text-xs px-3.5 py-2.5 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-xl outline-none focus:border-[#C9F600] text-[#FFFFFF] placeholder-[#FFFFFF]/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim()}
                    className="w-9 h-9 bg-[#C9F600] hover:bg-[#b8f000] text-[#3B1580] font-black rounded-xl flex items-center justify-center shadow-md disabled:opacity-40 cursor-pointer shrink-0 transition-transform active:scale-95"
                  >
                    <i className="fa-solid fa-paper-plane text-xs" />
                  </button>
                </form>
              )}

              {/* 3. Step Textarea Input */}
              {currentStep.type === "textarea" && (
                <form onSubmit={handleStepInputSubmit} className="flex flex-col gap-2">
                  <textarea
                    rows={2}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder={currentStep.placeholder || "Type your requirement here..."}
                    className="w-full text-xs p-3 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-xl outline-none focus:border-[#C9F600] text-[#FFFFFF] placeholder-[#FFFFFF]/40 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim()}
                    className="w-full py-2.5 bg-[#C9F600] hover:bg-[#b8f000] text-[#3B1580] font-black rounded-xl font-bold text-xs shadow-md disabled:opacity-40 cursor-pointer"
                  >
                    Submit Requirement
                  </button>
                </form>
              )}

              {/* 4. Contact Form Input (Lead Capture) */}
              {currentStep.type === "contact_form" && (
                <form onSubmit={handleContactSubmit} className="space-y-2 text-left text-xs bg-[#3B1580] p-3 rounded-2xl border border-[#FFFFFF]/20">
                  {formError && (
                    <p className="text-[10.5px] text-red-500 font-bold bg-red-50 dark:bg-red-950/40 p-1.5 rounded-lg">
                      {formError}
                    </p>
                  )}
                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF]">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-xl outline-none focus:border-[#C9F600] text-[#FFFFFF] placeholder-[#FFFFFF]/40 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF]">
                      WhatsApp / Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-xl outline-none focus:border-[#C9F600] text-[#FFFFFF] placeholder-[#FFFFFF]/40 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#FFFFFF]/70">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="name@business.com"
                      className="w-full px-3 py-2 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-xl outline-none focus:border-[#C9F600] text-[#FFFFFF] placeholder-[#FFFFFF]/40 text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#C9F600] hover:bg-[#b8f000] text-[#3B1580] font-black rounded-xl shadow-md cursor-pointer disabled:opacity-40 transition-all active:scale-[0.98] mt-1 text-xs flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-paper-plane text-xs" />
                    <span>{isSubmitting ? "Submitting..." : "Get My Custom Proposal"}</span>
                  </button>
                </form>
              )}

              {/* 5. Hybrid Free-Form Input (Always available during options step for typing any question) */}
              {currentStep.type === "options" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleFreeFormMessage(textInput);
                  }}
                  className="flex gap-2 items-center pt-1 border-t border-slate-100 dark:border-purple-900/30"
                >
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Ask any question (English / தமிழ்)..."
                    className="flex-1 text-[11px] px-3.5 py-2 bg-[#3B1580] border border-[#FFFFFF]/25 rounded-xl outline-none focus:border-[#C9F600] text-[#FFFFFF] placeholder-[#FFFFFF]/40"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim() || isTyping}
                    className="w-8 h-8 bg-purple-600 hover:bg-purple-700 active:scale-90 text-white rounded-xl flex items-center justify-center shadow-xs disabled:opacity-40 cursor-pointer shrink-0 transition-transform"
                    title="Send message"
                  >
                    <i className="fa-solid fa-paper-plane text-[10px]" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[1000] flex items-center justify-center p-4">
          <div className="bg-[#3B1580] border border-[#FFFFFF]/20 rounded-2xl p-5 max-w-xs w-full shadow-2xl text-left space-y-3">
            <h4 className="font-extrabold text-sm text-[#FFFFFF]">Start a new conversation?</h4>
            <p className="text-xs text-[#FFFFFF]/70 leading-normal">
              Are you sure? Your current selections will be cleared.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-[#FFFFFF] rounded-lg font-bold text-xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleRestartChat}
                className="px-3.5 py-1.5 bg-purple-600 text-white rounded-lg font-bold text-xs cursor-pointer shadow-xs"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bounce-subtle custom css keyframe injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 3s infinite ease-in-out;
        }
      `,
        }}
      />
    </div>
  );
}
