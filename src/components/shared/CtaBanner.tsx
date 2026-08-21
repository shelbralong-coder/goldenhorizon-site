import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner({
  title,
  description,
  ctaLabel = "Check My Claim",
  ctaHref = "/claim-review",
}: {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <Container narrow className="text-center">
        <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        )}
        <div className="mt-9">
          <Button href={ctaHref} variant="ghost" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
