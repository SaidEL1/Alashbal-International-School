export type NavLink = {
  labelKey: string;
  href: string;
};

export type NavColumn = {
  items: NavLink[];
};

export type NavItem = {
  labelKey: string;
  href?: string;
  columns?: NavColumn[];
};

export type FooterColumn = {
  titleKey: string;
  links: NavLink[];
};

/** Top-level links outside mega menus */
export const topLevelLinks: NavLink[] = [
  { labelKey: "nav.news", href: "/news" },
  { labelKey: "nav.contact", href: "/contact" },
];

/** Four mega menu dropdowns */
export const megaMenuItems: NavItem[] = [
  {
    labelKey: "nav.about",
    columns: [
      {
        items: [
          { labelKey: "nav.ourStory", href: "/about" },
          { labelKey: "nav.missionVision", href: "/about/mission-vision" },
          { labelKey: "nav.campus", href: "/about/campus" },
        ],
      },
      {
        items: [
          { labelKey: "nav.leadership", href: "/about/leadership" },
          { labelKey: "nav.accreditations", href: "/about/accreditations" },
          { labelKey: "nav.virtualTour", href: "/about/virtual-tour" },
        ],
      },
    ],
  },
  {
    labelKey: "nav.academics",
    columns: [
      {
        items: [
          { labelKey: "nav.earlyYears", href: "/academics/early-years" },
          { labelKey: "nav.primary", href: "/academics/primary" },
        ],
      },
      {
        items: [
          { labelKey: "nav.middleSchool", href: "/academics/middle-school" },
          { labelKey: "nav.highSchool", href: "/academics/high-school" },
        ],
      },
      {
        items: [
          { labelKey: "nav.cambridgePathway", href: "/academics/cambridge-pathway" },
          { labelKey: "nav.stem", href: "/academics/stem" },
          { labelKey: "nav.aiRobotics", href: "/academics/ai-robotics" },
          { labelKey: "nav.languages", href: "/academics/languages" },
        ],
      },
    ],
  },
  {
    labelKey: "nav.admissions",
    columns: [
      {
        items: [
          { labelKey: "nav.howToApply", href: "/admissions/how-to-apply" },
          { labelKey: "nav.inquireNow", href: "/admissions/inquire" },
          { labelKey: "nav.bookTour", href: "/admissions/book-a-tour" },
          { labelKey: "nav.applyOnline", href: "/admissions/apply" },
        ],
      },
      {
        items: [
          { labelKey: "nav.tuitionFees", href: "/admissions/tuition-fees" },
          { labelKey: "nav.faqs", href: "/admissions/faqs" },
          { labelKey: "nav.ageGuide", href: "/admissions/age-guide" },
          { labelKey: "nav.relocating", href: "/admissions/relocating" },
        ],
      },
    ],
  },
  {
    labelKey: "nav.studentLife",
    columns: [
      {
        items: [
          { labelKey: "nav.clubs", href: "/student-life/clubs" },
          { labelKey: "nav.sports", href: "/student-life/sports" },
        ],
      },
      {
        items: [
          { labelKey: "nav.events", href: "/student-life/events" },
          { labelKey: "nav.gallery", href: "/student-life/gallery" },
        ],
      },
    ],
  },
];

export const utilityLinks: NavLink[] = [
  { labelKey: "utility.parentPortal", href: "/portal/parent" },
  { labelKey: "utility.careers", href: "/careers" },
  { labelKey: "utility.downloads", href: "/downloads" },
];

export const footerColumns: FooterColumn[] = [
  {
    titleKey: "footer.about",
    links: [
      { labelKey: "nav.ourStory", href: "/about" },
      { labelKey: "nav.leadership", href: "/about/leadership" },
      { labelKey: "nav.accreditations", href: "/about/accreditations" },
    ],
  },
  {
    titleKey: "footer.academics",
    links: [
      { labelKey: "nav.earlyYears", href: "/academics/early-years" },
      { labelKey: "nav.primary", href: "/academics/primary" },
      { labelKey: "nav.cambridgePathway", href: "/academics/cambridge-pathway" },
    ],
  },
  {
    titleKey: "footer.admissions",
    links: [
      { labelKey: "nav.howToApply", href: "/admissions/how-to-apply" },
      { labelKey: "nav.tuitionFees", href: "/admissions/tuition-fees" },
      { labelKey: "nav.bookTour", href: "/admissions/book-a-tour" },
    ],
  },
  {
    titleKey: "footer.connect",
    links: [
      { labelKey: "nav.contact", href: "/contact" },
      { labelKey: "nav.news", href: "/news" },
      { labelKey: "footer.privacy", href: "/privacy" },
      { labelKey: "footer.terms", href: "/terms" },
    ],
  },
];

export const mobileExtraLinks: NavLink[] = [
  { labelKey: "utility.careers", href: "/careers" },
  { labelKey: "utility.downloads", href: "/downloads" },
  { labelKey: "utility.parentPortal", href: "/portal/parent" },
];

function collectHrefs(items: NavItem[]): string[] {
  return items.flatMap((item) => {
    const hrefs: string[] = [];
    if (item.href) hrefs.push(item.href);
    item.columns?.forEach((column) => {
      column.items.forEach((link) => hrefs.push(link.href));
    });
    return hrefs;
  });
}

/** All routable shell paths (no 404 for mega menu navigation) */
export const shellPaths = new Set<string>([
  "/",
  ...collectHrefs(megaMenuItems),
  ...topLevelLinks.map((l) => l.href),
  ...utilityLinks.map((l) => l.href),
  ...mobileExtraLinks.map((l) => l.href),
  ...footerColumns.flatMap((c) => c.links.map((l) => l.href)),
  "/academics",
  "/admissions",
  "/student-life",
  "/faqs",
]);

export function isShellPath(path: string): boolean {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return shellPaths.has(normalized);
}

export function pathFromSlug(slug?: string[]): string {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}
