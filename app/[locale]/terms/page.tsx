"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const sections = [
  {
    id: "1",
    title: "1. Acceptance of Terms",
    content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
  },
  {
    id: "2",
    title: "2. Use License",
    content: "Permission is granted to temporarily download one copy of the materials (templates) purchased from our website for personal, non-commercial transitory viewing only."
  },
  {
    id: "3",
    title: "3. Disclaimer",
    content: "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
  },
  {
    id: "4",
    title: "4. Limitations",
    content: "In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website."
  },
  {
    id: "5",
    title: "5. Revisions and Errata",
    content: "The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current."
  },
  {
    id: "6",
    title: "6. Links",
    content: "We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site."
  },
  {
    id: "7",
    title: "7. Terms of Use Modifications",
    content: "We may revise these terms of use for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use."
  }
];

export default function TermsPage() {
  const t = useTranslations('terms');
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

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground mb-8">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            {t("haveQuestions")}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t("contactUs")}
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {t("getInTouch")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 