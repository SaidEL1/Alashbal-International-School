import { Link } from "@/i18n/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { cn } from "@/lib/utils";

type AgeBandCardProps = {
  title: string;
  ages: string;
  description: string;
  href: string;
  className?: string;
};

export function AgeBandCard({
  title,
  ages,
  description,
  href,
  className,
}: AgeBandCardProps): React.JSX.Element {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card className="h-full border-border transition-all duration-normal group-hover:-translate-y-1 group-hover:shadow-elevation2 group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <CardHeader>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary-600">
            {ages}
          </p>
          <CardTitle className="font-display text-xl text-primary-900 dark:text-neutral-50">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
