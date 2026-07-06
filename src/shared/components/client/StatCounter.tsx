"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type StatCounterProps = {
  value?: number;
  suffix?: string;
  label: string;
  displayText?: string;
};

function useCountUp(target: number, active: boolean, reducedMotion: boolean): number {
  const [count, setCount] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (reducedMotion || !active) {
      setCount(target);
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reducedMotion, target]);

  return count;
}

export function StatCounter({
  value = 0,
  suffix = "",
  label,
  displayText,
}: StatCounterProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;
  const count = useCountUp(value, active && !displayText, reducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-primary-900 dark:text-neutral-50 md:text-5xl">
        <span aria-live="polite">
          {displayText ?? (
            <>
              {count}
              {suffix}
            </>
          )}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
