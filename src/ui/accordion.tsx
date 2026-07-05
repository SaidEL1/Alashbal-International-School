"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export function Accordion({
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>): React.JSX.Element {
  return <AccordionPrimitive.Root {...props} />;
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>): React.JSX.Element {
  return <AccordionPrimitive.Item className={cn("border-b border-border", className)} {...props} />;
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>): React.JSX.Element {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-start font-medium transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className="h-4 w-4 shrink-0 transition-transform duration-normal"
          aria-hidden
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>): React.JSX.Element {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0 text-muted-foreground", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
