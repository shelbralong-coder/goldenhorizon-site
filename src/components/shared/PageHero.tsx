import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-offwhite py-16 sm:py-20">
      <Container narrow>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-3xl leading-tight text-navy sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
