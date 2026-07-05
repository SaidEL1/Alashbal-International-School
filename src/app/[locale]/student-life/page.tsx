import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StudentLifeHubView } from "@/features/student-life/components/StudentLifeViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "studentLife.hub" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/student-life` },
  };
}

export default async function StudentLifePage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StudentLifeHubView />;
}
