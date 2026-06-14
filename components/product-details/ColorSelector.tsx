"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const colors = [
  { name: "White", className: "bg-white" },
  { name: "Black", className: "bg-zinc-950" },
]

export type ColorSelectorProps = {
  selectedColor: string
  onChange: (color: string) => void
}

export function ColorSelector({ selectedColor, onChange }: ColorSelectorProps) {
  const { t } = useLanguage()

  const getTranslatedColor = (color: string) => {
    if (color === "White") return t("filters.colorWhite")
    if (color === "Black") return t("filters.colorBlack")
    return color
  }

  return (
    <div>
      <p className="text-sm font-black text-foreground">
        {t("cart.color")}: <span className="text-hoco-green">{getTranslatedColor(selectedColor)}</span>
      </p>
      <div className="mt-3 flex items-center gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            aria-label={`Select ${getTranslatedColor(color.name)}`}
            onClick={() => onChange(color.name)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-transform hover:scale-110 ${
              selectedColor === color.name ? "border-hoco-green ring-4 ring-hoco-green/10" : "border-border"
            } ${color.className}`}
          >
            {selectedColor === color.name && <Check className={`h-4 w-4 ${color.name === "White" ? "text-hoco-green" : "text-white"}`} />}
          </button>
        ))}
      </div>
    </div>
  )
}
