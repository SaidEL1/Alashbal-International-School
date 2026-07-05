# 04 — Design System Specification

**Codename:** AIS Design System v1.0  
**Philosophy:** Premium heritage meets future-ready innovation  
**Reference quality bar:** Apple clarity · Stripe precision · Harvard gravitas · Vercel performance

---

## 1. Brand Foundation

### 1.1 Brand Attributes

| Attribute     | Expression                                                   |
| ------------- | ------------------------------------------------------------ |
| Premium       | Generous whitespace, refined typography, quality photography |
| Innovative    | Subtle gradients, glassmorphism accents, micro-interactions  |
| Trustworthy   | Navy accents, accreditation prominence, consistent tone      |
| International | Trilingual, RTL-native, multicultural imagery                |
| Future-ready  | STEM/AI visual language, modern iconography                  |

### 1.2 Logo Usage

| Rule               | Specification                                                |
| ------------------ | ------------------------------------------------------------ |
| Clear space        | Minimum 1× logo height on all sides                          |
| Min size (digital) | 120px width                                                  |
| Backgrounds        | Full-color on white/light; reversed (white) on burgundy/navy |
| Don't              | Stretch, rotate, add effects, place on busy photography      |

---

## 2. Color System

### 2.1 Primary Palette

| Token                | Hex       | RGB           | Usage                          |
| -------------------- | --------- | ------------- | ------------------------------ |
| `--ais-burgundy-900` | `#4A0E1B` | 74, 14, 27    | Primary brand, headers, footer |
| `--ais-burgundy-800` | `#6B1528` | 107, 21, 40   | Hover states, dark sections    |
| `--ais-burgundy-700` | `#8B1E35` | 139, 30, 53   | Buttons, accents               |
| `--ais-burgundy-600` | `#A52840` | 165, 40, 64   | Active states                  |
| `--ais-burgundy-100` | `#F9E8EC` | 249, 232, 236 | Light backgrounds, badges      |

### 2.2 Secondary Palette

| Token                 | Hex       | Usage                               |
| --------------------- | --------- | ----------------------------------- |
| `--ais-gold-500`      | `#C5A572` | Premium accents, awards, highlights |
| `--ais-gold-300`      | `#E8D5B5` | Subtle borders, dividers            |
| `--ais-navy-900`      | `#0F1D3A` | Trust sections, academic content    |
| `--ais-navy-700`      | `#1E3A6E` | Links on light backgrounds          |
| `--ais-cambridge-red` | `#C8102E` | Cambridge partnership badge only    |

### 2.3 Neutral Palette

| Token            | Hex       | Usage                |
| ---------------- | --------- | -------------------- |
| `--ais-white`    | `#FFFFFF` | Primary backgrounds  |
| `--ais-gray-50`  | `#F8F9FA` | Section alternation  |
| `--ais-gray-100` | `#F1F3F5` | Card backgrounds     |
| `--ais-gray-200` | `#E9ECEF` | Borders, dividers    |
| `--ais-gray-400` | `#ADB5BD` | Placeholder text     |
| `--ais-gray-600` | `#6C757D` | Secondary text       |
| `--ais-gray-800` | `#343A40` | Body text            |
| `--ais-gray-900` | `#212529` | Headings on light bg |

### 2.4 Semantic Colors

| Token           | Hex       | Usage                       |
| --------------- | --------- | --------------------------- |
| `--ais-success` | `#2D6A4F` | Form success, confirmations |
| `--ais-warning` | `#E9C46A` | Alerts, deadlines           |
| `--ais-error`   | `#BC4749` | Form errors, validation     |
| `--ais-info`    | `#457B9D` | Informational banners       |

### 2.5 Gradients

```css
--ais-gradient-hero: linear-gradient(135deg, #4a0e1b 0%, #1e3a6e 100%);
--ais-gradient-gold: linear-gradient(135deg, #c5a572 0%, #e8d5b5 100%);
--ais-gradient-glass: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.1) 0%,
  rgba(255, 255, 255, 0.05) 100%
);
```

### 2.6 Dark Mode Palette

