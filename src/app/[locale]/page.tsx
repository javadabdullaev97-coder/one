"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight,
  Shield, Users, Lightbulb, Target, Handshake,
} from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import HeroSection from "@/components/HeroSection";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import UzbekistanMap from "@/components/UzbekistanMap";
import DisciplinesIntegration from "@/components/DisciplinesIntegration";
import InsightsSection from "@/components/InsightsSection";

/* ── Orbital values data ───────────────────────────────── */

const firmValues = [
  {
    id: 1, title: "One-Stop Shop", date: "",
    content: "Tax, legal, finance, and HR — all under one roof. No need to juggle multiple firms. One partner, one point of contact, complete coverage.",
    category: "Core Value", icon: Target, relatedIds: [2, 3], status: "completed" as const, energy: 100,
  },
  {
    id: 2, title: "Client-First", date: "",
    content: "Every engagement is tailored to your business. We listen before we advise, and we measure our success by yours. Your goals become our mission.",
    category: "Philosophy", icon: Handshake, relatedIds: [1, 5], status: "completed" as const, energy: 95,
  },
  {
    id: 3, title: "Local Expertise", date: "",
    content: "Deep knowledge of Uzbekistan's regulatory landscape and Central Asian markets. We navigate the complexities so you can focus on growth.",
    category: "Advantage", icon: Lightbulb, relatedIds: [1, 4], status: "completed" as const, energy: 90,
  },
  {
    id: 4, title: "Trusted Team", date: "",
    content: "A multidisciplinary team of seasoned professionals across tax, law, finance, and consulting. Coordinated expertise, unified strategy.",
    category: "Strength", icon: Users, relatedIds: [3, 5], status: "completed" as const, energy: 85,
  },
  {
    id: 5, title: "Integrity", date: "",
    content: "Transparency and ethical standards are non-negotiable. We build relationships on trust, delivering honest counsel even when it's not the easiest path.",
    category: "Foundation", icon: Shield, relatedIds: [2, 4], status: "completed" as const, energy: 100,
  },
];

/* ── Region data ───────────────────────────────────── */

interface RegionData {
  name: string;
  population: string;
  gdp: string;
  sezs: string[];
  industries: string[];
}

