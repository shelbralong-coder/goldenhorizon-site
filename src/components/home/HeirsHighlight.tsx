import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const researchAreas = [
  "Death records and obituaries",
  "Probate and estate proceedings",
  "Surviving spouses, children, and other potential heirs",
  "Personal representatives, executors, and administrators",
  "Property and business ownership history",
  "Family relationships found in public records",
];

export function HeirsHighlight() {
  return (
    <Section tone="navy">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Heirs &amp; Estates"
            title="The original claimant may be deceased. The claim may still matter."
            tone="light"
            description="When the person named on a record has passed away, a potential claim can often still be pursued by the estate or by legally entitled heirs — though it typically requires additional documentation."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/claim-review" variant="ghost">
              Request an Heir Claim Review
            </Button>
            <Button href="/heirs-estates" variant="outlineLight">
              More on Heirs &amp; Estates
            </Button>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-wide text-white/50">
            Golden Horizon may research
          </p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <li key={area} className="flex gap-3 border-t border-white/15 pt-4 text-sm leading-relaxed text-white/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-white/50">
            Identifying a relative does not, by itself, establish legal entitlement
            to any funds.
          </p>
        </div>
      </div>
    </Section>
  );
}
