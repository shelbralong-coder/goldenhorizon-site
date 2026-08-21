import Image from "next/image";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import consumerProtectionPhoto from "@/assets/sections/consumer-protection.png";

const watchFor = [
  {
    title: "Claims to represent a court, county, or government office",
    detail:
      "A private research company does not act on behalf of a court, county, trustee, or government agency. If a company implies otherwise, treat that as a red flag.",
  },
  {
    title: "Fees that aren't in writing",
    detail:
      "You have the right to know exactly what you would be charged, and when, before you agree to anything. A verbal promise isn't enough.",
  },
  {
    title: "Pressure to sign quickly",
    detail:
      "A legitimate claim doesn't usually require an immediate decision. Take the time you need to review any agreement, including with an attorney if you'd like.",
  },
  {
    title: "Requests for sensitive information up front",
    detail:
      "Be cautious of anyone asking for your full Social Security number, banking passwords, or online credentials before explaining, in writing, what they're doing and why.",
  },
];

const protectYourself = [
  "Verify who you're speaking with, including their company name and how to reach them directly.",
  "Ask for the fee arrangement in writing before signing anything.",
  "Ask what specific service is being provided in exchange for any fee.",
  "Confirm the company is not claiming to be, or acting on behalf of, a government agency.",
  "If anything feels unclear or rushed, consult a licensed attorney before proceeding.",
];

export function ConsumerProtection() {
  return (
    <div>
      <div className="relative mb-14 h-56 w-full overflow-hidden rounded-sm border border-line sm:h-72">
        <Image src={consumerProtectionPhoto} alt="" fill className="object-cover object-right" />
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 text-navy">
            <ShieldAlert size={20} className="text-gold" strokeWidth={1.5} />
            <p className="eyebrow text-navy/60">Things to watch for</p>
          </div>
          <ul className="space-y-6">
            {watchFor.map((item) => (
              <li key={item.title} className="border-l border-gold/40 pl-5">
                <p className="text-base font-medium text-navy">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-6 inline-flex items-center gap-2 text-navy">
            <ShieldCheck size={20} className="text-gold" strokeWidth={1.5} />
            <p className="eyebrow text-navy/60">How to protect yourself</p>
          </div>
          <ul className="space-y-4">
            {protectYourself.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-sm border border-line bg-offwhite p-6">
            <p className="text-sm leading-relaxed text-charcoal/80">
              Golden Horizon Asset Recovery is a private company. We are not a government
              agency. We are not a law firm, and we do not provide legal advice — we work
              with a team of attorneys, and where legal advice or representation is
              needed, we encourage you to consult an appropriately licensed attorney.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
