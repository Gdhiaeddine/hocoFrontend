"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CreditCard, RotateCcw, ShieldCheck, Truck, Mail } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const trust = [
  { titleKey: "about.trust.deliveryTitle", subKey: "about.trust.deliverySub", icon: Truck },
  { titleKey: "about.trust.originalTitle", subKey: "about.trust.originalSub", icon: ShieldCheck },
  { titleKey: "about.trust.returnsTitle", subKey: "about.trust.returnsSub", icon: RotateCcw },
  { titleKey: "about.trust.paymentTitle", subKey: "about.trust.paymentSub", icon: CreditCard },
]

export function TrustBar() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-hoco-green-border bg-hoco-mint p-4 sm:grid-cols-2 lg:grid-cols-4">
        {trust.map(({ titleKey, subKey, icon: Icon }) => (
          <div key={titleKey} className="rounded-2xl bg-white/80 p-5 shadow-sm">
            <Icon className="h-6 w-6 text-hoco-green" />
            <h3 className="mt-4 font-black text-foreground">{t(titleKey)}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t(subKey)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function AboutCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-hoco-green-border bg-gradient-to-br from-hoco-mint via-white to-hoco-green-light p-6 shadow-[0_24px_80px_-46px_rgba(0,139,58,0.45)] lg:grid-cols-[26%_1fr_auto] lg:p-8"
      >
        <div className="relative h-40">
          <div className="absolute start-8 top-4 h-28 w-20 rotate-[-8deg] overflow-hidden flex items-center justify-center p-1">
            <Image src="/hero/phonecase.png" alt="Phonecase" width={80} height={100} className="h-auto w-full object-contain drop-shadow-lg" />
          </div>
          <div className="absolute start-24 top-8 h-24 w-24 overflow-hidden flex items-center justify-center p-2">
            <Image src="/hero/airpods.png" alt="Airpods" width={80} height={80} className="h-auto w-full object-contain drop-shadow-lg" />
          </div>
          <div className="absolute bottom-2 start-28 h-14 w-32 rounded-full border-[8px] border-hoco-green/20" />
        </div>
        <div className="text-center lg:text-left rtl:lg:text-right">
          <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl">
            {t("about.cta.title")}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            {t("about.cta.text")}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/products" className="group inline-flex items-center justify-center gap-2 rounded-full bg-hoco-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-hoco-green/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-hoco-green/40">
            {t("about.cta.explore")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
            <Mail className="h-4.5 w-4.5" />
            {t("about.cta.contact")}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
