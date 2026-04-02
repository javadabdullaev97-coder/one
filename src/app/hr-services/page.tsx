import {
  Users,
  UserPlus,
  Wallet,
  ClipboardCheck,
  Building2,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const hrServices = [
  {
    icon: UserPlus,
    title: "Recruitment & Staffing",
    description:
      "Find the right talent for your organization with our comprehensive recruitment solutions, from executive search to volume hiring.",
    features: [
      "Executive search",
      "Volume recruitment",
      "Candidate screening",
      "Interview coordination",
      "Background checks",
      "Onboarding support",
    ],
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    description:
      "Accurate, timely payroll processing that ensures compliance with Uzbek labor laws and tax regulations.",
    features: [
      "Monthly payroll processing",
      "Tax withholding & reporting",
      "Social contributions",
      "Payslip generation",
      "Year-end reporting",
      "Payroll audits",
    ],
  },
  {
    icon: Users,
    title: "HR Outsourcing",
    description:
      "Outsource your entire HR function or specific processes to our expert team, freeing you to focus on your core business.",
    features: [
      "Full HR function management",
      "Employee administration",
      "Benefits management",
      "Policy development",
      "Employee relations",
      "HR technology setup",
    ],
  },
  {
    icon: Globe,
    title: "Employer of Record (EOR)",
    description:
      "Establish your presence in Uzbekistan without a local legal entity. We act as the legal employer, handling all local employment liabilities.",
    features: [
      "Legal employment setup",
      "Compliant contracts",
      "Payroll & benefits",
      "Tax compliance",
      "Work permit support",
      "Employee management",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "HR Audits & Compliance",
    description:
      "Ensure your HR practices meet local regulations with thorough audits and ongoing compliance monitoring.",
    features: [
      "HR policy review",
      "Labor law compliance",
      "Documentation audit",
      "Risk assessment",
      "Remediation plans",
      "Ongoing monitoring",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Invest in your team with customized training programs designed to build skills and drive performance.",
    features: [
      "Skills assessment",
      "Custom training programs",
      "Leadership development",
      "Team workshops",
      "Performance management",
      "Career path planning",
    ],
  },
];

export default function HRServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/services"
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                Services
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-sm text-accent">HR Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
              HR Services &amp; Solutions
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              A full spectrum of HR services designed to optimize your workforce,
              ensure compliance, and drive organizational success in Uzbekistan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* EOR Highlight */}
      <section className="relative -mt-12 z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm mb-4">
                  <Building2 className="w-4 h-4 text-accent" />
                  Featured Service
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Employer of Record (EOR)
                </h2>
                <p className="text-white/70 leading-relaxed">
                  For foreign companies establishing a presence in Uzbekistan without
                  a local legal entity. We handle all local employment liabilities,
                  so you can hire talent in Uzbekistan compliantly and quickly.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Setup Time", value: "2-4 weeks" },
                  { label: "Compliance", value: "100%" },
                  { label: "Countries Served", value: "15+" },
                  { label: "Active Contracts", value: "50+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-xl p-5 backdrop-blur-sm text-center"
                  >
                    <div className="text-2xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* All HR Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Full HR Suite
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Everything HR, Covered
              </h2>
              <p className="text-muted text-lg">
                From hiring to compliance, we provide comprehensive HR solutions
                tailored to the Uzbekistan market.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-border p-8 hover:shadow-xl hover:border-accent/30 transition-all h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="text-xs text-foreground/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-white rounded-3xl border border-border p-12 shadow-xl">
              <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need HR Support in Uzbekistan?
              </h2>
              <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
                Whether you&apos;re hiring your first employee or managing a full
                team, we have the expertise to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
              >
                Talk to an HR Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
