"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star, Check } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useFavorites } from "@/context/FavoritesContext"

export type Product = {
  id?: number
  name: string
  price: string
  rating: number
  reviews: number
  image: string
  slug: string
  badge?: string
}

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const [isAdded, setIsAdded] = useState(false)

  const productId = product.id || Math.abs(product.name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0))
  const favorited = isFavorite(productId)

  const handleAddToCart = () => {
    const color = "White"
    addToCart({ ...product, id: productId }, 1, color)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
      }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-hoco-green-border hover:shadow-[0_24px_70px_-28px_rgba(0,139,58,0.45)]"
    >
      <Link href={`/products/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`} />

      <button
        aria-label={`Add ${product.name} to wishlist`}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite({ ...product, id: productId })
        }}
        className={`absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition-all duration-300 ${
          favorited
            ? "border-rose-200 bg-rose-50/90 text-rose-500 opacity-100 translate-y-0"
            : "border-border bg-white/80 text-foreground/60 opacity-0 translate-y-1 hover:border-hoco-green-border hover:text-hoco-green group-hover:translate-y-0 group-hover:opacity-100"
        }`}
      >
        <Heart className={`h-4.5 w-4.5 ${favorited ? "fill-rose-500" : ""}`} />
      </button>

      <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-hoco-green-light via-white to-muted">
        {product.badge && (
          <span className="absolute left-4 top-4 z-30 rounded-full bg-hoco-green px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg shadow-hoco-green/25">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-8 bottom-4 h-12 rounded-full bg-hoco-green/15 blur-2xl" />
        <Image
          src={product.image}
          alt={product.name}
          width={280}
          height={280}
          className="h-full w-full object-cover drop-shadow-[0_20px_28px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="px-2 pb-3 pt-5">
        <h3 className="line-clamp-2 min-h-[3rem] text-sm font-bold leading-6 text-foreground">{product.name}</h3>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-black text-hoco-green">{product.price}</p>
          <button 
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleAddToCart()
            }}
            className={`relative z-20 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-xs font-bold text-white shadow-lg transition-all duration-300 ${
              isAdded 
                ? "bg-emerald-600 shadow-emerald-600/25 scale-105" 
                : "bg-foreground shadow-foreground/15 hover:bg-hoco-green hover:shadow-hoco-green/30"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
