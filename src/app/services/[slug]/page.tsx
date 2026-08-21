import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleCheck, CircleAlert } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { serviceImages } from "@/content/serviceImages";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-offwhite py-16 sm:py-20">
        <Container narrow>
          <span className="mb-6 inline-flex h-16 w-16 items-center justify-center">
            <Image src={serviceImages[service.slug]} alt="" className="h-full w-full object-contain" />
          </span>
          <p className="eyebrow mb-3">Services</p>
          <h1 className="text-3xl leading-tight text-navy sm:text-4xl">{service.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {service.heroIntro}
          </p>
          <div className="mt-8">
            <Button href="/claim-review">Check My Claim</Button>
          </div>
        </Container>
      </section>

      <Section tone="white" narrow>
        <div className="space-y-6 text-sm leading-relaxed text-charcoal/85 sm:text-base">
          {service.overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="offwhite">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Research" title="What research may include" />
            <ul className="mt-8 space-y-4">
              {service.researchIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                  <CircleCheck size={18} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Good to Know" title="Important considerations" />
            <ul className="mt-8 space-y-4">
              {service.considerations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                  <CircleAlert size={18} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Explore" title="Other areas we research" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="focus-ring group flex flex-col justify-between rounded-sm border border-line p-6 hover:border-gold/60"
            >
              <div>
                <p className="text-base text-navy">{s.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy/80 group-hover:text-gold">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`Think this may apply to you?`}
        description="Start a no-obligation claim review and we'll research what may be involved in your specific situation."
      />
    </>
  );
}
