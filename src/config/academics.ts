export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category?: string;
};

export const academicProgramKeys = ["earlyYears", "primary", "middleSchool", "highSchool"] as const;

export type AcademicProgramKey = (typeof academicProgramKeys)[number];

export const programRoutes: Record<
  AcademicProgramKey,
  { href: string; prev?: AcademicProgramKey; next?: AcademicProgramKey }
> = {
  earlyYears: { href: "/academics/early-years", next: "primary" },
  primary: { href: "/academics/primary", prev: "earlyYears", next: "middleSchool" },
  middleSchool: { href: "/academics/middle-school", prev: "primary", next: "highSchool" },
  highSchool: { href: "/academics/high-school", prev: "middleSchool" },
};

export const galleryCategories = ["all", "campus", "classroom", "sports", "events"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const clubKeys = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "c10",
  "c11",
  "c12",
] as const;

export const sportKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"] as const;

export const cambridgeBenefitKeys = ["b1", "b2", "b3", "b4", "b5", "b6"] as const;

export const cambridgeFaqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

export const cambridgeStageKeys = ["ey", "igcse", "alevel"] as const;

export const stemCompetitionKeys = ["c1", "c2", "c3"] as const;

export const aiProgramKeys = ["p1", "p2", "p3", "p4"] as const;

export const languageKeys = ["en", "ar", "fr"] as const;
