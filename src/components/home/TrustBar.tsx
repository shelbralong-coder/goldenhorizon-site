import { FileSearch, ShieldCheck, Users2, Lock } from "lucide-react";

const items = [
  { icon: FileSearch, label: "No-Obligation Initial Claim Review" },
  { icon: ShieldCheck, label: "Clear, Transparent Process" },
  { icon: Users2, label: "Heir & Estate Research" },
  { icon: Lock, label: "Careful, Secure Information Handling" },
];

export function TrustBar() {
  return (
    <div className="border-b border-line bg-offwhite">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:px-8 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={20} className="shrink-0 text-gold" strokeWidth={1.5} />
            <span className="text-sm font-medium text-navy/85">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
