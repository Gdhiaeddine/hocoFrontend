"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BatteryCharging, Cable, Car, Headphones, ShieldCheck, Zap } from "lucide-react"
import { CategoryCard, type CategoryCardData } from "./CategoryCard"
import { products } from "@/components/products/ProductData"
import { useLanguage } from "@/context/LanguageContext"

const MotionLink = motion(Link)

const categories: CategoryCardData[] = [
  {
    title: "Chargers",
    description: "Fast & wall chargers",
    itemCount: "48 products",
    image: "/categories/chargers.png",
    icon: Zap,
  },
  {
    title: "Power Banks",
    description: "Portable power on the go",
    itemCount: "32 products",
    image: "/categories/power-banks.png",
    icon: BatteryCharging,
  },
  {
    title: "Cables",
    description: "Durable braided cables",
    itemCount: "56 products",
    image: "/categories/cables.png",
    icon: Cable,
  },
  {
    title: "Audio",
    description: "Earbuds & headphones",
    itemCount: "27 products",
    image: "/categories/audio.png",
    icon: Headphones,
  },
  {
    title: "Car Accessories",
    description: "Chargers & mounts",
    itemCount: "19 products",
    image: "/categories/car-accessories.png",
    icon: Car,
  },
  {
    title: "Protection",
    description: "Cases & screen guards",
    itemCount: "41 products",
    image: "/categories/protection.png",
    icon: ShieldCheck,
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

export function Categories() {
  const { t, language } = useLanguage()

  const categoriesWithCounts = categories.map((cat) => {
    const dbCategoryMap: Record<string, string> = {
      "Chargers": "Chargers",
      "Power Banks": "Power Banks",
      "Cables": "Cables",
      "Audio": "Earbuds",
      "Car Accessories": "Car Accessories",
      "Protection": "Cases",
    }
    const dbCategory = dbCategoryMap[cat.title] || cat.title
    const count = products.filter((p) => p.category === dbCategory).length
    const suffix = count > 1 
      ? (language === "fr" ? "produits" : language === "ar" ? "منتجات" : "products") 
      : (language === "fr" ? "produit" : language === "ar" ? "منتج" : "product")
    return {
      ...cat,
      itemCount: `${count} ${suffix}`,
    }
  })

  return (
    <section id="categories" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-hoco-green" />
              {t("categories.badge")}
            </span>
            <h2 className="mt-4 font-heading text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("categories.title")}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {t("categories.description")}
            </p>
          </motion.div>

          <MotionLink
            href="/products"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-hoco-green px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-hoco-green-dark"
          >
            {t("categories.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </MotionLink>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categoriesWithCounts.map((cat) => (
            <CategoryCard key={cat.title} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
