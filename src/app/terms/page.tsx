import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/shared/LegalLayout";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Golden Horizon Asset Recovery website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="Draft — pending legal review">
      <LegalSection heading="Acceptance of Terms">
        <p>
          By accessing or using this website, you agree to these Terms of Use. If
          you do not agree, please do not use this website.
        </p>
      </LegalSection>

      <LegalSection heading="No Guarantee of Results">
        <p>
          {siteConfig.name} researches publicly available and other lawfully
          accessible information to identify potential unclaimed and surplus
          funds. Nothing on this website is a guarantee that funds exist, that
          you are entitled to any funds, or that any claim will be approved or
          paid. Claim eligibility and payment decisions are made solely by the
          applicable court, agency, trustee, county, government office, or other
          holder of funds.
        </p>
      </LegalSection>

      <LegalSection heading="Not Legal Advice">
        <p>
          {siteConfig.name} is not a law firm and does not provide legal advice
          or legal representation. Information on this website is provided for
          general informational purposes only. Consult an appropriately licensed
          attorney for advice specific to your situation.
        </p>
      </LegalSection>

      <LegalSection heading="Not a Government Agency">
        <p>
          {siteConfig.name} is a private company. We are not a government agency
          and do not act on behalf of any court, county, trustee, or government
          office.
        </p>
      </LegalSection>

      <LegalSection heading="Website Use">
        <p>
          You agree to use this website only for lawful purposes and to provide
          accurate information when submitting a form. You agree not to misuse
          this website, attempt to gain unauthorized access to it, or use it in a
          way that could damage or impair its operation.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          The content, design, and branding of this website are the property of{" "}
          {siteConfig.name} unless otherwise noted, and may not be copied or
          reproduced without permission.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          This website and its content are provided &ldquo;as is&rdquo; without
          warranties of any kind. To the fullest extent permitted by law,{" "}
          {siteConfig.name} is not liable for any damages arising from your use
          of this website or reliance on its content.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these Terms of Use from time to time. Continued use of
          this website after changes are posted constitutes acceptance of the
          updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          Questions about these Terms of Use can be directed to us using the
          information on our{" "}
          <a href="/contact" className="text-navy underline underline-offset-2 hover:text-gold">
            Contact page
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
