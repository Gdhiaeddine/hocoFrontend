"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function OfficeMap() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_24px_70px_-46px_rgba(0,139,58,0.4)] lg:grid-cols-[1fr_360px]">
        <div className="relative min-h-[340px] overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-hoco-mint">
          <div className="absolute left-10 top-16 h-1 w-[80%] rotate-12 rounded-full bg-white/80" />
          <div className="absolute left-0 top-40 h-1 w-[90%] -rotate-6 rounded-full bg-white/80" />
          <div className="absolute left-32 top-0 h-[120%] w-1 rotate-12 rounded-full bg-white/80" />
          <div className="absolute right-40 top-0 h-[120%] w-1 -rotate-12 rounded-full bg-white/80" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-hoco-green text-white shadow-2xl shadow-hoco-green/30">
              <MapPin className="h-8 w-8" />
            </span>
            <span className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-black text-hoco-green shadow-lg">{t("contact.office.location")}</span>
          </div>
        </div>
        <div className="p-7 text-left rtl:text-right">
          <h2 className="font-heading text-2xl font-black text-foreground">{t("contact.office.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{t("contact.office.desc")}</p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-hoco-green px-6 py-3 text-sm font-black text-white shadow-lg shadow-hoco-green/25 transition-colors hover:bg-hoco-green-dark">
            <Navigation className="h-4 w-4" />
            {t("contact.office.directions")}
          </button>
        </div>
      </motion.div>
    </section>
  )
}
