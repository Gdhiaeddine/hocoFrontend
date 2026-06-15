"use client"

import Link from "next/link"
import { Camera, Globe, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const socials = [Camera, MessageCircle, Globe, Send]

export function Footer() {
  const { t } = useLanguage()

  const footerSections = [
    {
      title: t("footer.shop"),
      links: [
        { label: t("categories.chargers"), href: "/products?category=Chargers" },
        { label: t("categories.audio"), href: "/products?category=Earbuds" },
        { label: t("categories.cables"), href: "/products?category=Cables" },
        { label: t("categories.powerBanks"), href: "/products?category=Power%20Banks" },
        { label: t("categories.protection"), href: "/products?category=Cases" },
        { label: t("categories.car"), href: "/products?category=Car%20Accessories" },
        { label: t("footer.allProducts"), href: "/products" },
      ],
    },
    {
      title: t("footer.customerService"),
      links: [
        { label: t("footer.trackOrder"), href: "/track-order" },
        { label: t("footer.returnsExchanges"), href: "/returns" },
        { label: t("footer.shippingInfo"), href: "/shipping" },
        { label: t("footer.warranty"), href: "/warranty" },
        { label: t("footer.faqs"), href: "/faq" },
        { label: t("footer.contactUs"), href: "/contact" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.aboutUs"), href: "/about" },
        { label: t("footer.ourStory"), href: "/our-story" },
        { label: t("footer.terms"), href: "/terms" },
        { label: t("footer.privacy"), href: "/privacy" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center text-3xl font-black tracking-tight text-white">
              hoco<span className="text-hoco-green">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
              {t("hero.description")}
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/72">
              <p className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-hoco-green" />
                {t("footer.delivery")}
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-hoco-green" />
                {t("footer.original")}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-colors hover:border-hoco-green hover:bg-hoco-green hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-black uppercase tracking-wide text-white">{section.title}</h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-white/62 transition-colors hover:text-hoco-green">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wide text-white">{t("footer.contactUs")}</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/68">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-hoco-green" />
                <span dir="ltr">+213 550 123 456</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-hoco-green" />
                <span dir="ltr">support@hoco.dz</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hoco-green" />
                {t("footer.algiersAlgeria")}
              </li>
              <li>{t("footer.workingHours")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/58 text-center sm:text-left">
          <p>{t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
