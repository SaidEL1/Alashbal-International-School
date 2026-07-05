# 02 — SEO Audit & Strategy

**Current Site:** https://www.aisdoha.net  
**Target Launch Domain:** aisdoha.net (retain) or subdomain strategy  
**Audit Date:** July 2026

---

## 1. Current-State SEO Audit

### 1.1 Technical SEO

| Check                      | Status     | Severity | Finding                                                     |
| -------------------------- | ---------- | -------- | ----------------------------------------------------------- |
| Platform                   | ❌ Fail    | Critical | Wix — limited crawl control, heavy JS, poor Core Web Vitals |
| robots.txt                 | ⚠️ Partial | Medium   | Wix default; limited customization                          |
| XML Sitemap                | ⚠️ Partial | Medium   | Auto-generated; shallow (few pages)                         |
| Canonical URLs             | ⚠️ Partial | Medium   | Wix handles; duplicate risk on www/non-www                  |
| HTTPS                      | ✅ Pass    | —        | SSL active                                                  |
| Mobile-first indexing      | ❌ Fail    | Critical | Poor mobile UX; not mobile-optimized layout                 |
| Page speed (est.)          | ❌ Fail    | Critical | LCP likely >4s; no image optimization (no images)           |
| Structured data            | ❌ Fail    | Critical | No Schema.org detected                                      |
| hreflang                   | ❌ Fail    | High     | No multilingual tags                                        |
| Open Graph / Twitter Cards | ❌ Fail    | High     | Missing or Wix-default                                      |
| Favicon / App icons        | ⚠️ Partial | Low      | Basic logo only                                             |
| 404 page                   | ⚠️ Partial | Low      | Wix generic                                                 |
| Redirect strategy          | ⚠️ Unknown | Medium   | No documented migration plan                                |

**Technical SEO Score: 22/100**

### 1.2 On-Page SEO

| Page     | Title                                                              | Meta Desc    | H1                              | Content Depth           | Score  |
| -------- | ------------------------------------------------------------------ | ------------ | ------------------------------- | ----------------------- | ------ |
| Homepage | "Alashbal International school \| Home of the Cubs \| Doha, Qatar" | Missing/weak | Multiple (school name repeated) | ~800 words, single page | 30/100 |

**Issues:**

- Inconsistent brand casing ("school" lowercase)
- "Home of the Cubs" — unclear brand term; low search volume
- No unique meta descriptions
- H1/H2 hierarchy broken (MISSION, VISION, WELCOME MESSAGE compete)
- No internal linking structure (single-page site)
- No blog/news for content freshness
- No location-specific landing pages
- No program-specific pages (Cambridge, EY, Primary, etc.)
- Keyword cannibalization: school name repeated 6+ times without semantic variety

**On-Page SEO Score: 30/100**

### 1.3 Content SEO

| Factor              | Status     | Notes                                                  |
| ------------------- | ---------- | ------------------------------------------------------ |
| E-E-A-T signals     | ❌ Weak    | No author bios, no credentials page, no awards         |
| Local SEO           | ❌ Weak    | Address in footer only; no Google Business integration |
| Curriculum keywords | ⚠️ Partial | Cambridge mentioned once, bottom of page               |
| Long-tail coverage  | ❌ None    | No FAQ, no guides, no comparison content               |
| Media SEO           | ❌ None    | Zero images = zero image search presence               |
| Freshness           | ❌ Stale   | No news, events, or dated content                      |

**Content SEO Score: 25/100**

### 1.4 Off-Page SEO (Estimated)

| Factor           | Status                                    |
| ---------------- | ----------------------------------------- |
| Domain authority | Low (est. DA 10–15)                       |
| Backlinks        | Minimal education directory listings      |
| Social signals   | Limited visible presence                  |
| Reviews          | Not integrated (Edarabia, Google Reviews) |
| Local citations  | Incomplete NAP consistency                |

