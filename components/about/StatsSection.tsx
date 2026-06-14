"use client"

import { motion } from "framer-motion"
import { MapPin, PackageCheck, Star, Users } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const stats = [
  { value: "50K+", titleKey: "about.stats.customersTitle", subKey: "about.stats.customersSub", icon: Users },
  { value: "500+", titleKey: "about.stats.productsTitle", subKey: "about.stats.productsSub", icon: PackageCheck },
  { value: "58", titleKey: "about.stats.wilayasTitle", subKey: "about.stats.wilayasSub", icon: MapPin },
  { value: "4.8/5", titleKey: "about.stats.ratingTitle", subKey: "about.stats.ratingSub", icon: Star },
]

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map(({ value, titleKey, subKey, icon: Icon }) => (
          <motion.div
            key={titleKey}
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            className="rounded-3xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
          >
            <Icon className="h-7 w-7 text-hoco-green" />
            <p className="mt-5 text-4xl font-black text-hoco-green">{value}</p>
            <h3 className="mt-3 font-black text-foreground">{t(titleKey)}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t(subKey)}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
