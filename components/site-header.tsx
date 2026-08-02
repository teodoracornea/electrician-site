"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getPhoneLink, getWhatsAppLink, navLinks, siteConfig } from "@/lib/site-config";

export function SiteHeader({ hasLogoFile }: { hasLogoFile: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label={siteConfig.name}>
          <Logo hasLogoFile={hasLogoFile} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={getPhoneLink()}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.phone}
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[#25D366] text-white hover:bg-[#20bd5a]"
            )}
          >
            <WhatsAppIcon className="size-4" />
            Scrie pe WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getPhoneLink()}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
            >
              <PhoneCall className="size-4" />
              {siteConfig.phone}
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-2 w-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
              )}
            >
              <WhatsAppIcon className="size-4" />
              Scrie pe WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
