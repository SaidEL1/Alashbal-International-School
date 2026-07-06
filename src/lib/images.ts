/** Branded blur placeholders for next/image (tiny base64) */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

export const imagePaths = {
  brand: {
    logo: "/images/brand/logo-circle.jpg",
  },
  home: {
    hero: "/images/home/hero-campus.png",
    principal: "/images/home/principal-kath.png",
    cambridge: "/images/home/cambridge-logo.png",
    lifeAtAis: {
      g1: "/images/home/life-at-ais/g1.jpeg",
      g2: "/images/home/life-at-ais/g2.jpeg",
      g3: "/images/home/life-at-ais/g3.jpeg",
      g4: "/images/home/life-at-ais/g4.jpeg",
      g5: "/images/home/life-at-ais/g5.jpeg",
      g6: "/images/home/life-at-ais/g6.jpeg",
      g7: "/images/home/life-at-ais/g7.jpeg",
      g8: "/images/home/life-at-ais/g8.jpeg",
    },
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
