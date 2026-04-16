"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";

const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Data ─────────────────────────────────────────────── */

const contactDetails = [
  { icon: Phone, label: "Telephone", value: "+998 (33) 488 48 88", href: "tel:+998334884888" },
  { icon: Mail, label: "Email", value: "info@advizenco.com", href: "mailto:info@advizenco.com" },
  { icon: MapPin, label: "Office", value: "Tashkent, Uzbekistan" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9 : 00 – 18 : 00" },
];

/* ── Animated form field ─────────────────────────────── */

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  delay = 0,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay, ease: luxuryEase }}
    >
      <label
        htmlFor={id}
        className={`block text-[10px] uppercase tracking-[0.18em] mb-3 transition-colors duration-300 ${
          focused ? "text-foreground/60" : "text-white/25"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setFilled(e.target.value.length > 0);
        }}
        className="w-full py-3 bg-transparent text-foreground/90 placeholder:text-white/12 focus:outline-none text-sm"
      />
      <div className="relative h-px bg-white/[0.07]">
        <motion.div
          className="absolute inset-y-0 left-0 h-px bg-white/30"
          animate={{
            width: focused ? "100%" : filled ? "100%" : "0%",
            opacity: focused ? 1 : filled ? 0.5 : 0,
          }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        />
      </div>
    </motion.div>
  );
}

/* ── Animated textarea ───────────────────────────────── */

function FormTextarea({
  id,
  label,
  placeholder,
  delay = 0,
}: {
  id: string;
  label: string;
  placeholder: string;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay, ease: luxuryEase }}
    >
      <label
        htmlFor={id}
        className={`block text-[10px] uppercase tracking-[0.18em] mb-3 transition-colors duration-300 ${
          focused ? "text-foreground/60" : "text-white/25"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={5}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setFilled(e.target.value.length > 0);
        }}
        className="w-full py-3 bg-transparent text-foreground/90 placeholder:text-white/12 focus:outline-none resize-none text-sm"
      />
      <div className="relative h-px bg-white/[0.07]">
        <motion.div
          className="absolute inset-y-0 left-0 h-px bg-white/30"
          animate={{
            width: focused ? "100%" : filled ? "100%" : "0%",
            opacity: focused ? 1 : filled ? 0.5 : 0,
          }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        />
      </div>
    </motion.div>
  );
}

/* ── Animated select ─────────────────────────────────── */

function FormSelect({ delay = 0 }: { delay?: number }) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay, ease: luxuryEase }}
    >
      <label
        htmlFor="service"
        className={`block text-[10px] uppercase tracking-[0.18em] mb-3 transition-colors duration-300 ${
          focused ? "text-foreground/60" : "text-white/25"
        }`}
      >
        Area of Interest
      </label>
      <div className="relative">
        <select
          id="service"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setFilled(e.target.value.length > 0);
          }}
          className="w-full py-3 bg-transparent text-foreground/90 focus:outline-none cursor-pointer appearance-none text-sm"
        >
          <option value="" className="bg-[#171717] text-white/40">Select a service</option>
          <option value="tax" className="bg-[#171717]">Tax Consulting</option>
          <option value="legal" className="bg-[#171717]">Legal Advisory</option>
          <option value="finance" className="bg-[#171717]">Finance &amp; Accounting</option>
          <option value="hr" className="bg-[#171717]">Human Resources</option>
          <option value="marketing" className="bg-[#171717]">Strategic Marketing</option>
          <option value="funding" className="bg-[#171717]">Funding &amp; Grants</option>
          <option value="other" className="bg-[#171717]">Other</option>
        </select>
        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
      </div>
      <div className="relative h-px bg-white/[0.07]">
        <motion.div
          className="absolute inset-y-0 left-0 h-px bg-white/30"
          animate={{
            width: focused ? "100%" : filled ? "100%" : "0%",
            opacity: focused ? 1 : filled ? 0.5 : 0,
          }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        />
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <AuroraBackground>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
              className="tracking-luxury text-white/35 mb-6"
            >
              Contact
            </motion.p>

            <TextReveal
              text="Begin a conversation"
              as="h1"
              mode="line"
              className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl"
              delay={0.25}
            />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: luxuryEase }}
              className="h-px w-28 bg-gradient-to-r from-white/20 to-transparent origin-left mt-9 mb-9"
            />

            <RevealLine delay={0.65}>
              <p className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed">
                Every engagement starts with understanding. Reach out and our
                team will respond within 24 hours.
              </p>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* ── Form Section ──────────────────────────── */}
      <section className="py-28 md:py-36 bg-background relative">
        {/* Subtle ambient glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/[0.025] rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* ── Left: heading + contact info ─────── */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.8, ease: luxuryEase }}
            >
              <p className="tracking-luxury text-white/25 mb-4">Inquiry</p>
              <h2 className="heading-luxury text-3xl md:text-4xl text-foreground/90 leading-[1.15] mb-5">
                Let&rsquo;s discuss{"\n"}your needs
              </h2>
              <p className="text-sm text-white/35 leading-relaxed mb-16 max-w-sm">
                Fill out the form and a member of our team will be in
                touch to explore how we can help.
              </p>

              {/* Contact details — shown once */}
              <div className="space-y-6">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: luxuryEase }}
                    >
                      <Icon className="w-4 h-4 text-white/20 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground/70">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── Right: form ──────────────────────── */}
            <div className="lg:col-span-8">
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField id="firstName" label="First Name" placeholder="John" delay={0.05} />
                  <FormField id="lastName" label="Last Name" placeholder="Doe" delay={0.1} />
                </div>

                <FormField id="email" label="Email" type="email" placeholder="john@company.com" delay={0.15} />
                <FormField id="company" label="Company" placeholder="Company name" delay={0.2} />
                <FormSelect delay={0.25} />
                <FormTextarea id="message" label="Message" placeholder="Tell us about your project or question..." delay={0.3} />

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35, ease: luxuryEase }}
                  className="pt-4"
                >
                  <MagneticButton variant="primary" type="submit">
                    <Send className="w-4 h-4" />
                    Send message
                  </MagneticButton>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
