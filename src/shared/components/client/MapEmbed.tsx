"use client";

import { useState } from "react";

import { siteConfig } from "@/config/site";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { imagePaths } from "@/lib/images";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  title: string;
  loadLabel: string;
  className?: string;
};

export function MapEmbed({ title, loadLabel, className }: MapEmbedProps): React.JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const embedUrl = siteConfig.mapEmbedUrl;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-xl border border-border",
        className,
      )}
    >
      {!loaded ? (
        <button
          type="button"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-neutral-100 dark:bg-neutral-900"
          onClick={() => setLoaded(true)}
          aria-label={loadLabel}
        >
          <OptimizedImage
            src={imagePaths.about.placeholder}
            alt=""
            fill
            sizes="100vw"
            className="opacity-40"
          />
          <span className="relative z-10 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            {loadLabel}
          </span>
        </button>
      ) : (
        <iframe
          title={title}
          src={embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}
