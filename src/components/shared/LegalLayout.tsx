import { Container } from "@/components/ui/Container";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container narrow>
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-3xl leading-tight text-navy sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>

        <div className="mt-8 rounded-sm border border-gold/30 bg-offwhite p-5 text-sm leading-relaxed text-charcoal/80">
          This document uses general, plain-language terms and has not been
          reviewed by an attorney. Have qualified legal counsel review this page
          for your specific jurisdiction and business practices before this site
          goes live.
        </div>

        <div className="prose-legal mt-10 space-y-8">{children}</div>
      </Container>
    </section>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl text-navy">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
        {children}
      </div>
    </div>
  );
}
