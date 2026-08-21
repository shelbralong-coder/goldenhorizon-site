import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CredentialsBar } from "@/components/shared/CredentialsBar";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FileSearch2, MessageSquareText, ShieldCheck, ScrollText } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Golden Horizon Asset Recovery is a research-driven asset recovery and claim research company. Learn about our approach to public-records research, transparency, and client communication.",
  alternates: { canonical: "/about" },
};

const standards = [
  {
    icon: FileSearch2,
    title: "Research-driven",
    body: "Every potential claim starts with public records and documented evidence — not assumptions.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent communication",
    body: "We explain what we found, what it means, and what happens next, in plain language.",
  },
  {
    icon: ShieldCheck,
    title: "Respect for privacy",
    body: "The people we work with are often navigating a sensitive situation. We treat their information, and their time, with care.",
  },
  {
    icon: ScrollText,
    title: "Professional standards",
    body: "We document our research and keep clients informed as a claim moves through the applicable process.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Golden Horizon"
        title="A research-driven approach to asset recovery"
        description="Golden Horizon Asset Recovery researches publicly available records to identify potential unclaimed and surplus funds, and helps individuals, families, heirs, and businesses understand the process for pursuing them."
      />

      <Section tone="white" narrow>
        <div className="space-y-6 text-sm leading-relaxed text-charcoal/85 sm:text-base">
          <p>
            Golden Horizon was built around a simple idea: the process for recovering
            unclaimed and surplus funds is often confusing, scattered across
            different courts, counties, and agencies, and genuinely hard for someone
            outside the industry to navigate on their own — especially while dealing
            with a foreclosure, a family loss, or the closing of a business.
          </p>
          <p>
            Our work centers on research: locating the public records connected to a
            potential claim, understanding what they show, and explaining that
            clearly to the people involved. Where a claim involves a deceased owner
            or multiple heirs, we take the additional time that kind of situation
            deserves.
          </p>
          <p>
            We are not a government agency, and we are not a law firm. We are a
            private research company, and we try to be plain about what that does —
            and doesn&rsquo;t — mean for you.
          </p>
        </div>
      </Section>

      <Section tone="offwhite">
        <SectionHeading eyebrow="Our Standards" title="How we approach the work" align="center" />
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map(({ icon: Icon, title, body }) => (
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

      {/*
        Optional: add a founder biography and photo here once available.
        Example:
        <Section tone="white" narrow>
          <SectionHeading eyebrow="Leadership" title="Meet the team" />
          ...
        </Section>
      */}

      <CredentialsBar />

      <CtaBanner
        title="Have questions about how we work?"
        description="Start a no-obligation claim review, or visit our FAQ for more detail on our process."
      />
    </>
  );
}
