// Central site configuration.
// Fields marked PLACEHOLDER must be replaced with real business information
// before this site goes live. See README.md → "Information You Still Need To Provide".

export const siteConfig = {
  name: "Golden Horizon Asset Recovery",
  shortName: "Golden Horizon",
  tagline: "Asset Recovery & Claim Research",
  domain: "https://goldenhorizonassetrecovery.com",

  // --- PLACEHOLDER business contact info — replace before launch ---
  // Using the universally-recognized "555" fake phone prefix and
  // example.com/123 Main Street conventions so nothing here could be
  // mistaken for a real, working contact — see README before going live.
  phoneDisplay: "(555) 010-0100",
  phoneHref: "tel:+15550100100",
  email: "info@example.com",
  emailHref: "mailto:info@example.com",
  addressLines: ["123 Main Street, Suite 100", "Anytown, ST 00000"],
  hours: "Monday–Friday, 9:00 AM–5:00 PM (Eastern)",
  // --- end placeholders ---

  primaryCta: "Check My Claim",
  primaryCtaHref: "/claim-review",

  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Heirs & Estates", href: "/heirs-estates" },
  { label: "Why We Contacted You", href: "/why-we-contacted-you" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Website Disclaimer", href: "/disclaimer" },
] as const;

export const disclaimerShort =
  "Golden Horizon Asset Recovery is a private asset-recovery and research company and is not a government agency or law firm. Information provided on this website is for general informational purposes and is not legal advice. Claim eligibility and payment decisions are determined by the applicable court, agency, trustee, county, government office, or other holder of funds.";
