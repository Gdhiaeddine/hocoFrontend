"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  Phone, 
  User, 
  ShieldCheck,
  Building,
  Check,
  Info
} from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useLanguage } from "@/context/LanguageContext"
import { wilayas, getWilayaByCode } from "@/lib/wilayas"

// Reusable micro Product Mockup for cart items that don't have images
function CartItemMockup({ type }: { type: string }) {
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

export default function CartPage() {
  const { cartItems, totalItems, subtotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const { t, language } = useLanguage()

  // Checkout form state
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedWilayaCode, setSelectedWilayaCode] = useState("16") // Default Algiers
  const [commune, setCommune] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [deliveryMode, setDeliveryMode] = useState<"home" | "desk">("home")

  // Form errors and validation
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [confirmedOrderDetails, setConfirmedOrderDetails] = useState<any>(null)

  // Hydration protection
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getTranslatedColor = (color: string) => {
    if (color === "White") return t("filters.colorWhite")
    if (color === "Black") return t("filters.colorBlack")
    return color
  }

  const getTranslatedCategory = (category: string) => {
    const categoryKeys: Record<string, string> = {
      "Chargers": "categories.chargers",
      "Power Banks": "categories.powerBanks",
      "Cables": "categories.cables",
      "Earbuds": "categories.audio",
      "Car Accessories": "categories.car",
      "Cases": "categories.protection",
    }
    return categoryKeys[category] ? t(categoryKeys[category]) : category
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-hoco-green"></div>
      </div>
    )
  }

  const selectedWilaya = getWilayaByCode(selectedWilayaCode) || wilayas[15] // Algiers fallback
  const shippingFee = deliveryMode === "home" ? selectedWilaya.homeFee : selectedWilaya.deskFee
  const grandTotal = subtotal + shippingFee

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    if (fullName.trim().length < 3) {
      newErrors.fullName = t("cart.errFullName")
    }
    
    // Algerian phone format validation: 10 digits starting with 05, 06, or 07
    const phoneRegex = /^(05|06|07)[0-9]{8}$/
    if (!phoneRegex.test(phoneNumber.replace(/\s+/g, ""))) {
      newErrors.phoneNumber = t("cart.errPhone")
    }
    
    if (!selectedWilayaCode) {
      newErrors.wilaya = t("cart.errWilaya")
    }
    
    if (commune.trim().length < 2) {
      newErrors.commune = t("cart.errCommune")
    }
    
    if (deliveryAddress.trim().length < 5) {
      newErrors.deliveryAddress = t("cart.errAddress")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (cartItems.length === 0) {
      return
    }

    if (!validateForm()) {
      // Scroll to error
      const firstError = Object.keys(errors)[0]
      const element = document.getElementById(firstError)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    setIsSubmitting(true)

    // Simulate API order placement
    setTimeout(() => {
      const orderId = `HC-2026-${Math.floor(10000 + Math.random() * 90000)}`
      
      setConfirmedOrderDetails({
        orderId,
        fullName,
        phoneNumber,
        wilaya: selectedWilaya.name,
        commune,
        deliveryAddress,
        deliveryMode: deliveryMode === "home" ? t("cart.homeDelivery") : t("cart.deskDelivery"),
        items: [...cartItems],
        subtotal,
        shippingFee,
        grandTotal,
        date: new Date().toLocaleDateString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      })

      setOrderConfirmed(true)
      setIsSubmitting(false)
      clearCart() // empty cart after confirmation
    }, 1500)
  }

  // Success view
  if (orderConfirmed && confirmedOrderDetails) {
    return (
      <main className="min-h-screen bg-zinc-50/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-3xl border border-hoco-green-border bg-white shadow-2xl shadow-hoco-green/5"
          >
            {/* Header Success Banner */}
            <div className="bg-gradient-to-r from-hoco-green to-hoco-green-dark p-8 text-center text-white">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-hoco-green shadow-lg"
              >
                <CheckCircle2 className="h-10 w-10" />
              </motion.div>
              <h1 className="mt-4 font-heading text-2xl font-black tracking-tight sm:text-3xl">
                {t("cart.successTitle")}
              </h1>
              <p className="mt-2 text-sm text-white/85">
                {t("cart.successSub")}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold backdrop-blur-md">
                {t("cart.ref")}: <span className="font-mono text-white font-black">{confirmedOrderDetails.orderId}</span>
              </div>
            </div>

            {/* Content Summary */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Customer Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("cart.receiver")}</h3>
                  <p className="mt-2 text-sm font-black text-foreground">{confirmedOrderDetails.fullName}</p>
                  <p className="mt-1 text-sm text-foreground/85 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-hoco-green" />
                    {confirmedOrderDetails.phoneNumber}
                  </p>
                </div>
                
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("cart.shippingInfo")}</h3>
                  <p className="mt-2 text-sm font-black text-foreground">{confirmedOrderDetails.deliveryMode}</p>
                  <p className="mt-1 text-sm text-foreground/85 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-hoco-green shrink-0" />
                    <span className="line-clamp-2">
                      {confirmedOrderDetails.deliveryAddress}, {confirmedOrderDetails.commune}, {confirmedOrderDetails.wilaya}
                    </span>
                  </p>
                </div>
              </div>

              {/* Items Summary */}
              <div className="rounded-2xl border border-zinc-100 p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">{t("cart.itemsOrdered")}</h3>
                <div className="divide-y divide-zinc-100">
                  {confirmedOrderDetails.items.map((item: any) => (
                    <div key={`${item.id}-${item.color}`} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                          {item.image ? (
                            <Image src={item.image} alt={item.name} width={40} height={40} className="object-cover" />
                          ) : (
                            <CartItemMockup type={item.imageType} />
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground line-clamp-1">{item.name}</p>
                          <p className="text-[10px] text-muted-foreground">
                            {t("cart.color")}: <span className="font-semibold text-foreground">{getTranslatedColor(item.color)}</span> &bull; {language === "ar" ? "الكمية" : "Qté"}: <span className="font-semibold text-foreground">{item.quantity}</span>
                          </p>
                        </div>
                      </div>
                      <p className="text-xs font-black text-foreground shrink-0">{language === "ar" ? item.price.replace("DZD", "دج") : item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial summary */}
              <div className="rounded-2xl bg-hoco-mint/40 border border-hoco-green-border/20 p-5 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-foreground/80">
                  <span>{t("cart.subtotal")}</span>
                  <span>{confirmedOrderDetails.subtotal.toLocaleString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US")} {language === "ar" ? "دج" : "DZD"}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-foreground/80">
                  <span>{t("cart.shippingFee")}</span>
                  <span>{confirmedOrderDetails.shippingFee === 0 ? t("cart.shippingFree") : `${confirmedOrderDetails.shippingFee} ${language === "ar" ? "دج" : "DZD"}`}</span>
                </div>
                <div className="h-px bg-zinc-200" />
                <div className="flex justify-between items-center text-sm font-black text-foreground">
                  <span className="text-hoco-green">{t("cart.totalAmount")}</span>
                  <span className="text-lg text-hoco-green font-black">{confirmedOrderDetails.grandTotal.toLocaleString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US")} {language === "ar" ? "دج" : "DZD"}</span>
                </div>
              </div>

              {/* Cash On Delivery Alert */}
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
                <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-800">{t("cart.noteTitle")}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-amber-700">
                    {t("cart.noteDesc")}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-center pt-2">
                <Link href="/products" className="rounded-full bg-hoco-green px-8 py-3 text-xs font-black text-white shadow-lg shadow-hoco-green/25 transition-all hover:bg-hoco-green-dark hover:scale-[1.02]">
                  {t("cart.continueBtn")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    )
  }

  // Main UI
  return (
    <main className="min-h-screen bg-zinc-50/30 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-6">
          <Link href="/" className="hover:text-hoco-green transition-colors">{t("cart.breadcrumbHome")}</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-hoco-green transition-colors">{t("cart.breadcrumbShop")}</Link>
          <span>/</span>
          <span className="text-foreground">{t("cart.breadcrumbCart")}</span>
        </div>

        <h1 className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-8">
          {t("cart.title")}
        </h1>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            <motion.div 
              key="empty-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border border-dashed border-zinc-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green shadow-inner">
                <ShoppingBag className="h-10 w-10" />
              </div>
              <h2 className="mt-6 font-heading text-xl font-black text-foreground">{t("cart.empty")}</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                {t("cart.emptySub")}
              </p>
              <Link href="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-hoco-green px-8 py-3.5 text-xs font-black text-white shadow-lg shadow-hoco-green/25 transition-all hover:bg-hoco-green-dark hover:scale-105">
                {t("cart.discoverBtn")}
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </motion.div>
          ) : (
            <div key="cart-content" className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
              
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-7 space-y-4">
                <div className="rounded-3xl border border-border bg-white p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                    <h2 className="text-sm font-black text-foreground flex items-center gap-2">
                      <ShoppingBag className="h-4.5 w-4.5 text-hoco-green" />
                      {t("cart.myCart")} ({totalItems} {totalItems > 1 ? t("cart.articles") : t("cart.article")})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      {t("cart.clearCart")}
                    </button>
                  </div>

                  {/* Cart Items Loop */}
                  <div className="divide-y divide-zinc-100">
                    {cartItems.map((item) => (
                      <motion.div 
                        key={`${item.id}-${item.color}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0 last:pb-0"
                      >
                        {/* Item Info */}
                        <div className="flex gap-4 items-center">
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-zinc-100 bg-gradient-to-br from-hoco-green-light/20 to-zinc-50 flex items-center justify-center p-1">
                            {item.image ? (
                              <Image 
                                src={item.image} 
                                alt={item.name} 
                                width={72} 
                                height={72} 
                                className="object-cover drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                              />
                            ) : (
                              <CartItemMockup type={item.imageType} />
                            )}
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase text-hoco-green tracking-wider bg-hoco-green-light px-2 py-0.5 rounded-full">
                              {getTranslatedCategory(item.category)}
                            </span>
                            <h3 className="mt-1.5 text-xs font-bold text-foreground line-clamp-2 pr-4">
                              <Link href={`/products/${item.slug}`} className="hover:text-hoco-green transition-colors">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-[11px] text-muted-foreground flex items-center gap-1.5">
                              {t("cart.color")}: <span className="font-semibold text-foreground">{getTranslatedColor(item.color)}</span>
                            </p>
                          </div>
                        </div>

                        {/* Quantity controls and price */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-zinc-50 pt-3 sm:pt-0 sm:border-0">
                          {/* Qty selectors */}
                          <div className="flex items-center rounded-full border border-border bg-white p-0.5 shadow-sm">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="flex h-8 min-w-8 items-center justify-center text-xs font-black text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          {/* Price details */}
                          <div className="text-right min-w-[5.5rem]">
                            <p className="text-xs font-black text-foreground">
                              {(item.priceNum * item.quantity).toLocaleString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US")} {language === "ar" ? "دج" : "DZD"}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-[10px] text-muted-foreground mt-0.5">
                                ({language === "ar" ? item.price.replace("DZD", "دج") : item.price} / {language === "ar" ? "وحدة" : "u"})
                              </p>
                            )}
                          </div>

                          {/* Delete item button */}
                          <button
                            onClick={() => removeFromCart(item.id, item.color)}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Summary Info */}
                  <div className="mt-6 border-t border-zinc-100 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-hoco-green hover:underline">
                      <ArrowLeft className={`h-3.5 w-3.5 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      {t("cart.continueShopping")}
                    </Link>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-muted-foreground">{t("cart.subtotal")}:</span>
                      <p className="text-lg font-black text-foreground mt-0.5">
                        {subtotal.toLocaleString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US")} {language === "ar" ? "دج" : "DZD"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust benefits banner */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-zinc-100 bg-white p-4 flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-foreground">{t("cart.original")}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{t("cart.originalDesc")}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-white p-4 flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-foreground">{t("cart.cod")}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{t("cart.codDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Checkout Form ("Commande") */}
              <div className="lg:col-span-5">
                <form 
                  onSubmit={handleConfirmOrder}
                  className="rounded-3xl border border-hoco-green-border/50 bg-white p-5 sm:p-6 shadow-lg shadow-hoco-green/[0.02] sticky top-24"
                >
                  <h2 className="text-base font-black text-foreground flex items-center gap-2 border-b border-zinc-100 pb-4 mb-5">
                    <MapPin className="h-5 w-5 text-hoco-green" />
                    {t("cart.shippingInfo")}
                  </h2>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div id="fullName">
                      <label className="block text-xs font-black text-foreground mb-1.5 flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-hoco-green" />
                        {t("cart.fullName")}
                      </label>
                      <input 
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value)
                          if (errors.fullName) {
                            setErrors(prev => ({ ...prev, fullName: "" }))
                          }
                        }}
                        placeholder={t("cart.fullNamePlaceholder")}
                        className={`w-full rounded-2xl border bg-zinc-50/50 px-4 py-3 text-xs font-semibold text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-hoco-green focus:bg-white focus:ring-2 focus:ring-hoco-green/10 ${
                          errors.fullName ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-[10px] font-bold text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div id="phoneNumber">
                      <label className="block text-xs font-black text-foreground mb-1.5 flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5 text-hoco-green" />
                        {t("cart.phone")}
                      </label>
                      <input 
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value)
                          if (errors.phoneNumber) {
                            setErrors(prev => ({ ...prev, phoneNumber: "" }))
                          }
                        }}
                        placeholder={t("cart.phonePlaceholder")}
                        className={`w-full rounded-2xl border bg-zinc-50/50 px-4 py-3 text-xs font-semibold text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-hoco-green focus:bg-white focus:ring-2 focus:ring-hoco-green/10 ${
                          errors.phoneNumber ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1.5 text-[10px] font-bold text-red-500">{errors.phoneNumber}</p>
                      )}
                    </div>

                    {/* Wilaya Selection */}
                    <div id="wilaya">
                      <label className="block text-xs font-black text-foreground mb-1.5 flex items-center gap-1">
                        <Building className="h-3.5 w-3.5 text-hoco-green" />
                        {t("cart.wilaya")}
                      </label>
                      <div className="relative">
                        <select
                          value={selectedWilayaCode}
                          onChange={(e) => {
                            setSelectedWilayaCode(e.target.value)
                            if (errors.wilaya) {
                              setErrors(prev => ({ ...prev, wilaya: "" }))
                            }
                          }}
                          className={`w-full rounded-2xl border bg-zinc-50/50 px-4 py-3 text-xs font-semibold text-foreground outline-none appearance-none transition-all focus:border-hoco-green focus:bg-white focus:ring-2 focus:ring-hoco-green/10 ${
                            errors.wilaya ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border"
                          }`}
                        >
                          {wilayas.map((w) => (
                            <option key={w.code} value={w.code}>
                              {w.name}
                            </option>
                          ))}
                        </select>
                        <div className={`pointer-events-none absolute inset-y-0 ${language === 'ar' ? 'left-0 pl-4' : 'right-0 pr-4'} flex items-center text-muted-foreground`}>
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                      {errors.wilaya && (
                        <p className="mt-1.5 text-[10px] font-bold text-red-500">{errors.wilaya}</p>
                      )}
                    </div>

                    {/* Commune & City */}
                    <div id="commune">
                      <label className="block text-xs font-black text-foreground mb-1.5 flex items-center gap-1">
                        <Building className="h-3.5 w-3.5 text-hoco-green" />
                        {t("cart.commune")}
                      </label>
                      <input 
                        type="text"
                        value={commune}
                        onChange={(e) => {
                          setCommune(e.target.value)
                          if (errors.commune) {
                            setErrors(prev => ({ ...prev, commune: "" }))
                          }
                        }}
                        placeholder={language === "ar" ? "مثال: ديدوش مراد" : "Ex: Didouche Mourad"}
                        className={`w-full rounded-2xl border bg-zinc-50/50 px-4 py-3 text-xs font-semibold text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-hoco-green focus:bg-white focus:ring-2 focus:ring-hoco-green/10 ${
                          errors.commune ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                      />
                      {errors.commune && (
                        <p className="mt-1.5 text-[10px] font-bold text-red-500">{errors.commune}</p>
                      )}
                    </div>

                    {/* Detailed Delivery Address */}
                    <div id="deliveryAddress">
                      <label className="block text-xs font-black text-foreground mb-1.5 flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-hoco-green" />
                        {t("cart.address")}
                      </label>
                      <textarea 
                        value={deliveryAddress}
                        onChange={(e) => {
                          setDeliveryAddress(e.target.value)
                          if (errors.deliveryAddress) {
                            setErrors(prev => ({ ...prev, deliveryAddress: "" }))
                          }
                        }}
                        placeholder={t("cart.addressPlaceholder")}
                        rows={2}
                        className={`w-full rounded-2xl border bg-zinc-50/50 px-4 py-3 text-xs font-semibold text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-hoco-green focus:bg-white focus:ring-2 focus:ring-hoco-green/10 resize-none ${
                          errors.deliveryAddress ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                      />
                      {errors.deliveryAddress && (
                        <p className="mt-1.5 text-[10px] font-bold text-red-500">{errors.deliveryAddress}</p>
                      )}
                    </div>

                    {/* Shipping Method */}
                    <div>
                      <label className="block text-xs font-black text-foreground mb-2">
                        {t("cart.deliveryMode").replace("*", "").trim()}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {/* Home Delivery */}
                        <button
                          type="button"
                          onClick={() => setDeliveryMode("home")}
                          className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                            deliveryMode === "home" 
                              ? "border-hoco-green bg-hoco-green-light/10 text-hoco-green font-black" 
                              : "border-border bg-white text-muted-foreground hover:bg-zinc-50"
                          }`}
                        >
                          <Truck className="h-5 w-5 mb-1.5" />
                          <span className="text-xs">{t("cart.homeDelivery")}</span>
                          <span className="text-[10px] font-normal mt-0.5 text-foreground/75">
                            +{selectedWilaya.homeFee} {language === "ar" ? "دج" : "DZD"}
                          </span>
                        </button>

                        {/* Yalidine Stop Desk Pickup */}
                        <button
                          type="button"
                          onClick={() => setDeliveryMode("desk")}
                          className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                            deliveryMode === "desk" 
                              ? "border-hoco-green bg-hoco-green-light/10 text-hoco-green font-black" 
                              : "border-border bg-white text-muted-foreground hover:bg-zinc-50"
                          }`}
                        >
                          <Building className="h-5 w-5 mb-1.5" />
                          <span className="text-xs">{t("cart.deskDelivery").split(" (")[0]}</span>
                          <span className="text-[10px] font-normal mt-0.5 text-foreground/75">
                            +{selectedWilaya.deskFee} {language === "ar" ? "دج" : "DZD"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="mt-6 border-t border-zinc-100 pt-5 space-y-3">
                    <div className="flex justify-between text-xs font-semibold text-foreground/80">
                      <span>{t("cart.subtotal")}</span>
                      <span>{subtotal.toLocaleString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US")} {language === "ar" ? "دج" : "DZD"}</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold text-foreground/80">
                      <span>{t("cart.shippingFee")} ({selectedWilaya.name.split(" - ")[1]})</span>
                      <span>{shippingFee} {language === "ar" ? "دج" : "DZD"}</span>
                    </div>
                    <div className="h-px bg-zinc-100" />
                    <div className="flex justify-between items-center text-sm font-black text-foreground">
                      <span className="text-hoco-green">{t("cart.totalAmount").split(" (")[0]}</span>
                      <span className="text-base text-hoco-green font-black">
                        {grandTotal.toLocaleString(language === "fr" ? "fr-DZ" : language === "ar" ? "ar-DZ" : "en-US")} {language === "ar" ? "دج" : "DZD"}
                      </span>
                    </div>
                    <span className="block text-[10px] text-center text-muted-foreground font-semibold bg-zinc-50 rounded-lg py-1 mt-1">
                      {t("cart.codDesc")}
                    </span>
                  </div>

                  {/* Submit Order Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-hoco-green py-3.5 text-xs font-black text-white shadow-lg shadow-hoco-green/25 transition-all hover:bg-hoco-green-dark hover:scale-[1.01] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        {t("cart.checkoutSubmitting")}
                      </div>
                    ) : (
                      <>
                        <Check className="h-4.5 w-4.5" />
                        {t("cart.checkoutBtn")}
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
