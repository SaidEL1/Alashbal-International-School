"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { GalleryImage } from "@/config/academics";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
};

export function GalleryGrid({
  images,
  columns = 3,
  className,
}: GalleryGridProps): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback((): void => setActiveIndex(null), []);

  const goTo = useCallback(
    (index: number): void => {
      setActiveIndex((index + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, goTo]);

  const gridCols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <ul className={cn("grid gap-4", gridCols, className)}>
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              type="button"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setActiveIndex(index)}
              aria-label={image.alt}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="transition-transform duration-normal group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute end-4 top-4 text-neutral-50 hover:bg-neutral-800"
            onClick={close}
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" aria-hidden />
          </Button>
          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <OptimizedImage src={active.src} alt={active.alt} fill sizes="90vw" />
            </div>
            <p className="mt-3 text-center text-sm text-neutral-200">{active.alt}</p>
            <div className="mt-4 flex justify-center gap-3">
              <Button type="button" variant="secondary" onClick={() => goTo(activeIndex! - 1)}>
                Previous
              </Button>
              <Button type="button" variant="secondary" onClick={() => goTo(activeIndex! + 1)}>
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
