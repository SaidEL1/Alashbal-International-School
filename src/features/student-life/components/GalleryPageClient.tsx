"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { galleryCategories, type GalleryCategory, type GalleryImage } from "@/config/academics";
import { cn } from "@/lib/utils";

const GalleryGrid = dynamic(
  () => import("@/shared/components/client/GalleryGrid").then((m) => m.GalleryGrid),
  { ssr: false, loading: () => <div className="h-64 animate-pulse rounded-xl bg-muted" /> },
);

type GalleryPageClientProps = {
  images: GalleryImage[];
};

export function GalleryPageClient({ images }: GalleryPageClientProps): React.JSX.Element {
  const t = useTranslations("studentLife.gallery");
  const [category, setCategory] = useState<GalleryCategory>("all");

  const filtered = useMemo(() => {
    if (category === "all") return images;
    return images.filter((image) => image.category === category);
  }, [category, images]);

  return (
    <div>
      <div role="tablist" aria-label={t("filterLabel")} className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={category === key}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              category === key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
            onClick={() => setCategory(key)}
          >
            {t(`filters.${key}`)}
          </button>
        ))}
      </div>
      <GalleryGrid images={filtered} columns={3} />
    </div>
  );
}
