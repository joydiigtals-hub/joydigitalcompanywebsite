/**
 * Single source of truth for all pricing across Joy Digital.
 * Every page and component must import prices from this file.
 */

export interface PriceTier {
  inr: string;
  usd: string;
}

export const PRICING = {
  staticStarter: {
    inr: "₹15,000",
    usd: "$1,200",
  },
  staticBusinessGrowth: {
    inr: "₹35,000",
    usd: "$2,400",
  },
  customBusinessWebsite: {
    inr: "Custom quote",
    usd: "$4,800+",
  },
  dynamicStandard: {
    inr: "₹35,000",
    usd: "Custom quote",
  },
  ecommerceStandard: {
    inr: "₹50,000",
    usd: "Custom quote",
  },
  ecommerceAdvanced: {
    inr: "₹75,000",
    usd: "Custom quote",
  },
  seoB2BOrganicGrowth: {
    inr: "Custom quote",
    usd: "$500/month",
  },
  seoGlobalEnterprise: {
    inr: "Custom quote",
    usd: "$1,200/month",
  },
} as const;

export const PRICING_NOTE =
  "Prices are starting points and vary by scope. India pricing is in INR; international pricing is in USD.";

export function getPrice(tierKey: keyof typeof PRICING, region: string = "in"): string {
  const isIndia = region.toLowerCase() === "in" || region.toLowerCase().includes("chennai") || region.toLowerCase().includes("coimbatore") || region.toLowerCase().includes("madurai");
  const tier = PRICING[tierKey];
  if (!tier) return "Custom quote";
  return isIndia ? tier.inr : tier.usd;
}
