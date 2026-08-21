import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  children,
  className,
  tone = "white",
  narrow = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "offwhite" | "navy";
  narrow?: boolean;
  id?: string;
}) {
  const toneClass =
    tone === "navy"
      ? "bg-navy text-white"
      : tone === "offwhite"
      ? "bg-offwhite text-charcoal"
      : "bg-white text-charcoal";

  return (
    <section id={id} className={cn("py-20 sm:py-28", toneClass, className)}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={cn(
          "text-3xl sm:text-4xl leading-tight",
          tone === "light" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            tone === "light" ? "text-white/75" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
