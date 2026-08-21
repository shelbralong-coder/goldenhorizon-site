import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Why We Contacted You",
  description:
    "Golden Horizon researches public records to identify potential claimants connected to unclaimed or surplus funds. Here's why you may have received a letter, call, text, or email from us.",
  alternates: { canonical: "/why-we-contacted-you" },
};

const reasons = [
  {
    title: "You appear as a former property owner",
    body: "Your name may be associated with a property involved in a foreclosure or tax sale.",
  },
  {
    title: "You were a party to a legal proceeding",
    body: "You may be named as a defendant, creditor, or claimant in a court or bankruptcy case.",
  },
  {
    title: "A relative's record led us to you",
    body: "The person named on a record may be deceased, and public records suggest you may be a surviving spouse, child, or other relative.",
  },
  {
    title: "You're connected to a business or LLC",
    body: "You may be an officer, member, owner, or successor of an entity associated with a potential claim.",
  },
];

const notMeanSteps = [
  "It does not mean funds are guaranteed to exist.",
  "It does not mean you are automatically entitled to anything.",
  "It does not mean you are obligated to work with Golden Horizon.",
  "It does not mean the amount, if any, has been determined.",
];

export default function WhyWeContactedYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title="Why did Golden Horizon contact me?"
        description="If you received a letter, call, text, or email from us, it's because our research turned up a potential connection between you and a record involving unclaimed or surplus funds."
      />

      <Section tone="white">
        <SectionHeading eyebrow="How This Happens" title="A few common reasons you may have heard from us" />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="border-t border-line pt-6">
              <h3 className="text-base text-navy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="offwhite" narrow>
        <SectionHeading eyebrow="Important" title="What being contacted does not mean" />
        <ul className="mt-8 space-y-4">
          {notMeanSteps.map((step) => (
            <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {step}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          The only way to know whether a potential claim applies to you is to go
          through a proper review. That&rsquo;s what the next step is for.
        </p>
      </Section>

      <CtaBanner
        title="Find out what our research found"
        description="Start a no-obligation claim review and we'll explain exactly what led us to contact you."
      />
    </>
  );
}
