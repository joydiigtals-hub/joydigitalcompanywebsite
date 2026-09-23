"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Smartphone,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Loader2,
  ChevronRight,
  XCircle
} from 'lucide-react';

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'analyzing' | 'results';

export default function WebsiteAuditWidget({ 
  whatsappNumber = "919080026133",
  className = ""
}: { 
  whatsappNumber?: string;
  className?: string;
}) {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (question: string, answer: string, nextStep: Step) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
    if (nextStep === 'analyzing') {
      setStep('analyzing');
    } else {
      setStep(nextStep);
    }
  };

  useEffect(() => {
    if (step === 'analyzing') {
      const timer = setTimeout(() => {
        setStep('results');
      }, 2500); // 2.5 seconds analysis time
      return () => clearTimeout(timer);
    }
  }, [step]);

  const whatsappMessage = "Hi Joy Digital, I took the website audit quiz and want to fix my lead generation gaps.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Variants for framer motion
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
  };

  const optionVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
  };

  return (
    <div className={`w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white border border-slate-700/50 backdrop-blur-xl ${className}`}>
      <div className="p-8 sm:p-10 min-h-[420px] flex flex-col justify-center relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[80px]" />
          <div className="absolute bottom-[0%] -right-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-500/10 blur-[80px]" />
        </div>

        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 text-center space-y-6"
            >
              <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-slate-300">
                60-Second Website Speed & Sales Audit
              </h2>
              <p className="text-slate-300 text-lg">
                Find out if your website is secretly turning away high-paying customers.
              </p>
              <button
                onClick={() => setStep('q1')}
                className="mt-8 group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 w-full sm:w-auto"
              >
                Start Free Audit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}

          {step === 'q1' && (
            <motion.div
              key="q1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-400 mb-1">Question 1 of 3</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Does your website load on mobile in under 3 seconds?</h3>
                </div>
              </div>
              <div className="space-y-3">
                {['Yes', 'Not Sure', 'No'].map((option, i) => (
                  <motion.button
                    key={option}
                    custom={i}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleAnswer('speed', option, 'q2')}
                    className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-indigo-500/50 transition-colors text-left group"
                  >
                    <span className="text-lg font-medium text-slate-200 group-hover:text-white">{option}</span>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'q2' && (
            <motion.div
              key="q2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-emerald-400 mb-1">Question 2 of 3</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Is there a 1-click WhatsApp chat button on your mobile layout?</h3>
                </div>
              </div>
              <div className="space-y-3">
                {['Yes', 'No'].map((option, i) => (
                  <motion.button
                    key={option}
                    custom={i}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleAnswer('whatsapp', option, 'q3')}
                    className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-emerald-500/50 transition-colors text-left group"
                  >
                    <span className="text-lg font-medium text-slate-200 group-hover:text-white">{option}</span>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'q3' && (
            <motion.div
              key="q3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-amber-400 mb-1">Question 3 of 3</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Are you getting consistent qualified inbound leads from your website?</h3>
                </div>
              </div>
              <div className="space-y-3">
                {['Yes, Daily', 'Rarely', 'Never'].map((option, i) => (
                  <motion.button
                    key={option}
                    custom={i}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handleAnswer('leads', option, 'analyzing')}
                    className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-amber-500/50 transition-colors text-left group"
                  >
                    <span className="text-lg font-medium text-slate-200 group-hover:text-white">{option}</span>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'analyzing' && (
            <motion.div
              key="analyzing"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 h-full py-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Loader2 className="w-16 h-16 text-indigo-400 animate-spin relative z-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Analyzing your digital footprint...</h3>
                <p className="text-slate-400">Comparing your metrics against industry standards.</p>
              </div>
              
              {/* Progress Bar Simulation */}
              <div className="w-full max-w-xs h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full"
                />
              </div>
            </motion.div>
          )}

          {step === 'results' && (
            <motion.div
              key="results"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-rose-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-rose-500/30 shadow-[0_0_40px_rgba(244,63,94,0.4)]">
                <AlertTriangle className="w-10 h-10 text-rose-400" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                Action Required
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Critical Bottlenecks Found!
              </h3>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed px-4">
                Your website is losing <span className="text-rose-400 font-bold">up to 40% of potential leads</span> due to speed & conversion gaps.
              </p>

              <div className="w-full bg-slate-800/80 rounded-2xl p-5 border border-slate-700 mb-8 space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">Slow mobile load times frustrate users before they even see your offer.</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">Friction in contacting you causes drop-offs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">The good news? These are easy to fix.</p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 border border-transparent rounded-2xl hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 focus:ring-offset-slate-900"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                Fix This on WhatsApp Now
                <div className="absolute inset-0 h-full w-full rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:animate-ping"></div>
              </a>
              
              <button 
                onClick={() => { setStep('intro'); setAnswers({}); }}
                className="mt-6 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                Retake Audit
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
