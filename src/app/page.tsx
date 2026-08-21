import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyContacted } from "@/components/home/WhyContacted";
import { ForeclosureEducation } from "@/components/home/ForeclosureEducation";
import { HeirsHighlight } from "@/components/home/HeirsHighlight";
import { CanIClaimMyself } from "@/components/home/CanIClaimMyself";
import { WhyWorkWithUs } from "@/components/home/WhyWorkWithUs";
import { Testimonials } from "@/components/shared/Testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ServicesGrid } from "@/components/shared/ServicesGrid";
import { ConsumerProtection } from "@/components/shared/ConsumerProtection";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ContactDetails } from "@/components/shared/ContactDetails";
import { Button } from "@/components/ui/Button";
import { faqGroups } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Asset Recovery & Unclaimed Funds Research",
  description:
    "Golden Horizon Asset Recovery researches potential foreclosure surplus funds, tax sale excess proceeds, bankruptcy unclaimed funds, and heir and business asset recovery claims. Start a no-obligation claim review.",
  alternates: { canonical: "/" },
};

const homepageFaqs = faqGroups.flatMap((g) => g.items).slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyContacted />

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="The Process"
          title="Simple, transparent research"
          description="We can't promise a particular outcome — but we can promise a clear, honest process from first contact to final determination."
          align="center"
        />
        <div className="mt-16">
          <ProcessSteps />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="What We Research"
          title="Types of funds we research"
          description="Golden Horizon looks into several categories of potential unclaimed and surplus funds. Availability and process depend on your state and situation."
          align="center"
        />
        <div className="mt-16">
          <ServicesGrid />
        </div>
      </Section>

      <ForeclosureEducation />
      <HeirsHighlight />
      <CanIClaimMyself />
      <WhyWorkWithUs />
      <Testimonials />

      <Section tone="white">
        <SectionHeading
          eyebrow="Consumer Protection"
          title="Protect yourself when considering asset recovery services"
          description="Not every company in this space operates the same way. Here's what to look for — including from us."
        />
        <div className="mt-14">
          <ConsumerProtection />
        </div>
      </Section>

      <Section tone="offwhite" narrow>
        <SectionHeading eyebrow="Common Questions" title="Frequently asked questions" />
        <div className="mt-12">
          <FaqAccordion items={homepageFaqs} />
        </div>
        <div className="mt-10">
          <Button href="/faq" variant="secondary">
            View All FAQs
          </Button>
        </div>
      </Section>

      <CtaBanner
        title="Start your no-obligation claim review"
        description="Tell us a bit about your situation. We'll review it and follow up to explain what we found and what, if anything, the next step might be."
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Have a question before you start?"
            description="Reach out directly and a member of our research team will get back to you."
          />
          <ContactDetails />
        </div>
      </Section>
    </>
  );
}
