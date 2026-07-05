import { cn } from "@/lib/utils";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps): React.JSX.Element {
  return (
    <ol className={cn("relative space-y-8 border-s-2 border-primary-200 ps-6", className)}>
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span
            className="absolute -start-[1.65rem] top-1 flex h-3 w-3 rounded-full bg-primary-700 ring-4 ring-background"
            aria-hidden
          />
          <p className="text-sm font-semibold text-secondary-600">{item.year}</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-primary-900 dark:text-neutral-50">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
