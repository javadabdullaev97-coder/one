import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Shield,
  Lightbulb,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in every engagement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We bring modern, creative solutions to complex business challenges.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships and treat your business as our own.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Our team of specialists brings deep knowledge across every business domain.",
  },
  {
    icon: Globe,
    title: "Local Insight",
    description: "Deep understanding of Uzbekistan's regulatory and business landscape.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Every decision we make is guided by what's best for our clients.",
  },
];

const timeline = [
  { year: "2016", event: "Founded in Tashkent with a vision to simplify business consulting" },
  { year: "2018", event: "Expanded services to include full HR and marketing solutions" },
  { year: "2020", event: "Reached 30+ active clients across multiple industries" },
  { year: "2022", event: "Launched Employer of Record (EOR) services for foreign companies" },
  { year: "2024", event: "Surpassed 70+ completed projects and 50+ satisfied clients" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              About Advizen
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 max-w-3xl leading-tight">
              Your Go-To Team for Business in Central Asia
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              We bring all our specialized services together, offering one point of
              contact and seamless support for everything your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white border border-border rounded-3xl p-10 h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted leading-relaxed">
                  To be the most trusted one-stop business consulting partner in
                  Uzbekistan, empowering companies with integrated services that
                  simplify operations, ensure compliance, and drive sustainable
                  growth across Central Asia.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white border border-border rounded-3xl p-10 h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted leading-relaxed">
                  To redefine business consulting in Central Asia by delivering
                  world-class, integrated solutions that help businesses of all sizes
                  thrive in Uzbekistan&apos;s dynamic and rapidly growing economy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 md:py-32 bg-section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Growing with Uzbekistan
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-border flex-1 hover:shadow-lg transition-shadow">
                    <p className="text-foreground/80">{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Our Core Values
              </h2>
              <p className="text-muted text-lg">
                The principles that guide every interaction and decision at Advizen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0c1f36] via-[#1e3a5f] to-[#0c1f36] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re entering the Uzbek market or scaling your existing
              operations, we&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all shadow-lg shadow-accent/25"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
