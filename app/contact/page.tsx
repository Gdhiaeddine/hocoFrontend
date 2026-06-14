"use client"

import Link from "next/link"
import { ChevronRight, MessageCircle } from "lucide-react"
import { ContactCTA } from "@/components/contact/ContactCTA"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { FAQSection } from "@/components/contact/FAQSection"
import { OfficeMap } from "@/components/contact/OfficeMap"
import { useLanguage } from "@/context/LanguageContext"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            {t("cart.breadcrumbHome")}
          </Link>
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          <span className="text-foreground">{t("contact.breadcrumbContact")}</span>
        </div>
      </section>

      <ContactHero />

      <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
          <ContactForm />
          <ContactInfo />
        </div>

        {/* Full-width "Need immediate help?" Card */}
        <div className="mx-auto mt-8 max-w-7xl">
          <div className="rounded-3xl border border-hoco-green-border bg-hoco-green-light p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="text-left rtl:text-right">
              <h3 className="font-heading text-lg font-black text-foreground">{t("contact.immediateHelp")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t("contact.immediateHelpDesc")}</p>
            </div>
            <button className="shrink-0 inline-flex items-center gap-2 rounded-full border border-hoco-green bg-white px-6 py-3 text-sm font-black text-hoco-green transition-colors hover:bg-hoco-green hover:text-white">
              <MessageCircle className="h-4.5 w-4.5" />
              {t("contact.chatNow")}
            </button>
          </div>
        </div>
      </section>

      <OfficeMap />
      <FAQSection />
      <ContactCTA />
    </main>
  )
}
