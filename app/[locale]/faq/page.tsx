"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    id: "1",
    question: "How do I get started with your templates?",
    answer: "Browse our templates collection, choose the one that fits your needs, and contact us via WhatsApp to purchase. Once the payment is confirmed, we'll send you the template files along with installation instructions."
  },
  {
    id: "2",
    question: "Do you offer customization services?",
    answer: "Yes, we offer customization services for all our templates. Contact us with your requirements, and we'll provide you with a quote based on the complexity of the changes needed."
  },
  {
    id: "3",
    question: "What payment methods do you accept?",
    answer: "Currently, we accept payments through secure bank transfers and popular digital payment platforms. Contact us for specific payment options available in your region."
  },
  {
    id: "4",
    question: "Do you provide support after purchase?",
    answer: "Yes, we provide technical support for template installation and basic setup. For ongoing support or additional customizations, we offer flexible support packages."
  },
  {
    id: "5",
    question: "Can I request a refund?",
    answer: "We offer refunds within 7 days of purchase if the template doesn't work as advertised. However, refunds are not available for customized templates or after you've received the source code."
  }
];

export default function FAQPage() {
  const t = useTranslations('faq');

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-30 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <AccordionItem value={faq.id} className="border rounded-lg px-6 cursor-pointer">
                  <AccordionTrigger className="text-left cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            {t("stillHaveQuestions")}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t("contactUs")}
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {t("getInTouch")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 