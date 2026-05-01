"use client";

import { motion } from "framer-motion";

const sections = [
  {
    num: "1",
    title: "Acceptance of Terms",
    body: `By accessing or using this website (advizenco.com, hereinafter the \"Website\"), you agree to be legally bound by these Terms of Use and any additional terms indicated on the Website. If you do NOT agree with all of these Terms of Use, you must NOT access or use the Website.`,
  },
  {
    num: "2",
    title: "Amendments",
    body: `Advizen Consulting reserves the right to amend these Terms of Use unilaterally at any time. Amended Terms of Use take effect from the moment they are posted on the Website. By continuing to access or use the Website after such posting, you agree to the amended terms. We recommend reviewing these Terms regularly.`,
  },
  {
    num: "3",
    title: "Content and Third-Party Links",
    body: `Any link on the Website to a third-party website does not constitute an endorsement of that website. We make no representations or warranties as to the accuracy, timeliness, or suitability of the content of any site linked from the Website.

Advizen Consulting shall under no circumstances be liable for the content of any third-party website accessible from the Website via hyperlink, regardless of whether such hyperlink was placed by the Website itself or by a third party.`,
  },
  {
    num: "4",
    title: "Publications and Insights",
    body: `Publications, articles, and insights posted on the Website do not constitute legal advice in respect of any specific facts or circumstances. All published materials are intended for general informational purposes only.

Citing these materials or referencing them in any other publications or in the course of legal proceedings without the prior written consent of Advizen Consulting is not permitted. We may grant or withhold such consent at our sole discretion.

The receipt of any publications distributed from this Website does not create a client relationship. Views expressed in such publications represent the personal opinion of the author and do not necessarily reflect the position of Advizen Consulting.`,
  },
  {
    num: "5",
    title: "Intellectual Property",
    body: `All copyright and other proprietary rights in the content provided by Advizen Consulting on this Website, including but not limited to text, graphics, logos, and the compilation, arrangement, and organisation of the Website, belong to Advizen Consulting and/or its employees or licensors.

All rights in content not expressly granted under these Terms of Use are reserved. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from this Website without our prior written consent.`,
  },
  {
    num: "6",
    title: "No Confidentiality",
    body: `This Website is publicly accessible. Any information you submit through this Website (other than personal data handled in accordance with our Privacy Policy) is not considered confidential. By submitting information via this Website, you grant Advizen Consulting the right to use such information for any lawful purpose consistent with our Privacy Policy.`,
  },
  {
    num: "7",
    title: "Disclaimer of Warranties",
    body: `The Website and all content are provided on an \"as is\" and \"as available\" basis without warranty of any kind, express or implied. Advizen Consulting does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.

Nothing on this Website constitutes professional legal, tax, financial, or business advice. You should consult a qualified professional before taking any action based on information obtained from this Website.`,
  },
  {
    num: "8",
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, Advizen Consulting shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your access to or use of, or inability to use, the Website or its content, even if Advizen Consulting has been advised of the possibility of such damages.`,
  },
  {
    num: "9",
    title: "Indemnification",
    body: `You agree to indemnify and hold harmless Advizen Consulting, its employees, legal representatives, successors, and assigns from and against any liabilities, costs, and expenses (including reasonable legal fees and court costs) arising from your breach of these Terms of Use or your use of the Website.`,
  },
  {
    num: "10",
    title: "Access Restrictions",
    body: `Advizen Consulting reserves the right to restrict, deny, or immediately terminate any person's access to the Website or any part thereof at any time, at its sole discretion, without reason and without prior notice.`,
  },
  {
    num: "11",
    title: "Website Availability",
    body: `Advizen Consulting has the sole right to modify, supplement, or close the Website or any part of it at any time, for any reason, without notice or the consent of any party. We will not be liable for any failure to preserve or any deletion of content submitted to the Website.`,
  },
  {
    num: "12",
    title: "Governing Law and Dispute Resolution",
    body: `These Terms of Use are governed by and construed in accordance with the legislation of the Republic of Uzbekistan. You agree to the non-exclusive jurisdiction of the courts of Tashkent, Republic of Uzbekistan, in respect of any disputes, claims, or actions arising out of or in connection with these Terms of Use or your use of this Website, including any disputes as to the existence or validity of these Terms of Use.`,
  },
  {
    num: "13",
    title: "Severability",
    body: `If any provision of these Terms of Use is held to be unlawful or unenforceable, that invalid or unenforceable provision will be replaced by a valid and enforceable provision that most closely reflects the intent of the original provision, and the remaining provisions will continue in full force and effect.`,
  },
  {
    num: "14",
    title: "Headings",
    body: `The section headings in these Terms of Use are included for convenience of reference only, do not form part of these Terms, and shall not affect their meaning or interpretation.`,
  },
];

export default function TermsOfUsePage() {
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
            Terms of Use
          </h1>
          <p className="text-sm text-white/40">
            Terms and conditions governing the use of advizenco.com
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-12 text-sm text-white/55 leading-relaxed">
          This website (advizenco.com, hereinafter the “Website”) is operated by Advizen Consulting LLC, located at Tashkent, Republic of Uzbekistan (hereinafter “Advizen Consulting”). Access to and use of the Website is governed by the Terms of Use set out below.
        </div>

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
            These Terms of Use are governed by the legislation of the Republic of Uzbekistan. Last updated: April 2026.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
