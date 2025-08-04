import { getRequestConfig } from 'next-intl/server';
import type { GetRequestConfigParams } from 'next-intl/server';

const fileNames = [
  "nav",
  "home",
  "about",
  "services",
  "experience",
  "contact",
  "footer",
  "blog",
  "faq",
  "projects",
  "templates",
  "docs",
  "privacy",
  "trems",
  "servicesDetails"
];

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  const resolvedLocale = locale ?? 'en';

  const messages = {};

  for (const name of fileNames) {
    try {
      const module = await import(`../locales/${resolvedLocale}/${name}.json`);
      Object.assign(messages, module.default);
    } catch (error) {
      console.error(`Failed to load locale file: ${resolvedLocale}/${name}.json`, error);
      // Continue loading other files instead of failing completely
    }
  }

  return {
    locale: resolvedLocale,
    messages,
  };
});
