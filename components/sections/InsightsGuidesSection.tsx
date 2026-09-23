"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, TrendingUp, Zap, Server } from 'lucide-react';

const insightsData = [
  {
    id: 1,
    title: "How to Automate GST Invoices for Modern Web Applications & E-commerce",
    summary: "Eliminate manual billing errors and save hundreds of man-hours by integrating seamless, compliant automated GST invoice generation directly into your application.",
    category: "Automation",
    icon: <BookOpen className="w-5 h-5" />,
    readTime: "6 min read",
    link: "/invoice-generator",
    gradient: "from-blue-500/20 to-indigo-500/5"
  },
  {
    id: 2,
    title: "Why Slow Loading Pages Cost E-commerce Businesses 40% of Daily Revenue",
    summary: "Discover the hidden technical bottlenecks throttling your sales and learn how advanced Next.js performance optimization can instantly lift your conversion rates.",
    category: "Performance",
    icon: <Zap className="w-5 h-5" />,
    readTime: "5 min read",
    link: "/seo-audit-tool",
    gradient: "from-rose-500/20 to-orange-500/5"
  },
  {
    id: 3,
    title: "Next.js vs WordPress: Which Web Architecture is Better for Scaling Global Startups?",
    summary: "A deep dive into modern headless architectures versus traditional CMS platforms, and how choosing the right stack future-proofs your enterprise scaling strategy.",
    category: "Architecture",
    icon: <Server className="w-5 h-5" />,
    readTime: "8 min read",
    link: "/wordpress-to-nextjs-migration",
    gradient: "from-emerald-500/20 to-teal-500/5"
  }
];

export default function InsightsGuidesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>B2B Growth Hub</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Business Guides</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Strategic frameworks, technical deep dives, and scaling playbooks designed for modern digital enterprises.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors shrink-0"
          >
            View all insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {insightsData.map((post) => (
            <motion.div key={post.id} variants={cardVariants} className="h-full">
              <Link href={post.link} className="block h-full group">
                <div className="h-full flex flex-col rounded-3xl bg-slate-900 border border-slate-800 p-8 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/50 hover:-translate-y-1 relative overflow-hidden">
                  
                  {/* Card Glow Effect on Hover */}
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 group-hover:text-white group-hover:border-slate-600 transition-colors">
                      {post.icon}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 relative z-10">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-4 leading-snug group-hover:text-white transition-colors relative z-10">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                    {post.summary}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-800/80 group-hover:border-slate-700 transition-colors relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors">
                        Read Guide & See Solutions
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
