export const siteConfig = {
  name: "Alashbal International School",
  shortName: "AIS Doha",
  tagline: "Young Achievers of Today, Global Leaders of Tomorrow",
  motto: "Home of the Cubs",
  description:
    "Cambridge-accredited international school in Doha, Qatar. Premium education, innovation, and future-ready learning.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NETLIFY === "true" && process.env.URL ? process.env.URL : undefined) ??
    "https://www.aisdoha.net",
  email: "info@aisdoha.net",
  phone: "+974 4450 7882",
  address: "Old Airport Area along E-ring Road, Doha, Qatar",
  mapUrl:
    "https://www.google.com/maps/dir//6HR3%2BCQC+ALASHBAL+INTL.+SCHOOL+E-RING+(AIS+),+Doha,+Qatar/@25.2410521,51.5518065,17z/data=!4m16!1m7!3m6!1s0x3e45cfe35ea5b177:0xf5151bfe8a84a4bb!2sALASHBAL+INTL.+SCHOOL+E-RING+(AIS+)!8m2!3d25.2410521!4d51.5543814!16s%2Fg%2F11kbfg5m3q!4m7!1m0!1m5!1m1!1s0x3e45cfe35ea5b177:0xf5151bfe8a84a4bb!2m2!1d51.5543814!2d25.2410521?entry=ttu",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=ALASHBAL+INTL.+SCHOOL+E-RING+(AIS+),+Doha,+Qatar&ll=25.2410521,51.5543814&z=17&output=embed",
  locales: ["en", "ar", "fr"] as const,
  defaultLocale: "en" as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];
