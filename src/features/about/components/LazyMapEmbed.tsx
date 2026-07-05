"use client";

import dynamic from "next/dynamic";

export const LazyMapEmbed = dynamic(
  () => import("@/shared/components/client/MapEmbed").then((m) => m.MapEmbed),
  {
    ssr: false,
    loading: () => <div className="aspect-video animate-pulse rounded-xl bg-muted" />,
  },
);
