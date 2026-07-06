import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "default" | "dark";
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = "default",
  className,
}: FeatureCardProps): React.JSX.Element {
  return (
    <Card
      className={cn(
        "h-full border-border transition-shadow duration-normal hover:shadow-elevation2",
        variant === "dark" && "border-primary-800 bg-primary-900 text-neutral-50",
        className,
      )}
    >
      <CardHeader>
        {Icon ? (
          <div
            className={cn(
              "mb-2 flex h-12 w-12 items-center justify-center rounded-lg",
              variant === "dark"
                ? "bg-primary-800 text-secondary-500"
                : "bg-primary-50 text-primary-700",
            )}
            aria-hidden
          >
            <Icon className="h-6 w-6" />
          </div>
        ) : null}
        <CardTitle
          className={cn(
            "font-display text-xl",
            variant === "dark" ? "text-neutral-50" : "text-primary-900 dark:text-neutral-50",
          )}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription
          className={cn(
            "whitespace-pre-line text-base leading-relaxed",
            variant === "dark" ? "text-neutral-300" : "text-muted-foreground",
          )}
        >
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
