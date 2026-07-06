import { Inter, Fraunces, Noto_Naskh_Arabic, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { SiteShell } from "@/features/shell/components/SiteShell";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/shared/components/ThemeProvider";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const fontArabicDisplay = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic-display",
  weight: ["400", "600", "700"],
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams(): { locale: string }[] {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps): Promise<React.JSX.Element> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        fontDisplay.variable,
        fontArabic.variable,
        fontArabicDisplay.variable,
        isRtl && "font-arabic",
      )}
    >
      <body className={cn("flex min-h-screen flex-col", isRtl ? "font-arabic" : "font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <SiteShell>{children}</SiteShell>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
