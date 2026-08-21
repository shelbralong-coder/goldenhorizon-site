import Image, { type StaticImageData } from "next/image";
import step1 from "@/assets/how-it-works/step-1-research.png";
import step2 from "@/assets/how-it-works/step-2-case-review.png";
import step3 from "@/assets/how-it-works/step-3-pen-and-form.png";
import step4 from "@/assets/how-it-works/step-4-courthouse-arrow.png";

const steps: { number: string; title: string; body: string; image: StaticImageData }[] = [
  {
    number: "1",
    title: "We Identify Potential Funds",
    body: "Golden Horizon researches public records and other lawful information sources to identify potential recovery opportunities.",
    image: step1,
  },
  {
    number: "2",
    title: "We Research the Claim",
    body: "We review available ownership information, court records, property information, case records, estate information, and other relevant documentation.",
    image: step2,
  },
  {
    number: "3",
    title: "We Determine the Required Process",
    body: "Requirements differ depending on the type of funds and jurisdiction. We help identify what documentation and procedures may apply.",
    image: step3,
  },
  {
    number: "4",
    title: "The Claim Moves Through the Applicable Process",
    body: "The applicable court, county, trustee, agency, government office, or other holder of funds ultimately determines claim eligibility and payment.",
    image: step4,
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.number} className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-sm border border-line bg-offwhite">
            <Image
              src={step.image}
              alt=""
              className="h-full w-full object-contain p-6"
              sizes="(min-width: 1024px) 20vw, 45vw"
            />
          </div>
          <span className="mt-5 block font-serif text-3xl text-gold/70">{step.number}</span>
          <h3 className="mt-2 text-lg text-navy">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
