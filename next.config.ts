import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const useStandaloneOutput =
  process.env.DOCKER_BUILD === "true" ||
  (process.env.CI === "true" && process.env.NETLIFY !== "true");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: useStandaloneOutput ? "standalone" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

const sentryEnabled = Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN);

const configWithPlugins = withNextIntl(withBundleAnalyzer(nextConfig));

export default sentryEnabled
  ? withSentryConfig(configWithPlugins, {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      silent: !process.env.CI,
      widenClientFileUpload: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    })
  : configWithPlugins;
