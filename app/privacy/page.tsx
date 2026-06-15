"use client"

import Link from "next/link"
import { ChevronRight, ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            {t("privacyPage.breadcrumbHome")}
          </Link>
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          <span className="text-foreground">{t("privacyPage.breadcrumbPrivacy")}</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">{t("privacyPage.dataProtection")}</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("privacyPage.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base mx-auto lg:mx-0">
            {t("privacyPage.desc")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] items-start">
          {/* Left Sticky Sidebar Navigation */}
          <aside className="hidden lg:sticky lg:top-24 lg:block rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-foreground">{t("privacyPage.sections")}</h3>
            <ul className="mt-4 space-y-3 font-semibold text-xs text-muted-foreground">
              <li>
                <a href="#storage" className="block py-1 hover:text-hoco-green transition-colors">{t("privacyPage.sec1TitleLink")}</a>
              </li>
              <li>
                <a href="#sharing" className="block py-1 hover:text-hoco-green transition-colors">{t("privacyPage.sec2TitleLink")}</a>
              </li>
              <li>
                <a href="#usage" className="block py-1 hover:text-hoco-green transition-colors">{t("privacyPage.sec3TitleLink")}</a>
              </li>
            </ul>
          </aside>

          {/* Right Main Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="storage" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <Lock className="h-5 w-5 text-hoco-green" />
                {t("privacyPage.sec1Title")}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("privacyPage.sec1Text")}
              </p>
            </div>

            {/* Section 2 */}
            <div id="sharing" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <EyeOff className="h-5 w-5 text-hoco-green" />
                {t("privacyPage.sec2Title")}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("privacyPage.sec2Text")}
              </p>
            </div>

            {/* Section 3 */}
            <div id="usage" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-5">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <UserCheck className="h-5 w-5 text-hoco-green" />
                {t("privacyPage.sec3Title")}
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground leading-7">
                <li className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-hoco-green mt-0.5" />
                  <div>
                    <strong className="text-foreground">{t("privacyPage.sec3Text1")}</strong> {t("privacyPage.sec3Text1Desc")}
                  </div>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-hoco-green mt-0.5" />
                  <div>
                    <strong className="text-foreground">{t("privacyPage.sec3Text2")}</strong> {t("privacyPage.sec3Text2Desc")}
                  </div>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-hoco-green mt-0.5" />
                  <div>
                    <strong className="text-foreground">{t("privacyPage.sec3Text3")}</strong> {t("privacyPage.sec3Text3Desc")}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
