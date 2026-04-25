"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Clock,
  User,
  BookOpen,
} from "lucide-react";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection, { HorizontalLine } from "@/components/AnimatedSection";
import AuroraBackground from "@/components/AuroraBackground";
import { getArticleBySlug, publications } from "@/lib/publications";
import { servicesData } from "@/lib/services";

const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ── Reading Progress ────────────────────────────────── */

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-light/80 to-primary z-[100] origin-left"
    />
  );
}

/* ── Page ────────────────────────────────────────────── */

export default function ArticlePageClient({ slug }: { slug: string }) {
  /* Hooks must be declared before any early return */
  const [activeSection, setActiveSection] = useState<string>("");

  const article = getArticleBySlug(slug);

  /* Build TOC whether or not article exists (keeps hook deps stable) */
  const toc =
    article?.content
      .filter((b) => b.type === "h2" && b.text)
      .map((b) => ({ id: slugify(b.text!), text: b.text! })) ?? [];

  /* ── Scroll-spy via IntersectionObserver ─────────────────── */
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      /* Fires when heading crosses the upper-third of the viewport */
      { rootMargin: "-5% 0% -60% 0%", threshold: 0 }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  /* ── Not found ───────────────────────────────────────── */
  if (!article) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-luxury text-4xl text-foreground mb-4">
            Article not found
          </h1>
          <Link
            href="/library"
            className="text-white/50 hover:text-foreground transition-colors cursor-pointer"
          >
            Return to Library
          </Link>
        </div>
      </section>
    );
  }

  /* ── Adjacent articles ───────────────────────────────── */
  const readablePublications = publications
    .filter((p) => p.hasRead)
    .sort((a, b) => Number(b.year) - Number(a.year));
  const currentIndex = readablePublications.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? readablePublications[currentIndex - 1] : null;
  const next =
    currentIndex < readablePublications.length - 1
      ? readablePublications[currentIndex + 1]
      : null;

  /* ── Counters reset each render ─────────────────────────── */
  let h2Counter = 0;
  const firstParagraphIndex = article.content.findIndex((b) => b.type === "p");

  /* ── Related services (first 5) ─────────────────────────── */
  const relatedServices = servicesData.slice(0, 5);

  return (
    <>
      <ReadingProgress />

      {/* ── Hero ───────────────────────────────────────────── */}
      <AuroraBackground>
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            {/* Same grid as body so hero content aligns with article column */}
            <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
              <div className="hidden lg:block" />
              <div className="max-w-3xl">
                {/* Breadcrumb */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-3 mb-7"
                >
                  <Link
                    href="/library"
                    className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    Library
                  </Link>
                  <span className="text-white/15">/</span>
                  <span className="tracking-luxury text-white/40">
                    {article.tag}
                  </span>
                </motion.div>

                {/* Title */}
                <TextReveal
                  text={article.title}
                  as="h1"
                  mode="line"
                  className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.08]"
                  delay={0.3}
                />

                {/* Subtitle */}
                {article.subtitle && (
                  <RevealLine delay={0.6}>
                    <p className="text-lg text-white/50 mt-6 max-w-xl leading-relaxed">
                      {article.subtitle}
                    </p>
                  </RevealLine>
                )}

                {/* Meta row */}
                <RevealLine delay={0.7}>
                  <div className="flex flex-wrap items-center gap-6 mt-5 pt-5 border-t border-white/[0.06]">
                    {article.author && (
                      <div className="flex items-center gap-2 text-white/40">
                        <User className="w-3.5 h-3.5" />
                        <span className="text-sm">{article.author}</span>
                      </div>
                    )}
                    {article.readTime && (
                      <div className="flex items-center gap-2 text-white/40">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-white/40">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span className="text-sm">{article.pages} pages</span>
                    </div>
                    <span className="font-mono text-xs text-white/25 tabular-nums">
                      {article.year}
                    </span>
                  </div>
                </RevealLine>
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* ── Article Body + Sidebar ────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block">
              <motion.div
                className="sticky top-28 space-y-10"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
              >
                {/* Contents */}
                {toc.length > 0 && (
                  <div>
                    <p className="tracking-luxury text-white/40 mb-5">
                      Contents
                    </p>
                    <nav className="space-y-0.5">
                      {toc.map((item, i) => {
                        const isActive = activeSection === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="group relative flex items-start gap-2.5 rounded-sm px-2 py-2 text-[13px] leading-snug transition-colors duration-200"
                            style={{
                              color: isActive
                                ? "rgba(245,245,245,0.90)"
                                : "rgba(245,245,245,0.40)",
                            }}
                          >
                            {/* Active left accent */}
                            <motion.span
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full bg-white/60 origin-center"
                              animate={{
                                height: isActive ? "60%" : "0%",
                                opacity: isActive ? 1 : 0,
                              }}
                              transition={{ duration: 0.3, ease: luxuryEase }}
                            />

                            {/* Hover / active bg */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.span
                                  className="absolute inset-0 rounded-sm bg-white/[0.04]"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                />
                              )}
                            </AnimatePresence>

                            <span
                              className="relative font-mono text-[10px] mt-0.5 shrink-0 tabular-nums transition-colors duration-200"
                              style={{
                                color: isActive
                                  ? "rgba(245,245,245,0.45)"
                                  : "rgba(245,245,245,0.22)",
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="relative">{item.text}</span>
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Divider */}
                <div className="h-px bg-white/[0.07]" />

                {/* Related Services */}
                <div>
                  <p className="tracking-luxury text-white/40 mb-5">
                    Our Services
                  </p>
                  <nav className="space-y-0.5">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/expertise/${service.slug}`}
                        className="group flex items-center justify-between rounded-sm px-2 py-2 text-[13px] text-white/40 hover:text-white/85 hover:bg-white/[0.03] transition-all duration-200"
                      >
                        <span>{service.title}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                      </Link>
                    ))}
                  </nav>

                  <Link
                    href="/expertise"
                    className="group inline-flex items-center gap-1.5 mt-4 px-2 text-[10px] tracking-luxury text-white/25 hover:text-white/55 transition-colors duration-200"
                  >
                    View all services
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            </aside>

            {/* ── Article content ───────────────────────────────── */}
            <article className="max-w-3xl">
              {article.content.map((block, i) => {
                const delay = Math.min(i * 0.03, 0.3);

                if (block.type === "h2") {
                  h2Counter++;
                  const sectionId = slugify(block.text!);
                  return (
                    <AnimatedSection key={i} delay={delay}>
                      <h2
                        id={sectionId}
                        className="flex items-baseline gap-3 mt-20 mb-6 scroll-mt-28"
                      >
                        <span className="font-mono text-xs text-white/20 tabular-nums shrink-0">
                          {String(h2Counter).padStart(2, "0")}
                        </span>
                        <span className="heading-luxury text-2xl md:text-3xl text-foreground leading-snug">
                          {block.text}
                        </span>
                      </h2>
                    </AnimatedSection>
                  );
                }

                if (block.type === "h3") {
                  return (
                    <AnimatedSection key={i} delay={delay}>
                      <h3 className="heading-luxury text-xl md:text-2xl text-foreground/90 mt-14 mb-4 leading-snug">
                        {block.text}
                      </h3>
                    </AnimatedSection>
                  );
                }

                if (block.type === "p") {
                  const isFirst = i === firstParagraphIndex;
                  return (
                    <AnimatedSection key={i} delay={delay}>
                      <p
                        className={`text-white/60 leading-[1.85] mb-6 ${
                          isFirst
                            ? "first-letter:text-[3.2rem] first-letter:font-serif first-letter:text-foreground/70 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85]"
                            : ""
                        }`}
                      >
                        {block.text}
                      </p>
                    </AnimatedSection>
                  );
                }

                if (block.type === "ul" && block.items) {
                  return (
                    <AnimatedSection key={i} delay={delay}>
                      <ul className="space-y-3 mb-8 pl-1">
                        {block.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-white/55 leading-relaxed"
                          >
                            <span className="shrink-0 w-1 h-1 rounded-full bg-white/25 mt-[0.65rem]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>
                  );
                }

                if (block.type === "blockquote") {
                  return (
                    <AnimatedSection key={i} delay={delay}>
                      <blockquote className="relative my-12 py-6 pl-8">
                        <span
                          className="absolute top-0 left-0 font-serif text-[4rem] text-white/[0.07] leading-none select-none"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>
                        <p className="text-white/65 italic leading-relaxed text-lg font-serif">
                          {block.text}
                        </p>
                      </blockquote>
                    </AnimatedSection>
                  );
                }

                if (block.type === "divider") {
                  return (
                    <div key={i} className="my-14">
                      <HorizontalLine />
                    </div>
                  );
                }

                return null;
              })}
            </article>
          </div>
        </div>
      </section>

      {/* ── Download CTA ──────────────────────────────────────── */}
      {article.hasDownload && (
        <section className="py-16 bg-surface border-y border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-foreground/85 font-serif text-lg mb-1">
                Download the full PDF
              </p>
              <p className="text-sm text-white/40">
                {article.pages} pages — Free access
              </p>
            </div>
            <MagneticButton
              variant="primary"
              as="a"
              href={`/downloads/${article.slug}.pdf`}
            >
              <Download className="w-4 h-4" />
              Download PDF
            </MagneticButton>
          </div>
        </section>
      )}

      {/* ── Adjacent Article Nav ─────────────────────────────────── */}
      <section className="bg-surface border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 divide-x divide-white/[0.06]">
            {prev ? (
              <Link
                href={`/library/${prev.slug}`}
                className="group py-10 px-6 flex items-center gap-4 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 text-white/25 group-hover:text-foreground group-hover:-translate-x-1 transition-all shrink-0" />
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Previous
                  </p>
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors text-sm">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/library/${next.slug}`}
                className="group py-10 px-6 flex items-center justify-end gap-4 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
              >
                <div className="text-right">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Next
                  </p>
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors text-sm">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/25 group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <TextReveal
              text="Need expert guidance?"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-8"
            />
            <RevealLine delay={0.2}>
              <p className="text-white/50 leading-relaxed mb-12 max-w-lg mx-auto">
                Our advisory team is ready to help you navigate the complexities
                of operating in Uzbekistan.
              </p>
            </RevealLine>
            <MagneticButton variant="primary" as="a" href="/contact">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
