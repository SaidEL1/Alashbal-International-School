import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { isShellPath, pathFromSlug } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { HomepageView } from "@/features/home/components/HomepageView";
import { PlaceholderPage } from "@/features/shell/components/PlaceholderPage";
import { JsonLd } from "@/shared/components/JsonLd";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo/json-ld";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

const titleKeyMap: Record<string, string> = {
  "/about/mission-vision": "nav.missionVision",
  "/about/leadership": "nav.leadership",
  "/about/accreditations": "nav.accreditations",
  "/about/campus": "nav.campus",
  "/about/virtual-tour": "nav.virtualTour",
  "/admissions": "nav.admissions",
  "/admissions/how-to-apply": "nav.howToApply",
  "/admissions/tuition-fees": "nav.tuitionFees",
  "/admissions/inquire": "nav.inquireNow",
  "/admissions/book-a-tour": "nav.bookTour",
  "/admissions/apply": "nav.applyOnline",
  "/admissions/faqs": "nav.faqs",
  "/admissions/age-guide": "nav.ageGuide",
  "/admissions/relocating": "nav.relocating",
  "/student-life/events": "nav.events",
  "/news": "nav.news",
  "/contact": "nav.contact",
  "/careers": "utility.careers",
  "/downloads": "utility.downloads",
  "/portal/parent": "utility.parentPortal",
  "/faqs": "nav.faqs",
  "/privacy": "footer.privacy",
  "/terms": "footer.terms",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = pathFromSlug(slug);

  if (path === "/") {
    const t = await getTranslations({ locale, namespace: "home" });
    return {
      title: t("meta.title"),
      description: t("meta.description"),
      alternates: {
        canonical: `${siteConfig.url}/${locale}`,
        languages: {
          en: `${siteConfig.url}/en`,
          ar: `${siteConfig.url}/ar`,
        },
      },
      openGraph: {
        title: t("meta.title"),
        description: t("meta.description"),
        url: `${siteConfig.url}/${locale}`,
        siteName: siteConfig.name,
        locale,
        type: "website",
      },
    };
  }

  const t = await getTranslations({ locale });
  const titleKey = titleKeyMap[path] ?? "common.siteName";
  return { title: t(titleKey) };
}

export default async function LocaleCatchAllPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const path = pathFromSlug(slug);

  if (path === "/") {
    return (
      <>
        <JsonLd data={[buildOrganizationSchema(locale), buildWebsiteSchema(locale)]} />
        <HomepageView />
      </>
    );
  }

  if (!isShellPath(path)) {
    notFound();
  }

  const t = await getTranslations();
  const titleKey = titleKeyMap[path] ?? "common.siteName";

  return (
    <PlaceholderPage
      titleKey={titleKey}
      breadcrumbItems={[{ label: t("home.title"), href: "/" }, { label: t(titleKey) }]}
    />
  );
}
