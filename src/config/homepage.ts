import type { LucideIcon } from "lucide-react";
import { Globe, GraduationCap, Heart, RefreshCw } from "lucide-react";

export const homepageSectionIds = {
  pillars: "pillars",
  aisValues: "ais-values",
  journey: "journey",
  cambridge: "cambridge",
  galleryPreview: "gallery-preview",
  principal: "principal",
  stats: "stats",
  testimonials: "testimonials",
  cta: "cta",
} as const;

export const pillarIcons: LucideIcon[] = [GraduationCap, Globe, RefreshCw, Heart];

export const aisValueKeys = ["accountability", "innovation", "service"] as const;

export const ageBandHrefs = [
  "/academics/early-years",
  "/academics/primary",
  "/academics/middle-school",
  "/academics/high-school",
  "/academics/cambridge-pathway",
] as const;

export const statKeys = ["years", "nationalities", "students", "ratio"] as const;

export const testimonialKeys = ["t1", "t2", "t3"] as const;

export const trustLogoKeys = ["cambridge", "moe", "cis", "quality"] as const;

export const facilityKeys = [
  "library",
  "labs",
  "sports",
  "arts",
  "cafeteria",
  "pool",
  "playground",
  "auditorium",
] as const;

export const campusGalleryKeys = ["g1", "g2", "g3", "g4", "g5", "g6"] as const;

export const timelineKeys = ["2008", "2012", "2018", "2022", "2026"] as const;

export const valueKeys = ["accountability", "innovation", "service"] as const;

export const leaderKeys = [
  "head",
  "deputy",
  "primary",
  "secondary",
  "admissions",
  "wellbeing",
] as const;
