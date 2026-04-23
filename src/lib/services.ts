export interface ServiceData {
  slug: string;
  num: string;
  title: string;
  category: string;
  type: "advisory" | "operations";
  headline: string;
  description: string[];
  capabilities: string[];
}

// ── Advisory ────────────────────────────────────────────────────────────────────────────────
// You consult; the client executes.

export const advisoryServices: ServiceData[] = [
  {
    slug: "tax",
    num: "01",
    title: "Tax Consulting",
    category: "Advisory",
    type: "advisory",
    headline: "Strategic tax counsel\nfor complex markets",
    description: [
      "Our tax practice navigates Uzbekistan's evolving fiscal landscape with precision — designing structures that optimise your position while maintaining full regulatory compliance across cross-border transactions, local VAT obligations, and everything in between.",
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
    type: "advisory",
    headline: "Full-spectrum legal\ncounsel & protection",
    description: [
      "Our legal team provides end-to-end counsel for businesses operating in Uzbekistan — from entity formation and contract architecture to regulatory compliance and corporate structuring — protecting your interests with the rigour that complex, multi-jurisdictional operations demand.",
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
    title: "Accounting",
    category: "Advisory",
    type: "advisory",
    headline: "Financial clarity\nfor decisive leadership",
    description: [
      "We deliver full-cycle financial management — precise bookkeeping, transparent reporting, and strategic advisory that transforms your numbers into actionable intelligence, with full compliance across National Accounting Standards and IFRS.",
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
    category: "Advisory",
    type: "advisory",
    headline: "Strategic HR counsel\nfor growing enterprises",
    description: [
      "Our HR advisory practice covers the strategic and compliance dimensions of human capital — from organisational design and executive search to HR audits and labour law guidance — advising on the frameworks that underpin a compliant, high-performing workforce in Uzbekistan.",
    ],
    capabilities: [
      "Recruitment & executive search",
      "HR outsourcing",
      "HR audits & compliance",
      "Training & development",
      "Compensation benchmarking",
      "Organisational design",
      "Labour law advisory",
    ],
  },
  {
    slug: "funding",
    num: "05",
    title: "Funding & Grants",
    category: "Advisory",
    type: "advisory",
    headline: "Securing capital\nfor ambitious ventures",
    description: [
      "We guide businesses through the landscape of available funding — grants, investment readiness, donor engagement, and financial structuring for growth — drawing on deep relationships across the institutional funding ecosystem in Central Asia.",
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
  {
    slug: "ma-advisory",
    num: "06",
    title: "M&A Advisory",
    category: "Advisory",
    type: "advisory",
    headline: "Transaction counsel\nfrom origination to close",
    description: [
      "Our M&A practice guides buyers and sellers through every stage of a transaction in Uzbekistan — from structuring and due diligence to negotiation and post-deal integration — with a track record spanning $250M+ deals across FMCG, fintech, energy, and manufacturing.",
    ],
    capabilities: [
      "Buy-side & sell-side advisory",
      "Transaction structuring",
      "Valuation support",
      "Negotiation & deal management",
      "Post-acquisition integration",
      "Joint venture structuring",
      "Management buyout advisory",
      "Cross-border deal coordination",
    ],
  },
  {
    slug: "due-diligence",
    num: "07",
    title: "Due Diligence",
    category: "Advisory",
    type: "advisory",
    headline: "Complete risk assessment\nbefore you commit",
    description: [
      "Our due diligence practice provides comprehensive tax, legal, and financial assessment of Uzbek targets — giving acquirers, investors, and lenders a clear picture of what they are buying, with 30+ engagements completed across energy, mining, FMCG, and manufacturing.",
    ],
    capabilities: [
      "Tax due diligence",
      "Legal due diligence",
      "Financial due diligence",
      "Regulatory compliance review",
      "Employment & HR review",
      "Vendor due diligence",
      "Red flag reports",
      "Full scope DD reports",
    ],
  },
];

// ── Operations ────────────────────────────────────────────────────────────────────────────
// You delegate; we execute on your behalf.

export const operationsServices: ServiceData[] = [
  {
    slug: "entity-management",
    num: "01",
    title: "Entity Management",
    category: "Operations",
    type: "operations",
    headline: "We run your Uzbekistan\nentity end-to-end",
    description: [
      "For foreign companies that want a full presence in Uzbekistan without building an internal team, we take complete operational control — acting as your on-the-ground management layer across accounting, tax, legal, and HR.",
      "One contract, one point of contact, full compliance. Everything your entity needs to operate correctly and efficiently.",
    ],
    capabilities: [
      "Outsourced accounting & bookkeeping",
      "Tax compliance & filings",
      "Legal compliance monitoring",
      "HR & payroll management",
      "Regulatory submissions & deadlines",
      "Annual reporting & audit preparation",
      "Corporate governance oversight",
      "Dedicated client manager",
    ],
  },
  {
    slug: "corporate",
    num: "02",
    title: "Corporate Services",
    category: "Operations",
    type: "operations",
    headline: "Company setup &\ncorporate administration",
    description: [
      "We handle the full lifecycle of your corporate presence in Uzbekistan — from incorporation and ongoing administration to nominal services that let foreign companies operate without a physical footprint.",
      "Our corporate services team manages the paperwork, deadlines, and compliance so you can focus on your business.",
    ],
    capabilities: [
      "Company formation & registration",
      "Nominal director services",
      "Nominal / registered address",
      "Corporate secretarial services",
      "Power of attorney",
      "Company liquidation & dissolution",
      "Branch & representative office setup",
    ],
  },
  {
    slug: "eor",
    num: "03",
    title: "Employer of Record",
    category: "Operations",
    type: "operations",
    headline: "Hire in Uzbekistan\nwithout an entity",
    description: [
      "We become the legal employer for your staff in Uzbekistan — handling all employment contracts, payroll, tax withholding, and statutory compliance while your team works entirely for you.",
      "EOR is the fastest way to build a local presence without the cost and complexity of entity formation.",
    ],
    capabilities: [
      "Employment contract management",
      "Payroll processing & tax withholding",
      "Social contributions & benefits",
      "HR compliance & documentation",
      "Onboarding & offboarding",
      "Multi-employee EOR at scale",
      "Transition to own entity when ready",
    ],
  },
  {
    slug: "payroll",
    num: "04",
    title: "Payroll Bureau",
    category: "Operations",
    type: "operations",
    headline: "Accurate payroll,\nevery cycle",
    description: [
      "We handle the complete payroll cycle for your Uzbekistan workforce — calculation, withholding, reporting, and payment — with full compliance with local tax and labour law.",
      "Whether you have 5 or 500 employees, our payroll bureau runs accurately and on time, every month.",
    ],
    capabilities: [
      "Monthly payroll calculation",
      "Tax & social contribution withholding",
      "Salary payment processing",
      "Payslip generation",
      "Payroll tax reporting",
      "Year-end reconciliation",
      "Multi-currency payroll",
      "Payroll audit support",
    ],
  },
  {
    slug: "immigration",
    num: "05",
    title: "Work Permits & Immigration",
    category: "Operations",
    type: "operations",
    headline: "Compliant entry\nfor your global talent",
    description: [
      "We manage the full cycle of work permit applications, visa support, and immigration compliance for foreign nationals working in Uzbekistan — removing complexity and reducing processing time.",
      "From initial application to renewal and exit, our team handles every interaction with the relevant authorities on your behalf.",
    ],
    capabilities: [
      "Work permit applications & renewals",
      "Business visa support",
      "Residency permit advisory",
      "Document preparation & apostille",
      "Government liaison & submission",
      "Permit tracking & deadline management",
      "Dependant visa support",
      "Exit procedures",
    ],
  },
  {
    slug: "virtual-office",
    num: "06",
    title: "Virtual Office",
    category: "Operations",
    type: "operations",
    headline: "A professional presence\nwithout the overhead",
    description: [
      "Establish a credible Uzbekistan address for your business without committing to physical space. Our virtual office service provides a registered address, mail handling, and access to meeting facilities when you need them.",
      "Ideal for companies exploring the market, managing compliance obligations, or running a lean local presence.",
    ],
    capabilities: [
      "Registered business address",
      "Mail receipt & forwarding",
      "Document scanning & delivery",
      "Meeting room access",
      "Local phone number & call handling",
      "Courier & logistics support",
    ],
  },
  {
    slug: "compliance",
    num: "07",
    title: "Compliance Monitoring",
    category: "Operations",
    type: "operations",
    headline: "Never miss a deadline\nor regulatory change",
    description: [
      "Uzbekistan's regulatory environment evolves rapidly. Our compliance monitoring service tracks filing deadlines, legislative changes, and reporting obligations across tax, legal, and corporate — keeping your entity permanently in good standing.",
      "We operate as your regulatory early-warning system, flagging what matters before it becomes a problem.",
    ],
    capabilities: [
      "Filing deadline calendar & alerts",
      "Regulatory change monitoring",
      "Tax & statutory filing oversight",
      "Corporate compliance checklist",
      "Annual obligation management",
      "Government correspondence handling",
      "Compliance status reporting",
      "Proactive risk flagging",
    ],
  },
];

export const servicesData: ServiceData[] = [
  ...advisoryServices,
  ...operationsServices,
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
