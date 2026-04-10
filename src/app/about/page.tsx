"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";
import CountUp from "@/components/CountUp";
import { cn } from "@/lib/utils";

/* ── Data ─────────────────────────────────────────────── */

const metrics = [
  { value: 8, suffix: "+", label: "Years Combined Expertise" },
  { value: 6, suffix: "", label: "Integrated Disciplines" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "", label: "Working Languages" },
];

const principles = [
  {
    num: "01",
    title: "Integration",
    summary: "One partner, every discipline.",
    body: [
      "Most firms compartmentalise. A tax question goes to one advisor, a legal one to another, HR to a third — and the client spends more time coordinating than receiving counsel.",
      "We reject that model. At Advizen every discipline — legal, tax, finance, accounting, HR, and marketing — works in concert, on a shared view of your business. No silos, no gaps, no dropped context.",
    ],
  },
  {
    num: "02",
    title: "Precision",
    summary: "Meticulous where it matters.",
    body: [
      "Central Asia's regulatory environment rewards attention to detail and punishes assumptions. Our engagements are defined by meticulous technical work paired with commercial judgment.",
      "We don't trade in generalities. Every recommendation is backed by the relevant statute, the specific market nuance, and a clear path to execution.",
    ],
  },
  {
    num: "03",
    title: "Partnership",
    summary: "Embedded, not transactional.",
    body: [
      "We are not a call-centre for compliance. Our best engagements feel like an extension of your leadership team — present in the room when decisions are made, accountable for outcomes, and invested in the long arc of your business.",
      "Your challenges become ours. Your wins are the only metric that matters.",
    ],
  },
  {
    num: "04",
    title: "Local Mastery",
    summary: "International calibre, local fluency.",
    body: [
      "Uzbekistan is not a market you can consult on from abroad. It requires first-hand understanding of the legal code, the bureaucratic rhythm, and the unwritten norms that shape how business actually gets done.",
      "Our operators have spent years building that fluency — then paired it with international standards honed in mature markets. That combination is Advizen's edge.",
    ],
  },
];

const disciplines = [
  { num: "01", title: "Tax", blurb: "Strategy, compliance, and cross-border structuring." },
  { num: "02", title: "Legal", blurb: "Corporate, contract, and regulatory counsel." },
  { num: "03", title: "Finance & Accounting", blurb: "Reporting, controls, and advisory to IFRS standards." },
  { num: "04", title: "HR", blurb: "Employer of record, talent, and labour compliance." },
  { num: "05", title: "Marketing", blurb: "Brand, positioning, and market-entry strategy." },
  { num: "06", title: "Funding & Grants", blurb: "Access to capital, IFI programmes, and incentives." },
];

const industries = [
  "Construction", "Real Estate", "Manufacturing", "FMCG",
  "Technology", "Agriculture", "Textiles", "Healthcare",
  "Education", "Media & Advertising", "Interior Design",
  "Dairy & Food", "Logistics", "Retail", "Legal Services",
];

/* ── Principles Pinned Section ─────────────────────────── */

