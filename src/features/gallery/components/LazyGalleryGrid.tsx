"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

import type { GalleryImage } from "@/config/academics";

type LazyGalleryGridProps = {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
};

export const LazyGalleryGrid = dynamic(
  () => import("@/shared/components/client/GalleryGrid").then((m) => m.GalleryGrid),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    ),
  },
) as ComponentType<LazyGalleryGridProps>;
