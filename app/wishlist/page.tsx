"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Trash2, ShoppingCart, Heart, Check } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useFavorites } from "@/context/FavoritesContext"
import { useLanguage } from "@/context/LanguageContext"

function WishlistItemMockup({ type }: { type: string }) {
  if (type === "wireless-charger") {
    return (
      <div className="relative h-16 w-16 rounded-xl border border-hoco-green/20 bg-zinc-50 flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-4 border-white bg-zinc-200 shadow-sm flex items-center justify-center">
          <div className="h-5 w-5 rounded-full border border-hoco-green/30 bg-hoco-green/10" />
        </div>
      </div>
    )
  }

  if (type === "headphones") {
    return (
      <div className="relative h-16 w-16 rounded-xl border border-hoco-green/20 bg-zinc-50 flex items-center justify-center">
        <div className="h-10 w-10 rounded-t-full border-4 border-zinc-800 border-b-0 relative">
          <div className="absolute -bottom-1 -left-2 h-4 w-2 rounded bg-zinc-800" />
          <div className="absolute -bottom-1 -right-2 h-4 w-2 rounded bg-zinc-800" />
        </div>
      </div>
    )
  }

  if (type === "car-holder") {
    return (
      <div className="relative h-16 w-16 rounded-xl border border-hoco-green/20 bg-zinc-50 flex items-center justify-center">
        <div className="h-10 w-8 rounded-lg border-2 border-zinc-800 bg-zinc-700 relative">
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-hoco-green" />
        </div>
      </div>
    )
  }

  if (type === "type-c-cable" || type === "black-cable") {
    return (
      <div className="relative h-16 w-16 rounded-xl border border-hoco-green/20 bg-zinc-50 flex items-center justify-center overflow-hidden">
        <div className="h-8 w-12 rounded-full border-4 border-zinc-300 border-b-0 rotate-12" />
        <div className="absolute h-2 w-4 bg-zinc-400 rounded-sm bottom-4 right-4" />
      </div>
    )
  }

  return (
    <div className="relative h-16 w-16 rounded-xl border border-hoco-green/20 bg-zinc-950 flex items-center justify-center">
      <div className="h-10 w-6 rounded-md bg-zinc-800 flex items-center justify-center">
        <div className="h-2 w-4 rounded-full bg-zinc-700" />
      </div>
    </div>
  )
}

export default function WishlistPage() {
  const { addToCart } = useCart()
  const { favorites, toggleFavorite } = useFavorites()
  const { t, language } = useLanguage()
  const [addedItemIds, setAddedItemIds] = useState<Record<number, boolean>>({})

  // Hydration protection
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-hoco-green"></div>
      </div>
    )
  }

  const handleAddFromWishlist = (item: any) => {
    addToCart(item, 1, "White")
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }))
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-zinc-50/30 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-6">
          <Link href="/" className="hover:text-hoco-green transition-colors">{t("cart.breadcrumbHome")}</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-hoco-green transition-colors">{t("cart.breadcrumbShop")}</Link>
          <span>/</span>
          <span className="text-foreground">{t("wishlist.breadcrumbWishlist")}</span>
        </div>

        <h1 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-8 flex items-center gap-3 rtl:text-right">
          <Heart className="h-8 w-8 text-rose-500 fill-rose-500 shrink-0" />
          {t("wishlist.title")}
        </h1>

        <AnimatePresence mode="wait">
          {favorites.length === 0 ? (
            <motion.div 
              key="empty-wishlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border border-dashed border-zinc-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-rose-500 shadow-inner">
                <Heart className="h-10 w-10 fill-rose-500" />
              </div>
              <h2 className="mt-6 font-heading text-xl font-black text-foreground">{t("wishlist.empty")}</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                {t("wishlist.emptySub")}
              </p>
              <Link href="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-hoco-green px-8 py-3.5 text-xs font-black text-white shadow-lg shadow-hoco-green/25 transition-all hover:bg-hoco-green-dark hover:scale-105">
                {t("wishlist.discoverBtn")}
                <ArrowLeft className="h-4 w-4 rotate-180 rtl:rotate-0" />
              </Link>
            </motion.div>
          ) : (
            <div key="wishlist-content" className="rounded-3xl border border-border bg-white p-4 sm:p-6 shadow-sm text-left rtl:text-right">
              <div className="border-b border-zinc-100 pb-4 mb-4">
                <h2 className="text-sm font-black text-foreground">
                  {t("wishlist.favoriteItems")} ({favorites.length} {favorites.length > 1 ? t("cart.articles") : t("cart.article")})
                </h2>
              </div>

              {/* Items List */}
              <div className="divide-y divide-zinc-100">
                {favorites.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0 last:pb-0"
                  >
                    {/* Item details */}
                    <div className="flex gap-4 items-center">
                      <Link
                        href={`/products/${item.slug}`}
                        className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-zinc-100 bg-gradient-to-br from-hoco-green-light/20 to-zinc-50 flex items-center justify-center p-1 hover:opacity-95 transition-opacity"
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={72}
                            height={72}
                            className="object-cover drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                          />
                        ) : (
                          <WishlistItemMockup type={item.imageType || ""} />
                        )}
                      </Link>

                      <div>
                        <span className="text-[10px] font-black uppercase text-hoco-green tracking-wider bg-hoco-green-light px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        <h3 className="mt-1.5 text-xs font-bold text-foreground line-clamp-2 pr-4 rtl:pr-0 rtl:pl-4">
                          <Link href={`/products/${item.slug}`} className="hover:text-hoco-green transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm font-black text-hoco-green">
                          {language === "ar" ? item.price.replace("DZD", "دج") : item.price}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 border-t border-zinc-50 pt-3 sm:pt-0 sm:border-0 rtl:flex-row-reverse">
                      {/* Add to Cart button */}
                      <button
                        onClick={() => handleAddFromWishlist(item)}
                        className={`inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-xs font-black text-white shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                          addedItemIds[item.id]
                            ? "bg-emerald-600 shadow-emerald-600/25"
                            : "bg-hoco-green shadow-hoco-green/20 hover:bg-hoco-green-dark"
                        }`}
                      >
                        {addedItemIds[item.id] ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>{t("products.addedBtn")}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-4 w-4" />
                            <span>{t("details.addToCart")}</span>
                          </>
                        )}
                      </button>

                      {/* Remove item button */}
                      <button
                        onClick={() => toggleFavorite(item)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 hover:text-red-500 hover:bg-red-50 border border-border sm:border-transparent transition-colors"
                        aria-label={t("wishlist.removeItem")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 border-t border-zinc-100 pt-5">
                <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-hoco-green hover:underline">
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                  {t("wishlist.backToShop")}
                </Link>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
