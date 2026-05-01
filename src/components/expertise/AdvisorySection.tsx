"use client";

import { Link } from "@/i18n/navigation";
import { useState, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calculator,
  FileText,
  Globe,
  Handshake,
  Landmark,
  LayoutDashboard,
  LineChart,
  MapPin,
  Scale,
  ScanSearch,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";
import { advisoryServices } from "@/lib/services";
import { cn } from "@/lib/utils";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

const serviceIcons: Record<string, LucideIcon> = {
  tax: Calculator,
  legal: Scale,
  finance: LineChart,
  hr: Users,
  funding: Landmark,
  "ma-advisory": Handshake,
  "due-diligence": ScanSearch,
  "entity-management": LayoutDashboard,
  corporate: Briefcase,
  eor: UserCheck,
  payroll: Wallet,
  immigration: Globe,
  "virtual-office": MapPin,
  compliance: ShieldCheck,
};

// RGB accent per service for gradient + icon tinting
const serviceAccents: Record<string, string> = {
  tax:            "184,146,42",
  legal:          "30,64,175",
  finance:        "13,148,136",
  hr:             "124,58,237",
  funding:        "22,163,74",
  "ma-advisory":  "139,26,26",
  "due-diligence":"194,65,12",
};

const serviceFor: Record<string, string> = {
  tax:            "Foreign-invested companies, holding structures, and cross-border operators navigating Uzbekistan's fiscal complexity.",
  legal:          "International businesses entering Uzbekistan, M&A counterparties, and companies requiring regulatory clearances.",
  finance:        "Foreign subsidiaries needing IFRS-compliant reporting, investor-ready financials, or audit-prepared books.",
  hr:             "Growing businesses requiring compliant HR infrastructure, executive hiring, or workforce compliance reviews.",
  funding:        "Startups seeking grants, companies preparing for investment rounds, and businesses applying for state incentives.",
  "ma-advisory":  "Strategic acquirers, PE funds, and founders seeking M&A transactions in Uzbekistan and Central Asia.",
  "due-diligence":"Buyers, lenders, and investors requiring independent risk assessment before a transaction closes.",
};

const relatedArticle: Record<string, { slug: string; title: string; tag: string } | null> = {
  tax:            { slug: "permanent-establishment-uzbekistan",  title: "Permanent Establishment Risk in Uzbekistan",    tag: "Tax Briefing"   },
  legal:          { slug: "representative-offices-uzbekistan",   title: "Representative Offices in Uzbekistan",          tag: "Legal Briefing" },
  finance:        { slug: "accounting-law-uzbekistan",           title: "Accounting Law in Uzbekistan",                  tag: "Advisory"       },
  hr:             { slug: "payroll-social-contributions",        title: "Payroll & Social Contributions",                tag: "HR Briefing"    },
  funding:        null,
  "ma-advisory":  { slug: "escrow-accounts-uzbekistan",          title: "Escrow Accounts in Uzbekistan",                 tag: "Legal Briefing" },
  "due-diligence":{ slug: "accounting-policy-tax-purposes",      title: "Accounting Policy for Tax Purposes",            tag: "Tax Briefing"   },
};

export default function AdvisorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const t = useTranslations("AdvisorySection");
  const tServices = useTranslations("Services");

  const active = advisoryServices[activeIndex];
  const ActiveIcon = serviceIcons[active.slug] ?? ArrowUpRight;
  const accent = serviceAccents[active.slug] ?? "255,255,255";
  const direction = activeIndex >= prevIndex ? 1 : -1;

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(i);
  };

  return (
    <section id="advisory" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.15]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 md:mb-16">
          <div>
            <p className="tracking-luxury text-white/50 mb-4">{t("eyebrow")}</p>
            <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
              {t("heading")}
            </h2>
            <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
              {t("description")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden">

          {/* Left: service list */}
          <div className="border-r border-white/[0.07] flex flex-col divide-y divide-white/[0.04]">
            {advisoryServices.map((service, i) => {
              const isActive = i === activeIndex;
              const ItemIcon = serviceIcons[service.slug] ?? ArrowUpRight;
              return (
                <motion.button
                  key={service.slug}
                  type="button"
                  onMouseEnter={() => handleSelect(i)}
                  onClick={() => handleSelect(i)}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative w-full flex flex-1 items-center gap-4 px-6 py-5 text-left transition-colors duration-200",
                    isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.018]"
                  )}
                >
                  <span className={cn(
                    "absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300",
                    isActive ? "bg-primary" : "bg-transparent"
                  )} />
                  <span className={cn(
                    "w-8 h-8 rounded flex items-center justify-center shrink-0 border transition-all duration-250",
                    isActive
                      ? "border-primary/28 bg-primary/[0.09]"
                      : "border-white/[0.06] bg-transparent group-hover:border-white/[0.13] group-hover:bg-white/[0.03]"
                  )}>
                    <ItemIcon
                      className={cn(
                        "w-3.5 h-3.5 transition-colors duration-250",
                        isActive ? "text-primary" : "text-white/28 group-hover:text-white/58"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className={cn(
                    "flex-1 text-[15px] font-medium tracking-[0.02em] transition-colors duration-200",
                    isActive ? "text-foreground" : "text-white/40 group-hover:text-white/72"
                  )}>
                    {tServices(`${service.slug}.title`)}
                  </span>
                  <ArrowRight className={cn(
                    "w-3.5 h-3.5 shrink-0 transition-all duration-200",
                    isActive ? "text-primary opacity-100" : "opacity-0 group-hover:opacity-25 group-hover:text-white"
                  )} />
                </motion.button>
              );
            })}
          </div>

          {/* Right: active service detail */}
          <div className="relative bg-[#070707] min-h-[580px] md:h-[620px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: direction * 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col overflow-y-auto"
              >
                {/* Gradient header */}
                <div
                  className="relative px-8 md:px-10 pt-8 pb-7 shrink-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(${accent},0.12) 0%, rgba(${accent},0.04) 50%, transparent 100%)`,
                    borderBottom: `1px solid rgba(${accent},0.1)`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, rgba(${accent},0.7) 0%, rgba(${accent},0.2) 55%, transparent 100%)` }}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className="w-12 h-12 rounded-lg flex items-center justify-center border shrink-0"
                        style={{ borderColor: `rgba(${accent},0.25)`, background: `rgba(${accent},0.1)` }}
                      >
                        <ActiveIcon
                          className="w-5 h-5"
                          style={{ color: `rgba(${accent},0.9)` }}
                          strokeWidth={1.5}
                        />
                      </span>
                      <div>
                        <h3 className="heading-luxury text-xl md:text-[1.35rem] text-foreground leading-tight">
                          {tServices(`${active.slug}.title`)}
                        </h3>
                        <p className="text-[9px] tracking-[0.18em] uppercase text-white/28 mt-1">{t("advisoryLabel")}</p>
                      </div>
                    </div>
                    <span className="font-serif text-sm text-white/[0.14] tabular-nums shrink-0 mt-1">
                      {String(activeIndex + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(advisoryServices.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-8 md:px-10 py-7 gap-6">

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[14px] text-white/55 leading-relaxed"
                  >
                    {tServices(`${active.slug}.description`)}
                  </motion.p>

                  {/* Who this is for */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border-l-2 pl-4 py-0.5"
                    style={{ borderColor: `rgba(${accent},0.35)` }}
                  >
                    <p
                      className="text-[10px] tracking-[0.18em] uppercase mb-1.5"
                      style={{ color: `rgba(${accent},0.65)` }}
                    >
                      {t("whoThisIsFor")}
                    </p>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      {serviceFor[active.slug]}
                    </p>
                  </motion.div>

                  {/* Capabilities */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.14 }}
                  >
                    <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-3">
                      {t("capabilities")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(tServices.raw(`${active.slug}.capabilities`) as string[]).map((cap, ci) => (
                        <motion.span
                          key={cap}
                          initial={{ opacity: 0, scale: 0.93 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.16 + ci * 0.022, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="text-[11px] text-white/38 border border-white/[0.07] px-3 py-1.5 hover:border-primary/28 hover:text-white/65 hover:bg-primary/[0.04] transition-all duration-200 cursor-default"
                        >
                          {cap}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Related article */}
                  {relatedArticle[active.slug] && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.22 }}
                    >
                      <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-2.5">
                        {t("relatedReading")}
                      </p>
                      <Link
                        href={`/insights/${relatedArticle[active.slug]!.slug}`}
                        className="group/art flex items-center gap-3 border border-white/[0.06] hover:border-white/[0.12] px-4 py-3 transition-colors duration-200"
                      >
                        <FileText className="w-3.5 h-3.5 text-white/25 shrink-0 group-hover/art:text-white/50 transition-colors duration-200" />
                        <span className="text-[12px] text-white/40 group-hover/art:text-white/65 transition-colors duration-200 flex-1 line-clamp-1">
                          {relatedArticle[active.slug]!.title}
                        </span>
                        <span className="text-[9px] tracking-[0.14em] uppercase text-white/20 shrink-0">
                          {relatedArticle[active.slug]!.tag}
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-white/20 shrink-0 group-hover/art:text-white/50 group-hover/art:translate-x-0.5 group-hover/art:-translate-y-0.5 transition-all duration-200" />
                      </Link>
                    </motion.div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
