"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";

const TelegramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const infoCards = [
  {
    icon: <MapPin className="w-8 h-8" strokeWidth={1.4} />,
    title: "Our Office",
    value: "Tashkent, Uzbekistan",
    href: undefined,
  },
  {
    icon: <Phone className="w-8 h-8" strokeWidth={1.4} />,
    title: "Phone",
    value: "+998 (33) 488 48 88",
    href: "tel:+998334884888",
  },
  {
    icon: <Mail className="w-8 h-8" strokeWidth={1.4} />,
    title: "Email",
    value: "info@advizenco.com",
    href: "mailto:info@advizenco.com",
  },
  {
    icon: <Clock className="w-8 h-8" strokeWidth={1.4} />,
    title: "Working Hours",
    value: "Mon – Fri, 9:00 – 18:00",
    href: undefined,
  },
];

const inputClass =
  "w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-foreground placeholder:text-white/25 focus:outline-none focus:border-white/25 focus:bg-white/[0.04] transition-all duration-200";
const labelClass =
  "block text-xs uppercase tracking-widest text-white/40 mb-2.5";

export default function ContactPage() {
  const [consent, setConsent] = useState(false);

  return (
    <>
      {/* Hero */}
      <AuroraBackground>
        <section className="relative pt-24 pb-44 md:pt-28 md:pb-48">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tracking-luxury text-white/50 mb-4"
            >
              Contact
            </motion.p>
            <TextReveal
              text="Begin a conversation"
              as="h1"
              mode="line"
              className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.08] max-w-3xl"
              delay={0.3}
            />
            <RevealLine delay={0.6}>
              <p className="text-base text-white/50 max-w-xl mt-5 leading-relaxed">
                Every engagement starts with understanding. Reach out and our
                team will respond within 24 hours.
              </p>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* Form section starts right at aurora bottom — cards overlay the boundary */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background">
        {/* Info cards — absolute, half above aurora bottom, half below */}
        <div className="absolute inset-x-0 -top-24 md:-top-28 z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {infoCards.map((card) => {
                const inner = (
                  <div className="group relative bg-[#141414] border border-white/[0.08] rounded-2xl p-7 md:p-9 text-center hover:border-white/[0.2] hover:-translate-y-1 transition-all duration-300 h-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                    {/* subtle top gleam */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="flex justify-center mb-5 md:mb-6 text-white/60 group-hover:text-white transition-colors duration-300">
                      {card.icon}
                    </div>
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/45 group-hover:text-white/75 mb-3 font-semibold transition-colors duration-300">
                      {card.title}
                    </p>
                    <p className="text-sm md:text-[15px] text-white/80 leading-relaxed">
                      {card.value}
                    </p>
                  </div>
                );

                return (
                  <StaggerItem key={card.title}>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={
                          card.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="block h-full cursor-pointer"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="h-full">{inner}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Form */}
            <AnimatedSection className="lg:col-span-7">
              {/* Response time badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#4ade80] text-[11px] tracking-wide mb-6">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ade80]" />
                </span>
                Response within 24 hours
              </div>

              <p className="tracking-luxury text-white/35 mb-4">Inquiry</p>
              <TextReveal
                text="Send us a message"
                as="h2"
                className="heading-luxury text-3xl md:text-4xl text-foreground mb-4"
              />
              <p className="text-white/45 leading-relaxed mb-10 max-w-xl">
                For detailed inquiries — share project context, timeline, and
                area of interest. We&rsquo;ll get back to you with a tailored response.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name <span className="text-primary-light/80">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name <span className="text-primary-light/80">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-primary-light/80">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-surface">
                      Select a service
                    </option>
                    <option value="tax" className="bg-surface">
                      Tax Consulting
                    </option>
                    <option value="legal" className="bg-surface">
                      Legal Advisory
                    </option>
                    <option value="finance" className="bg-surface">
                      Accounting
                    </option>
                    <option value="hr" className="bg-surface">
                      Human Resources
                    </option>
                    <option value="funding" className="bg-surface">
                      Funding &amp; Grants
                    </option>
                    <option value="other" className="bg-surface">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                {/* Data consent */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="relative mt-0.5 shrink-0 w-4 h-4">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
                    />
                    <div
                      className={`w-4 h-4 border rounded transition-all duration-200 flex items-center justify-center ${
                        consent
                          ? "bg-primary border-primary"
                          : "border-white/25 bg-transparent"
                      }`}
                    >
                      <svg
                        className={`w-2.5 h-2.5 text-white transition-opacity duration-200 ${
                          consent ? "opacity-100" : "opacity-0"
                        }`}
                        fill="none"
                        viewBox="0 0 10 8"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <label
                    htmlFor="consent"
                    className="text-[13px] text-white/45 leading-relaxed cursor-pointer select-none"
                  >
                    I consent to the processing of my personal data in
                    accordance with the{" "}
                    <Link
                      href="/privacy"
                      className="text-white/65 underline underline-offset-2 hover:text-white/90 transition-colors"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/terms"
                      className="text-white/65 underline underline-offset-2 hover:text-white/90 transition-colors"
                    >
                      Terms of Use
                    </Link>
                    . By submitting this form you confirm your agreement to the
                    storage and processing of the provided data.
                  </label>
                </div>

                <div
                  className={`mt-4 transition-opacity duration-300 ${
                    consent ? "opacity-100" : "opacity-35 pointer-events-none"
                  }`}
                >
                  <MagneticButton variant="primary" type="submit">
                    <Send className="w-4 h-4" />
                    Send message
                  </MagneticButton>
                </div>
              </form>
            </AnimatedSection>

            {/* Sidebar — Quick chat */}
            <AnimatedSection delay={0.2} className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                {/* Spacer matching the response-time badge in the form column so headings align */}
                <div className="hidden lg:block h-[28px] mb-6" aria-hidden="true" />

                <p className="tracking-luxury text-white/35 mb-4">Quick chat</p>
                <h2 className="heading-luxury text-3xl md:text-4xl text-foreground mb-4">
                  Need a faster reply?
                </h2>
                <p className="text-white/50 leading-relaxed mb-10 max-w-xl">
                  Skip the form — message us directly on Telegram or WhatsApp.
                  Average response in under 30 minutes during business hours.
                </p>

                {/* Telegram + WhatsApp — large, prominent */}
                <div className="space-y-4 mb-10">
                  <a
                    href="https://t.me/advizen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 p-5 md:p-6 rounded-2xl border border-white/[0.07] bg-[#0f0f0f] hover:border-[#0088CC]/40 hover:bg-[#0088CC]/[0.04] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0088CC]/10 group-hover:bg-[#0088CC]/20 flex items-center justify-center text-[#0088CC] shrink-0 transition-colors duration-300">
                      <TelegramIcon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-medium text-foreground/90 group-hover:text-white transition-colors duration-300 mb-0.5">
                        Telegram
                      </p>
                      <p className="text-xs text-white/40">
                        @advizen &nbsp;·&nbsp; Fastest response
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/25 group-hover:text-white/55 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </a>

                  <a
                    href="https://wa.me/message/EKU3HEOTSK43O1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 p-5 md:p-6 rounded-2xl border border-white/[0.07] bg-[#0f0f0f] hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.04] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 transition-colors duration-300">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-medium text-foreground/90 group-hover:text-white transition-colors duration-300 mb-0.5">
                        WhatsApp
                      </p>
                      <p className="text-xs text-white/40">
                        Send a message instantly
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/25 group-hover:text-white/55 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </a>
                </div>

                {/* Hours card */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <Clock className="w-4 h-4 text-white/35 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 font-medium mb-1.5">
                      Business hours
                    </p>
                    <p className="text-sm text-white/55">
                      Mon – Fri, 9:00 – 18:00
                    </p>
                    <p className="text-xs text-white/35 mt-1">
                      UTC+5 · Tashkent, Uzbekistan
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
