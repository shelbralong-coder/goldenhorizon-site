import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactDetails } from "@/components/shared/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Golden Horizon Asset Recovery. Reach out by phone, email, or our contact form with questions about a potential claim.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container narrow>
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="text-3xl leading-tight text-navy sm:text-4xl">Get in touch</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Questions about a letter, call, or text you received? Reach out and a
          member of our research team will follow up.
        </p>

        <div className="mt-6 rounded-sm border border-gold/30 bg-offwhite p-5 text-sm leading-relaxed text-charcoal/80">
          <strong className="text-navy">Business information needed:</strong>{" "}
          the phone number, email, mailing address, and hours below are
          placeholders. Replace them in{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">
            src/content/site.ts
          </code>{" "}
          before launch — see the README for instructions.
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-lg text-navy">Reach us directly</h2>
            <div className="mt-6">
              <ContactDetails />
            </div>
          </div>
          <div className="rounded-sm border border-line bg-white p-6 sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
