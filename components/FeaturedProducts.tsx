"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { ProductCard } from "@/components/products/ProductCard"
import { products } from "@/components/products/ProductData"
import { useLanguage } from "@/context/LanguageContext"

export function FeaturedProducts() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-hoco-mint/45 to-background py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-hoco-green/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-hoco-green" />
              {t("products.curated")}
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("products.title")}
            </h2>
          </motion.div>

          <motion.a
            href="/products"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-hoco-green-border bg-white px-6 py-3 text-sm font-semibold text-hoco-green shadow-sm transition-all hover:bg-hoco-green hover:text-white hover:shadow-lg hover:shadow-hoco-green/20"
          >
            {t("products.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </motion.a>
        </div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
