import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ProgramPageView } from "@/features/academics/components/AcademicViews";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "academics.programs.middleSchool" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/${locale}/academics/middle-school` },
  };
}

export default async function MiddleSchoolPage({ params }: PageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProgramPageView programKey="middleSchool" />;
}
