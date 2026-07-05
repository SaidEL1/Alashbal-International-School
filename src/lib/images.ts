/** Branded blur placeholders for next/image (tiny base64) */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

export const imagePaths = {
  logo: "/images/logo.jpeg",
  home: {
    hero: "/images/home/hero.svg",
    principal: "/images/home/principal.svg",
    cambridge: "/images/home/cambridge.svg",
  },
  about: {
    placeholder: "/images/about/placeholder.svg",
  },
  trust: {
    cambridge: "/images/trust/cambridge.svg",
    moe: "/images/trust/moe.svg",
    cis: "/images/trust/cis.svg",
    ib: "/images/trust/ib.svg",
  },
} as const;
