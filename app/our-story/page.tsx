"use client"

import Link from "next/link"
import { ChevronRight, Heart, Award, ShieldAlert, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function OurStoryPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            {t("ourStoryPage.breadcrumbHome")}
          </Link>
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          <span className="text-foreground">{t("ourStoryPage.breadcrumbOurStory")}</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">{t("ourStoryPage.journey")}</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("ourStoryPage.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base mx-auto lg:mx-0">
            {t("ourStoryPage.desc")}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {/* Card Layout */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-6">
            <h3 className="flex items-center gap-2.5 font-heading text-xl font-black text-foreground sm:text-2xl">
              <Sparkles className="h-5 w-5 text-hoco-green shrink-0" />
              {t("ourStoryPage.beganTitle")}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {t("ourStoryPage.beganText1")}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              {t("ourStoryPage.beganText2")}
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-base font-black text-foreground sm:text-lg">{t("ourStoryPage.passionTitle")}</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t("ourStoryPage.passionText")}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-base font-black text-foreground sm:text-lg">{t("ourStoryPage.authenticityTitle")}</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t("ourStoryPage.authenticityText")}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-muted-foreground">
                <ShieldAlert className="h-6 w-6 text-hoco-green" />
              </div>
              <h4 className="mt-5 text-base font-black text-foreground sm:text-lg">{t("ourStoryPage.trustTitle")}</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t("ourStoryPage.trustText")}
              </p>
            </div>
          </div>

          {/* Forward looking */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-6">
            <h3 className="font-heading text-xl font-black text-foreground sm:text-2xl">{t("ourStoryPage.visionTitle")}</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {t("ourStoryPage.visionText1")}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              {t("ourStoryPage.visionText2")}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
