/**
 * TanStack Query evaluation — Sprint 0
 *
 * Decision: adopt @tanstack/react-query v5 when client-side cached server state
 * is required (FIB §4.7 — Algolia global search, Sprint 7).
 *
 * Until then: Server Components + native fetch for SSR; no client cache library
 * to keep the Sprint 0 bundle minimal and tree-shakeable.
 */
export const DATA_FETCHING_STRATEGY = {
  adopted: "@tanstack/react-query",
  status: "deferred",
  installAt: "Sprint 7 — Global Search (Algolia integration)",
  serverDefault: "React Server Components + fetch",
  rationale:
    "TanStack Query fits Algolia/search caching and future parent-portal client state; not needed for static shell.",
} as const;

export type DataFetchingStrategy = typeof DATA_FETCHING_STRATEGY;
