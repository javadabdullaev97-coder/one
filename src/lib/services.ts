export interface ServiceData {
  slug: string;
  num: string;
  title: string;
  category: string;
  headline: string;
  description: string[];
  capabilities: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "tax",
    num: "01",
    title: "Tax Consulting",
    category: "Advisory",
    headline: "Strategic tax counsel\nfor complex markets",
    description: [
      "Our tax practice navigates Uzbekistan's evolving fiscal landscape with precision. We design structures that optimize your position while maintaining full regulatory compliance.",
      "From cross-border transactions to local VAT obligations, our team brings deep technical knowledge paired with practical commercial awareness.",
    ],
    capabilities: [
      "Tax planning & optimization",
      "Compliance & filing",
      "Transfer pricing advisory",
      "Tax audit representation",
      "International tax structuring",
      "VAT consulting",
      "Tax incentive applications",
      "Customs & excise advisory",
    ],
  },
  {
    slug: "legal",
    num: "02",
    title: "Legal Advisory",
    category: "Advisory",
    headline: "Full-spectrum legal\ncounsel & protection",
    description: [
      "Our legal team provides end-to-end counsel for businesses operating in Uzbekistan — from entity formation and contract architecture to regulatory compliance and corporate structuring.",
      "We protect your interests with the rigour and attention to detail that complex, multi-jurisdictional operations demand.",
    ],
    capabilities: [
      "Company formation & licensing",
      "Contract drafting & review",
      "Corporate governance",
      "Regulatory compliance",
      "Intellectual property",
      "Labour law advisory",
      "Merger & acquisition support",
    ],
  },
  {
    slug: "finance",
    num: "03",
    title: "Finance & Accounting",
    category: "Operations",
    headline: "Financial clarity\nfor decisive leadership",
    description: [
      "We deliver full-cycle financial management — precise bookkeeping, transparent reporting, and strategic advisory that transforms your numbers into actionable intelligence.",
      "Our team ensures compliance with both National Accounting Standards and IFRS, giving international stakeholders the confidence they require.",
    ],
    capabilities: [
      "Bookkeeping & accounting",
      "IFRS / NAS reporting",
      "Audit preparation & support",
      "Budgeting & forecasting",
      "Cash flow management",
      "Financial modelling",
      "Management reporting",
      "Internal controls advisory",
    ],
  },
  {
    slug: "hr",
    num: "04",
    title: "Human Resources",
    category: "Operations",
    headline: "Talent infrastructure\nfor growing enterprises",
    description: [
      "Our HR practice provides the complete human capital infrastructure — from recruitment and payroll to compliance and organisational development. We also serve as Employer of Record for foreign companies entering Uzbekistan.",
      "Whether you're hiring your first local employee or managing a full team, our expertise ensures compliance and operational efficiency.",
    ],
    capabilities: [
      "Recruitment & executive search",
      "Payroll management",
      "HR outsourcing",
      "Employer of Record (EOR)",
      "HR audits & compliance",
      "Training & development",
      "Compensation benchmarking",
      "Work permit administration",
    ],
  },
  {
    slug: "marketing",
    num: "05",
    title: "Marketing",
    category: "Growth",
    headline: "Brand presence across\nCentral Asian markets",
    description: [
      "We build and execute marketing strategies that establish your brand in Uzbekistan and across Central Asia — from digital campaigns to full brand development.",
      "Our approach combines data-driven performance marketing with deep local market understanding to deliver measurable impact.",
    ],
    capabilities: [
      "Digital strategy & planning",
      "Social media management",
      "Content creation & copywriting",
      "Brand identity development",
      "SEO & performance marketing",
      "Market research & analysis",
      "Campaign management",
      "Public relations",
    ],
  },
  {
    slug: "funding",
    num: "06",
    title: "Funding",
    category: "Growth",
    headline: "Securing capital\nfor ambitious ventures",
    description: [
      "We guide businesses through the landscape of available funding — grants, investment readiness, donor engagement, and financial structuring for growth.",
      "Our team has deep relationships across the institutional funding ecosystem in Central Asia, connecting the right capital with the right opportunities.",
    ],
    capabilities: [
      "Grant identification & applications",
      "Investment readiness assessment",
      "Business plan development",
      "Donor & investor matching",
      "Financial modelling & projections",
      "Due diligence preparation",
      "Pitch deck development",
      "Post-funding compliance",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
