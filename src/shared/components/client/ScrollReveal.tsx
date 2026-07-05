"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps): React.JSX.Element {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
