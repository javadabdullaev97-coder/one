"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import CosmicParallaxBg from "@/components/CosmicParallaxBg";
import CategoryList from "@/components/CategoryList";
import ClientsBar from "@/components/ClientsBar";
import CountUp from "@/components/CountUp";
import AuroraBackground from "@/components/AuroraBackground";
import { servicesData } from "@/lib/services";

/* ── Data ──────────────────────────────────────────────── */

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "", label: "Practice Areas" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "", label: "Languages" },
];

const differentiators = [
  {
    num: "01",
    title: "One-stop advisory",
    desc: "Tax, legal, finance, HR, and marketing — all under one roof. No need to juggle multiple firms or coordinate between competing advisors.",
  },
  {
    num: "02",
    title: "Local mastery",
    desc: "Deep, first-hand knowledge of Uzbekistan\u2019s regulatory landscape, bureaucratic rhythms, and business culture \u2014 paired with international standards.",
  },
  {
    num: "03",
    title: "Client partnership",
    desc: "We embed with your team, not just advise from the sideline. Present when decisions are made, accountable for outcomes, invested in your growth.",
  },
  {
    num: "04",
    title: "Trusted execution",
    desc: "A multidisciplinary team of seasoned professionals delivering coordinated expertise and unified strategy across every engagement.",
  },
];

const publications = [
  {
    tag: "Tax Briefing",
    title: "Tax Landscape 2024\u20132025",
    desc: "Key changes in tax legislation and strategic implications for foreign investors.",
  },
  {
    tag: "HR Insight",
    title: "Employer of Record in Central Asia",
    desc: "How to establish talent presence without a local legal entity.",
  },
];

/* ── Helpers ────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  );
}

/* ── Page ───────────────────────────────────────────────── */

