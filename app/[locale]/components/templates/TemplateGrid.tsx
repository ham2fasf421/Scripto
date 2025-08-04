"use client";

import { motion, AnimatePresence } from "framer-motion";
import { templates } from "@/lib/data/templates";
import { TemplateCard } from "@/components/ui/TemplateCard";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FilterProps } from "./types";

export function TemplateGrid({
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  selectedSort,
}: Omit<FilterProps, 'setSelectedSort'>) {
  const t = useTranslations('');

  const filteredAndSortedTemplates = templates
    .filter((template) => {
      if (selectedCategory !== "all" && template.category !== selectedCategory) {
        return false;
      }
      if (selectedPlatform === "web" && !["landing", "ecommerce", "dashboard", "portfolio", "blog"].includes(template.type)) {
        return false;
      }
      if (selectedPlatform === "mobile" && !["ios", "android"].includes(template.type)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case 'popular':
          return b.popularity - a.popularity;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  return (
    <div className="flex-1">
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredAndSortedTemplates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredAndSortedTemplates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 bg-muted/30 rounded-xl"
        >
          <p className="text-muted-foreground">{t("templates.noResults")}</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSelectedCategory("all");
              setSelectedPlatform("all");
            }}
            className="mt-2"
          >
            {t("templates.clearFilters")}
          </Button>
        </motion.div>
      )}
    </div>
  );
} 