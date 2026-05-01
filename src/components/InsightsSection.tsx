"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import { publications, sortedPublications } from "@/lib/publications";

const recentArticles = sortedPublications(publications).slice(0, 2);

// Set to the cover image path when the 2026 guide cover is ready
const DOING_BUSINESS_COVER: string | null = null;

export default function InsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -right-32 opacity-30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <Parallax offset={20} fade>
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <p className="tracking-luxury text-muted-dark mb-5">Insights</p>
                <TextReveal
                  text="Research, guides & analysis"
                  as="h2"
                  className="heading-luxury text-2xl md:text-3xl lg:text-4xl text-foreground"
                />
              </div>
              <Link
                href="/insights"
                className="group inline-flex items-center gap-2.5 self-start md:self-auto pb-1.5 border-b border-white/15 hover:border-primary/70 text-[11px] tracking-[0.28em] uppercase text-white/55 hover:text-foreground transition-colors duration-300"
              >
                <span>Browse all</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </AnimatedSection>
        </Parallax>

        {/* Grid */}
        <div className="grid lg:grid-cols-[6fr_7fr] gap-6 lg:gap-8 items-stretch">

          {/* Featured — Doing Business */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <Link href="/insights/doing-business-uzbekistan" className="group block h-full">
              <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/[0.08] group-hover:border-white/[0.2] transition-colors duration-500">

                {/* Background: cover image or dark gradient placeholder */}
                {DOING_BUSINESS_COVER ? (
                  <Image
                    src={DOING_BUSINESS_COVER}
                    fill
                    unoptimized
                    alt="Doing Business in Uzbekistan 2026"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(160deg, #1c0808 0%, #120404 45%, #080808 100%)" }}
                  />
                )}

                {/* Gradient overlay — always present for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col p-7 min-h-[420px]">

                  {/* Top label */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.32em] uppercase text-white/25">Advizen</span>
                    <span className="h-px w-4 bg-white/10" />
                    <span className="text-[10px] tracking-[0.32em] uppercase text-primary/60">2026 Edition</span>
                  </div>

                  <div className="flex-1" />

                  {/* Bottom content */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-5">
                      <div className="h-px w-6 bg-primary/60" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-primary">Flagship Guide</span>
                    </div>

                    <h3 className="heading-luxury text-2xl md:text-[1.75rem] leading-tight text-foreground mb-4 group-hover:text-white transition-colors duration-300">
                      Doing Business<br />in Uzbekistan
                    </h3>

                    <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-[280px]">
                      The definitive guide for foreign investors — market entry, regulatory frameworks, and operational best practices.
                    </p>

                    <div className="flex items-center gap-2 text-xs text-white/40 group-hover:text-primary transition-colors duration-300">
                      <span className="tracking-[0.2em] uppercase">Read the guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Supplementary — 2 most recent articles */}
          <div className="flex flex-col gap-6">
            {recentArticles.map((pub, i) => (
              <motion.div
                key={pub.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1"
              >
                <Link href={`/insights/${pub.slug}`} className="group block h-full">
                  <div className="h-full flex flex-col border border-white/[0.06] group-hover:border-white/[0.14] rounded-xl overflow-hidden transition-colors duration-500">

                    {/* Image */}
                    {pub.image && (
                      <div className="relative h-56 overflow-hidden flex-shrink-0">
                        <Image
                          src={pub.image}
                          fill
                          unoptimized
                          alt={pub.title}
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 560px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col flex-1 px-6 py-4">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="h-px w-5 bg-white/15 group-hover:bg-primary/50 transition-colors duration-500" />
                        <span className="text-[10px] tracking-[0.28em] uppercase text-primary">{pub.tag}</span>
                      </div>

                      <h3 className="font-serif text-lg leading-snug text-foreground mb-4 group-hover:text-white transition-colors duration-300 line-clamp-2">
                        {pub.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-white/35 group-hover:text-primary transition-colors duration-300 mt-auto">
                        <span className="tracking-[0.18em] uppercase">Read more</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
