import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";

export function ContactDetails({ light = false }: { light?: boolean }) {
  const textClass = light ? "text-sm text-white/75" : "text-sm text-charcoal/80";
  const linkClass = light ? `${textClass} hover:text-gold` : `${textClass} hover:text-navy`;

  const rows: { icon: typeof Phone; content: React.ReactNode }[] = [
    {
      icon: Phone,
      content: (
        <a href={siteConfig.phoneHref} className={linkClass}>
          {siteConfig.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      content: (
        <a href={siteConfig.emailHref} className={linkClass}>
          {siteConfig.email}
        </a>
      ),
    },
    {
      icon: MapPin,
      content: <span className={textClass}>{siteConfig.addressLines.join(", ")}</span>,
    },
    {
      icon: Clock,
      content: <span className={textClass}>{siteConfig.hours}</span>,
    },
  ];

  return (
    <dl className="space-y-5">
      {rows.map(({ icon: Icon, content }, i) => (
        <div key={i} className="flex items-start gap-3.5">
          <Icon size={18} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
          <dd>{content}</dd>
        </div>
      ))}
    </dl>
  );
}
