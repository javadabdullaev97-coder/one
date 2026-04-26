"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import { Phone, Mail, MapPin } from "lucide-react";

const inter = "var(--font-inter), sans-serif";

const footerLinks = {
  Expertise: [
    { label: "Tax Consulting", href: "/expertise/tax" },
    { label: "Legal Advisory", href: "/expertise/legal" },
    { label: "Accounting", href: "/expertise/finance" },
    { label: "HR Services", href: "/expertise/hr" },
    { label: "Funding", href: "/expertise/funding" },
  ],
  Operations: [
    { label: "Corporate Services", href: "/expertise/corporate" },
    { label: "Entity Management", href: "/expertise/entity-management" },
  ],
  Firm: [
    { label: "Store", href: "/store" },
    { label: "Insights", href: "/library" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Sale", href: "/terms-of-sale" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]" style={{ fontFamily: inter }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-20 flex flex-col md:flex-row gap-12 md:gap-0">

          {/* Brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={itemVariants}
            className="md:w-[260px] shrink-0 md:mr-16"
          >
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Advizen" width={40} height={32} />
              <span className="text-lg font-light tracking-[0.25em] uppercase text-foreground">
                ADVIZEN
              </span>
            </div>
            <p className="mt-6 text-sm text-white/50 leading-relaxed">
              Premier business advisory in Uzbekistan. Integrated consulting
              across tax, legal, finance, and HR — a single point of
              contact for your entire operation.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+998334884888"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer w-fit"
              >
                <Phone className="w-4 h-4 text-primary" />
                +998 (33) 488 48 88
              </a>
              <a
                href="mailto:info@advizenco.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer w-fit"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@advizenco.com
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-dark w-fit">
                <MapPin className="w-4 h-4 text-primary" />
                Tashkent, Uzbekistan
              </p>
            </div>
          </motion.div>

          {/* Link columns — equal gaps, last column flush to right edge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex-1 flex flex-col md:flex-row md:justify-between gap-10 md:gap-0"
          >
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div key={title} variants={itemVariants}>
                <h3 className="text-[13px] font-bold tracking-[0.18em] uppercase text-white/60 mb-6">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/50 hover:text-foreground transition-colors cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Icons Bar */}
        <div className="py-8 border-t border-white/[0.06]">
          <SocialIcons />
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.06]">
          <p className="text-xs text-muted-dark tracking-wide">
            &copy; {new Date().getFullYear()} Advizen Consulting. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
