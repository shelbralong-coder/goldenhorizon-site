import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Golden Horizon researches potential asset recovery claims — from identifying potential funds to the applicable court, county, or agency process that determines eligibility.",
  alternates: { canonical: "/how-it-works" },
};

const faqLike = [
  {
    q: "Who decides if a claim is approved?",
    a: "Not Golden Horizon. The applicable court, county, trustee, agency, or other holder of the funds makes that determination, based on the process and documentation required for that specific matter.",
  },
  {
    q: "Does every case involve all four steps?",
    a: "Generally, yes — though the amount of research and documentation required at each step varies significantly depending on the type of claim, the jurisdiction, and whether heirs or an estate are involved.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A clear, four-step research process"
        description="We can't control how a court or agency ultimately rules on a claim — but we can be transparent about how we research and support one."
      />

      <Section tone="white">
        <ProcessSteps />
      </Section>

      <Section tone="offwhite" narrow>
        <SectionHeading eyebrow="Good to Know" title="A few things worth understanding up front" />
        <div className="mt-10 space-y-8">
          {faqLike.map((item) => (
            <div key={item.q} className="border-t border-line pt-6">
              <p className="text-base font-medium text-navy">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/faq" variant="secondary">
            Read the Full FAQ
          </Button>
        </div>
      </Section>

      <CtaBanner
        title="Ready to see what we found?"
        description="Start a no-obligation claim review and we'll walk you through what the research showed."
      />
    </>
  );
}
