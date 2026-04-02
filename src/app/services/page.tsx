import {
  Scale,
  Calculator,
  TrendingUp,
  Users,
  Megaphone,
  FileText,
  Building,
  ShieldCheck,
  BarChart3,
  PenTool,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Scale,
    title: "Legal Advisory",
    description:
      "Navigate Uzbekistan's legal landscape with confidence. From company registration and contract drafting to regulatory compliance and dispute resolution.",
    features: [
      "Business registration & licensing",
      "Contract drafting & review",
      "Corporate governance",
      "Regulatory compliance",
      "Dispute resolution",
      "Intellectual property protection",
    ],
  },
  {
    icon: Calculator,
    title: "Tax Consulting",
    description:
      "Optimize your tax strategy while maintaining full compliance with Uzbek tax regulations. We help minimize your burden and maximize your returns.",
    features: [
      "Tax planning & optimization",
      "Tax compliance & filing",
      "Transfer pricing",
      "Tax audit support",
      "International tax advisory",
      "VAT consulting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Finance & Accounting",
    description:
      "Full-cycle financial management from bookkeeping to strategic advisory. We ensure your financial operations run smoothly and transparently.",
    features: [
      "Bookkeeping & accounting",
      "Financial reporting (IFRS/NAS)",
      "Audit preparation",
      "Budgeting & forecasting",
      "Cash flow management",
      "Financial advisory",
    ],
  },
  {
    icon: Users,
    title: "HR Services",
    description:
      "End-to-end human resources solutions designed to optimize your workforce, ensure compliance, and drive organizational success.",
    features: [
      "Recruitment & staffing",
      "Payroll management",
      "HR outsourcing",
      "Employer of Record (EOR)",
      "HR audits & compliance",
      "Training & development",
    ],
    link: "/hr-services",
  },
  {
    icon: Megaphone,
    title: "Marketing & SMM",
    description:
      "Build your brand and grow your digital presence in Central Asia with strategic marketing and social media management.",
    features: [
      "Digital marketing strategy",
      "Social media management",
      "Content creation",
      "Brand development",
      "SEO & SEM",
      "Market research",
    ],
  },
  {
    icon: FileText,
    title: "Funding & Grants",
    description:
      "Access the right funding for your business. We guide you through grant applications, investment opportunities, and financial planning.",
    features: [
      "Grant applications",
      "Investment readiness",
      "Business plan development",
      "Donor & investor matching",
      "Financial modeling",
      "Due diligence support",
    ],
  },
];

const process = [
  {
    step: "01",
    icon: PenTool,
    title: "Discovery",
    description: "We learn about your business, challenges, and goals through an in-depth consultation.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Strategy",
    description: "Our team develops a customized plan tailored to your specific needs and market conditions.",
  },
  {
    step: "03",
    icon: Building,
    title: "Execution",
    description: "We implement solutions with precision, keeping you informed at every stage.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Ongoing Support",
    description: "Continuous monitoring, optimization, and support to ensure long-term success.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] overflow-hidden">
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 max-w-3xl leading-tight">
              Integrated Business Solutions
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              A comprehensive range of services designed to empower businesses in
              Uzbekistan&apos;s dynamic market. Everything you need, under one roof.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={0}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-border p-8 md:p-12 hover:shadow-xl transition-shadow ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {service.link && (
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                      >
                        View HR Services in detail <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-section-bg rounded-2xl p-8">
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        What&apos;s Included
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Our Process
              </h2>
              <p className="text-muted text-lg">
                A structured approach to delivering exceptional results for your
                business.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all h-full relative">
                  <div className="text-5xl font-black text-primary/5 absolute top-4 right-6">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Every business is unique. Let&apos;s discuss how we can tailor our
              services to fit your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all shadow-lg shadow-accent/25"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
