import { getTranslations } from "next-intl/server";
import { Dumbbell, Palette, Trophy, Users } from "lucide-react";

import { clubKeys, galleryCategories, sportKeys } from "@/config/academics";
import { GalleryPageClient } from "@/features/student-life/components/GalleryPageClient";
import { LazyGalleryGrid } from "@/features/gallery/components/LazyGalleryGrid";
import { Link } from "@/i18n/navigation";
import { Breadcrumb } from "@/shared/components/Breadcrumb";
import { CTABanner } from "@/shared/components/CTABanner";
import { FeatureCard } from "@/shared/components/FeatureCard";
import { Hero } from "@/shared/components/Hero";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { ProseContent } from "@/shared/components/ProseContent";
import { SectionHeader } from "@/shared/components/SectionHeader";
import { SplitSection } from "@/shared/components/SplitSection";
import { imagePaths } from "@/lib/images";
import type { GalleryImage } from "@/config/academics";

export async function StudentLifeHubView(): Promise<React.JSX.Element> {
  const t = await getTranslations("studentLife.hub");
  const tHome = await getTranslations();
  const mosaic = ["g1", "g2", "g3", "g4", "g5", "g6"].map((id) => ({
    id,
    src: imagePaths.about.placeholder,
    alt: t(`mosaic.${id}`),
  }));

  const categories = [
    { key: "clubs", href: "/student-life/clubs", icon: Users },
    { key: "sports", href: "/student-life/sports", icon: Trophy },
    { key: "events", href: "/student-life/events", icon: Palette },
    { key: "gallery", href: "/student-life/gallery", icon: Dumbbell },
  ] as const;

  return (
    <>
      <Breadcrumb
        items={[{ label: tHome("home.title"), href: "/" }, { label: t("title") }]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <section className="relative flex min-h-[50vh] items-end">
        <OptimizedImage
          src={imagePaths.about.placeholder}
          alt={t("title")}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-950/50" />
        <div className="relative mx-auto w-full max-w-container px-4 py-16">
          <h1 className="font-display text-4xl font-semibold text-neutral-50 md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">{t("lead")}</p>
        </div>
      </section>
      <section className="py-16">
        <ProseContent className="mx-auto max-w-container px-4">
          <p>{t("overview")}</p>
        </ProseContent>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2">
          {categories.map(({ key, href, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FeatureCard
                icon={Icon}
                title={t(`categories.${key}.title`)}
                description={t(`categories.${key}.description`)}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-container px-4">
          <LazyGalleryGrid images={mosaic} columns={3} />
        </div>
      </section>
      <CTABanner
        title={t("cta.title")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/book-a-tour"
      />
    </>
  );
}

export async function ClubsView(): Promise<React.JSX.Element> {
  const t = await getTranslations("studentLife.clubs");
  const tHome = await getTranslations();

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.studentLife"), href: "/student-life" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16">
        <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {clubKeys.map((key) => (
            <FeatureCard
              key={key}
              title={t(`clubs.${key}.name`)}
              description={`${t(`clubs.${key}.ages`)} — ${t(`clubs.${key}.description`)}`}
            />
          ))}
        </div>
      </section>
      <CTABanner
        title={t("cta.title")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/inquire"
      />
    </>
  );
}

export async function SportsView(): Promise<React.JSX.Element> {
  const t = await getTranslations("studentLife.sports");
  const tHome = await getTranslations();

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.studentLife"), href: "/student-life" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <section className="relative flex min-h-[40vh] items-end bg-primary-900">
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage src={imagePaths.about.placeholder} alt={t("title")} fill sizes="100vw" />
        </div>
        <div className="relative mx-auto w-full max-w-container px-4 py-16">
          <h1 className="font-display text-4xl font-semibold text-neutral-50">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-neutral-200">{t("lead")}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {sportKeys.map((key) => (
            <FeatureCard
              key={key}
              title={t(`sports.${key}.name`)}
              description={t(`sports.${key}.description`)}
            />
          ))}
        </div>
      </section>
      <SplitSection
        bg="muted"
        media={
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <OptimizedImage
              src={imagePaths.about.placeholder}
              alt={t("facilities.imageAlt")}
              fill
              sizes="50vw"
            />
          </div>
        }
      >
        <SectionHeader align="start" title={t("facilities.title")} />
        <p className="mt-4 text-muted-foreground">{t("facilities.body")}</p>
      </SplitSection>
      <CTABanner
        title={t("cta.title")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/book-a-tour"
      />
    </>
  );
}

export async function GalleryView(): Promise<React.JSX.Element> {
  const t = await getTranslations("studentLife.gallery");
  const tHome = await getTranslations();

  const images: GalleryImage[] = Array.from({ length: 12 }, (_, i) => {
    const id = `i${i + 1}`;
    const category = t(`items.${id}.category`) as GalleryImage["category"];
    return {
      id,
      src: imagePaths.about.placeholder,
      alt: t(`items.${id}.alt`),
      category: galleryCategories.includes(category as (typeof galleryCategories)[number])
        ? category
        : "campus",
    };
  });

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.studentLife"), href: "/student-life" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16">
        <div className="mx-auto max-w-container px-4">
          <GalleryPageClient images={images} />
        </div>
      </section>
      <CTABanner
        title={t("cta.title")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/book-a-tour"
      />
    </>
  );
}
