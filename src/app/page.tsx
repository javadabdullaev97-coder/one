"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Shield, Users, Lightbulb, Target, Handshake } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedSection, {
  FadeIn,
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import CosmicParallaxBg from "@/components/CosmicParallaxBg";
import CategoryList from "@/components/CategoryList";
import ClientsBar from "@/components/ClientsBar";
import { servicesData } from "@/lib/services";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const firmValues = [
  {
    id: 1,
    title: "One-Stop Shop",
    date: "",
    content: "Tax, legal, finance, HR, and marketing — all under one roof. No need to juggle multiple firms. One partner, one point of contact, complete coverage.",
    category: "Core Value",
    icon: Target,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Client-First",
    date: "",
    content: "Every engagement is tailored to your business. We listen before we advise, and we measure our success by yours. Your goals become our mission.",
    category: "Philosophy",
    icon: Handshake,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Local Expertise",
    date: "",
    content: "Deep knowledge of Uzbekistan's regulatory landscape and Central Asian markets. We navigate the complexities so you can focus on growth.",
    category: "Advantage",
    icon: Lightbulb,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Trusted Team",
    date: "",
    content: "A multidisciplinary team of seasoned professionals across tax, law, finance, and consulting. Coordinated expertise, unified strategy.",
    category: "Strength",
    icon: Users,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Integrity",
    date: "",
    content: "Transparency and ethical standards are non-negotiable. We build relationships on trust, delivering honest counsel even when it's not the easiest path.",
    category: "Foundation",
    icon: Shield,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
];

const stats = [
  { value: 8, suffix: "+", label: "Years" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 70, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Industries" },
];

function CountUp({ target, suffix, duration = 1.5, delay = 2 }: { target: number; suffix: string; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration * 60);
    let frame: number;
    const animate = () => {
      start += step;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      {/* ADDED pt-36 md:pt-48 here to push the hero content below the transparent nav */}
      <CosmicParallaxBg className="relative h-screen">
        {/* ADVIZEN title — just above earth curve */}
        <div className="absolute left-0 right-0 z-20 text-center top-[38%]">
          <h1 className="cosmic-title text-5xl md:text-7xl lg:text-8xl">
            ADVIZEN
          </h1>
        </div>

        {/* Subtitle + Stats — on the earth surface below curve */}
        <div className="absolute left-0 right-0 z-20 text-center px-6 top-[62%]">
          <p className="cosmic-subtitle text-base md:text-lg lg:text-xl mb-10">
            Consulting &amp; Advisory
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center gap-12 md:gap-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl md:text-5xl font-extralight text-foreground tracking-wider">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="block text-xs text-muted-dark uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </CosmicParallaxBg>

      {/* Clients Bar */}
      <ClientsBar />

      {/* Faded Hairline Divider */}
      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-20" />

      {/* Expertise Preview */}
      <section className="py-28 md:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="tracking-luxury text-muted-dark mb-4">Our Expertise</p>
                <TextReveal
                  text="Integrated counsel, singular focus"
                  as="h2"
                  className="heading-luxury text-4xl md:text-5xl text-foreground"
                />
              </div>
              <Link
                href="/expertise"
                className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                View all services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

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

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* About Preview — Orbital Values */}
      <section className="py-28 md:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="tracking-luxury text-muted-dark mb-4">The Firm</p>
              <TextReveal
                text="What we stand for"
                as="h2"
                className="heading-luxury text-4xl md:text-5xl text-foreground leading-tight mb-4"
              />
              <RevealLine delay={0.1}>
                <p className="text-muted leading-relaxed max-w-xl mx-auto">
                  Click each node to explore our core values
                </p>
              </RevealLine>
            </div>
          </AnimatedSection>

          <RadialOrbitalTimeline timelineData={firmValues} />

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center mt-8">
              <MagneticButton variant="outline" as="a" href="/about">
                About the firm
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Library Preview */}
      <section className="py-28 md:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="tracking-luxury text-muted-dark mb-4">
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
                className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                Browse all
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

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
                    <h3 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary-light transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {pub.desc}
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs text-muted-dark uppercase tracking-wider">
                        Read more
                      </span>
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

      {/* CTA */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">Next Step</p>
            <TextReveal
              text="Ready to begin?"
              as="h2"
              className="heading-luxury text-4xl md:text-6xl text-foreground mb-6"
            />
            <RevealLine delay={0.2}>
              <p className="text-lg text-muted max-w-xl mx-auto mb-12 leading-relaxed">
                Whether you are entering Uzbekistan or expanding operations across
                Central Asia, our team is prepared to advise.
              </p>
            </RevealLine>
            <div className="flex justify-center">
              <MagneticButton variant="primary" as="a" href="/contact">
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
