"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AboutCTA, TrustBar } from "@/components/about/AboutCTA"
import { AboutHero } from "@/components/about/AboutHero"
import { JourneyTimeline } from "@/components/about/JourneyTimeline"
import { MissionVision, WhoWeAre } from "@/components/about/MissionVision"
import { StatsSection } from "@/components/about/StatsSection"
import { TeamExperience } from "@/components/about/TeamExperience"
import { WhyChooseHoco } from "@/components/about/WhyChooseHoco"
import { useLanguage } from "@/context/LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            {t("cart.breadcrumbHome")}
          </Link>
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          <span className="text-foreground">{t("about.breadcrumbAbout")}</span>
        </div>
      </section>

      <AboutHero />
      <WhoWeAre />
      <StatsSection />
      <MissionVision />
      <WhyChooseHoco />
      <JourneyTimeline />
      <TeamExperience />
      <TrustBar />
      <AboutCTA />
    </main>
  )
}
