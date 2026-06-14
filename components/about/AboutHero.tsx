"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BadgeCheck, MapPin, Sparkles, Users, Mail } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const products = [
  { src: "/products/earbuds.png", alt: "HOCO earbuds", className: "left-[8%] top-[18%] w-28 sm:w-36", delay: 0 },
  { src: "/products/wall-charger.png", alt: "HOCO charger", className: "left-[36%] top-[4%] w-28 sm:w-40", delay: 0.2 },
  { src: "/products/power-bank.png", alt: "HOCO power bank", className: "bottom-[9%] left-[18%] w-36 sm:w-48", delay: 0.4 },
  { src: "/products/car-charger.png", alt: "HOCO car charger", className: "right-[13%] top-[24%] w-24 sm:w-32", delay: 0.6 },
  { src: "/products/cable.png", alt: "HOCO cable", className: "bottom-[18%] right-[20%] w-28 sm:w-40", delay: 0.8 },
]

const cards = [
  { icon: BadgeCheck, key: "about.hero.card1", className: "left-2 top-4" },
  { icon: MapPin, key: "about.hero.card2", className: "right-0 top-28" },
  { icon: Users, key: "about.hero.card3", className: "bottom-2 left-12" },
]

export function AboutHero() {
  const { t } = useLanguage()

  const highlightText = (text: string) => {
    const targets = ["Original Tech Accessories", "accessoires technologiques originaux", "ملحقات تقنية أصلية"]
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
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] border border-hoco-green-border/70 bg-gradient-to-br from-white via-hoco-mint to-hoco-green-light/70 px-6 py-10 shadow-[0_32px_100px_-56px_rgba(0,139,58,0.55)] sm:px-10 min-[1150px]:grid-cols-[46%_54%] min-[1150px]:px-14 min-[1150px]:py-16">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          animate="show"
          className="rtl-hero-text relative z-10 text-center min-[1150px]:text-left rtl:min-[1150px]:text-right"
        >
          {[
            <span key="badge" className="inline-flex items-center gap-2 rounded-full border border-hoco-green-border bg-white/80 px-4 py-1.5 text-xs font-black tracking-wide text-hoco-green shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              {t("about.hero.badge")}
            </span>,
            <h1 key="title" className="mt-6 font-heading text-4xl font-black leading-[1.15] tracking-tight text-foreground sm:text-5xl min-[1150px]:text-6xl">
              {highlightText(t("about.hero.title"))}
            </h1>,
            <p key="text" className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg min-[1150px]:mx-0">
              {t("about.hero.description")}
            </p>,
            <div key="buttons" className="rtl-hero-actions mt-8 flex flex-col justify-center gap-3 sm:flex-row min-[1150px]:justify-start">
              <Link href="/products" className="group inline-flex items-center justify-center gap-2 rounded-full bg-hoco-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-hoco-green/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-hoco-green/40">
                {t("about.hero.shop")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                <Mail className="h-4.5 w-4.5" />
                {t("about.hero.contact")}
              </Link>
            </div>,
          ].map((child, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}>
              {child}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto h-[360px] w-full max-w-[620px] sm:h-[440px]"
        >
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hoco-green-border/60 sm:h-[27rem] sm:w-[27rem]" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hoco-green-border/40 sm:h-80 sm:w-80" />
          {products.map((item) => (
            <motion.div
              key={item.alt}
              className={`absolute ${item.className}`}
              animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5.5, delay: item.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Image src={item.src} alt={item.alt} width={220} height={220} className="h-auto w-full object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.18)]" />
            </motion.div>
          ))}
          {cards.map((card, index) => (
            <motion.div
              key={card.key}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + index * 0.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className={`absolute z-20 flex max-w-[190px] items-center gap-3 rounded-2xl border border-hoco-green-border/70 bg-white/82 px-3.5 py-3 shadow-xl backdrop-blur-md ${card.className}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
                <card.icon className="h-4.5 w-4.5" />
              </span>
              <p className="text-xs font-black leading-4 text-foreground">{t(card.key)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
