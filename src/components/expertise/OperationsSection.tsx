"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { operationsServices } from "@/lib/services";
import { cn } from "@/lib/utils";

export default function OperationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.06]">
      <div className="ambient-glow ambient-glow-warm w-[700px] h-[700px] top-1/4 right-0 translate-x-1/2 opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <AnimatedSection className="mb-14 md:mb-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="tracking-luxury text-white/50 mb-4">Operations</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground">
                You delegate &mdash; we execute
              </h2>
              <p className="mt-4 text-white/45 max-w-xl leading-relaxed text-sm">
                Fully managed services where we handle execution on your behalf &mdash; from entity
                management and payroll to immigration and compliance monitoring.
              </p>
            </div>
            <span className="hidden md:block font-serif text-[11px] tracking-[0.16em] uppercase text-white/18 shrink-0 pb-1">
              {operationsServices.length} services
            </span>
          </div>
        </AnimatedSection>

        <div className="border-t border-white/[0.07]">
          {operationsServices.map((service, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative border-b border-white/[0.06] group/row transition-colors duration-200",
                  isOpen ? "bg-white/[0.018]" : "hover:bg-white/[0.01]"
                )}
              >
                {/* Left active bar */}
                <motion.span
                  animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0.4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-top"
                />

                {/* Row header */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 md:gap-8 py-5 md:py-6 pl-6 pr-4 text-left"
                >
                  <span className="font-serif text-xs tabular-nums text-white/18 w-5 shrink-0">
                    {service.num}
                  </span>

                  <span
                    className={cn(
                      "heading-luxury text-lg md:text-[1.35rem] flex-1 transition-colors duration-200",
                      isOpen
                        ? "text-foreground"
                        : "text-white/55 group-hover/row:text-white/85"
                    )}
                  >
                    {service.title}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-250 ml-2",
                      isOpen
                        ? "border-primary/30 bg-primary/[0.07]"
                        : "border-white/[0.10] group-hover/row:border-white/[0.22]"
                    )}
                  >
                    <Plus
                      className={cn(
                        "w-3 h-3 transition-colors duration-250",
                        isOpen ? "text-primary" : "text-white/35 group-hover/row:text-white/60"
                      )}
                    />
                  </motion.span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 260, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 pr-4 md:pr-6">
                        <div>
                          <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.06 }}
                            className="text-[14px] text-white/52 leading-relaxed mb-5"
                          >
                            {service.description[0]}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.12 }}
                            className="flex flex-wrap gap-1.5"
                          >
                            {service.capabilities.map((cap, ci) => (
                              <motion.span
                                key={cap}
                                initial={{ opacity: 0, scale: 0.93 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: 0.14 + ci * 0.018,
                                  duration: 0.18,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-[11px] text-white/35 border border-white/[0.07] px-3 py-1.5 hover:border-white/[0.14] hover:text-white/55 transition-all duration-200 cursor-default"
                              >
                                {cap}
                              </motion.span>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
