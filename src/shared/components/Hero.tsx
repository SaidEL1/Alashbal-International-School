import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

const HeroVideo = dynamic(
  () => import("@/shared/components/client/HeroVideo").then((m) => m.HeroVideo),
  { ssr: true },
);

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
  videoSrc,
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
    <section
      className={cn("relative flex max-h-[90vh] min-h-[58vh] items-end md:min-h-[68vh]", className)}
    >
      <HeroVideo posterAlt={posterAlt ?? t("imageAlt")} videoSrc={videoSrc} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/45 to-primary-900/10" />
      <div className="relative mx-auto w-full max-w-container px-4 pb-12 pt-28 md:pb-20 md:pt-32">
        {subtitle ? (
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary-400">
            {subtitle}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold text-neutral-50 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead ? <p className="mt-4 max-w-2xl text-lg text-neutral-200 md:text-xl">{lead}</p> : null}
        {(primaryCta ?? secondaryCta) ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
