/** @type {import('@lhci/cli').Config} */
module.exports = {
  ci: {
    collect: {
      url: ["http://127.0.0.1:3000/en", "http://127.0.0.1:3000/en/about"],
      startServerCommand: "pnpm start",
      startServerReadyPattern: "Ready",
      startServerReadyTimeout: 60000,
      numberOfRuns: 1,
      settings: {
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        formFactor: "mobile",
        screenEmulation: { mobile: true, width: 375, height: 667, deviceScaleFactor: 2 },
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "total-blocking-time": ["warn", { maxNumericValue: 200 }],
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.05 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
