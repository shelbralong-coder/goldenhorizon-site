import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your submission has been received by Golden Horizon Asset Recovery.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container narrow className="text-center">
        <CircleCheck size={40} className="mx-auto text-gold" strokeWidth={1.5} />
        <h1 className="mt-6 text-3xl text-navy sm:text-4xl">Thank you</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
          Your information has been received for preliminary review. A submission
          does not guarantee claim eligibility or recovery. We&rsquo;ll follow up
          using the contact information you provided.
        </p>
        <div className="mt-10">
          <Button href="/">Return Home</Button>
        </div>
      </Container>
    </section>
  );
}
