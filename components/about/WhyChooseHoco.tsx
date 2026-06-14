"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Headphones, PackageCheck, ShieldCheck, Tag, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const features = [
  { titleKey: "about.why.originalTitle", descKey: "about.why.originalDesc", icon: ShieldCheck },
  { titleKey: "about.why.deliveryTitle", descKey: "about.why.deliveryDesc", icon: Truck },
  { titleKey: "about.why.pricingTitle", descKey: "about.why.pricingDesc", icon: Tag },
  { titleKey: "about.why.guaranteeTitle", descKey: "about.why.guaranteeDesc", icon: BadgeCheck },
  { titleKey: "about.why.supportTitle", descKey: "about.why.supportDesc", icon: Headphones },
  { titleKey: "about.why.curatedTitle", descKey: "about.why.curatedDesc", icon: PackageCheck },
]

export function WhyChooseHoco() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-b from-background via-hoco-mint/35 to-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            {t("details.whyChooseHoco")}
          </h2>
        </div>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ titleKey, descKey, icon: Icon }) => (
            <motion.article
              key={titleKey}
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-black text-foreground">{t(titleKey)}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(descKey)}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
