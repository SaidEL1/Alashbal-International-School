# 12 — Accessibility Audit (WCAG 2.2 AA)

---

## 1. Current Site Audit (aisdoha.net)

### Critical Failures

| WCAG Criterion               | Level | Issue                                           | Severity     |
| ---------------------------- | ----- | ----------------------------------------------- | ------------ |
| 1.4.3 Contrast (Minimum)     | AA    | Yellow text on maroon/pink backgrounds (~2.1:1) | **Critical** |
| 1.4.11 Non-text Contrast     | AA    | "Learn More" button border insufficient         | High         |
| 2.4.1 Bypass Blocks          | A     | No skip navigation link                         | High         |
| 2.4.6 Headings and Labels    | AA    | Flat hierarchy; decorative headings             | High         |
| 1.1.1 Non-text Content       | A     | No images = no alt text strategy                | Medium       |
| 1.3.1 Info and Relationships | A     | Mission/Vision not in semantic landmarks        | Medium       |
| 2.5.8 Target Size (Minimum)  | AA    | Navigation links too small for touch            | High         |
| 3.1.1 Language of Page       | A     | No `lang` attribute enforcement                 | Medium       |
| 4.1.2 Name, Role, Value      | A     | Chat widget may lack accessible name            | Medium       |

**Current Accessibility Score: 15/100 — Critical rebuild required**

---

## 2. Target Standard: WCAG 2.2 Level AA

All 86 success criteria at Level A and AA will be met. Level AAA targeted where feasible for:

- 1.4.6 Contrast Enhanced (7:1) on body text
- 2.4.8 Location (breadcrumbs)
- 3.1.2 Language of Parts (multilingual)

---

## 3. Compliance Matrix by Component

### 3.1 Global

| Requirement          | Implementation                               | Criterion |
| -------------------- | -------------------------------------------- | --------- |
| Skip to content link | First focusable element in DOM               | 2.4.1     |
| Page language        | `<html lang="en                              | ar        | fr">` | 3.1.1 |
| Language switching   | `hreflang` + visible switcher                | 3.1.2     |
| Focus visible        | 2px ring, 2px offset, high contrast          | 2.4.11    |
| No keyboard traps    | Tab through all interactive elements         | 2.1.2     |
| Reduced motion       | `prefers-reduced-motion` disables animations | 2.3.3     |
| Document title       | Unique per page                              | 2.4.2     |
| Landmark regions     | `<header>`, `<nav>`, `<main>`, `<footer>`    | 1.3.1     |

### 3.2 Navigation

| Requirement         | Implementation                               | Criterion |
| ------------------- | -------------------------------------------- | --------- |
| Keyboard accessible | Tab + Enter + Escape                         | 2.1.1     |
| Mega menu           | Arrow keys navigate; Escape closes           | 2.1.1     |
| Mobile menu         | Focus trap while open; return focus on close | 2.4.3     |
| Current page        | `aria-current="page"` on active nav item     | 4.1.2     |
| Menu button         | `aria-expanded`, `aria-controls`             | 4.1.2     |

### 3.3 Typography & Color

| Requirement         | Implementation                                  | Criterion |
| ------------------- | ----------------------------------------------- | --------- |
| Body text contrast  | ≥ 4.5:1 (target 7:1)                            | 1.4.3     |
| Large text contrast | ≥ 3:1                                           | 1.4.3     |
| Link identification | Underline + color (not color alone)             | 1.4.1     |
| No color-only info  | Icons/text accompany color indicators           | 1.4.1     |
| Text resize         | Readable at 200% zoom without horizontal scroll | 1.4.4     |
| Line height         | ≥ 1.5× font size for body                       | 1.4.12    |

### 3.4 Images & Media

| Requirement       | Implementation                                  | Criterion |
| ----------------- | ----------------------------------------------- | --------- |
| Alt text          | Descriptive, required in CMS                    | 1.1.1     |
| Decorative images | `alt=""` or `role="presentation"`               | 1.1.1     |
| Video             | Captions/subtitles; pause control               | 1.2.2     |
| Hero video        | No autoplay with sound; `muted` + `playsinline` | 1.4.2     |
| Image text        | Avoid; if used, provide text alternative        | 1.4.5     |

### 3.5 Forms

