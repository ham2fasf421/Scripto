"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Code, 
  Smartphone, 
  RefreshCw, 
  ArrowRight,
  CheckCircle,
  Zap,
  Users
} from "lucide-react";

export default function AboutServices() {
  const t = useTranslations("services");
  const locale = useLocale();

  const mainServices = [
    {
      icon: Code,
      titleKey: "software",
      descriptionKey: "description.software",
      detailKey: "details.software",
      featuresKey: "features.software",
      slug: "software-development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-600",
      benefits: [
        "Custom solutions tailored to your business",
        "Modern web technologies and frameworks",
        "Scalable and maintainable codebase",
        "SEO-optimized and performance-focused"
      ]
    },
    {
      icon: Smartphone,
      titleKey: "mobileDev",
      descriptionKey: "description.mobileDev",
      detailKey: "details.mobileDev",
      featuresKey: "features.mobileDev",
      slug: "mobile-development",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-600",
      benefits: [
        "Native and cross-platform development",
        "iOS and Android optimization",
        "Offline functionality and sync",
        "App store optimization and deployment"
      ]
    },
    {
      icon: RefreshCw,
      titleKey: "modernization",
      descriptionKey: "description.modernization",
      detailKey: "details.modernization",
      featuresKey: "features.modernization",
      slug: "modernization",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      iconColor: "text-green-600",
      benefits: [
        "Legacy system transformation",
        "Performance optimization",
        "Modern UI/UX redesign",
        "Technology stack upgrade"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-4">
            <Zap className="w-4 h-4" />
            {t("aboutServices.badge")}
          </div>
          <h2 className="text-4xl font-bold pb-4">{t("aboutServices.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("aboutServices.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeIn("up")}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`relative bg-card rounded-2xl min-h-full p-8 border ${service.borderColor} hover:border-current transition-all duration-300 hover:shadow-xl`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Service Icon */}
                <div className={`relative z-10 ${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features from translation */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {Array.isArray(t.raw(service.featuresKey)) && t.raw(service.featuresKey).map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Link href={`/${locale}/services/${service.slug}`} className="flex items-center justify-center gap-2">
                      {t("aboutServices.learnMore")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services CTA */}
        <motion.div
          variants={fadeIn("up")}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{t("aboutServices.needMoreTitle")}</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              {t("aboutServices.needMoreDescription")}
            </p>
            <Button asChild size="lg" variant="gold" className="group">
              <Link href={`/${locale}/services`} className="flex items-center gap-2">
                {t("aboutServices.viewAllServices")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 