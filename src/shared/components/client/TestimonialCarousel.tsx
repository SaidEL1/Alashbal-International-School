"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

type TestimonialCarouselProps = {
  items: Testimonial[];
  ariaLabel: string;
};

export function TestimonialCarousel({
  items,
  ariaLabel,
}: TestimonialCarouselProps): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;
  const regionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (next: number): void => {
      setIndex((next + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (reducedMotion || paused || items.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [items.length, paused, reducedMotion]);

  useEffect(() => {
    const node = regionRef.current;
    if (!node) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        goTo(items.length - 1);
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [goTo, index, items.length]);

  const current = items[index];
  if (!current) return <div />;

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      className="mx-auto max-w-4xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <figure aria-live="polite" aria-atomic="true" className="text-center">
        <blockquote className="font-display text-2xl leading-relaxed text-neutral-50 md:text-3xl">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6">
          <p className="font-semibold text-secondary-400">{current.author}</p>
          <p className="text-sm text-neutral-300">{current.role}</p>
        </figcaption>
      </figure>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Previous testimonial"
          className="border-neutral-600 bg-transparent text-neutral-50 hover:bg-neutral-800"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft className="h-5 w-5 rtl:rotate-180" aria-hidden />
        </Button>

        {!reducedMotion && items.length > 1 ? (
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
            aria-pressed={paused}
            className="border-neutral-600 bg-transparent text-neutral-50 hover:bg-neutral-800"
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <Play className="h-4 w-4" aria-hidden />
            ) : (
              <Pause className="h-4 w-4" aria-hidden />
            )}
          </Button>
        ) : null}

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Next testimonial"
          className="border-neutral-600 bg-transparent text-neutral-50 hover:bg-neutral-800"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
        </Button>
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
        aria-label="Testimonial slides"
      >
        {items.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            aria-label={`Slide ${itemIndex + 1} of ${items.length}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              itemIndex === index ? "bg-secondary-500" : "bg-neutral-600",
            )}
            onClick={() => goTo(itemIndex)}
          />
        ))}
      </div>
    </div>
  );
}
