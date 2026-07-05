import { cn } from "@/lib/utils";

type ProseContentProps = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export function ProseContent({
  children,
  className,
  centered = false,
}: ProseContentProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "space-y-4 text-base leading-relaxed text-muted-foreground",
        "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary-900 dark:[&_h2]:text-neutral-50",
        "[&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary-900 dark:[&_h3]:text-neutral-50",
        "[&_p+p]:mt-4",
        centered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
