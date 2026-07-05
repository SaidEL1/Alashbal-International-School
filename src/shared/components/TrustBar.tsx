import { getTranslations } from "next-intl/server";

import { trustLogoKeys } from "@/config/homepage";
import { imagePaths } from "@/lib/images";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { cn } from "@/lib/utils";

type TrustBarProps = {
  variant?: "compact" | "expanded";
  className?: string;
};

export async function TrustBar({
  variant = "compact",
  className,
}: TrustBarProps): Promise<React.JSX.Element> {
  const t = await getTranslations("trust");

  return (
    <section
      aria-label={t("ariaLabel")}
      className={cn(
        "border-y border-border bg-neutral-50 dark:bg-neutral-950",
        variant === "compact" ? "py-4" : "py-10",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-container items-center gap-8 px-4",
          variant === "compact"
            ? "overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden"
            : "grid grid-cols-2 gap-6 md:grid-cols-4",
        )}
      >
        {trustLogoKeys.map((key) => {
          const src =
            key === "cambridge"
              ? imagePaths.trust.cambridge
              : key === "moe"
                ? imagePaths.trust.moe
                : key === "cis"
                  ? imagePaths.trust.cis
                  : imagePaths.trust.ib;

          return (
            <figure
              key={key}
              className={cn(
                "flex shrink-0 flex-col items-center gap-2",
                variant === "compact" ? "min-w-[140px]" : "",
              )}
            >
              <OptimizedImage
                src={src}
                alt={t(`${key}.alt`)}
                width={160}
                height={48}
                sizes="160px"
                className="h-10 w-auto object-contain opacity-80"
              />
              {variant === "expanded" ? (
                <figcaption className="text-center text-sm text-muted-foreground">
                  {t(`${key}.description`)}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
