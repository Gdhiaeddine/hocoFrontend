"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Search, Truck, Package, Clock, CheckCircle2, ShieldAlert, BadgeCheck, HelpCircle } from "lucide-react"

type TrackingStep = {
  title: string
  desc: string
  date: string
  done: boolean
  active: boolean
}

export default function TrackOrderPage() {
  const [orderRef, setOrderRef] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [trackingData, setTrackingData] = useState<TrackingStep[] | null>(null)
  const [error, setError] = useState("")

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!orderRef.trim()) {
      setError("Please enter your Order Reference.")
      return
    }
    if (!phone.trim()) {
      setError("Please enter your Phone Number.")
      return
    }

    setLoading(true)
    
    // Simulate API fetch delay
    setTimeout(() => {
      setLoading(false)
      // Generate realistic milestones
      setTrackingData([
        {
          title: "Order Placed & Confirmed",
          desc: "Your order has been recorded and confirmed by our phone verification agent.",
          date: "June 14, 2026 at 10:15 AM",
          done: true,
          active: false,
        },
        {
          title: "Packed & Ready for Yalidine",
          desc: "Your HOCO products have been packed and labeled at our Algiers warehouse.",
          date: "June 14, 2026 at 2:30 PM",
          done: true,
          active: false,
        },
        {
          title: "Dispatched (In Transit)",
          desc: "Package handed over to Yalidine Express. Hub transit in progress.",
          date: "June 15, 2026 at 8:00 AM",
          done: true,
          active: true,
        },
        {
          title: "Out for Delivery / Stop Desk Arrived",
          desc: "Yalidine courier is delivering to your address, or package is ready for pickup at Yalidine Stop Desk.",
          date: "Pending Hub Sort",
          done: false,
          active: false,
        },
        {
          title: "Delivered",
          desc: "Package delivered and payment collected.",
          date: "Expected June 16-17",
          done: false,
          active: false,
        },
      ])
    }, 1200)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Track Your Order</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">Real-time shipping status</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Track Your Order
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Enter your order reference (e.g. <span className="font-mono font-bold text-hoco-green">HC-2026-XXXXX</span>) and phone number to trace your package via Yalidine Express.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-xl shadow-zinc-200/40 sm:p-8"
          >
            <form onSubmit={handleTrack} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="order-ref" className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                  Order Reference
                </label>
                <input
                  id="order-ref"
                  type="text"
                  placeholder="HC-2026-84193"
                  value={orderRef}
                  onChange={(e) => setOrderRef(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-foreground focus:border-hoco-green focus:outline-none focus:ring-1 focus:ring-hoco-green"
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  placeholder="0550123456"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-foreground focus:border-hoco-green focus:outline-none focus:ring-1 focus:ring-hoco-green"
                />
              </div>

              {error && (
                <div className="col-span-full flex items-center gap-2.5 rounded-2xl bg-rose-50 border border-rose-100 p-4 text-xs font-bold text-rose-600">
                  <ShieldAlert className="h-4.5 w-4.5" />
                  {error}
                </div>
              )}

              <button
                id="track-submit-btn"
                type="submit"
                disabled={loading}
                className="col-span-full inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-hoco-green py-3.5 text-sm font-black text-white shadow-lg shadow-hoco-green/25 hover:bg-hoco-green-dark transition-all active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Locating package...
                  </>
                ) : (
                  <>
                    <Search className="h-4.5 w-4.5" />
                    Search Status
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Help / Information Cards */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-heading text-base font-black text-foreground">
                <Truck className="h-5 w-5 text-hoco-green" />
                Shipping Partners
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                We work in collaboration with <strong className="text-foreground">Yalidine Express</strong> to ship orders to all 58 Wilayas of Algeria. Standard delivery takes 1 to 4 days.
              </p>
            </div>
            
            <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-heading text-base font-black text-foreground">
                <BadgeCheck className="h-5 w-5 text-hoco-green" />
                Order Verification
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                Ensure you answered our confirmation call. Unverified order reference numbers cannot be tracked as they are not dispatched.
              </p>
            </div>
          </div>
        </div>

        {/* Tracking Timeline Result (Full width under grid) */}
        <AnimatePresence>
          {trackingData && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 overflow-hidden"
            >
              <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-xl shadow-zinc-200/40 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                  <div>
                    <span className="text-[10px] font-black uppercase text-muted-foreground">Carrier Partner</span>
                    <div className="mt-1 flex items-center gap-2 font-heading text-lg font-black text-foreground">
                      <Truck className="h-5 w-5 text-hoco-green" />
                      Yalidine Express
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] font-black uppercase text-muted-foreground">Order Reference</span>
                    <p className="mt-1 font-mono font-bold text-hoco-green">{orderRef.toUpperCase()}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative mt-8 pl-8 sm:pl-10">
                  {/* Timeline central vertical line */}
                  <div className="absolute left-3 sm:left-4 top-1.5 bottom-1.5 w-[2px] bg-zinc-100" />

                  <div className="space-y-8">
                    {trackingData.map((step, idx) => {
                      return (
                        <div key={idx} className="relative">
                          {/* Step indicator node */}
                          <div
                            className={`absolute -left-[27px] sm:-left-[31px] top-0.5 flex h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] items-center justify-center rounded-full border-2 bg-white transition-all ${
                              step.done
                                ? "border-hoco-green text-hoco-green"
                                : step.active
                                ? "border-hoco-green bg-hoco-green animate-pulse"
                                : "border-zinc-200 text-zinc-300"
                            }`}
                          >
                            {step.done ? (
                              <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-hoco-green text-white" />
                            ) : (
                              <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                            )}
                          </div>

                          <div>
                            <h4
                              className={`text-sm font-black transition-colors ${
                                step.done || step.active ? "text-foreground" : "text-muted-foreground"
                              }`}
                            >
                              {step.title}
                            </h4>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">{step.desc}</p>
                            <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-black text-hoco-green bg-hoco-green-light px-2 py-0.5 rounded-md">
                              <Clock className="h-3 w-3" />
                              {step.date}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
