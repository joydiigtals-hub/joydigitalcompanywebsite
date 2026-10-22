"use client";

import React, { useEffect, useRef } from "react";

// In-memory translation cache: translationCache[lang][text] = translatedText
const translationCache: Record<string, Record<string, string>> = {};

// WeakMap storing the pristine original English text of each DOM Text node
const originalTextMap = new WeakMap<Node, string>();

/**
 * Fetch translation for a single text string from Google Translate GTX API
 */
async function fetchTranslation(text: string, targetLang: string): Promise<string> {
  if (targetLang === "en") return text;

  if (!translationCache[targetLang]) {
    translationCache[targetLang] = {};
  }

  const cached = translationCache[targetLang][text];
  if (cached) return cached;

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(
      text
    )}`;
    const res = await fetch(url);
    if (!res.ok) return text;

    const data = await res.json();
    const translated = (data[0] || []).map((x: any) => x[0] || "").join("");
    if (translated) {
      translationCache[targetLang][text] = translated;
      return translated;
    }
  } catch (err) {
    console.warn("Translation fetch error:", err);
  }
  return text;
}

/**
 * Apply translation to all translatable text nodes across the entire page
 */
export async function applyClientTranslation(targetLang: string) {
  if (typeof document === "undefined") return;

  // 1. If English, restore all original text nodes
  if (targetLang === "en") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    localStorage.removeItem("joy_lang");

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let currentNode: Node | null;
    while ((currentNode = walker.nextNode())) {
      if (originalTextMap.has(currentNode)) {
        currentNode.nodeValue = originalTextMap.get(currentNode)!;
      }
    }
    return;
  }

  // 2. Set language and text direction (RTL for Arabic)
  document.documentElement.lang = targetLang;
  document.documentElement.dir = targetLang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("joy_lang", targetLang);

  // 3. Collect translatable text nodes
  const nodesToTranslate: Text[] = [];
  const textQueue: string[] = [];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;

      const tag = parent.tagName.toLowerCase();
      if (
        [
          "script",
          "style",
          "code",
          "pre",
          "svg",
          "noscript",
          "textarea",
        ].includes(tag)
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      if (
        parent.closest(".notranslate") ||
        parent.getAttribute("translate") === "no"
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      const val = node.nodeValue?.trim() || "";
      // Ignore empty, single characters, purely numeric, or pure punctuation strings
      if (val.length <= 1 || /^\d+$/.test(val) || /^[\p{P}\s]+$/u.test(val)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node: Node | null;
  while ((node = walker.nextNode())) {
    const textNode = node as Text;
    if (!originalTextMap.has(textNode)) {
      originalTextMap.set(textNode, textNode.nodeValue || "");
    }
    const rawEnglish = originalTextMap.get(textNode) || textNode.nodeValue || "";
    nodesToTranslate.push(textNode);
    textQueue.push(rawEnglish);
  }

  // 4. Translate in parallel batches of 20 concurrent requests
  const BATCH_SIZE = 20;
  for (let i = 0; i < nodesToTranslate.length; i += BATCH_SIZE) {
    const currentNodes = nodesToTranslate.slice(i, i + BATCH_SIZE);
    const currentTexts = textQueue.slice(i, i + BATCH_SIZE);

    const translatedBatch = await Promise.all(
      currentTexts.map(async (text) => {
        const trimmed = text.trim();
        const translatedTrimmed = await fetchTranslation(trimmed, targetLang);
        return text.replace(trimmed, translatedTrimmed);
      })
    );

    currentNodes.forEach((tn, idx) => {
      if (translatedBatch[idx]) {
        tn.nodeValue = translatedBatch[idx];
      }
    });
  }
}

export default function GoogleTranslateLoader() {
  const isTranslatingRef = useRef(false);

  useEffect(() => {
    // 1. Expose global trigger for Header.tsx
    (window as any).__triggerGoogleTranslate = async (lang: string) => {
      if (isTranslatingRef.current) return;
      isTranslatingRef.current = true;
      try {
        await applyClientTranslation(lang);
      } finally {
        isTranslatingRef.current = false;
      }
    };

    // 2. On initial mount, auto-apply saved language from localStorage if non-English
    const savedLang = localStorage.getItem("joy_lang");
    if (savedLang && savedLang !== "en") {
      setTimeout(() => {
        applyClientTranslation(savedLang);
      }, 250);
    }
  }, []);

  return null;
}
