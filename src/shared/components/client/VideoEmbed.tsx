"use client";

import { Play } from "lucide-react";
import { useState } from "react";

import { imagePaths } from "@/lib/images";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

type VideoEmbedProps = {
  title: string;
  posterAlt: string;
  embedUrl?: string;
  className?: string;
};

export function VideoEmbed({
  title,
  posterAlt,
  embedUrl,
  className,
}: VideoEmbedProps): React.JSX.Element {
  const [loaded, setLoaded] = useState(false);

  if (!embedUrl) {
    return (
      <div className={cn("relative aspect-video overflow-hidden rounded-xl", className)}>
        <OptimizedImage
          src={imagePaths.home.principal}
          alt={posterAlt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary-900/40">
          <Button type="button" variant="secondary" size="lg" disabled aria-label={title}>
            <Play className="h-5 w-5" aria-hidden />
            {title}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-xl", className)}>
      {!loaded ? (
        <button
          type="button"
          className="absolute inset-0 z-10 flex items-center justify-center bg-primary-900/50"
          onClick={() => setLoaded(true)}
          aria-label={title}
        >
          <span className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-medium text-primary-900">
            <Play className="h-5 w-5" aria-hidden />
            {title}
          </span>
        </button>
      ) : null}
      {loaded ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <OptimizedImage
          src={imagePaths.home.principal}
          alt={posterAlt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
        />
      )}
    </div>
  );
}
