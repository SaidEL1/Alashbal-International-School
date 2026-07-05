import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { cn } from "@/lib/utils";

type TeamCardProps = {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
  className?: string;
};

export function TeamCard({
  name,
  role,
  bio,
  imageSrc,
  imageAlt,
  featured = false,
  className,
}: TeamCardProps): React.JSX.Element {
  if (featured) {
    return (
      <article
        className={cn(
          "grid gap-8 rounded-xl border border-border bg-background p-6 md:grid-cols-[240px_1fr]",
          className,
        )}
      >
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width:768px) 100vw, 240px"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-primary-900 dark:text-neutral-50">
            {name}
          </h2>
          <p className="mt-1 text-sm font-medium text-secondary-600">{role}</p>
          {bio ? <p className="mt-4 leading-relaxed text-muted-foreground">{bio}</p> : null}
        </div>
      </article>
    );
  }

  return (
    <article className={cn("text-center", className)}>
      <div className="relative mx-auto aspect-square max-w-[200px] overflow-hidden rounded-lg">
        <OptimizedImage src={imageSrc} alt={imageAlt} fill sizes="200px" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-primary-900 dark:text-neutral-50">
        {name}
      </h3>
      <p className="mt-1 text-sm text-secondary-600">{role}</p>
    </article>
  );
}
