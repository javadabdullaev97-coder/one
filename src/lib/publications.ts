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
    slug: "franchising-uzbekistan",
    tag: "Legal Brief",
    category: "Legal",
    title: "Franchising in Uzbekistan: A Simple Guide for Business Owners",
    description:
      "Navigate the legal framework and mandatory registration processes for successful franchise agreements in Uzbekistan.",
    year: "2024",
    date: "2024-11-01",
    pages: 8,
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
  {
    slug: "creative-industry-park-uzbekistan",
    tag: "Legal Brief",
    category: "Legal",
    title: "Strategic Benefits for Residents of Creative Industry Park",
    description:
      "Explore the specialised legal framework, significant tax incentives, and unique support mechanisms available for businesses within Uzbekistan's Creative Industry Park.",
    year: "2024",
    date: "2024-12-25",
    pages: 8,
    hasRead: true,
  },
  {
    slug: "online-gambling-uzbekistan",
    tag: "Legal Brief",
    category: "Legal",
    title: "Regulating Online Gambling, Lotteries, and Betting in Uzbekistan",
    description:
      "Explore the essential regulatory framework and licensing requirements for operating online gambling, lottery, and betting platforms in Uzbekistan, effective January 1, 2025.",
    year: "2024",
    date: "2024-12-23",
    pages: 6,
    hasRead: true,
  },
  {
    slug: "permanent-establishment-uzbekistan",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Uzbekistan Permanent Establishment (PE): A Practical Guide",
    description:
      "Essential insights for foreign investors to understand and fulfil Permanent Establishment requirements in Uzbekistan, including registration, taxation, and deductible expenses.",
    year: "2025",
    date: "2025-01-15",
    pages: 8,
    hasRead: true,
  },
  {
    slug: "self-employment-uzbekistan",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Self-Employment in Uzbekistan",
    description:
      "Find out how to register, understand tax benefits, and navigate the legal aspects of self-employment in Uzbekistan.",
    year: "2024",
    date: "2024-05-15",
    pages: 6,
    hasRead: true,
  },
  {
    slug: "pit-refunds-education-uzbekistan",
    tag: "Tax Briefing",
    category: "Tax",
    title: "How to Claim PIT Refunds for Education in Uzbekistan",
    description:
      "Your guide to personal income tax benefits and refunds for education expenses, mortgages, and more in Uzbekistan.",
    year: "2024",
    date: "2024-06-01",
    pages: 6,
    hasRead: true,
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
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
