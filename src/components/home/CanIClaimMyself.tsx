import { Section, SectionHeading } from "@/components/ui/Section";

const reasonsForHelp = [
  "You don't know where the funds are being held.",
  "The claim process or required forms aren't clear.",
  "Records are difficult to locate or interpret.",
  "The original owner or claimant has passed away.",
  "Multiple heirs may be involved.",
  "Probate or estate records need to be researched.",
  "Documentation is incomplete or hard to obtain.",
  "An older court case needs to be located.",
  "A business or LLC ownership history is involved.",
  "You simply don't have the time to research the process.",
];

export function CanIClaimMyself() {
  return (
    <Section tone="white" narrow>
      <SectionHeading eyebrow="Transparency" title="Can I claim these funds myself?" />
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-charcoal/80 sm:text-base">
        <p>
          Often, yes. Depending on the jurisdiction and the circumstances, you may be
          able to research and pursue a potential claim directly, without hiring an
          asset-recovery company.
        </p>
        <p>
          Some people choose to work with a company like Golden Horizon anyway, for
          reasons like these:
        </p>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {reasonsForHelp.map((reason) => (
          <li key={reason} className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed text-charcoal/80">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {reason}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-muted">
        Choosing to research and file a claim on your own is a completely reasonable
        option, and nothing here is meant to discourage it.
      </p>
    </Section>
  );
}
