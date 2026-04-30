"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AdvisorySection from "@/components/expertise/AdvisorySection";
import OperationsSection from "@/components/expertise/OperationsSection";
import { industryGroups, allEngagements, heroStats } from "@/lib/industries";
import regionImageLoader from "@/lib/image-loader";
import { cn } from "@/lib/utils";

// ─── Industries ─────────────────────────────────────────────

const industryToSectors: Record<string, string[]> = {
  "Financial Services":         ["Banking", "Fintech", "Capital Markets", "Islamic Finance", "Islamic Fintech"],
  "Energy & Industrials":       ["Energy", "Manufacturing"],
  "Technology & Digital":       ["Technology"],
  "Real Estate & Infrastructure": [],
  "Consumer & Lifestyle":       ["FMCG", "Retail"],
  "Healthcare & Social":        ["Pharma"],
};

function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryGroups[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-10 md:mb-12">
          <p className="tracking-luxury text-white/50 mb-3">Sector Experience</p>
          <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
            Sectors we serve
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden md:h-[760px]">
          {/* Left — sector list */}
          <div className="border-r border-white/[0.07] divide-y divide-white/[0.04] flex flex-col h-full">
            {industryGroups.map((ind, i) => {
              const IconComp = ind.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.name}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "relative flex items-center gap-3 px-5 py-4 text-left transition-colors duration-200 cursor-pointer flex-1",
                    isActive
                      ? "bg-white/[0.04] text-foreground"
                      : "text-white/45 hover:text-white/75 hover:bg-white/[0.02]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sector-indicator"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
                    />
                  )}
                  <span
                    className={cn(
                      "w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors duration-200",
                      isActive ? "bg-primary/10" : "bg-white/[0.03] group-hover:bg-white/[0.06]"
                    )}
                  >
                    <IconComp className={cn("w-3.5 h-3.5", isActive ? "text-primary-light" : "text-white/35")} />
                  </span>
                  <span className="text-sm font-medium leading-snug">{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#080808] h-full overflow-hidden"
            >
              {/* Tinted background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(145deg, rgba(${active.accent},0.2) 0%, #0d0d0d 55%, rgba(${active.accent},0.06) 100%)`,
                }}
              />

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{active.name}</h3>
                  <p className="text-sm text-white/45 leading-relaxed max-w-lg">{active.description}</p>
                </div>

                {/* Engagements */}
                <div className="space-y-3 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Sample Engagements</p>
                  {allEngagements
                    .filter((e) => (industryToSectors[active.name] ?? []).includes(e.sector))
                    .map((eng) => (
                      <motion.div
                        key={eng.headline}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.025] border border-white/[0.05]"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <div>
                          <p className="text-sm text-white/75 leading-snug">{eng.headline}</p>
                          <p className="text-xs text-white/35 mt-0.5">{eng.disciplines.join(" · ")}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.sectors.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.16em] uppercase text-white/45 bg-white/[0.025] border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── Track record ────────────────────────────────────────────

function TrackRecord() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="tracking-luxury text-white/50 mb-3">Track Record</p>
          <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
            Engagements across Central Asia
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allEngagements.slice(0, 6).map((eng, i) => (
            <AnimatedSection key={eng.headline} delay={i * 0.06}>
              <div className="group relative rounded-xl overflow-hidden">
                <div className="absolute inset-0 rounded-xl bg-white/[0.07]" />
                <div
                  className="absolute inset-[1px] rounded-[11px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
                  }}
                />
                <div className="relative h-full bg-gradient-to-br from-[#101010] to-[#070707] rounded-[11px] overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 rounded-full bg-primary/70 blur-[3px]" />
                        <span className="relative w-1.5 h-1.5 rounded-full bg-[#C08585]" />
                      </span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/35">
                        {eng.sector}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{eng.headline}</p>
                    <p className="text-xs text-white/35 mt-2 leading-relaxed">{eng.disciplines.join(" · ")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────

export default function ExpertisePage() {
  return (
    <>
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/Hero%20and%20CTA%20images/Expertise%20Hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <section className="relative z-10 pt-24 pb-10 md:pt-28 md:pb-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tracking-luxury text-white/50 mb-3"
            >
              Our Expertise
            </motion.p>

            <TextReveal
              text="Integrated services, singular results"
              as="h1"
              mode="line"
              className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] max-w-4xl"
              delay={0.2}
            />

            <RevealLine delay={0.5}>
              <p className="text-base text-white/50 max-w-2xl mt-4 leading-relaxed">
                Seven advisory disciplines. Seven managed operations services. One integrated
                practice built for the complexities of Central Asian markets.
              </p>
            </RevealLine>

            <div className="mt-7 pt-7 border-t border-white/[0.08] flex flex-wrap gap-x-12 gap-y-6">
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
                    {s.value}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/45">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AdvisorySection />
      <OperationsSection />
      <IndustriesSection />
      <TrackRecord />
    </>
  );
}
