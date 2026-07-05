# Alashbal International School — Digital Product Documentation

**Version:** 2.0  
**Date:** July 5, 2026  
**Status:** Pre-Implementation — Awaiting MPS-0 Approval  
**Authors:** Principal Software Architect · Product Director · Creative Director · Design System Architect · DevOps Lead · QA Lead · Technical Program Manager

---

## ⭐ Master Document

### → [MASTER PRODUCT SPECIFICATION (MPS)](./MASTER_PRODUCT_SPECIFICATION.md)

**This is the single source of truth for the entire project.**  
All implementation must follow the MPS. Supporting documents (01–15) are appendices.

### → [FINAL IMPLEMENTATION BLUEPRINT (FIB)](./FINAL_IMPLEMENTATION_BLUEPRINT.md)

**This is the execution manual for the engineering team.**  
UI blueprints per page, component tree, coding standards, sprint plan, DoR/DoD, daily workflow.

**⛔ NO CODE until Gate MPS-0 + FIB-0 + G7 are approved.**

---

## Purpose

This documentation package specifies the rebuild of **Alashbal International School** (`aisdoha.net`) into a **world-class international school platform** for Qatar and the GCC — comparable to Stripe, Vercel, and top global school networks.

## Document Index

| #       | Document                                                                  | Description                                    | Status                 |
| ------- | ------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------- |
| **MPS** | **[Master Product Specification](./MASTER_PRODUCT_SPECIFICATION.md)**     | **Single source of truth (20 sections)**       | **DRAFT**              |
| **FIB** | **[Final Implementation Blueprint](./FINAL_IMPLEMENTATION_BLUEPRINT.md)** | **Engineering execution manual (10 sections)** | **DRAFT**              |
| 01      | [Competitive Analysis](./01-competitive-analysis.md)                      | Benchmark of 8 premium international schools   | Appendix A             |
| 02      | [SEO Audit & Strategy](./02-seo-strategy.md)                              | Current-state audit + 12-month SEO roadmap     | Appendix B             |
| 03      | [UX Personas & Journey Maps](./03-ux-personas-journeys.md)                | 6 personas + 4 journey maps                    | Appendix C             |
| 04      | [Design System](./04-design-system.md)                                    | Visual and component specification (v1)        | Superseded by MPS §3–4 |
| 05      | [Information Architecture](./05-information-architecture.md)              | Sitemap, navigation, URL taxonomy              | Appendix D             |
| 06      | [Content Strategy](./06-content-strategy.md)                              | Voice, tone, page-level content plan           | Appendix E             |
| 07      | [Feature Prioritization](./07-feature-prioritization.md)                  | MoSCoW matrix with release mapping             | Appendix F             |
| 08      | [Technical Architecture](./08-technical-architecture.md)                  | System diagrams, stack, integrations           | Superseded by MPS §8–9 |
| 09      | [Database Design](./09-database-design.md)                                | ERD, entities, relationships                   | Appendix G             |
| 10      | [CMS Strategy](./10-cms-strategy.md)                                      | Content management approach                    | Superseded by MPS §8.6 |
| 11      | [Security](./11-security.md)                                              | Threat model, controls, compliance             | Superseded by MPS §12  |
| 12      | [Accessibility](./12-accessibility.md)                                    | WCAG 2.2 AA audit + remediation plan           | Superseded by MPS §6.3 |
| 13      | [Performance](./13-performance.md)                                        | Lighthouse strategy and budgets                | Superseded by MPS §14  |
| 14      | [Implementation Roadmap](./14-implementation-roadmap.md)                  | Milestones, sprints, team structure            | Appendix H             |
| 15      | [Risks & Scalability](./15-risks-scalability.md)                          | Assumptions, dependencies, future growth       | Appendix I             |

## Approval Gates

| Gate      | Requirement                                  | Sign-off                          |
| --------- | -------------------------------------------- | --------------------------------- |
| **MPS-0** | **Master Product Specification approved**    | **School Leadership + Tech Lead** |
| **FIB-0** | **Final Implementation Blueprint approved**  | **Tech Lead + PO**                |
| G1        | Brand Book + Design Tokens + Figma Blueprint | Creative Director + PO            |
| G2        | Design System + Motion approved              | Design Lead + Tech Lead           |
| G3        | UX + Content Design approved                 | Product Director + PO             |
| G4        | Technical Architecture + API + DB approved   | Principal Architect               |
| G5        | Security + Testing + DevOps approved         | Security Lead + QA Lead           |
| G6        | Analytics + Performance approved             | Product Director + DevOps         |
| G7        | Sprint 0 kickoff (scaffolding only)          | Tech Lead + PO                    |
| G8        | MVP launch (public site)                     | All stakeholders                  |
| G9        | Full platform launch (V2.0)                  | All stakeholders                  |

## Quick Reference — Target Stack

| Layer     | Technology                    |
| --------- | ----------------------------- |
| Framework | Next.js 15 (App Router)       |
| Language  | TypeScript                    |
| Styling   | Tailwind CSS + Shadcn UI      |
| Animation | Framer Motion                 |
| i18n      | next-intl (EN / AR / FR)      |
| Forms     | React Hook Form + Zod         |
| ORM       | Prisma                        |
| Database  | PostgreSQL                    |
| Auth      | NextAuth.js v5                |
| Media     | Cloudinary                    |
| Hosting   | Vercel                        |
| Analytics | Vercel Analytics + GA4        |
| Search    | Algolia or built-in full-text |

## Contact

- **School:** Alashbal International School, Old Airport Area, E-ring Road, Doha, Qatar
- **Email:** info@aisdoha.net
- **Phone:** +974 4450 7882
