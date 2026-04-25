import { type ComponentType, type SVGProps } from "react";
import { Building2, Cpu, Flame, Landmark, Stethoscope, Store } from "lucide-react";

export type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface IndustryGroup {
  name: string;
  icon: LucideIcon;
  accent: string;
  image?: string;
  description: string;
  sectors: string[];
  offerings: string[];
}

export const industryGroups: IndustryGroup[] = [
  {
    name: "Financial Services",
    icon: Landmark,
    accent: "30,64,138",
    image: "/Sectors/Banking.png",
    description: "Banks, investment funds, PE firms, and digital asset operators across Central Asia rely on Advizen for licensing, regulatory compliance, fund structuring, and cross-border transaction advisory.",
    sectors: ["Banking & Finance", "Investment & Venture Funds", "Private Equity & Wealth", "Capital Markets", "Blockchain & Crypto"],
    offerings: ["Licensing and regulatory compliance", "Corporate governance advisory", "IFRS & NAS financial reporting", "Fund and SPV structuring", "M&A and restructuring support", "Transfer pricing documentation", "Digital asset legal structuring"],
  },
  {
    name: "Energy & Industrials",
    icon: Flame,
    accent: "194,65,12",
    image: "/Sectors/Energy.png",
    description: "From nuclear power and renewables to oil & gas, agri-processing, and heavy manufacturing — we provide tax, customs, and legal advisory for capital-intensive projects and their investors across Uzbekistan.",
    sectors: ["Energy & Natural Resources", "Oil & Gas", "Manufacturing", "Agriculture & Agro-processing"],
    offerings: ["Tax and customs structuring for large projects", "Transfer pricing documentation", "Holdings and investment structuring", "Due diligence for energy and industrial assets", "Free economic zone advisory", "HR and payroll at scale"],
  },
  {
    name: "Technology & Digital",
    icon: Cpu,
    accent: "37,99,235",
    image: "/Sectors/Technology.png",
    description: "Tech companies, fintechs, and telecoms entering Uzbekistan's growing digital economy rely on us for tax structuring, regulatory licensing, and the legal frameworks that support rapid scaling.",
    sectors: ["IT & Software", "Fintech", "Telecom", "Blockchain & Crypto"],
    offerings: ["Tax structuring for market entry", "Fintech regulatory compliance", "Software and IP licensing advisory", "Investment and shareholder structuring", "Digital asset legal structuring", "HR for engineering teams"],
  },
  {
    name: "Real Estate & Infrastructure",
    icon: Building2,
    accent: "71,85,105",
    image: "/Sectors/Real Estate.png",
    description: "Large-scale property and infrastructure projects demand careful tax and legal planning from the outset. We advise developers, contractors, and investors on project structuring, permitting, and compliance.",
    sectors: ["Commercial Real Estate", "Residential Development", "Construction", "Infrastructure"],
    offerings: ["Project tax optimisation", "Contract architecture and review", "Labour law and workforce compliance", "Permitting and regulatory advisory", "Investment structuring for developers"],
  },
  {
    name: "Consumer & Lifestyle",
    icon: Store,
    accent: "180,83,9",
    image: "/Sectors/Retail.png",
    description: "From FMCG and retail to hospitality, media, and sports — we support consumer-facing businesses across Uzbekistan with market entry structuring, HR at scale, payroll, and operational compliance.",
    sectors: ["FMCG & Retail", "Hospitality & Tourism", "Media & Entertainment", "Sports"],
    offerings: ["Market entry and entity formation", "M&A and expansion structuring", "Payroll and HR outsourcing", "Franchise and distribution agreements", "IP and content contracts", "Event and sponsorship structuring"],
  },
  {
    name: "Healthcare & Social",
    icon: Stethoscope,
    accent: "13,148,136",
    image: "/Sectors/Healthcare.png",
    description: "International pharma companies, healthcare operators, private schools, and universities rely on us for smooth market entry, licensing advisory, and the HR and compliance infrastructure needed to operate at scale.",
    sectors: ["Pharmaceuticals", "Healthcare Providers", "Private Education", "EdTech"],
    offerings: ["Market entry and product registration", "Regulatory compliance advisory", "HR, payroll, and EOR services", "Entity formation and licensing", "Foreign staff work permits", "Tax compliance and reporting"],
  },
];

