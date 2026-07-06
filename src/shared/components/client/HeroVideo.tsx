"use client";

import { useEffect, useRef, useState } from "react";

import { imagePaths } from "@/lib/images";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { cn } from "@/lib/utils";

type HeroVideoProps = {
  posterAlt: string;
  videoSrc?: string;
  className?: string;
};

export function HeroVideo({ posterAlt, videoSrc, className }: HeroVideoProps): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(media.matches);

    const handler = (event: MediaQueryListEvent): void => {
      setPrefersReducedMotion(event.matches);
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const showVideo = Boolean(videoSrc) && !prefersReducedMotion;

  return (
    <div className={cn("absolute inset-0 bg-primary-950", className)}>
      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={imagePaths.home.hero}
          className="hidden h-full w-full object-contain md:block"
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
      <OptimizedImage
        src={imagePaths.home.hero}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className={cn("object-contain", showVideo && "md:opacity-0")}
      />
    </div>
  );
}
