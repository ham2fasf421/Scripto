"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/Separator";
import {
  Filter,
  ShoppingCart,
  MessageCircle,
  Download,
  TrendingUp,
  Star,
  DollarSign,
  Globe,
  Laptop,
  Smartphone,
} from "lucide-react";
import { FilterProps } from "./types";
import { useTranslations } from "next-intl";

const categories = [
  { value: "all", label: "All Templates", icon: <Filter className="w-4 h-4" /> },
  { value: "ecommerce", label: "E-Commerce", icon: <ShoppingCart className="w-4 h-4" /> },
  { value: "portfolio", label: "Portfolio", icon: <MessageCircle className="w-4 h-4" /> },
  { value: "blog", label: "Blog", icon: <Download className="w-4 h-4" /> },
] as const;

const platformFilters = [
  { value: "all", label: "All Platforms", icon: <Globe className="w-4 h-4" /> },
  { value: "web", label: "Web Apps", icon: <Laptop className="w-4 h-4" /> },
  { value: "mobile", label: "Mobile Apps", icon: <Smartphone className="w-4 h-4" /> },
] as const;

const sortOptions = [
  { value: 'popular', label: 'Most Popular', icon: <TrendingUp className="w-4 h-4" /> },
  { value: 'rating', label: 'Highest Rated', icon: <Star className="w-4 h-4" /> },
  { value: 'price-low', label: 'Price: Low to High', icon: <DollarSign className="w-4 h-4" /> },
  { value: 'price-high', label: 'Price: High to Low', icon: <DollarSign className="w-4 h-4" /> },
] as const;

export function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  selectedSort,
  setSelectedSort,
}: FilterProps) {
  const t = useTranslations('');

  return (
    <div className="hidden lg:block w-[200px] flex-shrink-0">
      <div className="space-y-6">
        {/* Platform Filter */}
        <div>
          <h3 className="text-sm font-medium mb-4">{t("templates.platformFilter")}</h3>
          <div className="flex flex-col gap-2">
            {platformFilters.map((platform) => (
              <Button
                key={platform.value}
                variant={selectedPlatform === platform.value ? "default" : "outline"}
                onClick={() => setSelectedPlatform(platform.value)}
                className="justify-start"
              >
                {platform.icon}
                <span className="ml-2">{platform.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium mb-4">{t("templates.categories")}</h3>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="justify-start"
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Sort Options */}
        <div>
          <h3 className="text-sm font-medium mb-4">{t("templates.sortBy")}</h3>
          <div className="flex flex-col gap-2">
            {sortOptions.map((option) => (
              <Button
                key={option.value}
                variant={selectedSort === option.value ? "default" : "outline"}
                onClick={() => setSelectedSort(option.value)}
                className="justify-start"
              >
                {option.icon}
                <span className="ml-2">{option.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { categories, platformFilters, sortOptions };
