"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection, {
  FadeIn,
  HorizontalLine,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import AuroraBackground from "@/components/AuroraBackground";
import CategoryList from "@/components/CategoryList";
import { servicesData } from "@/lib/services";

const stats = [
  { value: "8+", label: "Years" },
  { value: "50+", label: "Clients" },
  { value: "70+", label: "Projects" },
  { value: "15+", label: "Industries" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <AuroraBackground className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="tracking-luxury text-muted mb-8"
            >
              Premier Advisory &middot; Uzbekistan
            </motion.p>

            <TextReveal
              text="Counsel for businesses that shape markets"
              as="h1"
              className="heading-luxury text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.08] mb-8"
              delay={0.4}
            />

            <RevealLine delay={0.7}>
              <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-12">
                Integrated tax, legal, finance, and human capital advisory.
                One firm, one point of contact, across Central Asia.
              </p>
            </RevealLine>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton variant="primary" as="a" href="/contact">
                Begin a conversation
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton variant="outline" as="a" href="/expertise">
                View expertise
              </MagneticButton>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-20 pt-8 border-t border-white/[0.08] flex gap-12 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-2xl md:text-3xl font-serif text-foreground">
                  {stat.value}
                </span>
                <span className="block text-xs text-muted-dark uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
            <div className="w-px h-8 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 32, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-2 bg-primary absolute top-0"
              />
            </div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Expertise Preview */}
      <section className="py-28 md:py-36 bg-surface">
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

      {/* About Preview */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection>
              <p className="tracking-luxury text-muted-dark mb-4">The Firm</p>
              <TextReveal
                text="A tradition of precision & trust"
                as="h2"
                className="heading-luxury text-4xl md:text-5xl text-foreground leading-tight mb-8"
              />
              <RevealLine delay={0.1}>
                <p className="text-muted leading-relaxed mb-6">
                  Founded in 2016, Advizen Consulting has grown into one of
                  Uzbekistan&apos;s most trusted integrated advisory firms. We serve as
                  the single point of contact for businesses navigating the
                  complexities of Central Asian markets.
                </p>
              </RevealLine>
              <RevealLine delay={0.2}>
                <p className="text-muted leading-relaxed mb-10">
                  Our multidisciplinary approach ensures that every aspect of your
                  business — from tax and compliance to talent and brand — receives
                  coordinated, expert attention.
                </p>
              </RevealLine>
              <MagneticButton variant="outline" as="a" href="/about">
                About the firm
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="p-10 md:p-14" hover={false}>
                <blockquote className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed italic mb-8">
                  &ldquo;We don&apos;t just advise — we integrate into the fabric
                  of your operations.&rdquo;
                </blockquote>
                <div className="w-12 h-px bg-primary mb-4" />
                <p className="tracking-luxury text-muted-dark">
                  Advizen Consulting
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Library Preview */}
      <section className="py-28 md:py-36 bg-surface border-t border-border">
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

      {/* CTA */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton variant="primary" as="a" href="/contact">
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton variant="outline" as="a" href="tel:+998334884888">
                +998 (33) 488 48 88
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
