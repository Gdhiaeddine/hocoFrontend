"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import type { ProductDetails } from "./ProductDetailsData"
import { useLanguage } from "@/context/LanguageContext"

const thumbnails = ["Front angle", "Close-up", "Side view", "Alternate angle", "Packaging"]

function GalleryMockup({ product, view }: { product: ProductDetails; view: number }) {
  const { language } = useLanguage()
  if (product.image) {
    let transformClass = "scale-100"
    if (view === 1) transformClass = "scale-125 translate-y-4"
    if (view === 2) transformClass = "rotate-12 scale-95"
    if (view === 3) transformClass = "-rotate-12 scale-100"
    if (view === 4) transformClass = "scale-90 opacity-95"

    return (
      <motion.div
        key={view}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full aspect-square flex items-center justify-center"
      >
        <div className="absolute bottom-8 left-1/2 h-12 w-52 -translate-x-1/2 rounded-full bg-hoco-green/10 blur-2xl" />
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className={`h-full w-full object-cover drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 ${transformClass}`}
        />
        {view === 4 && (
          <div className="absolute right-4 top-16 z-20 rounded-2xl border border-hoco-green-border bg-white/90 px-3 py-2 text-[10px] font-black text-hoco-green shadow-xl backdrop-blur-md">
            {language === "ar" ? "العلبة الأصلية متضمنة" : language === "fr" ? "Boîte d'origine incluse" : "Retail Box Included"}
          </div>
        )}
      </motion.div>
    )
  }

  const type = product.imageType
  let rotateVal = view % 2 ? 6 : -6
  if (view === 1) rotateVal = 12
  if (view === 2) rotateVal = -12
  if (view === 3) rotateVal = 0

  return (
    <motion.div
      key={view}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 }, y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } }}
      className="relative w-full aspect-square flex items-center justify-center"
    >
      <div className="absolute bottom-8 left-1/2 h-12 w-52 -translate-x-1/2 rounded-full bg-zinc-900/14 blur-2xl" />
      
      {type === "wireless-charger" && (
        <div style={{ transform: `rotate(${rotateVal}deg)` }} className="relative h-64 w-64 rounded-full border-[15px] border-white bg-zinc-100 shadow-[0_30px_60px_rgba(15,23,42,0.15)] flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border border-hoco-green/30 bg-hoco-green/10 flex items-center justify-center">
            <span className="text-xs font-black text-hoco-green opacity-40">15W QI</span>
          </div>
          <div className="absolute bottom-4 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-zinc-300" />
        </div>
      )}

      {type === "headphones" && (
        <div style={{ transform: `rotate(${rotateVal}deg) scale(1.1)` }} className="relative h-64 w-64">
          <div className="absolute left-1/2 top-4 h-40 w-44 -translate-x-1/2 rounded-t-full border-[14px] border-zinc-900 border-b-0" />
          <div className="absolute bottom-12 left-5 h-24 w-14 rounded-2xl bg-zinc-900 shadow-xl" />
          <div className="absolute bottom-12 right-5 h-24 w-14 rounded-2xl bg-zinc-900 shadow-xl" />
        </div>
      )}

      {(type === "type-c-cable" || type === "black-cable" || type === "cable") && (
        <div style={{ transform: `rotate(${rotateVal}deg) scale(1.1)` }} className="relative h-64 w-full">
          <div className={`absolute left-12 top-20 h-28 w-40 rounded-full border-[14px] ${type === "black-cable" ? "border-zinc-900" : "border-white"} shadow-xl`} />
          <div className={`absolute right-16 top-24 h-12 w-20 rounded-lg ${type === "black-cable" ? "bg-zinc-900" : "bg-white"} shadow-xl flex items-center justify-center`} />
          <div className={`absolute right-12 top-[8.5rem] h-6 w-10 rounded-md ${type === "black-cable" ? "bg-zinc-700" : "bg-zinc-200"}`} />
        </div>
      )}

      {type === "car-holder" && (
        <div style={{ transform: `rotate(${rotateVal}deg) scale(1.1)` }} className="relative h-64 w-48">
          <div className="absolute left-1/2 top-10 h-36 w-30 -translate-x-1/2 rounded-2xl border-6 border-zinc-900 bg-zinc-800 shadow-2xl" />
          <div className="absolute bottom-16 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-hoco-green shadow-lg" />
          <div className="absolute bottom-10 left-1/2 h-6 w-36 -translate-x-1/2 rounded-full bg-zinc-900" />
        </div>
      )}

      {(type === "charger" || type === "black-charger" || type === "car-charger") && (
        <div style={{ transform: `rotate(${rotateVal}deg)` }} className={`relative h-56 w-36 rounded-[2rem] ${type === "black-charger" || type === "car-charger" ? "bg-zinc-950" : "bg-white"} shadow-[0_35px_70px_rgba(15,23,42,0.18)]`}>
          <div className={`absolute inset-2 rounded-[1.6rem] border ${type === "black-charger" || type === "car-charger" ? "border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950" : "border-zinc-100 bg-gradient-to-br from-white via-zinc-50 to-zinc-100"}`} />
          <div className={`absolute left-1/2 top-8 -translate-x-1/2 text-xs font-black tracking-[0.24em] ${type === "black-charger" || type === "car-charger" ? "text-zinc-500" : "text-zinc-400"}`}>HOCO</div>
          <div className="absolute left-1/2 top-20 grid -translate-x-1/2 grid-cols-2 gap-3">
            <div className={`h-9 w-8 rounded-xl ${type === "black-charger" || type === "car-charger" ? "bg-zinc-800 shadow-inner" : "bg-zinc-900 shadow-inner"}`} />
            <div className={`h-9 w-8 rounded-xl ${type === "black-charger" || type === "car-charger" ? "bg-zinc-800 shadow-inner" : "bg-zinc-900 shadow-inner"}`} />
          </div>
          <div className={`absolute bottom-10 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full ${type === "black-charger" || type === "car-charger" ? "bg-zinc-800" : "bg-zinc-200"}`} />
          <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 gap-5">
            <span className={`h-12 w-3 rounded-full ${type === "black-charger" || type === "car-charger" ? "bg-zinc-800 shadow-sm" : "bg-zinc-300 shadow-sm"}`} />
            <span className={`h-12 w-3 rounded-full ${type === "black-charger" || type === "car-charger" ? "bg-zinc-800 shadow-sm" : "bg-zinc-300 shadow-sm"}`} />
          </div>
        </div>
      )}

      {type === "case" && (
        <div style={{ transform: `rotate(${rotateVal}deg)` }} className="relative h-64 w-36 rounded-[2.5rem] border-4 border-hoco-green bg-hoco-green-light/40 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-1.5 rounded-[2.2rem] border border-hoco-green/20" />
          <div className="h-40 w-24 rounded-2xl border-2 border-dashed border-hoco-green/30" />
        </div>
      )}

      {!["wireless-charger", "headphones", "type-c-cable", "black-cable", "cable", "car-holder", "charger", "black-charger", "car-charger", "case"].includes(type) && (
        <div style={{ transform: `rotate(${rotateVal}deg)` }} className="relative h-60 w-40 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-black tracking-widest text-hoco-green uppercase">HOCO</span>
          <div className="mt-4 h-24 w-24 rounded-full bg-hoco-green/10 flex items-center justify-center">
            <span className="text-sm font-bold text-hoco-green">{product.category}</span>
          </div>
        </div>
      )}

      {view === 4 && (
        <div className="absolute right-10 top-20 rounded-2xl border border-hoco-green-border bg-white/80 px-3 py-2 text-[10px] font-black text-hoco-green shadow-xl backdrop-blur-md">
          {language === "ar" ? "العلبة الأصلية" : language === "fr" ? "Boîte d'origine" : "Retail Box"}
        </div>
      )}
    </motion.div>
  )
}

