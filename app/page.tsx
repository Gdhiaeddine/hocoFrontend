import { Hero } from "@/components/Hero"
import { Categories } from "@/components/Categories"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { PromoBanner } from "@/components/PromoBanner"
import { TrustSection } from "@/components/TrustSection"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <TrustSection />
    </main>
  )
}
