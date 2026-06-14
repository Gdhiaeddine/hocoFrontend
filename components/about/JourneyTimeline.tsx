"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const items = [
  { yearKey: "about.journey.year1", titleKey: "about.journey.title1", textKey: "about.journey.text1" },
  { yearKey: "about.journey.year2", titleKey: "about.journey.title2", textKey: "about.journey.text2" },
  { yearKey: "about.journey.year3", titleKey: "about.journey.title3", textKey: "about.journey.text3" },
  { yearKey: "about.journey.year4", titleKey: "about.journey.title4", textKey: "about.journey.text4" },
  { yearKey: "about.journey.year5", titleKey: "about.journey.title5", textKey: "about.journey.text5" },
]

export function JourneyTimeline() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
          {t("about.journey.title")}
        </h2>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-12 grid gap-6 lg:grid-cols-5"
        >
          <div className="absolute start-6 top-0 hidden h-full w-0.5 bg-hoco-green/25 max-lg:block" />
          <div className="absolute start-0 end-0 top-8 hidden h-0.5 bg-hoco-green/25 lg:block" />
          {items.map(({ yearKey, titleKey, textKey }) => (
            <motion.article
              key={yearKey}
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="relative ps-16 lg:ps-0 lg:pt-16 lg:flex lg:flex-col lg:h-full"
            >
              <span className="absolute start-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-hoco-green text-white shadow-lg shadow-hoco-green/25 lg:start-1/2 lg:-translate-x-1/2">
                <Rocket className="h-5 w-5" />
              </span>
              <div className="rounded-3xl border border-border bg-white p-5 shadow-sm lg:flex-1 lg:flex lg:flex-col">
                <p className="text-sm font-black text-hoco-green">{t(yearKey)}</p>
                <h3 className="mt-2 font-black text-foreground">{t(titleKey)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground flex-1">{t(textKey)}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
