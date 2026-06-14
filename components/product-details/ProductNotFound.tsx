"use client"

import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

export function ProductNotFound() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 rounded-3xl border border-border bg-white shadow-xl">
        <h1 className="font-heading text-3xl font-black text-foreground">{t("details.notFound")}</h1>
        <p className="mt-3 text-muted-foreground">{t("details.notFoundDesc")}</p>
        <Link href="/products" className="mt-6 inline-flex rounded-full bg-hoco-green px-6 py-3 text-sm font-black text-white hover:bg-hoco-green-dark transition-colors">
          {t("details.backBtn")}
        </Link>
      </div>
    </main>
  )
}
