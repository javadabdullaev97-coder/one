import { publications, type PublicationArticle, type LocalizedArticle } from "./publications";
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
import islamicFinance from "./articles/islamic-finance-uzbekistan";

type LocalizedArticleMap = Record<string, LocalizedArticle>;
type ArticleSource = LocalizedArticleMap | LocalizedArticle;

const articleSources: Record<string, ArticleSource> = {
  "outsourcing-operational-activities": outsourcing,
  "accounting-policy-tax-purposes": accountingPolicy,
  "franchising-uzbekistan": franchising,
  "escrow-accounts-uzbekistan": escrow,
  "payroll-social-contributions": payroll,
  "creative-industry-park-uzbekistan": creativeIndustryPark,
  "online-gambling-uzbekistan": onlineGambling,
  "permanent-establishment-uzbekistan": permanentEstablishment,
  "self-employment-uzbekistan": selfEmployment,
  "pit-refunds-education-uzbekistan": pitRefundsEducation,
  "licensing-procedures-uzbekistan": licensingProcedures,
  "crypto-asset-service-providers-uzbekistan": cryptoAssetProviders,
  "special-economic-zones-uzbekistan": specialEconomicZones,
  "accounting-law-uzbekistan": accountingLaw,
  "representative-offices-uzbekistan": representativeOffices,
  "voluntary-liquidation-uzbekistan": voluntaryLiquidation,
  "employer-of-record-central-asia": employerOfRecord,
  "islamic-finance-uzbekistan": islamicFinance,
};

function isLocalizedMap(source: ArticleSource): source is LocalizedArticleMap {
  return "en" in (source as Record<string, unknown>) && !("content" in (source as Record<string, unknown>));
}

export function getArticleBySlug(slug: string, locale: string = "en"): PublicationArticle | undefined {
  const pub = publications.find((p) => p.slug === slug);
  const source = articleSources[slug];
  if (!pub || !source) return undefined;
  const localized: LocalizedArticle = isLocalizedMap(source)
    ? source[locale] ?? source.en
    : source;
  return { ...pub, ...localized };
}
