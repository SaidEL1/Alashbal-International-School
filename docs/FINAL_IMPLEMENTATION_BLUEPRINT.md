# Alashbal International School

# FINAL IMPLEMENTATION BLUEPRINT (FIB)

| Field               | Value                                                                      |
| ------------------- | -------------------------------------------------------------------------- |
| **Document ID**     | AIS-FIB-2026-001                                                           |
| **Version**         | 1.0.0                                                                      |
| **Status**          | **DRAFT — AWAITING APPROVAL**                                              |
| **Parent Document** | [MASTER_PRODUCT_SPECIFICATION.md](./MASTER_PRODUCT_SPECIFICATION.md) (MPS) |
| **Date**            | July 5, 2026                                                               |
| **Rule**            | **NO CODE UNTIL MPS-0 + FIB-0 APPROVED**                                   |

---

## How to Use This Document

This blueprint is the **execution manual** for the engineering team. It answers:

- **What to build** — UI blueprint per page, component tree
- **How to build it** — coding standards, state strategy, folder rules
- **When to build it** — sprint plan with acceptance criteria
- **When it is ready to start** — Definition of Ready
- **When it is complete** — Definition of Done
- **What can go wrong** — risk mitigation checklist
- **How to work daily** — development workflow

If a question is not answered here or in the MPS, it is **out of scope for v1** — log it as a change request.

---

## Table of Contents

