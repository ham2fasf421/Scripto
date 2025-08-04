"use client";

import Ads from "../Ads"
import { useTranslations } from "next-intl";


export default function AdsSection() {
  const t = useTranslations('contact');

  return(
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
  )   
}