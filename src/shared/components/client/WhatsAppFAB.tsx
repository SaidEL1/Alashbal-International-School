"use client";

import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type WhatsAppFABProps = {
  className?: string;
};

export function WhatsAppFAB({ className }: WhatsAppFABProps): React.JSX.Element {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "97444507882";
  const href = `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent("Hello AIS Doha, I would like to inquire about admissions.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevation4 transition-transform duration-fast hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
      <span className="sr-only">{siteConfig.name} WhatsApp</span>
    </a>
  );
}
