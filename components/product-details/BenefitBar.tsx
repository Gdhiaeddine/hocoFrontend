"use client"

import { motion } from "framer-motion"
import { CreditCard, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const benefits = [
  {
    titleKey: "trust.deliveryTitle",
    descriptionKey: "trust.deliveryDesc",
    icon: Truck,
  },
  {
    titleKey: "hero.features.qualityDesc",
    descriptionKey: "cart.originalDesc",
    icon: ShieldCheck,
  },
  {
    titleKey: "hero.features.returnsTitle",
    descriptionKey: "hero.features.returnsDesc",
    icon: RotateCcw,
  },
  {
    titleKey: "trust.paymentTitle",
    descriptionKey: "cart.codDesc",
    icon: CreditCard,
  },
]

export function BenefitBar() {
  const { t } = useLanguage()

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-hoco-green-border bg-gradient-to-br from-hoco-mint via-white to-hoco-green-light/70 p-4 shadow-[0_24px_70px_-44px_rgba(0,139,58,0.45)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {benefits.map((benefit) => (
          <div key={benefit.titleKey} className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green text-white shadow-lg shadow-hoco-green/20">
              <benefit.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-black text-foreground">{t(benefit.titleKey)}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(benefit.descriptionKey)}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
