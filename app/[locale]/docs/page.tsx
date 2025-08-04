'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { fadeIn } from '@/utils/motion';
import ContactSection from '../../../components/sections/ContactSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Documentation() {
  const t = useTranslations('docs');

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-30 pb-16 bg-muted/30">
        <div className='container mx-auto px-6'>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('description')}
              </p>
            </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <Tabs defaultValue="getting-started" className="max-w-5xl mx-auto p-4">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="getting-started" className='cursor-pointer'>{t('tabs.gettingStarted')}</TabsTrigger>
            <TabsTrigger value="api-reference" className='cursor-pointer'>{t('tabs.apiReference')}</TabsTrigger>
            <TabsTrigger value="examples" className='cursor-pointer'>{t('tabs.examples')}</TabsTrigger>
          </TabsList>

          {/* Getting Started Content */}
          <TabsContent value="getting-started">
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 0.5)}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* Installation */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('gettingStarted.installation.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{t('gettingStarted.installation.command')}</code>
                  </pre>
                </CardContent>
              </Card>

              {/* Quick Start */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('gettingStarted.quickStart.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: t.raw('gettingStarted.quickStart.content') 
                    }} />
                  </div>
                </CardContent>
              </Card>

              {/* Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('gettingStarted.configuration.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{t('gettingStarted.configuration.example')}</code>
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* API Reference Content */}
          <TabsContent value="api-reference">
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 0.5)}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* Endpoints */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('apiReference.endpoints.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['auth', 'users', 'data'].map((endpoint) => (
                      <div key={endpoint} className="border-b pb-4 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold mb-2">
                          {t(`apiReference.endpoints.${endpoint}.title`)}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {t(`apiReference.endpoints.${endpoint}.description`)}
                        </p>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code>{t(`apiReference.endpoints.${endpoint}.example`)}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Authentication */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('apiReference.authentication.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: t.raw('apiReference.authentication.content') 
                    }} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Examples Content */}
          <TabsContent value="examples">
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 0.5)}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {['basic', 'advanced', 'authentication', 'customization'].map((example) => (
                <Card key={example} className="group hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{t(`examples.${example}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t(`examples.${example}.description`)}
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      {t('viewExample')} <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 