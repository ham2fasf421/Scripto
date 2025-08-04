"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  Code2,
  FileCode2,
  Mail,
} from "lucide-react";
import { socialLinks } from "@/lib/data/links";

const navLinks = [
  { href: "/projects", translationKey: "nav.projects", icon: Code2 },
  { href: "/templates", translationKey: "nav.templates", icon: FileCode2 },
  { href: "/contact", translationKey: "nav.contact", icon: Mail },
];

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="text-3xl font-brand font-extrabold text-accent inline-block"
            >
              SCRIPTO
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.label}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                    >
                      <link.icon className="h-4 w-4" />
                      {t(link.translationKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.resources")}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/blog`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t("footer.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/docs`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t("footer.documentation")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/faq`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t("footer.faq")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/privacy`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {year} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
