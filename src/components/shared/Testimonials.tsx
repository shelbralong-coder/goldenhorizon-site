import { testimonials } from "@/content/testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section tone="offwhite">
      <SectionHeading eyebrow="Client Experiences" title="What clients say" align="center" />
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote key={t.attribution} className="rounded-sm border border-line bg-white p-8">
            <p className="text-sm leading-relaxed text-charcoal/85">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-5 text-xs font-medium uppercase tracking-wide text-muted">
              {t.attribution}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
