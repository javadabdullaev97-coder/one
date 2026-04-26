"use client";

import { motion } from "framer-motion";

const sections = [
  {
    num: "1",
    title: "General Provisions",
    body: `This Public Offer (hereinafter the "Offer") is an official proposal by Advizen Consulting LLC (hereinafter the "Seller") to an unlimited circle of persons to enter into a contract for the sale and purchase of ready-made information packages and documents (hereinafter the "Product") listed in the Store at advizenco.com.

This Offer has been prepared in accordance with the Law of the Republic of Uzbekistan "On Protection of Consumer Rights" and other acts of legislation of the Republic of Uzbekistan.

Acceptance of this Offer is constituted by payment for the Product by the Buyer. From the moment payment is received, the contract is deemed concluded on the terms of this Offer.`,
  },
  {
    num: "2",
    title: "Subject Matter",
    body: `The Seller undertakes to transfer to the Buyer ownership of ready-made document packages, templates, analytical materials and other information products (hereinafter the "Product"), and the Buyer undertakes to accept and pay for them in accordance with the terms of this Offer.

The list, composition and price of the Product are determined by the current product cards in the Store on the website. The description of the Product constitutes its public offer in accordance with Art. 8 of the Law of the Republic of Uzbekistan "On Protection of Consumer Rights".`,
  },
  {
    num: "3",
    title: "Order Placement",
    body: `3.1. The Buyer selects the Product in the Store, reviews its description and price.

3.2. The Buyer places an order by providing the contact details required for the transfer of the Product.

3.3. Payment for the Product by any available method constitutes acceptance of this Offer and signifies the Buyer's unconditional agreement with all its terms.

3.4. Upon confirmation of payment, the Buyer is sent a cash receipt or sales receipt in accordance with Art. 10 of the Law of the Republic of Uzbekistan "On Protection of Consumer Rights".`,
  },
  {
    num: "4",
    title: "Price and Payment",
    body: `4.1. The price of the Product is indicated in the Store at the time of placing the order. The Seller reserves the right to change the price prior to payment.

4.2. Payment is made in non-cash form through payment systems available on the website. The Seller does not set different prices depending on the payment method (Art. 10 of the Law of the Republic of Uzbekistan "On Protection of Consumer Rights").

4.3. When paying by non-cash methods, the Buyer may be offered incentives and discounts in accordance with current promotions.`,
  },
  {
    num: "5",
    title: "Product Delivery",
    body: `5.1. The Product is delivered to the Buyer in electronic form — by providing a download link or access to files — no later than 24 hours from confirmation of payment.

5.2. In the event of a delay in delivery, the Seller shall pay the Buyer a penalty of 0.5% of the Product price for each day of delay, but not exceeding the total price of the Product (Art. 12¹ of the Law of the Republic of Uzbekistan "On Protection of Consumer Rights").

5.3. The risk of accidental loss or accidental damage to the Product passes to the Buyer from the moment of its transfer.`,
  },
  {
    num: "6",
    title: "Rights and Obligations",
    body: `The Seller is obligated to:
— provide accurate and complete information about the Product (Art. 6 of the Law);
— transfer the Product within the established timeframe and of proper quality;
— issue a cash receipt or sales receipt;
— ensure the safety of the Product for the entire period of its use.

The Buyer is entitled to:
— receive accurate information about the Product and the Seller (Art. 4 of the Law);
— demand replacement or a refund upon discovery of defects (Art. 13 of the Law);
— apply to a court or authorized bodies in the event of a violation of their rights (Art. 29 of the Law).

The Buyer is obligated to:
— review the Product description before placing an order;
— pay for the Product in full;
— use the Product solely for personal, non-commercial purposes, not transfer it to third parties, and not make it publicly available.`,
  },
  {
    num: "7",
    title: "Returns and Refunds",
    body: `7.1. Due to the digital nature of the Product (an information product in electronic form), refunds after the files have been delivered to the Buyer are not provided, except in cases where material defects are discovered.

7.2. A material defect is defined as a discrepancy between the Product and its description published in the Store that renders it impossible to use for its intended purpose.

7.3. Upon discovery of a material defect, the Buyer is entitled within 10 days of receipt of the Product to demand its replacement with a Product of proper quality or a refund of the amount paid (Art. 13, 18 of the Law).

7.4. Claims shall be submitted by email to: info@advizenco.com, indicating the order number and a description of the defect.`,
  },
  {
    num: "8",
    title: "Liability",
    body: `8.1. The Seller bears responsibility for the accuracy of information about the Product and its quality in accordance with the Law of the Republic of Uzbekistan "On Protection of Consumer Rights".

8.2. The Seller is not liable for the inability to use the Product for reasons beyond the Seller's control (technical issues on the Buyer's side, absence of required software, etc.).

8.3. Moral damages caused to the Buyer as a result of a violation of their rights are subject to compensation where the Seller is at fault (Art. 22 of the Law).

8.4. The Seller's aggregate liability is limited to the price of the paid Product.`,
  },
  {
    num: "9",
    title: "Personal Data",
    body: `9.1. By placing an order, the Buyer consents to the processing of their personal data for the purpose of performing this contract.

9.2. The Seller undertakes not to transfer the Buyer's personal data to third parties without their consent, except in cases provided for by the legislation of the Republic of Uzbekistan.

9.3. Detailed conditions for the processing of personal data are set out in the Privacy Policy published on the website.`,
  },
  {
    num: "10",
    title: "Dispute Resolution",
    body: `10.1. All disputes shall be resolved through negotiation. The response period for a claim is 10 business days from the date of its receipt.

10.2. If no agreement is reached, disputes shall be referred to a court at the location of the Seller or the Buyer in accordance with the legislation of the Republic of Uzbekistan (Art. 29 of the Law).

10.3. Consumers are exempt from paying state duty on claims related to the violation of their rights (Art. 29 of the Law).`,
  },
  {
    num: "11",
    title: "Seller Details",
    body: `Advizen Consulting
Legal address: Tashkent, Republic of Uzbekistan
E-mail: info@advizenco.com
Phone: +998 33 488 4888
Website: advizenco.com

This Offer takes effect from the moment of its publication on the website and remains in force until it is withdrawn by the Seller.`,
  },
];

export default function TermsOfSalePage() {
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
            Advizen Consulting · Store
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" style={{ letterSpacing: "-0.01em" }}>
            Terms of Sale
          </h1>
          <p className="text-sm text-white/40">
            Sale and purchase agreement for information products
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
            This document has been prepared in accordance with the Law of the Republic of Uzbekistan "On Protection of Consumer Rights" and other acts of legislation of the Republic of Uzbekistan. Last updated: April 2026.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