const REGION_DATA: Record<string, RegionData> = {
  "UZ-AN": {
    name: "Andijan",
    population: "3.1M",
    gdp: "~$3.0B",
    sezs: ["Andijan SEZ", "Qo'rg'ontepa FEZ"],
    industries: ["Automotive", "Textiles", "Chemicals", "Food Processing", "Engineering"],
  },
  "UZ-BU": {
    name: "Bukhara",
    population: "1.9M",
    gdp: "~$4.5B",
    sezs: ["Bukhara FEZ"],
    industries: ["Oil & Gas", "Tourism", "Natural Gas Processing", "Textiles"],
  },
  "UZ-FA": {
    name: "Fergana",
    population: "3.8M",
    gdp: "~$3.5B",
    sezs: ["Fergana SEZ"],
    industries: ["Oil Refining", "Chemicals", "Pharmaceuticals", "Textiles", "Silk"],
  },
  "UZ-JI": {
    name: "Jizzakh",
    population: "1.3M",
    gdp: "~$1.1B",
    sezs: ["Jizzakh SEZ", "Paxtakor FEZ"],
    industries: ["Agriculture", "Food Processing", "Construction Materials", "Light Industry"],
  },
  "UZ-NG": {
    name: "Namangan",
    population: "2.9M",
    gdp: "~$2.6B",
    sezs: ["Namangan SEZ"],
    industries: ["Textiles", "Food Processing", "Consumer Goods", "IT"],
  },
  "UZ-NW": {
    name: "Navoi",
    population: "0.95M",
    gdp: "~$3.2B",
    sezs: ["Navoi FEZ", "NAIZ"],
    industries: ["Gold & Uranium Mining", "Chemicals", "Heavy Industry", "Logistics"],
  },
  "UZ-QA": {
    name: "Qashqadaryo",
    population: "3.5M",
    gdp: "~$6.0B",
    sezs: ["Karshi SEZ"],
    industries: ["Natural Gas", "Chemicals", "Petrochemicals", "Agriculture"],
  },
  "UZ-QR": {
    name: "Qarakalpakstan",
    population: "1.9M",
    gdp: "~$2.0B",
    sezs: ["Muynoq Development Zone"],
    industries: ["Agriculture", "Oil & Gas", "Fishing", "Cotton", "Tourism"],
  },
  "UZ-SA": {
    name: "Samarkand",
    population: "3.9M",
    gdp: "~$4.0B",
    sezs: ["Samarkand SEZ", "Tourist FEZ"],
    industries: ["Tourism", "Food Processing", "Construction", "Education"],
  },
  "UZ-SI": {
    name: "Sirdaryo",
    population: "0.87M",
    gdp: "~$1.0B",
    sezs: ["Sirdaryo Industrial Zone"],
    industries: ["Power Generation", "Chemicals", "Agriculture", "Cotton"],
  },
  "UZ-SU": {
    name: "Surxondaryo",
    population: "2.5M",
    gdp: "~$2.2B",
    sezs: ["Termez SEZ"],
    industries: ["Oil & Gas", "Agriculture", "Cross-border Trade", "Tourism"],
  },
  "UZ-TK": {
    name: "Tashkent City",
    population: "3.1M",
    gdp: "~$14B",
    sezs: ["IT Park Uzbekistan", "Tashkent FEZ"],
    industries: ["Finance", "IT & Tech", "Services", "Trade", "Real Estate"],
  },
  "UZ-TO": {
    name: "Tashkent Region",
    population: "2.9M",
    gdp: "~$5.0B",
    sezs: ["Angren SEZ", "Chirchiq Industrial Zone"],
    industries: ["Chemicals", "Mining", "Manufacturing", "Energy", "Agriculture"],
  },
  "UZ-XO": {
    name: "Xorazm",
    population: "1.8M",
    gdp: "~$1.5B",
    sezs: ["Urgench FEZ"],
    industries: ["Agriculture", "Tourism (Khiva)", "Light Industry", "Handicrafts"],
  },
};

const REGION_IMAGE: Record<string, string> = {
  "UZ-AN": "/Regions/Andijan.webp",
  "UZ-BU": "/Regions/Bukhara.webp",
  "UZ-FA": "/Regions/Fergana.webp",
  "UZ-JI": "/Regions/Jizzakh.webp",
  "UZ-QR": "/Regions/Karakalpakstan.webp",
  "UZ-QA": "/Regions/Kashkadarya.webp",
  "UZ-XO": "/Regions/Khiva.webp",
  "UZ-NG": "/Regions/Namangan.webp",
  "UZ-NW": "/Regions/Navoi.webp",
  "UZ-SA": "/Regions/Samarkand.webp",
  "UZ-SU": "/Regions/Surkhandarya.webp",
  "UZ-SI": "/Regions/Syrdarya.webp",
  "UZ-TK": "/Regions/Tashkent City.webp",
  "UZ-TO": "/Regions/Tashkent region.webp",
};

/* ── Region image preloader ────────────────────────────── */

function RegionImagePreloader() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", left: -9999, top: -9999, pointerEvents: "none" }}>
      {Object.values(REGION_IMAGE).map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          width={1}
          height={1}
          fetchPriority="low"
        />
      ))}
    </div>
  );
}

/* ── Region info panel ───────────────────────────────── */

