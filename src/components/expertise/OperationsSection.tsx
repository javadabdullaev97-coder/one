"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { operationsServices } from "@/lib/services";
import { cn } from "@/lib/utils";

const SHOWN_SLUGS = ["entity-management", "eor", "corporate", "virtual-office"];
const shownServices = SHOWN_SLUGS
  .map(slug => operationsServices.find(s => s.slug === slug))
  .filter(Boolean) as typeof operationsServices;

const relatedArticle: Record<string, { slug: string; title: string; tag: string } | null> = {
  "entity-management": null,
  "eor":               { slug: "employer-of-record-central-asia",    title: "Employer of Record in Central Asia",       tag: "HR Briefing"    },
  "corporate":         { slug: "representative-offices-uzbekistan",  title: "Representative Offices in Uzbekistan",    tag: "Legal Briefing" },
  "virtual-office":    null,
};

export default function OperationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="operations" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.06]">
      <div className="ambient-glow ambient-glow-warm w-[700px] h-[700px] top-1/4 right-0 translate-x-1/2 opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 md:mb-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="tracking-luxury text-white/50 mb-4">Operations</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                You delegate &mdash; we execute
              </h2>
              <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
                Fully managed services where we handle execution on your behalf &mdash; one
                contract, one point of contact, full compliance.
              </p>
            </div>
            <span className="hidden md:block font-serif text-[11px] tracking-[0.16em] uppercase text-white/18 shrink-0 pb-1">
              {shownServices.length} services
            </span>
          </div>
        </AnimatedSection>

        <div className="border-t border-white/[0.07]">
          {shownServices.map((service, i) => {
            const isOpen = activeIndex === i;
            const article = relatedArticle[service.slug];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative border-b border-white/[0.06] group/row transition-colors duration-200",
                  isOpen ? "bg-white/[0.018]" : "hover:bg-white/[0.01]"
                )}
              >
                {/* Left active bar */}
                <motion.span
                  animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0.4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-top"
                />

                {/* Row header */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 md:gap-8 py-6 md:py-7 pl-6 pr-4 text-left"
                >
                  <span className="font-serif text-xs tabular-nums text-white/18 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className={cn(
                    "heading-luxury text-lg md:text-xl flex-1 transition-colors duration-200",
                    isOpen ? "text-foreground" : "text-white/55 group-hover/row:text-white/85"
                  )}>
                    {service.title}
                  </span>

                  {/* Key capability preview — visible when closed */}
                  {!isOpen && (
                    <span className="hidden md:flex items-center gap-3 shrink-0">
                      {service.capabilities.slice(0, 2).map(cap => (
                        <span key={cap} className="text-[10px] tracking-[0.1em] uppercase text-white/20 border border-white/[0.05] px-2.5 py-1">
                          {cap}
                        </span>
                      ))}
                    </span>
                  )}

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-250 ml-2",
                      isOpen ? "border-primary/30 bg-primary/[0.07]" : "border-white/[0.10] group-hover/row:border-white/[0.22]"
                    )}
                  >
                    <Plus className={cn(
                      "w-3 h-3 transition-colors duration-250",
                      isOpen ? "text-primary" : "text-white/35 group-hover/row:text-white/60"
                    )} />
                  </motion.span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-6 pr-4 md:pr-8">
                        <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 border-t border-white/[0.04] pt-7">

                          {/* Left: description */}
                          <div className="flex flex-col gap-5">
                            <motion.p
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: 0.06 }}
                              className="text-[14px] text-white/52 leading-relaxed"
                            >
                              {service.description[0]}
                            </motion.p>

                            {service.description[1] && (
                              <motion.p
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: 0.1 }}
                                className="text-[14px] text-white/38 leading-relaxed"
                              >
                                {service.description[1]}
                              </motion.p>
                            )}

                          </div>

                          {/* Right: capabilities + related article */}
                          <div className="flex flex-col gap-5">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2, delay: 0.12 }}
                            >
                              <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-3">
                                Capabilities
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {service.capabilities.map((cap, ci) => (
                                  <motion.span
                                    key={cap}
                                    initial={{ opacity: 0, scale: 0.93 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.14 + ci * 0.018, duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[11px] text-white/35 border border-white/[0.07] px-3 py-1.5 hover:border-primary/25 hover:text-white/55 hover:bg-primary/[0.03] transition-all duration-200 cursor-default"
                                  >
                                    {cap}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>

                            {article && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.2 }}
                              >
                                <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-2.5">
                                  Related reading
                                </p>
                                <Link
                                  href={`/insights/${article.slug}`}
                                  className="group/art flex items-center gap-3 border border-white/[0.06] hover:border-white/[0.12] px-4 py-3 transition-colors duration-200"
                                >
                                  <FileText className="w-3.5 h-3.5 text-white/25 shrink-0 group-hover/art:text-white/50 transition-colors duration-200" />
                                  <span className="text-[12px] text-white/40 group-hover/art:text-white/65 transition-colors duration-200 flex-1 line-clamp-1">
                                    {article.title}
                                  </span>
                                  <ArrowUpRight className="w-3 h-3 text-white/20 shrink-0 group-hover/art:text-white/50 group-hover/art:translate-x-0.5 group-hover/art:-translate-y-0.5 transition-all duration-200" />
                                </Link>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
