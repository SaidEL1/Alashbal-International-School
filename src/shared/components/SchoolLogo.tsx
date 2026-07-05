import Image from "next/image";

import { siteConfig } from "@/config/site";
import { imagePaths } from "@/lib/images";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type SchoolLogoProps = {
  className?: string;
  imageClassName?: string;
  showLink?: boolean;
  priority?: boolean;
};

export function SchoolLogo({
  className,
  imageClassName,
  showLink = true,
  priority = false,
}: SchoolLogoProps): React.JSX.Element {
  const image = (
    <Image
      src={imagePaths.brand.logo}
      alt={siteConfig.name}
      width={320}
      height={80}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-12 lg:h-14", imageClassName)}
    />
  );

  if (!showLink) {
    return <div className={className}>{image}</div>;
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={siteConfig.name}
    >
      {image}
    </Link>
  );
}
