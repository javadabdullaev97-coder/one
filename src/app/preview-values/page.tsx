"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Lightbulb, Target, Handshake } from "lucide-react";
import { useRef } from "react";

const VALUES = [
  {
    num: "01",
    title: "One-Stop Shop",
    category: "Core Value",
    icon: Target,
    content:
      "Tax, legal, finance, and HR — all under one roof. No need to juggle multiple firms. One partner, one point of contact, complete coverage.",
  },
  {
    num: "02",
    title: "Client-First",
    category: "Philosophy",
    icon: Handshake,
    content:
      "Every engagement is tailored to your business. We listen before we advise, and we measure our success by yours.",
  },
  {
    num: "03",
    title: "Local Expertise",
    category: "Advantage",
    icon: Lightbulb,
    content:
      "Deep knowledge of Uzbekistan's regulatory landscape and Central Asian markets. We navigate complexities so you can focus on growth.",
  },
  {
    num: "04",
    title: "Trusted Team",
    category: "Strength",
    icon: Users,
    content:
      "A multidisciplinary team of seasoned professionals across tax, law, finance, and consulting. Coordinated expertise, unified strategy.",
  },
  {
    num: "05",
    title: "Integrity",
    category: "Foundation",
    icon: Shield,
    content:
      "Transparency and ethical standards are non-negotiable. We build relationships on trust, delivering honest counsel even when it is not the easiest path.",
  },
];

/* ─────────────────────────────────────────────
   Variant 1: Editorial Scroll / Manifesto
   ───────────────────────────────────────────── */

function VariantOne() {
  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 border-b border-white/10">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
          Variant 1
        </p>
        <h2 className="text-2xl md:text-3xl text-white">Editorial Scroll / Manifesto</h2>
      </div>

      {VALUES.map((v, i) => (
        <ManifestoChapter key={v.num} value={v} index={i} />
      ))}
    </section>
  );
}

