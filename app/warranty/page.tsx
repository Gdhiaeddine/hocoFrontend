import Link from "next/link"
import { ChevronRight, ShieldCheck, HelpCircle, Check, AlertTriangle } from "lucide-react"

export default function WarrantyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Warranty</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">100% Original Products</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Warranty Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            All our products are imported directly from HOCO. We offer solid warranty coverage on electronic components so you can shop with peace of mind.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Main Info Blocks */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">12-Month Coverage</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Electronic items (Chargers, Power Banks, Earbuds, Car Mount Chargers) are covered under a **12-Month Warranty** from the date of receipt against manufacturing defects.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-muted-foreground">
                <HelpCircle className="h-6 w-6 text-hoco-green" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">Cables & Mechanical</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Cables, Cases, and non-electronic Car Mounts include a **3-Month Warranty** for internal wiring issues or structural manufacturing defects.
              </p>
            </div>
          </div>

          {/* Covered / Not Covered Comparison */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* What's Covered */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/20 p-6 shadow-sm sm:p-8">
              <h4 className="flex items-center gap-2 font-heading text-base font-black text-emerald-800 sm:text-lg">
                <Check className="h-5 w-5 text-emerald-600" />
                What Is Covered
              </h4>
              <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground leading-6">
                <li className="flex gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  Internal electronic circuit breakdowns (e.g. charger stops outputting power).
                </li>
                <li className="flex gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  Power banks failing to charge or hold capacity.
                </li>
                <li className="flex gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  Bluetooth connectivity failures or single earbud pairing dropouts.
                </li>
              </ul>
            </div>

            {/* What's Not Covered */}
            <div className="rounded-3xl border border-rose-100 bg-rose-50/10 p-6 shadow-sm sm:p-8">
              <h4 className="flex items-center gap-2 font-heading text-base font-black text-rose-800 sm:text-lg">
                <AlertTriangle className="h-5 w-5 text-rose-600" />
                What Is Not Covered
              </h4>
              <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground leading-6">
                <li className="flex gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                  Physical damage from drops, accidents, water submersion, or misuse.
                </li>
                <li className="flex gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                  Natural wear and tear (scratches on housings, bent connector plugs).
                </li>
                <li className="flex gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                  Product retail packaging damage (box is required to complete warranty returns).
                </li>
              </ul>
            </div>
          </div>

          {/* How to claim */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-heading text-lg font-black text-foreground sm:text-xl">How to Claim Warranty</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To make a warranty claim, please contact our support team on WhatsApp at <strong className="text-hoco-green">+213 550 123 456</strong>. Be prepared to provide:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground leading-7">
              <li>Your original Order Reference (e.g. HC-2026-84193).</li>
              <li>A short video showing the issue (e.g. plugging in the charger and showing it does not charge).</li>
              <li>The original product box (must be retained to complete the warranty exchange).</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Once approved, we will arrange a replacement product to be dispatched to you via Yalidine Express.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
