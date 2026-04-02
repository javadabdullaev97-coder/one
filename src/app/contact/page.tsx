"use client";

import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+998 (33) 488 48 88",
    href: "tel:+998334884888",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@advizenco.com",
    href: "mailto:info@advizenco.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Tashkent, Uzbekistan",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri, 9:00 - 18:00",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 max-w-3xl leading-tight">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              Have a question or ready to get started? We&apos;d love to hear from
              you. Reach out and our team will respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-12 z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Form + Map */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl border border-border p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible.
                </p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-section-bg border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-section-bg border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-section-bg border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-section-bg border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-3 bg-section-bg border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors">
                      <option value="">Select a service</option>
                      <option value="legal">Legal Advisory</option>
                      <option value="tax">Tax Consulting</option>
                      <option value="finance">Finance & Accounting</option>
                      <option value="hr">HR Services</option>
                      <option value="marketing">Marketing & SMM</option>
                      <option value="funding">Funding & Grants</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-section-bg border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info Side */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                {/* Why Contact Us */}
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-10 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Why Work With Advizen?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Free initial consultation to understand your needs",
                      "Response within 24 hours guaranteed",
                      "Single point of contact for all services",
                      "8+ years of experience in the Uzbek market",
                      "Flexible engagement models",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span className="text-sm text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-white rounded-3xl border border-border overflow-hidden">
                  <div className="bg-section-bg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-primary/30 mx-auto mb-3" />
                      <p className="text-sm font-semibold text-foreground">
                        Tashkent, Uzbekistan
                      </p>
                      <p className="text-xs text-muted mt-1">Central Asia</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-1">Our Office</h3>
                    <p className="text-sm text-muted">
                      Located in the heart of Tashkent, serving businesses across
                      Uzbekistan and Central Asia.
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
