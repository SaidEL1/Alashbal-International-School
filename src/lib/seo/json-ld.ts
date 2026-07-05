import { siteConfig } from "@/config/site";

export function buildOrganizationSchema(locale: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    logo: `${siteConfig.url}/images/trust/cambridge.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [],
  };
}

export function buildWebsiteSchema(locale: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    inLanguage: locale,
    publisher: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
