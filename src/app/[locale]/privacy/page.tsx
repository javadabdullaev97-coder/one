"use client";

import { motion } from "framer-motion";

const sections = [
  {
    num: "1",
    title: "Who We Are",
    body: `Advizen Consulting LLC (hereinafter \"we\", \"us\", or \"the Company\") operates the website advizenco.com. We are the owner and operator of the personal data database used in connection with this website and our business activities.

We process personal data in accordance with the Law of the Republic of Uzbekistan No. ZRU-547 \"On Personal Data\" dated 2 July 2019 (effective 1 October 2019) and other applicable legislation of the Republic of Uzbekistan.

Contact details:
Advizen Consulting
Legal address: Tashkent, Republic of Uzbekistan
E-mail: info@advizenco.com
Phone: +998 33 488 4888`,
  },
  {
    num: "2",
    title: "Personal Data We Collect",
    body: `We may collect and process the following categories of personal data:

— Identification data: full name, date of birth;
— Contact data: email address, phone number, postal address;
— Business data: company name, job title, industry;
— Communication data: the content of messages, inquiries, and correspondence you send us;
— Website usage data: IP address, browser type, pages visited, time and date of visits, referring URLs (collected via cookies and analytics tools — see our Cookie Policy);
— Transaction data: information related to purchases made through our Store, including order details and payment confirmation records (we do not store payment card details).

We collect only the personal data that is necessary and sufficient for the purposes described in this Policy (Article 10 of the Law).`,
  },
  {
    num: "3",
    title: "Legal Basis for Processing",
    body: `We process your personal data on the following legal grounds in accordance with Article 18 of the Law:

— Your consent: when you submit an inquiry, register, or make a purchase, you provide consent to the processing of your personal data for the stated purpose;
— Performance of a contract: processing is necessary to fulfil a contract to which you are a party, or to take steps at your request before entering into a contract (e.g. processing a Store order);
— Legal obligation: processing is necessary to comply with our obligations under the legislation of the Republic of Uzbekistan;
— Legitimate interests: processing is necessary for our legitimate business interests, provided these do not override your rights and interests (e.g. website analytics, service improvement).`,
  },
  {
    num: "4",
    title: "Purposes of Processing",
    body: `We use your personal data for the following purposes (Article 12, 19 of the Law):

— To respond to your inquiries and provide the information or services you have requested;
— To process and fulfil orders placed through our Store;
— To issue receipts and fulfil our legal obligations under consumer protection legislation;
— To communicate with you regarding your orders, requests, or our services;
— To improve the performance and content of our website;
— To comply with applicable legal requirements and regulatory obligations.

We do not use your personal data for purposes other than those stated at the time of collection. If we intend to change the purpose of processing, we will obtain your separate consent (Article 19 of the Law).`,
  },
  {
    num: "5",
    title: "Storage and Retention",
    body: `Your personal data is stored in a form that allows identification only to the extent required by the purposes for which it was collected (Article 10 of the Law).

We retain personal data for as long as necessary to fulfil the purposes described in this Policy, or for as long as required by applicable law. Specifically:

— Inquiry and correspondence data: retained for up to 3 years from the date of last contact;
— Order and transaction data: retained for 5 years in accordance with accounting and tax legislation;
— Website analytics data: retained in aggregated, anonymised form.

Upon expiry of the retention period, or upon achievement of the processing purpose, personal data is destroyed in a manner that makes recovery impossible (Article 17 of the Law).`,
  },
  {
    num: "6",
    title: "Disclosure to Third Parties",
    body: `We do not sell, rent, or trade your personal data to third parties.

We may share your personal data with third parties only in the following cases (Articles 13, 23, 31 of the Law):

— Service providers acting as data processors on our behalf (e.g. payment processing, email delivery, website hosting, analytics) — subject to appropriate data processing agreements;
— State authorities and government bodies when required to do so by the legislation of the Republic of Uzbekistan;
— With your prior written consent.

Where personal data is transferred to a third party for processing, we notify you in writing within three days of such transfer (Article 23 of the Law), unless an exemption applies under the Law.

All employees and third parties with access to personal data are bound by confidentiality obligations and may use such data only within the scope of their professional duties (Article 12 of the Law).`,
  },
  {
    num: "7",
    title: "Cross-Border Data Transfers",
    body: `Some of our service providers (e.g. cloud hosting, analytics platforms) may be located outside the Republic of Uzbekistan. In such cases, personal data may be transferred across borders.

Cross-border transfers are carried out only to countries that ensure adequate protection of personal data rights, or subject to one of the conditions set out in Article 15 of the Law:

— Your explicit consent to the cross-border transfer;
— The transfer is necessary for the performance of a contract with you;
— The transfer is provided for by an international treaty of the Republic of Uzbekistan.

Personal data subject to mandatory storage on the territory of the Republic of Uzbekistan (biometric and genetic data, and data of telecommunication users) is stored exclusively within Uzbekistan in accordance with Article 27¹ of the Law. We do not process such categories of data.`,
  },
  {
    num: "8",
    title: "Data Security",
    body: `We implement appropriate legal, organisational, and technical measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction (Article 27 of the Law). These measures include:

— Access controls limiting data access to authorised personnel only;
— Confidentiality obligations binding all staff with access to personal data;
— Secure data transmission using industry-standard encryption (HTTPS);
— Regular review of our data handling and security practices.

In the event of a breach affecting your personal data, we will take immediate steps to contain the breach and notify relevant parties as required by law.`,
  },
  {
    num: "9",
    title: "Confidentiality",
    body: `All personal data in our possession is treated as confidential. We and any person who obtains access to personal data through us are prohibited from disclosing or distributing personal data without your consent or another lawful basis (Article 28 of the Law).

Employees involved in the processing of personal data are required to maintain confidentiality with respect to any personal data entrusted to them or that becomes known to them in the course of their professional duties, both during and after their employment.`,
  },
  {
    num: "10",
    title: "Your Rights",
    body: `In accordance with Article 30 of the Law, you have the right to:

— Know whether we hold personal data about you and what that data consists of;
— Request information about how your personal data is being processed;
— Obtain information about the conditions under which access to your personal data is provided;
— Give consent to the processing of your personal data and withdraw that consent at any time;
— Give consent for your personal data to be published in publicly accessible sources;
— Request the temporary suspension of processing if your data is incomplete, outdated, inaccurate, unlawfully obtained, or no longer necessary for the stated purposes;
— Apply to the authorised state body or court for the protection of your rights and legitimate interests.

To exercise any of these rights, please contact us at info@advizenco.com. We will respond in writing within 10 calendar days of receiving your request (Article 22 of the Law).`,
  },
  {
    num: "11",
    title: "Consent and Withdrawal",
    body: `Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal (Article 21 of the Law).

Consent may be withdrawn in the same form in which it was given, or in writing (including by email to info@advizenco.com). Upon receipt of a withdrawal, we will cease processing your personal data for the relevant purpose and, where applicable, destroy the data unless retention is required by law.

Please note that withdrawal of consent may affect our ability to provide certain services to you.`,
  },
  {
    num: "12",
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices, applicable law, or the services we provide. Material changes will be posted on this page with an updated date.

We encourage you to review this Policy periodically. Continued use of our website following the posting of changes constitutes your acknowledgement of the updated Policy.`,
  },
  {
    num: "13",
    title: "Complaints and Contact",
    body: `If you believe your personal data rights have been violated, you may file a complaint with the authorised state body for personal data:

State Personalisation Centre under the Cabinet of Ministers of the Republic of Uzbekistan
Website: www.uzinfocom.uz

You also have the right to apply to a court of the Republic of Uzbekistan (Article 32 of the Law).

For any questions regarding this Policy or our data practices, please contact us directly:

Advizen Consulting
E-mail: info@advizenco.com
Phone: +998 33 488 4888`,
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-white/40">
            How we collect, use, and protect your personal data
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
            This Privacy Policy is prepared in accordance with the Law of the Republic of Uzbekistan No. ZRU-547 \"On Personal Data\" dated 2 July 2019 and other applicable legislation. Last updated: April 2026.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