| Requirement          | Implementation                                     | Criterion    |
| -------------------- | -------------------------------------------------- | ------------ |
| Labels               | Visible `<label>` for every input                  | 1.3.1, 3.3.2 |
| Error identification | Inline error + `aria-invalid` + `aria-describedby` | 3.3.1        |
| Error suggestions    | Specific messages ("Email is required")            | 3.3.3        |
| Required fields      | Visual indicator + `aria-required`                 | 3.3.2        |
| Autocomplete         | `autocomplete` attributes on personal fields       | 1.3.5        |
| Touch targets        | ≥ 44×44px on mobile                                | 2.5.8        |
| Focus order          | Logical tab sequence                               | 2.4.3        |

### 3.6 Interactive Components

| Component         | A11y Pattern                                             |
| ----------------- | -------------------------------------------------------- |
| Accordion         | `button` trigger, `aria-expanded`, `aria-controls`       |
| Carousel          | Pause button, `aria-live="polite"`, keyboard arrows      |
| Modal             | Focus trap, `role="dialog"`, `aria-modal`, Escape closes |
| Tabs              | `role="tablist"`, arrow key navigation                   |
| Toast             | `role="status"`, `aria-live="polite"`                    |
| Dark mode toggle  | `aria-label="Switch to dark mode"`                       |
| Language switcher | `aria-label="Select language"`                           |
| WhatsApp FAB      | `aria-label="Contact us on WhatsApp"`                    |

### 3.7 RTL (Arabic) Accessibility

| Requirement    | Implementation                        |
| -------------- | ------------------------------------- |
| Text direction | `dir="rtl"` on Arabic pages           |
| Reading order  | DOM order matches visual order in RTL |
| Icons          | Directional icons mirrored (arrows)   |
| Form layout    | Labels right-aligned                  |
| Screen reader  | NVDA/JAWS tested with Arabic voice    |

---

## 4. Testing Plan

### 4.1 Automated Testing

| Tool                     | Scope           | Frequency         |
| ------------------------ | --------------- | ----------------- |
| axe-core                 | All pages       | Every PR (CI)     |
| Lighthouse Accessibility | Key pages       | Every deploy      |
| eslint-plugin-jsx-a11y   | All components  | Every commit      |
| pa11y                    | Full site crawl | Weekly on staging |

**CI gate:** Zero critical/serious axe violations to merge.

### 4.2 Manual Testing

| Test                      | Tool                     | Frequency         |
| ------------------------- | ------------------------ | ----------------- |
| Keyboard-only navigation  | Manual                   | Per sprint        |
| Screen reader (NVDA)      | Windows                  | Per release       |
| Screen reader (VoiceOver) | macOS/iOS                | Per release       |
| Screen reader (Arabic)    | NVDA + Arabic            | Before AR launch  |
| 200% zoom                 | Browser                  | Per release       |
| Color contrast            | Stark / Contrast Checker | Per design change |
| Mobile touch targets      | Manual + automated       | Per sprint        |

### 4.3 User Testing

| Session        | Participants                  | Focus           |
| -------------- | ----------------------------- | --------------- |
| Pre-launch     | 2 parents (1 with disability) | Full journey    |
| Post-launch M1 | 3 parents (1 Arabic speaker)  | AR site + forms |
| Quarterly      | 1 accessibility consultant    | Audit review    |

---

## 5. Accessibility Statement Page

Publish at `/accessibility` with:

- Conformance target (WCAG 2.2 AA)
- Known limitations
- Feedback contact (accessibility@aisdoha.net)
- Last reviewed date
- Compatibility statement (browsers, assistive tech)

---

## 6. Remediation Priority

| Priority | Item                                       | Sprint |
| -------- | ------------------------------------------ | ------ |
| P0       | Color contrast (all text/background pairs) | S1     |
| P0       | Skip navigation                            | S1     |
| P0       | Semantic HTML landmarks                    | S1     |
| P0       | Form labels + error handling               | S4     |
| P0       | Keyboard navigation                        | S1–S4  |
| P0       | Touch target sizes                         | S1     |
| P0       | Alt text in CMS (required field)           | S5     |
| P1       | Video captions                             | S2     |
| P1       | Carousel accessibility                     | S2     |
| P1       | Arabic screen reader testing               | S5     |
| P1       | Accessibility statement page               | S5     |
| P2       | AAA contrast on body text                  | S8     |
| P2       | Sign language video (principal message)    | S10    |

---

## 7. Target Scores

| Metric                    | Current | Target |
| ------------------------- | ------- | ------ |
| Lighthouse Accessibility  | ~40     | ≥ 95   |
| axe violations (critical) | 10+     | 0      |
| axe violations (serious)  | 20+     | 0      |
| Keyboard navigable        | 30%     | 100%   |
| Screen reader compatible  | No      | Yes    |
| WCAG 2.2 AA               | Fail    | Pass   |
