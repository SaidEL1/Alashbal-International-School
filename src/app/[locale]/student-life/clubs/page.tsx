import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ClubsView } from "@/features/student-life/components/StudentLifeViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "studentLife.clubs" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/student-life/clubs` },
  };
}

export default async function ClubsPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ClubsView />;
}
