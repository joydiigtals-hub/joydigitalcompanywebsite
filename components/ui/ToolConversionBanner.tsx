"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, ArrowRight, Code2 } from 'lucide-react';

interface ToolConversionBannerProps {
  toolName?: string;
  whatsappNumber?: string;
  className?: string;
}

export default function ToolConversionBanner({
  toolName = "this free tool",
  whatsappNumber = "919080026133",
  className = ""
}: ToolConversionBannerProps) {
  
  const whatsappMessage = `Hi Joy Digital, I'm using ${toolName} and would like to discuss building a custom web application for my business.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-slate-900 border border-indigo-500/30 shadow-2xl ${className}`}>
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-indigo-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-fuchsia-500/10 blur-[60px] pointer-events-none" />
      
      {/* Accent Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" />

      <div className="relative z-10 p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        
        {/* Left Section: Icon & Copy */}
        <div className="flex-1 flex flex-col sm:flex-row text-center sm:text-left items-center sm:items-start gap-4 sm:gap-6">
          <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-inner">
            <Sparkles className="w-7 h-7 text-indigo-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Enjoying {toolName}?
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              Imagine having a fully automated, custom web app tailored to your exact business workflow. Stop relying on fragmented tools and scale faster.
            </p>
          </div>
        </div>

        {/* Right Section: CTA Buttons */}
        <div className="shrink-0 flex flex-col w-full sm:w-auto gap-3">
          <Link 
            href="/services/custom-web-development"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] w-full"
          >
            <Code2 className="w-5 h-5" />
            <span>Explore Custom Web App</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-200 w-full"
          >
            <MessageCircle className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
            <span>Chat with an Engineer</span>
          </a>
        </div>
      </div>
    </div>
  );
}
