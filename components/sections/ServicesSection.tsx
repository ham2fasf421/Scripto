"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { services } from "@/lib/data/services";
import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import clsx from "clsx";

export default function ServicesSlider() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [currentSlide, setCurrentSlide] = useState(0);

  // Debug: Log services and translations
  useEffect(() => {
    console.log("Services data:", services);
    console.log("Services count:", services.length);
    console.log("Current locale:", locale);
  }, [locale]);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    rtl: isRTL,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Autoplay logic using KeenSlider's event system
  useEffect(() => {
    if (!slider.current) return;
    const sliderInstance = slider.current;

    let timeout: NodeJS.Timeout | null = null;
    let mouseOver = false;

    function clearNextTimeout() {
      if (timeout) clearTimeout(timeout);
    }

    function nextTimeout() {
      clearNextTimeout();
      if (mouseOver) return;
      timeout = setTimeout(() => {
        sliderInstance.next();
      }, 4000);
    }

    sliderInstance.on("created", () => {
      sliderInstance.container.addEventListener("mouseenter", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      sliderInstance.container.addEventListener("mouseleave", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    sliderInstance.on("dragStarted", clearNextTimeout);
    sliderInstance.on("animationEnded", nextTimeout);
    sliderInstance.on("updated", nextTimeout);

    return () => {
      clearNextTimeout();
      sliderInstance.container.removeEventListener("mouseenter", () => {});
      sliderInstance.container.removeEventListener("mouseleave", () => {});
    };
  }, [slider]);

  const dotsCount = slider.current
    ? slider.current.track.details.maxIdx + 1
    : services.length;

  return (
    <Section
      title={t("title")}
      className="bg-muted/30"
      titleAlign="center"
    >
      <div dir={isRTL ? "rtl" : "ltr"} className="relative">
        
        {/* Slider container */}
        <div ref={sliderRef} className="keen-slider py-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-card rounded-2xl p-6 shadow-md flex flex-col justify-between"
            >
              <div className="mb-4">
                <div className="mb-3 inline-block p-3 rounded-xl bg-primary/10">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {t(`${service.titleKey}`) || service.titleKey}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`${service.descriptionKey}`) || service.descriptionKey}
                </p>
              </div>

              <Button variant="outline" className="mt-4 self-start">
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {t("readMore") || "Read More"}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={clsx(
                "w-3 h-3 rounded-full transition-colors",
                currentSlide === idx
                  ? "bg-primary"
                  : "bg-muted-foreground/40 hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
