import { Compass, FileSearch2, MessageSquareText, Lock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const pillars = [
  {
    icon: FileSearch2,
    title: "Research-Driven",
    body: "We start with public records and documented evidence, not assumptions — and we tell you what we actually found.",
  },
  {
    icon: Compass,
    title: "Broader Scope",
    body: "Foreclosure surplus, tax sale proceeds, bankruptcy funds, heirs and estates, and business or LLC recovery — under one roof.",
  },
  {
    icon: MessageSquareText,
    title: "Plain-Language Communication",
    body: "We explain what we found and what the applicable process involves, without pressure or jargon.",
  },
  {
    icon: Lock,
    title: "Careful With Your Information",
    body: "We collect only what's needed for an initial review, and we handle it with the confidentiality a sensitive matter deserves.",
  },
];

export function WhyWorkWithUs() {
  return (
    <Section tone="offwhite">
      <SectionHeading eyebrow="Our Approach" title="Why work with Golden Horizon" align="center" />
      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="text-center sm:text-left">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 text-base text-navy">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
