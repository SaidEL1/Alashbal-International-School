export const siteConfig = {
  name: "Alashbal International School",
  shortName: "AIS Doha",
  tagline: "Young Achievers of Today, Global Leaders of Tomorrow",
  description:
    "Cambridge-accredited international school in Doha, Qatar. Premium education, innovation, and future-ready learning.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aisdoha.net",
  email: "info@aisdoha.net",
  phone: "+974 4450 7882",
  address: "Old Airport Area, E-ring Road, Doha, Qatar",
  locales: ["en", "ar", "fr"] as const,
  defaultLocale: "en" as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];
