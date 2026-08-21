"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/faqs";
import { cn } from "@/lib/cn";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${item.question.slice(0, 12).replace(/\s+/g, "-")}-${index}`;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="focus-ring flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-medium text-navy sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={cn(
                  "mt-1 shrink-0 text-gold transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              className={cn("grid transition-all duration-200 ease-out", isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]")}
              style={{ overflow: "hidden" }}
            >
              <div className="min-h-0">
                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
