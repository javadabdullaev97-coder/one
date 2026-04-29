"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+998 (33) 488 48 88", href: "tel:+998334884888" },
  { icon: Mail, label: "Email", value: "info@advizenco.com", href: "mailto:info@advizenco.com" },
  { icon: MapPin, label: "Office", value: "Tashkent, Uzbekistan", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9 am – 6 pm", href: undefined },
];

const inputClass =
  "w-full px-4 py-3 bg-white/[0.02] border border-white/[0.08] rounded-lg text-foreground placeholder:text-white/25 focus:outline-none focus:border-white/25 focus:bg-white/[0.04] transition-all duration-200";
const labelClass = "block text-xs uppercase tracking-widest text-white/40 mb-2.5";

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <AuroraBackground>
        <section className="relative pt-24 pb-10 md:pt-28 md:pb-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="tracking-luxury text-white/50 mb-3"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-luxury text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] max-w-3xl mb-4"
            >
              Let&apos;s talk about your business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/50 text-base max-w-xl leading-relaxed"
            >
              Reach out for a confidential consultation. We typically respond within one business day.
            </motion.p>
          </div>
        </section>
      </AuroraBackground>

      <section className="py-20 md:py-28 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-start">

            <AnimatedSection>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First Name</label>
                    <input id="firstName" type="text" placeholder="John" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>Last Name</label>
                    <input id="lastName" type="text" placeholder="Doe" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" type="email" placeholder="john@company.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input id="company" type="text" placeholder="Company name" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>Area of Interest</label>
                  <div className="relative">
                    <select
                      id="service"
                      className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                      style={{ WebkitAppearance: "none", paddingLeft: "16px" }}
                    >
                      <option value="" className="bg-surface">Select a service</option>
                      <option value="tax" className="bg-surface">Tax Consulting</option>
                      <option value="legal" className="bg-surface">Legal Advisory</option>
                      <option value="finance" className="bg-surface">Accounting</option>
                      <option value="hr" className="bg-surface">Human Resources</option>
                      <option value="funding" className="bg-surface">Funding &amp; Grants</option>
                      <option value="other" className="bg-surface">Other</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={agreed}
                    onClick={() => setAgreed((v) => !v)}
                    className={`mt-0.5 w-4 h-4 shrink-0 rounded border transition-all duration-200 cursor-pointer ${
                      agreed ? "bg-primary border-primary" : "border-white/[0.18] bg-transparent hover:border-white/35"
                    }`}
                  />
                  <p
                    className="text-[13px] text-white/45 leading-relaxed cursor-pointer select-none"
                    onClick={() => setAgreed((v) => !v)}
                  >
                    I agree to the{" "}
                    <Link href="/privacy" className="underline underline-offset-2 hover:text-white/70 transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and consent to Advizen Consulting processing my data to respond to this enquiry.
                  </p>
                </div>

                <MagneticButton
                  variant="primary"
                  type="submit"
                  disabled={!agreed}
                  className={!agreed ? "opacity-40 cursor-not-allowed" : ""}
                >
                  Send message
                  <Send className="w-4 h-4" />
                </MagneticButton>
              </form>
            </AnimatedSection>

            <div className="lg:pt-2">
              <StaggerContainer className="space-y-10">

                <StaggerItem>
                  <h2 className="heading-luxury text-xl text-foreground mb-6">Get in touch</h2>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary-light/70" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-0.5">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm text-white/65 hover:text-foreground transition-colors duration-200">
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm text-white/65">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="h-px bg-white/[0.06]" />
                </StaggerItem>

                <StaggerItem>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-white/35 mb-5">Practice Areas</h3>
                  <div className="space-y-2">
                    {["Tax Consulting", "Legal Advisory", "Accounting & Finance", "Human Resources", "Funding & Grants", "Corporate Services"].map((area) => (
                      <div key={area} className="flex items-center gap-3 text-sm text-white/50">
                        <ArrowRight className="w-3 h-3 text-primary-light/50 shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="h-px bg-white/[0.06]" />
                </StaggerItem>

                <StaggerItem>
                  <p className="text-sm text-white/35 leading-relaxed">
                    All enquiries are treated with strict confidentiality. A consultant will be in touch within one business day.
                  </p>
                </StaggerItem>

              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
