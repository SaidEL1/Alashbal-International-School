import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { imagePaths } from "@/lib/images";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

type HeroProps = {
  variant?: "home" | "page";
  title: string;
  subtitle?: string;
  lead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  videoSrc?: string;
  posterAlt?: string;
};

export async function Hero({
  variant = "home",
  title,
  subtitle,
  lead,
  primaryCta,
  secondaryCta,
  className,
  videoSrc: _videoSrc,
  posterAlt,
}: HeroProps): Promise<React.JSX.Element> {
  const t = await getTranslations("home.hero");

  if (variant === "page") {
    return (
      <section className={cn("bg-neutral-50 py-16 dark:bg-neutral-950 md:py-20", className)}>
        <div className="mx-auto max-w-container px-4 text-center">
          {subtitle ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary-600">
              {subtitle}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary-900 dark:text-neutral-50 md:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{lead}</p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className={cn("bg-primary-950", className)}>
      <div className="mx-auto max-w-container px-4 pt-4 md:pt-6">
        <figure className="mx-auto flex max-w-2xl items-center justify-center rounded-xl border border-white/10 bg-white p-2 sm:max-w-3xl sm:p-3 lg:max-w-4xl">
          <OptimizedImage
            src={imagePaths.home.hero}
            alt={posterAlt ?? t("imageAlt")}
            width={1400}
            height={500}
            priority
            sizes="(max-width: 768px) 92vw, 896px"
            className="h-auto max-h-24 w-full object-contain sm:max-h-32 md:max-h-36 lg:max-h-40"
          />
        </figure>
      </div>
      <div className="relative mx-auto w-full max-w-container px-4 pb-10 pt-6 md:pb-14 md:pt-8">
        {subtitle ? (
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary-400">
            {subtitle}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-3xl font-semibold text-neutral-50 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base text-neutral-200 md:text-lg">{lead}</p>
        ) : null}
        {(primaryCta ?? secondaryCta) ? (
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            {primaryCta ? (
              <Button asChild size="lg" variant="secondary">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-200 bg-transparent text-neutral-50 hover:bg-neutral-50/10"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