**Off-Page SEO Score: 20/100**

### 1.5 Competitive Keyword Gap

| Keyword (EN)                     | Monthly Intent | Hamilton | Doha College | Alashbal Current |
| -------------------------------- | -------------- | :------: | :----------: | :--------------: |
| international school doha        | High           |  Ranks   |    Ranks     |   Not visible    |
| cambridge school qatar           | Medium         |    —     |      —       |   Opportunity    |
| school admissions doha           | High           |  Ranks   |    Ranks     |   Not visible    |
| british school doha              | High           |    —     |    Ranks     |   Not visible    |
| private school qatar             | High           |  Ranks   |    Ranks     |   Not visible    |
| best schools in doha             | High           |    —     |    Ranks     |   Not visible    |
| early years school doha          | Medium         |  Ranks   |    Ranks     |   Not visible    |
| international school old airport | Low            |    —     |      —       | **Opportunity**  |

### 1.6 Arabic SEO Gap

| Keyword (AR)       | Alashbal Current           |
| ------------------ | -------------------------- |
| مدارس دولية في قطر | ❌ No Arabic site          |
| مدرسة كامبريدج قطر | ❌                         |
| قبول مدارس الدوحة  | ❌                         |
| مدرسة الأشبال      | ❌ Brand not indexed in AR |

**Overall Current SEO Health: 24/100 — Critical rebuild required**

---

## 2. Target SEO Architecture

### 2.1 URL Taxonomy

```
/                                    → Homepage
/en/...                              → English (default)
/ar/...                              → Arabic (RTL)
/fr/...                              → French

/about                               → About the school
/about/leadership                    → Head of School + team
/about/mission-vision                → Mission, vision, values
/about/accreditations                → Cambridge + certifications
/about/campus                        → Facilities overview

/admissions                          → Admissions hub
/admissions/how-to-apply             → Step-by-step process
/admissions/tuition-fees             → Fee structure
/admissions/inquire                  → Inquiry form
/admissions/book-a-tour              → Tour booking
/admissions/faqs                     → Admissions FAQ
/admissions/apply                    → Online application

/academics                           → Academic overview
/academics/early-years               → Ages 3–5
/academics/primary                   → Ages 5–11
/academics/middle-school             → Ages 11–14
/academics/high-school               → Ages 14–18
/academics/cambridge-pathway         → Cambridge curriculum detail
/academics/stem                      → STEM program
/academics/ai-robotics               → AI & Robotics
/academics/languages                 → Multilingual program

/student-life                        → Student life hub
/student-life/clubs                  → Clubs & activities
/student-life/sports                 → Sports
/student-life/events                 → Events listing
/student-life/gallery                → Photo/video gallery

/news                                → News listing
/news/[slug]                         → Article detail

/careers                             → Job listings
/careers/[slug]                      → Job detail

/contact                             → Contact + map
/downloads                           → Document center
/privacy                             → Privacy policy
/terms                               → Terms of use
```

### 2.2 Title Tag Formula

```
{Page Topic} | Alashbal International School — Cambridge School in Doha, Qatar
```

**Rules:**

- Max 60 characters (truncate gracefully)
- Primary keyword in first 40 characters
- Brand name always present
- Unique per page (no duplicates)

**Examples:**

- `Admissions | Alashbal International School — Doha, Qatar`
- `Cambridge Curriculum | Alashbal International School Doha`
- `القبول | مدرسة الأشبال الدولية — الدوحة، قطر`

### 2.3 Meta Description Formula

```
{Value proposition in 1 sentence}. {CTA}. {Location keyword}.
```

Max 155 characters. Unique per page. Include action verb.

**Example:**

> Apply to Alashbal International School — a Cambridge-accredited international school in Doha. Book a campus tour today. Old Airport Area, Qatar.

---

## 3. Structured Data (Schema.org)

