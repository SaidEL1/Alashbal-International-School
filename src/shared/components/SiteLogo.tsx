import Image from "next/image";

import { siteConfig } from "@/config/site";
import { imagePaths } from "@/lib/images";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  showText?: boolean;
  imageClassName?: string;
};

export function SiteLogo({
  className,
  showText = true,
  imageClassName,
}: SiteLogoProps): React.JSX.Element {
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
        src={imagePaths.logo}
        alt=""
        width={120}
        height={48}
        priority
        className={cn("h-10 w-auto object-contain sm:h-11", imageClassName)}
      />
      {showText ? (
        <span className="font-display text-lg font-semibold text-primary-900 dark:text-neutral-50 lg:text-xl">
          {siteConfig.shortName}
        </span>
      ) : null}
    </Link>
  );
}
