import Link from "next/link";
import {
  Scale,
  Calculator,
  Users,
  TrendingUp,
  Megaphone,
  FileText,
  ArrowRight,
  CheckCircle2,
  Building2,
  Clock,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Monthly Consultation Hours", icon: Briefcase },
  { value: "50+", label: "Satisfied Clients", icon: Users },
  { value: "15+", label: "Industries Served", icon: Building2 },
  { value: "70+", label: "Completed Projects", icon: Award },
  { value: "18+", label: "Training Sessions", icon: GraduationCap },
];

const services = [
  {
    icon: Scale,
    title: "Legal Advisory",
    description:
      "Comprehensive legal support for business registration, compliance, contracts, and regulatory matters in Uzbekistan.",
  },
  {
    icon: Calculator,
    title: "Tax Consulting",
    description:
      "Strategic tax planning, optimization, and compliance services to minimize your tax burden while staying fully compliant.",
  },
  {
    icon: TrendingUp,
    title: "Finance & Accounting",
    description:
      "Full-cycle accounting, financial reporting, auditing, and advisory services tailored to your business needs.",
  },
  {
    icon: Users,
    title: "HR Services",
    description:
      "End-to-end HR solutions including recruitment, payroll, compliance, outsourcing, and employer of record services.",
  },
  {
    icon: Megaphone,
    title: "Marketing & SMM",
    description:
      "Digital marketing strategy, social media management, and brand development to grow your presence in Central Asia.",
  },
  {
    icon: FileText,
    title: "Funding & Grants",
    description:
      "Expert guidance on securing funding, grants, and investment opportunities for your business growth.",
  },
];

const clients = [
  { name: "Residential Complex Developer", industry: "Real Estate" },
  { name: "Industrial Construction Company", industry: "Construction" },
  { name: "Building Materials Manufacturer", industry: "Manufacturing" },
  { name: "Interior & Facade Design Studio", industry: "Design" },
  { name: "International Freelance Platform", industry: "Technology" },
  { name: "Furniture Manufacturer", industry: "Manufacturing" },
  { name: "Dairy Products Producer", industry: "FMCG" },
  { name: "Media & Advertising Agency", industry: "Media" },
];

const whyUs = [
  "One-stop shop for all business services",
  "8+ years of experience in the Uzbek market",
  "Single point of contact for seamless support",
  "Experts across legal, tax, HR, finance & marketing",
  "Deep understanding of Central Asian markets",
  "Proven track record with 50+ satisfied clients",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0aDEydjEySDM2ek0wIDE0aDEydjEySDCem0wIDI0aDEydjEySDCem0zNiAwaDEydjEySDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        {/* Accent glow */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary-light/20 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 mb-8 border border-white/10">
                <Globe className="w-4 h-4 text-accent" />
                Trusted Business Partner in Central Asia
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Your One-Stop
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                  Business Consulting
                </span>
                <br />
                Partner
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                Expert tax, legal, finance, accounting, HR, and marketing consulting
                under one roof. Focus on growing your business while we handle
                everything else.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Comprehensive Business Services
              </h2>
              <p className="text-muted text-lg">
                A full spectrum of integrated services designed to empower businesses
                in Uzbekistan&apos;s dynamic market.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent mt-4 transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Why Advizen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                All Your Business Needs, One Expert Team
              </h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                We bring all our specialized services together, offering one point
                of contact and seamless support. Your go-to team for everything your
                business needs in Central Asia.
              </p>
              <div className="space-y-4">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors mt-10 shadow-lg shadow-primary/20"
              >
                About Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Save Time &amp; Resources
                  </h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Instead of managing multiple vendors and consultants, work with
                    one integrated team that understands your entire business.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-accent mb-1">70+</div>
                      <div className="text-sm text-white/60">Projects Delivered</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-accent mb-1">15+</div>
                      <div className="text-sm text-white/60">Industries Covered</div>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-3xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Trusted by Leading Companies
              </h2>
              <p className="text-muted text-lg">
                We serve businesses across diverse industries throughout Uzbekistan
                and Central Asia.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <AnimatedSection key={client.name} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all text-center group">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                    <Building2 className="w-6 h-6 text-primary/40 group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {client.name}
                  </h4>
                  <span className="text-xs text-muted">{client.industry}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-[128px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business in Uzbekistan?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Let us handle the complexities of tax, legal, HR, and more, so you can
              focus on what matters most - growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all shadow-lg shadow-accent/25"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+998334884888"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
              >
                <Phone className="w-4 h-4" />
                +998 (33) 488 48 88
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
