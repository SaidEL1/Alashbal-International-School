import { getTranslations } from "next-intl/server";

import { Breadcrumb, type BreadcrumbItem } from "@/shared/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";

type PlaceholderPageProps = {
  titleKey: string;
  breadcrumbItems: BreadcrumbItem[];
};

export async function PlaceholderPage({
  titleKey,
  breadcrumbItems,
}: PlaceholderPageProps): Promise<React.JSX.Element> {
  const t = await getTranslations();

  return (
    <div className="mx-auto max-w-container px-4 py-10">
      <Breadcrumb items={breadcrumbItems} className="mb-6" />
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-3xl text-primary-900 dark:text-neutral-50">
            {t(titleKey)}
          </CardTitle>
          <CardDescription>{t("common.comingSoon")}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t("common.tagline")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
