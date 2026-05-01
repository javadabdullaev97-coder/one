export interface Publication {
  slug: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  year: string;
  date?: string;
  pages: number;
  image?: string;
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
    title: "Outsourcing Operational Activities in Uzbekistan",
    description:
      "A practical overview of the regulatory framework governing outsourcing arrangements in Uzbekistan, including permitted structures, labour implications, and contract requirements.",
    year: "2025",
    date: "2025-11-10",
    pages: 8,
    hasRead: true,
  },
  {
    slug: "accounting-policy-tax-purposes",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Accounting Policy for Tax Purposes in Uzbekistan",
    description:
      "How Uzbekistan\'s tax code governs accounting method elections, asset classification, and timing differences — with practical guidance for foreign-invested entities.",
    year: "2025",
    date: "2025-10-22",
    pages: 10,
    hasRead: true,
  },
  {
    slug: "franchising-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Franchising in Uzbekistan: Legal Framework & Entry Structures",
    description:
      "An analysis of Uzbekistan\'s franchising legislation, registration obligations, royalty repatriation rules, and key contractual considerations for international franchisors.",
    year: "2025",
    date: "2025-09-15",
    pages: 9,
    hasRead: true,
  },
  {
    slug: "payroll-social-contributions",
    tag: "HR Briefing",
    category: "HR",
    title: "Payroll & Social Contributions: Employer Obligations in Uzbekistan",
    description:
      "A structured breakdown of employer payroll obligations — personal income tax withholding, social insurance contributions, reporting deadlines, and penalties for non-compliance.",
    year: "2025",
    date: "2025-08-30",
    pages: 11,
    hasRead: true,
  },
  {
    slug: "escrow-accounts-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Escrow Accounts in Uzbekistan: Legal Mechanics & Use Cases",
    description:
      "An overview of escrow account regulation in Uzbekistan, covering permitted use cases in M&A and real estate transactions, bank requirements, and release mechanics.",
    year: "2025",
    date: "2025-07-18",
    pages: 7,
    hasRead: true,
  },
  {
    slug: "creative-industry-park-uzbekistan",
    tag: "Advisory",
    category: "Advisory",
    title: "Creative Industry Park: Uzbekistan\'s Framework for Creative Economy",
    description:
      "A detailed guide to the Creative Industry Park regime — eligibility criteria, tax incentives, registration process, and operational requirements for qualifying entities.",
    year: "2025",
    date: "2025-06-05",
    pages: 13,
    hasRead: true,
  },
  {
    slug: "online-gambling-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Online Gambling Regulation in Uzbekistan",
    description:
      "The regulatory landscape for online gambling operators in Uzbekistan — licensing requirements, permitted game types, technical standards, and AML compliance obligations.",
    year: "2025",
    date: "2025-05-20",
    pages: 14,
    hasRead: true,
  },
  {
    slug: "permanent-establishment-uzbekistan",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Permanent Establishment Risk in Uzbekistan",
    description:
      "An in-depth analysis of permanent establishment triggers under Uzbek tax law and applicable tax treaties, with structuring strategies to mitigate PE exposure.",
    year: "2025",
    date: "2025-04-14",
    pages: 16,
    hasRead: true,
  },
  {
    slug: "self-employment-uzbekistan",
    tag: "HR Briefing",
    category: "HR",
    title: "Self-Employment Regime in Uzbekistan",
    description:
      "A practical guide to Uzbekistan\'s self-employment tax regime — eligibility, registration, contribution rates, and implications for businesses engaging independent contractors.",
    year: "2025",
    date: "2025-03-08",
    pages: 8,
    hasRead: true,
  },
  {
    slug: "crypto-asset-service-providers-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Crypto-Asset Service Providers: Licensing in Uzbekistan",
    description:
      "Uzbekistan\'s framework for crypto-asset service providers — NAFS licensing requirements, permitted activities, capital requirements, and AML/KYC obligations.",
    year: "2025",
    date: "2025-02-19",
    pages: 12,
    hasRead: true,
  },
  {
    slug: "licensing-procedures-uzbekistan",
    tag: "Advisory",
    category: "Advisory",
    title: "Licensing Procedures for Regulated Activities in Uzbekistan",
    description:
      "A sector-by-sector overview of licensing requirements in Uzbekistan, covering financial services, healthcare, construction, education, and media — with application timelines.",
    year: "2024",
    date: "2024-12-10",
    pages: 18,
    hasRead: true,
  },
  {
    slug: "special-economic-zones-uzbekistan",
    tag: "Advisory",
    category: "Advisory",
    title: "Special Economic Zones in Uzbekistan: A Comparative Guide",
    description:
      "A comparative analysis of Uzbekistan\'s SEZ landscape — free economic zones, small industrial zones, and IT parks — covering incentive packages, entry criteria, and operational constraints.",
    year: "2024",
    date: "2024-11-25",
    pages: 20,
    hasRead: true,
  },
  {
    slug: "accounting-law-uzbekistan",
    tag: "Advisory",
    category: "Advisory",
    title: "Accounting Law in Uzbekistan: Key Requirements for Businesses",
    description:
      "An overview of Uzbekistan\'s accounting legislation — mandatory chart of accounts, financial statement requirements, audit thresholds, and transition considerations for IFRS adoption.",
    year: "2024",
    date: "2024-10-30",
    pages: 11,
    hasRead: true,
  },
  {
    slug: "representative-offices-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Representative Offices in Uzbekistan: Registration & Compliance",
    description:
      "A practical guide to establishing and operating a foreign representative office in Uzbekistan — accreditation procedures, permitted activities, tax treatment, and staffing rules.",
    year: "2024",
    date: "2024-09-12",
    pages: 9,
    hasRead: true,
  },
  {
    slug: "voluntary-liquidation-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Voluntary Liquidation of Companies in Uzbekistan",
    description:
      "Step-by-step guidance on voluntary liquidation procedures for LLCs and JSCs in Uzbekistan — from board resolution through creditor notification to final deregistration.",
    year: "2024",
    date: "2024-08-06",
    pages: 10,
    hasRead: true,
  },
  {
    slug: "pit-refunds-education-uzbekistan",
    tag: "Tax Briefing",
    category: "Tax",
    title: "PIT Refunds for Education Expenses in Uzbekistan",
    description:
      "A guide to the personal income tax deduction and refund mechanism for education expenses in Uzbekistan — eligible institutions, claim procedures, and documentation requirements.",
    year: "2024",
    date: "2024-07-22",
    pages: 6,
    hasRead: true,
  },
  {
    slug: "employer-of-record-central-asia",
    tag: "HR Briefing",
    category: "HR",
    title: "Employer of Record in Central Asia: A Practical Overview",
    description:
      "How EOR structures operate across Kazakhstan, Uzbekistan, and Kyrgyzstan — legal foundations, risk allocation, onboarding timelines, and cost benchmarks for international employers.",
    year: "2026",
    date: "2026-03-15",
    pages: 15,
    hasRead: true,
  },
  {
    slug: "islamic-finance-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Islamic Finance in Uzbekistan: A Practical Guide",
    description:
      "Uzbekistan's Islamic finance framework explained — from the legislative foundation and permitted MFO instruments to Special Council requirements and Sharia-compliant penalty mechanics.",
    year: "2026",
    date: "2026-04-28",
    pages: 12,
    image: "/Articles Image/Islamic Finance.webp",
    hasRead: true,
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

export function getReadablePublicationSlugs(): string[] {
  return publications.filter((p) => p.hasRead).map((p) => p.slug);
}

export function sortedPublications(pubs: Publication[]): Publication[] {
  return [...pubs].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}
