"use client";

import { services } from "@/lib/data/services";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle,
  Globe,
} from "lucide-react";
import Ads from "@/components/Ads";

export default function ServicesPage() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-background">
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
              <Globe className="w-4 h-4" />
              Comprehensive Digital Solutions
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {t("pageDescription")}
            </p>
          </motion.div>
        </motion.div>
      </section>

      

      {/* Services Grid */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of digital solutions designed to elevate your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.slug}
                variants={fadeIn("up")}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Service Icon */}
                  <div className="relative z-10 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {t(service.descriptionKey)}
                      </p>

                      {/* Features */}
                      {service.featuresKey && (
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                            Key Features
                          </h4>
                          <div className="space-y-2">
                            {(t.raw(service.featuresKey) as string[]).slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button - Always at bottom */}
                    <div className="mt-auto pt-6">
                      <Button asChild variant="outline" className="w-full transition-colors duration-300">
                        <Link href={`/${locale}/services/${service.slug}`} className="flex items-center justify-center gap-2">
                          {t("readMore")}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}        
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
