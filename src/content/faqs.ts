export type Faq = { question: string; answer: string };
export type FaqGroup = { category: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    category: "About Golden Horizon",
    items: [
      {
        question: "Why did Golden Horizon contact me?",
        answer:
          "Public records may indicate that money or a property interest is associated with your name — for example, as a former property owner, a foreclosure or tax sale defendant, a bankruptcy creditor, an heir, or through a business or LLC. We reach out to let you know we found something potentially relevant to you and to offer a no-obligation review of what we found.",
      },
      {
        question: "How did you find me?",
        answer:
          "We research publicly available records — court filings, county records, corporate registries, and similar sources — along with other lawfully accessible information, to identify potential claimants connected to a record we're researching.",
      },
      {
        question: "Is this legitimate?",
        answer:
          "Golden Horizon Asset Recovery is a private company that researches publicly available records related to unclaimed and surplus funds. We encourage you to verify our identity, ask questions, and review any agreement carefully before proceeding — see our Consumer Protection guidance for what to check.",
      },
      {
        question: "Is Golden Horizon a government agency?",
        answer:
          "No. Golden Horizon Asset Recovery is a private company. We are not a government agency, and we do not represent any court, county, trustee, or government office.",
      },
      {
        question: "Is Golden Horizon a law firm?",
        answer:
          "No. Golden Horizon Asset Recovery is not a law firm and does not provide legal advice or legal representation. Where legal advice or representation is required, we encourage you to consult an appropriately licensed attorney.",
      },
    ],
  },
  {
    category: "The Claim & Recovery Process",
    items: [
      {
        question: "Is there definitely money waiting for me?",
        answer:
          "Not necessarily. Being contacted means our research identified a potential connection between you and a record — it does not, by itself, confirm that funds exist or that you are legally entitled to them. Eligibility has to be verified, and the amount of any potential surplus depends on the specific facts of the case.",
      },
      {
        question: "Can I claim the funds myself?",
        answer:
          "In many cases, yes — depending on the jurisdiction and circumstances, you may be able to pursue a claim directly without hiring an asset-recovery company. Some people choose assistance because they don't know where the funds are held, the process or paperwork is unclear, records are hard to locate, or the situation involves a deceased owner, multiple heirs, or a business entity. The choice is yours.",
      },
      {
        question: "Who decides whether a claim is approved?",
        answer:
          "Golden Horizon does not approve or pay claims. The applicable court, agency, trustee, county, government office, or other holder of the funds makes that determination, based on the documentation and process required for that specific matter.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Timelines vary widely depending on the type of claim, the jurisdiction, and how the applicable court, county, or agency processes claims — from a few months to considerably longer, particularly for claims involving probate or multiple heirs.",
      },
      {
        question: "What documentation might be required?",
        answer:
          "It depends on the type of claim. Common examples include proof of identity, proof of prior ownership or interest, court or county claim forms, and — for deceased claimants — a death certificate and documentation establishing heirship, such as probate paperwork or a small-estate affidavit. We'll explain what applies to your specific situation.",
      },
    ],
  },
  {
    category: "Heirs, Estates & Multiple Claimants",
    items: [
      {
        question: "What happens if the original claimant is deceased?",
        answer:
          "A claim connected to a deceased individual can often still be pursued by the estate or by legally entitled heirs, but it typically requires additional documentation — such as a death certificate and probate or estate paperwork. Visit our Heirs & Estates page for more detail.",
      },
      {
        question: "What happens if several heirs are involved?",
        answer:
          "When multiple heirs may have an interest in the same claim, the applicable process generally needs to account for all of them, not just the person we initially contacted. We can help identify who else may be involved based on available public records.",
      },
    ],
  },
  {
    category: "Fees & Documentation",
    items: [
      {
        question: "What does Golden Horizon charge?",
        answer:
          "Fee arrangements are discussed directly with you and set out in writing before any work begins. We encourage you to ask about fees up front and to review any agreement carefully before signing.",
      },
      {
        question: "Do I pay anything upfront?",
        answer:
          "Fee structures can vary by case and jurisdiction. We will tell you plainly what, if anything, is expected and when — nothing is assumed or automatic, and any fee terms will be in writing before you're asked to agree to anything.",
      },
    ],
  },
  {
    category: "Your Information & Privacy",
    items: [
      {
        question: "Do you need my Social Security number?",
        answer:
          "Our general website inquiry form does not ask for a full Social Security number, banking credentials, or payment information. If a specific claim process later requires identity documentation, that would be handled separately and explained to you directly — never requested casually through a web form or unsolicited message.",
      },
      {
        question: "How is my information protected?",
        answer:
          "We limit the information collected through this website to what's needed for an initial claim review, and we handle it with care. See our Privacy Policy for details on how information you submit is used and protected.",
      },
      {
        question: "What happens after I submit the website form?",
        answer:
          "Your submission is received for a preliminary review. Submitting the form does not create any obligation on your part and does not guarantee claim eligibility or recovery. If your inquiry looks like a potential match, we'll follow up using the contact information you provided.",
      },
    ],
  },
];
