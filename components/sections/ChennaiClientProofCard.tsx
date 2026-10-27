import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function ChennaiClientProofCard() {
  const googleReviews = [
    {
      name: "Ganesh Murugan",
      role: "Financial Advisory Consultant",
      quote: "Joy Digital optimized our map search visibility. We now rank at the top of Google Maps, and our weekly incoming calls and advisory enquiries have doubled!",
      rating: 5,
    },
    {
      name: "Dr. S. K. Murugan",
      role: "Dental Clinic Director, Chennai",
      quote: "Joy Digital optimized our Google Map and local search presence. Within two weeks, we started getting direct calling leads from local search queries.",
      rating: 5,
    },
    {
      name: "Chithra",
      role: "Insurance & Healthcare Advisor",
      quote: "We rebuilt our portfolio using their Next.js architecture. The website loads instantly on mobile networks, and we captured over 50+ qualified policy leads via WhatsApp.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-8 my-8 text-left not-prose">
      {/* Featured Chennai Client Card */}
      <div className="bg-gradient-to-br from-[#FAF9FF] via-white to-purple-50/40 border-2 border-[#7C3AED]/25 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Info & Testimonial */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-black uppercase tracking-wider border border-[#7C3AED]/20">
                Our Chennai Client
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                <MapPin className="w-3 h-3 text-[#7C3AED]" /> Adyar, Chennai
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl sm:text-2xl font-black text-[#1F1B2D] tracking-tight">
                  You &amp; Me - Independent Voyage
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                International Tour Operator &amp; Bespoke Itinerary Agency
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100/80 shadow-sm relative">
              <div className="flex items-center gap-1 text-amber-500 mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-600 ml-1.5">5.0 Verified Review</span>
              </div>
              <blockquote className="text-sm sm:text-base italic text-[#1F1B2D] font-medium leading-relaxed mb-3">
                &ldquo;Joy Digital built our website completely custom. It looks great, it is fast, and we are getting leads from it.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                <span className="font-bold text-[#1F1B2D]">[OWNER_NAME], <span className="text-slate-500 font-normal">Owner</span></span>
                <span className="text-slate-400 text-[11px]">Adyar, Chennai</span>
              </div>
            </div>

            {/* Solution Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 bg-white/80 rounded-xl border border-slate-200/80">
                <span className="block text-[11px] font-bold text-[#1F1B2D] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Custom Next.js
                </span>
                <span className="text-[10px] text-slate-500">Sub-second LCP</span>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-slate-200/80">
                <span className="block text-[11px] font-bold text-[#1F1B2D] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> 3-Step Planner
                </span>
                <span className="text-[10px] text-slate-500">Zero drop-off UI</span>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                <span className="block text-[11px] font-bold text-[#1F1B2D] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> WhatsApp Direct
                </span>
                <span className="text-[10px] text-slate-500">Instant routing</span>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/case-studies/you-and-me-voyage"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://youandmevoyage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#7C3AED] bg-white border border-slate-200 px-4 py-3 rounded-xl transition-colors shadow-sm"
              >
                <span>Live Site: youandmevoyage.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Screenshot Preview */}
          <div className="lg:col-span-5">
            <Link
              href="/case-studies/you-and-me-voyage"
              className="block group rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-[#7C3AED] shadow-md transition-all relative aspect-[16/10] bg-slate-900"
            >
              <Image
                src="/assets/images/portfolio/you-and-me-voyage-1.webp"
                alt="You & Me Voyage Chennai client website engineered by Joy Digital"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div className="text-white">
                  <span className="text-[10px] font-bold text-[#A78BFA] uppercase tracking-wider block">Live Platform</span>
                  <span className="text-xs font-bold">You &amp; Me Voyage - Adyar, Chennai</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Embedded Real Google Reviews */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-lg">
              G
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#1F1B2D] flex items-center gap-2">
                <span>Real Google Reviews</span>
                <span className="text-emerald-600 text-xs font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Verified Rating
                </span>
              </h4>
              <div className="flex items-center gap-1 text-amber-500 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1">5.0 / 5.0 Star Rating</span>
              </div>
            </div>
          </div>

          <a
            href="https://share.google/BSniheS2qnzwqUKXU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50/60 hover:bg-blue-100/60 border border-blue-200 px-4 py-2 rounded-xl transition-colors self-start sm:self-auto"
          >
            <span>View on Google Business Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {googleReviews.map((rev, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50/60 border border-slate-200/70 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 text-xs">
                <strong className="text-[#1F1B2D] block font-bold">{rev.name}</strong>
                <span className="text-slate-500 text-[11px]">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
