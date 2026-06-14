"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BadgePercent, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const particles = [
  { left: "9%", top: "18%", size: "h-2 w-2", delay: 0 },
  { left: "32%", top: "78%", size: "h-1.5 w-1.5", delay: 0.4 },
  { left: "61%", top: "16%", size: "h-2.5 w-2.5", delay: 0.8 },
  { left: "84%", top: "67%", size: "h-1.5 w-1.5", delay: 1.2 },
  { left: "93%", top: "28%", size: "h-2 w-2", delay: 1.6 },
]

export function PromoBanner() {
  const { t, language } = useLanguage()

  return (
    <section className="bg-background py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-hoco-green via-hoco-green-dark to-hoco-green-deep px-6 py-10 text-white shadow-[0_32px_90px_-38px_rgba(0,139,58,0.75)] sm:px-10 lg:px-14"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_38%,rgba(255,255,255,0.1)_68%,transparent)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          {particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className={`absolute rounded-full bg-white/70 ${particle.size}`}
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -18, 0], opacity: [0.25, 0.9, 0.25], scale: [1, 1.35, 1] }}
              transition={{
                duration: 4,
                delay: particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative grid items-center gap-10 min-[1150px]:grid-cols-[45%_55%]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                {t("promo.badge")}
              </span>
              <h2 className="mt-5 font-heading text-4xl font-black tracking-tight sm:text-5xl min-[1150px]:text-6xl">
                {t("promo.title")}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/82 sm:text-lg">
                {t("promo.description")}
              </p>
              <Link href="/products?tag=offers" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-hoco-green shadow-xl shadow-hoco-green-deep/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl">
                {t("promo.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </Link>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[360px]">
              <div className="absolute right-2 top-6 z-20 flex h-28 w-28 rotate-6 items-center justify-center rounded-full border-4 border-white/45 bg-white text-center text-[11px] leading-3 font-black text-hoco-green shadow-2xl sm:right-10 sm:h-36 sm:w-36 sm:text-lg sm:leading-5">
                {language === "fr" ? (
                  <>
                    JUSQU'À
                    <br />
                    -30%
                  </>
                ) : language === "ar" ? (
                  <>
                    خصم يصل
                    <br />
                    إلى 30%
                  </>
                ) : (
                  <>
                    UP TO
                    <br />
                    30% OFF
                  </>
                )}
              </div>
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-3, 2, -3] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute bottom-2 left-0 w-44 sm:left-8 sm:w-56"
              >
                <Image src="/products/power-bank.png" alt="HOCO power bank offer" width={260} height={260} className="drop-shadow-2xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 14, 0], rotate: [5, -2, 5] }}
                transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute left-28 top-2 w-40 sm:left-56 sm:w-52"
              >
                <Image src="/products/earbuds.png" alt="HOCO earbuds offer" width={240} height={240} className="drop-shadow-2xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [2, -4, 2] }}
                transition={{ duration: 6.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-40 sm:right-20 sm:w-52"
              >
                <Image src="/products/wall-charger.png" alt="HOCO fast charger offer" width={240} height={240} className="drop-shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
