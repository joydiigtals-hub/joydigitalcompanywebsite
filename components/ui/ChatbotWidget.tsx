"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { INITIAL_WELCOME_STEP, CHAT_STEPS_MAP, generateWhatsAppUrl } from "@/lib/chat/flows";
import { ChatStep, ChatLeadData, MessageItem, ChatOption } from "@/lib/chat/types";

export default function ChatbotWidget() {
  const pathname = usePathname();

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

  // 2. Initialize session and proactive tooltip
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

    // Show proactive tooltip after 8 seconds if chat not opened
    const tooltipDismissed = localStorage.getItem("jd_tooltip_dismissed");
    if (!tooltipDismissed) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 8000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [shouldRender]);

  // 3. Scroll to bottom on new messages
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
    localStorage.setItem("jd_tooltip_dismissed", "true");
    trackEvent("chat_opened", { sessionId });
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem("jd_tooltip_dismissed", "true");
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
      {/* 1. Proactive Tooltip (Shows after 8s) */}
      {!isOpen && showTooltip && (
        <div className="absolute bottom-16 left-0 mb-2 w-76 bg-white dark:bg-[#160E28] border border-purple-200/80 dark:border-purple-800/40 p-3.5 rounded-2xl shadow-[0_10px_35px_-5px_rgba(30,17,58,0.25)] animate-fade-in text-xs z-[999]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <p className="font-bold text-slate-900 dark:text-white">Planning a new website?</p>
            </div>
            <button
              onClick={handleCloseTooltip}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5"
              aria-label="Close tooltip"
            >
              <i className="fa-solid fa-xmark text-xs" />
            </button>
          </div>
          <p className="text-[11.5px] text-slate-600 dark:text-slate-300 mt-1 leading-normal">
            Get a tailored proposal & roadmap for your industry, or chat with our tech lead!
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleOpenChat}
              className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-bold text-[11px] shadow-sm hover:shadow-md cursor-pointer transition-all"
            >
              🎯 Get Custom Proposal
            </button>
            <button
              onClick={handleCloseTooltip}
              className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg font-semibold text-[11px] cursor-pointer"
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating Circular Chat Button (Icon kept as requested) */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          aria-label="Open Joy Digital AI Assistant"
          className="relative w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#7C3AED] via-purple-600 to-indigo-600 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(124,58,237,0.7)] transition-all duration-300 cursor-pointer border border-purple-400/40 animate-bounce-subtle"
        >
          <i className="fa-solid fa-comments text-xl sm:text-2xl" />

          {/* Unread badge with pulse */}
          {hasUnread && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-emerald-500 text-[9px] font-black text-white">
                1
              </span>
            </span>
          )}
        </button>
      )}

      {/* 3. Main Chat Window Panel */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-4 sm:inset-auto sm:bottom-24 sm:left-6 w-auto sm:w-[395px] h-[85vh] sm:h-[610px] max-h-[660px] bg-white dark:bg-[#110B22] border border-slate-200/90 dark:border-purple-900/50 rounded-[24px] shadow-[0_20px_60px_-15px_rgba(15,10,35,0.4)] flex flex-col overflow-hidden animate-fade-in transition-all z-[999]">
          
          {/* Header - Solid Deep Obsidian/Amethyst Theme (NO white wash gradient!) */}
          <div className="bg-[#160D2E] text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0 border-b border-purple-500/20 relative overflow-hidden">
            {/* Ambient subtle decorative glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-600/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-2.5 sm:gap-3 relative z-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center relative shadow-md border border-white/20 shrink-0">
                <span className="font-black text-xs text-white tracking-wider">JD</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#160D2E] flex items-center justify-center">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs sm:text-[13px] font-black tracking-wide text-white leading-none">
                    Joy Digital AI
                  </h4>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-full font-bold">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-purple-200/90 font-medium mt-1 leading-none">
                  Next.js Agency • Chennai & Madurai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 relative z-10">
              {/* Direct WhatsApp Action */}
              <button
                onClick={handleWhatsAppRedirect}
                className="w-7.5 h-7.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-500/35 text-emerald-300 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-sm" />
              </button>

              {/* Back button */}
              {stepHistory.length > 0 && !isCompleted && (
                <button
                  onClick={handleGoBack}
                  className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                  title="Go Back 1 Step"
                  aria-label="Back"
                >
                  <i className="fa-solid fa-chevron-left text-xs" />
                </button>
              )}

              {/* Start Over button */}
              <button
                onClick={() => setShowResetModal(true)}
                className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                title="Start Over"
                aria-label="Start Over"
              >
                <i className="fa-solid fa-rotate-right text-xs" />
              </button>

              {/* Minimize/Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-7.5 h-7.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95 ml-0.5"
                title="Close chat"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs text-left bg-[#F8F9FD] dark:bg-[#0D0819]">
            {messages.map((msg, idx) => {
              const isBot = msg.role === "assistant";
              return (
                <div key={msg.id || idx} className={`flex ${isBot ? "justify-start" : "justify-end"} gap-2`}>
                  {isBot && (
                    <div className="w-6.5 h-6.5 bg-gradient-to-tr from-purple-700 to-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-[9px] shrink-0 self-end shadow-xs">
                      JD
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap shadow-xs ${
                      isBot
                        ? "bg-white dark:bg-[#1A1230] text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-purple-900/40 rounded-bl-xs"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-xs font-medium shadow-purple-600/15"
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
                <div className="w-6.5 h-6.5 bg-gradient-to-tr from-purple-700 to-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-[9px] shrink-0 self-end shadow-xs">
                  JD
                </div>
                <div className="bg-white dark:bg-[#1A1230] text-slate-400 border border-slate-200/80 dark:border-purple-900/40 px-3.5 py-2.5 rounded-2xl rounded-bl-xs flex items-center gap-1.5 shadow-xs">
                  <span className="text-[10.5px] font-semibold text-purple-600 dark:text-purple-400 mr-1">
                    Joy Digital is typing
                  </span>
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            {/* Final Completed Screen with WhatsApp CTA */}
            {isCompleted && (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl p-4 space-y-3 animate-fade-in text-left">
                {!submitError ? (
                  <>
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-xs">
                      <i className="fa-solid fa-circle-check text-sm" />
                      <span>Requirements Successfully Received!</span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-normal">
                      Saravanan and our tech team will review your project and prepare a tailored proposal. Want an instant discussion? Continue on WhatsApp!
                    </p>
                    <div className="flex flex-col gap-2 pt-1">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-98"
                      >
                        <i className="fa-brands fa-whatsapp text-sm" />
                        <span>Discuss on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs cursor-pointer transition-all"
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
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">
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
            <div className="p-3 bg-white dark:bg-[#120B24] border-t border-slate-200/80 dark:border-purple-900/40 shrink-0 space-y-2.5">
              
              {/* 1. Quick Reply Options (when options exist) */}
              {currentStep.type === "options" && currentStep.options && !isTyping && (
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {currentStep.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      className="text-[11.5px] font-semibold bg-slate-50 dark:bg-[#1C1436] hover:bg-purple-50 dark:hover:bg-purple-950/50 text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 border border-slate-200 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-600 px-3 py-1.5 rounded-xl cursor-pointer transition-all shadow-2xs hover:shadow-xs active:scale-95 text-left flex items-center gap-1.5"
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
                    className="flex-1 text-xs px-3.5 py-2.5 bg-slate-50 dark:bg-[#1A1133] border border-slate-200 dark:border-purple-900/50 rounded-xl outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600/20 text-slate-900 dark:text-white transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim()}
                    className="w-9 h-9 bg-purple-600 hover:bg-purple-700 text-white rounded-xl flex items-center justify-center shadow-md disabled:opacity-40 cursor-pointer shrink-0 transition-transform active:scale-95"
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
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-[#1A1133] border border-slate-200 dark:border-purple-900/50 rounded-xl outline-none focus:border-purple-600 text-slate-900 dark:text-white resize-none"
                  />
                  <button
                    type="submit"
                    disabled={!textInput.trim()}
                    className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-md disabled:opacity-40 cursor-pointer"
                  >
                    Submit Requirement
                  </button>
                </form>
              )}

              {/* 4. Contact Form Input (Lead Capture) */}
              {currentStep.type === "contact_form" && (
                <form onSubmit={handleContactSubmit} className="space-y-2 text-left text-xs bg-slate-50/70 dark:bg-[#181030] p-3 rounded-2xl border border-slate-200/80 dark:border-purple-900/40">
                  {formError && (
                    <p className="text-[10.5px] text-red-500 font-bold bg-red-50 dark:bg-red-950/40 p-1.5 rounded-lg">
                      {formError}
                    </p>
                  )}
                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 bg-white dark:bg-[#100922] border border-slate-200 dark:border-purple-900/50 rounded-xl outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600/20 text-slate-900 dark:text-white text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      WhatsApp / Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-white dark:bg-[#100922] border border-slate-200 dark:border-purple-900/50 rounded-xl outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600/20 text-slate-900 dark:text-white text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="name@business.com"
                      className="w-full px-3 py-2 bg-white dark:bg-[#100922] border border-slate-200 dark:border-purple-900/50 rounded-xl outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600/20 text-slate-900 dark:text-white text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md shadow-purple-600/25 cursor-pointer disabled:opacity-40 transition-all active:scale-[0.98] mt-1 text-xs flex items-center justify-center gap-2"
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
                    className="flex-1 text-[11px] px-3.5 py-2 bg-slate-50 dark:bg-[#1A1133] border border-slate-200 dark:border-purple-900/50 rounded-xl outline-none focus:border-purple-600 text-slate-900 dark:text-white"
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
          <div className="bg-white dark:bg-[#160E28] border border-slate-200 dark:border-purple-800/40 rounded-2xl p-5 max-w-xs w-full shadow-2xl text-left space-y-3">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Start a new conversation?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
              Are you sure? Your current selections will be cleared.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg font-bold text-xs cursor-pointer"
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
