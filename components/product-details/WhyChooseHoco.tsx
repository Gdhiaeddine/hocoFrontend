"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function WhyChooseHoco() {
  const { t } = useLanguage()

  const stats = [
    ["100%", t("details.why1Title"), t("details.why1Sub")],
    ["24/7", t("details.why2Title"), t("details.why2Sub")],
    ["7 Days", t("details.why3Title"), t("details.why3Sub")],
    ["+50K", t("details.why4Title"), t("details.why4Sub")],
  ]

  return (
    <section className="bg-background px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-hoco-green-border bg-gradient-to-br from-hoco-mint via-white to-hoco-green-light/70 p-6 shadow-[0_24px_70px_-44px_rgba(0,139,58,0.45)] lg:grid-cols-[34%_66%] lg:p-8"
      >
        <div className="flex gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-hoco-green text-white shadow-lg shadow-hoco-green/25">
            <ShieldCheck className="h-7 w-7" />
          </span>
          <div>
            <h2 className="font-heading text-3xl font-black text-foreground">{t("details.whyChooseHoco")}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{t("details.whyChooseDesc")}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, title, subtitle]) => (
            <div key={value} className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur-md">
              <p className="text-3xl font-black text-hoco-green">{value}</p>
              <p className="mt-3 text-sm font-black text-foreground">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
