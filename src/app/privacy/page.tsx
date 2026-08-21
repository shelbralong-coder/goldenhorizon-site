import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/shared/LegalLayout";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Golden Horizon Asset Recovery collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="Draft — pending legal review">
      <LegalSection heading="Overview">
        <p>
          This Privacy Policy explains how {siteConfig.name} (&ldquo;Golden
          Horizon,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and
          protects information submitted through this website, including through
          our Claim Review form and Contact form.
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <p>Through this website, we may collect information you voluntarily provide, such as:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Contact information (name, phone number, email address)</li>
          <li>Claim-related details (state, county, claim type, property address, case number, name appearing on a record, approximate amount)</li>
          <li>Heir and relationship information, when applicable</li>
          <li>Any additional information you choose to share in a form field</li>
        </ul>
        <p>
          We do not request a full Social Security number, banking passwords,
          online banking credentials, or payment information through our general
          website forms.
        </p>
        <p>
          We may also automatically collect limited technical information (such
          as browser type and general usage data) through standard website
          analytics, where enabled.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Information">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>To review and respond to your inquiry or claim review request</li>
          <li>To research publicly available records relevant to your potential claim</li>
          <li>To contact you by phone, text, email, or mail regarding your inquiry</li>
          <li>To maintain internal records of client communications</li>
          <li>To comply with applicable legal and regulatory obligations</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How We Share Information">
        <p>
          We do not sell the personal information submitted through this website.
          We may share information with service providers who help us operate
          this website or process inquiries (such as form-processing or hosting
          providers), and with attorneys or other professionals involved in
          researching or pursuing a claim on your behalf, where applicable. We
          may also disclose information where required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          We retain information submitted through this website for as long as
          reasonably necessary to respond to your inquiry, pursue a potential
          claim on your behalf, and comply with our legal and recordkeeping
          obligations.
        </p>
      </LegalSection>

      <LegalSection heading="Your Choices">
        <p>
          You may contact us at any time to ask what information we hold about
          you, to request corrections, or to withdraw consent to be contacted.
          Reply STOP to any text message to opt out of SMS communications.
        </p>
      </LegalSection>

      <LegalSection heading="Security">
        <p>
          We use reasonable administrative and technical safeguards designed to
          protect the information submitted through this website. No method of
          transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          Questions about this Privacy Policy can be directed to us using the
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
