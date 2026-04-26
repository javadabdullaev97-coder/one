import { publications, type PublicationArticle } from "./publications";
import outsourcing from "./articles/outsourcing-operational-activities";
import accountingPolicy from "./articles/accounting-policy-tax-purposes";
import franchising from "./articles/franchising-uzbekistan";
import escrow from "./articles/escrow-accounts-uzbekistan";
import payroll from "./articles/payroll-social-contributions";
import creativeIndustryPark from "./articles/creative-industry-park-uzbekistan";
import onlineGambling from "./articles/online-gambling-uzbekistan";
import permanentEstablishment from "./articles/permanent-establishment-uzbekistan";
import selfEmployment from "./articles/self-employment-uzbekistan";
import pitRefundsEducation from "./articles/pit-refunds-education-uzbekistan";
import licensingProcedures from "./articles/licensing-procedures-uzbekistan";
import cryptoAssetProviders from "./articles/crypto-asset-service-providers-uzbekistan";
import specialEconomicZones from "./articles/special-economic-zones-uzbekistan";
import accountingLaw from "./articles/accounting-law-uzbekistan";
import representativeOffices from "./articles/representative-offices-uzbekistan";
import voluntaryLiquidation from "./articles/voluntary-liquidation-uzbekistan";
import employerOfRecord from "./articles/employer-of-record-central-asia";

function build(slug: string, extra: Omit<PublicationArticle, keyof typeof publications[0]>): PublicationArticle {
  const pub = publications.find((p) => p.slug === slug)!;
  return { ...pub, ...extra } as PublicationArticle;
}

export const articles: Record<string, PublicationArticle> = {
  "outsourcing-operational-activities": build("outsourcing-operational-activities", outsourcing),
  "accounting-policy-tax-purposes": build("accounting-policy-tax-purposes", accountingPolicy),
  "franchising-uzbekistan": build("franchising-uzbekistan", franchising),
  "escrow-accounts-uzbekistan": build("escrow-accounts-uzbekistan", escrow),
  "payroll-social-contributions": build("payroll-social-contributions", payroll),
  "creative-industry-park-uzbekistan": build("creative-industry-park-uzbekistan", creativeIndustryPark),
  "online-gambling-uzbekistan": build("online-gambling-uzbekistan", onlineGambling),
  "permanent-establishment-uzbekistan": build("permanent-establishment-uzbekistan", permanentEstablishment),
  "self-employment-uzbekistan": build("self-employment-uzbekistan", selfEmployment),
  "pit-refunds-education-uzbekistan": build("pit-refunds-education-uzbekistan", pitRefundsEducation),
  "licensing-procedures-uzbekistan": build("licensing-procedures-uzbekistan", licensingProcedures),
  "crypto-asset-service-providers-uzbekistan": build("crypto-asset-service-providers-uzbekistan", cryptoAssetProviders),
  "special-economic-zones-uzbekistan": build("special-economic-zones-uzbekistan", specialEconomicZones),
  "accounting-law-uzbekistan": build("accounting-law-uzbekistan", accountingLaw),
  "representative-offices-uzbekistan": build("representative-offices-uzbekistan", representativeOffices),
  "voluntary-liquidation-uzbekistan": build("voluntary-liquidation-uzbekistan", voluntaryLiquidation),
  "employer-of-record-central-asia": build("employer-of-record-central-asia", employerOfRecord),
};

export function getArticleBySlug(slug: string): PublicationArticle | undefined {
  return articles[slug];
}
