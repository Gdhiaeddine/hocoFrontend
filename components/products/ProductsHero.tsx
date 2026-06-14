"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles } from "lucide-react"
import { productHeroItems } from "./ProductData"
import { useLanguage } from "@/context/LanguageContext"

export function ProductsHero() {
  const { t } = useLanguage()

  return (
    <section className="bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-hoco-green-border/60 bg-gradient-to-br from-hoco-mint via-white to-hoco-green-light/70 shadow-[0_28px_90px_-46px_rgba(0,139,58,0.55)]">
        <div className="relative grid min-h-[420px] items-center gap-8 px-6 py-10 sm:px-10 min-[1150px]:grid-cols-[44%_56%] min-[1150px]:px-14">
          <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-hoco-green/8 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-hoco-green/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rtl-hero-text relative z-10 text-center min-[1150px]:text-left"
          >
            <nav className="rtl-hero-actions flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground min-[1150px]:justify-start">
              <Link href="/" className="transition-colors hover:text-hoco-green">
                {t("cart.breadcrumbHome")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-hoco-green">{t("cart.breadcrumbShop")}</span>
            </nav>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-hoco-green-border bg-white/75 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-hoco-green shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              {t("hero.badge")}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl min-[1150px]:text-6xl">
              {t("footer.allProducts")}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg min-[1150px]:mx-0">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto h-[310px] w-full max-w-[620px] sm:h-[380px]"
          >
            <div className="products-hero-ring products-hero-ring-one" />
            <div className="products-hero-ring products-hero-ring-two" />
            {[
              { left: "18%", top: "15%" },
              { left: "68%", top: "10%" },
              { left: "82%", top: "72%" },
              { left: "42%", top: "82%" },
            ].map((dot, index) => (
              <motion.span
                key={`${dot.left}-${dot.top}`}
                className="absolute h-2 w-2 rounded-full bg-hoco-green/35"
                style={dot}
                animate={{ y: [0, -14, 0], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 4 + index * 0.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            ))}
            {productHeroItems.map((item) => (
              <motion.div
                key={item.alt}
                className={`absolute ${item.className}`}
                animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 5.5, delay: item.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={220}
                  height={220}
                  className="h-auto w-full object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.18)]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