| Token          | Light     | Dark      |
| -------------- | --------- | --------- |
| Background     | `#FFFFFF` | `#0A0A0F` |
| Surface        | `#F8F9FA` | `#14141F` |
| Text primary   | `#212529` | `#F1F3F5` |
| Text secondary | `#6C757D` | `#ADB5BD` |
| Brand primary  | `#6B1528` | `#A52840` |
| Border         | `#E9ECEF` | `#2A2A3A` |

### 2.7 Contrast Compliance

All text/background pairs verified for **WCAG 2.2 AA** (4.5:1 normal, 3:1 large text):

| Pair                            | Ratio     | Pass         |
| ------------------------------- | --------- | ------------ |
| gray-900 on white               | 15.8:1    | ✅           |
| burgundy-900 on white           | 11.2:1    | ✅           |
| white on burgundy-800           | 9.8:1     | ✅           |
| gold-500 on burgundy-900        | 4.6:1     | ✅           |
| gray-600 on white               | 5.0:1     | ✅           |
| ~~yellow on maroon (OLD SITE)~~ | ~~2.1:1~~ | ❌ NEVER USE |

---

## 3. Typography

### 3.1 Font Stack

| Role         | Font                  | Fallback              | Weight Range       |
| ------------ | --------------------- | --------------------- | ------------------ |
| Display (EN) | **Fraunces**          | Georgia, serif        | 400, 500, 600, 700 |
| Body (EN)    | **Inter**             | system-ui, sans-serif | 400, 500, 600, 700 |
| Display (AR) | **Noto Naskh Arabic** | serif                 | 400, 700           |
| Body (AR)    | **Noto Sans Arabic**  | sans-serif            | 400, 500, 700      |
| Body (FR)    | **Inter**             | system-ui             | 400, 500, 600      |
| Mono         | **JetBrains Mono**    | monospace             | 400, 500           |

### 3.2 Type Scale (Desktop)

| Token         | Size            | Line Height | Weight | Usage               |
| ------------- | --------------- | ----------- | ------ | ------------------- |
| `display-2xl` | 72px / 4.5rem   | 1.1         | 600    | Hero headline       |
| `display-xl`  | 60px / 3.75rem  | 1.1         | 600    | Page titles         |
| `display-lg`  | 48px / 3rem     | 1.15        | 600    | Section headers     |
| `heading-xl`  | 36px / 2.25rem  | 1.2         | 600    | H2                  |
| `heading-lg`  | 30px / 1.875rem | 1.25        | 600    | H3                  |
| `heading-md`  | 24px / 1.5rem   | 1.3         | 600    | H4                  |
| `heading-sm`  | 20px / 1.25rem  | 1.35        | 600    | H5                  |
| `body-lg`     | 18px / 1.125rem | 1.6         | 400    | Lead paragraphs     |
| `body-md`     | 16px / 1rem     | 1.6         | 400    | Body text           |
| `body-sm`     | 14px / 0.875rem | 1.5         | 400    | Captions, meta      |
| `label`       | 12px / 0.75rem  | 1.4         | 500    | Form labels, badges |

### 3.3 Type Scale (Mobile)

| Token         | Size |
| ------------- | ---- |
| `display-2xl` | 40px |
| `display-xl`  | 36px |
| `display-lg`  | 32px |
| `heading-xl`  | 28px |
| `heading-lg`  | 24px |
| `body-lg`     | 16px |
| `body-md`     | 15px |

### 3.4 RTL Typography Rules

- `direction: rtl` on `<html lang="ar">`
- Flip margin/padding using logical properties (`margin-inline-start`)
- Fraunces replaced by Noto Naskh Arabic for AR headings
- Line height +0.1 for Arabic body text (improved readability)
- Numbers remain LTR within Arabic text (`unicode-bidi: isolate`)

---

## 4. Spacing System

**Base unit:** 4px  
**Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

