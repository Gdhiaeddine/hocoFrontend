"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown, MessageCircle, HelpCircle } from "lucide-react"

type FAQItem = {
  q: string
  a: string
}

type FAQCategory = {
  title: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    title: "Orders & Verification",
    items: [
      {
        q: "Do I need to confirm my order over the phone?",
        a: "Yes. To prevent delivery issues, our team calls every customer to verify their address and order details before shipping. Unverified orders will not be dispatched.",
      },
      {
        q: "Can I cancel or modify my order after placing it?",
        a: "Yes, you can cancel or change your order as long as it has not been shipped. Once we call you for verification, you can modify items or addresses directly with the agent.",
      },
    ],
  },
  {
    title: "Shipping & Delivery",
    items: [
      {
        q: "What delivery options do you offer in Algeria?",
        a: "We offer Home Delivery (Livraison à domicile) directly to your door, and Yalidine Stop Desk pickup where you can collect your package from a local Yalidine office.",
      },
      {
        q: "How long does delivery take?",
        a: "Delivery is very fast: Algiers takes 1-2 business days, Northern regions take 2-3 business days, and Southern regions take 3-5 business days.",
      },
      {
        q: "How much does shipping cost?",
        a: "Shipping costs depend on your Wilaya and selected delivery method. Home delivery ranges from 400 DZD to 900 DZD, while Yalidine Stop Desk is cheaper (typically 300 DZD to 600 DZD). Shipping is calculated in real time during checkout.",
      },
    ],
  },
  {
    title: "Payments & Invoices",
    items: [
      {
        q: "What payment methods do you support?",
        a: "We support Cash on Delivery (Paiement à la livraison) as the primary option. You pay the courier when they hand over the package. We also support CIB and Edahabia payments.",
      },
      {
        q: "Is there any hidden fee?",
        a: "No. The total price shown in your cart and order confirmation (including shipping fees) is the exact amount you will pay the Yalidine courier. No additional fees apply.",
      },
    ],
  },
  {
    title: "Product Authenticity & Warranty",
    items: [
      {
        q: "Are your HOCO products original?",
        a: "Yes, 100%. We guarantee that all products sold on our store are original HOCO accessories imported directly. Each box contains an authenticity scratch-off code that can be verified on HOCO's official website.",
      },
      {
        q: "What warranty do you provide?",
        a: "We provide a 12-Month Warranty on electronic products (chargers, earbuds, power banks) and a 3-Month Warranty on cables and mounts against manufacturing defects.",
      },
    ],
  },
]

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">FAQs</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">Help Center</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Find quick answers to common questions about shipping, returns, warranty, and ordering.
          </p>
        </div>

        {/* Categories Pills */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-2">
          {faqData.map((cat, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={cat.title}
                onClick={() => {
                  setActiveTab(idx)
                  setOpenIndex(0) // open first question of category by default
                }}
                className={`rounded-full px-5 py-2.5 text-xs font-black transition-all ${
                  isActive
                    ? "bg-hoco-green text-white shadow-md shadow-hoco-green/20"
                    : "bg-white border border-zinc-150 text-foreground hover:bg-hoco-green-light hover:text-hoco-green"
                }`}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Questions Accordion Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-3xl border border-zinc-150 bg-white p-5 shadow-sm sm:p-8 space-y-4"
        >
          {faqData[activeTab].items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border p-4.5 transition-all ${
                  isOpen ? "border-hoco-green bg-hoco-green-light/10 shadow-sm" : "border-border hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left font-black text-foreground text-sm sm:text-base"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-hoco-green" : "text-muted-foreground"}`} />
                    {item.q}
                  </span>
                  <ChevronDown className={`h-4.5 w-4.5 text-hoco-green shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3.5 pl-7 text-sm leading-7 text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        {/* Contact fallback */}
        <div className="mt-12 text-center rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-black text-foreground sm:text-xl">Still have questions?</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground max-w-md mx-auto">Our team is ready to answer all your inquiries directly on WhatsApp.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center justify-center rounded-full bg-hoco-green px-7 py-3.5 text-sm font-black text-white hover:bg-hoco-green-dark transition-colors shadow-lg shadow-hoco-green/20 hover:scale-105 transition-transform">
            Ask Us a Question
          </Link>
        </div>
      </div>
    </main>
  )
}
