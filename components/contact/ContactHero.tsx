"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Headphones, Mail, MessageCircle, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const trustCards = [
  { icon: Headphones, titleKey: "contact.hero.supportTitle", textKey: "contact.hero.supportSub" },
  { icon: Truck, titleKey: "contact.hero.responseTitle", textKey: "contact.hero.responseSub" },
  { icon: ShieldCheck, titleKey: "contact.hero.serviceTitle", textKey: "contact.hero.serviceSub" },
]

const products = [
  { src: "/products/wall-charger.png", alt: "HOCO charger", className: "left-[12%] top-[16%] w-28 sm:w-40", delay: 0 },
  { src: "/products/earbuds.png", alt: "HOCO earbuds", className: "left-[38%] top-[4%] w-28 sm:w-40", delay: 0.2 },
  { src: "/products/power-bank.png", alt: "HOCO power bank", className: "bottom-[10%] left-[18%] w-36 sm:w-48", delay: 0.4 },
  { src: "/products/car-charger.png", alt: "HOCO car charger", className: "right-[14%] top-[26%] w-24 sm:w-32", delay: 0.6 },
  { src: "/products/cable.png", alt: "HOCO cable", className: "bottom-[18%] right-[20%] w-28 sm:w-40", delay: 0.8 },
]

const floatingIcons = [
  { icon: MessageCircle, className: "left-2 top-8", delay: 0 },
  { icon: Phone, className: "right-4 top-24", delay: 0.4 },
  { icon: Mail, className: "bottom-6 left-14", delay: 0.8 },
]

export function ContactHero() {
  const { t } = useLanguage()

  const highlightText = (text: string) => {
    const targets = ["Help You", "Vous Aider", "لمساعدتك"]
    for (const target of targets) {
      const index = text.indexOf(target)
      if (index !== -1) {
        const before = text.substring(0, index)
        const match = text.substring(index, index + target.length)
        const after = text.substring(index + target.length)
        return (
          <>
            {before}
            <br className="hidden sm:inline" />
            <span className="text-hoco-green">{match}</span>
            {after}
          </>
        )
      }
    }
    return text
  }

  return (
    <section className="px-4 pb-14 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] border border-hoco-green-border/70 bg-gradient-to-br from-white via-hoco-mint to-hoco-green-light/70 px-6 py-10 shadow-[0_32px_100px_-56px_rgba(0,139,58,0.55)] sm:px-10 lg:grid-cols-[46%_54%] lg:px-14 lg:py-16">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          animate="show"
          className="rtl-hero-text text-center lg:text-left rtl:lg:text-right"
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 rounded-full border border-hoco-green-border bg-white/80 px-4 py-1.5 text-xs font-black tracking-wide text-hoco-green shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            {t("contact.hero.badge")}
          </motion.span>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-6 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {highlightText(t("contact.hero.title"))}
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
            {t("contact.hero.desc")}
          </motion.p>
          <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustCards.map((card) => (
              <motion.div key={card.titleKey} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="rounded-2xl border border-border bg-white/80 p-4 text-left shadow-sm backdrop-blur-md rtl:text-right">
                <card.icon className="h-5 w-5 text-hoco-green" />
                <p className="mt-3 text-sm font-black text-foreground">{t(card.titleKey)}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t(card.textKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto h-[340px] w-full max-w-[600px] sm:h-[420px]">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hoco-green-border/60 sm:h-[27rem] sm:w-[27rem]" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hoco-green-border/40 sm:h-80 sm:w-80" />
          {products.map((item) => (
            <motion.div key={item.alt} className={`absolute ${item.className}`} animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }} transition={{ duration: 5.5, delay: item.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
              <Image src={item.src} alt={item.alt} width={220} height={220} className="h-auto w-full object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.18)]" />
            </motion.div>
          ))}
          {floatingIcons.map((item) => (
            <motion.div key={item.className} animate={{ y: [0, -9, 0] }} transition={{ duration: 4, delay: item.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-full border border-hoco-green-border bg-white/85 text-hoco-green shadow-xl backdrop-blur-md ${item.className}`}>
              <item.icon className="h-5 w-5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
