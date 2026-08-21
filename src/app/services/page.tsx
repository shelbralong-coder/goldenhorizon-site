import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { ServicesGrid } from "@/components/shared/ServicesGrid";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Golden Horizon researches foreclosure surplus funds, tax sale excess proceeds, bankruptcy unclaimed funds, heir and estate claims, and business or LLC asset recovery.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Asset recovery and claim research services"
        description="Golden Horizon researches several categories of potential unclaimed and surplus funds. Not every service is available in every state — requirements, procedures, and recovery laws vary by jurisdiction."
      />

      <Section tone="white">
        <ServicesGrid />
      </Section>

      <CtaBanner
        title="Not sure which category applies to you?"
        description="Start a claim review and we'll help identify what, if anything, may apply to your situation."
      />
    </>
  );
}
