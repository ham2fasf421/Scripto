'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { fadeIn } from '@/utils/motion';
import ContactSection from '@/components/sections/ContactSection';

export default function PrivacyPolicy() {
  const t = useTranslations('privacy');
  const lastUpdated = new Date('2024-03-20').toLocaleDateString();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-30 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
             {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("lastUpdated")}: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Information Collection */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-semibold mb-4">{t('sections.collection.title')}</h2>
            <p className="text-muted-foreground">{t('sections.collection.content')}</p>
          </motion.div>

          {/* Information Usage */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 0.5)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-semibold mb-4">{t('sections.usage.title')}</h2>
            <p className="text-muted-foreground">{t('sections.usage.content')}</p>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.5, 0.5)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-semibold mb-4">{t('sections.protection.title')}</h2>
            <p className="text-muted-foreground">{t('sections.protection.content')}</p>
          </motion.div>

          {/* Cookie Policy */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 0.5)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-semibold mb-4">{t('sections.cookies.title')}</h2>
            <p className="text-muted-foreground">{t('sections.cookies.content')}</p>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.7, 0.5)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-semibold mb-4">{t('sections.thirdParty.title')}</h2>
            <p className="text-muted-foreground">{t('sections.thirdParty.content')}</p>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.8, 0.5)}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-semibold mb-4">{t('sections.changes.title')}</h2>
            <p className="text-muted-foreground">{t('sections.changes.content')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 