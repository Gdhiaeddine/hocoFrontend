"use client"

import { motion } from "framer-motion"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const cards = [
  { icon: Phone, titleKey: "contact.info.phoneTitle", textKey: null, text: "+213 550 123 456", subtextKey: "contact.info.phoneSub" },
  { icon: Mail, titleKey: "contact.info.emailTitle", textKey: null, text: "support@hoco.dz", subtextKey: "contact.info.emailSub" },
  { icon: MapPin, titleKey: "contact.info.addressTitle", textKey: "contact.info.addressText", text: "" },
  { icon: Clock, titleKey: "contact.info.hoursTitle", textKey: "contact.info.hoursText", text: "" },
]

export function ContactInfo() {
  const { t } = useLanguage()

  return (
    <motion.aside initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} className="rounded-3xl border border-border bg-white p-5 shadow-[0_24px_70px_-46px_rgba(0,139,58,0.45)] sm:p-7 text-left rtl:text-right">
      <h2 className="font-heading text-2xl font-black text-foreground">{t("contact.info.title")}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("contact.info.desc")}</p>
      <div className="mt-6 space-y-3">
        {cards.map((card) => (
          <div key={card.titleKey} className="flex gap-4 rounded-2xl border border-border bg-zinc-50/70 p-4 transition-all hover:border-hoco-green-border hover:bg-hoco-mint/50">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
              <card.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-black text-foreground">{t(card.titleKey)}</h3>
              <p className="mt-1 whitespace-pre-line text-sm leading-6 text-foreground/75">
                {card.textKey ? t(card.textKey) : card.text}
              </p>
              {card.subtextKey && <p className="mt-1 text-xs font-semibold text-muted-foreground">{t(card.subtextKey)}</p>}
            </div>
          </div>
        ))}
      </div>
    </motion.aside>
  )
}
