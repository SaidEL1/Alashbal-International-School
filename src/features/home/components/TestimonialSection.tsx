"use client";

import dynamic from "next/dynamic";

import {
  TestimonialCarousel,
  type Testimonial,
} from "@/shared/components/client/TestimonialCarousel";

type TestimonialSectionProps = {
  items: Testimonial[];
  ariaLabel: string;
};

export function TestimonialSection({
  items,
  ariaLabel,
}: TestimonialSectionProps): React.JSX.Element {
  return <TestimonialCarousel items={items} ariaLabel={ariaLabel} />;
}

export const LazyTestimonialSection = dynamic(
  () => Promise.resolve({ default: TestimonialSection }),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto h-48 max-w-4xl animate-pulse rounded-xl bg-primary-800/50" />
    ),
  },
);
