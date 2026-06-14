"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Eye, Target } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function WhoWeAre() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-b from-background via-hoco-mint/35 to-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
          <p className="text-sm font-black uppercase tracking-wide text-hoco-green">{t("about.who.badge")}</p>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("about.who.title")}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>{t("about.who.p1")}</p>
            <p>{t("about.who.p2")}</p>
            <p>{t("about.who.p3")}</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-hoco-mint to-zinc-100">
              <div className="grid grid-cols-3 gap-5 items-end">
                <div className="relative h-36 w-22 overflow-hidden flex items-center justify-center p-1">
                  <Image src="/hero/phonecase.png" alt="Phonecase" width={110} height={150} className="h-auto w-full object-contain drop-shadow-lg" />
                </div>
                <div className="relative h-44 w-32 overflow-hidden flex items-center justify-center p-2">
                  <Image src="/products/power-bank.png" alt="Power Bank" width={150} height={180} className="h-auto w-full object-contain drop-shadow-xl" />
                </div>
                <div className="relative h-36 w-24 overflow-hidden flex items-center justify-center p-1">
                  <Image src="/products/wall-charger.png" alt="Wall Charger" width={120} height={150} className="h-auto w-full object-contain drop-shadow-lg" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm font-black text-foreground">{t("about.showcase")}</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-4 shadow-sm">
            <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-hoco-mint p-2">
              <div className="relative h-24 w-24 overflow-hidden flex items-center justify-center p-1">
                <Image src="/hero/airpods.png" alt="Airpods" width={80} height={80} className="h-auto w-full object-contain drop-shadow-lg" />
              </div>
            </div>
            <p className="mt-3 text-sm font-black text-foreground">{t("about.audio")}</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-4 shadow-sm">
            <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-hoco-mint to-white p-2">
              <div className="relative h-24 w-20 overflow-hidden flex items-center justify-center p-1">
                <Image src="/hero/CarChargeur.png" alt="Car Charger" width={80} height={80} className="h-auto w-full object-contain drop-shadow-lg" />
              </div>
            </div>
            <p className="mt-3 text-sm font-black text-foreground">{t("about.charging")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const cards = [
  {
    icon: Target,
    titleKey: "about.mission.title",
    textKey: "about.mission.text",
  },
  {
    icon: Eye,
    titleKey: "about.vision.title",
    textKey: "about.vision.text",
  },
]

export function MissionVision() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        {cards.map((card) => (
          <motion.article
            key={card.titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-[2rem] border border-hoco-green-border bg-gradient-to-br from-hoco-mint via-white to-hoco-green-light/70 p-8 shadow-[0_24px_70px_-46px_rgba(0,139,58,0.45)]"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-hoco-green text-white shadow-lg shadow-hoco-green/25">
              <card.icon className="h-7 w-7" />
            </span>
            <h2 className="mt-7 font-heading text-3xl font-black text-foreground">{t(card.titleKey)}</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{t(card.textKey)}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
