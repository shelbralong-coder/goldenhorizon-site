import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ClaimReviewForm } from "@/components/forms/ClaimReviewForm";

export const metadata: Metadata = {
  title: "Check My Claim — Claim Review",
  description:
    "Start a no-obligation claim review with Golden Horizon Asset Recovery. Tell us about your situation and we'll research what may apply.",
  alternates: { canonical: "/claim-review" },
};

export default function ClaimReviewPage() {
  return (
    <section className="border-b border-line bg-offwhite py-16 sm:py-20">
      <Container narrow>
        <p className="eyebrow mb-4">Check My Claim</p>
        <h1 className="text-3xl leading-tight text-navy sm:text-4xl">
          Start your no-obligation claim review
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Tell us a bit about your situation. We&rsquo;ll review what you share
          alongside our research and follow up to explain what we found.
        </p>

        <div className="mt-12 rounded-sm border border-line bg-white p-6 sm:p-10">
          <ClaimReviewForm />
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted">
          We do not ask for a full Social Security number, banking passwords, or
          payment information through this form.
        </p>
      </Container>
    </section>
  );
}
