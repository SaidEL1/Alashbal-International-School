import { getTranslations } from "next-intl/server";

import { facilityKeys, leaderKeys, timelineKeys, valueKeys } from "@/config/homepage";
import { siteConfig } from "@/config/site";
import { LazyMapEmbed } from "@/features/about/components/LazyMapEmbed";
import { LazyStatCounterSection } from "@/features/home/components/StatCounterSection";
import { Breadcrumb } from "@/shared/components/Breadcrumb";
import { CTABanner } from "@/shared/components/CTABanner";
import { FeatureCard } from "@/shared/components/FeatureCard";
import { Hero } from "@/shared/components/Hero";
import { JsonLd } from "@/shared/components/JsonLd";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { ProseContent } from "@/shared/components/ProseContent";
import { ScrollReveal } from "@/shared/components/client/ScrollReveal";
import { SplitSection } from "@/shared/components/SplitSection";
import { TeamCard } from "@/shared/components/TeamCard";
import { Timeline } from "@/shared/components/Timeline";
import { TrustBar } from "@/shared/components/TrustBar";
import { imagePaths } from "@/lib/images";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";

type AboutPageProps = {
  locale: string;
};

export async function OurStoryView({ locale }: AboutPageProps): Promise<React.JSX.Element> {
  const t = await getTranslations("about.story");
  const tHome = await getTranslations("home");
  const breadcrumbs = [{ label: tHome("title"), href: "/" }, { label: t("title") }];

  const timeline = timelineKeys.map((key) => ({
    year: key,
    title: t(`timeline.${key}.title`),
    description: t(`timeline.${key}.description`),
  }));

  const stats = {
    years: { value: 18, suffix: "+", label: t("stats.years") },
    nationalities: {
      displayText: t("stats.nationalitiesDisplay"),
      label: t("stats.nationalities"),
    },
    students: { value: 1200, suffix: "+", label: t("stats.students") },
    ratio: { value: 12, suffix: ":1", label: t("stats.ratio") },
  };

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(
          breadcrumbs.map((item) => ({
            name: item.label,
            url: item.href
              ? `${siteConfig.url}/${locale}${item.href}`
              : `${siteConfig.url}/${locale}/about`,
          })),
        )}
      />
      <Breadcrumb items={breadcrumbs} className="mx-auto max-w-container px-4 pt-6" />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-12 px-4 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-8">
            <ProseContent>
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </ProseContent>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-4">
            <Timeline items={timeline} />
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <LazyStatCounterSection stats={stats} />
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

export async function MissionVisionView({ locale }: AboutPageProps): Promise<React.JSX.Element> {
  const t = await getTranslations("about.mission");
  const tHome = await getTranslations("home");
  const breadcrumbs = [{ label: tHome("title"), href: "/" }, { label: t("title") }];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: tHome("title"), url: `${siteConfig.url}/${locale}` },
          { name: t("title"), url: `${siteConfig.url}/${locale}/about/mission-vision` },
        ])}
      />
      <Breadcrumb items={breadcrumbs} className="mx-auto max-w-container px-4 pt-6" />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-8 px-4 md:grid-cols-2">
          <ScrollReveal>
            <FeatureCard title={t("mission.title")} description={t("mission.body")} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FeatureCard title={t("vision.title")} description={t("vision.body")} />
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950 md:py-20">
        <div className="mx-auto max-w-container px-4">
          <h2 className="text-center font-display text-3xl font-semibold text-primary-900 dark:text-neutral-50">
            {t("values.title")}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueKeys.map((key, index) => (
              <ScrollReveal key={key} delay={index * 0.05}>
                <FeatureCard
                  title={t(`values.${key}.title`)}
                  description={t(`values.${key}.body`)}
                />
              </ScrollReveal>
            ))}
          </div>
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

export async function LeadershipView(_props: AboutPageProps): Promise<React.JSX.Element> {
  const t = await getTranslations("about.leadership");
  const tHome = await getTranslations("home");

  return (
    <>
      <Breadcrumb
        items={[{ label: tHome("title"), href: "/" }, { label: t("title") }]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-container px-4">
          <TeamCard
            featured
            name={t("head.name")}
            role={t("head.role")}
            bio={t("head.bio")}
            imageSrc={imagePaths.about.placeholder}
            imageAlt={t("head.imageAlt")}
          />
          <ProseContent className="mt-12 max-w-3xl">
            <p>{t("welcome")}</p>
          </ProseContent>
        </div>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-container gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {leaderKeys.slice(1).map((key) => (
            <TeamCard
              key={key}
              name={t(`team.${key}.name`)}
              role={t(`team.${key}.role`)}
              imageSrc={imagePaths.about.placeholder}
              imageAlt={t(`team.${key}.imageAlt`)}
            />
          ))}
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

export async function AccreditationsView(): Promise<React.JSX.Element> {
  const t = await getTranslations("about.accreditations");
  const tHome = await getTranslations("home");

  return (
    <>
      <Breadcrumb
        items={[{ label: tHome("title"), href: "/" }, { label: t("title") }]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <TrustBar variant="expanded" />
      <SplitSection
        media={
          <div className="relative aspect-square max-w-md overflow-hidden rounded-xl">
            <OptimizedImage
              src={imagePaths.home.cambridge}
              alt={t("cambridge.imageAlt")}
              fill
              sizes="400px"
            />
          </div>
        }
      >
        <h2 className="font-display text-3xl font-semibold text-primary-900 dark:text-neutral-50">
          {t("cambridge.title")}
        </h2>
        <ProseContent className="mt-4">
          <p>{t("cambridge.body")}</p>
        </ProseContent>
      </SplitSection>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <FeatureCard title={t("moe.title")} description={t("moe.body")} />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-container px-4">
          <ProseContent centered>
            <p>{t("quality")}</p>
          </ProseContent>
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

export async function CampusView(): Promise<React.JSX.Element> {
  const t = await getTranslations("about.campus");
  const tHome = await getTranslations("home");

  return (
    <>
      <Breadcrumb
        items={[{ label: tHome("title"), href: "/" }, { label: t("title") }]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <section className="relative flex min-h-[60vh] items-end">
        <OptimizedImage
          src={imagePaths.about.placeholder}
          alt={t("heroImageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/60" />
        <div className="relative mx-auto w-full max-w-container px-4 pb-16">
          <h1 className="font-display text-4xl font-semibold text-neutral-50 md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">{t("lead")}</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <ProseContent centered className="mx-auto max-w-container px-4">
          <p>{t("overview")}</p>
        </ProseContent>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilityKeys.map((key) => (
            <article
              key={key}
              className="overflow-hidden rounded-xl border border-border bg-background"
            >
              <div className="relative aspect-video">
                <OptimizedImage
                  src={imagePaths.about.placeholder}
                  alt={t(`facilities.${key}.imageAlt`)}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h2 className="font-display text-lg font-semibold text-primary-900 dark:text-neutral-50">
                  {t(`facilities.${key}.title`)}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`facilities.${key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-container gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {["g1", "g2", "g3", "g4", "g5", "g6"].map((key) => (
            <div key={key} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <OptimizedImage
                src={imagePaths.about.placeholder}
                alt={t(`gallery.${key}`)}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
      <CTABanner
        variant="accent"
        title={t("virtualTour.title")}
        description={t("virtualTour.description")}
        primaryLabel={t("virtualTour.cta")}
        primaryHref="/about/virtual-tour"
      />
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <LazyMapEmbed title={t("map.title")} loadLabel={t("map.loadLabel")} />
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
