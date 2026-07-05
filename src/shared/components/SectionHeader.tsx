import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps): React.JSX.Element {
  return (
    <header
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-start",
        className,
      )}
    >
      <h2 className="font-display text-3xl font-semibold text-primary-900 dark:text-neutral-50 md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p> : null}
    </header>
  );
}
