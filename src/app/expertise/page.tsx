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

// ─── Industries ─────────────────────────────────

function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryGroups[activeIndex];

  useEffect(() => {
    industryGroups.forEach(({ image }) => {
      if (image) new window.Image().src = regionImageLoader({ src: image, width: 800, quality: 75 });
    });
  }, []);

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
                      isActive ? "bg-primary/10" : "bg-white/[0.03]"
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
          <div className="relative bg-[#080808] h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 p-6 md:p-8 overflow-y-auto"
              >
                {/* Sector image */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-44 md:h-52 rounded-xl overflow-hidden mb-6"
                  style={{
                    background: `linear-gradient(145deg, rgba(${active.accent},0.2) 0%, #0d0d0d 55%, rgba(${active.accent},0.06) 100%)`,
                  }}
                >
                  {active.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={regionImageLoader({ src: active.image, width: 800, quality: 75 })}
                      alt={active.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      fetchPriority="high"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <active.icon className="w-14 h-14 text-white/[0.06]" strokeWidth={0.6} />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-3"
                >
                  <active.icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.25} />
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide leading-tight">
                    {active.name}
                  </h3>
                </motion.div>

                {/* Sector tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-1.5 mb-5"
                >
                  {active.sectors.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] tracking-[0.1em] uppercase text-white/40 border border-white/[0.07] px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[14px] text-white/52 leading-relaxed mb-6"
                >
                  {active.description}
                </motion.p>

                {/* Offerings */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-3.5"
                >
                  What we offer
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {active.offerings.map((item, oi) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.28, delay: 0.28 + oi * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2 px-3 py-2 border border-white/[0.07] bg-white/[0.02] text-[12px] text-white/52 hover:border-primary/30 hover:bg-primary/[0.04] hover:text-white/80 transition-all duration-200 cursor-default"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Track record ────────────────────────────────

function TrackRecord() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-[0.18]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-14 md:mb-16">
          <p className="tracking-luxury text-white/50 mb-4">Track Record</p>
          <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
            Selected engagements of our team members
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allEngagements.map((eng, i) => (
            <motion.div
              key={eng.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl bg-white/[0.07]" />
              <div
                className="absolute inset-[1px] rounded-[11px]"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)" }}
              />
              <div className="relative h-full bg-gradient-to-br from-[#101010] to-[#070707] rounded-[11px] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
                <div className="p-6 md:p-7 flex flex-col h-full">
                  {/* Metric */}
                  <div className="mb-5">
                    <span className="font-serif text-3xl md:text-4xl text-foreground/85 tracking-tight leading-none">
                      {eng.metric}
                    </span>
                    <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mt-2">
                      {eng.metricLabel}
                    </p>
                  </div>
                  {/* Sector */}
                  <span className="inline-block text-xs tracking-[0.16em] uppercase text-red-400/70 mb-3">
                    {eng.sector}
                  </span>
                  {/* Headline */}
                  <p className="text-[14px] text-foreground/60 leading-snug font-light flex-1 mb-5">
                    {eng.headline}
                  </p>
                  {/* Disciplines */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                    {eng.disciplines.map((d) => (
                      <span
                        key={d}
                        className="text-[10px] tracking-[0.12em] uppercase text-white/30 border border-white/[0.06] rounded-full px-2.5 py-0.5"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────

export default function ExpertisePage() {
  return (
    <>
      <div
        className="relative overflow-hidden min-h-[65vh] flex flex-col"
        style={{
          backgroundImage: "url('/Hero%20and%20CTA%20images/Expertise%20Hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <section className="relative z-10 flex-1 flex items-end pt-24 pb-14 md:pt-28 md:pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative">
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
              className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] max-w-3xl"
              delay={0.2}
            />

            <RevealLine delay={0.5}>
              <p className="text-base text-white/50 max-w-xl mt-4 leading-relaxed">
                Seven advisory disciplines. Seven managed operations services. One integrated
                practice built for the complexities of Central Asian markets.
              </p>
            </RevealLine>

            <div className="mt-7 pt-7 border-t border-white/[0.08] flex flex-wrap gap-x-8 gap-y-4">
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="font-serif text-xl text-foreground font-light tabular-nums leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs tracking-[0.16em] uppercase text-white/40">
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
