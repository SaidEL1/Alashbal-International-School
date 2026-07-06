import { getTranslations } from "next-intl/server";

import {
  ageBandHrefs,
  homepageSectionIds,
  pillarIcons,
  statKeys,
  testimonialKeys,
} from "@/config/homepage";
import { Link } from "@/i18n/navigation";
import { imagePaths } from "@/lib/images";
import { AgeBandCard } from "@/shared/components/AgeBandCard";
import { CTABanner } from "@/shared/components/CTABanner";
import { FeatureCard } from "@/shared/components/FeatureCard";
import { Hero } from "@/shared/components/Hero";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { ScrollReveal } from "@/shared/components/client/ScrollReveal";
import { SectionHeader } from "@/shared/components/SectionHeader";
import { SplitSection } from "@/shared/components/SplitSection";
import { TrustBar } from "@/shared/components/TrustBar";
import { LazyStatCounterSection } from "@/features/home/components/StatCounterSection";
import { LazyTestimonialSection } from "@/features/home/components/TestimonialSection";
import { Button } from "@/ui/button";

export async function HomepageView(): Promise<React.JSX.Element> {
  const t = await getTranslations("home");

  const stats = Object.fromEntries(
    statKeys.map((key) => [
      key,
      {
        value: Number(t(`stats.${key}.value`)),
        suffix: t(`stats.${key}.suffix`),
        label: t(`stats.${key}.label`),
      },
    ]),
  ) as Record<(typeof statKeys)[number], { value: number; suffix?: string; label: string }>;

  const testimonials = testimonialKeys.map((key) => ({
    id: key,
    quote: t(`testimonials.${key}.quote`),
    author: t(`testimonials.${key}.author`),
    role: t(`testimonials.${key}.role`),
  }));

  return (
    <>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        lead={t("hero.lead")}
        primaryCta={{ label: t("hero.primaryCta"), href: "/admissions/book-a-tour" }}
        secondaryCta={{ label: t("hero.secondaryCta"), href: "/admissions/inquire" }}
      />

      <TrustBar />

      <section id={homepageSectionIds.pillars} className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-container px-4">
          <ScrollReveal>
            <SectionHeader title={t("pillars.title")} subtitle={t("pillars.subtitle")} />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillarIcons.map((Icon, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <FeatureCard
                  icon={Icon}
                  title={t(`pillars.items.${index}.title`)}
                  description={t(`pillars.items.${index}.description`)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id={homepageSectionIds.journey}
        className="bg-neutral-50 py-16 dark:bg-neutral-950 md:py-24"
      >
        <div className="mx-auto max-w-container px-4">
          <ScrollReveal>
            <SectionHeader title={t("journey.title")} subtitle={t("journey.subtitle")} />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ageBandHrefs.map((href, index) => (
              <ScrollReveal key={href} delay={index * 0.06}>
                <AgeBandCard
                  href={href}
                  title={t(`journey.bands.${index}.title`)}
                  ages={t(`journey.bands.${index}.ages`)}
                  description={t(`journey.bands.${index}.description`)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id={homepageSectionIds.cambridge}>
        <SplitSection
          media={
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <OptimizedImage
                src={imagePaths.home.cambridge}
                alt={t("cambridge.imageAlt")}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          }
        >
          <ScrollReveal>
            <SectionHeader
              align="start"
              title={t("cambridge.title")}
              subtitle={t("cambridge.subtitle")}
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">{t("cambridge.body")}</p>
          </ScrollReveal>
        </SplitSection>
      </section>

      <section id={homepageSectionIds.stem} className="bg-primary-900 py-16 md:py-24">
        <div className="mx-auto grid max-w-container items-center gap-10 px-4 lg:grid-cols-5 lg:gap-16">
          <ScrollReveal className="lg:col-span-3">
            <h2 className="font-display text-3xl font-semibold text-neutral-50 md:text-4xl">
              {t("stem.title")}
            </h2>
            <p className="mt-3 text-lg text-neutral-300">{t("stem.subtitle")}</p>
            <p className="mt-6 leading-relaxed text-neutral-300">{t("stem.body")}</p>
            <Button asChild className="mt-8" variant="secondary">
              <Link href="/academics/stem">{t("stem.cta")}</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <OptimizedImage
                src={imagePaths.about.placeholder}
                alt={t("stem.imageAlt")}
                fill
                sizes="40vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id={homepageSectionIds.principal}
        className="bg-neutral-50 py-16 dark:bg-neutral-950 md:py-24"
      >
        <div className="mx-auto grid max-w-container items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-border bg-secondary-100 p-8 shadow-elevation2 dark:bg-primary-900/30">
              <OptimizedImage
                src={imagePaths.brand.logo}
                alt={t("principal.imageAlt")}
                fill
                sizes="(max-width:1024px) 80vw, 400px"
                className="object-contain p-6"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeader
              align="start"
              title={t("principal.title")}
              subtitle={t("principal.subtitle")}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t("principal.intro")}</p>
              <p>{t("principal.body")}</p>
            </div>
            <p className="mt-6 text-sm font-medium text-primary-900 dark:text-neutral-50">
              {t("principal.name")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id={homepageSectionIds.stats} className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-container px-4">
          <LazyStatCounterSection stats={stats} />
        </div>
      </section>

      <section
        id={homepageSectionIds.testimonials}
        className="bg-primary-900 py-16 md:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-container px-4">
          <h2 id="testimonials-heading" className="sr-only">
            {t("testimonials.title")}
          </h2>
          <LazyTestimonialSection items={testimonials} ariaLabel={t("testimonials.ariaLabel")} />
        </div>
      </section>

      <section
        id={homepageSectionIds.galleryPreview}
        className="bg-neutral-50 py-16 dark:bg-neutral-950 md:py-24"
      >
        <div className="mx-auto max-w-container px-4">
          <ScrollReveal>
            <SectionHeader
              title={t("galleryPreview.title")}
              subtitle={t("galleryPreview.subtitle")}
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["g1", "g2", "g3", "g4"] as const).map((key) => (
              <div key={key} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <OptimizedImage
                  src={imagePaths.about.placeholder}
                  alt={t(`galleryPreview.${key}`)}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        id={homepageSectionIds.cta}
        title={t("cta.title")}
        description={t("cta.description")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/book-a-tour"
        secondaryLabel={t("cta.secondary")}
        secondaryHref="/admissions/inquire"
      />
    </>
  );
}
