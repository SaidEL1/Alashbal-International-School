"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";

export default function LocaleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.JSX.Element {
  const t = useTranslations("common");

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-container items-center justify-center px-4 py-16">
      <Card className="max-w-lg text-center">
        <CardHeader>
          <CardTitle className="font-display text-3xl">{t("errorTitle")}</CardTitle>
          <CardDescription>{t("errorDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button type="button" onClick={reset}>
            {t("errorCta")}
          </Button>
          <Button asChild variant="outline">
            <Link href="/">{t("notFoundCta")}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
