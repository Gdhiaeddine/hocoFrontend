"use client"

import { motion } from "framer-motion"
import { Headphones, ShieldCheck, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const cards = [
  { titleKey: "about.team.supportTitle", descKey: "about.team.supportDesc", icon: Headphones },
  { titleKey: "about.team.qualityTitle", descKey: "about.team.qualityDesc", icon: ShieldCheck },
  { titleKey: "about.team.logisticsTitle", descKey: "about.team.logisticsDesc", icon: Truck },
]

export function TeamExperience() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-b from-background via-hoco-mint/30 to-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
          {t("about.team.title")}
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map(({ titleKey, descKey, icon: Icon }) => (
            <motion.article
              key={titleKey}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
            >
              <div className="flex min-h-40 items-center justify-center bg-gradient-to-br from-hoco-mint to-zinc-100">
                <span className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white text-hoco-green shadow-xl transition-transform group-hover:scale-110">
                  <Icon className="h-9 w-9" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-foreground">{t(titleKey)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(descKey)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
