import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { Cpu, FlaskConical, Globe, Languages, Users } from "lucide-react";

import {
  aiProgramKeys,
  cambridgeBenefitKeys,
  cambridgeFaqKeys,
  cambridgeStageKeys,
  programRoutes,
  stemCompetitionKeys,
  languageKeys,
  type AcademicProgramKey,
} from "@/config/academics";
import { ageBandHrefs } from "@/config/homepage";
import { Breadcrumb } from "@/shared/components/Breadcrumb";
import { CTABanner } from "@/shared/components/CTABanner";
import { FeatureCard } from "@/shared/components/FeatureCard";
import { Hero } from "@/shared/components/Hero";
import { AgeBandCard } from "@/shared/components/AgeBandCard";
import { OptimizedImage } from "@/shared/components/OptimizedImage";
import { ProseContent } from "@/shared/components/ProseContent";
import { SectionHeader } from "@/shared/components/SectionHeader";
import { SplitSection } from "@/shared/components/SplitSection";
import { Timeline, type TimelineItem } from "@/shared/components/Timeline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";
import { LazyGalleryGrid } from "@/features/gallery/components/LazyGalleryGrid";
import { imagePaths } from "@/lib/images";
import { placeholderGalleryImages } from "@/lib/gallery";

const LazyVideoEmbed = dynamic(
  () => import("@/shared/components/client/VideoEmbed").then((m) => m.VideoEmbed),
  { loading: () => <div className="aspect-video animate-pulse rounded-xl bg-muted" /> },
);