### 3.1 Global — Every Page

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Alashbal International School",
  "alternateName": "AIS Doha",
  "url": "https://www.aisdoha.net",
  "logo": "https://www.aisdoha.net/logo.png",
  "description": "Cambridge-accredited international school in Doha, Qatar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Old Airport Area, E-ring Road",
    "addressLocality": "Doha",
    "addressCountry": "QA"
  },
  "telephone": "+974-4450-7882",
  "email": "info@aisdoha.net",
  "sameAs": ["social profiles"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Cambridge International Education"
  }
}
```

### 3.2 Page-Specific Schemas

| Page Type    | Schema                                                    |
| ------------ | --------------------------------------------------------- |
| Homepage     | `EducationalOrganization` + `WebSite` with `SearchAction` |
| News article | `NewsArticle` + `BreadcrumbList`                          |
| Event        | `Event` with `startDate`, `location`                      |
| FAQ          | `FAQPage`                                                 |
| Admissions   | `WebPage` + `FAQPage`                                     |
| Job listing  | `JobPosting`                                              |
| Gallery      | `ImageGallery`                                            |
| Tour booking | `ReserveAction`                                           |

### 3.3 Breadcrumb Schema

Every page below depth 1 includes `BreadcrumbList` for SERP rich snippets.

---

## 4. Technical SEO Implementation

### 4.1 Next.js SEO Checklist

| Requirement      | Implementation                                           |
| ---------------- | -------------------------------------------------------- |
| Metadata API     | `generateMetadata()` per route                           |
| Sitemap          | Dynamic `app/sitemap.ts` — all locales                   |
| robots.txt       | `app/robots.ts` — allow all public, block /admin /portal |
| Canonical        | Self-referencing canonical per locale                    |
| hreflang         | `<link rel="alternate" hreflang="en                      | ar  | fr">` |
| OG images        | Dynamic OG per page via `@vercel/og`                     |
| JSON-LD          | Server-rendered `<script type="application/ld+json">`    |
| 301 redirects    | `next.config.js` redirects from old Wix URLs             |
| Trailing slashes | Consistent policy (recommend: no trailing slash)         |

### 4.2 Core Web Vitals Targets

| Metric | Target  | Strategy                                      |
| ------ | ------- | --------------------------------------------- |
| LCP    | < 2.0s  | Hero image preload, AVIF, CDN                 |
| INP    | < 150ms | Minimal client JS, server components          |
| CLS    | < 0.05  | Explicit image dimensions, font-display: swap |
| TTFB   | < 600ms | Vercel edge, ISR for CMS pages                |

### 4.3 Image SEO

- Descriptive filenames: `alashbal-cambridge-classroom-primary-doha.webp`
- Alt text: descriptive, keyword-natural, max 125 chars
- Cloudinary auto-format + auto-quality
- Lazy load below fold; priority load hero

---

## 5. Content SEO Strategy

### 5.1 Pillar Pages (Launch)

| Pillar                     | Target Keywords                                      | Word Count |
| -------------------------- | ---------------------------------------------------- | ---------- |
| International School Doha  | international school doha, best school doha          | 1,500+     |
| Cambridge Curriculum Qatar | cambridge school qatar, cambridge international doha | 1,200+     |
| School Admissions Doha     | school admissions qatar, apply school doha           | 1,000+     |
| Early Years Education Doha | nursery school doha, early years qatar               | 800+       |

### 5.2 Blog/News Cadence

| Frequency  | Content Type                       | SEO Purpose      |
| ---------- | ---------------------------------- | ---------------- |
| 2×/month   | School news, events                | Freshness signal |
| 1×/month   | Educational thought leadership     | E-E-A-T          |
| 1×/quarter | Admissions guide update            | Long-tail        |
| 1×/quarter | "Relocating to Qatar" guide update | Expat keywords   |

### 5.3 FAQ Strategy (50+ Questions)

Organize by intent:

- **Admissions** (15): fees, process, documents, age requirements
- **Curriculum** (10): Cambridge, subjects, assessments
- **School Life** (10): uniforms, transport, meals, clubs
- **Parents** (10): communication, portal, meetings
- **International** (5): visas, relocation, language support

Each FAQ page targets `FAQPage` schema + long-tail queries.

---

## 6. Local SEO

### 6.1 Google Business Profile

| Action       | Detail                                                  |
| ------------ | ------------------------------------------------------- |
| Claim/verify | Alashbal International School, Old Airport Area         |
| Categories   | International school, Private school, Elementary school |
| NAP          | Consistent: name, address, +974 4450 7882               |
| Photos       | 20+ campus photos within 30 days of launch              |
| Posts        | Weekly event/announcement posts                         |
| Reviews      | Encourage parent reviews; respond within 48h            |

### 6.2 Local Citations

Submit to: Edarabia, Qatar Living, Ministry of Education directory, Cambridge school finder, International Schools Database, Expat forums.

### 6.3 NAP Consistency Matrix

| Field   | Canonical Value                            |
| ------- | ------------------------------------------ |
| Name    | Alashbal International School              |
| Address | Old Airport Area, E-ring Road, Doha, Qatar |
| Phone   | +974 4450 7882                             |
| Email   | info@aisdoha.net                           |
| Website | https://www.aisdoha.net                    |

---

## 7. Migration SEO Plan (Wix → Next.js)

### Phase M1 — Pre-Launch (Week -2)

- Crawl current site (Screaming Frog)
- Map all existing URLs
- Create 301 redirect map
- Set up staging with noindex

### Phase M2 — Launch Day

- DNS cutover to Vercel
- Submit new sitemap to Google Search Console
- Submit new sitemap to Bing Webmaster
- Verify hreflang in GSC International Targeting
- Monitor 404s for 14 days

### Phase M3 — Post-Launch (Weeks 1–4)

- Fix any 404s from redirect gaps
- Monitor indexation rate
- Track ranking changes for brand terms
- Publish 4 news articles (freshness burst)

### Redirect Map (Critical)

| Old URL (Wix) | New URL                | Type                    |
| ------------- | ---------------------- | ----------------------- |
| `/`           | `/en`                  | 301                     |
| `/about`      | `/en/about`            | 301                     |
| `/admissions` | `/en/admissions`       | 301                     |
| `/contact`    | `/en/contact`          | 301                     |
| `/our-team`   | `/en/about/leadership` | 301                     |
| All others    | `/en`                  | 301 (temporary, refine) |

---

## 8. KPIs & 12-Month Targets

| KPI                         | Baseline (est.) | 3-Month | 6-Month | 12-Month |
| --------------------------- | --------------- | ------- | ------- | -------- |
| Organic sessions/month      | <100            | 500     | 1,500   | 4,000    |
| Indexed pages               | 1–5             | 40+     | 60+     | 80+      |
| Brand keyword position      | Not top 10      | Top 3   | #1      | #1       |
| "international school doha" | Not ranking     | —       | Page 3  | Page 1   |
| "cambridge school qatar"    | Not ranking     | Page 3  | Page 2  | Page 1   |
| Domain Rating               | ~10             | 15      | 20      | 30       |
| Core Web Vitals pass        | 0%              | 100%    | 100%    | 100%     |
| FAQ rich snippets           | 0               | 10+     | 25+     | 40+      |

---

## 9. SEO Governance

| Role           | Responsibility                       |
| -------------- | ------------------------------------ |
| Content Editor | Meta titles/descriptions per publish |
| Developer      | Schema, sitemap, redirects, CWV      |
| Marketing      | Blog cadence, GBP, citations         |
| QA             | Monthly SEO audit checklist          |

**Monthly audit checklist:** GSC coverage, CWV report, broken links, redirect chains, hreflang errors, schema validation (Google Rich Results Test).
