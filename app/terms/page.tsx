"use client"

import Link from "next/link"
import { ChevronRight, FileText, Scale, ShoppingBag, AlertCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            {t("termsPage.breadcrumbHome")}
          </Link>
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          <span className="text-foreground">{t("termsPage.breadcrumbTerms")}</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">{t("termsPage.legalAgreement")}</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("termsPage.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base mx-auto lg:mx-0">
            {t("termsPage.desc")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] items-start">
          {/* Left Sticky Sidebar Navigation */}
          <aside className="hidden lg:sticky lg:top-24 lg:block rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-foreground">{t("termsPage.sections")}</h3>
            <ul className="mt-4 space-y-3 font-semibold text-xs text-muted-foreground">
              <li>
                <a href="#general" className="block py-1 hover:text-hoco-green transition-colors">{t("termsPage.sec1TitleLink")}</a>
              </li>
              <li>
                <a href="#verification" className="block py-1 hover:text-hoco-green transition-colors">{t("termsPage.sec2TitleLink")}</a>
              </li>
              <li>
                <a href="#payment" className="block py-1 hover:text-hoco-green transition-colors">{t("termsPage.sec3TitleLink")}</a>
              </li>
              <li>
                <a href="#shipping" className="block py-1 hover:text-hoco-green transition-colors">{t("termsPage.sec4TitleLink")}</a>
              </li>
            </ul>
          </aside>

          {/* Right Main Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="general" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <Scale className="h-5 w-5 text-hoco-green" />
                {t("termsPage.sec1Title")}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("termsPage.sec1Text")}
              </p>
            </div>

            {/* Section 2 */}
            <div id="verification" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <AlertCircle className="h-5 w-5 text-hoco-green" />
                {t("termsPage.sec2Title")}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("termsPage.sec2Text")}
              </p>
            </div>

            {/* Section 3 */}
            <div id="payment" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <ShoppingBag className="h-5 w-5 text-hoco-green" />
                {t("termsPage.sec3Title")}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("termsPage.sec3Text")}
              </p>
            </div>

            {/* Section 4 */}
            <div id="shipping" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <FileText className="h-5 w-5 text-hoco-green" />
                {t("termsPage.sec4Title")}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("termsPage.sec4Text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
