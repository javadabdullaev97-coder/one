"use client";

import { motion } from "framer-motion";

const sections = [
  {
    num: "1",
    title: "No Legal Advice",
    body: `The materials and information published on this website (advizenco.com, hereinafter the \"Website\") are intended for general informational purposes only. They do not constitute and must not be construed as legal, tax, financial, or business advice from Advizen Consulting.

The content of this Website may not reflect the most recent changes in legislation or regulations. We do not recommend taking any action based solely on information published on this Website without first obtaining professional advice tailored to your specific circumstances.`,
  },
  {
    num: "2",
    title: "No Client Relationship",
    body: `The publication of information on this Website is not intended to create, and does not create, a client relationship between Advizen Consulting and any reader of that information.

The views expressed in any articles, insights, or publications on this Website represent the personal opinion of the author and do not necessarily reflect the position of Advizen Consulting as a firm.`,
  },
  {
    num: "3",
    title: "Unsolicited Confidential Information",
    body: `Any confidential or proprietary information you submit to us through this Website without prior arrangement with Advizen Consulting is submitted at your own discretion and at your own risk.

Submitting information to us through this Website does not create any obligation on our part to treat such information as confidential, unless a separate written confidentiality agreement has been concluded between you and Advizen Consulting.`,
  },
  {
    num: "4",
    title: "Disclaimer of Warranties",
    body: `All content on this Website — including but not limited to text, images, graphics, links, and other materials — is provided on an \"as is\" and \"as available\" basis. Advizen Consulting and its employees disclaim all representations and warranties, whether express or implied, including warranties as to the accuracy or completeness of the information and the absence of infringement of third-party intellectual property rights.`,
  },
  {
    num: "5",
    title: "No Guarantee of Website Performance",
    body: `Advizen Consulting and its employees make no guarantee and give no warranty that:

— The Website will meet your requirements;
— The Website will operate without interruption, quickly, securely, or free of errors;
— Any results obtained through the use of the Website (including any information or materials on it) will be accurate, complete, reliable, or otherwise meet your needs.

This Website may contain hyperlinks to third-party websites. Such links are not controlled by Advizen Consulting, and we accept no responsibility for the content of any linked website or its data protection practices. The presence of a hyperlink on this Website does not imply endorsement, approval, or recommendation of that website by Advizen Consulting.`,
  },
  {
    num: "6",
    title: "Technical Disclaimer",
    body: `This Website is publicly accessible. Advizen Consulting and its employees accept no liability for interruptions or outages in the internet, network, or web hosting services.

We do not warrant that this Website, its content, or any electronic communications sent by Advizen Consulting are free from viruses or other harmful components. You are responsible for implementing appropriate safeguards before accessing or downloading any content from this Website.`,
  },
  {
    num: "7",
    title: "Downloads and Data Loss",
    body: `Downloading any materials from this Website, or obtaining them through any other use of the Website, is done at your own discretion and at your own risk.

You are solely responsible for any damage to your computer system or loss of data that may result from downloading any such materials. Advizen Consulting accepts no liability for any such damage or loss.`,
  },
  {
    num: "8",
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, Advizen Consulting and its employees shall not under any circumstances be liable for any direct, indirect, incidental, consequential, punitive, special, or other damages arising out of or in connection with access to, or use of, or inability to access or use, this Website or its content — even if Advizen Consulting has been advised of the possibility of such damage.`,
  },
  {
    num: "9",
    title: "Headings",
    body: `The section headings in this Disclaimer are included for convenience of reference only, do not form part of the substantive terms, and shall not affect the meaning or interpretation of any provision herein.`,
  },
];

export default function DisclaimerPage() {
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
            Disclaimer
          </h1>
          <p className="text-sm text-white/40">
            Important limitations and disclaimers regarding use of this website
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
            This Disclaimer applies to the website advizenco.com operated by Advizen Consulting. Last updated: April 2026.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
