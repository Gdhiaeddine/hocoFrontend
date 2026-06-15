"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart, Star, Check } from "lucide-react"
import type { Product } from "@/components/products/ProductData"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { useCart } from "@/context/CartContext"

function MockProduct({ type }: { type: string }) {
  const dark = type.includes("black") || type.includes("car")
  if (type === "wireless" || type === "wireless-charger") {
    return <div className="mx-auto h-28 w-28 rounded-full border-[10px] border-white bg-zinc-100 shadow-xl" />
  }
  if (type === "cable" || type === "type-c-cable" || type === "black-cable") {
    return <div className="mx-auto h-24 w-32 rounded-full border-[9px] border-white shadow-xl" />
  }
  return (
    <div className={`mx-auto h-32 w-20 rounded-2xl ${dark ? "bg-zinc-950" : "bg-white"} shadow-xl`}>
      <div className={`mx-auto mt-8 h-8 w-10 rounded-lg ${dark ? "bg-zinc-700" : "bg-zinc-200"}`} />
    </div>
  )
}

export function RelatedProducts({ related }: { related: Product[] }) {
  const { t } = useLanguage()
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({})

  const handleAddToCart = (item: Product) => {
    addToCart(item, 1, item.color || "White")
    setAddedItems((prev) => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }))
    }, 1500)
  }

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-hoco-green">{t("details.youMayAlsoLike")}</p>
            <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">{t("details.relatedProducts")}</h2>
          </div>
          <a href="/products" className="group hidden items-center gap-2 rounded-full border border-hoco-green-border bg-white px-5 py-3 text-sm font-black text-hoco-green shadow-sm transition-colors hover:bg-hoco-green hover:text-white sm:inline-flex">
            {t("details.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mt-10">
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {related.map((item) => (
              <motion.article
                key={item.id}
                variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
                className="group relative rounded-2xl border border-border bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:border-hoco-green-border hover:shadow-xl"
              >
                <Link href={`/products/${item.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${item.name}`} />

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-hoco-mint via-white to-zinc-100">
                  {item.badge && <span className="absolute left-3 top-3 z-30 rounded-full bg-hoco-green px-2.5 py-1 text-[10px] font-black text-white">{item.badge}</span>}
                  <div className="relative h-36 w-full transition-transform duration-500 group-hover:scale-110">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-4">
                        <MockProduct type={item.imageType} />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="mt-4 line-clamp-2 min-h-[2.5rem] text-sm font-black leading-5 text-foreground">{item.name}</h3>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <p className="text-sm font-black text-hoco-green">{item.price}</p>
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleAddToCart(item)
                    }}
                    className={`relative z-20 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                      addedItems[item.id]
                        ? "bg-emerald-600 scale-105 text-white"
                        : "bg-hoco-green text-white hover:bg-hoco-green-dark"
                    }`}
                    aria-label={addedItems[item.id] ? "Added to cart" : "Add to cart"}
                  >
                    {addedItems[item.id] ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <ShoppingCart className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