export interface Engagement {
  sector: string;
  metric: string;
  metricLabel: string;
  headline: string;
  disciplines: string[];
}

export const allEngagements: Engagement[] = [
  { sector: "Energy",          metric: "$10B+",  metricLabel: "Project budget",        headline: "Tax, accounting, and customs structuring of a nuclear power plant construction for a Russian enterprise",                                            disciplines: ["Tax", "Finance"] },
  { sector: "Energy",          metric: "$2B+",   metricLabel: "Structured investment",  headline: "Tax & legal due diligence, holdings structuring, and transfer pricing documentation for all operations of a Chinese energy group of companies in Uzbekistan", disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "FMCG",            metric: "$250M",  metricLabel: "Transaction",            headline: "M&A of a large Uzbek bottler company",                                                                                                               disciplines: ["Tax", "Legal"] },
  { sector: "Fintech",         metric: "$200M",  metricLabel: "Transaction",            headline: "Two major restructuring projects of an international digital bank in its Uzbek subsidiaries",                                                         disciplines: ["Tax", "Legal"] },
  { sector: "Manufacturing",   metric: "$20M",   metricLabel: "Transaction",            headline: "M&A and corporate restructuring of a large Uzbek cement producer",                                                                                   disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Technology",      metric: "$5M",    metricLabel: "Investment",             headline: "Tax structuring and ad-hoc consulting of a major Russian IT company during its market launch in Uzbekistan",                                         disciplines: ["Tax", "Legal"] },
  { sector: "Retail",          metric: "$5M",    metricLabel: "Transaction",            headline: "M&A and structuring for a major local retailer",                                                                                                      disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Islamic Fintech", metric: "~$1M",   metricLabel: "Seed round",             headline: "Tax and legal advisory for the seed investment phase structuring of an Uzbek-based fintech startup operating on Islamic finance principles",           disciplines: ["Tax", "Legal"] },
  { sector: "Public Sector",   metric: "1",      metricLabel: "State fund",             headline: "Reorganization and structuring of an Uzbek state-owned investment fund",                                                                              disciplines: ["Legal", "Tax"] },
  { sector: "Capital Markets", metric: "Policy", metricLabel: "Built from scratch",     headline: "Served as local tax, legal, and finance consultants for international firms hired by the government to develop capital market legislation",             disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Banking",         metric: "Policy", metricLabel: "Built from scratch",     headline: "Served as local consultants for international firms advising the government on banking legislation, including derivatives and REPO frameworks",         disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Islamic Finance", metric: "Policy", metricLabel: "Built from scratch",     headline: "Served as local consultants for an international firm advising the government on integrating Islamic finance instruments into Uzbek legislation",       disciplines: ["Tax", "Legal", "Finance"] },
  { sector: "Pharma",          metric: "5+",     metricLabel: "Companies",              headline: "Establishing, structuring, payroll consulting, and ongoing compliance advisory for international pharmaceutical companies in Uzbekistan",              disciplines: ["Tax", "Legal", "HR"] },
  { sector: "Cross-Industry",  metric: "80+",    metricLabel: "Entities incorporated",  headline: "End-to-end incorporation and registration advisory for both local and international companies across multiple industries",                             disciplines: ["Tax", "Legal", "HR"] },
  { sector: "Due Diligence",   metric: "30+",    metricLabel: "Tax & Legal DDs",        headline: "Tax and legal due diligence across renewable energy, mining, oil & gas, FMCG, and manufacturing sectors",                                             disciplines: ["Tax", "Legal"] },
];

export const heroStats = [
  { value: "7", label: "Advisory" },
  { value: "7", label: "Operations" },
  { value: "6", label: "Sectors" },
  { value: "$10B+", label: "Deals advised" },
];
