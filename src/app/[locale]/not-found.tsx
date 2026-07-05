import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";

export default async function NotFound(): Promise<React.JSX.Element> {
  const t = await getTranslations("common");

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-container items-center justify-center px-4 py-16">
      <Card className="max-w-lg text-center">
        <CardHeader>
          <p className="text-sm font-semibold text-secondary-500">404</p>
          <CardTitle className="font-display text-3xl">{t("notFoundTitle")}</CardTitle>
          <CardDescription>{t("notFoundDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">{t("notFoundCta")}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