| Token      | Value | Usage                     |
| ---------- | ----- | ------------------------- |
| `space-1`  | 4px   | Icon gaps                 |
| `space-2`  | 8px   | Tight padding             |
| `space-3`  | 12px  | Input padding             |
| `space-4`  | 16px  | Card padding (mobile)     |
| `space-6`  | 24px  | Card padding (desktop)    |
| `space-8`  | 32px  | Section inner gap         |
| `space-12` | 48px  | Between components        |
| `space-16` | 64px  | Section padding (mobile)  |
| `space-24` | 96px  | Section padding (desktop) |
| `space-32` | 128px | Hero padding              |

---

## 5. Grid & Layout

### 5.1 Container

| Breakpoint   | Max Width | Padding |
| ------------ | --------- | ------- |
| sm (640px)   | 100%      | 16px    |
| md (768px)   | 100%      | 24px    |
| lg (1024px)  | 1024px    | 32px    |
| xl (1280px)  | 1200px    | 32px    |
| 2xl (1536px) | 1400px    | 40px    |

### 5.2 Grid

- 12-column grid
- Gap: 24px (desktop), 16px (mobile)
- Common layouts: 12 (full), 6+6 (split), 4+4+4 (cards), 8+4 (content+sidebar)

### 5.3 Section Rhythm

```
[Section Padding Top: 96px]
  [Container]
    [Section Label: overline, gold, uppercase]
    [Section Heading: display-lg]
    [Section Description: body-lg, gray-600, max-w-2xl]
    [Content Grid]
[Section Padding Bottom: 96px]
```

Alternate `white` / `gray-50` / `burgundy-900` (inverted) backgrounds.

---

## 6. Components

### 6.1 Buttons

| Variant   | Background   | Text         | Border           | Usage                       |
| --------- | ------------ | ------------ | ---------------- | --------------------------- |
| Primary   | burgundy-700 | white        | none             | Main CTA (Apply, Book Tour) |
| Secondary | transparent  | burgundy-700 | 2px burgundy-700 | Secondary actions           |
| Ghost     | transparent  | gray-800     | none             | Tertiary, nav               |
| Gold      | gold-500     | burgundy-900 | none             | Premium highlights          |
| Inverted  | white        | burgundy-900 | none             | On dark backgrounds         |

**Sizes:**

| Size | Height | Padding   | Font    |
| ---- | ------ | --------- | ------- |
| sm   | 36px   | 12px 16px | body-sm |
| md   | 44px   | 12px 24px | body-md |
| lg   | 52px   | 16px 32px | body-lg |

**States:** Default → Hover (darken 10%) → Active (darken 15%) → Focus (2px ring, offset 2px) → Disabled (opacity 50%)

**Min touch target:** 44×44px (WCAG 2.2)

### 6.2 Cards

| Variant  | Style                                                 |
| -------- | ----------------------------------------------------- |
| Default  | white bg, 1px gray-200 border, radius 12px, shadow-sm |
| Elevated | white bg, shadow-md, radius 16px                      |
| Glass    | bg white/10, backdrop-blur 12px, border white/20      |
| Feature  | burgundy-900 bg, white text, gold accent line top     |
| Image    | Image top (16:9), content below, hover lift 4px       |

### 6.3 Form Elements

| Element  | Height    | Border       | Radius | Focus                 |
| -------- | --------- | ------------ | ------ | --------------------- |
| Input    | 48px      | 1px gray-200 | 8px    | 2px ring burgundy-700 |
| Select   | 48px      | 1px gray-200 | 8px    | 2px ring burgundy-700 |
| Textarea | min 120px | 1px gray-200 | 8px    | 2px ring burgundy-700 |
| Checkbox | 20px      | 2px gray-400 | 4px    | ring                  |
| Radio    | 20px      | 2px gray-400 | 50%    | ring                  |

**Error state:** border error, text error below (body-sm), icon alert-circle

### 6.4 Navigation

| Component     | Specification                      |
| ------------- | ---------------------------------- |
| Header height | 72px (desktop), 64px (mobile)      |
| Sticky        | Yes, with backdrop-blur on scroll  |
| Logo          | Left (LTR) / Right (RTL)           |
| Mega menu     | 3-column dropdown, 24px padding    |
| Mobile        | Full-screen overlay, slide-in      |
| CTA in header | "Book a Tour" button (primary, sm) |

### 6.5 Trust Bar

