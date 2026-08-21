import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/shared/LegalLayout";
import { disclaimerShort, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Website Disclaimer",
  description: "Important disclaimers regarding the Golden Horizon Asset Recovery website and the services it describes.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Website Disclaimer" updated="Draft — pending legal review">
      <LegalSection heading="General Disclaimer">
        <p>{disclaimerShort}</p>
      </LegalSection>

      <LegalSection heading="Not a Guarantee">
        <p>
          References on this website to &ldquo;potential funds,&rdquo;
          &ldquo;possible surplus proceeds,&rdquo; or similar language describe
          the subject matter of our research — not a confirmed entitlement.
          Whether funds exist, and whether a particular individual, estate, or
          business is entitled to them, can only be determined through the
          applicable claims process.
        </p>
      </LegalSection>

      <LegalSection heading="Jurisdiction Varies">
        <p>
          Requirements, procedures, fees, assignments, and recovery laws related
          to foreclosure surplus funds, tax sale excess proceeds, bankruptcy
          unclaimed funds, and related matters vary by state and by county. Not
          every service described on this website is available in every
          jurisdiction, and descriptions on this website are general in nature.
        </p>
      </LegalSection>

      <LegalSection heading="Not Legal or Financial Advice">
        <p>
          {siteConfig.name} is not a law firm and does not provide legal advice.
          Nothing on this website should be construed as legal, tax, or financial
          advice. Consult appropriately licensed professionals for advice
          specific to your situation.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Information">
        <p>
          This website may reference or rely on publicly available third-party
          records, such as court, county, and government records. We do not
          control the accuracy of third-party records and are not responsible
          for errors contained in them.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
