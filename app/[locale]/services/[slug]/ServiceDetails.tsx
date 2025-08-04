// app/[locale]/services/page.tsx

"use client";

import { services } from "@/lib/data/services";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Quote,
} from "lucide-react";
import Ads from "@/components/Ads";

export default function ServiceDetails({ slug, locale }: { slug: string; locale: string }) {
  const t = useTranslations("services");
  const tDetails = useTranslations("servicesDetails");

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-foreground">{t("notFound")}</h1>
          <p className="text-muted-foreground mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href={`/${locale}/services`} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("backToServices")}
            </Link>
          </Button>
        </motion.div>
      </main>
    );
  }


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
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={fadeIn("up")}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <motion.div
              variants={fadeIn("up")}
              className="mb-8"
            >
              <Link 
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("backToServices")}
              </Link>
            </motion.div>

            {/* Service Icon and Title */}
            <motion.div
              variants={fadeIn("up")}
              className="text-center mb-8"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t(service.titleKey)}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6 max-w-4xl"
        >
          {/* Overview Section */}
          {tDetails(`intro.${slug}`) && tDetails(`intro.${slug}`) !== `intro.${slug}` && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {tDetails(`intro.${slug}`)}
                </p>
              </div>
            </motion.div>
          )}

          {/* Details Section */}
          {service.detailKey && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Service Details
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t(service.detailKey)}
                </p>
              </div>
            </motion.div>
          )}

          {/* Key Benefits Section */}
          {Array.isArray(tDetails.raw(`keyBenefits.${slug}`)) && tDetails.raw(`keyBenefits.${slug}`).length > 0 && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose This Service?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {(tDetails.raw(`keyBenefits.${slug}`) as string[]).map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("up")}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Detailed Features Section */}
          {Array.isArray(tDetails.raw(`detailedFeatures.${slug}`)) && tDetails.raw(`detailedFeatures.${slug}`).length > 0 && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                What We Offer
              </h2>
              <div className="space-y-6">
                {(tDetails.raw(`detailedFeatures.${slug}`) as {title: string, description: string}[]).map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("up")}
                    whileHover={{ x: 5 }}
                    className="bg-card border-l-4 border-primary p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features Section */}
          {service.featuresKey && Array.isArray(t.raw(service.featuresKey)) && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Key Features
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="grid md:grid-cols-2 gap-4">
                  {(t.raw(service.featuresKey) as string[]).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Use Cases Section */}
          {Array.isArray(tDetails.raw(`useCases.${slug}`)) && tDetails.raw(`useCases.${slug}`).length > 0 && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Use Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {(tDetails.raw(`useCases.${slug}`) as string[]).map((useCase, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("up")}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{useCase}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQ Section */}
          {Array.isArray(tDetails.raw(`faq.${slug}`)) && tDetails.raw(`faq.${slug}`).length > 0 && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {(tDetails.raw(`faq.${slug}`) as {question: string, answer: string}[]).map((faq, i) => (
                    <AccordionItem value={"faq-" + i} key={i} className="border-border/50">
                      <AccordionTrigger className="text-lg font-semibold px-6 py-4 hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-4 whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          )}

          {/* Testimonials Section */}
          {Array.isArray(tDetails.raw(`testimonials.${slug}`)) && tDetails.raw(`testimonials.${slug}`).length > 0 && (
            <motion.div
              variants={fadeIn("up")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {(tDetails.raw(`testimonials.${slug}`) as {client: string, feedback: string}[]).map((testimonial, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("up")}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed mb-4 italic">
                          &quot;{testimonial.feedback}&quot;
                        </p>
                        <div className="font-semibold text-foreground">{testimonial.client}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Related Services Section */}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Related Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our other services that might be perfect for your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.filter(s => s.slug !== service.slug).slice(0, 3).map((related) => (
              <motion.div
                key={related.slug}
                variants={fadeIn("up")}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <related.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Service Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4">{t(related.titleKey)}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(related.descriptionKey)}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 pt-6">
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                        <Link href={`/${locale}/services/${related.slug}`} className="flex items-center justify-center gap-2">
                          {t("readMore")}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
