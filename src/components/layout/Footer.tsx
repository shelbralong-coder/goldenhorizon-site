import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navLinks, footerLegalLinks, siteConfig, disclaimerShort } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Golden Horizon Asset Recovery researches publicly available records to
              help identify potential unclaimed and surplus funds, and assists
              individuals, families, heirs, and businesses in understanding the
              applicable recovery process.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">Site</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring text-white/70 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.email}</li>
              {siteConfig.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2.5 text-sm">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring text-white/70 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-white/45">
            {disclaimerShort}
          </p>
          <p className="mt-4 text-xs text-white/35">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
