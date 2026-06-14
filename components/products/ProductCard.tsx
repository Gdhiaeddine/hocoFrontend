"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star, Check } from "lucide-react"
import type { Product, ProductImageType } from "./ProductData"
import { useCart } from "@/context/CartContext"
import { useFavorites } from "@/context/FavoritesContext"
import { useLanguage } from "@/context/LanguageContext"

type ProductCardProps = {
  product: Product
}

function ProductMockup({ type }: { type: ProductImageType }) {
  if (type === "wireless-charger") {
    return (
      <div className="relative h-44 w-full">
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-white bg-zinc-100 shadow-2xl" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hoco-green/30 bg-hoco-green/10" />
        <div className="absolute bottom-8 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-zinc-300" />
      </div>
    )
  }

  if (type === "headphones") {
    return (
      <div className="relative mx-auto h-44 w-44">
        <div className="absolute left-1/2 top-7 h-28 w-32 -translate-x-1/2 rounded-t-full border-[10px] border-zinc-900 border-b-0" />
        <div className="absolute bottom-8 left-5 h-16 w-10 rounded-2xl bg-zinc-900 shadow-xl" />
        <div className="absolute bottom-8 right-5 h-16 w-10 rounded-2xl bg-zinc-900 shadow-xl" />
      </div>
    )
  }

  if (type === "car-holder") {
    return (
      <div className="relative mx-auto h-44 w-44">
        <div className="absolute left-1/2 top-8 h-24 w-20 -translate-x-1/2 rounded-2xl border-4 border-zinc-900 bg-zinc-800 shadow-2xl" />
        <div className="absolute bottom-12 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-hoco-green shadow-lg" />
        <div className="absolute bottom-8 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full bg-zinc-900" />
      </div>
    )
  }

  const cableLike = type === "type-c-cable" || type === "black-cable"
  if (cableLike) {
    const dark = type === "black-cable"
    return (
      <div className="relative h-44 w-full">
        <div className={`absolute left-9 top-16 h-20 w-28 rounded-full border-[10px] ${dark ? "border-zinc-900" : "border-white"} shadow-xl`} />
        <div className={`absolute right-12 top-20 h-8 w-14 rounded-lg ${dark ? "bg-zinc-900" : "bg-white"} shadow-xl`} />
        <div className={`absolute right-8 top-[5.9rem] h-5 w-8 rounded-md ${dark ? "bg-zinc-700" : "bg-zinc-200"}`} />
      </div>
    )
  }

  return (
    <div className="relative mx-auto h-44 w-32">
      <div className="absolute inset-x-4 top-8 h-28 rounded-xl bg-zinc-950 shadow-2xl" />
      <div className="absolute left-1/2 top-14 h-16 w-10 -translate-x-1/2 rounded-md bg-zinc-800" />
      <div className="absolute bottom-8 left-1/2 h-4 w-16 -translate-x-1/2 rounded-full bg-zinc-700" />
    </div>
  )
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const { t, language } = useLanguage()
  const [isAdded, setIsAdded] = useState(false)

  const favorited = isFavorite(product.id)

  const categoryKeys: Record<string, string> = {
    "Chargers": "categories.chargers",
    "Power Banks": "categories.powerBanks",
    "Cables": "categories.cables",
    "Earbuds": "categories.audio",
    "Car Accessories": "categories.car",
    "Cases": "categories.protection",
  }
  const displayCategory = categoryKeys[product.category] ? t(categoryKeys[product.category]) : product.category

  const handleAddToCart = () => {
    const color = product.color
      ? product.color.charAt(0).toUpperCase() + product.color.slice(1)
      : "White"
    addToCart(product, 1, color)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm transition-shadow duration-300 hover:border-hoco-green-border hover:shadow-[0_24px_70px_-34px_rgba(0,139,58,0.5)]"
    >
      <Link href={`/products/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`} />

      <div className="relative h-52 w-full overflow-hidden rounded-[1.15rem] bg-gradient-to-br from-hoco-mint via-white to-zinc-100">
        {product.badge && (
          <span className="absolute left-4 top-4 z-30 rounded-full bg-hoco-green px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-hoco-green/25">
            {product.badge}
          </span>
        )}
        <button
          aria-label={`Add ${product.name} to wishlist`}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleFavorite(product)
          }}
          className={`absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition-all ${
            favorited
              ? "border-rose-200 bg-rose-50/90 text-rose-500 opacity-100"
              : "border-border bg-white/85 text-foreground/55 opacity-80 hover:border-hoco-green-border hover:text-hoco-green sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          <Heart className={`h-4 w-4 ${favorited ? "fill-rose-500" : ""}`} />
        </button>
        <div className="absolute inset-x-8 bottom-6 h-12 rounded-full bg-hoco-green/15 blur-2xl" />
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={280}
            height={280}
            className="h-full w-full object-cover drop-shadow-[0_20px_28px_rgba(0,0,0,0.16)] transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <ProductMockup type={product.imageType} />
          </div>
        )}
      </div>

      <div className="px-1 pb-2 pt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-hoco-green">{displayCategory}</p>
        <h3 className="mt-2 line-clamp-2 min-h-[3rem] text-sm font-black leading-6 text-foreground">{product.name}</h3>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-black text-hoco-green">{language === "ar" ? product.price.replace("DZD", "دج") : product.price}</p>
          <button 
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleAddToCart()
            }}
            className={`relative z-20 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-xs font-black text-white shadow-lg transition-all duration-300 ${
              isAdded 
                ? "bg-emerald-600 shadow-emerald-600/25 scale-105" 
                : "bg-hoco-green shadow-hoco-green/25 hover:bg-hoco-green-dark"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4" />
                {t("products.addedBtn")}
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                {t("products.addBtn")}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
