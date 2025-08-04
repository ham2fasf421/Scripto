import { TemplatesType } from "@/lib/data/templates";

export type SortOption = 'popular' | 'rating' | 'price-low' | 'price-high';
export type PlatformFilter = 'all' | 'web' | 'mobile';

export interface FilterProps {
  selectedCategory: TemplatesType | "all";
  setSelectedCategory: (category: TemplatesType | "all") => void;
  selectedPlatform: PlatformFilter;
  setSelectedPlatform: (platform: PlatformFilter) => void;
  selectedSort: SortOption;
  setSelectedSort: (sort: SortOption) => void;
}
