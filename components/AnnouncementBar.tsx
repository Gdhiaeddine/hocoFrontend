"use client"

import { Phone, Truck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function AnnouncementBar() {
  const { language, setLanguage } = useLanguage()

  const langLabels: Record<string, string> = {
    ar: "توصيل سريع إلى جميع الولايات الجزائرية!",
    fr: "Livraison rapide sur toutes les wilayas d'Algérie !",
    en: "Fast delivery across all wilayas of Algeria!"
  }

  return (
    <div className="border-b border-border bg-white select-none">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-4 px-4 text-xs font-semibold text-muted-foreground sm:justify-between sm:px-6 lg:px-8">
        <p className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-hoco-green animate-pulse" />
          <span className="hidden sm:inline transition-all duration-300">{langLabels[language] || langLabels.en}</span>
          <span className="sm:hidden">
            {language === "ar" ? "توصيل سريع بالجزائر" : language === "en" ? "Fast delivery in Algeria" : "Livraison rapide en Algérie"}
          </span>
        </p>
        <div className="hidden items-center gap-3 sm:flex">
          <span>{language === "ar" ? "دعم 24/7" : "24/7 Support"}</span>
          <span className="flex items-center gap-1 text-foreground">
            <Phone className="h-3.5 w-3.5 text-hoco-green" />
            +213 550 123 456
          </span>
          <span className="h-4 w-px bg-zinc-200 mx-1" />
          <div className="flex items-center gap-1">
            {(["ar", "fr", "en"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase transition-all cursor-pointer ${
                  language === lang 
                    ? "bg-hoco-green text-white shadow-sm shadow-hoco-green/20" 
                    : "text-muted-foreground hover:bg-zinc-100 hover:text-hoco-green"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