function PrincipleItem({
  item,
  index,
  onInView,
}: {
  item: (typeof principles)[number];
  index: number;
  onInView: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Detection band = middle 30% of the viewport. An item is "active" while
  // its center is near the viewport center.
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px" });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (inView) onInView(index);
  }, [inView, index, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 first:pt-0 last:pb-0 border-b border-white/[0.06] last:border-b-0"
    >
      {/* Per-principle header — always visible on mobile, and kept as a
          small marker on desktop so the right column is never anonymous
          even mid-transition. */}
      <div className="mb-6 flex items-baseline gap-4">
        <span className="font-mono text-xs text-primary-light tracking-widest">
          {item.num}
        </span>
        <h3 className="font-serif text-2xl text-foreground tracking-wide lg:text-lg lg:text-white/60 lg:uppercase lg:tracking-[0.2em]">
          {item.title}
        </h3>
      </div>
      <p className="font-serif italic text-xl md:text-2xl text-foreground/90 leading-snug mb-6 max-w-xl">
        {item.summary}
      </p>
      <div className="space-y-4 max-w-xl">
        {item.body.map((p, i) => (
          <p key={i} className="text-white/55 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Principles section with a "pinned" label on the left that updates as you
 * scroll through the principles on the right.
 *
 * Implementation note: we avoid `position: sticky` here because it silently
 * breaks under a number of common conditions (ancestor overflow-hidden, CSS
 * grid row stretching, transform-ed ancestors, etc.). Instead we render a
 * `position: fixed` overlay that appears only while the grid is engaged,
 * toggled by an IntersectionObserver on the content column. This is
 * bulletproof across browsers and parent layouts.
 */
function PrinciplesPinned() {
  const [active, setActive] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPinned(entry.isIntersecting),
      // Detection zone = middle 60% of the viewport. The overlay appears
      // once the principles grid enters that zone and disappears when it
      // fully leaves it.
      { rootMargin: "-20% 0px -20% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const activePrinciple = principles[active];

  return (
    <section className="py-24 md:py-36 bg-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="mb-16 md:mb-24">
          <p className="tracking-luxury text-muted-dark mb-4">Our Principles</p>
          <TextReveal
            text="What guides every engagement"
            as="h2"
            className="heading-luxury text-3xl md:text-5xl text-foreground"
          />
        </AnimatedSection>

        {/* Grid — left column is just a layout spacer on desktop; the
            visible left label is rendered as a fixed overlay below. */}
        <div
          ref={gridRef}
          className="grid lg:grid-cols-12 gap-8 lg:gap-16"
        >
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
          <div className="lg:col-span-7">
            {principles.map((p, i) => (
              <PrincipleItem key={p.num} item={p} index={i} onInView={setActive} />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed pinned label — only rendered on lg+ screens and only while the
          grid is within the detection zone. Uses the same max-w-7xl container
          and 5/12 column width so it visually aligns with the grid's left
          column. pointer-events: none so it never blocks scrolling. */}
      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-20 hidden lg:flex items-center transition-opacity duration-500",
          pinned ? "opacity-100" : "opacity-0",
        )}
        aria-hidden={!pinned}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:w-5/12 lg:pr-16">
            <div className="relative h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <p className="font-mono text-xs text-primary-light tracking-widest mb-6">
                    PRINCIPLE {activePrinciple.num} /{" "}
                    {String(principles.length).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-foreground tracking-tight">
                    {activePrinciple.title}
                  </h3>
                  <p className="font-serif italic text-xl text-white/55 mt-6 max-w-md">
                    {activePrinciple.summary}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress ticks — always visible, independent of the
                  AnimatePresence swap so there's no stutter. */}
              <div className="absolute left-0 bottom-0 flex items-center gap-3">
                {principles.map((_, j) => (
                  <span
                    key={j}
                    className={cn(
                      "h-px transition-all duration-500 ease-out",
                      active === j
                        ? "w-12 bg-primary-light"
                        : "w-6 bg-white/15",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section Wrappers ─────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  );
}

function StatBlock({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center lg:text-left"
    >
      <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground tabular-nums leading-none">
        <CountUp target={value} suffix={suffix} triggerOnView duration={1.4} />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-dark">
        {label}
      </p>
    </motion.div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] tracking-[0.18em] uppercase text-white/70 font-light">
      <span className="w-1 h-1 rounded-full bg-primary-light" aria-hidden="true" />
      {children}
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* Hero — split layout */}
      <AuroraBackground>
        <section className="relative pt-36 pb-28 md:pt-44 md:pb-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
              {/* Left — Headline + chips */}
              <div className="lg:col-span-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="tracking-luxury text-muted-dark mb-6"
                >
                  About the Firm
                </motion.p>
                <TextReveal
                  text="Built on expertise, sustained by trust"
                  as="h1"
                  mode="line"
                  className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl mb-10"
                  delay={0.2}
                />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-3"
                >
                  <Chip>8+ yrs combined expertise</Chip>
                  <Chip>6 integrated disciplines</Chip>
                  <Chip>15+ industries</Chip>
                </motion.div>
              </div>

              {/* Right — Editorial "Est. 2024" stamp */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex flex-col items-start lg:items-end"
                >
                  <span className="tracking-luxury text-white/40 mb-2">Established</span>
                  <span className="font-serif text-7xl md:text-8xl text-foreground leading-none tabular-nums">
                    2024
                  </span>
                  <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary-light/80 to-transparent" />
                  <span className="mt-3 text-xs text-white/40 tracking-[0.2em] uppercase">
                    Tashkent · Uzbekistan
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* Metrics Strip */}
      <section className="py-20 md:py-28 bg-black border-y border-white/[0.06] relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
            {metrics.map((m, i) => (
              <StatBlock
                key={m.label}
                value={m.value}
                suffix={m.suffix}
                label={m.label}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="py-28 md:py-40 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-5">
              <p className="tracking-luxury text-muted-dark mb-4">The Thesis</p>
              <TextReveal
                text="A modern mandate for a rapidly evolving market"
                as="h2"
                className="heading-luxury text-3xl md:text-4xl text-foreground leading-tight"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-7">
              <div className="space-y-6">
                <RevealLine>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Uzbekistan is among the fastest-growing economies in Central
                    Asia — and among the most complex to operate in. Regulation
                    evolves quickly. Markets reward those who read the signals
                    early. Missteps are costly and rarely obvious.
                  </p>
                </RevealLine>
                <RevealLine delay={0.1}>
                  <p className="text-white/55 leading-relaxed">
                    For years we watched businesses — multinational and local alike —
                    navigate this environment through a patchwork of specialists.
                    A tax firm here, a law firm there, an HR vendor somewhere else.
                    The cost of coordination often exceeded the value of the advice.
                  </p>
                </RevealLine>
                <RevealLine delay={0.2}>
                  <p className="text-white/55 leading-relaxed">
                    Advizen was founded on a simple thesis: Central Asia&apos;s fastest-growing
                    market deserves advisory of the same calibre found in mature economies —
                    delivered by operators who speak its language, understand its rules,
                    and bring international standards to every engagement.
                  </p>
                </RevealLine>
                <RevealLine delay={0.3}>
                  <p className="font-serif italic text-white/70 leading-relaxed pt-4">
                    One firm. Six disciplines. One point of contact. That is the
                    mandate we set for ourselves in 2024.
                  </p>
                </RevealLine>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Principles — Pinned Split */}
      <PrinciplesPinned />

      <SectionDivider />

      {/* Disciplines Grid */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-16">
            <p className="tracking-luxury text-muted-dark mb-4">Integrated Coverage</p>
            <TextReveal
              text="Six disciplines, one mandate"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.06]">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "group relative p-8 md:p-10 border-b border-white/[0.06]",
                  "md:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0",
                  "lg:[&:not(:nth-child(3n))]:border-r",
                )}
              >
                <span className="font-mono text-xs text-primary-light/80">{d.num}</span>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl text-foreground tracking-wide">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm text-white/45 leading-relaxed">
                  {d.blurb}
                </p>
                {/* Hover accent line */}
                <span
                  className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary-light to-transparent transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Marquee */}
      <section className="py-16 md:py-20 bg-black border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <p className="tracking-luxury text-white/30 text-center">
            Industries our team has served
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="marquee-items" aria-hidden={copy === 1}>
                {industries.map((name) => (
                  <span
                    key={`${copy}-${name}`}
                    className="mx-8 md:mx-12 text-sm md:text-base font-light tracking-[0.1em] text-white/30 whitespace-nowrap uppercase select-none"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* Editorial Pull Quote */}
      <section className="py-32 md:py-44 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -right-32 opacity-40" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <blockquote className="text-center">
              <p className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.2] font-light italic">
                &ldquo;Central Asia&apos;s fastest-growing market deserves advisory
                of the same calibre found in mature economies — delivered by
                operators who speak its language and bring international
                standards.&rdquo;
              </p>
              <cite className="block mt-10 tracking-luxury text-muted-dark not-italic">
                The Advizen Thesis
              </cite>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-28 md:py-36 bg-black relative overflow-hidden">
        <div className="ambient-glow ambient-glow-warm w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -bottom-32 -right-32 opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="tracking-luxury text-muted-dark mb-6">Next Step</p>
            <TextReveal
              text="Work with us"
              as="h2"
              className="heading-luxury text-4xl md:text-6xl text-foreground mb-6"
            />
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              Whether you are entering the market or scaling existing operations,
              our firm is prepared to advise.
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

            {/* Direct contact row */}
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
        </div>
      </section>
    </>
  );
}
