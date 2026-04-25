export interface Publication {
  slug: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  year: string;
  date?: string;
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
    slug: "outsourcing-operational-activities",
    tag: "Advisory",
    category: "Advisory",
    title: "Benefits of Outsourcing Operational Activities",
    description:
      "Streamline your operations and amplify growth. Discover why strategic outsourcing is the key to efficiency and compliance in Uzbekistan.",
    year: "2024",
    date: "2024-04-24",
    pages: 8,
    hasRead: true,
  },
  {
    slug: "accounting-policy-tax-purposes",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Developing an Accounting Policy for Tax Purposes in Uzbekistan",
    description:
      "Navigate Uzbekistan's tax complexities with a well-defined Accounting Policy for Tax Purposes. Essential for legal entities and individual entrepreneurs.",
    year: "2024",
    date: "2024-04-24",
    pages: 10,
    hasRead: true,
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
  "outsourcing-operational-activities": {
    ...publications.find((p) => p.slug === "outsourcing-operational-activities")!,
    subtitle: "Streamline your operations and amplify growth with strategic outsourcing in Uzbekistan.",
    author: "Advizen Advisory Team",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "In the competitive landscape of Uzbekistan, businesses are constantly seeking intelligent strategies to enhance efficiency, reduce costs, and sharpen their focus on core competencies. While familiar in Western markets, outsourcing operational activities is rapidly gaining traction as a vital solution for companies navigating the unique complexities of this dynamic region. At Advizen, we recognise that offloading non-core functions is not just about cost savings — it is a strategic move that empowers your business for sustainable growth.",
      },
      { type: "h2", text: "What is Outsourcing and Why is it Essential Today?" },
      {
        type: "p",
        text: "Outsourcing involves delegating specific business functions or processes to external service providers. This model originated in developed economies as an effective way to streamline operations, and its popularity stems from the mutual benefits it offers. Companies gain the ability to transfer certain responsibilities from their internal staff to expert external teams, leading to significant savings on personnel costs. For management, outsourcing means not only shifting duties but also transferring associated liabilities, allowing them to dedicate more energy and resources to strategic development and primary business objectives.",
      },
      {
        type: "p",
        text: "The effectiveness of outsourcing has been proven in practice, embraced by businesses of all sizes — from agile startups to major multinational corporations. By entrusting specific functions to external specialists, a company can reduce its internal headcount, thereby lowering expenses related to salaries, taxes, and the establishment and maintenance of physical workstations.",
      },
      { type: "h2", text: "The Power of Outsourced Services: A Closer Look" },
      {
        type: "p",
        text: "While various functions can be outsourced, services like accounting, legal compliance, and HR administration are among the most sought-after due to their specialised nature and critical importance. Leveraging these services through an expert partner offers a multitude of advantages:",
      },
      {
        type: "ul",
        items: [
          "Access to Elite Expertise and Quality Assurance: Immediate access to highly qualified specialists — accounting, tax law, labour legislation — who continuously upgrade their skills and adhere to best practices.",
          "Enhanced Focus on Core Business Operations: Free your internal teams from complex administrative tasks so employees can concentrate on core duties, driving productivity and innovation.",
          "Optimised Resource Allocation and Cost Savings: Eliminate overheads associated with internal departments — salaries, social contributions, office space, software licences, and training.",
          "Uninterrupted Service and Reliability: Unlike internal staff, outsourced professionals do not take sick leave or vacation that could disrupt critical operations.",
          "Mitigated Risk and Robust Compliance: An outsourcing partner bears the responsibility for ensuring your compliance with Uzbekistan's constantly evolving regulatory landscape.",
          "Scalability and Flexibility: Outsourced services can be easily scaled up or down to match your business's fluctuating needs without the complexities of internal hiring or downsizing.",
        ],
      },
      { type: "h2", text: "Choosing Your Strategic Outsourcing Partner" },
      {
        type: "p",
        text: "At Advizen, we offer professional, high-level services in tax and legal consulting, accounting, customs, financial, and HR services. Our seasoned and highly qualified experts are dedicated to helping you optimise your operations, uncover hidden reserves, and elevate your company's success through our integrated 'one-stop shop' approach.",
      },
      {
        type: "blockquote",
        text: "By partnering with Advizen, you can leverage our comprehensive expertise to save resources and empower your company to develop faster and more dynamically in the promising Uzbek market.",
      },
    ],
  },
  "accounting-policy-tax-purposes": {
    ...publications.find((p) => p.slug === "accounting-policy-tax-purposes")!,
    subtitle: "Why every legal entity and individual entrepreneur in Uzbekistan needs a well-structured Accounting Policy for Tax Purposes.",
    author: "Advizen Tax Practice",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "In Uzbekistan's evolving business and tax environment, achieving compliance and optimising tax liabilities requires more than just diligent bookkeeping. It demands a clear, well-structured approach to how your business calculates and reports its tax obligations. As stipulated by Chapter 7 of Uzbekistan's Tax Code, all taxpayers are mandated to approve an Accounting Policy for Tax Purposes — a foundational document that dictates the conceptual framework for calculating your tax base, assessing tax liabilities, and preparing accurate tax reports.",
      },
      { type: "h2", text: "Why is a Policy Crucial?" },
      {
        type: "p",
        text: "The Accounting Policy for Tax Purposes serves several critical functions for your business and its interactions with tax authorities:",
      },
      {
        type: "ul",
        items: [
          "Demonstrates Calculation Methodology: It clearly outlines the specific methods and procedures used to calculate various taxes, providing transparency on how tax liabilities were arrived at.",
          "Provides Justification and Rationale: The Policy offers the documented reasoning behind your chosen tax accounting methods — particularly vital when the Tax Code provides taxpayers with options or allows for independent decisions.",
          "Ensures Consistency and Reduces Errors: By establishing uniform calculation approaches over time, the Policy helps minimise errors and inconsistencies in tax reporting — key to avoiding disputes during tax audits.",
          "Minimises Tax Disputes: A highly detailed and well-articulated Policy acts as a robust defence mechanism during tax inspections. It is the document you will appeal to when communicating with tax inspectors.",
        ],
      },
      { type: "h2", text: "Key Aspects to Address When Developing Your Policy" },
      { type: "h3", text: "Deductible and Non-Deductible Expenses" },
      {
        type: "p",
        text: "Clearly define which expenses can reduce your corporate income tax base. This is a frequent area of contention between taxpayers and tax authorities.",
      },
      { type: "h3", text: "Loss Carryforward and Expense Reserves" },
      {
        type: "p",
        text: "Outline the methodology for carrying forward past losses to reduce future taxable income, and detail how your company forms and utilises reserves for anticipated expenses.",
      },
      { type: "h3", text: "Depreciation and Amortisation" },
      {
        type: "p",
        text: "The Tax Code sets specific depreciation rates for tax purposes, which may differ from those used for financial accounting. Your Policy must reconcile these differences and specify the methods applied for tax purposes.",
      },
      { type: "h3", text: "Value Added Tax (VAT) Accounting" },
      {
        type: "p",
        text: "As one of the most complex taxes, your Policy should meticulously describe: conditions for offsetting previously paid VAT on goods and services; specific rules for VAT offsets when dealing with foreign legal entities; and the methodology for separate accounting if your business has activities subject to different VAT rates or VAT-exempt operations.",
      },
      { type: "h3", text: "Tax Registers and Document Management" },
      {
        type: "p",
        text: "Describe the forms and procedures for independently developed tax registers used to accumulate and systematise information for tax assessment and reporting. Clarify whether documents are maintained in paper and/or electronic form, and specify the terms of storage.",
      },
      { type: "h2", text: "Important Considerations for Your Policy" },
      {
        type: "ul",
        items: [
          "Approval and Changes: Your Policy is approved by an order or directive from the company's head. Generally, it should not be changed within a calendar year — exceptions are made only if there are changes in tax or accounting legislation, with such changes typically coming into effect from January 1 of the following year.",
          "Integration with Financial Accounting Policy: The Policy can be a standalone document or integrated as a separate section within your overall financial accounting policy. There is no single approved form.",
          "Fiscal Focus in Uzbekistan: Uzbekistan's accounting standards often have a strong fiscal orientation. Many organisations incorporate methods that bring accounting and tax data closer — a practice generally supported by tax authorities.",
        ],
      },
      { type: "h2", text: "Advizen: Your Expert Partner in Tax Policy Development" },
      {
        type: "p",
        text: "Developing a robust and compliant Accounting Policy for Tax Purposes requires a deep understanding of Uzbekistan's intricate tax legislation and accounting standards. Our experienced tax advisors specialise in assisting businesses with this critical task — ensuring your Policy is accurately drafted, fully compliant with current Uzbek tax law, reflects your business's unique operations, and provides clear, defensible methodologies for tax calculations that minimise potential disputes with tax authorities.",
      },
    ],
  },
  "escrow-accounts-uzbekistan": {
    ...publications.find((p) => p.slug === "escrow-accounts-uzbekistan")!,
    subtitle: "What the 2025–2026 legislative reforms mean for buyers, sellers, and developers",
    author: "Advizen Legal Practice",
    readTime: "9 min read",
    content: [
      {
        type: "p",
        text: "Uzbekistan has introduced mandatory escrow accounts for real estate and vehicle transactions in two legislative waves. The first wave — targeting shared construction (off-plan housing) — came into force on January 1, 2026. The second wave extended escrow requirements to all real estate and qualifying vehicle transactions from April 1, 2026.",
      },
      { type: "h2", text: "Background: Why Escrow?" },
      {
        type: "p",
        text: "Prior to these reforms, buyers of off-plan apartments and other real estate transferred funds directly to developers and sellers with limited legal protection. The government's stated objective — articulated in the Presidential Decree on the 'Single Housing Lifecycle' concept — is to protect buyer funds, increase market transparency, and align Uzbekistan's property market practices with international standards.",
      },
      { type: "h2", text: "Part 1: Shared Construction Escrow (Effective January 1, 2026)" },
      {
        type: "ul",
        items: [
          "July 1 – December 31, 2025: parallel operation of the old and new systems",
          "From January 1, 2026: escrow-only model mandatory for all new shared construction agreements",
        ],
      },
      { type: "h3", text: "Key Requirements for Developers" },
      {
        type: "ul",
        items: [
          "Developers must contribute a minimum of 30% of their own funds before project financing can be drawn",
          "The interest rate on project financing is linked to the balance held in escrow",
          "Escrow funds cannot be arrested, suspended, or seized in connection with claims against the developer",
          "If a developer delays handover by more than 6 months, the buyer acquires the right to terminate and recover all deposited funds in full",
        ],
      },
      { type: "h2", text: "Part 2: General Property and Vehicle Escrow (Effective April 1, 2026)" },
      {
        type: "p",
        text: "From April 1, 2026, escrow accounts became mandatory for all purchase and sale transactions involving real estate and vehicles not older than 10 years (categories M, N, O, and G).",
      },
      { type: "h3", text: "Fee Structure" },
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
      { type: "h2", text: "Compliance Considerations and Key Risks" },
      { type: "h3", text: "Understating Contract Price" },
      {
        type: "p",
        text: "Escrow funds must match the stated contract price and flow through a regulated bank, creating an evidentiary paper trail visible to tax authorities and financial intelligence units.",
      },
      { type: "h3", text: "Foreign Currency Transactions" },
      {
        type: "p",
        text: "Real estate transactions in Uzbekistan are denominated in Uzbek som. Parties negotiating in USD must account for exchange rate movements between agreement signing and registration completion.",
      },
      { type: "divider" },
      { type: "h2", text: "Summary of Key Dates and Rules" },
      {
        type: "ul",
        items: [
          "January 1, 2026: escrow mandatory for all new shared construction agreements",
          "April 1, 2026: escrow mandatory for all real estate and qualifying vehicle transactions",
          "Developer minimum equity: 30% own funds required before project financing",
          "Buyer exit right: 6-month delay triggers full refund right",
          "Escrow fee (real estate): 206,000 UZS fixed",
          "Escrow fee (vehicles): 103,000 UZS fixed",
        ],
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
        text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
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
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer.",
      },
      { type: "h2", text: "Reporting Obligations" },
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

export function sortedPublications(pubs: Publication[]): Publication[] {
  return [...pubs].sort((a, b) => {
    const ta = a.date ? new Date(a.date).getTime() : new Date(`${a.year}-01-01`).getTime();
    const tb = b.date ? new Date(b.date).getTime() : new Date(`${b.year}-01-01`).getTime();
    return tb - ta;
  });
}
