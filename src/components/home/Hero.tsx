import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import heroPhoto from "@/assets/hero/courthouse-files.png";

export function Hero() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="grid grid-cols-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div>
          <p className="eyebrow mb-5">Asset Recovery &amp; Claim Research</p>
          <h1 className="text-4xl leading-[1.1] text-navy sm:text-5xl">
            Money may be owed to you. We help you find the path to recovery.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Golden Horizon researches potential unclaimed and surplus funds — from
            foreclosure and tax sales to bankruptcy cases and estates — and helps
            individuals, families, heirs, and businesses understand the process for
            pursuing what may be theirs.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/claim-review" size="lg">
              Check My Claim
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              How It Works
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-[6/7]">
          <Image
            src={heroPhoto}
            alt="Courthouse columns at dusk with case files"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
