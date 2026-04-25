export interface Publication {
  slug: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  year: string;
  pages: number;
  hasDownload?: boolean;
  hasRead?: boolean;
}

export interface PublicationArticle extends Publication {
  subtitle?: string;
  author?: string;
  readTime?: string;
  content: {
    type: "h2" | "h3" | "p" | "ul" | "blockquote" | "divider";
    text?: string;
    items?: string[];
  }[];
}

export const publications: Publication[] = [
  {
    slug: "uzbekistan-tax-landscape-2024",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Uzbekistan Tax Landscape 2024–2025",
    description:
      "An analysis of recent tax reforms, key changes in legislation, and strategic implications for domestic and foreign-invested entities.",
    year: "2024",
    pages: 24,
    hasRead: true,
  },
  {
    slug: "employer-of-record-central-asia",
    tag: "HR Insight",
    category: "HR",
    title: "Employer of Record in Central Asia",
    description:
      "How foreign companies can hire and manage talent in Uzbekistan without establishing a local legal entity.",
    year: "2024",
    pages: 18,
    hasRead: true,
  },
  {
    slug: "foreign-investment-protection",
    tag: "Legal Brief",
    category: "Legal",
    title: "Foreign Investment Protection in Uzbekistan",
    description:
      "An overview of legal guarantees, bilateral treaties, and dispute resolution mechanisms available to foreign investors.",
    year: "2023",
    pages: 20,
    hasRead: true,
    hasDownload: true,
  },
  {
    slug: "agriculture-agribusiness-opportunities",
    tag: "Market Report",
    category: "Market",
    title: "Agriculture & Agribusiness Opportunities",
    description:
      "Sector analysis of Uzbekistan's agricultural market, export potential, and investment pathways.",
    year: "2023",
    pages: 32,
    hasRead: true,
  },
  {
    slug: "ifrs-adoption-uzbekistan",
    tag: "Compliance Guide",
    category: "Compliance",
    title: "IFRS Adoption in Uzbekistan",
    description:
      "Practical guidance on transitioning from National Accounting Standards to International Financial Reporting Standards.",
    year: "2023",
    pages: 28,
    hasRead: true,
    hasDownload: true,
  },
  {
    slug: "payroll-social-contributions",
    tag: "HR Guide",
    category: "HR",
    title: "Payroll & Social Contributions",
    description:
      "A detailed breakdown of payroll taxes, social contributions, and reporting obligations for employers in Uzbekistan.",
    year: "2022",
    pages: 16,
    hasRead: true,
  },
  {
    slug: "escrow-accounts-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Escrow Accounts in Uzbekistan: New Rules for Property and Vehicle Transactions",
    description:
      "From April 2026, escrow accounts are mandatory for all real estate and vehicle transactions. We break down the legislative changes, timelines, and what buyers and sellers must know.",
    year: "2026",
    pages: 10,
    hasRead: true,
  },
];

