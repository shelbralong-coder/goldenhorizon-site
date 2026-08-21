export type ServiceContent = {
  slug: string;
  name: string;
  shortDescription: string;
  metaDescription: string;
  heroIntro: string;
  overview: string[];
  researchIncludes: string[];
  considerations: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "foreclosure-surplus",
    name: "Foreclosure Surplus Funds",
    shortDescription:
      "Potential excess proceeds remaining after a foreclosure sale and authorized obligations have been satisfied.",
    metaDescription:
      "Golden Horizon researches potential foreclosure surplus funds — proceeds that may remain after a foreclosure sale and authorized debts are paid.",
    heroIntro:
      "When a property is sold at a foreclosure auction, the sale price does not always match what was owed. In some cases, funds remain after the lender, taxes, and other authorized costs are paid.",
    overview: [
      "When a homeowner falls behind on a mortgage, a lender can foreclose and the property may be sold at auction. The proceeds from that sale are first applied to the outstanding loan balance, unpaid taxes, and other authorized costs and liens tied to the property.",
      "If the sale price is higher than what was owed, the remaining balance — often called surplus or excess proceeds — may be payable to the former owner of record, or to their legally entitled heirs or successors.",
      "Not every foreclosure produces a surplus, and the amount, if any, depends on the sale price and the obligations that had to be satisfied first. Golden Horizon researches county and court records to identify cases where a potential surplus may exist and to understand what the applicable claims process requires.",
    ],
    researchIncludes: [
      "Foreclosure sale and auction records",
      "County clerk and court filings",
      "Ownership and title history",
      "Applicable claims procedures and deadlines",
      "Whether multiple parties may hold an interest in the funds",
    ],
    considerations: [
      "Foreclosure surplus procedures and deadlines vary significantly by state and by county.",
      "A property's assessed value is not the same as its final auction sale price — a surplus cannot be confirmed until the actual sale results and obligations are known.",
      "In many jurisdictions, a former owner can pursue a surplus claim directly without a recovery company.",
    ],
  },
  {
    slug: "tax-sale-excess-proceeds",
    name: "Tax Sale Excess Proceeds",
    shortDescription:
      "Potential excess proceeds generated through tax foreclosure or tax-sale proceedings.",
    metaDescription:
      "Golden Horizon researches potential tax sale excess proceeds — funds that may remain after a property is sold to satisfy unpaid property taxes.",
    heroIntro:
      "When a property is sold at a tax sale to satisfy unpaid property taxes, the sale proceeds are first used to cover the taxes owed and associated costs. What happens after that can leave money on the table.",
    overview: [
      "Counties and taxing authorities can sell a property, or a tax lien on a property, when property taxes go unpaid. The sale proceeds are applied first to the delinquent taxes, penalties, interest, and administrative costs.",
      "When a tax sale generates proceeds beyond those amounts, the remaining balance — commonly called excess or surplus proceeds — may be payable to the former property owner or another legally entitled party, subject to the procedures of the county or state involved.",
      "Tax sale processes, notice requirements, and claim deadlines differ widely by state and county. Golden Horizon researches the applicable county or state records to help identify where potential excess proceeds may exist.",
    ],
    researchIncludes: [
      "Tax sale and tax deed auction records",
      "County treasurer, tax collector, and clerk records",
      "Prior ownership and lien history",
      "State-specific excess proceeds claim procedures",
      "Applicable filing deadlines, which can be strict and vary by county",
    ],
    considerations: [
      "Some states hold excess tax sale proceeds for a limited claim period before they escheat to the state or county — timing matters.",
      "Requirements and forms differ by state; a process that applies in one county may not apply in another.",
      "Being identified as a possible former owner does not, by itself, establish entitlement to any excess proceeds.",
    ],
  },
  {
    slug: "bankruptcy-unclaimed-funds",
    name: "Bankruptcy Unclaimed Funds",
    shortDescription:
      "Potential funds held in connection with bankruptcy proceedings that were not successfully distributed to the intended recipient.",
    metaDescription:
      "Golden Horizon researches potential unclaimed funds connected to bankruptcy proceedings that were not successfully distributed.",
    heroIntro:
      "Bankruptcy cases sometimes generate funds — a creditor distribution, a refund, or a dividend — that are never successfully delivered to the person or business entitled to them.",
    overview: [
      "During a bankruptcy case, a trustee may distribute funds to creditors or, in some cases, to the debtor. If a check goes uncashed, a party can't be located, or a distribution otherwise fails to reach its intended recipient, those funds can be deposited with a federal court or another holding authority.",
      "Those funds don't simply disappear — they remain associated with the case and, in many instances, can potentially be claimed by the party who was entitled to them, or by their successors.",
      "Golden Horizon researches bankruptcy court records and related filings to help identify cases where unclaimed funds may exist and to understand the applicable claims procedure.",
    ],
    researchIncludes: [
       "Federal bankruptcy court dockets and case records",
      "Creditor and claimant filings",
      "Trustee distribution and unclaimed funds reports",
      "Business and individual case history",
      "Applicable federal claims procedures",
    ],
    considerations: [
      "Bankruptcy unclaimed funds are generally governed by federal procedures, which differ from state-level surplus or tax sale processes.",
      "Multiple creditors or claimants may have a potential interest in the same case, which can affect the process.",
      "Identifying a case does not confirm that a particular individual or business is the entitled party.",
    ],
  },
  {
    slug: "heir-estate-recovery",
    name: "Deceased Claimants & Heir Research",
    shortDescription:
      "Research involving deceased owners, estates, surviving family members, potential heirs, probate records, and claim documentation.",
    metaDescription:
      "Golden Horizon researches deceased claimants, estates, and potential heirs connected to unclaimed or surplus funds, including probate and death records.",
    heroIntro:
      "When the person named on a record has passed away, a potential claim doesn't disappear with them — but it does typically require additional research and documentation.",
    overview: [
      "Public records associated with a potential claim — a foreclosure, a tax sale, a bankruptcy case, or another proceeding — sometimes name someone who is deceased. In those situations, the claim may still be pursued by the estate, a surviving spouse, children, or other legally entitled heirs, depending on the applicable law.",
      "Determining who has legal standing to pursue a claim on behalf of a deceased individual often requires additional documentation: proof of death, evidence of the family relationship, and in many cases, probate or estate paperwork such as letters of administration or a small-estate affidavit.",
      "Golden Horizon researches death records, obituaries, probate and estate filings, and other publicly available information to help identify potential heirs and understand what documentation a particular claim may require.",
    ],
    researchIncludes: [
      "Death records and obituaries",
      "Probate and estate court filings",
      "Personal representatives, executors, and administrators of record",
      "Surviving spouses, children, and other potential heirs",
      "Property and business ownership tied to the deceased individual",
      "Family relationships established through public records",
    ],
    considerations: [
      "Identifying a possible relative of the person named on a record does not, by itself, establish that person's legal entitlement to any funds.",
      "When multiple heirs exist, most jurisdictions require the claim and any recovery to reflect all heirs' interests, not just one.",
      "Probate requirements — and whether probate is required at all — vary by state and by the size of the estate.",
    ],
  },
  {
    slug: "business-llc-assets",
    name: "Business & LLC Asset Recovery",
    shortDescription:
      "Research involving funds potentially associated with businesses, LLCs, dissolved entities, owners, members, successors, or other legally entitled parties.",
    metaDescription:
      "Golden Horizon researches potential unclaimed or surplus funds associated with businesses, LLCs, dissolved entities, and their owners or successors.",
    heroIntro:
      "Businesses and LLCs can be entitled to surplus or unclaimed funds too — including entities that have since dissolved, changed names, or been sold.",
    overview: [
      "A business or LLC can appear as the owner of record on a foreclosure, tax sale, bankruptcy case, or other proceeding, just as an individual can. When that entity is entitled to surplus or unclaimed funds, the process for claiming them depends on the entity's current status.",
      "For entities that have dissolved, merged, or changed ownership, identifying who currently has authority to claim funds on the entity's behalf can require researching corporate filings, registered agents, members, officers, and successor entities.",
      "Golden Horizon researches state business registries, corporate filing history, and related public records to help identify the entity's current status and the parties who may be entitled to pursue a claim.",
    ],
    researchIncludes: [
      "Secretary of state and corporate registry filings",
      "Entity formation, dissolution, and status history",
      "Registered agents, officers, and members of record",
      "Successor entities and business name changes",
      "Property and asset history tied to the entity",
    ],
    considerations: [
      "Only someone with current legal authority to act on behalf of an entity — such as an officer, member, or authorized successor — can generally pursue a claim for that entity.",
      "Dissolved-entity procedures for reviving standing or authorizing a claim vary by state.",
      "Additional documentation, such as corporate resolutions or proof of authority, is often required.",
    ],
  },
  {
    slug: "unclaimed-assets",
    name: "Other Unclaimed Asset Research",
    shortDescription:
      "Additional publicly identifiable funds or assets where Golden Horizon may be able to research the potential owner or claimant.",
    metaDescription:
      "Golden Horizon researches other publicly identifiable unclaimed funds or assets and helps identify potential owners or claimants.",
    heroIntro:
      "Not every potential claim fits neatly into a single category. Golden Horizon also researches other publicly identifiable funds and assets where a potential owner or claimant may be identifiable.",
    overview: [
      "Beyond foreclosure surplus, tax sale proceeds, bankruptcy distributions, and business-related claims, there are other situations where funds or assets can go unclaimed — municipal refunds, escrow balances, uncashed distributions, and similar publicly recorded matters.",
      "Golden Horizon researches publicly available and other lawfully accessible records to help identify these situations and the parties who may be associated with them.",
      "Because these matters can arise from many different types of proceedings, the applicable process and requirements are determined on a case-by-case basis.",
    ],
    researchIncludes: [
      "Public records associated with the specific matter",
      "Government agency and holder-of-funds records",
      "Ownership and entitlement history",
      "The specific claims process that applies to that record type",
    ],
    considerations: [
      "Because this category covers a range of record types, the research process and requirements vary case by case.",
      "Golden Horizon will explain what was found and what the applicable process involves before any next steps.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
