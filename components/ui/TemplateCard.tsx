"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Code2, ExternalLink, MessageCircle, Tag, Star, TrendingUp } from "lucide-react";
import { Template } from "@/lib/data/templates";
import { useTranslations } from "next-intl";
import { Button } from "./button";
import { useParams } from "next/navigation";

interface TemplateCardProps {
  template: Template;
  index: number;
}

export function TemplateCard({ template, index }: TemplateCardProps) {
  const params = useParams();
  const t = useTranslations('');
  const locale = params.locale as string;
  const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number

  const handleOrder = (template: Template) => {
    const message = `Hi, I'm interested in purchasing the ${template.title} template ($${template.price}).`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      key={template.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card dark:bg-card/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
    >
      {/* Template Image */}
      <Link href={`/${locale}/templates/${template.id}`}>
        <div className="relative h-48 bg-muted dark:bg-muted/50 group">
          <Image
            src={template.imageUrl || "/placeholder-template.jpg"}
            alt={template.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-medium">View Details</p>
          </div>
        </div>
      </Link>

      {/* Template Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4 text-wrap">
            <div>
              <Link href={`/templates/${template.id}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {template.title}
                </h3>
              </Link>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/20 text-primary">
                  <Tag className="w-4 h-4 mr-1" />
                  {template.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{template.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>{template.popularity}+ sales</span>
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-primary">
              ${template.price}
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            {template.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {template.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2">
            {template.features.map((feature) => (
              <li key={feature} className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 mr-2 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions - Now in a separate div outside the flex-1 container */}
        <div className="flex gap-4 mt-6 pt-6 border-t">
          <Button
            onClick={() => handleOrder(template)}
            className="flex-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {t("templates.orderViaWhatsApp")}
          </Button>
          {template.demoUrl && (
            <Button
              variant="outline"
              onClick={() => window.open(template.demoUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
} 