export const articles: Record<string, PublicationArticle> = {
  "escrow-accounts-uzbekistan": {
    ...publications.find((p) => p.slug === "escrow-accounts-uzbekistan")!,
    subtitle: "What the 2025–2026 legislative reforms mean for buyers, sellers, and developers",
    author: "Advizen Legal Practice",
    readTime: "9 min read",
    content: [
      {
        type: "p",
        text: "Uzbekistan has introduced mandatory escrow accounts for real estate and vehicle transactions in two legislative waves. The first wave — targeting shared construction (off-plan housing) — came into force on January 1, 2026. The second wave extended escrow requirements to all real estate and qualifying vehicle transactions from April 1, 2026. Taken together, these reforms fundamentally change how property and asset purchases are structured and funded in the country.",
      },
      { type: "h2", text: "Background: Why Escrow?" },
      {
        type: "p",
        text: "Prior to these reforms, buyers of off-plan apartments and other real estate transferred funds directly to developers and sellers with limited legal protection if construction stalled or the seller defaulted. The government's stated objective — articulated in the Presidential Decree on the 'Single Housing Lifecycle' concept — is to protect buyer funds, increase market transparency, and align Uzbekistan's property market practices with international standards.",
      },
      { type: "h2", text: "Part 1: Shared Construction Escrow (Effective January 1, 2026)" },
      {
        type: "p",
        text: "Under the Presidential Decree introducing the 'Single Housing Lifecycle' principle, developers selling off-plan residential units are now required to collect buyer funds through bank escrow accounts rather than directly. The transition was phased:",
      },
      {
        type: "ul",
        items: [
          "July 1 – December 31, 2025: parallel operation of the old and new systems; developers could use either model",
          "From January 1, 2026: escrow-only model mandatory for all new shared construction agreements",
        ],
      },
      {
        type: "p",
        text: "Under the escrow model, buyer funds are held in a designated account at an authorised bank and are only released to the developer once the property is formally handed over to the buyer. This creates a strong incentive for timely project completion and eliminates the risk of developers using advance payments for purposes unrelated to the specific project.",
      },
      { type: "h3", text: "Key Requirements for Developers" },
      {
        type: "ul",
        items: [
          "Developers must contribute a minimum of 30% of their own funds before project financing can be drawn",
          "The interest rate on project financing is linked to the balance held in escrow — the higher the accumulated buyer deposits, the lower the effective rate",
          "Escrow funds cannot be arrested, suspended, or seized in connection with claims against the developer; they are ring-fenced for buyer protection",
          "If a developer delays handover by more than 6 months beyond the contractual date, the buyer acquires the right to terminate the agreement and recover all deposited funds in full",
        ],
      },
      { type: "h2", text: "Part 2: General Property and Vehicle Escrow (Effective April 1, 2026)" },
      {
        type: "p",
        text: "A separate decree dated December 10, 2025 extended escrow requirements beyond shared construction to cover secondary real estate transactions and the sale of qualifying vehicles. From April 1, 2026, escrow accounts became mandatory for:",
      },
      {
        type: "ul",
        items: [
          "All purchase and sale transactions involving real estate (residential and commercial)",
          "Vehicles not older than 10 years falling within categories M, N, O, and G",
        ],
      },
      {
        type: "p",
        text: "The mechanism is straightforward: at the time of signing the purchase agreement before a notary, the buyer transfers the transaction amount into an escrow account at the notary's partner bank. Funds are held until the ownership transfer is registered with the relevant state registry. Once registration is confirmed, the bank releases the funds to the seller.",
      },
      { type: "h3", text: "Fee Structure" },
      {
        type: "p",
        text: "The legislation fixes escrow service fees at a statutory cap, replacing the previous ad hoc bank commissions that could reach 0.5% of transaction value — a significant cost on large property deals:",
      },
      {
        type: "ul",
        items: [
          "Real estate transactions: 206,000 UZS per transaction (fixed, regardless of value)",
          "Vehicle transactions: 103,000 UZS per transaction (fixed)",
        ],
      },
      {
        type: "blockquote",
        text: "For a property sold at 500,000 USD, the old 0.5% commission model would have cost approximately 2,500 USD. Under the new fixed-fee regime, the same transaction costs approximately 15 USD equivalent — a reduction of over 99%.",
      },
      { type: "h3", text: "Infrastructure: Notaries and Banks" },
      {
        type: "p",
        text: "To support the rollout, 1,130 notaries across Uzbekistan have been integrated into the banking system's escrow infrastructure. Bank staff are now stationed at notary offices to process account opening and fund transfers on-site at the time of transaction signing. This eliminates the need for buyers to visit a bank branch separately and reduces the administrative friction of the new requirement.",
      },
      { type: "h2", text: "Compliance Considerations and Key Risks" },
      {
        type: "p",
        text: "While the reforms are buyer-protective by design, they introduce new compliance considerations for both parties to a transaction.",
      },
      { type: "h3", text: "Understating Contract Price" },
      {
        type: "p",
        text: "A practice that historically allowed parties to reduce tax exposure by declaring a lower transaction price in the notarised contract now carries significantly elevated risk. Because escrow funds must match the stated contract price — and those funds flow through a regulated bank — any divergence between the declared price and actual consideration creates an evidentiary paper trail. Tax authorities and financial intelligence units have direct visibility. Buyers who agree to declare a lower price expose themselves to potential liability under tax and anti-money laundering legislation.",
      },
      { type: "h3", text: "Foreign Currency Transactions" },
      {
        type: "p",
        text: "Real estate transactions in Uzbekistan are denominated in Uzbek som for official purposes. Parties negotiating in USD or other currencies must account for exchange rate movements between agreement signing and registration completion, as the escrow amount is fixed in som at the time of deposit.",
      },
      { type: "h3", text: "Developer Due Diligence" },
      {
        type: "p",
        text: "For investors and buyers of off-plan units, the escrow framework provides meaningful protection — but only if the developer is operating under an authorised bank escrow arrangement as required. Buyers should verify that the developer's sales contract references a specific escrow account at a licensed bank before signing and transferring funds.",
      },
      { type: "divider" },
      { type: "h2", text: "Summary of Key Dates and Rules" },
      {
        type: "ul",
        items: [
          "January 1, 2026: escrow mandatory for all new shared construction (off-plan) agreements",
          "April 1, 2026: escrow mandatory for all real estate and qualifying vehicle sale transactions",
          "Developer minimum equity: 30% own funds required before project financing",
          "Buyer exit right: 6-month delay beyond contracted handover date triggers full refund right",
          "Escrow fee (real estate): 206,000 UZS fixed",
          "Escrow fee (vehicles): 103,000 UZS fixed",
          "Escrow funds: ring-fenced, cannot be arrested or seized against developer",
        ],
      },
      {
        type: "p",
        text: "Advizen's legal and tax practices advise buyers, sellers, and developers on structuring transactions under the new escrow framework — including contract review, tax implications of the new price transparency requirements, and developer compliance with the shared construction financing rules.",
      },
    ],
  },
  "payroll-social-contributions": {
    ...publications.find((p) => p.slug === "payroll-social-contributions")!,
    subtitle: "A practical guide for employers operating in Uzbekistan",
    author: "Advizen HR Practice",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Uzbekistan's payroll framework has undergone significant reform in recent years, with the government simplifying rates, consolidating social contributions, and introducing digital reporting obligations. For foreign companies employing staff locally — whether through a subsidiary, representative office, or Employer of Record arrangement — understanding these obligations is essential to compliant operations.",
      },
      { type: "h2", text: "Personal Income Tax" },
      {
        type: "p",
        text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. This replaced the previous progressive scale and represents one of the lowest PIT rates in Central Asia. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
      },
      {
        type: "ul",
        items: [
          "Flat rate: 12% on gross salary",
          "Withholding: employer obligation, remitted monthly",
          "Non-residents: 12% rate applies equally; no additional surcharge",
          "Dividend income: taxed separately at 5%",
        ],
      },
      { type: "h2", text: "Unified Social Payment (USP)" },
      {
        type: "p",
        text: "Employers are required to make a Unified Social Payment (USP) calculated as a percentage of the total payroll fund. As of 2024, the standard USP rate is 12% of gross payroll for most enterprises. This contribution funds the state pension system, social insurance, and the employment fund.",
      },
      {
        type: "blockquote",
        text: "The USP is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
      },
      {
        type: "ul",
        items: [
          "Standard rate: 12% of gross payroll (employer cost)",
          "Budget organisations and certain SMEs: reduced rates may apply",
          "Paid monthly alongside PIT remittance",
          "Late payment attracts penalties at the Central Bank refinancing rate",
        ],
      },
      { type: "h2", text: "Individual Accumulative Pension Contribution" },
      {
        type: "p",
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer as part of the overall income tax remittance. The accumulative pension system was introduced to supplement the state pension and is managed by designated financial institutions.",
      },
      { type: "h2", text: "Reporting Obligations" },
      {
        type: "p",
        text: "All employers must submit payroll reports through the electronic tax filing system (my.soliq.uz). Monthly reports include PIT withholding declarations and USP calculations. Annual reconciliation is required by 1 February following the reporting year.",
      },
      {
        type: "ul",
        items: [
          "Monthly PIT withholding report — due by the 10th of the following month",
          "Monthly USP declaration — submitted alongside PIT report",
          "Annual payroll reconciliation — due by 1 February",
          "Employee income certificates — issued upon request or termination",
        ],
      },
      { type: "h2", text: "Common Compliance Risks" },
      {
        type: "p",
        text: "The most frequent compliance issues we encounter among foreign employers in Uzbekistan relate to misclassification of contractors, late remittance of social contributions, and failure to account for in-kind benefits as taxable income. The tax authorities have increased scrutiny of these areas since 2023.",
      },
      {
        type: "ul",
        items: [
          "Contractor misclassification — individuals performing employee functions must be on payroll",
          "In-kind benefits (housing, transport, meals) are taxable at market value",
          "Bonuses and one-time payments are subject to PIT at the standard 12% rate",
          "Failure to file monthly reports attracts administrative fines",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Summary of Key Rates (2024)" },
      {
        type: "ul",
        items: [
          "Personal Income Tax: 12% (flat, withheld by employer)",
          "Unified Social Payment: 12% (employer cost, on gross payroll)",
          "Accumulative Pension: 0.1% (included in PIT)",
          "Total employer burden: ~24% of gross salary",
        ],
      },
      {
        type: "p",
        text: "Advizen's HR and tax practices work together to ensure that payroll structures are fully compliant with current legislation while optimising the overall cost of employment. For companies entering the market or restructuring existing operations, we provide end-to-end payroll setup, ongoing administration, and regulatory monitoring.",
      },
    ],
  },
};

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

export function getArticleBySlug(slug: string): PublicationArticle | undefined {
  return articles[slug];
}

export function getAllPublicationSlugs(): string[] {
  return publications.filter((p) => p.hasRead).map((p) => p.slug);
}
