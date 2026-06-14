"use client"

import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { Lock, Send } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ContactForm() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  const subjects = [
    { key: "contact.form.subjects.order", default: "Order Support" },
    { key: "contact.form.subjects.delivery", default: "Delivery Question" },
    { key: "contact.form.subjects.product", default: "Product Information" },
    { key: "contact.form.subjects.return", default: "Return / Exchange" },
    { key: "contact.form.subjects.partnership", default: "Partnership" },
    { key: "contact.form.subjects.other", default: "Other" }
  ]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <motion.form initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} onSubmit={handleSubmit} className="rounded-3xl border border-border bg-white p-5 shadow-[0_24px_70px_-46px_rgba(0,139,58,0.45)] sm:p-7 text-left rtl:text-right">
      <h2 className="font-heading text-2xl font-black text-foreground">{t("contact.form.title")}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("contact.form.desc")}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={t("contact.form.fullName")} placeholder={t("contact.form.fullNamePlaceholder")} />
        <Field label={t("contact.form.email")} placeholder={t("contact.form.emailPlaceholder")} type="email" />
        <Field label={t("contact.form.phone")} placeholder="+213 5XX XXX XXX" />
        <label className="text-sm font-bold text-foreground">
          {t("contact.form.subject")}
          <select className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-muted-foreground outline-none transition focus:border-hoco-green focus:ring-4 focus:ring-hoco-green/10">
            <option>{t("contact.form.subjectSelect")}</option>
            {subjects.map((subject) => <option key={subject.key} value={subject.key}>{t(subject.key)}</option>)}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-bold text-foreground">
        {t("contact.form.message")}
        <textarea placeholder={t("contact.form.messagePlaceholder")} rows={6} className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-hoco-green focus:ring-4 focus:ring-hoco-green/10" />
      </label>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-hoco-green px-7 py-4 text-sm font-black text-white shadow-lg shadow-hoco-green/25 transition-all hover:bg-hoco-green-dark hover:shadow-xl">
        <Send className="h-4 w-4" />
        {sent ? t("contact.form.submitted") : t("contact.form.submit")}
      </button>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
        <Lock className="h-3.5 w-3.5 text-hoco-green" />
        {t("contact.form.safeInfo")}
      </p>
    </motion.form>
  )
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="text-sm font-bold text-foreground">
      {label}
      <input type={type} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-hoco-green focus:ring-4 focus:ring-hoco-green/10" />
    </label>
  )
}
