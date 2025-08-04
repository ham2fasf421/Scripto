import { services } from "@/lib/data/services";
import { NextIntlClientProvider } from "next-intl";
import enServices from "@/locales/en/services.json";
import arServices from "@/locales/ar/services.json";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import ServiceDetails from "./ServiceDetails";

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return services.flatMap((service) =>
    locales.map((locale) => ({
      locale,
      slug: service.slug,
    }))
  );
}



export default async function Page({
  params, 
  }: {
  params: Promise<{ locale: string, slug: string }>}) {
  const { locale, slug } = await params;
  const messages = locale === "ar" ? arServices : enServices;

  return (
    <ErrorBoundary>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ServiceDetails slug={slug} locale={locale} />
      </NextIntlClientProvider>
    </ErrorBoundary>
  );
}