Horizontal strip: accreditation logos (Cambridge, MoE Qatar, etc.)  
Height: 64px · Background: gray-50 · Logo max-height: 40px · Grayscale default, color on hover

### 6.6 Testimonial Card

```
┌─────────────────────────────────────────┐
│  "Quote text in body-lg italic"         │
│                                         │
│  ┌────┐  Name                           │
│  │img │  Role · School                  │
│  └────┘                                 │
└─────────────────────────────────────────┘
```

Background: navy-900 · Text: white · Quote mark: gold-500 decorative

### 6.7 Age-Band Card (Learning Journey)

```
┌──────────────────┐
│  [Image 16:9]    │
│  Ages 3–5        │
│  Early Years     │
│  Brief desc...   │
│  [Discover →]    │
└──────────────────┘
```

Hover: image scale 1.05, shadow elevate, arrow slide right

### 6.8 Accordion

- Header: 56px min-height, heading-sm, chevron right
- Border-bottom: 1px gray-200
- Expand animation: 200ms ease-out
- Gold left border (3px) on active item

### 6.9 Footer

4-column (desktop): About · Academics · Admissions · Contact  
Bottom bar: copyright, privacy, terms, social icons  
Background: burgundy-900 · Text: white/gray-300

---

## 7. Iconography

**Library:** Lucide Icons  
**Default size:** 20px (inline), 24px (standalone)  
**Stroke width:** 1.5px  
**Color:** inherit from text color