export function ProductGallery({ product }: { product: ProductDetails }) {
  const [active, setActive] = useState(0)
  const productImages: string[] = (product as any).images || (product.image ? [product.image] : [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full space-y-8"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-hoco-mint via-white to-zinc-100 shadow-[0_30px_90px_-48px_rgba(0,139,58,0.55)]">
        {product.badge && (
          <span className="absolute left-5 top-5 z-20 rounded-full bg-hoco-green px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-hoco-green/25">
            {product.badge}
          </span>
        )}
        {(productImages.length > 1 || productImages.length === 0) && (
          <>
            <button
              type="button"
              aria-label="Previous product image"
              onClick={() => setActive((value) => {
                const total = productImages.length > 0 ? productImages.length : thumbnails.length
                return value === 0 ? total - 1 : value - 1
              })}
              className="absolute left-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow-md transition-colors hover:text-hoco-green"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next product image"
              onClick={() => setActive((value) => {
                const total = productImages.length > 0 ? productImages.length : thumbnails.length
                return value === total - 1 ? 0 : value + 1
              })}
              className="absolute right-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow-md transition-colors hover:text-hoco-green"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </button>
          </>
        )}
        <div className="absolute inset-x-16 bottom-14 h-20 rounded-full bg-hoco-green/15 blur-3xl" />
        
        {productImages.length > 0 ? (
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full aspect-square flex items-center justify-center"
          >
            <div className="absolute bottom-8 left-1/2 h-12 w-52 -translate-x-1/2 rounded-full bg-hoco-green/10 blur-2xl" />
            <Image
              src={productImages[active]}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
              priority
            />
          </motion.div>
        ) : (
          <GalleryMockup product={product} view={active} />
        )}
      </div>

      {productImages.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {productImages.map((imgUrl, index) => (
            <button
              key={imgUrl + index}
              type="button"
              onClick={() => setActive(index)}
              className={`min-w-20 h-20 rounded-2xl border bg-white p-2 text-center shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center overflow-hidden shrink-0 ${
                active === index ? "border-hoco-green ring-4 ring-hoco-green/10" : "border-border hover:border-hoco-green-border"
              }`}
            >
              <div className="relative h-14 w-14 overflow-hidden flex items-center justify-center p-0.5">
                <Image
                  src={imgUrl}
                  alt={`thumbnail-${index}`}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {thumbnails.map((label, index) => (
            <button
              key={label}
              type="button"
              onClick={() => setActive(index)}
              className={`min-w-20 rounded-2xl border bg-white p-2 text-center shadow-sm transition-all hover:-translate-y-0.5 ${
                active === index ? "border-hoco-green ring-4 ring-hoco-green/10" : "border-border hover:border-hoco-green-border"
              }`}
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-hoco-mint to-zinc-100" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )
}
