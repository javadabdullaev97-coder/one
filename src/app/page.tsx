"use client";

import Link from "next/link";
import { useState, useCallback, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight,
  Shield, Users, Lightbulb, Target, Handshake,
  Mail, Phone, type LucideProps,
} from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import CosmicParallaxBg from "@/components/CosmicParallaxBg";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import UzbekistanMap from "@/components/UzbekistanMap";
import DisciplinesIntegration from "@/components/DisciplinesIntegration";
import { cn } from "@/lib/utils";

type LucideIcon = ComponentType<LucideProps>;

/* ── Orbital values data ─────────────────────────────── */

const firmValues = [
  {
    id: 1, title: "One-Stop Shop", date: "",
    content: "Tax, legal, finance, HR, and marketing — all under one roof. No need to juggle multiple firms. One partner, one point of contact, complete coverage.",
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

/* ── Region data ─────────────────────────────────────── */

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

/* ── Region info panel ───────────────────────────────── */

function RegionInfoPanel({ activeId }: { activeId: string | null }) {
  const region = activeId ? REGION_DATA[activeId] : null;

  return (
    <div className="h-[480px] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId ?? "default"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex flex-col overflow-y-auto"
        >
          {region ? (
            <>
              {/* Placeholder image */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-white/[0.06]"
                style={{ background: "linear-gradient(135deg, rgba(122,26,26,0.22) 0%, #080808 65%)" }}>
                <img
                  src={`/regions/${activeId}.jpg`}
                  alt={region.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* placeholder label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
                  <span className="font-serif text-4xl text-white/[0.04] uppercase tracking-widest select-none">
                    {region.name}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-white/20 border border-white/[0.06] px-2 py-0.5">
                    Image coming soon
                  </span>
                </div>
                {/* bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808]/70 to-transparent pointer-events-none" />
              </div>

              {/* Region name */}
              <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide mb-4">
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

/* ── Page ────────────────────────────────────────────── */

export default function Home() {
  const [activeRegionId, setActiveRegionId] = useState<string | null>("UZ-TK");
  const handleActiveChange = useCallback((id: string) => {
    setActiveRegionId(id);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <CosmicParallaxBg className="relative h-[75vh]">
        <div className="absolute left-0 right-0 z-20 text-center top-[38%]">
          <h1 className="cosmic-title text-5xl md:text-7xl lg:text-8xl">ADVIZEN</h1>
        </div>
        <div className="absolute left-0 right-0 z-20 text-center px-6 top-[67%]">
          <p className="cosmic-subtitle text-base md:text-lg lg:text-xl mb-8">
            Business Advisory in Uzbekistan
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-white/25" />
            <p className="text-white/40 text-[11px] tracking-[0.25em] uppercase">
              Tashkent, Uzbekistan
            </p>
            <div className="h-px w-8 bg-white/25" />
          </div>
        </div>
      </CosmicParallaxBg>

      {/* ── Geography ── */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden border-y border-white/[0.06]">
        <div className="ambient-glow ambient-glow-oxblood w-[700px] h-[700px] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-10 md:mb-12">
            <p className="tracking-luxury text-muted-dark mb-3">Where We Operate</p>
            <h2 className="heading-luxury text-2xl md:text-3xl text-foreground">
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

      {/* ── Integrated Coverage ── */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection className="mb-14 md:mb-16 text-center">
              <p className="tracking-luxury text-muted-dark mb-4">Integrated Coverage</p>
              <TextReveal
                text="One partner, every discipline"
                as="h2"
                className="heading-luxury text-4xl md:text-5xl text-foreground"
              />
              <p className="mt-5 text-white/55 max-w-xl mx-auto leading-relaxed">
                Tax, legal, finance, HR, marketing, and funding — working in concert on a shared view of your business.
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

      {/* ── What We Stand For — Orbital Values ── */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
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
                  className="heading-luxury text-4xl md:text-5xl text-foreground leading-tight mb-6"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-white/50 leading-relaxed mb-4">
                  Advizen is a one-stop business advisory partner in Uzbekistan — offering integrated
                  consulting across tax, legal, finance, HR, and marketing under a single point of contact.
                </p>
                <p className="text-white/40 leading-relaxed mb-10">
                  We combine deep local expertise with international standards, helping businesses
                  navigate Central Asia&apos;s regulatory landscape while focusing on growth.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-white/30 text-sm mb-8 italic">Tap a node to explore our core values →</p>
              </AnimatedSection>
            </div>
            <div>
              <RadialOrbitalTimeline timelineData={firmValues} />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Library Preview ── */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="tracking-luxury text-muted-dark mb-4">The Library</p>
                  <TextReveal
                    text="Knowledge & publications"
                    as="h2"
                    className="heading-luxury text-4xl md:text-5xl text-foreground"
                  />
                </div>
                <Link
                  href="/library"
                  className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  Browse all
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </Parallax>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Flagship Guide",
                title: "Doing Business in Uzbekistan",
                desc: "A comprehensive guide to market entry, regulatory frameworks, and operational best practices in Uzbekistan.",
              },
              {
                tag: "Tax Briefing",
                title: "Tax Landscape 2024–2025",
                desc: "Key changes in Uzbekistan's tax legislation and strategic implications for foreign investors.",
              },
              {
                tag: "HR Insight",
                title: "Employer of Record in Central Asia",
                desc: "How foreign companies can establish talent presence without a local legal entity.",
              },
            ].map((pub) => (
              <StaggerItem key={pub.title}>
                <Link href="/library" className="group block h-full cursor-pointer">
                  <GlassCard className="p-8 h-full flex flex-col">
                    <p className="tracking-luxury text-primary mb-4">{pub.tag}</p>
                    <h3 className="font-serif text-xl leading-snug min-h-[3.5rem] glow-card-title">{pub.title}</h3>
                    <p className="text-sm leading-relaxed flex-1 glow-card-desc">{pub.desc}</p>
                    <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs text-muted-dark uppercase tracking-wider">Read more</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-dark group-hover:text-primary transition-colors" />
                    </div>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── CTA ── */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Parallax offset={25} fade>
            <AnimatedSection>
              <p className="tracking-luxury text-muted-dark mb-6">Next Step</p>
              <TextReveal
                text="Ready to begin?"
                as="h2"
                className="heading-luxury text-4xl md:text-6xl text-foreground mb-6"
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
              <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <a
                  href="mailto:info@advizenco.com"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors outline-none focus-visible:text-foreground"
                >
                  <Mail className="w-4 h-4 text-muted-dark group-hover:text-primary-light transition-colors" />
                  info@advizenco.com
                </a>
                <a
                  href="tel:+998334884888"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors outline-none focus-visible:text-foreground"
                >
                  <Phone className="w-4 h-4 text-muted-dark group-hover:text-primary-light transition-colors" />
                  +998 33 488 4888
                </a>
              </div>
            </AnimatedSection>
          </Parallax>
        </div>
      </section>
    </>
  );
}
