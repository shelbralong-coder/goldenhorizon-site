import Image from "next/image";
import { cn } from "@/lib/cn";
import logoSrc from "@/assets/branding/logo.png";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  const image = (
    <Image
      src={logoSrc}
      alt="Golden Horizon Asset Recovery"
      height={64}
      className="h-16 w-auto"
      priority
    />
  );

  if (!light) {
    return <span className={cn("inline-flex items-center", className)}>{image}</span>;
  }

  // The source logo has navy wordmark text, which disappears on the navy
  // footer/dark sections — so on dark backgrounds we set it on a small
  // white card instead of altering the artwork.
  return (
    <span className={cn("inline-flex items-center rounded-sm bg-white px-3 py-2", className)}>
      {image}
    </span>
  );
}
