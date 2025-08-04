"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { CommingSoon } from "../CommingSoon";

export default function TemplatesSection() {
  const t = useTranslations("templates");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const WhatsappIcon = SiWhatsapp;

  return (
    <Section
      title={t("title")}
      description={t("description")}
      titleSlotRight={
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/${locale}/templates`}>
            <Button variant="outline" className="group">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </Link>
        </motion.div>
      }
      className="bg-muted/30"
    >

        <CommingSoon />

      {/* Templates Grid
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTemplates.map((template, index) => (
          <TemplateCard
            key={template.id}
            template={template}
            index={index}
          />
        ))}
      </div> */}

      {/* How to Order Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          {t("howToOrder")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">{step}</span>
              </div>
              <h4 className="font-semibold mb-2">
                {t(`step${step}Title`)}
              </h4>
              <p className="text-muted-foreground">
                {t(`step${step}Description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WhatsApp Notice */}
      <div className="mt-14 flex flex-col items-center">
        <div className="bg-ring/30 p-2 md:px-4 rounded-lg w-fit">
          <p className="text-muted-foreground text-sm md:text-base italic">
            {t("paymentNotice")}
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="mt-4 bg-[#47A248] hover:bg-[#47A248]/80 text-white"
        >
          <Link
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("orderViaWhatsApp")}
            <WhatsappIcon className="w-5 h-5 ml-2 mt-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
