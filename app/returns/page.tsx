import Link from "next/link"
import { ChevronRight, RefreshCw, AlertCircle, PhoneCall, FileText } from "lucide-react"

export default function ReturnsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Returns & Exchanges</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">Hassle-Free policy</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Returns & Exchanges
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            We stand behind our product quality. Here is what you need to know about returning or exchanging your HOCO accessory in Algeria.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Main Info Blocks */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">7-Day Return Window</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                You can return or exchange any product within 7 days of delivery. The item must be unused, in the same condition as you received it, and in its original retail box with all seals intact.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">Defective Items & Warranty</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Received a manufacturing defect or wrong product? We will exchange it completely free of charge! Contact us immediately via WhatsApp or phone, and we will send a courier to swap the item.
              </p>
            </div>
          </div>

          {/* Procedure Section */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
              <FileText className="h-5 w-5 text-hoco-green" />
              How to Request a Return or Exchange
            </h3>
            
            <ol className="mt-6 space-y-4 text-sm text-muted-foreground sm:text-base leading-7">
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hoco-green text-xs font-bold text-white mt-0.5">1</span>
                <div>
                  <strong className="text-foreground">Contact Support:</strong> Contact our team on WhatsApp at <span className="font-bold text-hoco-green">+213 550 123 456</span> or via email with your Order Reference and product photos.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hoco-green text-xs font-bold text-white mt-0.5">2</span>
                <div>
                  <strong className="text-foreground">Review:</strong> Our agent will confirm the issue and review details within 24 hours.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hoco-green text-xs font-bold text-white mt-0.5">3</span>
                <div>
                  <strong className="text-foreground">Pickup & Swap:</strong> We dispatch Yalidine Express to pick up the item. If exchanging, the courier will hand over the new replacement product during pickup.
                </div>
              </li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="rounded-3xl bg-gradient-to-br from-hoco-green to-hoco-green-dark p-6 text-center text-white shadow-xl shadow-hoco-green/20 sm:p-10">
            <h3 className="font-heading text-xl font-black sm:text-2xl">Need assistance with your return?</h3>
            <p className="mt-2 text-sm text-white/80">Our support agents are available Sunday to Thursday from 9 AM to 6 PM.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-hoco-green shadow-sm hover:scale-105 transition-transform">
                <PhoneCall className="h-4.5 w-4.5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
