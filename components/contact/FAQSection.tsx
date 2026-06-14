"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const faqs = [
  { qKey: "contact.faq.q1", aKey: "contact.faq.a1" },
  { qKey: "contact.faq.q2", aKey: "contact.faq.a2" },
  { qKey: "contact.faq.q3", aKey: "contact.faq.a3" },
  { qKey: "contact.faq.q4", aKey: "contact.faq.a4" },
]

export function FAQSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-gradient-to-b from-background via-hoco-mint/35 to-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-black text-foreground sm:text-4xl">
            {t("contact.faq.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("contact.faq.desc")}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2 w-full">
          {faqs.map(({ qKey, aKey }, index) => (
            <div key={qKey} className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-hoco-green-border">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 text-left font-black text-foreground rtl:text-right">
                {t(qKey)}
                <ChevronDown className={`h-5 w-5 shrink-0 text-hoco-green transition-transform ${open === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-3 text-sm leading-7 text-muted-foreground text-left rtl:text-right">
                    {t(aKey)}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <Link href="/faq" className="group mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-hoco-green-border bg-white px-6 py-3 text-sm font-black text-hoco-green shadow-sm transition-colors hover:bg-hoco-green hover:text-white">
          {t("contact.faq.more")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  )
}
