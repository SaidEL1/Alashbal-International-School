import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LanguagesView } from "@/features/academics/components/AcademicViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "academics.languages" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/academics/languages` },
  };
}

export default async function LanguagesPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LanguagesView />;
}
