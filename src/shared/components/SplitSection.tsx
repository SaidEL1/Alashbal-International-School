import { cn } from "@/lib/utils";

type SplitSectionProps = {
  children: React.ReactNode;
  media: React.ReactNode;
  reverse?: boolean;
  className?: string;
  bg?: "default" | "muted";
};

export function SplitSection({
  children,
  media,
  reverse = false,
  className,
  bg = "default",
}: SplitSectionProps): React.JSX.Element {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        bg === "muted" ? "bg-neutral-50 dark:bg-neutral-950" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto grid max-w-container items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div className={cn(reverse && "lg:order-2")}>{children}</div>
        <div className={cn("relative", reverse && "lg:order-1")}>{media}</div>
      </div>
    </section>
  );
}
