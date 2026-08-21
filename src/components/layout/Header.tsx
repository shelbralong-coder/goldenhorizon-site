"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="focus-ring" aria-label={siteConfig.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring text-sm font-medium text-charcoal/80 transition-colors hover:text-navy",
                pathname === link.href && "text-navy"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.primaryCtaHref} size="md">
            {siteConfig.primaryCta}
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring -mr-2 inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring border-b border-line/70 py-3.5 text-base font-medium text-charcoal/85",
                  pathname === link.href && "text-navy"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-5">
              <Button href={siteConfig.primaryCtaHref} className="w-full">
                {siteConfig.primaryCta}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