1. [UI Blueprint — Every Page](#1-ui-blueprint--every-page)
2. [Component Tree](#2-component-tree)
3. [State Management Strategy](#3-state-management-strategy)
4. [Coding Standards](#4-coding-standards)
5. [Sprint-by-Sprint Development Plan](#5-sprint-by-sprint-development-plan)
6. [Acceptance Criteria — Every Sprint](#6-acceptance-criteria--every-sprint)
7. [Definition of Ready](#7-definition-of-ready)
8. [Definition of Done](#8-definition-of-done)
9. [Risk Mitigation Checklist](#9-risk-mitigation-checklist)
10. [Daily Development Workflow](#10-daily-development-workflow)

---

# 1. UI Blueprint — Every Page

## 1.1 Blueprint Legend

| Symbol  | Meaning                                                  |
| ------- | -------------------------------------------------------- |
| `[SC]`  | React Server Component (default)                         |
| `[CC]`  | React Client Component (`"use client"`)                  |
| `§`     | Section vertical spacing: `space-24` (96px) unless noted |
| `BG`    | Background token                                         |
| `CTA-P` | Primary CTA: "Book a Campus Tour"                        |
| `CTA-S` | Secondary CTA: "Inquire Now"                             |
| `—`     | Divider or spacing only                                  |

**Layout tokens:** Container max `1400px`, padding `16/24/32px` (mobile/tablet/desktop), grid 12-column.

**Every public page includes (unless noted):**

1. Skip link `[CC]`
2. Utility bar (desktop) `[SC]`
3. Navbar `[CC]`
4. Breadcrumb (except Home) `[SC]`
5. Main content `[SC]` sections
6. Footer `[SC]`
7. WhatsApp FAB `[CC]` (public pages)
8. Cookie banner `[CC]` (first visit)

---

## 1.2 Global Shell (All Public Pages)

```
┌─────────────────────────────────────────────────────────────┐
│ UTILITY BAR [SC] — email | phone | Portal link | lang      │ 40px, BG neutral-50
├─────────────────────────────────────────────────────────────┤
│ NAVBAR [CC] — Logo | Mega Menu | Search | Lang | CTA-P     │ 72px, sticky
├─────────────────────────────────────────────────────────────┤
│ BREADCRUMB [SC] — Home > Section > Page                    │ 48px (if not home)
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      MAIN CONTENT                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER [SC] — 4 columns + bottom bar                       │ BG primary-900
├─────────────────────────────────────────────────────────────┤
│ WHATSAPP FAB [CC] — bottom-right, 56px                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 1.3 Page Blueprints — Public (MVP)

### P-01 — Homepage `/[locale]`

| #   | Section             | Component(s)                               | BG                  | Layout               | Sprint |
| --- | ------------------- | ------------------------------------------ | ------------------- | -------------------- | ------ |
| 1   | Hero                | `Hero` [CC] video desktop / image mobile   | primary-900 overlay | Full-bleed 100vh max | S2     |
| 2   | Trust Bar           | `TrustBar` [SC]                            | neutral-50          | 64px, logos centered | S2     |
| 3   | Value Pillars       | `SectionHeader` + 4× `FeatureCard` [SC]    | neutral-0           | 4-col → 2 → 1        | S2     |
| 4   | Learning Journey    | `SectionHeader` + 5× `AgeBandCard` [SC]    | neutral-50          | 5-col → 2 → 1        | S2     |
| 5   | Cambridge Highlight | `SplitSection` [SC] text + Cambridge badge | neutral-0           | 50/50 split          | S2     |
| 6   | STEM Spotlight      | `FeatureCard` dark [SC] + image            | primary-900         | 60/40 split          | S3     |
| 7   | Principal Message   | `VideoEmbed` [CC] + quote [SC]             | neutral-50          | 50/50 split          | S2     |
| 8   | Stats               | 4× `StatCounter` [CC]                      | neutral-0           | 4-col → 2×2          | S2     |
| 9   | Testimonials        | `TestimonialCarousel` [CC]                 | primary-900         | Full-width           | S2     |
| 10  | Latest News         | `SectionHeader` + 3× `NewsCard` [SC]       | neutral-0           | 3-col → 1            | S5     |
| 11  | Upcoming Events     | 2× `EventCard` [SC]                        | neutral-50          | 2-col → 1            | S5     |
| 12  | Gallery Preview     | `GalleryGrid` [CC] 4 images                | neutral-0           | 4-col → 2×2          | S3     |
| 13  | CTA Banner          | `CTABanner` [SC] CTA-P + CTA-S             | primary-800         | Centered             | S2     |
| 14  | Footer              | `Footer` [SC]                              | primary-900         | 4-col                | S1     |

**SEO:** `EducationalOrganization` + `WebSite` schema. H1 in Hero only.

---

### P-02 — Our Story `/[locale]/about`

| #   | Section            | Component(s)                                      | BG          | Layout   |
| --- | ------------------ | ------------------------------------------------- | ----------- | -------- |
| 1   | Page Hero          | `Hero` [SC] image, split, H1 "Our Story"          | neutral-50  | 50/50    |
| 2   | Heritage Narrative | `ProseContent` [SC] 2-col text + timeline sidebar | neutral-0   | 8+4 grid |
| 3   | Timeline           | `Timeline` [SC] vertical, school milestones       | neutral-0   | Sidebar  |
| 4   | Stats Row          | 3× `StatCounter` [CC]                             | neutral-50  | 3-col    |
| 5   | CTA Banner         | `CTABanner`                                       | primary-800 | Centered |

---

### P-03 — Mission & Vision `/[locale]/about/mission-vision`

| #   | Section     | Component(s)                               | BG          | Layout             |
| --- | ----------- | ------------------------------------------ | ----------- | ------------------ |
| 1   | Page Hero   | `Hero` [SC] minimal, H1                    | neutral-0   | Centered text      |
| 2   | Mission     | `FeatureCard` [SC] icon + heading + body   | neutral-50  | 50% width centered |
| 3   | Vision      | `FeatureCard` [SC]                         | neutral-50  | 50% width centered |
| 4   | Values Grid | 5× `FeatureCard` [SC] King's-style pillars | neutral-0   | 5-col → 2 → 1      |
| 5   | CTA Banner  | `CTABanner`                                | primary-800 | —                  |

---

### P-04 — Leadership `/[locale]/about/leadership`

| #   | Section         | Component(s)                                     | BG          | Layout          |
| --- | --------------- | ------------------------------------------------ | ----------- | --------------- |
| 1   | Page Hero       | `Hero` [SC] H1 "Leadership Team"                 | neutral-50  | Centered        |
| 2   | Head of School  | `TeamCard` [SC] large: photo, bio, video link    | neutral-0   | Horizontal card |
| 3   | Welcome Message | `ProseContent` [SC] condensed letter (200 words) | neutral-50  | Max-w-3xl       |
| 4   | SLT Grid        | 6× `TeamCard` [SC] photo + name + role           | neutral-0   | 3-col → 2 → 1   |
| 5   | CTA Banner      | `CTABanner` "Meet us on a tour"                  | primary-800 | —               |

---

### P-05 — Accreditations `/[locale]/about/accreditations`

| #   | Section              | Component(s)                             | BG          | Layout     |
| --- | -------------------- | ---------------------------------------- | ----------- | ---------- |
| 1   | Page Hero            | `Hero` [SC]                              | neutral-0   | Centered   |
| 2   | Trust Bar (expanded) | `TrustBar` [SC] all logos + descriptions | neutral-50  | Grid 4-col |
| 3   | Cambridge Detail     | `SplitSection` [SC] badge + explanation  | neutral-0   | 40/60      |
| 4   | MoE Qatar            | `FeatureCard` [SC]                       | neutral-50  | Full-width |
| 5   | Quality Statement    | `ProseContent` [SC]                      | neutral-0   | Max-w-3xl  |
| 6   | CTA Banner           | `CTABanner`                              | primary-800 | —          |

---

### P-06 — Campus & Facilities `/[locale]/about/campus`

| #   | Section          | Component(s)                                     | BG                  | Layout             |
| --- | ---------------- | ------------------------------------------------ | ------------------- | ------------------ |
| 1   | Page Hero        | `Hero` [SC] campus aerial image                  | primary-900 overlay | Full-bleed 60vh    |
| 2   | Overview         | `ProseContent` [SC]                              | neutral-0           | Max-w-3xl centered |
| 3   | Facilities Grid  | 8× `FeatureCard` [SC] image + name + desc        | neutral-50          | 4-col → 2 → 1      |
| 4   | Gallery Strip    | `GalleryGrid` [CC] 6 images                      | neutral-0           | 3-col              |
| 5   | Virtual Tour CTA | `CTABanner` [SC] "Take a Virtual Tour" (P1 link) | accent-800          | S7                 |
| 6   | Map Embed        | `MapEmbed` [CC] Google Maps                      | neutral-50          | 16:9               |
| 7   | CTA Banner       | `CTABanner` CTA-P                                | primary-800         | —                  |

---

### P-07 — Academics Hub `/[locale]/academics`

| #   | Section            | Component(s)                              | BG          | Layout        |
| --- | ------------------ | ----------------------------------------- | ----------- | ------------- |
| 1   | Page Hero          | `Hero` [SC] H1 + lead paragraph           | neutral-50  | Centered      |
| 2   | Philosophy         | `ProseContent` [SC]                       | neutral-0   | Max-w-3xl     |
| 3   | Age Bands          | 5× `AgeBandCard` [SC] linked              | neutral-50  | 5-col → 2 → 1 |
| 4   | Cambridge Overview | `SplitSection` [SC]                       | neutral-0   | 50/50         |
| 5   | Beyond Academics   | 3× `FeatureCard` STEM, Languages, Support | neutral-50  | 3-col         |
| 6   | CTA Banner         | `CTABanner`                               | primary-800 | —             |

---

### P-08 — Early Years `/[locale]/academics/early-years`

| #   | Section           | Component(s)                        | BG          | Layout   |
| --- | ----------------- | ----------------------------------- | ----------- | -------- |
| 1   | Page Hero         | `Hero` [SC] image, badge "Ages 3–5" | neutral-0   | Split    |
| 2   | Overview          | `ProseContent` [SC]                 | neutral-50  | 8-col    |
| 3   | Curriculum Points | 4× `FeatureCard` [SC]               | neutral-0   | 2×2 grid |
| 4   | Day in the Life   | `Timeline` [SC] horizontal schedule | neutral-50  | —        |
| 5   | Photo Gallery     | `GalleryGrid` [CC] 4 images         | neutral-0   | 2×2      |
| 6   | Related Links     | 2× `AgeBandCard` prev/next          | neutral-50  | 2-col    |
| 7   | CTA Banner        | `CTABanner` "Apply for Early Years" | primary-800 | —        |

_Pages P-09 through P-11 (Primary, Middle School, High School) follow P-08 pattern with age-specific content._

---

### P-09 — Primary `/[locale]/academics/primary` — Same structure as P-08, badge "Ages 5–11"

### P-10 — Middle School `/[locale]/academics/middle-school` — Badge "Ages 11–14"

### P-11 — High School `/[locale]/academics/high-school` — Badge "Ages 14–18"

---

### P-12 — Cambridge Pathway `/[locale]/academics/cambridge-pathway`

| #   | Section           | Component(s)                           | BG          | Layout     |
| --- | ----------------- | -------------------------------------- | ----------- | ---------- |
| 1   | Page Hero         | `Hero` [SC] + Cambridge logo           | accent-800  | Split      |
| 2   | What is Cambridge | `ProseContent` [SC]                    | neutral-0   | Max-w-3xl  |
| 3   | Stages Diagram    | `Timeline` [SC] EY → IGCSE → A-Level   | neutral-50  | Horizontal |
| 4   | Benefits Grid     | 6× `FeatureCard` [SC]                  | neutral-0   | 3-col      |
| 5   | Results/Outcomes  | 3× `StatCounter` [CC]                  | neutral-50  | 3-col      |
| 6   | FAQ Accordion     | 5× `Accordion` [CC] Cambridge-specific | neutral-0   | Max-w-3xl  |
| 7   | CTA Banner        | `CTABanner`                            | primary-800 | —          |

---

### P-13 — STEM `/[locale]/academics/stem`

| #   | Section          | Component(s)          | BG          | Layout     |
| --- | ---------------- | --------------------- | ----------- | ---------- |
| 1   | Page Hero        | `Hero` [SC] lab image | primary-900 | Full-bleed |
| 2   | Program Overview | `ProseContent` [SC]   | neutral-0   | —          |
| 3   | Labs & Equipment | `GalleryGrid` [CC]    | neutral-50  | 3-col      |
| 4   | Competitions     | 3× `FeatureCard` [SC] | neutral-0   | 3-col      |
| 5   | CTA Banner       | `CTABanner`           | primary-800 | —          |

---

### P-14 — AI & Robotics `/[locale]/academics/ai-robotics`

| #   | Section          | Component(s)               | BG          | Layout     |
| --- | ---------------- | -------------------------- | ----------- | ---------- |
| 1   | Page Hero        | `Hero` [SC] robotics image | primary-900 | Full-bleed |
| 2   | Innovation Story | `ProseContent` [SC]        | neutral-0   | —          |
| 3   | Programs         | 4× `FeatureCard` [SC]      | neutral-50  | 2×2        |
| 4   | Video Demo       | `VideoEmbed` [CC]          | neutral-0   | 16:9       |
| 5   | CTA Banner       | `CTABanner`                | primary-800 | —          |

---

### P-15 — Languages `/[locale]/academics/languages`

| #   | Section             | Component(s)                   | BG          | Layout   |
| --- | ------------------- | ------------------------------ | ----------- | -------- |
| 1   | Page Hero           | `Hero` [SC]                    | neutral-50  | Centered |
| 2   | Trilingual Approach | `ProseContent` [SC]            | neutral-0   | —        |
| 3   | Language Cards      | 3× `FeatureCard` EN/AR/FR [SC] | neutral-50  | 3-col    |
| 4   | Arabic & Islamic    | `SplitSection` [SC]            | neutral-0   | 50/50    |
| 5   | CTA Banner          | `CTABanner`                    | primary-800 | —        |

---

### P-16 — Admissions Hub `/[locale]/admissions`

| #   | Section          | Component(s)                                       | BG          | Layout        |
| --- | ---------------- | -------------------------------------------------- | ----------- | ------------- |
| 1   | Page Hero        | `Hero` [SC] H1 "Admissions" + reassurance          | accent-800  | Split + CTA-P |
| 2   | Quick Actions    | 3× `FeatureCard` [SC] linked: Inquire, Tour, Apply | neutral-0   | 3-col         |
| 3   | Process Timeline | `Timeline` [SC] 7 steps horizontal                 | neutral-50  | Scroll mobile |
| 4   | Testimonial      | `TestimonialCard` [SC] parent quote                | primary-900 | Full-width    |
| 5   | FAQ Preview      | 5× `Accordion` [CC] + "View all FAQs" link         | neutral-0   | Max-w-3xl     |
| 6   | Contact Card     | Phone + email + hours [SC]                         | neutral-50  | Centered      |
| 7   | CTA Banner       | `CTABanner` dual CTA                               | primary-800 | —             |

---

### P-17 — How to Apply `/[locale]/admissions/how-to-apply`

| #   | Section            | Component(s)                               | BG          | Layout        |
| --- | ------------------ | ------------------------------------------ | ----------- | ------------- |
| 1   | Page Hero          | `Hero` [SC] minimal                        | neutral-0   | —             |
| 2   | Step Timeline      | `Timeline` [SC] 7 steps vertical, detailed | neutral-50  | Max-w-3xl     |
| 3   | Required Documents | `ProseContent` [SC] checklist              | neutral-0   | —             |
| 4   | Download CTA       | `Button` link to prospectus PDF            | neutral-50  | —             |
| 5   | Sidebar (desktop)  | Sticky `ContactCard` + CTA-P [SC]          | —           | 4-col sidebar |
| 6   | CTA Banner         | `CTABanner` "Start Application"            | primary-800 | —             |

---

### P-18 — Tuition & Fees `/[locale]/admissions/tuition-fees`

| #   | Section           | Component(s)                                   | BG          | Layout                   |
| --- | ----------------- | ---------------------------------------------- | ----------- | ------------------------ |
| 1   | Page Hero         | `Hero` [SC]                                    | neutral-50  | Centered                 |
| 2   | Fee Table         | `PricingTable` [SC] year group × annual fee    | neutral-0   | Responsive table → cards |
| 3   | Additional Fees   | `Accordion` [CC] registration, transport, etc. | neutral-50  | —                        |
| 4   | Payment Info      | `ProseContent` [SC]                            | neutral-0   | —                        |
| 5   | Sibling Discounts | `FeatureCard` [SC]                             | neutral-50  | —                        |
| 6   | CTA Banner        | `CTABanner` "Inquire about fees"               | primary-800 | —                        |

**Fallback if fees unavailable:** Replace §2 with `Alert` info + "Contact admissions" CTA.

---

### P-19 — Inquire `/[locale]/admissions/inquire`

| #   | Section        | Component(s)                                  | BG         | Layout            |
| --- | -------------- | --------------------------------------------- | ---------- | ----------------- |
| 1   | Page Hero      | `Hero` [SC] H1 + "We respond within 24 hours" | neutral-50 | —                 |
| 2   | Form + Sidebar | `InquiryForm` [CC] + `ContactSidebar` [SC]    | neutral-0  | 8+4 grid          |
| 3   | Testimonial    | `TestimonialCard` [SC] inline                 | neutral-50 | Below form mobile |
| 4   | Trust Bar      | `TrustBar` [SC] compact                       | neutral-0  | —                 |

**Form fields:** parentName*, email*, phone, childAge, yearGroup (select), message, honeypot, locale (hidden).

---

### P-20 — Book a Tour `/[locale]/admissions/book-a-tour`

| #   | Section        | Component(s)                                   | BG         | Layout   |
| --- | -------------- | ---------------------------------------------- | ---------- | -------- |
| 1   | Page Hero      | `Hero` [SC] campus image                       | neutral-50 | —        |
| 2   | What to Expect | `ProseContent` [SC] 3 bullet points            | neutral-0  | —        |
| 3   | Form + Sidebar | `TourBookingForm` [CC] + `ContactSidebar` [SC] | neutral-50 | 8+4 grid |

**Form fields:** parentName*, email*, phone*, preferredDate* (date picker), preferredTime* (morning/afternoon), tourType (in-person/virtual), numChildren, locale.

---

### P-21 — Admissions FAQs `/[locale]/admissions/faqs`

| #   | Section               | Component(s)                                  | BG          | Layout    |
| --- | --------------------- | --------------------------------------------- | ----------- | --------- |
| 1   | Page Hero             | `Hero` [SC]                                   | neutral-0   | —         |
| 2   | Category Tabs         | `Tabs` [CC] General, Fees, Documents, Process | neutral-50  | —         |
| 3   | FAQ Accordion         | 30× `Accordion` [CC]                          | neutral-0   | Max-w-3xl |
| 4   | Still have questions? | `CTABanner` WhatsApp + Inquire                | primary-800 | —         |

**SEO:** `FAQPage` schema.

---

### P-22 — Age Guide `/[locale]/admissions/age-guide`

| #   | Section           | Component(s)                  | BG          | Layout     |
| --- | ----------------- | ----------------------------- | ----------- | ---------- |
| 1   | Page Hero         | `Hero` [SC]                   | neutral-50  | —          |
| 2   | Equivalency Table | `Table` [SC] DOB → Year Group | neutral-0   | Responsive |
| 3   | Notes             | `ProseContent` [SC]           | neutral-50  | —          |
| 4   | CTA Banner        | `CTABanner`                   | primary-800 | —          |

---

### P-23 — Student Life Hub `/[locale]/student-life`

| #   | Section        | Component(s)                                         | BG          | Layout          |
| --- | -------------- | ---------------------------------------------------- | ----------- | --------------- |
| 1   | Page Hero      | `Hero` [SC] activity image                           | neutral-0   | Full-bleed 50vh |
| 2   | Overview       | `ProseContent` [SC]                                  | neutral-50  | —               |
| 3   | Category Cards | 4× `FeatureCard` [SC] Clubs, Sports, Events, Gallery | neutral-0   | 2×2             |
| 4   | Photo Mosaic   | `GalleryGrid` [CC] 6 images                          | neutral-50  | 3-col           |
| 5   | CTA Banner     | `CTABanner`                                          | primary-800 | —               |

---

### P-24 — Clubs `/[locale]/student-life/clubs`

| #   | Section    | Component(s)                                   | BG          | Layout        |
| --- | ---------- | ---------------------------------------------- | ----------- | ------------- |
| 1   | Page Hero  | `Hero` [SC]                                    | neutral-50  | —             |
| 2   | Clubs Grid | 12× `FeatureCard` [SC] icon + name + age range | neutral-0   | 3-col → 2 → 1 |
| 3   | CTA Banner | `CTABanner`                                    | primary-800 | —             |

---

### P-25 — Sports `/[locale]/student-life/sports`

| #   | Section     | Component(s)             | BG          | Layout    |
| --- | ----------- | ------------------------ | ----------- | --------- |
| 1   | Page Hero   | `Hero` [SC] sports image | primary-900 | —         |
| 2   | Sports Grid | 8× `FeatureCard` [SC]    | neutral-0   | 4-col → 2 |
| 3   | Facilities  | `SplitSection` [SC]      | neutral-50  | —         |
| 4   | CTA Banner  | `CTABanner`              | primary-800 | —         |

---

### P-26 — Events `/[locale]/student-life/events`

| #   | Section     | Component(s)                   | BG         | Layout    |
| --- | ----------- | ------------------------------ | ---------- | --------- |
| 1   | Page Hero   | `Hero` [SC]                    | neutral-0  | —         |
| 2   | Upcoming    | `EventCard` grid [SC] from CMS | neutral-50 | 2-col → 1 |
| 3   | Past Events | `EventCard` grid [SC] archived | neutral-0  | 3-col     |
| 4   | Empty State | `EmptyState` [SC] if no events | —          | —         |

---

### P-27 — Gallery `/[locale]/student-life/gallery`

| #   | Section      | Component(s)                                       | BG          | Layout    |
| --- | ------------ | -------------------------------------------------- | ----------- | --------- |
| 1   | Page Hero    | `Hero` [SC] minimal                                | neutral-50  | —         |
| 2   | Filter Tabs  | `Tabs` [CC] All, Campus, Classroom, Sports, Events | neutral-0   | —         |
| 3   | Gallery Grid | `GalleryGrid` [CC] + `Lightbox` [CC]               | neutral-50  | 3-col → 2 |
| 4   | CTA Banner   | `CTABanner` "Book a tour to see more"              | primary-800 | —         |

---

### P-28 — News Listing `/[locale]/news`

| #   | Section          | Component(s)                          | BG         | Layout     |
| --- | ---------------- | ------------------------------------- | ---------- | ---------- |
| 1   | Page Hero        | `Hero` [SC] H1 "News & Updates"       | neutral-0  | —          |
| 2   | Featured Article | 1× `NewsCard` [SC] large horizontal   | neutral-50 | Full-width |
| 3   | News Grid        | `NewsGrid` [SC] paginated, 9 per page | neutral-0  | 3-col → 1  |
| 4   | Pagination       | `Pagination` [CC]                     | neutral-50 | Centered   |

---

### P-29 — News Article `/[locale]/news/[slug]`

| #   | Section          | Component(s)                           | BG          | Layout    |
| --- | ---------------- | -------------------------------------- | ----------- | --------- |
| 1   | Breadcrumb       | `Breadcrumb` [SC]                      | —           | —         |
| 2   | Article Header   | Title H1, date, category badge [SC]    | neutral-0   | Max-w-3xl |
| 3   | Featured Image   | `Image` [SC] 16:9                      | neutral-0   | —         |
| 4   | Article Body     | `ProseContent` [SC] rich text from CMS | neutral-0   | Max-w-3xl |
| 5   | Share + Tags     | `Badge` row [SC]                       | neutral-50  | —         |
| 6   | Related Articles | 3× `NewsCard` [SC]                     | neutral-0   | 3-col     |
| 7   | CTA Banner       | `CTABanner`                            | primary-800 | —         |

**SEO:** `NewsArticle` + `BreadcrumbList` schema.

---

### P-30 — Careers `/[locale]/careers`

| #   | Section             | Component(s)                    | BG         | Layout  |
| --- | ------------------- | ------------------------------- | ---------- | ------- |
| 1   | Page Hero           | `Hero` [SC] "Join Our Team"     | accent-800 | —       |
| 2   | Why Work at AIS     | 4× `FeatureCard` [SC]           | neutral-0  | 2×2     |
| 3   | Open Positions      | `CareerCard` list [SC] from CMS | neutral-50 | Stacked |
| 4   | Empty State         | `EmptyState` if no positions    | —          | —       |
| 5   | General Application | `Button` link to contact        | neutral-0  | —       |

---

### P-31 — Downloads `/[locale]/downloads`

| #   | Section       | Component(s)                                | BG          | Layout       |
| --- | ------------- | ------------------------------------------- | ----------- | ------------ |
| 1   | Page Hero     | `Hero` [SC]                                 | neutral-50  | —            |
| 2   | Category Tabs | `Tabs` [CC] Admissions, Academic, Policies  | neutral-0   | —            |
| 3   | Download List | `DownloadCard` [SC] icon + title + PDF link | neutral-50  | Stacked list |
| 4   | CTA Banner    | `CTABanner`                                 | primary-800 | —            |

---

### P-32 — FAQs `/[locale]/faqs`

| #   | Section            | Component(s)                               | BG         | Layout    |
| --- | ------------------ | ------------------------------------------ | ---------- | --------- |
| 1   | Page Hero          | `Hero` [SC]                                | neutral-0  | —         |
| 2   | Search             | `SearchInput` [CC] filter FAQs client-side | neutral-50 | —         |
| 3   | Category Accordion | 50× `Accordion` [CC] grouped by category   | neutral-0  | Max-w-3xl |

---

### P-33 — Contact `/[locale]/contact`

| #   | Section              | Component(s)                                     | BG         | Layout |
| --- | -------------------- | ------------------------------------------------ | ---------- | ------ |
| 1   | Page Hero            | `Hero` [SC]                                      | neutral-50 | —      |
| 2   | Contact Cards        | 3× `FeatureCard` [SC] Phone, Email, Address      | neutral-0  | 3-col  |
| 3   | Form + Map           | `ContactForm` [CC] 8-col + `MapEmbed` [CC] 4-col | neutral-50 | 8+4    |
| 4   | Office Hours         | `ProseContent` [SC]                              | neutral-0  | —      |
| 5   | Department Directory | `Table` [SC] Admissions, General, etc.           | neutral-50 | —      |

---

### P-34 — Privacy `/[locale]/privacy`

| #   | Section      | Component(s)                              | BG        |
| --- | ------------ | ----------------------------------------- | --------- |
| 1   | Prose        | `ProseContent` [SC] legal text, max-w-3xl | neutral-0 |
| 2   | Last updated | Date stamp [SC]                           | —         |

---

### P-35 — Terms `/[locale]/terms`

Same structure as P-34.

---

## 1.4 Page Blueprints — Phase 2 (Post-MVP)

### P-36 — Online Application `/[locale]/admissions/apply` (Sprint 6)

Multi-step form [CC]: Step 1 Parent Info → Step 2 Child Info → Step 3 Documents → Step 4 Review → Success.

### P-37 — Relocating to Qatar `/[locale]/admissions/relocating` (Sprint 8)

Guide layout: hero + 6 content sections + FAQ + CTA.

### P-38 — Virtual Tour `/[locale]/about/virtual-tour` (Sprint 7)

Full-screen video/360 embed + chapter navigation.

### P-39 — Parent Portal `/portal/parent` (Sprint 7)

Dashboard layout: sidebar + main. Sections: Overview, Calendar, Downloads, Announcements.

### P-40 — Admin Dashboard `/admin` (Sprint 6)

Admin layout: sidebar + header + content. Dashboard stats + recent inquiries.

---

## 1.5 Responsive Behavior Summary

| Breakpoint  | Grid        | Nav       | Hero               | Forms            | Tables            |
| ----------- | ----------- | --------- | ------------------ | ---------------- | ----------------- |
| 375px (xs)  | 1 col       | Drawer    | Image, stacked CTA | Full-width       | Card stack        |
| 768px (md)  | 2 col       | Drawer    | Split optional     | Full-width       | Horizontal scroll |
| 1024px (lg) | 3–4 col     | Mega menu | Video, split       | 8+4 with sidebar | Full table        |
| 1440px (xl) | Max 4–5 col | Mega menu | Full experience    | 8+4              | Full table        |

---

# 2. Component Tree

## 2.1 Full Tree

```
App
├── Providers [CC]
│   ├── ThemeProvider
│   ├── IntlProvider
│   ├── AuthProvider (S6+)
│   └── ToastProvider
│
├── Shell (Public)
│   ├── SkipLink [CC]
│   ├── UtilityBar [SC]
│   ├── Navbar [CC]
│   │   ├── Logo [SC]
│   │   ├── MegaMenu [CC]
│   │   │   ├── MegaMenuColumn [SC]
│   │   │   └── MegaMenuItem [SC]
│   │   ├── SearchTrigger [CC] (S8)
│   │   ├── LanguageSwitcher [CC]
│   │   ├── DarkModeToggle [CC]
│   │   └── Button (CTA-P) [CC]
│   ├── MobileDrawer [CC]
│   │   ├── DrawerNav [CC]
│   │   └── DrawerCTA [CC]
│   ├── Breadcrumb [SC]
│   ├── Main [SC]
│   │   └── {PageContent}
│   ├── Footer [SC]
│   │   ├── FooterColumn [SC]
│   │   ├── FooterSocial [SC]
│   │   └── FooterBottomBar [SC]
│   ├── WhatsAppFAB [CC]
│   └── CookieBanner [CC]
│
├── Sections (Shared)
│   ├── Hero [CC/SC]
│   ├── TrustBar [SC]
│   ├── SectionHeader [SC]
│   ├── CTABanner [SC]
│   ├── SplitSection [SC]
│   ├── ProseContent [SC]
│   └── ContactSidebar [SC]
│
├── Cards
│   ├── FeatureCard [SC]
│   ├── AgeBandCard [SC]
│   ├── NewsCard [SC]
│   ├── EventCard [SC]
│   ├── TeamCard [SC]
│   ├── TestimonialCard [SC]
│   ├── CareerCard [SC]
│   └── DownloadCard [SC]
│
├── Interactive [CC]
│   ├── TestimonialCarousel
│   ├── GalleryGrid + Lightbox
│   ├── Accordion
│   ├── Tabs
│   ├── Timeline
│   ├── StatCounter
│   ├── VideoEmbed
│   ├── MapEmbed
│   ├── Pagination
│   └── PricingTable
│
├── Forms [CC]
│   ├── InquiryForm
│   ├── TourBookingForm
│   ├── ContactForm
│   ├── ApplicationForm (S6)
│   │   ├── StepPersonal
│   │   ├── StepChild
│   │   ├── StepDocuments
│   │   └── StepReview
│   └── NewsletterForm (S7)
│
├── Feedback [CC]
│   ├── Toast
│   ├── Alert
│   ├── Badge
│   ├── EmptyState
│   ├── Loading / Spinner
│   └── Skeleton
│
├── Overlay [CC]
│   ├── Modal
│   ├── Drawer
│   └── SearchCommand (S8)
│
├── Portal (S7+)
│   ├── PortalLayout [SC]
│   ├── PortalSidebar [CC]
│   ├── PortalHeader [CC]
│   ├── DashboardCard [SC]
│   ├── CalendarWidget [CC]
│   └── DocumentList [SC]
│
├── Admin (S6+)
│   ├── AdminLayout [SC]
│   ├── AdminSidebar [CC]
│   ├── StatsGrid [SC]
│   ├── DataTable [CC]
│   ├── RichEditor [CC]
│   ├── MediaPicker [CC]
│   ├── LocaleTabs [CC]
│   └── PublishControls [CC]
│
└── UI Primitives (Shadcn)
    ├── Button
    ├── Input
    ├── Select
    ├── Textarea
    ├── Checkbox
    ├── Radio
    ├── Card
    ├── Table
    ├── Dialog
    ├── Sheet
    ├── DropdownMenu
    └── ... (40+ primitives)
```

## 2.2 Component Ownership Map

| Component         | Owner Module          | Type  | Sprint |
| ----------------- | --------------------- | ----- | ------ |
| `InquiryForm`     | `features/admissions` | CC    | S4     |
| `TourBookingForm` | `features/admissions` | CC    | S4     |
| `AgeBandCard`     | `features/academics`  | SC    | S2–S3  |
| `NewsCard`        | `features/news`       | SC    | S5     |
| `GalleryGrid`     | `features/gallery`    | CC    | S3     |
| `Navbar`          | `shared/components`   | CC    | S1     |
| `Hero`            | `shared/components`   | SC/CC | S2     |
| `DataTable`       | `features/cms`        | CC    | S6     |
| `PortalSidebar`   | `features/portal`     | CC    | S7     |

## 2.3 Server vs Client Decision Tree

```
Does it need useState, useEffect, or event handlers?
├── YES → Client Component ("use client")
│   ├── Is it a leaf component? → CC at leaf only
│   └── Is it a form/animation? → CC
└── NO → Server Component (default)
    ├── Fetches data? → SC with async
    ├── Static content? → SC
    └── SEO-critical? → SC
```

**Target ratio:** 65% SC / 35% CC

---

# 3. State Management Strategy

## 3.1 Philosophy

**No global state library in v1.** Use:

1. **Server state** — React Server Components + Prisma (primary)
2. **URL state** — `searchParams` for filters, pagination, tabs
3. **Form state** — React Hook Form (client forms)
4. **UI state** — React `useState`/local component state
5. **Auth state** — NextAuth session (JWT)
6. **Theme state** — `next-themes` (localStorage)
7. **Locale state** — next-intl + URL prefix
8. **Cache state** — Redis (server-side only)

## 3.2 State by Domain

| Domain              | State Type    | Storage                       | Owner          |
| ------------------- | ------------- | ----------------------------- | -------------- |
| Page content        | Server        | PostgreSQL → ISR cache        | RSC            |
| Navigation open     | UI            | `useState` in Navbar          | CC             |
| Dark mode           | UI            | localStorage via next-themes  | CC             |
| Locale              | URL           | `/en/`, `/ar/`, `/fr/` path   | Middleware     |
| Form inputs         | Form          | React Hook Form in-memory     | CC             |
| Form submission     | Server Action | POST → DB → email             | Server         |
| Auth session        | Auth          | HTTP-only JWT cookie          | NextAuth       |
| Toast notifications | UI            | React context (ToastProvider) | CC             |
| Search query        | URL           | `?q=` param (S8)              | CC             |
| Admin filters       | URL           | `searchParams`                | CC             |
| Carousel index      | UI            | `useState`                    | CC             |
| Lightbox open       | UI            | `useState`                    | CC             |
| Cookie consent      | UI            | localStorage                  | CC             |
| Rate limit counters | Server        | Redis                         | API middleware |

## 3.3 What NOT to Store in Client State

- User roles/permissions (always verify server-side)
- Fee data (server-rendered only)
- Application data (server-side after submit)
- API keys
- Full CMS content (use ISR)

## 3.4 Data Fetching Pattern

```
Page (SC, async)
  → service.function() — features/*/services
    → prisma.query() — core/db
      → return typed data
        → pass as props to SC children
          → pass serializable props to CC children only when needed
```

## 3.5 Form Submission Pattern

```
Form (CC, React Hook Form)
  → client validation (Zod resolver)
    → Server Action or POST /api/v1/*
      → server validation (Zod)
        → service.create()
          → prisma + email
            → return { success, data } or { success: false, error }
              → Toast (CC) on result
```

## 3.6 Future State (v2+)

| Need                    | Solution                   | Trigger             |
| ----------------------- | -------------------------- | ------------------- |
| Real-time notifications | WebSockets / SSE           | Portal v2           |
| Optimistic updates      | React Query / SWR          | Admin CMS v2        |
| Global search cache     | TanStack Query             | Algolia integration |
| Offline portal          | Service Worker + IndexedDB | PWA v2              |

---

# 4. Coding Standards

## 4.1 Language & Framework

| Rule       | Standard                                     |
| ---------- | -------------------------------------------- |
| Language   | TypeScript 5.x, `strict: true`               |
| Framework  | Next.js 15 App Router                        |
| React      | React 19 patterns, Server Components default |
| Styling    | Tailwind CSS 3.x, design tokens only         |
| Components | Shadcn UI primitives, extended in `ui/`      |
| Icons      | Lucide React only                            |
| Animation  | Framer Motion, `LazyMotion` + `domAnimation` |

## 4.2 File Naming

| Type       | Convention                      | Example                       |
| ---------- | ------------------------------- | ----------------------------- |
| Components | kebab-case.tsx                  | `age-band-card.tsx`           |
| Pages      | `page.tsx` in App Router        | `app/[locale]/about/page.tsx` |
| Layouts    | `layout.tsx`                    | `app/[locale]/layout.tsx`     |
| Services   | kebab-case.service.ts           | `admissions.service.ts`       |
| Schemas    | kebab-case.schema.ts            | `inquiry.schema.ts`           |
| Types      | kebab-case.types.ts or index.ts | `types/index.ts`              |
| Hooks      | use-kebab-case.ts               | `use-application-steps.ts`    |
| Tests      | *.test.ts / *.spec.ts           | `inquiry.schema.test.ts`      |
| Constants  | index.ts in constants/          | `constants/index.ts`          |

## 4.3 Component Structure

```typescript
// Order within every component file:
// 1. "use client" directive (if CC only)
// 2. Imports (react → next → external → internal → types)
// 3. Types/Interfaces
// 4. Component function
// 5. Sub-components (if small and private)

// Props: interface named {ComponentName}Props
// Export: named export (not default) for components
// Default export: pages only
```

## 4.4 Import Order

```typescript
import {} from /* react */ "react";
import {} from /* next */ "next/...";
import {} from /* external */ "framer-motion";
import { Button } from "@/ui/button";
import { FeatureCard } from "@/shared/components/feature-card";
import { cn } from "@/lib/cn";
import type { Program } from "@/features/academics/types";
```

## 4.5 Import Aliases

| Alias         | Path            |
| ------------- | --------------- |
| `@/`          | `src/`          |
| `@/ui/`       | `src/ui/`       |
| `@/shared/`   | `src/shared/`   |
| `@/features/` | `src/features/` |
| `@/core/`     | `src/core/`     |
| `@/lib/`      | `src/lib/`      |
| `@/config/`   | `src/config/`   |

## 4.6 TypeScript Rules

- No `any` — use `unknown` + type guards
- No `@ts-ignore` — fix the type error
- Explicit return types on services and API handlers
- Use `satisfies` for config objects
- Zod schemas are source of truth for API/form types — infer with `z.infer<>`

## 4.7 CSS / Tailwind Rules

- Use design tokens: `bg-primary-700` not `bg-[#8B1E35]`
- Use `cn()` for conditional classes
- No inline `style={{}}` except dynamic values (e.g., animation delay)
- Responsive: mobile-first (`md:`, `lg:`, `xl:`)
- RTL: use logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`)
- Dark mode: `dark:` variant on all colored elements

## 4.8 Accessibility Rules

- Every interactive element keyboard-accessible
- Every image has `alt` (enforced in CMS)
- Every form field has `<label>`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-primary-700`
- No `onClick` on `<div>` — use `<button>` or `<a>`
- Color contrast verified per MPS §3

## 4.9 Git Commit Messages

Conventional Commits — see §16 in MPS. Format:

```
type(scope): description

[optional body]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

## 4.10 PR Requirements

- Title: conventional commit format
- Description: what, why, screenshots (UI changes), test plan
- Linked issue/ticket ID
- CI green before review
- 1 approval required
- Squash merge to `develop`

## 4.11 Prohibited Patterns

| ❌ Prohibited                                | ✅ Alternative                |
| -------------------------------------------- | ----------------------------- |
| `default export` for components              | Named exports                 |
| `getServerSideProps`                         | App Router async SC           |
| CSS modules                                  | Tailwind                      |
| Inline SQL                                   | Prisma                        |
| `dangerouslySetInnerHTML` without sanitize   | DOMPurify                     |
| Client-side only data fetching for SEO pages | Server Components             |
| Cross-feature imports                        | Shared or core layer          |
| Hardcoded strings in components              | next-intl `useTranslations()` |
| `console.log` in production                  | Sentry                        |
| Secrets in code                              | Vercel env vars               |

---

# 5. Sprint-by-Sprint Development Plan

**Duration:** 10 sprints × 2 weeks = 20 weeks  
**Team:** Dev 1 (Tech Lead), Dev 2, Designer (S0–S4), PO, QA (S4+), Translator (S5, S8)  
**Velocity:** 18–25 story points/sprint  
**Reference:** MPS §17, Appendix H (Doc 14)

## 5.1 Sprint Overview

| Sprint  | Weeks | Theme                  | Pages/Features                   | Gate        |
| ------- | ----- | ---------------------- | -------------------------------- | ----------- |
| **S0**  | 1     | Foundation             | Repo, CI/CD, tokens, Figma       | G7 prep     |
| **S1**  | 2–3   | Shell                  | Global layout, nav, i18n routing | —           |
| **S2**  | 4–5   | Home + About           | P-01, P-02–P-06                  | Figma G2    |
| **S3**  | 6–7   | Academics + Life       | P-07–P-15, P-23–P-27             | —           |
| **S4**  | 8–9   | Admissions + Contact   | P-16–P-22, P-33–P-35, P-30–P-32  | —           |
| **S5**  | 10–11 | CMS + Launch           | P-28–P-29, AR, SEO, redirects    | **G8 MVP**  |
| **S6**  | 12–13 | Admin + Apply          | P-36, P-40, admin CMS            | —           |
| **S7**  | 14–15 | Portal + AI            | P-37–P-39, AI chat, virtual tour | —           |
| **S8**  | 16–17 | FR + Search            | P-37, search, social             | —           |
| **S9**  | 18–19 | Student/Teacher portal | P-39 extensions                  | —           |
| **S10** | 20–21 | Polish + integrations  | OpenApply eval, perf, security   | **G9 Full** |

---

## 5.2 Sprint 0 — Foundation (Week 1)

### Tasks

| ID    | Task                                                | Owner    | Points | Output             |
| ----- | --------------------------------------------------- | -------- | ------ | ------------------ |
| S0-01 | Init Next.js 15 + TS + Tailwind + App Router        | Dev 1    | 3      | `src/` scaffold    |
| S0-02 | ESLint + Prettier + Husky pre-commit                | Dev 1    | 2      | `.eslintrc`, hooks |
| S0-03 | GitHub repo + branch protection (`main`, `develop`) | Dev 1    | 1      | Repo live          |
| S0-04 | GitHub Actions: lint + typecheck + build            | Dev 1    | 3      | CI green           |
| S0-05 | Vercel project: staging + production envs           | Dev 1    | 2      | Deploy URLs        |
| S0-06 | Neon PostgreSQL staging + production                | Dev 1    | 2      | DB URLs in env     |
| S0-07 | Prisma init: `users`, `settings` tables             | Dev 2    | 3      | First migration    |
| S0-08 | Design tokens → `tailwind.config.ts` + `tokens.css` | Designer | 3      | MPS §3 tokens      |
| S0-09 | Figma: Foundations + Components + Homepage frame    | Designer | 5      | Figma file         |
| S0-10 | Cloudinary account + signed upload preset           | Dev 2    | 1      | Env vars           |
| S0-11 | Sentry + Vercel Analytics setup                     | Dev 2    | 1      | Monitoring live    |
| S0-12 | `.env.example` with all variable names              | Dev 1    | 1      | Documented envs    |

**Total: 27 points**

### Dependencies

- Vercel account access
- GitHub org/repo created
- Cloudinary account
- Neon account

---

## 5.3 Sprint 1 — Shell & Navigation (Weeks 2–3)

| ID    | Task                                                  | Owner | Points |
| ----- | ----------------------------------------------------- | ----- | ------ |
| S1-01 | `[locale]` App Router + next-intl config              | Dev 1 | 5      |
| S1-02 | RTL layout for Arabic (`dir`, logical CSS)            | Dev 1 | 3      |
| S1-03 | `Navbar` + `UtilityBar` desktop                       | Dev 2 | 4      |
| S1-04 | `MegaMenu` (4 dropdowns)                              | Dev 2 | 4      |
| S1-05 | `MobileDrawer` + hamburger                            | Dev 2 | 3      |
| S1-06 | `Footer` 4-column                                     | Dev 2 | 2      |
| S1-07 | `LanguageSwitcher` EN/AR                              | Dev 1 | 2      |
| S1-08 | `DarkModeToggle` + ThemeProvider                      | Dev 1 | 2      |
| S1-09 | `SkipLink` + landmark regions                         | Dev 1 | 1      |
| S1-10 | `Breadcrumb` component                                | Dev 2 | 1      |
| S1-11 | Shadcn UI: button, input, card, select                | Dev 2 | 2      |
| S1-12 | `CookieBanner`                                        | Dev 1 | 2      |
| S1-13 | `not-found.tsx` + `error.tsx` branded                 | Dev 2 | 1      |
| S1-14 | Navigation data in `config/navigation.ts`             | Dev 1 | 1      |
| S1-15 | i18n message files: `en.json`, `ar.json` (nav/footer) | Dev 1 | 2      |

**Total: 35 points**

**Milestone:** Empty shell navigable in EN + AR with RTL.

---

## 5.4 Sprint 2 — Homepage & About (Weeks 4–5)

| ID    | Task                                           | Owner    | Points |
| ----- | ---------------------------------------------- | -------- | ------ |
| S2-01 | `Hero` component (video + image fallback)      | Dev 1    | 5      |
| S2-02 | `TrustBar`                                     | Dev 1    | 2      |
| S2-03 | `SectionHeader` + `FeatureCard`                | Dev 2    | 3      |
| S2-04 | Homepage §3–5: pillars, age bands, Cambridge   | Dev 2    | 5      |
| S2-05 | Homepage §7–9: principal, stats, testimonials  | Dev 1    | 5      |
| S2-06 | `CTABanner` + Homepage §13                     | Dev 1    | 2      |
| S2-07 | `TestimonialCarousel` [CC]                     | Dev 2    | 4      |
| S2-08 | `StatCounter` [CC]                             | Dev 1    | 2      |
| S2-09 | Framer Motion scroll animations                | Dev 1    | 3      |
| S2-10 | P-02 Our Story page                            | Dev 2    | 2      |
| S2-11 | P-03 Mission & Vision page                     | Dev 2    | 2      |
| S2-12 | P-04 Leadership page                           | Dev 1    | 3      |
| S2-13 | P-05 Accreditations page                       | Dev 2    | 2      |
| S2-14 | P-06 Campus & Facilities page                  | Dev 1    | 3      |
| S2-15 | Homepage responsive QA (3 breakpoints)         | Designer | 2      |
| S2-16 | Placeholder images (branded) until photography | Designer | 1      |

**Total: 46 points** _(carry over 8 points if needed)_

**Dependency:** Figma homepage approved (G2). Photography or placeholders.

---

## 5.5 Sprint 3 — Academics & Student Life (Weeks 6–7)

| ID    | Task                               | Owner      | Points |
| ----- | ---------------------------------- | ---------- | ------ |
| S3-01 | `AgeBandCard` + P-07 Academics Hub | Dev 1      | 3      |
| S3-02 | P-08 Early Years                   | Dev 2      | 2      |
| S3-03 | P-09 Primary                       | Dev 2      | 2      |
| S3-04 | P-10 Middle School                 | Dev 1      | 2      |
| S3-05 | P-11 High School                   | Dev 1      | 2      |
| S3-06 | P-12 Cambridge Pathway             | Dev 2      | 3      |
| S3-07 | P-13 STEM + P-14 AI & Robotics     | Dev 1      | 4      |
| S3-08 | P-15 Languages                     | Dev 2      | 2      |
| S3-09 | Homepage §6 STEM spotlight         | Dev 1      | 2      |
| S3-10 | `GalleryGrid` + `Lightbox`         | Dev 2      | 5      |
| S3-11 | P-23 Student Life Hub              | Dev 1      | 2      |
| S3-12 | P-24 Clubs + P-25 Sports           | Dev 2      | 3      |
| S3-13 | P-27 Gallery page                  | Dev 1      | 2      |
| S3-14 | `WhatsAppFAB`                      | Dev 2      | 1      |
| S3-15 | Academic content EN (all pages)    | PO/Content | 3      |

**Total: 38 points**

---

## 5.6 Sprint 4 — Admissions & Contact (Weeks 8–9)

| ID    | Task                                      | Owner | Points |
| ----- | ----------------------------------------- | ----- | ------ |
| S4-01 | `Timeline` component                      | Dev 1 | 3      |
| S4-02 | P-16 Admissions Hub                       | Dev 2 | 3      |
| S4-03 | P-17 How to Apply                         | Dev 1 | 2      |
| S4-04 | P-18 Tuition & Fees (+ fallback)          | Dev 2 | 3      |
| S4-05 | `InquiryForm` + API + Resend email        | Dev 2 | 5      |
| S4-06 | `TourBookingForm` + API + email           | Dev 1 | 5      |
| S4-07 | P-19 Inquire page                         | Dev 2 | 1      |
| S4-08 | P-20 Book a Tour page                     | Dev 1 | 1      |
| S4-09 | P-21 Admissions FAQs (30 Qs)              | Dev 2 | 3      |
| S4-10 | P-22 Age Guide + table                    | Dev 1 | 2      |
| S4-11 | `ContactForm` + P-33 Contact              | Dev 2 | 4      |
| S4-12 | `MapEmbed` Google Maps                    | Dev 1 | 2      |
| S4-13 | P-30 Careers + P-31 Downloads + P-32 FAQs | Dev 2 | 4      |
| S4-14 | P-34 Privacy + P-35 Terms                 | Dev 1 | 2      |
| S4-15 | Rate limiting on form APIs (Redis)        | Dev 1 | 2      |
| S4-16 | reCAPTCHA v3 on forms                     | Dev 2 | 2      |
| S4-17 | E2E tests: inquiry + tour flows           | QA    | 3      |

**Total: 47 points**

**Dependency:** Fee data from school (or fallback). FAQ content from admissions.

---

## 5.7 Sprint 5 — CMS, i18n, SEO & Launch (Weeks 10–11)

| ID    | Task                                                  | Owner              | Points |
| ----- | ----------------------------------------------------- | ------------------ | ------ |
| S5-01 | Prisma: news, events, gallery, downloads, faqs tables | Dev 1              | 3      |
| S5-02 | `NewsCard` + P-28 News listing                        | Dev 2              | 3      |
| S5-03 | P-29 News article page                                | Dev 1              | 2      |
| S5-04 | P-26 Events page (CMS-driven)                         | Dev 2              | 3      |
| S5-05 | Homepage §10–11 news + events (live CMS)              | Dev 1              | 2      |
| S5-06 | Arabic translations: all public pages                 | Translator + Dev 1 | 8      |
| S5-07 | RTL QA all AR pages                                   | QA                 | 3      |
| S5-08 | SEO: `generateMetadata` all routes                    | Dev 2              | 3      |
| S5-09 | JSON-LD schema all page types                         | Dev 2              | 3      |
| S5-10 | `sitemap.ts` + `robots.ts`                            | Dev 1              | 2      |
| S5-11 | 301 redirects from Wix (`next.config`)                | Dev 1              | 2      |
| S5-12 | Lighthouse optimization pass (all key pages)          | Dev 1              | 3      |
| S5-13 | axe-core CI integration                               | Dev 2              | 2      |
| S5-14 | Cross-browser QA (Chrome, Safari, Firefox)            | QA                 | 3      |
| S5-15 | Content population (all pages EN)                     | Content Editor     | 5      |
| S5-16 | DNS cutover plan + execution                          | Dev 1              | 2      |
| S5-17 | GA4 + GSC setup                                       | Dev 2              | 2      |
| S5-18 | Smoke test production                                 | QA + PO            | 2      |

**Total: 53 points** _(highest sprint — consider 2-week buffer)_

### 🚀 MVP LAUNCH — Gate G8

---

## 5.8 Sprint 6 — Admin & Application (Weeks 12–13)

| ID    | Task                                | Owner | Points |
| ----- | ----------------------------------- | ----- | ------ |
| S6-01 | NextAuth v5 setup + roles           | Dev 1 | 5      |
| S6-02 | `AdminLayout` + sidebar             | Dev 2 | 3      |
| S6-03 | Admin dashboard stats               | Dev 1 | 3      |
| S6-04 | Admin: inquiry management           | Dev 2 | 3      |
| S6-05 | Admin: tour management              | Dev 1 | 3      |
| S6-06 | Admin: news CRUD + RichEditor       | Dev 2 | 5      |
| S6-07 | Admin: events CRUD                  | Dev 1 | 3      |
| S6-08 | Admin: gallery + downloads CRUD     | Dev 2 | 3      |
| S6-09 | `ApplicationForm` multi-step (P-36) | Dev 1 | 8      |
| S6-10 | Email automation templates          | Dev 2 | 3      |
| S6-11 | GA4 conversion events               | Dev 1 | 2      |

**Total: 41 points**

---

## 5.9 Sprint 7 — Portal, AI & Virtual Tour (Weeks 14–15)

| ID    | Task                                | Owner | Points |
| ----- | ----------------------------------- | ----- | ------ |
| S7-01 | Parent portal auth + layout (P-39)  | Dev 1 | 5      |
| S7-02 | Portal: calendar widget             | Dev 2 | 4      |
| S7-03 | Portal: downloads list              | Dev 1 | 3      |
| S7-04 | Portal: announcements feed          | Dev 2 | 3      |
| S7-05 | AI chat widget + `/api/v1/chat`     | Dev 1 | 5      |
| S7-06 | AI knowledge base (admissions FAQs) | Dev 2 | 3      |
| S7-07 | P-38 Virtual Tour page              | Dev 1 | 4      |
| S7-08 | `NewsletterForm` + API              | Dev 2 | 2      |
| S7-09 | Testimonial video embeds            | Dev 1 | 2      |

**Total: 31 points**

---

## 5.10 Sprint 8 — French, Search & Extended Content (Weeks 16–17)

| ID    | Task                                      | Owner              | Points |
| ----- | ----------------------------------------- | ------------------ | ------ |
| S8-01 | French i18n: key pages (60%)              | Translator + Dev 1 | 8      |
| S8-02 | `SearchCommand` ⌘K + `/api/v1/search`     | Dev 2              | 5      |
| S8-03 | P-37 Relocating to Qatar guide            | Dev 1              | 3      |
| S8-04 | `TeamCard` with roles (leadership update) | Dev 2              | 2      |
| S8-05 | Open day registration + countdown         | Dev 1              | 4      |
| S8-06 | Social media feed (Instagram)             | Dev 2              | 3      |
| S8-07 | Microsoft Clarity integration             | Dev 1              | 1      |
| S8-08 | Interactive campus map enhancement        | Dev 2              | 3      |

**Total: 29 points**

---

## 5.11 Sprint 9 — Student & Teacher Portals (Weeks 18–19)

| ID    | Task                              | Owner | Points |
| ----- | --------------------------------- | ----- | ------ |
| S9-01 | Student portal layout + calendar  | Dev 1 | 5      |
| S9-02 | Student portal: announcements     | Dev 2 | 3      |
| S9-03 | Teacher portal layout + resources | Dev 1 | 5      |
| S9-04 | Teacher portal: calendar          | Dev 2 | 3      |
| S9-05 | PWA service worker shell          | Dev 1 | 4      |
| S9-06 | Push notification setup           | Dev 2 | 3      |
| S9-07 | Portal E2E tests                  | QA    | 3      |

**Total: 26 points**

---

## 5.12 Sprint 10 — Integrations & Polish (Weeks 20–21)

| ID     | Task                                       | Owner            | Points |
| ------ | ------------------------------------------ | ---------------- | ------ |
| S10-01 | OpenApply integration evaluation + adapter | Dev 1            | 5      |
| S10-02 | Blog categories + tags                     | Dev 2            | 3      |
| S10-03 | Performance fine-tuning (Lighthouse 95+)   | Dev 1            | 3      |
| S10-04 | Security penetration test + fixes          | External + Dev 1 | 5      |
| S10-05 | Visual regression setup (Chromatic)        | Dev 2            | 3      |
| S10-06 | Staff training videos (admin CMS)          | Dev 2            | 3      |
| S10-07 | Final QA full regression                   | QA               | 5      |
| S10-08 | CHANGELOG + release tag v2.0.0             | Dev 1            | 1      |
| S10-09 | Documentation handoff to school IT         | Dev 1            | 2      |

**Total: 30 points**

### 🚀 FULL PLATFORM LAUNCH — Gate G9

---

# 6. Acceptance Criteria — Every Sprint

## 6.1 Sprint 0 — Foundation

| #        | Criterion                                         | Verification            |
| -------- | ------------------------------------------------- | ----------------------- |
| AC-S0-01 | `npm run build` succeeds with zero errors         | CI log                  |
| AC-S0-02 | ESLint + Prettier pass on empty project           | CI log                  |
| AC-S0-03 | Vercel staging deploy accessible via HTTPS        | URL check               |
| AC-S0-04 | Prisma migration runs on staging DB               | `prisma migrate deploy` |
| AC-S0-05 | Design tokens match MPS §3 (spot check 10 tokens) | Designer review         |
| AC-S0-06 | Figma file has Foundations + Homepage frame       | Designer demo           |
| AC-S0-07 | `.env.example` lists all 15+ env vars             | File review             |
| AC-S0-08 | Sentry captures test error on staging             | Sentry dashboard        |

## 6.2 Sprint 1 — Shell

| #        | Criterion                                              | Verification      |
| -------- | ------------------------------------------------------ | ----------------- |
| AC-S1-01 | Navigate all mega menu links (no 404)                  | Manual test       |
| AC-S1-02 | Switch EN → AR: layout mirrors RTL                     | Visual + manual   |
| AC-S1-03 | Mobile drawer opens/closes with Escape                 | Keyboard test     |
| AC-S1-04 | Dark mode toggles and persists on reload               | Manual test       |
| AC-S1-05 | Skip link is first focusable element                   | Tab test          |
| AC-S1-06 | axe-core: 0 critical on shell pages                    | CI                |
| AC-S1-07 | Cookie banner shows on first visit, hides after accept | Manual test       |
| AC-S1-08 | 404 page renders branded content                       | Navigate to /fake |

## 6.3 Sprint 2 — Homepage & About

| #        | Criterion                                          | Verification    |
| -------- | -------------------------------------------------- | --------------- |
| AC-S2-01 | Homepage matches Figma (±4px spacing tolerance)    | Designer review |
| AC-S2-02 | Hero LCP < 2.5s on staging (mobile)                | Lighthouse      |
| AC-S2-03 | All 5 About pages render with content              | Page check      |
| AC-S2-04 | Testimonial carousel: keyboard + pause             | A11y test       |
| AC-S2-05 | Scroll animations respect `prefers-reduced-motion` | Manual test     |
| AC-S2-06 | Responsive: 375px, 768px, 1440px — no overflow     | Device test     |
| AC-S2-07 | All images have alt text                           | HTML inspect    |
| AC-S2-08 | CTAs link to correct routes                        | Click test      |

## 6.4 Sprint 3 — Academics & Student Life

| #        | Criterion                                        | Verification |
| -------- | ------------------------------------------------ | ------------ |
| AC-S3-01 | 9 academic pages live with EN content            | Page count   |
| AC-S3-02 | 4 student life pages live                        | Page count   |
| AC-S3-03 | Gallery lightbox: open, navigate, close (Escape) | Manual test  |
| AC-S3-04 | Age band cards link to correct program pages     | Click test   |
| AC-S3-05 | WhatsApp FAB opens wa.me with correct number     | Click test   |
| AC-S3-06 | Lighthouse Performance ≥ 85 on academics pages   | CI           |

## 6.5 Sprint 4 — Admissions & Contact

| #        | Criterion                                      | Verification      |
| -------- | ---------------------------------------------- | ----------------- |
| AC-S4-01 | Inquiry form submits → DB record created       | DB check          |
| AC-S4-02 | Inquiry form submits → confirmation email sent | Email check       |
| AC-S4-03 | Tour form submits → DB + email                 | DB + email        |
| AC-S4-04 | Form validation: all required fields enforced  | Submit empty form |
| AC-S4-05 | Rate limit: 11th request in 1 min returns 429  | API test          |
| AC-S4-06 | Admissions FAQ: 30+ questions with accordion   | Count             |
| AC-S4-07 | Contact page map renders                       | Visual check      |
| AC-S4-08 | E2E Playwright: inquiry flow passes            | CI                |
| AC-S4-09 | Privacy + Terms pages accessible from footer   | Link test         |

## 6.6 Sprint 5 — CMS, i18n, SEO & Launch

| #        | Criterion                                                 | Verification  |
| -------- | --------------------------------------------------------- | ------------- |
| AC-S5-01 | News article publishable via seed/CMS → appears on /news  | Publish test  |
| AC-S5-02 | Arabic site: 80%+ public pages have AR content            | Page audit    |
| AC-S5-03 | AR pages: RTL layout correct (no broken chevrons/margins) | Visual QA     |
| AC-S5-04 | Lighthouse Performance ≥ 90 on homepage                   | CI            |
| AC-S5-05 | Lighthouse Accessibility ≥ 95 on homepage                 | CI            |
| AC-S5-06 | Lighthouse SEO ≥ 95 on homepage                           | CI            |
| AC-S5-07 | JSON-LD validates (Rich Results Test)                     | Google tool   |
| AC-S5-08 | Sitemap accessible at /sitemap.xml                        | HTTP 200      |
| AC-S5-09 | 301 redirects from old Wix URLs work                      | Redirect test |
| AC-S5-10 | GA4 receiving page_view events                            | GA4 realtime  |
| AC-S5-11 | GSC verified and sitemap submitted                        | GSC dashboard |
| AC-S5-12 | Production smoke test: all P-01–P-35 load                 | Checklist     |
| AC-S5-13 | PO sign-off on staging                                    | Sign-off doc  |
| AC-S5-14 | Zero P0/P1 bugs open                                      | Bug tracker   |

## 6.7 Sprint 6 — Admin & Application

| #        | Criterion                                          | Verification |
| -------- | -------------------------------------------------- | ------------ |
| AC-S6-01 | Admin login works (credentials)                    | Login test   |
| AC-S6-02 | Non-admin cannot access /admin                     | 403 test     |
| AC-S6-03 | News CRUD: create, edit, publish, appears on site  | Full cycle   |
| AC-S6-04 | Admin sees inquiry list with status filter         | UI check     |
| AC-S6-05 | Application form: 4 steps, document upload, submit | E2E test     |
| AC-S6-06 | Email templates render correctly (3 clients)       | Email test   |

## 6.8 Sprint 7 — Portal, AI & Virtual Tour

| #        | Criterion                                      | Verification |
| -------- | ---------------------------------------------- | ------------ |
| AC-S7-01 | Parent login → dashboard renders               | Login test   |
| AC-S7-02 | Parent sees calendar events                    | Data check   |
| AC-S7-03 | AI chat responds to "What are the fees?" in EN | Chat test    |
| AC-S7-04 | AI chat responds in AR when locale=ar          | Chat test    |
| AC-S7-05 | Virtual tour page loads video/360              | Page test    |
| AC-S7-06 | Newsletter subscribe → DB + welcome email      | Full cycle   |

## 6.9 Sprint 8 — French, Search & Content

| #        | Criterion                                      | Verification      |
| -------- | ---------------------------------------------- | ----------------- |
| AC-S8-01 | FR homepage + admissions + about render        | Page check        |
| AC-S8-02 | ⌘K search returns results for "cambridge"      | Search test       |
| AC-S8-03 | Relocating guide page complete with 6 sections | Content review    |
| AC-S8-04 | Clarity recording sessions on staging          | Clarity dashboard |

## 6.10 Sprint 9 — Student & Teacher Portals

| #        | Criterion                                     | Verification   |
| -------- | --------------------------------------------- | -------------- |
| AC-S9-01 | Student login → sees calendar + announcements | Login test     |
| AC-S9-02 | Teacher login → sees resources                | Login test     |
| AC-S9-03 | PWA installable on Chrome mobile              | Lighthouse PWA |
| AC-S9-04 | Portal E2E tests pass                         | CI             |

## 6.11 Sprint 10 — Polish & Launch

| #         | Criterion                               | Verification    |
| --------- | --------------------------------------- | --------------- |
| AC-S10-01 | Lighthouse Performance ≥ 95 on homepage | CI              |
| AC-S10-02 | Penetration test: 0 critical findings   | Security report |
| AC-S10-03 | Full regression: 0 P0/P1 bugs           | Bug tracker     |
| AC-S10-04 | Staff training completed (4 sessions)   | Attendance      |
| AC-S10-05 | v2.0.0 tagged and deployed              | Git tag         |
| AC-S10-06 | PO + Leadership sign-off (G9)           | Sign-off doc    |

---

# 7. Definition of Ready (DoR)

A task/story is **Ready** for development when ALL criteria are met:

| #      | Criterion                                                      | Owner          |
| ------ | -------------------------------------------------------------- | -------------- |
| DoR-01 | UI blueprint exists in this document (§1) for the page/feature | PM             |
| DoR-02 | Figma design approved for the component/page (if UI)           | Designer       |
| DoR-03 | Content (EN copy) available or approved placeholder strategy   | Content Editor |
| DoR-04 | API contract defined in MPS §10 (if backend)                   | Tech Lead      |
| DoR-05 | Database schema migrated on staging (if data)                  | Dev 1          |
| DoR-06 | Dependencies resolved (photography, fees, translations)        | PO             |
| DoR-07 | Acceptance criteria written (§6)                               | PM             |
| DoR-08 | Story pointed and assigned                                     | PM             |
| DoR-09 | No blocking open questions                                     | Team           |
| DoR-10 | Translations queued (if AR/FR required same sprint)            | Content        |

**Sprint Planning Rule:** Only pull stories that pass DoR into the sprint. Stories failing DoR go to "Blocked" column.

---

# 8. Definition of Done (DoD)

A task/story is **Done** when ALL criteria are met:

## 8.1 Code DoD

| #      | Criterion                                       |
| ------ | ----------------------------------------------- |
| DoD-01 | Code merged to `develop` via PR with 1 approval |
| DoD-02 | TypeScript strict — zero errors                 |
| DoD-03 | ESLint — zero warnings                          |
| DoD-04 | No `console.log` or debug code                  |
| DoD-05 | No hardcoded strings (uses next-intl)           |
| DoD-06 | No secrets in code                              |
| DoD-07 | Follows coding standards (§4)                   |
| DoD-08 | Follows feature-based architecture (MPS §9)     |

## 8.2 Quality DoD

| #      | Criterion                                           |
| ------ | --------------------------------------------------- |
| DoD-09 | Unit tests for services/schemas (if applicable)     |
| DoD-10 | E2E test for critical paths (if applicable)         |
| DoD-11 | axe-core: 0 new critical/serious violations         |
| DoD-12 | No Lighthouse performance regression > 5 points     |
| DoD-13 | Responsive tested: 375px, 768px, 1440px             |
| DoD-14 | EN content renders correctly                        |
| DoD-15 | AR content renders correctly with RTL (if in scope) |

## 8.3 Release DoD

| #      | Criterion                                       |
| ------ | ----------------------------------------------- |
| DoD-16 | Deployed to staging and verified                |
| DoD-17 | Acceptance criteria (§6) all pass               |
| DoD-18 | PO sign-off                                     |
| DoD-19 | SEO metadata present (if public page)           |
| DoD-20 | Analytics events firing (if conversion feature) |

## 8.4 Sprint DoD

| #       | Criterion                             |
| ------- | ------------------------------------- |
| DoD-S01 | All committed stories meet DoD above  |
| DoD-S02 | Sprint review demo completed          |
| DoD-S03 | Sprint retrospective held             |
| DoD-S04 | `develop` branch deploys successfully |
| DoD-S05 | No P0 bugs introduced                 |

---

# 9. Risk Mitigation Checklist

## 9.1 Pre-Sprint Checklist (Run at Sprint Planning)

| #    | Risk                       | Mitigation Action                                   | Owner     | Done? |
| ---- | -------------------------- | --------------------------------------------------- | --------- | ----- |
| R-01 | No photography             | Placeholder strategy approved; photo day scheduled  | PO        | ☐     |
| R-02 | Fee data missing           | Fallback page approved; admissions contacted        | PO        | ☐     |
| R-03 | AR translation delay       | Translator contracted; EN-first launch agreed       | PM        | ☐     |
| R-04 | Wix DNS migration          | DNS access verified; TTL lowered 48h before cutover | Dev 1     | ☐     |
| R-05 | Scope creep                | MoSCoW referenced; change request process active    | PM        | ☐     |
| R-06 | Cambridge brand violation  | Brand assets approved by school                     | Designer  | ☐     |
| R-07 | Form spam                  | Rate limiting + honeypot + reCAPTCHA in S4          | Dev 2     | ☐     |
| R-08 | Performance regression     | Lighthouse CI gate active from S1                   | Dev 1     | ☐     |
| R-09 | Key dev unavailable        | All tasks have file-level blueprint (this doc)      | Tech Lead | ☐     |
| R-10 | School staff can't use CMS | Training scheduled S6; screen-recorded tutorials    | PM        | ☐     |

## 9.2 Pre-Launch Checklist (Sprint 5 End)

| #    | Check                                        | Owner     | Done? |
| ---- | -------------------------------------------- | --------- | ----- |
| L-01 | All 35 MVP pages load (EN)                   | QA        | ☐     |
| L-02 | Arabic 80%+ pages complete                   | QA        | ☐     |
| L-03 | All forms submit successfully                | QA        | ☐     |
| L-04 | All emails deliver (inquiry, tour)           | QA        | ☐     |
| L-05 | Lighthouse ≥ 90 Performance                  | Dev 1     | ☐     |
| L-06 | Lighthouse ≥ 95 Accessibility                | Dev 1     | ☐     |
| L-07 | Lighthouse ≥ 95 SEO                          | Dev 2     | ☐     |
| L-08 | 0 critical axe violations                    | QA        | ☐     |
| L-09 | 301 redirects tested (all old URLs)          | Dev 1     | ☐     |
| L-10 | SSL certificate valid                        | Dev 1     | ☐     |
| L-11 | GA4 tracking verified                        | Dev 2     | ☐     |
| L-12 | GSC verified + sitemap submitted             | Marketing | ☐     |
| L-13 | Google Business Profile updated              | Marketing | ☐     |
| L-14 | Privacy policy + cookie consent live         | PO        | ☐     |
| L-15 | robots.txt correct                           | Dev 2     | ☐     |
| L-16 | Favicon + OG images present                  | Designer  | ☐     |
| L-17 | WhatsApp FAB works                           | QA        | ☐     |
| L-18 | Contact info correct (phone, email, address) | PO        | ☐     |
| L-19 | Cambridge logo used per brand guidelines     | Designer  | ☐     |
| L-20 | PO + Leadership sign-off (G8)                | PO        | ☐     |

## 9.3 Per-Deploy Smoke Test (5 minutes)

| #    | Check                                           |
| ---- | ----------------------------------------------- |
| D-01 | Homepage loads (200)                            |
| D-02 | /admissions/inquire form renders                |
| D-03 | /ar homepage renders RTL                        |
| D-04 | /admin redirects to login                       |
| D-05 | /api/v1/inquiries POST returns 400 (empty body) |
| D-06 | Sentry: no new error spike                      |

---

# 10. Daily Development Workflow

## 10.1 Team Schedule

| Time (GST)  | Activity                        | Participants |
| ----------- | ------------------------------- | ------------ |
| 09:00–09:15 | Standup (15 min max)            | All dev + PM |
| 09:15–12:30 | Deep work block 1               | Devs         |
| 12:30–13:30 | Lunch                           | —            |
| 13:30–16:30 | Deep work block 2               | Devs         |
| 16:30–17:00 | PR reviews / collaboration      | Devs         |
| 17:00       | End of day — push WIP to branch | Devs         |

**Standup format (each person, 2 min max):**

1. What did I complete yesterday?
2. What will I do today?
3. Any blockers?

## 10.2 Developer Daily Checklist

### Start of Day

| #   | Action                                   |
| --- | ---------------------------------------- |
| 1   | Pull latest `develop`                    |
| 2   | Check assigned stories in project board  |
| 3   | Verify DoR for today's story (§7)        |
| 4   | Open Figma reference for UI work         |
| 5   | Open relevant FIB blueprint section (§1) |

### During Development

| #   | Action                                                          |
| --- | --------------------------------------------------------------- |
| 6   | Create branch: `feature/AIS-{id}-{description}`                 |
| 7   | Implement per blueprint + MPS + coding standards (§4)           |
| 8   | Write tests for services/schemas                                |
| 9   | Run `npm run lint && npm run typecheck && npm run test` locally |
| 10  | Test responsive (375, 768, 1440)                                |
| 11  | Test keyboard navigation on new components                      |
| 12  | Commit with conventional commit message                         |

### End of Day

| #   | Action                                          |
| --- | ----------------------------------------------- |
| 13  | Push branch to remote                           |
| 14  | Open draft PR if feature is partial (WIP label) |
| 15  | Update story status on project board            |
| 16  | Log blockers in standup notes / Slack           |

## 10.3 PR Workflow

```
1. Branch from develop
2. Implement feature
3. Self-review against DoD (§8)
4. Run local: lint + typecheck + test + build
5. Open PR → develop
6. CI runs (automatic)
7. Request review from other dev
8. Address review comments
9. Squash merge
10. Delete branch
11. Verify staging deploy
12. Move story to "Done" on board
```

## 10.4 Project Board Columns

| Column          | Meaning                                    |
| --------------- | ------------------------------------------ |
| **Backlog**     | Not yet ready                              |
| **Ready**       | Passes DoR (§7), can be pulled             |
| **In Progress** | Developer actively working (max 2 per dev) |
| **In Review**   | PR open, awaiting review                   |
| **QA**          | On staging, awaiting QA                    |
| **Done**        | Passes DoD (§8), merged                    |
| **Blocked**     | Waiting on dependency — tag blocker        |

## 10.5 Sprint Ceremonies

| Ceremony             | When               | Duration | Output                      |
| -------------------- | ------------------ | -------- | --------------------------- |
| Sprint Planning      | Day 1 of sprint    | 2 hours  | Sprint backlog committed    |
| Daily Standup        | Every day          | 15 min   | Blockers identified         |
| Sprint Review        | Last day of sprint | 1 hour   | Demo to PO/stakeholders     |
| Sprint Retrospective | Last day of sprint | 45 min   | 1–3 improvement actions     |
| Backlog Refinement   | Mid-sprint         | 1 hour   | Next sprint stories refined |

## 10.6 Communication Channels

| Channel              | Use For                           |
| -------------------- | --------------------------------- |
| Slack `#ais-dev`     | Daily dev discussion, blockers    |
| Slack `#ais-design`  | Design questions, Figma reviews   |
| Slack `#ais-content` | Content/copy questions            |
| GitHub PRs           | Code review, technical discussion |
| GitHub Issues        | Bug reports, task tracking        |
| Weekly email to PO   | Sprint progress summary (Fridays) |

## 10.7 Escalation Path

| Level | Trigger                                 | Escalate To                  | SLA             |
| ----- | --------------------------------------- | ---------------------------- | --------------- |
| L1    | Technical blocker                       | Tech Lead (Dev 1)            | Same day        |
| L2    | Content/scope unclear                   | PO                           | Same day        |
| L3    | Design ambiguity                        | Designer + Creative Director | 1 business day  |
| L4    | Dependency not delivered (fees, photos) | PO → School Leadership       | 2 business days |
| L5    | Sprint goal at risk                     | PM → Leadership              | Immediate       |

## 10.8 Environment Usage

| Environment | Branch         | Use                                |
| ----------- | -------------- | ---------------------------------- |
| Local       | feature branch | Development + unit tests           |
| Staging     | `develop`      | Integration testing, QA, PO review |
| Production  | `main`         | Live site (post-G8 only)           |

**Rule:** Never test with production database. Never use real parent PII in dev/staging.

---

## Document Approval

| Gate      | Requirement                            | Approver       | Status     |
| --------- | -------------------------------------- | -------------- | ---------- |
| **FIB-0** | This Implementation Blueprint approved | Tech Lead + PO | ⏳ PENDING |
| MPS-0     | Master Product Specification approved  | Leadership     | ⏳ PENDING |
| G7        | Sprint 0 authorized                    | Tech Lead + PO | ⏳ PENDING |

**Implementation is authorized when FIB-0 + MPS-0 + G7 are all signed.**

---

## Appendices

| Appendix | Document                                                             |
| -------- | -------------------------------------------------------------------- |
| A        | [MASTER_PRODUCT_SPECIFICATION.md](./MASTER_PRODUCT_SPECIFICATION.md) |
| B        | [05 — Information Architecture](./05-information-architecture.md)    |
| C        | [07 — Feature Prioritization](./07-feature-prioritization.md)        |
| D        | [14 — Implementation Roadmap](./14-implementation-roadmap.md)        |
| E        | [15 — Risks & Scalability](./15-risks-scalability.md)                |

---

**END OF FINAL IMPLEMENTATION BLUEPRINT**

_Document ID: AIS-FIB-2026-001 · Version 1.0.0_
