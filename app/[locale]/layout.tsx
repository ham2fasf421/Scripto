// export const runtime = 'nodejs'; 

// import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
// import { notFound } from 'next/navigation';
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer";
// import { ScrollProvider } from '@/lib/contexts/ScrollContext';
// import { LoadingProvider } from '@/lib/contexts/LoadingContext';
// import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// import fs from 'fs/promises';
// import path from 'path';

// export const revalidate = 60;

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'ar' }];
// }

// const messagesCache: Record<string, AbstractIntlMessages> = {};

// async function getMessages(locale: string): Promise<AbstractIntlMessages> {
//   if (messagesCache[locale]) {
//     return messagesCache[locale];
//   }

//   try {
//     const fileNames = [
//       "nav", "experience", "faq", "blog", "footer",
//       "contact", "services", "about", "home", "projects", "templates",
//       "docs", "privacy", "trems"
//     ];

//     const messagesArray = await Promise.all(
//       fileNames.map(async (fileName) => {
//         const filePath = path.join(process.cwd(), 'locales', locale, `${fileName}.json`);
//         const fileContent = await fs.readFile(filePath, 'utf8');
//         return JSON.parse(fileContent);
//       })
//     );

//     const messages = Object.assign({}, ...messagesArray);
//     messagesCache[locale] = messages;
//     return messages;

//   } catch (error) {
//     console.error("Error loading messages:", error);
//     notFound();
//   }
// }

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;

//   if (!['en', 'ar'].includes(locale)) {
//     notFound();
//   }

//   const messages = await getMessages(locale);

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       <LoadingProvider>
//         <ScrollProvider>
//           <LoadingSpinner />
//           <header>
//             <Navbar />
//           </header>
//           <main>{children}</main>
//           <Footer />
//         </ScrollProvider>
//       </LoadingProvider>
//     </NextIntlClientProvider>
//   );
// }
export const revalidate = 60;
export const runtime = 'nodejs';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { ScrollProvider } from '@/lib/contexts/ScrollContext';
import { LoadingProvider } from '@/lib/contexts/LoadingContext';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

const supportedLocales = ['en', 'ar'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

async function getMessages(locale: SupportedLocale) {
  try {
    const files = [
      "nav", "experience", "faq", "blog", "footer",
      "contact", "services", "about", "home", "projects", "templates",
      "docs", "privacy", "trems"
    ];

    const messagesList = await Promise.all(
      files.map(async (name) => {
        const mod = await import(`@/locales/${locale}/${name}.json`);
        return mod.default;
      })
    );

    return Object.assign({}, ...messagesList);
  } catch (e) {
    console.error('Error loading messages:', e);
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as SupportedLocale)) {
    notFound();
  }

  const messages = await getMessages(locale as SupportedLocale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LoadingProvider>
        <ScrollProvider>
          <LoadingSpinner />
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </ScrollProvider>
      </LoadingProvider>
    </NextIntlClientProvider>
  );
}

