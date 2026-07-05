import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LeadershipView } from "@/features/about/components/AboutViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.leadership" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/about/leadership` },
  };
}

export default async function LeadershipPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LeadershipView locale={locale} />;
}
