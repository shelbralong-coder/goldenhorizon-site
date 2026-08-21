import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { faqGroups } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Golden Horizon Asset Recovery — why we contact people, our process, fees, heirs and estates, and how your information is protected.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const allItems = faqGroups.flatMap((g) => g.items);

  return (
    <>
      <FaqJsonLd items={allItems} />
      <PageHero
        eyebrow="Common Questions"
        title="Frequently asked questions"
        description="If you don't see your question answered here, reach out through our contact page."
      />

      {faqGroups.map((group, i) => (
        <Section key={group.category} tone={i % 2 === 0 ? "white" : "offwhite"} narrow>
          <p className="eyebrow mb-6">{group.category}</p>
          <FaqAccordion items={group.items} />
        </Section>
      ))}

      <CtaBanner title="Still have questions?" description="We're glad to talk through your specific situation." ctaLabel="Contact Us" ctaHref="/contact" />
    </>
  );
}
