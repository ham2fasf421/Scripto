"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { FilterProps } from "./types";
import { categories, platformFilters, sortOptions } from "./FilterSidebar";

export function FloatingFilterButton(props: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const t = useTranslations('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  const handleAnimationComplete = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  const activeFiltersCount = [
    props.selectedCategory !== "all",
    props.selectedPlatform !== "all",
    props.selectedSort !== "popular"
  ].filter(Boolean).length;

  if (!mounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Button 
            size="lg"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-lg lg:hidden flex items-center gap-2 rounded-full px-6"
          >
            <Filter className="w-4 h-4" />
            <span>{t("templates.filters")}</span>
            {activeFiltersCount > 0 && (
              <span className="ml-2 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </motion.div>
      </SheetTrigger>

      <AnimatePresence mode="wait">
        {(isOpen || shouldRender) && (
          <SheetContent
            side="bottom"
            className="h-[80vh] rounded-t-xl p-0 border-0"
            onCloseAutoFocus={(e) => e.preventDefault()}
            forceMount
          >
            <motion.div
              key="filter-sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.8,
                restDelta: 0.5,
                restSpeed: 0.5
              }}
              onAnimationComplete={handleAnimationComplete}
              className="h-full bg-background rounded-t-xl border"
            >
              <div className="p-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-between pb-4 border-b"
                >
                  <SheetTitle className="text-lg font-semibold">
                    {t("templates.filters")}
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetClose>
                </motion.div>

                <motion.div 
                  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto max-h-[calc(80vh-140px)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.2,
                      delay: 0.1
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    y: 10,
                    transition: {
                      duration: 0.15
                    }
                  }}
                >
                  {/* Platform Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">{t("templates.platformFilter")}</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                      {platformFilters.map((platform) => (
                        <Button
                          key={platform.value}
                          variant={props.selectedPlatform === platform.value ? "default" : "outline"}
                          onClick={() => props.setSelectedPlatform(platform.value)}
                          className="justify-start flex-1"
                        >
                          {platform.icon}
                          <span className="ml-2">{platform.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">{t("templates.categories")}</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.value}
                          variant={props.selectedCategory === category.value ? "default" : "outline"}
                          onClick={() => props.setSelectedCategory(category.value)}
                          className="justify-start flex-1"
                        >
                          {category.icon}
                          <span className="ml-2">{category.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">{t("templates.sortBy")}</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                      {sortOptions.map((option) => (
                        <Button
                          key={option.value}
                          variant={props.selectedSort === option.value ? "default" : "outline"}
                          onClick={() => props.setSelectedSort(option.value)}
                          className="justify-start flex-1"
                        >
                          {option.icon}
                          <span className="ml-2">{option.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </SheetContent>
        )}
      </AnimatePresence>
    </Sheet>
  );
}
