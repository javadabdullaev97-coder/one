"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Parallax from "@/components/Parallax";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";

const stack = [
  {
    num: "02",
    tag: "Tax Briefing",
    title: "Tax Landscape 2024–2025",
    desc: "Key changes in Uzbekistan's tax legislation and strategic implications for foreign investors.",
    href: "/library/uzbekistan-tax-landscape-2024",
  },
  {
    num: "03",
    tag: "HR Insight",
    title: "Employer of Record in Central Asia",
    desc: "How foreign companies can establish talent presence without a local legal entity.",
    href: "/library/employer-of-record-central-asia",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -right-32 opacity-30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <Parallax offset={20} fade>
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
              <div>
                <p className="tracking-luxury text-muted-dark mb-5">Insights</p>
                <TextReveal
                  text="Research, guides & analysis"
                  as="h2"
                  className="heading-luxury text-3xl md:text-4xl text-foreground"
                />
              </div>
              <Link
                href="/library"
                className="group inline-flex items-center gap-2.5 self-start md:self-auto pb-1.5 border-b border-white/15 hover:border-primary/70 text-[11px] tracking-[0.28em] uppercase text-white/55 hover:text-foreground transition-colors duration-300 cursor-pointer"
              >
                <span>Browse all</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </AnimatedSection>
        </Parallax>

        {/* Editorial grid — featured left, stack right */}
        <div className="grid lg:grid-cols-[7fr_5fr] gap-x-16 gap-y-14">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/library/uzbekistan-tax-landscape-2024" className="group block h-full">
              <div className="relative h-full border-t border-white/10 group-hover:border-primary/50 pt-10 flex flex-col transition-colors duration-500">
                <div className="flex items-center gap-3 mb-10">
                  <span className="font-serif text-sm text-white/35">01</span>
                  <span className="h-px w-8 bg-white/15 group-hover:bg-primary/50 transition-colors duration-500" />
                  <span className="text-[11px] tracking-[0.28em] uppercase text-primary">Flagship Guide</span>
                </div>

                <h3
                  className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] text-foreground mb-7 max-w-md group-hover:text-white transition-colors duration-300"
                  style={{ letterSpacing: "-0.005em" }}
                >
                  Doing Business in Uzbekistan
                </h3>

                <p className="text-white/50 text-base leading-relaxed flex-1 max-w-lg mb-12">
                  A comprehensive guide to market entry, regulatory frameworks,
                  and operational best practices. The definitive resource for
                  foreign investors entering Uzbekistan.
                </p>

                <div className="flex items-center gap-2.5 text-xs text-white/45 group-hover:text-primary transition-colors duration-300 mt-auto">
                  <span className="tracking-[0.18em] uppercase">Read the guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Stack */}
          <div className="flex flex-col gap-10">
            {stack.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1"
              >
                <Link href={pub.href} className="group block h-full">
                  <div className="relative h-full border-t border-white/10 group-hover:border-primary/50 pt-8 flex flex-col transition-colors duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-serif text-sm text-white/35">{pub.num}</span>
                      <span className="h-px w-7 bg-white/15 group-hover:bg-primary/50 transition-colors duration-500" />
                      <span className="text-[11px] tracking-[0.28em] uppercase text-primary">{pub.tag}</span>
                    </div>

                    <h3
                      className="font-serif text-xl md:text-2xl leading-[1.2] text-foreground mb-4 group-hover:text-white transition-colors duration-300"
                      style={{ letterSpacing: "-0.003em" }}
                    >
                      {pub.title}
                    </h3>

                    <p className="text-white/45 text-sm leading-relaxed flex-1 mb-7">{pub.desc}</p>

                    <div className="flex items-center gap-2 text-xs text-white/40 group-hover:text-primary transition-colors duration-300 mt-auto">
                      <span className="tracking-[0.18em] uppercase">Read more</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
