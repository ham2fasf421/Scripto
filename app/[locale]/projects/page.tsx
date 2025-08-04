"use client";

import { useState } from "react";
import { projects, ProjectCategory, ProjectType } from "@/lib/data/projects";
import { Filters } from "@/components/project/Filters";
import { ProjectsGrid } from "@/components/project/ProjectsGrid";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { 
  Filter, 
  Search, 
} from "lucide-react";
import Ads from "@/components/Ads";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [selectedType, setSelectedType] = useState<ProjectType | "all">("all");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory !== "all" && project.category !== selectedCategory) return false;
    if (selectedType !== "all" && project.type !== selectedType) return false;
    return true;
  });

  // const stats = [
  //   {
  //     icon: Briefcase,
  //     value: projects.length.toString(),
  //     label: "Projects Completed",
  //     description: "Successful deliveries"
  //   },
  //   {
  //     icon: Users,
  //     value: "50+",
  //     label: "Happy Clients",
  //     description: "Satisfied customers"
  //   },
  //   {
  //     icon: Award,
  //     value: "100%",
  //     label: "Success Rate",
  //     description: "Project completion"
  //   },
  //   {
  //     icon: Star,
  //     value: "5.0",
  //     label: "Client Rating",
  //     description: "Average satisfaction"
  //   }
  // ];

  return (
    <main className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
        >
            {/* Title and Description */}
            <motion.div
              variants={fadeIn("up")}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold pb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("projectsPageDescription")}
              </p>
            </motion.div>

            {/* Stats Section */}
            {/* <motion.div
              variants={fadeIn("up")}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn("up")}
                  className="text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card mb-3 border-2 border-transparent group-hover:border-primary transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
      </section>

      {/* Enhanced Filters + Grid Section */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6"
        >
          {/* Enhanced Filters */}
          <motion.div
            variants={fadeIn("up")}
            className="mb-12"
          >
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Filter className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Filter Projects</h2>
              </div>
              
              <Filters
                selectedCategory={selectedCategory}
                selectedType={selectedType}
                onCategoryChange={setSelectedCategory}
                onTypeChange={setSelectedType}
                clearFilters={() => {
                  setSelectedCategory("all");
                  setSelectedType("all");
                }}
              />
            </div>
          </motion.div>

          {/* Results Summary */}
          <motion.div
            variants={fadeIn("up")}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of <span className="font-semibold text-foreground">{projects.length}</span> projects
                </span>
              </div>
              
              {(selectedCategory !== "all" || selectedType !== "all") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedType("all");
                  }}
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={fadeIn("up")}
          >
            <ProjectsGrid projects={filteredProjects} locale={locale} />
          </motion.div>

          {/* No Results State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeIn("up")}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  {t("projectNotFound")}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedType("all");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Clear all filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Load More or CTA */}
        </motion.div>
      </section>
        <Ads
          title={t("ctaTitle")}
          text={t("ctaText")}
          primaryButton={{
          href: "/contact",
          label: t("ctaButton"),
          variant: "gold"
        }}
        />
    </main>
  );
}
