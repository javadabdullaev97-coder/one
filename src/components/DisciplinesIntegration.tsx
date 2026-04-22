"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calculator, Scale, LineChart, Users, Landmark, Briefcase, LayoutDashboard, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type LucideIcon = React.ComponentType<LucideProps>;

const disciplines: { num: string; title: string; short: string; blurb: string; icon: LucideIcon }[] = [
  { num: "01", title: "Tax", short: "Tax", blurb: "Strategy, compliance, and cross-border structuring.", icon: Calculator },
  { num: "02", title: "Legal", short: "Legal", blurb: "Corporate, contract, and regulatory counsel.", icon: Scale },
  { num: "03", title: "Accounting", short: "Accounting", blurb: "Reporting, controls, and advisory to IFRS standards.", icon: LineChart },
  { num: "04", title: "HR", short: "HR", blurb: "Talent, payroll, and labour compliance.", icon: Users },
  { num: "05", title: "Funding", short: "Funding", blurb: "Access to capital, IFI programmes, and incentives.", icon: Landmark },
  { num: "06", title: "Corporate Services", short: "Corporate", blurb: "Formation, nominal director, EOR, and company admin.", icon: Briefcase },
  { num: "07", title: "Entity Management", short: "Entity Mgmt", blurb: "Full-service outsourced management of your UZ entity.", icon: LayoutDashboard },
];

export default function DisciplinesIntegration() {
  const [active, setActive] = useState(0);
  const shouldReduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const N = disciplines.length;
  const PULSE_MS = 1000;

  useEffect(() => {
    if (!shouldReduce && !hovered) return;
    if (hovered) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % N);
    }, PULSE_MS);
    return () => clearInterval(id);
  }, [shouldReduce, hovered, N]);

  const advance = () => {
    if (!hovered) setActive((p) => (p + 1) % N);
  };

  const current = disciplines[active];
  const Icon = current.icon;

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex items-start">
        {/* LEFT — Advizen tile */}
        <div className="relative z-10 flex flex-col items-center gap-5 shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border border-white/10 bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="Advizen"
              width={160}
              height={134}
              className="w-16 h-auto md:w-[72px] opacity-95"
            />
          </div>
          <span className="text-xs tracking-[0.22em] uppercase text-white/50">Advizen</span>
        </div>

        {/* MIDDLE — beam track */}
        <div className="relative flex-1 h-28 md:h-32 z-0 -mx-14 md:-mx-16" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={`line-${i}`}
              className="absolute inset-x-0 h-px bg-white/[0.06]"
              style={{ top: `calc(50% + ${(i - 1) * 12}px - 0.5px)` }}
            />
          ))}
          {!shouldReduce && !hovered && [0, 1, 2].map((i) => (
            <motion.div
              key={`pulse-${active}-${i}`}
              className="absolute h-px w-20 md:w-24 -ml-10 md:-ml-12"
              style={{
                top: `calc(50% + ${(i - 1) * 12}px - 0.5px)`,
                background: "linear-gradient(90deg, transparent 0%, rgba(237,88,99,0.95) 50%, transparent 100%)",
                boxShadow: "0 0 14px rgba(237,88,99,0.55)",
              }}
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: PULSE_MS / 1000, ease: [0.42, 0, 0.58, 1] }}
              onAnimationComplete={i === 2 ? advance : undefined}
            />
          ))}
        </div>

        {/* RIGHT — cycling service tile */}
        <div className="relative z-10 flex flex-col items-center gap-5 shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl border border-white/10 bg-[#0D0D0D] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: "-70%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "70%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Icon className="w-16 h-16 md:w-[72px] md:h-[72px] text-primary-light" strokeWidth={1.15} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative h-5 min-w-[108px] md:min-w-[132px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 text-center text-xs tracking-[0.22em] uppercase text-white/60 whitespace-nowrap"
              >
                {current.short}
              </motion.span>
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">Current discipline: {current.title}</span>
          </div>
        </div>
      </div>

      {/* Discipline progress ticks */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {disciplines.map((d, j) => (
          <button
            key={j}
            onClick={() => setActive(j)}
            className={cn(
              "h-px transition-all duration-500 ease-out cursor-pointer",
              active === j ? "w-10 bg-primary-light" : "w-5 bg-white/15 hover:bg-white/30",
            )}
            aria-label={`Show ${d.title}`}
          />
        ))}
      </div>
    </div>
  );
}