function ManifestoChapter({
  value,
  index,
}: {
  value: (typeof VALUES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden border-b border-white/5"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl w-full mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center"
      >
        {/* Massive number */}
        <div className="lg:col-span-4">
          <p
            className="text-[clamp(8rem,18vw,16rem)] leading-none font-light text-white/[0.06] tabular-nums"
            style={{ fontFamily: "var(--font-hero), serif" }}
          >
            {value.num}
          </p>
        </div>

        {/* Content */}
        <div className="lg:col-span-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary-light mb-6">
            {value.category}
          </p>
          <h3
            className="text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-white font-light mb-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            {value.title}
          </h3>
          <div className="max-w-xl">
            <div className="h-px w-16 bg-primary-light mb-6" />
            <p className="text-lg md:text-xl text-white/55 leading-relaxed font-light">
              {value.content}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute pointer-events-none w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 60%)`,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Variant 2: Vertical Pillars of Light
   ───────────────────────────────────────────── */

function VariantTwo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
          Variant 2
        </p>
        <h2 className="text-2xl md:text-3xl text-white mb-20">
          Vertical Pillars of Light
        </h2>

        <div
          className="relative h-[700px] flex items-end justify-center gap-8 md:gap-16"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {VALUES.map((v, i) => {
            const isActive = activeIndex === i;
            const isOther = activeIndex !== null && activeIndex !== i;

            return (
              <div
                key={v.num}
                className="relative flex flex-col items-center cursor-default"
                onMouseEnter={() => setActiveIndex(i)}
              >
                {/* Pillar */}
                <motion.div
                  initial={{ height: "60%" }}
                  animate={{
                    height: isActive ? "100%" : "70%",
                    opacity: isOther ? 0.2 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-[1px] flex flex-col items-center justify-end"
                  style={{
                    height: "70%",
                    background: `linear-gradient(to top, rgba(var(--primary-rgb), ${
                      isActive ? 1 : 0.4
                    }) 0%, rgba(var(--primary-rgb), 0) 100%)`,
                    boxShadow: isActive
                      ? `0 0 30px rgba(var(--primary-light-rgb), 0.6), 0 0 60px rgba(var(--primary-rgb), 0.3)`
                      : "none",
                    transition: "box-shadow 0.4s ease, background 0.4s ease",
                  }}
                />

                {/* Number on top of pillar */}
                <div
                  className="absolute -top-12 text-[10px] tracking-[0.3em] text-white/40"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {v.num}
                </div>

                {/* Vertical label */}
                <motion.div
                  animate={{
                    opacity: isOther ? 0.3 : 1,
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
                  }}
                  className="absolute bottom-4 text-xs md:text-sm tracking-[0.25em] uppercase font-medium whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {v.title}
                </motion.div>

                {/* Floating description on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-72 pointer-events-none"
                  style={{ marginTop: "-90px" }}
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-primary-light mb-2 text-center">
                    {v.category}
                  </p>
                  <p className="text-[13px] text-white/65 leading-relaxed text-center font-light">
                    {v.content}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-white/30 mt-10">
          Hover a pillar to read the value
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Variant 3: Diagonal Split Stripes
   ───────────────────────────────────────────── */

function VariantThree() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">
          Variant 3
        </p>
        <h2 className="text-2xl md:text-3xl text-white">Diagonal Split Stripes</h2>
      </div>

      <div
        className="relative h-[700px] overflow-hidden"
        style={{ transform: "skewY(-6deg)", transformOrigin: "center" }}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {VALUES.map((v, i) => {
          const isActive = activeIndex === i;
          const isOther = activeIndex !== null && activeIndex !== i;
          const baseFlex = 1;

          return (
            <motion.div
              key={v.num}
              animate={{
                flexBasis: isActive ? "40%" : isOther ? "15%" : "20%",
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActiveIndex(i)}
              className="relative h-full overflow-hidden border-b border-white/[0.08] cursor-default"
              style={{
                background: isActive
                  ? `linear-gradient(135deg, rgba(var(--primary-dark-rgb), 0.4) 0%, #0a0a0a 100%)`
                  : i % 2 === 0
                  ? "#0c0c0c"
                  : "#080808",
              }}
            >
              {/* Counter-skew the content so it appears straight */}
              <div
                className="absolute inset-0 flex items-center px-12"
                style={{ transform: "skewY(6deg)" }}
              >
                <div className="flex items-center gap-12 w-full">
                  {/* Number */}
                  <div
                    className="text-[clamp(4rem,10vw,9rem)] leading-none font-light text-white/[0.07] tabular-nums shrink-0"
                    style={{ fontFamily: "var(--font-hero), serif" }}
                  >
                    {v.num}
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-primary-light mb-3">
                      {v.category}
                    </p>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl text-white font-light tracking-tight">
                      {v.title}
                    </h3>
                  </div>

                  {/* Description (only when active) */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
                    className="hidden lg:block max-w-md shrink-0"
                  >
                    <div className="h-px w-12 bg-primary-light mb-4" />
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                      {v.content}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <p className="text-center text-xs text-white/30">
          Hover a stripe to expand and read the value
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function PreviewValuesPage() {
  return (
    <main className="bg-black min-h-screen">
      <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 border-b border-white/10">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
          Preview / Values Section Redesign
        </p>
        <h1
          className="text-4xl md:text-6xl text-white font-light leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Three concepts for
          <br />
          <span className="text-white/60">&ldquo;What we stand for&rdquo;</span>
        </h1>
        <p className="mt-8 text-white/50 max-w-2xl leading-relaxed">
          Below are three alternative concepts to the current orbital component.
          Each variant uses the same five firm values but presents them in a
          distinctive editorial format.
        </p>
      </header>

      <VariantOne />
      <VariantTwo />
      <VariantThree />

      <footer className="max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <p className="text-white/30 text-sm">
          End of preview. Pick a favorite and we will replace the orbital component.
        </p>
      </footer>
    </main>
  );
}
