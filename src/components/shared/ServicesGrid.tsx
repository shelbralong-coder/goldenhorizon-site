import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { serviceImages } from "@/content/serviceImages";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="focus-ring group flex flex-col rounded-sm border border-line bg-white p-8 transition-colors hover:border-gold/60"
        >
          <span className="mb-6 inline-flex h-16 w-16 items-center justify-center">
            <Image
              src={serviceImages[service.slug]}
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <h3 className="text-lg text-navy">{service.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {service.shortDescription}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy/80 group-hover:text-gold">
            Learn more
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
