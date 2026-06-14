"use client"

import { motion } from "framer-motion"
import { Headphones, LockKeyhole, ShieldCheck, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const benefits = [
  {
    titleKey: "trust.paymentTitle",
    descriptionKey: "trust.paymentDesc",
    icon: LockKeyhole,
  },
  {
    titleKey: "trust.deliveryTitle",
    descriptionKey: "trust.deliveryDesc",
    icon: Truck,
  },
  {
    titleKey: "trust.warrantyTitle",
    descriptionKey: "trust.warrantyDesc",
    icon: ShieldCheck,
  },
  {
    titleKey: "trust.supportTitle",
    descriptionKey: "trust.supportDesc",
    icon: Headphones,
  },
]

export function TrustSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.titleKey}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              className="group rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green transition-transform group-hover:scale-110">
                <benefit.icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-5 text-base font-black text-foreground">{t(benefit.titleKey)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(benefit.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
