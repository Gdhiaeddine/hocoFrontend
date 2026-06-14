"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import translations from "@/lib/translations.json"

type Language = "en" | "fr" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("hoco-language") as Language
    let activeLang: Language = "en"
    if (saved === "en" || saved === "fr" || saved === "ar") {
      setLanguageState(saved)
      activeLang = saved
    }
    document.documentElement.dir = activeLang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = activeLang
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("hoco-language", lang)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    if (!mounted) {
      // Fallback during server rendering
      return key
    }
    
    const keys = key.split(".")
    let val: any = translations[language as keyof typeof translations]
    
    for (const k of keys) {
      if (val && typeof val === "object" && k in val) {
        val = val[k as keyof typeof val]
      } else {
        return key
      }
    }
    
    return typeof val === "string" ? val : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
