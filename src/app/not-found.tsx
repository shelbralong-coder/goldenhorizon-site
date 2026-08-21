import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container narrow className="text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-3xl text-navy sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/">Return Home</Button>
          <Button href="/claim-review" variant="secondary">
            Check My Claim
          </Button>
        </div>
      </Container>
    </section>
  );
}
