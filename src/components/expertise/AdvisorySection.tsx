"use client";

import Link from "next/link";
import { useState, type ComponentType, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calculator,
  Globe,
  Handshake,
  Landmark,
  LayoutDashboard,
  LineChart,
  MapPin,
  Scale,
  ScanSearch,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { advisoryServices } from "@/lib/services";
import { cn } from "@/lib/utils";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

const serviceIcons: Record<string, LucideIcon> = {
  tax: Calculator,
  legal: Scale,
  finance: LineChart,
  hr: Users,
  funding: Landmark,
  "ma-advisory": Handshake,
  "due-diligence": ScanSearch,
  "entity-management": LayoutDashboard,
  corporate: Briefcase,
  eor: UserCheck,
  payroll: Wallet,
  immigration: Globe,
  "virtual-office": MapPin,
  compliance: ShieldCheck,
};

export default function AdvisorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const active = advisoryServices[activeIndex];
  const ActiveIcon = serviceIcons[active.slug] ?? ArrowUpRight;
  const direction = activeIndex >= prevIndex ? 1 : -1;

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(i);
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="ambient-glow ambient-glow-oxblood w-[500px] h-[500px] -top-32 -left-32 opacity-[0.15]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 md:mb-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="tracking-luxury text-white/50 mb-4">Advisory</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                You consult &mdash; we counsel
              </h2>
              <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
                Strategic guidance across tax, legal, finance, HR, funding, M&amp;A, and due diligence.
                You make the decisions; we provide the depth.
              </p>
            </div>
            <span className="hidden md:block font-serif text-5xl text-white/[0.06] tabular-nums shrink-0 leading-none pb-1">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-[5fr_7fr] border border-white/[0.07] overflow-hidden">

          {/* Left: service list */}
          <div className="border-r border-white/[0.07] flex flex-col">
            <div className="divide-y divide-white/[0.04] flex-1">
              {advisoryServices.map((service, i) => {
                const isActive = i === activeIndex;
                const ItemIcon = serviceIcons[service.slug] ?? ArrowUpRight;
                return (
                  <motion.button
                    key={service.slug}
                    type="button"
                    onMouseEnter={() => handleSelect(i)}
                    onClick={() => handleSelect(i)}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "group relative w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200",
                      isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.018]"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-300",
                        isActive ? "bg-primary" : "bg-transparent"
                      )}
                    />
                    <span
                      className={cn(
                        "font-serif tabular-nums text-sm w-5 shrink-0 transition-colors duration-200",
                        isActive ? "text-primary" : "text-white/18 group-hover:text-white/38"
                      )}
                    >
                      {service.num}
                    </span>
                    <span
                      className={cn(
                        "w-8 h-8 rounded flex items-center justify-center shrink-0 border transition-all duration-250",
                        isActive
                          ? "border-primary/28 bg-primary/[0.09]"
                          : "border-white/[0.06] bg-transparent group-hover:border-white/[0.13] group-hover:bg-white/[0.03]"
                      )}
                    >
                      <ItemIcon
                        className={cn(
                          "w-3.5 h-3.5 transition-colors duration-250",
                          isActive ? "text-primary" : "text-white/28 group-hover:text-white/58"
                        )}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-[13px] font-medium tracking-[0.025em] transition-colors duration-200",
                        isActive ? "text-foreground" : "text-white/40 group-hover:text-white/72"
                      )}
                    >
                      {service.title}
                    </span>
                    <ArrowRight
                      className={cn(
                        "w-3.5 h-3.5 shrink-0 transition-all duration-200",
                        isActive
                          ? "text-primary opacity-100"
                          : "opacity-0 group-hover:opacity-25 group-hover:text-white"
                      )}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="px-5 py-3.5 flex gap-1 border-t border-white/[0.04]">
              {advisoryServices.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-label={`Go to service ${i + 1}`}
                  className={cn(
                    "h-[2px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    i === activeIndex
                      ? "bg-primary flex-[3]"
                      : "bg-white/[0.10] hover:bg-white/[0.22] flex-1"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right: active service detail */}
          <div className="relative bg-[#070707] min-h-[480px] md:h-[530px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: direction * 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 p-8 md:p-10 flex flex-col overflow-y-auto"
              >
                {/* Ghost number */}
                <span className="absolute bottom-0 right-5 font-serif text-[9rem] md:text-[12rem] text-white/[0.022] leading-none select-none pointer-events-none tabular-nums">
                  {active.num}
                </span>

                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center border border-primary/22 bg-primary/[0.07]">
                    <ActiveIcon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="heading-luxury text-xl md:text-[1.35rem] text-foreground leading-tight">
                      {active.title}
                    </h3>
                    <p className="text-[9px] tracking-[0.18em] uppercase text-primary/45 mt-1">
                      Advisory
                    </p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-[14px] text-white/55 leading-relaxed mb-3">
                    {active.description[0]}
                  </p>
                  <p className="text-[13px] text-white/30 leading-relaxed mb-7">
                    {active.description[1]}
                  </p>
                </motion.div>

                {/* Capabilities */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.12 }}
                >
                  <p className="text-[10px] tracking-[0.18em] uppercase text-white/20 mb-3">
                    Capabilities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.capabilities.map((cap, ci) => (
                      <motion.span
                        key={cap}
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.13 + ci * 0.022,
                          duration: 0.2,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[11px] text-white/38 border border-white/[0.07] px-3 py-1.5 hover:border-primary/28 hover:text-white/65 hover:bg-primary/[0.04] transition-all duration-200 cursor-default"
                      >
                        {cap}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <Link
                    href={`/expertise/${active.slug}`}
                    className="group/link inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-primary/65 hover:text-primary transition-colors duration-200"
                  >
                    Full service overview
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                  <span className="font-serif text-sm text-white/[0.12] tabular-nums">
                    {String(activeIndex + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(advisoryServices.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
