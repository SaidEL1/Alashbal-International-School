import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

type CTABannerProps = {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "primary" | "accent";
  className?: string;
  id?: string;
};

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "primary",
  className,
  id,
}: CTABannerProps): React.JSX.Element {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        variant === "primary" ? "bg-primary-800 text-neutral-50" : "bg-accent-800 text-neutral-50",
        className,
      )}
      aria-labelledby="cta-banner-title"
    >
      <div className="mx-auto max-w-container px-4 text-center">
        <h2 id="cta-banner-title" className="font-display text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">{description}</p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-neutral-200 bg-transparent text-neutral-50 hover:bg-neutral-50/10"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