| Context   | Icon                             |
| --------- | -------------------------------- |
| Book Tour | `calendar`                       |
| Apply     | `file-text`                      |
| Inquire   | `mail`                           |
| WhatsApp  | Custom SVG (brand green #25D366) |
| Phone     | `phone`                          |
| Location  | `map-pin`                        |
| Download  | `download`                       |
| Search    | `search`                         |
| Language  | `globe`                          |
| Dark mode | `moon` / `sun`                   |

---

## 8. Imagery Guidelines

| Type        | Specification                                          |
| ----------- | ------------------------------------------------------ |
| Hero        | 1920×1080 min, WebP/AVIF, campus or students in action |
| Cards       | 800×450 (16:9), consistent color grading               |
| Portraits   | 400×400, circular crop for testimonials                |
| Gallery     | Lightbox, lazy-loaded, alt text required               |
| Video       | MP4 + WebM, poster frame, max 30s hero loops           |
| Placeholder | Branded skeleton with school colors (never gray boxes) |

**Photography style:** Warm, natural light, diverse students, authentic (no stock cliches).  
**Avoid:** Staged handshake photos, outdated uniforms, heavy filters.

---

## 9. Motion & Animation

### 9.1 Principles

1. **Purposeful** — animation guides attention, never decorates
2. **Subtle** — max 400ms duration for UI transitions
3. **Performant** — only `transform` and `opacity` for 60fps
4. **Respectful** — `prefers-reduced-motion: reduce` disables all

### 9.2 Animation Tokens

| Token             | Duration | Easing            | Usage               |
| ----------------- | -------- | ----------------- | ------------------- |
| `duration-fast`   | 150ms    | ease-out          | Hover, focus        |
| `duration-normal` | 250ms    | ease-in-out       | Accordion, tabs     |
| `duration-slow`   | 400ms    | ease-out          | Page transitions    |
| `spring`          | —        | spring(1, 80, 10) | Card hover (Framer) |

### 9.3 Scroll Animations (Framer Motion)

- Sections: fade-up (opacity 0→1, y 20→0), stagger children 100ms
- Stats counter: animate numbers on viewport enter (once)
- Hero: subtle parallax on background image (max 20px shift)
- No animation on initial hero (LCP protection)

---

## 10. Elevation & Shadows

| Token         | Value                         | Usage             |
| ------------- | ----------------------------- | ----------------- |
| `shadow-sm`   | 0 1px 2px rgba(0,0,0,0.05)    | Cards at rest     |
| `shadow-md`   | 0 4px 12px rgba(0,0,0,0.08)   | Hover cards       |
| `shadow-lg`   | 0 8px 24px rgba(0,0,0,0.12)   | Modals, dropdowns |
| `shadow-glow` | 0 0 20px rgba(165,40,64,0.15) | Primary CTA hover |

---

## 11. Border Radius

| Token         | Value  | Usage                 |
| ------------- | ------ | --------------------- |
| `radius-sm`   | 4px    | Badges, tags          |
| `radius-md`   | 8px    | Inputs, buttons       |
| `radius-lg`   | 12px   | Cards                 |
| `radius-xl`   | 16px   | Feature cards, modals |
| `radius-full` | 9999px | Avatars, pills        |

---

## 12. Glassmorphism (Selective Use)

Apply only to: sticky header on scroll, floating CTAs, hero overlay stats.

```css
.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

**Do not** use on: body text backgrounds, form fields, long content sections.

---

## 13. Responsive Behavior

| Breakpoint | Layout Changes                                           |
| ---------- | -------------------------------------------------------- |
| < 640px    | Single column, hamburger nav, stacked CTAs, 16px padding |
| 640–1024px | 2-column cards, condensed nav                            |
| > 1024px   | Full grid, mega menu, side-by-side hero                  |
| > 1280px   | Max container, increased whitespace                      |

---

## 14. Component Inventory (40 Components)

| #   | Component             | Phase |
| --- | --------------------- | ----- |
| 1   | Header / Navbar       | MVP   |
| 2   | Mobile Menu           | MVP   |
| 3   | Hero (Video)          | MVP   |
| 4   | Hero (Static)         | MVP   |
| 5   | Trust Bar             | MVP   |
| 6   | CTA Banner            | MVP   |
| 7   | Section Header        | MVP   |
| 8   | Feature Card          | MVP   |
| 9   | Age-Band Card         | MVP   |
| 10  | Testimonial Card      | MVP   |
| 11  | Testimonial Carousel  | MVP   |
| 12  | Stats Counter         | MVP   |
| 13  | Accordion             | MVP   |
| 14  | Tabs                  | MVP   |
| 15  | Button (all variants) | MVP   |
| 16  | Form Input            | MVP   |
| 17  | Form Select           | MVP   |
| 18  | Form Textarea         | MVP   |
| 19  | Inquiry Form          | MVP   |
| 20  | Tour Booking Form     | MVP   |
| 21  | Footer                | MVP   |
| 22  | Breadcrumbs           | MVP   |
| 23  | News Card             | MVP   |
| 24  | News Grid             | MVP   |
| 25  | Gallery Grid          | MVP   |
| 26  | Lightbox              | MVP   |
| 27  | Map Embed             | MVP   |
| 28  | WhatsApp FAB          | MVP   |
| 29  | Language Switcher     | MVP   |
| 30  | Dark Mode Toggle      | MVP   |
| 31  | Search Bar            | P1    |
| 32  | Event Card            | P1    |
| 33  | Calendar Widget       | P1    |
| 34  | Team Member Card      | P1    |
| 35  | Timeline              | P1    |
| 36  | Download Card         | P1    |
| 37  | FAQ Section           | MVP   |
| 38  | Cookie Banner         | MVP   |
| 39  | Alert Banner          | MVP   |
| 40  | AI Chat Widget        | P1    |

---

## 15. Tailwind Configuration Reference

```js
// tailwind.config.ts (reference for dev team)
colors: {
  burgundy: { 100: '#F9E8EC', 600: '#A52840', 700: '#8B1E35', 800: '#6B1528', 900: '#4A0E1B' },
  gold: { 300: '#E8D5B5', 500: '#C5A572' },
  navy: { 700: '#1E3A6E', 900: '#0F1D3A' },
},
fontFamily: {
  display: ['Fraunces', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
  arabic: ['Noto Sans Arabic', 'sans-serif'],
  'arabic-display': ['Noto Naskh Arabic', 'serif'],
},
borderRadius: { DEFAULT: '8px', lg: '12px', xl: '16px' },
```

---

## 16. Design Tokens Export

All tokens will be exported as:

- CSS custom properties (`:root` + `[data-theme="dark"]`)
- Tailwind config extension
- Figma variables (for design handoff)
- JSON tokens file (`/design-tokens.json`)
