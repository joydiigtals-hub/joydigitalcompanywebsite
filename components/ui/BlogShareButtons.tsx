"use client";

import React, { useState, useEffect } from "react";

interface BlogShareButtonsProps {
  title: string;
  slug: string;
  variant?: "compact" | "box" | "sidebar";
  className?: string;
}

export default function BlogShareButtons({
  title,
  slug,
  variant = "compact",
  className = "",
}: BlogShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState(`https://www.joydigital.in/blog/${slug}`);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
      setCanNativeShare(typeof navigator !== "undefined" && Boolean(navigator.share));
    }
  }, [slug]);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Check out this article: ${title}`,
          url: shareUrl,
        });
      } catch (err) {
        // Ignore user cancellation
      }
    }
  };

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${shareUrl}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  // Compact Variant (e.g. Header bar next to author)
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 mr-0.5">
          <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share:
        </span>

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp"
          className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border border-emerald-200/60 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
        >
          <i className="fa-brands fa-whatsapp text-sm" />
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          aria-label="Share on LinkedIn"
          className="w-8 h-8 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-700 hover:text-white border border-sky-200/60 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
        >
          <i className="fa-brands fa-linkedin-in text-xs" />
        </a>

        {/* Twitter / X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X (Twitter)"
          aria-label="Share on X"
          className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white border border-slate-300/60 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
        >
          <i className="fa-brands fa-x-twitter text-xs" />
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          aria-label="Share on Facebook"
          className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200/60 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
        >
          <i className="fa-brands fa-facebook-f text-xs" />
        </a>

        {/* Native Share button for Mobile */}
        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            title="More share options"
            aria-label="Share via device options"
            className="w-8 h-8 rounded-full bg-purple-50 text-primary hover:bg-primary hover:text-white border border-primary/20 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 cursor-pointer"
          >
            <i className="fa-solid fa-share-nodes text-xs" />
          </button>
        )}

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopy}
          title={copied ? "Link Copied!" : "Copy Link"}
          aria-label="Copy article link"
          className={`relative px-2.5 h-8 rounded-full text-[11px] font-bold border transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-2xs ${
            copied
              ? "bg-emerald-600 text-white border-emerald-600 scale-105"
              : "bg-slate-50 text-slate-700 hover:bg-slate-150 border-slate-200 hover:border-slate-300"
          }`}
        >
          {copied ? (
            <>
              <i className="fa-solid fa-check text-[10px]" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-link text-[10px] text-slate-500" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    );
  }

  // Sidebar Variant (For Desktop TOC Sidebar)
  if (variant === "sidebar") {
    return (
      <div className={`select-none ${className}`}>
        <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share Article
        </h4>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on WhatsApp"
            className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border border-emerald-200/70 flex items-center justify-center transition-all hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp text-sm" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on LinkedIn"
            className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-700 hover:text-white border border-sky-200/70 flex items-center justify-center transition-all hover:scale-105"
          >
            <i className="fa-brands fa-linkedin-in text-xs" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on X"
            className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white border border-slate-300/70 flex items-center justify-center transition-all hover:scale-105"
          >
            <i className="fa-brands fa-x-twitter text-xs" />
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
            className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200/70 flex items-center justify-center transition-all hover:scale-105"
          >
            <i className="fa-brands fa-facebook-f text-xs" />
          </a>
          <button
            type="button"
            onClick={handleCopy}
            title={copied ? "Link Copied!" : "Copy Link"}
            className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all hover:scale-105 cursor-pointer ${
              copied
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
            }`}
          >
            {copied ? <i className="fa-solid fa-check text-xs" /> : <i className="fa-solid fa-link text-xs text-slate-500" />}
          </button>
        </div>
      </div>
    );
  }

  // Box / Banner Variant (For Bottom of Article Reader)
  return (
    <div className={`p-6 sm:p-7 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50/80 border border-[#E2E8F0] rounded-2xl select-none shadow-xs ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-black text-primary uppercase tracking-wider block mb-1">
            Spread the Knowledge
          </span>
          <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            Found this guide helpful? Share it with others
          </h4>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Help other business owners, founders, and marketers discover this guide.
          </p>
        </div>

        {/* Share Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* WhatsApp */}
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold flex items-center gap-2 shadow-xs transition-all hover:scale-[1.03]"
          >
            <i className="fa-brands fa-whatsapp text-sm" />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-[#0A66C2] text-white hover:bg-[#084e96] text-xs font-bold flex items-center gap-2 shadow-xs transition-all hover:scale-[1.03]"
          >
            <i className="fa-brands fa-linkedin-in text-xs" />
            <span>LinkedIn</span>
          </a>

          {/* Twitter / X */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-black text-xs font-bold flex items-center gap-2 shadow-xs transition-all hover:scale-[1.03]"
          >
            <i className="fa-brands fa-x-twitter text-xs" />
            <span>X</span>
          </a>

          {/* Facebook */}
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl bg-[#1877F2] text-white hover:bg-[#0d65d9] text-xs font-bold flex items-center gap-2 shadow-xs transition-all hover:scale-[1.03]"
          >
            <i className="fa-brands fa-facebook-f text-xs" />
            <span>Share</span>
          </a>

          {/* Native Share button if supported */}
          {canNativeShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="px-3.5 py-2.5 rounded-xl bg-purple-100 text-primary hover:bg-primary hover:text-white border border-primary/20 text-xs font-bold flex items-center gap-1.5 transition-all hover:scale-[1.03] cursor-pointer"
            >
              <i className="fa-solid fa-share-nodes text-xs" />
              <span>More</span>
            </button>
          )}

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopy}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all hover:scale-[1.03] cursor-pointer shadow-xs ${
              copied
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
            }`}
          >
            {copied ? (
              <>
                <i className="fa-solid fa-check text-xs" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-link text-xs text-slate-500" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
