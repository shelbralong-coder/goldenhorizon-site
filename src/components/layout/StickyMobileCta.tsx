"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname?.startsWith("/claim-review")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-4 py-3 lg:hidden">
      <Button href={siteConfig.primaryCtaHref} className="w-full">
        {siteConfig.primaryCta}
      </Button>
    </div>
  );
}
