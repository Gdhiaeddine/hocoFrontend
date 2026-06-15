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
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs font-semibold text-muted-foreground sm:px-6 lg:px-8">
        <p className="flex items-center gap-1.5 min-w-0">
          <Truck className="h-4 w-4 text-hoco-green animate-pulse shrink-0" />
          <span className="hidden sm:inline transition-all duration-300 truncate">{langLabels[language] || langLabels.en}</span>
          <span className="sm:hidden text-[11px] transition-all duration-300 truncate">
            {language === "ar" ? "توصيل سريع بالجزائر" : language === "en" ? "Fast delivery in Algeria" : "Livraison rapide"}
          </span>
        </p>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden items-center gap-3 sm:flex">
            <span>{language === "ar" ? "دعم 24/7" : "24/7 Support"}</span>
            <span className="flex items-center gap-1 text-foreground">
              <Phone className="h-3.5 w-3.5 text-hoco-green" />
              <span dir="ltr">+213 550 123 456</span>
            </span>
          </div>
          <span className="hidden h-4 w-px bg-zinc-200 mx-1 sm:block" />
          <div className="flex items-center gap-0.5 sm:gap-1">
            {(["ar", "fr", "en"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-black tracking-wide uppercase transition-all cursor-pointer ${
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
