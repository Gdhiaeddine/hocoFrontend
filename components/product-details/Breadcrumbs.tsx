"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

type BreadcrumbsProps = {
  category: string
  name: string
}

export function Breadcrumbs({ category, name }: BreadcrumbsProps) {
  const { t } = useLanguage()

  const categoryKeys: Record<string, string> = {
    "Chargers": "categories.chargers",
    "Power Banks": "categories.powerBanks",
    "Cables": "categories.cables",
    "Earbuds": "categories.audio",
    "Car Accessories": "categories.car",
    "Cases": "categories.protection",
  }

  const displayCategory = categoryKeys[category] ? t(categoryKeys[category]) : category

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
        <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
          {t("cart.breadcrumbHome")}
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0 rtl:rotate-180" />
        <Link href={`/products?category=${encodeURIComponent(category)}`} className="text-hoco-green transition-colors hover:text-hoco-green-dark">
          {displayCategory}
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0 rtl:rotate-180" />
        <span className="truncate text-foreground">{name}</span>
      </div>
    </section>
  )
}
