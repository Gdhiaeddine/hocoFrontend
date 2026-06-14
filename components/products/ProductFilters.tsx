"use client"

import { motion } from "framer-motion"
import { ChevronRight, RefreshCcw, X } from "lucide-react"
import { categories, colors, products } from "./ProductData"
import { useLanguage } from "@/context/LanguageContext"

type ProductFiltersProps = {
  mobile?: boolean
  onClose?: () => void
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
  selectedColor: string | null
  setSelectedColor: (color: string | null) => void
  selectedTag: string | null
  setSelectedTag: (tag: string | null) => void
  minPrice: number
  setMinPrice: (price: number) => void
  maxPrice: number
  setMaxPrice: (price: number) => void
  onReset: () => void
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border pb-6 last:border-b-0 last:pb-0">
      <h3 className="text-sm font-black text-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function ProductFilters({
  mobile = false,
  onClose,
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
  selectedTag,
  setSelectedTag,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onReset
}: ProductFiltersProps) {
  const { t } = useLanguage()

  const categoryKeys: Record<string, string> = {
    "Chargers": "categories.chargers",
    "Power Banks": "categories.powerBanks",
    "Cables": "categories.cables",
    "Earbuds": "categories.audio",
    "Car Accessories": "categories.car",
    "Cases": "categories.protection",
  }

  const collectionTags = [
    { id: "best-seller", nameKey: "filters.bestSellers" },
    { id: "new", nameKey: "filters.newArrivals" },
    { id: "offers", nameKey: "filters.offers" },
  ]

  const colorKeys: Record<string, string> = {
    "black": "filters.colorBlack",
    "white": "filters.colorWhite",
    "light gray": "filters.colorLightGray",
    "dark gray": "filters.colorDarkGray",
    "green": "filters.colorGreen",
    "blue": "filters.colorBlue",
    "purple": "filters.colorPurple",
    "red": "filters.colorRed",
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: mobile ? -24 : -18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-border bg-white p-5 shadow-[0_24px_70px_-42px_rgba(0,139,58,0.35)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-hoco-green">{t("filters.advancedSearch")}</p>
          <h2 className="mt-1 font-heading text-xl font-black text-foreground">{t("filters.title")}</h2>
        </div>
        {mobile && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        <Section title={t("filters.categories")}>
          <div className="space-y-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category.name
              const count = products.filter((p) => p.category === category.name).length
              const displayName = categoryKeys[category.name] ? t(categoryKeys[category.name]) : category.name
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(isActive ? null : category.name)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors ${
                    isActive ? "bg-hoco-green-light text-hoco-green" : "text-foreground/78 hover:bg-hoco-green-light hover:text-hoco-green"
                  }`}
                >
                  <category.icon className="h-4.5 w-4.5 shrink-0" />
                  <span className="flex-1 font-semibold">{displayName}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-muted-foreground shadow-sm">
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Section>

        <Section title={t("filters.collections")}>
          <div className="space-y-2">
            {collectionTags.map((tag) => {
              const isActive = selectedTag === tag.id
              const count = products.filter((p) => {
                if (tag.id === "best-seller") return p.badge === "Best Seller"
                if (tag.id === "new") return p.badge === "New"
                if (tag.id === "offers") return p.badge === "Offer" || p.badge === "Offers" || p.badge === "Sale"
                return false
              }).length
              
              return (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(isActive ? null : tag.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors ${
                    isActive ? "bg-hoco-green-light text-hoco-green font-black" : "text-foreground/78 hover:bg-hoco-green-light hover:text-hoco-green"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full transition-transform ${isActive ? "bg-hoco-green scale-125" : "bg-zinc-300"}`} />
                  <span className="flex-1 font-semibold">{t(tag.nameKey)}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-muted-foreground shadow-sm">
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Section>

        <Section title={t("filters.priceFilter")}>
          <div className="space-y-4">
            {/* The visual range slider bar */}
            <div className="relative h-6 w-full flex items-center">
              {/* Grey track */}
              <div className="absolute inset-x-0 h-1 rounded-full bg-zinc-100" />
              
              {/* Active green track */}
              <div 
                className="absolute h-1 rounded-full bg-hoco-green" 
                style={{
                  left: `${((minPrice - 500) / (7000 - 500)) * 100}%`,
                  right: `${100 - ((maxPrice - 500) / (7000 - 500)) * 100}%`
                }}
              />

              {/* Stacked range sliders */}
              <input
                type="range"
                min="500"
                max="7000"
                step="100"
                value={minPrice}
                onChange={(e) => {
                  const val = Math.min(Number(e.target.value), maxPrice - 100)
                  setMinPrice(val)
                }}
                className="absolute pointer-events-none w-full h-1 bg-transparent appearance-none accent-hoco-green [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-30 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:z-30 cursor-pointer"
              />
              <input
                type="range"
                min="500"
                max="7000"
                step="100"
                value={maxPrice}
                onChange={(e) => {
                  const val = Math.max(Number(e.target.value), minPrice + 100)
                  setMaxPrice(val)
                }}
                className="absolute pointer-events-none w-full h-1 bg-transparent appearance-none accent-hoco-green [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-30 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:relative [&::-moz-range-thumb]:z-30 cursor-pointer"
              />
            </div>

            {/* Price values inputs / displays */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <label className="text-[9px] font-bold text-muted-foreground uppercase">{t("filters.min")}</label>
                <input
                  type="number"
                  min="500"
                  max="7000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 100))}
                  className="mt-0.5 w-full rounded-xl border border-border px-2.5 py-1.5 text-xs font-black text-foreground focus:border-hoco-green focus:outline-none focus:ring-1 focus:ring-hoco-green"
                />
              </div>
              <div>
                <label className="text-[9px] font-bold text-muted-foreground uppercase">{t("filters.max")}</label>
                <input
                  type="number"
                  min="500"
                  max="7000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 100))}
                  className="mt-0.5 w-full rounded-xl border border-border px-2.5 py-1.5 text-xs font-black text-foreground focus:border-hoco-green focus:outline-none focus:ring-1 focus:ring-hoco-green"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section title={t("filters.color")}>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color) => {
              const isSelected = selectedColor === color.name.toLowerCase()
              const colorLabel = colorKeys[color.name.toLowerCase()] ? t(colorKeys[color.name.toLowerCase()]) : color.name
              return (
                <button
                  key={color.name}
                  aria-label={colorLabel}
                  onClick={() => setSelectedColor(isSelected ? null : color.name.toLowerCase())}
                  className={`h-8 w-8 rounded-full border border-border shadow-sm transition-all hover:scale-110 ${color.className} ${
                    isSelected ? "ring-4 ring-hoco-green ring-offset-2 scale-110" : ""
                  }`}
                  title={colorLabel}
                />
              )
            })}
          </div>
        </Section>

        <button 
          onClick={onReset}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-hoco-green px-5 py-3 text-sm font-black text-white shadow-lg shadow-hoco-green/25 transition-colors hover:bg-hoco-green-dark"
        >
          <RefreshCcw className="h-4 w-4" />
          {t("filters.resetBtn")}
        </button>
      </div>
    </motion.aside>
  )
}
