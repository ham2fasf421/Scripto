"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Laptop, Smartphone, Tablet, Check, Code2, Layers, MessageCircle, ArrowLeft } from 'lucide-react';
import { templates } from '@/lib/data/templates';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type DeviceView = 'desktop' | 'tablet' | 'mobile';

const deviceImages = {
  "modern-ecommerce": {
    desktop: "/templates/ecommerce/desktop.jpg",
    tablet: "/templates/ecommerce/tablet.jpg",
    mobile: "/templates/ecommerce/mobile.jpg"
  },
  "portfolio-pro": {
    desktop: "/templates/portfolio/desktop.jpg",
    tablet: "/templates/portfolio/tablet.jpg",
    mobile: "/templates/portfolio/mobile.jpg"
  },
  "blog-starter": {
    desktop: "/templates/blog/desktop.jpg",
    tablet: "/templates/blog/tablet.jpg",
    mobile: "/templates/blog/mobile.jpg"
  },
  "admin-dashboard": {
    desktop: "/templates/dashboard/desktop.jpg",
    tablet: "/templates/dashboard/tablet.jpg",
    mobile: "/templates/dashboard/mobile.jpg"
  }
};

export default function TemplateDetailPage() {
  const params = useParams();
  const t = useTranslations('');
  const locale = params.locale as string;

  const [deviceView, setDeviceView] = useState<DeviceView>('desktop');
  
  const templateId = params.id as string;
  const template = templates.find(t => t.id === templateId);

  if (!template) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Template not found</h1>
        <Button asChild>
          <Link href={`/${locale}/templates`}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Link>
        </Button>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in purchasing the ${template.title} template ($${template.price}).`;
    const whatsappUrl = `https://wa.me/your_number?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const images = deviceImages[templateId as keyof typeof deviceImages] || {
    desktop: template.imageUrl,
    tablet: template.imageUrl,
    mobile: template.imageUrl
  };

  return (
    <main className="min-h-screen lg:p-24 py-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/templates`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Templates
            </Link>
          </Button>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">{template.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">{template.description}</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={deviceView === 'desktop' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setDeviceView('desktop')}
            >
              <Laptop className="w-4 h-4" />
            </Button>
            <Button
              variant={deviceView === 'tablet' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setDeviceView('tablet')}
            >
              <Tablet className="w-4 h-4" />
            </Button>
            <Button
              variant={deviceView === 'mobile' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setDeviceView('mobile')}
            >
              <Smartphone className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Preview Section */}
        <motion.div
          key={deviceView}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-video mb-12 bg-muted rounded-xl overflow-hidden border"
        >
          <Image
            src={images[deviceView]}
            alt={`${template.title} ${deviceView} preview`}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Features and Tech Stack */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-semibold">Features</h2>
            </div>
            <ul className="space-y-3">
              {template.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {template.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Order Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-muted/30 rounded-xl border"
        >
          <div className="mb-6">
            <span className="text-3xl font-bold text-primary">${template.price}</span>
          </div>
          <p className="text-muted-foreground mb-6">{t('templates.paymentNotice')}</p>
          <Button onClick={handleWhatsAppOrder} className="gap-2">
            <MessageCircle className="w-4 h-4" />
            {t('templates.orderViaWhatsApp')}
          </Button>
          {template.demoUrl && (
            <div className="mt-4">
              <Button variant="outline" asChild>
                <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </a>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
} 