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
  "Operations": [
    { label: "Corporate Services", href: "/expertise/corporate" },
    { label: "Entity Management", href: "/expertise/entity-management" },
  ],
  Firm: [
    { label: "Store", href: "/store" },
    { label: "Insights", href: "/library" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]" style={{ fontFamily: inter }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="py-20 grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-10"
        >
          {/* Brand */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Advizen" width={40} height={32} />
              <span className="text-lg font-light tracking-[0.25em] uppercase text-foreground">
                ADVIZEN
              </span>
            </div>
            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-sm">
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

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <h3 className="text-[13px] font-bold tracking-[0.18em] uppercase text-white/60 mb-6">{title}</h3>
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

        {/* Social Icons Bar */}
        <div className="py-8 border-t border-white/[0.06]">
          <SocialIcons />
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-dark tracking-wide">
            &copy; {new Date().getFullYear()} Advizen Consulting. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-muted-dark hover:text-muted transition-colors tracking-wide cursor-pointer">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-dark hover:text-muted transition-colors tracking-wide cursor-pointer">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
