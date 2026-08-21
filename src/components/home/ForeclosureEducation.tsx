import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ForeclosureEducation() {
  return (
    <Section tone="offwhite">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Understanding Surplus Funds"
          title="What can happen after a foreclosure sale"
          description="When a property is sold at foreclosure auction, the proceeds are applied first to the debts and costs the law requires. What remains — if anything — can potentially belong to someone else."
        />

        <div className="space-y-6 text-sm leading-relaxed text-charcoal/80 sm:text-base">
          <p>
            Sale proceeds are generally applied, according to applicable law and
            court procedure, to the outstanding loan balance, unpaid taxes, and other
            authorized liens and costs tied to the property.
          </p>
          <p>
            In some cases, the sale price exceeds those obligations, leaving funds
            remaining. Those remaining funds may potentially belong to the former
            owner of record, or to another legally entitled party.
          </p>
          <p className="rounded-sm border border-line bg-white p-6">
            A property&rsquo;s assessed value is not the same as its final auction
            sale price. Whether a surplus exists — and how much — can&rsquo;t be
            determined until the sale actually occurs and the applicable obligations
            are calculated.
          </p>
          <div className="pt-2">
            <Button href="/services/foreclosure-surplus" variant="secondary">
              Learn About Foreclosure Surplus
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
