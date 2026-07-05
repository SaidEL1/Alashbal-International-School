"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/ui/button";

export function DarkModeToggle(): React.JSX.Element {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-hidden className="pointer-events-none opacity-0">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("toggleTheme")}
      aria-pressed={isDark}
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
    </Button>
  );
}
