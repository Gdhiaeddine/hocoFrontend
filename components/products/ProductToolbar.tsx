"use client"

import { motion } from "framer-motion"
import { SlidersHorizontal } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

type ProductToolbarProps = {
  onOpenFilters: () => void
  totalCount: number
  showingStart: number
  showingEnd: number
  sortBy: string
  setSortBy: (sort: string) => void
}

export function ProductToolbar({
  onOpenFilters,
  totalCount,
  showingStart,
  showingEnd,
  sortBy,
  setSortBy
}: ProductToolbarProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onOpenFilters}
          className="inline-flex items-center gap-2 rounded-full border border-hoco-green-border bg-hoco-green-light px-4 py-2 text-sm font-black text-hoco-green lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t("toolbar.filters")}
        </button>
        <p className="text-sm font-semibold text-muted-foreground">
          {t("toolbar.showing")} <span className="text-foreground font-black">{showingStart}-{showingEnd}</span> {t("toolbar.of")} <span className="text-foreground font-black">{totalCount}</span> {t("toolbar.results")}
        </p>
      </div>

      <div className="flex flex-col gap-3 xs:flex-row sm:flex-row sm:items-center">
        <label className="flex items-center gap-2 rounded-full border border-border bg-white py-2 pl-4 pr-3 text-sm font-semibold text-muted-foreground">
          {t("toolbar.sortBy")}:
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm font-bold text-foreground outline-none cursor-pointer"
          >
            <option value="Popularity">{t("toolbar.popularity")}</option>
            <option value="LowToHigh">{t("toolbar.lowToHigh")}</option>
            <option value="HighToLow">{t("toolbar.highToLow")}</option>
            <option value="Newest">{t("toolbar.newest")}</option>
          </select>
        </label>
      </div>
    </motion.div>
  )
}
