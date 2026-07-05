import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SportsView } from "@/features/student-life/components/StudentLifeViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "studentLife.sports" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/student-life/sports` },
  };
}

export default async function SportsPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SportsView />;
}