export async function AcademicsHubView(): Promise<React.JSX.Element> {
  const t = await getTranslations("academics.hub");
  const tShared = await getTranslations("academics.shared");
  const tHome = await getTranslations();

  return (
    <>
      <Breadcrumb
        items={[{ label: tHome("home.title"), href: "/" }, { label: t("title") }]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16">
        <ProseContent centered className="mx-auto max-w-container px-4">
          <p>{t("philosophy")}</p>
        </ProseContent>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <SectionHeader title={tShared("ageBandsTitle")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ageBandHrefs.map((href, index) => (
              <AgeBandCard
                key={href}
                href={href}
                title={tHome(`home.journey.bands.${index}.title`)}
                ages={tHome(`home.journey.bands.${index}.ages`)}
                description={tHome(`home.journey.bands.${index}.description`)}
              />
            ))}
          </div>
        </div>
      </section>
      <SplitSection
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <OptimizedImage
              src={imagePaths.home.cambridge}
              alt={tHome("home.cambridge.imageAlt")}
              fill
              sizes="50vw"
            />
          </div>
        }
      >
        <SectionHeader
          align="start"
          title={tHome("home.cambridge.title")}
          subtitle={tHome("home.cambridge.subtitle")}
        />
        <p className="mt-4 text-muted-foreground">{tHome("home.cambridge.body")}</p>
      </SplitSection>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <SectionHeader title={tShared("beyondTitle")} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={FlaskConical}
              title={t("beyondAcademics.stem.title")}
              description={t("beyondAcademics.stem.description")}
            />
            <FeatureCard
              icon={Languages}
              title={t("beyondAcademics.languages.title")}
              description={t("beyondAcademics.languages.description")}
            />
            <FeatureCard
              icon={Users}
              title={t("beyondAcademics.support.title")}
              description={t("beyondAcademics.support.description")}
            />
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

export async function ProgramPageView({
  programKey,
}: {
  programKey: AcademicProgramKey;
}): Promise<React.JSX.Element> {
  const t = await getTranslations(`academics.programs.${programKey}`);
  const tShared = await getTranslations("academics.shared");
  const tHome = await getTranslations();
  const route = programRoutes[programKey];

  const schedule: TimelineItem[] = [0, 1, 2, 3, 4].map((i) => ({
    year: t(`schedule.${i}.year`),
    title: t(`schedule.${i}.title`),
    description: t(`schedule.${i}.description`),
  }));

  const gallery = placeholderGalleryImages(["g1", "g2", "g3", "g4"], (id) => t(`gallery.${id}`));

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.academics"), href: "/academics" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} subtitle={t("badge")} lead={t("lead")} />
      <section className="py-16">
        <ProseContent className="mx-auto max-w-container px-4">
          <p>{t("overview")}</p>
        </ProseContent>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <FeatureCard
              key={i}
              title={t(`curriculum.${i}.title`)}
              description={t(`curriculum.${i}.description`)}
            />
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-container px-4">
          <SectionHeader title={tShared("scheduleTitle")} />
          <Timeline items={schedule} className="mt-10 max-w-2xl" />
        </div>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <LazyGalleryGrid images={gallery} columns={2} />
        </div>
      </section>
      {(route.prev ?? route.next) && (
        <section className="py-12">
          <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2">
            {route.prev ? (
              <AgeBandCard
                href={programRoutes[route.prev].href}
                title={tHome(`academics.programs.${route.prev}.title`)}
                ages={tHome(`academics.programs.${route.prev}.badge`)}
                description={t("prevLabel")}
              />
            ) : null}
            {route.next ? (
              <AgeBandCard
                href={programRoutes[route.next].href}
                title={tHome(`academics.programs.${route.next}.title`)}
                ages={tHome(`academics.programs.${route.next}.badge`)}
                description={t("nextLabel")}
              />
            ) : null}
          </div>
        </section>
      )}
      <CTABanner
        title={t("cta.title")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/apply"
      />
    </>
  );
}

export async function CambridgePathwayView(): Promise<React.JSX.Element> {
  const t = await getTranslations("academics.cambridge");
  const tShared = await getTranslations("academics.shared");
  const tHome = await getTranslations();

  const stages: TimelineItem[] = cambridgeStageKeys.map((key) => ({
    year: key.toUpperCase(),
    title: t(`stages.${key}.title`),
    description: t(`stages.${key}.description`),
  }));

  const statKeys = ["years", "nationalities", "passRate"] as const;

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.academics"), href: "/academics" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16">
        <ProseContent centered className="mx-auto max-w-container px-4">
          <p>{t("overview")}</p>
        </ProseContent>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto max-w-container px-4">
          <SectionHeader title={tShared("stagesTitle")} />
          <Timeline items={stages} className="mt-10" />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-container gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {cambridgeBenefitKeys.map((key) => (
            <FeatureCard
              key={key}
              title={t(`benefits.${key}.title`)}
              description={t(`benefits.${key}.description`)}
            />
          ))}
        </div>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 sm:grid-cols-3">
          {statKeys.map((key) => (
            <div key={key} className="text-center">
              <p className="font-display text-4xl font-semibold text-primary-900 dark:text-neutral-50">
                {t(`stats.${key}.value`)}
                {t(`stats.${key}.suffix`)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t(`stats.${key}.label`)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeader title={tShared("faqTitle")} />
          <Accordion type="single" collapsible className="mt-8">
            {cambridgeFaqKeys.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger>{t(`faq.${key}.question`)}</AccordionTrigger>
                <AccordionContent>{t(`faq.${key}.answer`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export async function StemView(): Promise<React.JSX.Element> {
  const t = await getTranslations("academics.stem");
  const tHome = await getTranslations();
  const gallery = placeholderGalleryImages(["g1", "g2", "g3", "g4", "g5", "g6"], (id) =>
    t(`gallery.${id}`),
  );

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.academics"), href: "/academics" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <section className="relative flex min-h-[50vh] items-end bg-primary-900">
        <div className="absolute inset-0 opacity-40">
          <OptimizedImage src={imagePaths.about.placeholder} alt={t("title")} fill sizes="100vw" />
        </div>
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
        <div className="mx-auto max-w-container px-4">
          <LazyGalleryGrid images={gallery} columns={3} />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-container gap-6 px-4 md:grid-cols-3">
          {stemCompetitionKeys.map((key) => (
            <FeatureCard
              key={key}
              title={t(`competitions.${key}.title`)}
              description={t(`competitions.${key}.description`)}
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

export async function AiRoboticsView(): Promise<React.JSX.Element> {
  const t = await getTranslations("academics.aiRobotics");
  const tHome = await getTranslations();

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.academics"), href: "/academics" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <section className="relative flex min-h-[50vh] items-end bg-primary-900">
        <div className="absolute inset-0 opacity-40">
          <OptimizedImage src={imagePaths.about.placeholder} alt={t("title")} fill sizes="100vw" />
        </div>
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
          {aiProgramKeys.map((key) => (
            <FeatureCard
              key={key}
              icon={Cpu}
              title={t(`programs.${key}.title`)}
              description={t(`programs.${key}.description`)}
            />
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-container px-4">
          <LazyVideoEmbed title={t("videoTitle")} posterAlt={t("title")} />
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

export async function LanguagesView(): Promise<React.JSX.Element> {
  const t = await getTranslations("academics.languages");
  const tHome = await getTranslations();

  return (
    <>
      <Breadcrumb
        items={[
          { label: tHome("home.title"), href: "/" },
          { label: tHome("nav.academics"), href: "/academics" },
          { label: t("title") },
        ]}
        className="mx-auto max-w-container px-4 pt-6"
      />
      <Hero variant="page" title={t("title")} lead={t("lead")} />
      <section className="py-16">
        <ProseContent centered className="mx-auto max-w-container px-4">
          <p>{t("overview")}</p>
        </ProseContent>
      </section>
      <section className="bg-neutral-50 py-16 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-container gap-6 px-4 md:grid-cols-3">
          {languageKeys.map((key) => (
            <FeatureCard
              key={key}
              icon={Globe}
              title={t(`cards.${key}.title`)}
              description={t(`cards.${key}.description`)}
            />
          ))}
        </div>
      </section>
      <SplitSection
        bg="muted"
        media={
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <OptimizedImage
              src={imagePaths.about.placeholder}
              alt={t("arabicIslamic.imageAlt")}
              fill
              sizes="50vw"
            />
          </div>
        }
      >
        <SectionHeader align="start" title={t("arabicIslamic.title")} />
        <p className="mt-4 text-muted-foreground">{t("arabicIslamic.body")}</p>
      </SplitSection>
      <CTABanner
        title={t("cta.title")}
        primaryLabel={t("cta.primary")}
        primaryHref="/admissions/inquire"
      />
    </>
  );
}
