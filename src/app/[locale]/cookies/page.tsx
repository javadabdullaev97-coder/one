"use client";

import { motion } from "framer-motion";

const sections = [
  {
    num: "1",
    title: "What Are Cookies",
    body: `Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website owners.

Cookies do not contain personally identifiable information on their own, but they may be linked to personal information that you have provided to us or that we have collected about you.`,
  },
  {
    num: "2",
    title: "How We Use Cookies",
    body: `Advizen Consulting uses cookies on advizenco.com for the following purposes:

— To ensure the website functions correctly and securely;
— To remember your preferences and settings between visits;
— To understand how visitors use our website (pages visited, time spent, traffic sources);
— To improve the performance and content of our website;
— To enable certain features such as contact forms and inquiry submissions.`,
  },
  {
    num: "3",
    title: "Types of Cookies We Use",
    body: `Strictly Necessary Cookies
These cookies are essential for the website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies.

Performance & Analytics Cookies
These cookies collect anonymous information about how visitors use our website — for example, which pages are visited most often. This data helps us improve the website. All information collected is aggregated and anonymous.

Functional Cookies
These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, more personalised features.

Preference Cookies
These cookies store your settings and preferences so that your next visit is more convenient and personalised.`,
  },
  {
    num: "4",
    title: "Third-Party Cookies",
    body: `We may use third-party services that set their own cookies on your device. These include:

— Analytics providers (e.g. Google Analytics) to help us understand website traffic and usage patterns;
— Embedded content providers (e.g. maps, videos) that may set cookies when you interact with their content.

We do not control these third-party cookies. Please refer to the respective third-party privacy and cookie policies for more information.`,
  },
  {
    num: "5",
    title: "Cookie Duration",
    body: `Session Cookies
These are temporary cookies that are deleted from your device when you close your browser. They are used to maintain your session while you browse the website.

Persistent Cookies
These cookies remain on your device for a set period of time (as defined in the cookie) or until you delete them manually. They are activated each time you visit the website that created them.`,
  },
  {
    num: "6",
    title: "Managing Cookies",
    body: `You have the right to decide whether to accept or refuse cookies. You can manage your cookie preferences in the following ways:

Browser Settings
Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that if you disable cookies, some features of our website may not function correctly.

Opt-Out Tools
For analytics cookies, you may opt out of tracking by using the tools provided by the relevant third-party services (e.g. Google Analytics Opt-out Browser Add-on).

Deleting Cookies
You can delete cookies already stored on your device at any time through your browser settings.`,
  },
  {
    num: "7",
    title: "Your Consent",
    body: `By continuing to use our website, you consent to the use of cookies in accordance with this Cookie Policy.

Where required by applicable law, we will ask for your explicit consent before placing non-essential cookies on your device. You may withdraw your consent at any time by adjusting your browser settings or by contacting us directly.`,
  },
  {
    num: "8",
    title: "Changes to This Policy",
    body: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the date at the bottom of this page.

We encourage you to review this policy periodically to stay informed about how we use cookies.`,
  },
  {
    num: "9",
    title: "Contact Us",
    body: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Advizen Consulting
Legal address: Tashkent, Republic of Uzbekistan
E-mail: info@advizenco.com
Phone: +998 33 488 4888
Website: advizenco.com`,
  },
];

export default function CookiePolicyPage() {
  return (
    <motion.main
      className="bg-black min-h-screen"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="border-b border-white/[0.06] bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-dark mb-4">
            Advizen Consulting · Legal
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Cookie Policy
          </h1>
          <p className="text-sm text-white/40">
            How we use cookies and similar technologies on advizenco.com
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.num} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8">
              <div className="text-[11px] tracking-[0.2em] uppercase text-primary font-medium pt-1">
                {section.num.padStart(2, "0")}
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground mb-4 tracking-wide">
                  {section.title}
                </h2>
                <div className="text-sm text-white/55 leading-relaxed whitespace-pre-line">
                  {section.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-xs text-white/25 leading-relaxed">
            This Cookie Policy applies to the website advizenco.com operated by Advizen Consulting. Last updated: April 2026.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
