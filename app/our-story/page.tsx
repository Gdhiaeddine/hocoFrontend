import Link from "next/link"
import { ChevronRight, Heart, Award, ShieldAlert, Sparkles } from "lucide-react"

export default function OurStoryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Our Story</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">The HOCO Journey</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Story
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            How we started with a simple vision: bringing authentic, premium, and durable mobile accessories to customers across Algeria.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {/* Card Layout */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-6">
            <h3 className="flex items-center gap-2.5 font-heading text-xl font-black text-foreground sm:text-2xl">
              <Sparkles className="h-5 w-5 text-hoco-green" />
              How It All Began
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              Founded in Algiers, HOCO Algeria was born out of a common frustration. Finding high-quality, authentic phone chargers and accessories in the local market was incredibly difficult. The market was saturated with low-quality counterfeits that broke easily, or worse, damaged expensive smartphones.
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              We realized that Algerian smartphone users deserved better. They needed chargers that didn't overheat, cables that didn't snap, and power banks they could trust during long travels. So, we partnered with **HOCO Global** to import authentic, premium accessories directly and deliver them straight to consumers nationwide.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-base font-black text-foreground sm:text-lg">Passion for Quality</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We handpick and test every accessory. If it doesn't meet our performance standards, we don't sell it.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="mt-5 text-base font-black text-foreground sm:text-lg">Authenticity Checked</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                All HOCO items are imported directly. We guarantee they are 100% genuine original models.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-muted-foreground">
                <ShieldAlert className="h-6 w-6 text-hoco-green" />
              </div>
              <h4 className="mt-5 text-base font-black text-foreground sm:text-lg">Nationwide Trust</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We have verified and delivered orders to thousands of customers across all 58 Algerian Wilayas.
              </p>
            </div>
          </div>

          {/* Forward looking */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-6">
            <h3 className="font-heading text-xl font-black text-foreground sm:text-2xl">Our Vision for the Future</h3>
            <p className="text-sm leading-7 text-muted-foreground">
              Today, HOCO Algeria is more than just an e-commerce store. We are a trusted community of tech-savvy individuals who refuse to compromise on design, price, or quality. As mobile technology advances with faster charging standards (Power Delivery, Quick Charge), we aim to stay at the forefront, supplying the latest HOCO chargers, cables, and earbud innovations.
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              Thank you for being part of our story. We will continue to improve our shipping speeds, order processes, and warranty services to serve you better every single day.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