export default function HomeV2() {
  return (
    <>
      {/* ====== HERO ====== */}
      <CosmicParallaxBg className="relative h-screen">
        {/* Title */}
        <div className="absolute left-0 right-0 z-20 text-center top-[38%]">
          <h1 className="cosmic-title text-5xl md:text-7xl lg:text-8xl">
            ADVIZEN
          </h1>
        </div>

        {/* Subtitle + CTA */}
        <div className="absolute left-0 right-0 z-20 text-center px-6 top-[62%]">
          <p className="cosmic-subtitle text-base md:text-lg lg:text-xl mb-8">
            Strategic Advisory for Central Asia
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton variant="primary" as="a" href="/contact">
              Schedule a consultation
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="outline" as="a" href="/expertise">
              Our expertise
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              Scroll
            </span>
            <div className="w-px h-6 bg-gradient-to-b from-white/25 to-transparent" />
          </motion.div>
        </motion.div>
      </CosmicParallaxBg>

      {/* ====== STATS BAR ====== */}
      <section className="py-14 md:py-16 bg-black border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extralight text-foreground tracking-wider tabular-nums leading-none">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    triggerOnView
                    duration={1.4}
                  />
                </div>
                <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CLIENTS ====== */}
      <ClientsBar />

      {/* ====== STATEMENT ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-5">
              <p className="tracking-luxury text-white/40 mb-4">The Firm</p>
              <TextReveal
                text="One partner for your entire operation"
                as="h2"
                className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight"
              />
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              className="lg:col-span-7 flex items-end"
            >
              <div className="space-y-6">
                <RevealLine>
                  <p className="text-white/55 text-lg leading-relaxed">
                    Uzbekistan is among the fastest-growing economies in Central
                    Asia &mdash; and among the most complex to operate in.
                    Businesses have traditionally relied on a patchwork of
                    specialists: a tax firm here, a law firm there, an HR vendor
                    somewhere else.
                  </p>
                </RevealLine>
                <RevealLine delay={0.08}>
                  <p className="text-white/45 leading-relaxed">
                    Advizen was founded to change that. One firm covering every
                    discipline your business depends on, staffed by operators who
                    understand Uzbekistan&apos;s regulatory landscape and hold
                    every engagement to international standards.
                  </p>
                </RevealLine>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors mt-2"
                  >
                    More about the firm
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ====== EXPERTISE ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="tracking-luxury text-white/40 mb-4">
                    Our Expertise
                  </p>
                  <TextReveal
                    text="Integrated counsel, singular focus"
                    as="h2"
                    className="heading-luxury text-4xl md:text-5xl text-foreground"
                  />
                  <p className="mt-5 text-white/45 max-w-xl leading-relaxed">
                    Six disciplines working in concert &mdash; coordinated
                    around a shared view of your business.
                  </p>
                </div>
                <Link
                  href="/expertise"
                  className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer"
                >
                  View all services
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </Parallax>

          <CategoryList
            items={servicesData.map((s) => ({
              id: s.slug,
              title: s.title,
              subtitle: s.category,
              icon: <span className="text-xs font-mono">{s.num}</span>,
              href: `/expertise/${s.slug}`,
            }))}
          />
        </div>
      </section>

      <SectionDivider />

      {/* ====== WHY ADVIZEN ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-16">
            <p className="tracking-luxury text-white/40 mb-4">Why Advizen</p>
            <TextReveal
              text="What sets us apart"
              as="h2"
              className="heading-luxury text-4xl md:text-5xl text-foreground"
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <StaggerItem key={item.num}>
                <GlassCard className="p-8 md:p-10 h-full" hover={false}>
                  <div className="flex items-start gap-5">
                    <span className="text-xs font-mono text-primary-light/80 mt-1 tabular-nums shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-foreground/90 mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/45 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider />

      {/* ====== LIBRARY ====== */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -right-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Parallax offset={20} fade>
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                <div>
                  <p className="tracking-luxury text-white/40 mb-4">
                    The Library
                  </p>
                  <TextReveal
                    text="Knowledge & publications"
                    as="h2"
                    className="heading-luxury text-4xl md:text-5xl text-foreground"
                  />
                </div>
                <Link
                  href="/library"
                  className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer"
                >
                  Browse all
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </Parallax>

          {/* Asymmetric: featured large + 2 stacked */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured */}
            <AnimatedSection className="lg:col-span-3">
              <Link
                href="/library"
                className="group block h-full cursor-pointer"
              >
                <GlassCard className="p-10 md:p-12 h-full flex flex-col">
                  <p className="tracking-luxury text-primary mb-6">
                    Flagship Guide
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug glow-card-title mb-4">
                    Doing Business in Uzbekistan
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 glow-card-desc max-w-lg">
                    A comprehensive guide to market entry, regulatory
                    frameworks, and operational best practices for companies
                    expanding into Uzbekistan and Central Asia.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-white/30 uppercase tracking-wider">
                      Read the guide
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>

            {/* 2 stacked */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {publications.map((pub, i) => (
                <AnimatedSection key={pub.title} delay={0.1 + i * 0.08}>
                  <Link
                    href="/library"
                    className="group block h-full cursor-pointer"
                  >
                    <GlassCard className="p-8 h-full flex flex-col">
                      <p className="tracking-luxury text-primary mb-4">
                        {pub.tag}
                      </p>
                      <h3 className="font-serif text-lg leading-snug glow-card-title mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-sm leading-relaxed flex-1 glow-card-desc">
                        {pub.desc}
                      </p>
                      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="text-xs text-white/30 uppercase tracking-wider">
                          Read more
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
                      </div>
                    </GlassCard>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA — Aurora background for visual variety ====== */}
      <AuroraBackground>
        <section className="py-32 md:py-44 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
            <AnimatedSection>
              {/* Decorative watermark */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.025 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[18rem] md:text-[26rem] leading-none text-foreground select-none pointer-events-none"
              >
                &#10022;
              </motion.span>

              <p className="tracking-luxury text-white/50 mb-6">Next Step</p>
              <TextReveal
                text="Begin your next chapter"
                as="h2"
                className="heading-luxury text-3xl md:text-5xl lg:text-6xl text-foreground mb-6"
              />
              <p className="text-lg text-white/55 max-w-xl mx-auto mb-12 leading-relaxed">
                Whether entering Uzbekistan or scaling existing operations, our
                team brings the integrated expertise your business needs.
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

              {/* Direct contact */}
              <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <a
                  href="mailto:info@advizenco.com"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  info@advizenco.com
                </a>
                <a
                  href="tel:+998334884888"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/40 group-hover:text-primary-light transition-colors" />
                  +998 33 488 4888
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AuroraBackground>
    </>
  );
}
