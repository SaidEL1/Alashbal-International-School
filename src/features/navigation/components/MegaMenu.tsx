"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useTranslations } from "next-intl";

import { megaMenuItems, topLevelLinks } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function MegaMenu(): React.JSX.Element {
  const t = useTranslations();

  return (
    <NavigationMenu.Root className="relative z-10 hidden max-w-max flex-1 items-center justify-center lg:flex">
      <NavigationMenu.List className="flex flex-1 list-none items-center justify-center gap-1">
        {megaMenuItems.map((item) => (
          <NavigationMenu.Item key={item.labelKey}>
            <NavigationMenu.Trigger className="group inline-flex h-10 items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[state=open]:bg-accent/50">
              {t(item.labelKey)}
              <span
                className="relative top-px ms-1 transition duration-fast group-data-[state=open]:rotate-180"
                aria-hidden
              >
                ▾
              </span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div className={cn("p-4", item.columns?.length === 3 ? "w-[42rem]" : "w-[28rem]")}>
                <div
                  className={cn(
                    "grid gap-6",
                    item.columns?.length === 3 ? "grid-cols-3" : "grid-cols-2",
                  )}
                >
                  {item.columns?.map((column, columnIndex) => (
                    <ul key={columnIndex} className="space-y-2">
                      {column.items.map((link) => (
                        <li key={link.href}>
                          <NavigationMenu.Link asChild>
                            <Link
                              href={link.href}
                              className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              {t(link.labelKey)}
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}

        {topLevelLinks.map((link) => (
          <NavigationMenu.Item key={link.href}>
            <NavigationMenu.Link asChild>
              <Link
                href={link.href}
                className="inline-flex h-10 items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                {t(link.labelKey)}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <div className="absolute start-0 top-full flex justify-center">
        <NavigationMenu.Viewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-elevation3 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
}
