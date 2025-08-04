"use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { FilterSidebar } from "../components/templates/FilterSidebar";
// import { FloatingFilterButton } from "../components/templates/FloatingFilterButton";
// import { TemplateGrid } from "../components/templates/TemplateGrid";
// import { SortOption, PlatformFilter } from "../components/templates/types";
// import { TemplatesType } from "@/lib/data/templates";
// import { useTranslations } from "next-intl";
import { CommingSoon } from "@/components/CommingSoon";

export default function TemplatesPage() {
  // const t = useTranslations('');

  

  // const [selectedCategory, setSelectedCategory] = useState<TemplatesType | "all">("all");
  // const [selectedPlatform, setSelectedPlatform] = useState<PlatformFilter>("all");
  // const [selectedSort, setSelectedSort] = useState<SortOption>('popular');

  // const filterProps = {
  //   selectedCategory,
  //   setSelectedCategory,
  //   selectedPlatform,
  //   setSelectedPlatform,
  //   selectedSort,
  //   setSelectedSort,
  // };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <CommingSoon />
      </div>
      {/* <main className="min-h-screen bg-background"> */}
        {/* Hero Section */}
        {/* <section className="relative pt-30 pb-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t("templates.title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("templates.description")}
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Templates Section */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex gap-6">
              Desktop Filters
              <div className="hidden lg:block">
                <FilterSidebar {...filterProps} />
              </div>

              Templates Grid
              <TemplateGrid {...filterProps} />
            </div>
          </div>
        </section> */}

        {/* Floating Filter Button */}
        {/* <FloatingFilterButton {...filterProps} /> */}

        {/* How to Order Section */}
        {/* <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("templates.howToOrder")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-2">
                  {t(`templates.step${step}Title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`templates.step${step}Description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* WhatsApp Notice */}
        {/* <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">{t("templates.paymentNotice")}</p>
          <Button
            asChild
            variant="outline"
            className="mt-4"
          >
            <a
              href="https://wa.me/your_number"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("templates.orderViaWhatsApp")}
            </a>
          </Button>
        </div> */}
      {/* </main> */}
    </>
  );
} 