"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechStack from "./components/TechStack";
import AboutServices from "./components/AboutServices";
import Ads from "@/components/Ads";
import { 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  Heart,
  Target,
  Shield,
  Rocket,
  Code,
  Smartphone
} from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: t("stats.clients"),
      color: "text-blue-500",
      description: t("stats.clientsDesc")
    },
    {
      icon: Award,
      value: "100+",
      label: t("stats.projects"),
      color: "text-green-500",
      description: t("stats.projectsDesc")
    },
    {
      icon: Clock,
      value: "3+",
      label: t("stats.experience"),
      color: "text-purple-500",
      description: t("stats.experienceDesc")
    },
    {
      icon: CheckCircle,
      value: "99%",
      label: t("stats.successRate"),
      color: "text-orange-500",
      description: t("stats.successRateDesc")
    }
  ];


  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={fadeIn("up")}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
            >
              <Star className="w-4 h-4" />
              Leading Digital Solutions
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold pb-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {t("heroTagline")}
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" variant="gold" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  {t("ctaButton")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects" className="flex items-center gap-2">
                  {t("viewOurWork")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6"
        >
          <motion.div
            variants={fadeIn("up")}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t("stats.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("stats.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn("up")}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-card mb-6 ${stat.color.replace('text-', 'bg-')}/10 border-2 border-transparent group-hover:border-current transition-all duration-300`}
                >
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Description */}
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6"
        >
          <motion.div
            variants={fadeIn("up")}
            className="max-w-6xl mx-auto"
          >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
              {/* Text Content */}
              <motion.div
                variants={fadeIn("left")}
                className="space-y-6"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  <Globe className="w-4 h-4" />
                  {t("descriptionBadge")}
                </div>
                <h2 className="text-4xl pb-4 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t("descriptionTitle")}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                  <ReactMarkdown>{t("description")}</ReactMarkdown>
                </div>
                
                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("features.quality.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("features.quality.subtitle")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("features.delivery.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("features.delivery.subtitle")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("features.team.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("features.team.subtitle")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t("features.security.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("features.security.subtitle")}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Visual Element */}
              <motion.div
                variants={fadeIn("right")}
                className="relative"
                dir={isRTL ? "rtl" : "ltr"}
              >
                <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border/50 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse delay-1000" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse delay-2000" />
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center animate-bounce">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute top-8 right-8 w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center animate-bounce delay-500">
                    <Smartphone className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-8 h-8 bg-purple-500/20 rounded-xl flex items-center justify-center animate-bounce delay-1000">
                    <Globe className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center animate-bounce delay-1500">
                    <Shield className="w-7 h-7 text-orange-600" />
                  </div>
                  
                  {/* Central Hub */}
                  <div className="relative z-10 flex items-center justify-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                      <Rocket className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Content Cards */}
                  <div className="relative z-10 space-y-6">
                    <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Rocket className="w-4 h-4 text-primary" />
                        </div>
                        <div className="font-semibold">{t("visualElements.innovation.title")}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t("visualElements.innovation.description")}
                      </p>
                    </div>
                    
                    <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ml-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="font-semibold">{t("visualElements.excellence.title")}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t("visualElements.excellence.description")}
                      </p>
                    </div>
                    
                    <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Heart className="w-4 h-4 text-accent" />
                        </div>
                        <div className="font-semibold">{t("visualElements.passion.title")}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t("visualElements.passion.description")}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-sm animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-sm animate-pulse delay-1000" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-sm animate-pulse delay-500" />
                <div className="absolute top-1/3 -left-2 w-4 h-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-sm animate-pulse delay-1500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeIn("left")}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">{t("visionTitle")}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("visionContent")}</p>
            </motion.div>

            <motion.div
              variants={fadeIn("right")}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">{t("missionTitle")}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("missionContent")}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Services Section */}
      <AboutServices />

      {/* Tech Stack */}
      <TechStack />

      {/* Enhanced CTA */}
      <Ads
        title={t("ctaTitle")}
        text={t("ctaText")}
        primaryButton={{
          href: "/contact",
          label: t("ctaButton"),
          variant: "gold"
        }}
        secondaryButton={{
          href: "/projects",
          label: t("viewOurWork"),
          variant: "outline"
        }}
      />
    </main>
  );
}
