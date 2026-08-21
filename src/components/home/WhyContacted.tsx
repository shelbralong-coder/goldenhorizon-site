import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const reasons = [
  "A former property owner in a foreclosure or tax sale record",
  "A defendant or party named in a foreclosure case",
  "A creditor or claimant in a bankruptcy proceeding",
  "A deceased individual, or an heir, relative, or estate connected to one",
  "An officer, member, or owner of a business or LLC",
  "Another potential owner or successor identified through public records",
];

export function WhyContacted() {
  return (
    <Section tone="white">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Start Here"
            title="Why did Golden Horizon contact me?"
            description="Public records may indicate that money or a property interest is associated with your name, in one of several ways."
          />
          <div className="mt-8">
            <Button href="/claim-review">Check My Claim</Button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed text-charcoal/80 sm:text-[0.95rem]">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {reason}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl rounded-sm border border-line bg-offwhite p-6 text-sm leading-relaxed text-charcoal/80">
            Being contacted does not automatically mean you are legally entitled to
            funds. Eligibility has to be verified through the applicable process
            before any recovery is possible.
          </p>
        </div>
      </div>
    </Section>
  );
}
