import Image from "next/image";

import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { imagePaths } from "@/lib/images";
import { cn } from "@/lib/utils";

type SchoolLogoProps = {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { box: "h-9 w-9", text: "text-base" },
  md: { box: "h-11 w-11", text: "text-lg lg:text-xl" },
  lg: { box: "h-16 w-16", text: "text-xl" },
} as const;

export function SchoolLogo({
  className,
  showName = true,
  size = "md",
}: SchoolLogoProps): React.JSX.Element {
  const sizes = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label={siteConfig.name}
    >
      <Image
        src={imagePaths.brand.logo}
        alt={`${siteConfig.shortName} logo`}
        width={64}
        height={64}
        className={cn(sizes.box, "rounded-full object-cover ring-1 ring-border")}
        priority
      />
      {showName ? (
        <span
          className={cn(
            "font-display font-semibold text-primary-900 dark:text-neutral-50",
            sizes.text,
          )}
        >
          {siteConfig.shortName}
        </span>
      ) : null}
    </Link>
  );
}
