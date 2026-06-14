"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const testimonials = [
  {
    name: "Yacine B.",
    locationKey: "testimonials.loc1",
    quoteKey: "testimonials.quote1",
  },
  {
    name: "Linda M.",
    locationKey: "testimonials.loc2",
    quoteKey: "testimonials.quote2",
  },
  {
    name: "Karim T.",
    locationKey: "testimonials.loc3",
    quoteKey: "testimonials.quote3",
  },
]

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <div className="flex items-center gap-1 text-hoco-green">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${className} fill-current`} />
      ))}
    </div>
  )
}

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-hoco-mint/45 py-20 sm:py-28">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-hoco-green/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-hoco-green-border bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md"
          >
            <span className="text-xl font-black text-foreground">4.8/5</span>
            <Stars />
            <span className="text-sm font-semibold text-muted-foreground">2,450+ {t("testimonials.reviews")}</span>
          </motion.div>
        </div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-hoco-green to-hoco-green-dark text-sm font-black text-white shadow-lg shadow-hoco-green/25">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{t(testimonial.locationKey)}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-hoco-green/20" />
              </div>
              <Stars className="mt-5 h-3.5 w-3.5" />
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{t(testimonial.quoteKey)}</p>
              <div className="mt-6 h-1.5 w-16 rounded-full bg-hoco-green/20">
                <div className="h-full rounded-full bg-hoco-green" style={{ width: `${82 + index * 6}%` }} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
