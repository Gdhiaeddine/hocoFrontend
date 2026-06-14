import Link from "next/link"
import { ChevronRight, Truck, Clock, ShieldCheck, MapPin } from "lucide-react"

export default function ShippingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Shipping Information</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">Fast delivery across Algeria</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Shipping Information
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            We partner with Yalidine Express to offer quick, reliable, and trackable shipping directly to your home or local office.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Shipping Methods */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">Livraison à Domicile (Home)</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Get your HOCO products delivered right to your front door. The courier will call you before delivery to coordinate the exact drop-off timing. Cash on delivery is accepted.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-muted-foreground">
                <MapPin className="h-6 w-6 text-hoco-green" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">Yalidine Stop Desk Pickup</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Prefer to collect at your convenience? Ship to any local Yalidine office (Stop Desk). You will receive an SMS when your package arrives. Stop desk fees are typically cheaper than home delivery!
              </p>
            </div>
          </div>

          {/* Delivery Times */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
              <Clock className="h-5 w-5 text-hoco-green" />
              Estimated Delivery Timelines
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Delivery timelines start after our customer support team confirms your order details over the phone.
            </p>
            
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase font-black tracking-wider">
                    <th className="pb-3 pr-4">Regions & Wilayas</th>
                    <th className="pb-3 px-4">Stop Desk Timeline</th>
                    <th className="pb-3 pl-4">Home Delivery Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 font-semibold text-foreground">
                  <tr>
                    <td className="py-4 pr-4 text-hoco-green font-black">Algiers (16)</td>
                    <td className="py-4 px-4">1 business day</td>
                    <td className="py-4 pl-4">1-2 business days</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4">Major Northern Wilayas (Blida, Oran, Constantine, Sétif...)</td>
                    <td className="py-4 px-4">1-2 business days</td>
                    <td className="py-4 pl-4">2-3 business days</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4">Interior & Southern Wilayas (Biskra, Ghardaïa, El Oued...)</td>
                    <td className="py-4 px-4">2-3 business days</td>
                    <td className="py-4 pl-4">3-4 business days</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4">Far Southern Wilayas (Tamanrasset, Adrar, Tindouf...)</td>
                    <td className="py-4 px-4">3-5 business days</td>
                    <td className="py-4 pl-4">4-6 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Secure details card */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
              <ShieldCheck className="h-5 w-5 text-hoco-green" />
              Order Verification Policy
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To prevent shipping mistakes and verify details, all orders placed on our store require a quick confirmation phone call from our team. We will call the phone number provided within 12 hours (excluding Fridays). Unverified orders will not be shipped, so please keep your phone nearby!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
