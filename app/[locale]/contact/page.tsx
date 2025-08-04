"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from 'next-intl';
import { 
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Form } from "@/components/Form";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Ads from "@/components/Ads";
import Link from "next/link";
import { contactInfo, socialLinks } from "@/lib/data/links";


export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale()

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
          className="container mx-auto px-6 relative z-10 text-center max-w-4xl mx-auto"
        >

            {/* Title and Description */}
            <motion.div
              variants={fadeIn("up")}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("description")}
              </p>
            </motion.div>

        </motion.div>
      </section>

      {/* Enhanced Contact Information Grid */}
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
            className="text-center mb-12"
            dir={`${locale === 'ar' ? "rtl" : "ltr"}`}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("getinTouch")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("chooseContact")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={fadeIn("up")}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  href={info.href}
                  className="block bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                      <p className="text-foreground font-medium mb-2">{info.value}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Contact Form and Social Links */}
      <section className="py-20 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="container mx-auto px-6"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <motion.div
              variants={fadeIn("up")}
              className="space-y-8"
            dir={`${locale === 'ar' ? "rtl" : "ltr"}`}

            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t("form.title")}</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  {t("form.description")}
                </p>
                <Form />
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              variants={fadeIn("up")}
              className="space-y-8"
              dir={`${locale === 'ar' ? "rtl" : "ltr"}`}

            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {t("social.title")}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  {t("social.description")}
                </p>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeIn("up")}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted/20 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                        <social.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{social.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                variants={fadeIn("up")}
                className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
                dir={`${locale === 'ar' ? "rtl" : "ltr"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold">{t("whyChooseUs")}</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {t("advantages.fastResponse")}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {t("advantages.professionalTeam")}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {t("advantages.competitivePricing")}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {t("advantages.ongoingSupport")}
                  </li>
                </ul>
              </motion.div>
            </motion.div>
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
          secondaryButton={{
            href: "/projects",
            label: t("viewOurWork"),
            variant: "outline"
          }}
        />
    </main>
  );
}