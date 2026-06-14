"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export type CategoryCardData = {
  title: string
  description: string
  itemCount: string
  image: string
  icon: LucideIcon
}

type CategoryCardProps = {
  category: CategoryCardData
}

export function CategoryCard({ category: cat }: CategoryCardProps) {
  const { t } = useLanguage()

  const titleTranslationKeys: Record<string, string> = {
    "Chargers": "categories.chargers",
    "Power Banks": "categories.powerBanks",
    "Cables": "categories.cables",
    "Audio": "categories.audio",
    "Car Accessories": "categories.car",
    "Protection": "categories.protection",
  }

  const descTranslationKeys: Record<string, string> = {
    "Chargers": "categories.chargersDesc",
    "Power Banks": "categories.powerBanksDesc",
    "Cables": "categories.cablesDesc",
    "Audio": "categories.audioDesc",
    "Car Accessories": "categories.carDesc",
    "Protection": "categories.protectionDesc",
  }

  const displayTitle = titleTranslationKeys[cat.title] ? t(titleTranslationKeys[cat.title]) : cat.title
  const displayDescription = descTranslationKeys[cat.title] ? t(descTranslationKeys[cat.title]) : cat.description

  const categoryUrlMap: Record<string, string> = {
    "Chargers": "Chargers",
    "Power Banks": "Power Banks",
    "Cables": "Cables",
    "Audio": "Earbuds",
    "Car Accessories": "Car Accessories",
    "Protection": "Cases"
  }
  const targetCategory = categoryUrlMap[cat.title] || cat.title;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
      }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
    >
      <Link
        href={`/products?category=${encodeURIComponent(targetCategory)}`}
        className="flex items-center gap-5 p-5 w-full h-full"
      >
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-muted">
          <Image
            src={cat.image || "/placeholder.svg"}
            alt={`HOCO ${displayTitle}`}
            width={112}
            height={112}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-hoco-green/10 text-hoco-green">
            <cat.icon className="h-4 w-4" />
          </span>
          <h3 className="mt-3 text-lg font-bold text-foreground">{displayTitle}</h3>
          <p className="text-sm text-muted-foreground">{displayDescription}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">{cat.itemCount}</span>
            <ArrowRight className="h-3.5 w-3.5 text-hoco-green opacity-0 transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:opacity-100 rtl:rotate-180" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
