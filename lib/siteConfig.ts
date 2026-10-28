/**
 * Single source of truth for Joy Digital website configuration,
 * domain URLs, NAP (Name, Address, Phone), and brand social profiles.
 */

export const SITE_URL = "https://www.joydigital.in";

export const siteConfig = {
  name: "Joy Digital",
  legalName: "Joy Digital Growth Agency",
  url: SITE_URL,
  phone: "+91 90800 26133",
  phoneRaw: "+919080026133",
  telephone: "+91-9080026133",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "joydiigtals@gmail.com",
  hq: "Madurai, Tamil Nadu, India",
  address: {
    streetAddress: "Madurai",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    postalCode: "625001",
    addressCountry: "IN",
  },
  geo: {
    latitude: 9.9252,
    longitude: 78.1198,
  },
  partnerOffice: {
    label: "Chennai (Partner Office)",
    address: "11, Jothi nagar 5th street, Murugappa polytechnic nearby, Avadi, Chennai 600053",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/joydigital-solution/",
    google: "https://share.google/BSniheS2qnzwqUKXU",
    youtube: "https://www.youtube.com/@Joydigital2026",
    facebook: "https://www.facebook.com/profile.php?id=61590372457559",
    whatsapp: "https://wa.me/919080026133",
  },
};

export default siteConfig;
