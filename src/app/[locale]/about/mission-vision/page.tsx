import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { MissionVisionView } from "@/features/about/components/AboutViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.mission" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/about/mission-vision` },
  };
}

export default async function MissionVisionPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MissionVisionView locale={locale} />;
}
