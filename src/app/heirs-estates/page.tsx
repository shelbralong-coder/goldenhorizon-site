import type { Metadata } from "next";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import heirsPhoto from "@/assets/sections/heirs-of-estate.png";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Heirs & Estates",
  description:
    "When the original claimant is deceased, a potential claim may still be pursued by the estate or by legally entitled heirs. Golden Horizon researches death records, probate filings, and heirship documentation.",
  alternates: { canonical: "/heirs-estates" },
};

const researchAreas = [
  "Death records and obituaries",
  "Probate and estate court filings",
  "Personal representatives, executors, and administrators of record",
  "Surviving spouses, children, and other potential heirs",
  "Property and business ownership tied to the deceased individual",
  "Family relationships established through public records",
];

const scenarios = [
  {
    title: "A single, clear heir",
    body: "In some cases, one surviving spouse or child is the clear next of kin, and the documentation required is relatively straightforward.",
  },
  {
    title: "Multiple heirs",
    body: "When several children, siblings, or other relatives may share an interest, most jurisdictions require the claim to reflect all of their interests — not just the person we first identified.",
  },
  {
    title: "An open or unresolved estate",
    body: "If probate was never opened, or an estate is still being administered, additional steps — such as opening probate or filing a small-estate affidavit — may be required before a claim can proceed.",
  },
  {
    title: "No formal probate on record",
    body: "Many states offer simplified procedures for smaller estates. Golden Horizon researches which procedures may apply based on the jurisdiction and the facts of the case.",
  },
];

export default function HeirsEstatesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-navy py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <Image
            src={heirsPhoto}
            alt=""
            fill
            priority
            className="object-cover object-right"
          />
        </div>
        <Container className="relative">
          <div className="max-w-xl lg:max-w-md">
            <p className="eyebrow mb-4">Heirs &amp; Estates</p>
            <h1 className="text-3xl leading-tight text-white sm:text-4xl">
              The original claimant may be deceased. The claim may still matter.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              A deceased claimant doesn&rsquo;t erase a potential claim — but it does
              typically create additional research and documentation requirements.
              Golden Horizon works through that process carefully, and explains it in
              plain language along the way.
            </p>
            <div className="mt-8">
              <Button href="/claim-review" variant="ghost">
                Request an Heir Claim Review
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHeading eyebrow="Our Research" title="What Golden Horizon may research" />
        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <li key={area} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              <CircleCheck size={18} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Common Situations"
          title="Every family situation is a little different"
          description="Here are a few of the situations that commonly come up. Which one applies to you depends on the specific facts of your case and your state's requirements."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {scenarios.map((s) => (
            <div key={s.title} className="rounded-sm border border-line bg-white p-7">
              <h3 className="text-base text-navy">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" narrow>
        <div className="rounded-sm border border-line bg-offwhite p-8">
          <p className="text-sm leading-relaxed text-charcoal/80 sm:text-base">
            Identifying a possible relative of the person named on a record does not,
            by itself, establish that person&rsquo;s legal entitlement to any funds.
            Entitlement is determined through the applicable probate, estate, or
            claims process — not by Golden Horizon.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Handling a deceased relative's claim?"
        description="We'll walk you through what documentation may be needed and what the process looks like for your situation."
        ctaLabel="Request an Heir Claim Review"
      />
    </>
  );
}
