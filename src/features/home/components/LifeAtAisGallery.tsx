"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

import { imagePaths } from "@/lib/images";
import { cn } from "@/lib/utils";

export type GallerySlide = {
  id: string;
  src: string;
  alt: string;
};

type LifeAtAisGalleryProps = {
  title: string;
  subtitle: string;
  bannerAlt: string;
  slides: GallerySlide[];
};

export function LifeAtAisGallery({
  title,
  subtitle,
  bannerAlt,
  slides,
}: LifeAtAisGalleryProps): React.JSX.Element {
  const reducedMotion = useReducedMotion() ?? false;
  const loopSlides = [...slides, ...slides];

  return (
    <div className="space-y-10">
      <figure className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border shadow-elevation1">
        <div className="flex h-44 items-center justify-center bg-neutral-100 p-4 sm:h-52 md:h-56">
          <Image
            src={imagePaths.home.hero}
            alt={bannerAlt}
            width={960}
            height={540}
            className="max-h-36 w-auto max-w-full object-contain sm:max-h-44 md:max-h-48"
            sizes="(max-width: 768px) 90vw, 672px"
          />
        </div>
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950/95 via-primary-900/75 to-transparent px-6 pb-6 pt-16 text-center">
          <h2 className="font-display text-2xl font-semibold text-neutral-50 md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-neutral-200 md:text-base">{subtitle}</p>
        </figcaption>
      </figure>

      <div
        className="relative -mx-4 overflow-hidden px-4 md:-mx-0 md:px-0"
        aria-label={title}
        role="region"
      >
        {reducedMotion ? (
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2">
            {slides.map((slide) => (
              <GalleryCard key={slide.id} slide={slide} />
            ))}
          </div>
        ) : (
          <div className="flex w-max animate-gallery-scroll gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {loopSlides.map((slide, index) => (
              <GalleryCard key={`${slide.id}-${index}`} slide={slide} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryCard({ slide }: { slide: GallerySlide }): React.JSX.Element {
  return (
    <div
      className={cn(
        "relative h-52 w-72 shrink-0 snap-start overflow-hidden rounded-xl border border-border shadow-elevation1",
        "sm:h-56 sm:w-80",
      )}
    >
      <Image src={slide.src} alt={slide.alt} fill className="object-cover" sizes="320px" />
    </div>
  );
}