function RegionInfoPanel({ activeId }: { activeId: string | null }) {
  const region = activeId ? REGION_DATA[activeId] : null;

  return (
    <div className="h-[480px] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId ?? "default"}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col overflow-y-auto"
        >
          {region ? (
            <>
              {/* Placeholder image */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-white/[0.06]"
                style={{ background: "linear-gradient(135deg, rgba(122,26,26,0.22) 0%, #080808 65%)" }}>
                <Image
                  src={REGION_IMAGE[activeId ?? ""] ?? "/Regions/Andijan.webp"}
                  alt={region.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) calc(100vw - 3rem), 480px"
                />
                {/* bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808]/70 to-transparent pointer-events-none" />
              </div>

              {/* Region name */}
              <h3 className="heading-luxury text-xl md:text-2xl text-foreground mb-4">
                {region.name}
              </h3>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="border border-white/[0.06] px-3 py-2.5 rounded-lg bg-white/[0.02]">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-1">Population</p>
                  <p className="text-foreground font-light text-lg tabular-nums">{region.population}</p>
                </div>
                <div className="border border-white/[0.06] px-3 py-2.5 rounded-lg bg-white/[0.02]">
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-1">Regional GDP</p>
                  <p className="text-foreground font-light text-lg tabular-nums">{region.gdp}</p>
                </div>
              </div>

              {/* SEZs */}
              <div className="mb-4">
                <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-2">
                  Special Economic Zones
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {region.sezs.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-white/55 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key sectors */}
              <div>
                <p className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-2">Key Sectors</p>
                <div className="flex flex-wrap gap-1.5">
                  {region.industries.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-white/55 border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-white/25 text-sm tracking-wider">Hover a region to explore</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  const [activeRegionId, setActiveRegionId] = useState<string | null>("UZ-TK");
  const handleActiveChange = useCallback((id: string) => {
    setActiveRegionId(id);
  }, []);

  return (
    <>
      <RegionImagePreloader />
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Integrated Coverage ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection className="mb-8 md:mb-10 text-center">
              <p className="tracking-luxury text-muted-dark mb-4">Integrated Coverage</p>
              <TextReveal
                text="One partner, every discipline"
                as="h2"
                className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground"
              />
              <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
                Tax, legal, finance, HR, and funding — working in concert on a shared view of your business.
              </p>
            </AnimatedSection>
          </Parallax>

          <AnimatedSection delay={0.1}>
            <DisciplinesIntegration />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12 flex justify-center">
            <MagneticButton variant="outline" as="a" href="/expertise">
              Explore all services
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Geography ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-10 md:mb-12">
            <p className="tracking-luxury text-muted-dark mb-3">Where We Operate</p>
            <h2 className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground">
              All of Uzbekistan, from a single advisory partner
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[5fr_3fr] gap-8 lg:gap-14 items-start">
            {/* Map */}
            <AnimatedSection delay={0.05}>
              <UzbekistanMap onActiveChange={handleActiveChange} />
            </AnimatedSection>

            {/* Region info panel */}
            <AnimatedSection delay={0.15} className="lg:sticky lg:top-28">
              <RegionInfoPanel activeId={activeRegionId} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── What We Stand For — Orbital Values ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <AnimatedSection>
                <p className="tracking-luxury text-muted-dark mb-4">The Firm</p>
                <TextReveal
                  text="What we stand for"
                  as="h2"
                  className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-6"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-white/50 leading-relaxed mb-4">
                  Advizen is a one-stop business advisory partner in Uzbekistan — offering integrated
                  consulting across tax, legal, finance, and HR under a single point of contact.
                </p>
                <p className="text-white/40 leading-relaxed mb-10">
                  We combine deep local expertise with international standards, helping businesses
                  navigate Central Asia&apos;s regulatory landscape while focusing on growth.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-white/30 text-sm mb-8 italic">Tap a node to explore our core values &rarr;</p>
              </AnimatedSection>
            </div>
            <div>
              <RadialOrbitalTimeline timelineData={firmValues} />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Insights Preview ── */}
      <InsightsSection />

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Parallax offset={25} fade>
            <AnimatedSection>
              <p className="tracking-luxury text-muted-dark mb-6">Next Step</p>
              <TextReveal
                text="Ready to begin?"
                as="h2"
                className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground mb-6"
              />
              <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
                Whether you are entering Uzbekistan or expanding operations across
                Central Asia, our team is prepared to advise.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton variant="primary" as="a" href="/contact">
                  Schedule a consultation
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton variant="outline" as="a" href="/expertise">
                  Explore our expertise
                  <ArrowUpRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </AnimatedSection>
          </Parallax>
        </div>
      </section>
    </>
  );
}
