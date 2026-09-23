"use client";

import React, { useState, useEffect } from "react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    desc: "Submit your basic parameters on our audit form or drop a line on WhatsApp outlining your services and targets."
  },
  {
    step: "02",
    title: "Understand Your Goals",
    desc: "We run a brief remote discovery chat to evaluate competitors, target keywords, speed bottlenecks, and user paths."
  },
  {
    step: "03",
    title: "Plan & Design Layouts",
    desc: "Our design team structures wireframes and conversion funnels, maintaining a premium brand identity."
  },
  {
    step: "04",
    title: "Develop & Launch",
    desc: "We write clean Next.js/React layouts, configure meta structures, embed Schema markups, and launch live."
  },
  {
    step: "05",
    title: "Support & Organic Growth",
    desc: "Post-deployment, we configure backups, run speed diagnostics, check Google indexings, and tune structures."
  }
];

export default function ProcessSection() {
  const [processInView, setProcessInView] = useState(false);

  useEffect(() => {
    const processObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProcessInView(true);
        processObserver.unobserve(entry.target);
      }
    }, { threshold: 0.15 });

    const processSec = document.getElementById("process-section-inner");
    if (processSec) processObserver.observe(processSec);

    return () => {
      if (processSec) processObserver.unobserve(processSec);
    };
  }, []);

  return (
    <div id="process-section-inner" className="relative">
      {/* Progressive animated horizontal connecting gradient line (purple theme) */}
      <div className="absolute top-6 left-12 right-12 h-[2px] bg-slate-100 hidden lg:block z-0">
        <div 
          className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] origin-left transition-transform duration-1000 ease-out"
          style={{ transform: processInView ? "scaleX(1)" : "scaleX(0)" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
        {PROCESS_STEPS.map((step, idx) => (
          <div 
            key={idx} 
            style={{ transitionDelay: `${idx * 150}ms` }}
            className="flex flex-col items-start text-left group reveal-hidden"
          >
            <div className="relative mb-6">
              <span className="text-4xl font-black text-[#7C3AED]/15 group-hover:text-[#7C3AED] transition-colors duration-300">
                {step.step}
              </span>
            </div>
            <h3 className="text-sm font-extrabold text-[#1F1B2D] mb-3 group-hover:text-[#7C3AED] transition-colors">
              {step.title}
            </h3>
            <p className="text-xs text-[#6B6478] leading-relaxed font-semibold">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
