"use client";

import dynamic from "next/dynamic";

import type { GallerySlide } from "@/features/home/components/LifeAtAisGallery";

export type LifeAtAisGallerySectionProps = {
  title: string;
  subtitle: string;
  bannerAlt: string;
  slides: GallerySlide[];
};

export const LazyLifeAtAisGallery = dynamic(
  () =>
    import("@/features/home/components/LifeAtAisGallery").then((m) => ({
      default: m.LifeAtAisGallery,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-10">
        <div className="mx-auto h-56 max-w-2xl animate-pulse rounded-2xl bg-muted" />
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-52 w-72 shrink-0 animate-pulse rounded-xl bg-muted" />
          ))}
        </div>
      </div>
    ),
  },
);
