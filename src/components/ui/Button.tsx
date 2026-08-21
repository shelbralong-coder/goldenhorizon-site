import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outlineLight";
  size?: "md" | "lg";
  className?: string;
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium transition-colors duration-150";

const variants = {
  primary:
    "bg-navy text-white hover:bg-navy-light border border-navy",
  secondary:
    "bg-transparent text-navy border border-navy/25 hover:border-navy",
  ghost:
    "bg-transparent text-gold border border-gold/40 hover:border-gold hover:bg-gold/5",
  outlineLight:
    "bg-transparent text-white border border-white/30 hover:border-white",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[0.95rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
