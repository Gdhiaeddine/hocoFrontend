"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { 
  ShoppingCart, 
  BatteryCharging, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Bluetooth, 
  Volume2, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Shield,
  Car,
  Check,
  Heart
} from "lucide-react"
import { ColorSelector } from "./ColorSelector"
import { miniBenefits, type ProductDetails, getProductDetailsBySlug } from "./ProductDetailsData"
import { QuantitySelector } from "./QuantitySelector"
import { useCart } from "@/context/CartContext"
import { useFavorites } from "@/context/FavoritesContext"
import { useLanguage } from "@/context/LanguageContext"

const iconMap: Record<string, any> = {
  BatteryCharging,
  Zap,
  ShieldCheck,
  Smartphone,
  Bluetooth,
  Volume2,
  Sparkles,
  RefreshCw,
  Layers,
  Shield,
  Car
}

export function ProductInfo({ product: propProduct }: { product: ProductDetails }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const { t, language } = useLanguage()
  const product = getProductDetailsBySlug(propProduct.slug, language) || propProduct
  const [selectedColor, setSelectedColor] = useState("White")
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const favorited = isFavorite(product.id)

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor)
    router.push("/cart")
  }

  const benefitTitleKeys: Record<string, string> = {
    "Fast Delivery": "trust.deliveryTitle",
    "12-Month Warranty": "trust.warrantyTitle",
    "Easy Return": "hero.features.returnsTitle",
    "Cash on Delivery": "cart.cod"
  }
  const benefitSubKeys: Record<string, string> = {
    "All over Algeria": "trust.deliveryDesc",
    "Authentic products": "cart.originalDesc",
    "7 days": "hero.features.returnsDesc",
    "Or online": "cart.codDesc"
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-3xl border border-border bg-white p-5 shadow-[0_30px_90px_-50px_rgba(0,139,58,0.5)] sm:p-7 text-left rtl:text-right"
    >
      <span className="inline-flex rounded-full border border-hoco-green-border bg-hoco-green-light px-3 py-1 text-[10px] font-black uppercase tracking-wide text-hoco-green">
        {product.brand}
      </span>
      <h1 className="mt-4 font-heading text-xl font-black tracking-tight text-foreground sm:text-2xl lg:text-3xl">
        {product.name}
      </h1>


      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-2xl font-black text-hoco-green sm:text-3xl">
        {language === "ar" ? product.price.replace("DZD", "دج") : product.price}
      </motion.p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{product.description}</p>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate="show"
        className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {product.features.map((feature) => {
          const IconComponent = iconMap[feature.icon] || Zap
          return (
            <motion.div
              key={feature.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-hoco-mint/50 p-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
                <IconComponent className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-black text-foreground">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="my-7 h-px bg-border" />
      <div className="grid gap-6 sm:grid-cols-2">
        <ColorSelector selectedColor={selectedColor} onChange={setSelectedColor} />
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
      </div>

      <div className="mt-5 flex flex-wrap gap-3 sm:flex-nowrap">
        <button 
          onClick={handleAddToCart}
          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-black text-white shadow-lg transition-all duration-300 hover:scale-[1.02] ${
            isAdded
              ? "bg-emerald-600 shadow-emerald-600/25"
              : "bg-hoco-green shadow-hoco-green/25 hover:bg-hoco-green-dark"
          }`}
        >
          {isAdded ? (
            <>
              <Check className="h-4 w-4" />
              {t("details.addedToCart")}
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              {t("details.addToCart")}
            </>
          )}
        </button>
        <button 
          onClick={handleBuyNow}
          className="flex-1 rounded-full border border-hoco-green-border bg-white px-6 py-3 text-xs font-black text-hoco-green transition-all hover:scale-[1.02] hover:bg-hoco-green-light"
        >
          {t("details.buyNow")}
        </button>
        <button
          onClick={() => toggleFavorite(product)}
          aria-label={favorited ? "Remove from wishlist" : "Add to wishlist"}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:scale-[1.02] ${
            favorited
              ? "border-rose-200 bg-rose-50 text-rose-500 shadow-sm"
              : "border-border bg-white text-foreground/60 hover:border-hoco-green hover:text-hoco-green shadow-sm"
          }`}
        >
          <Heart className={`h-4.5 w-4.5 ${favorited ? "fill-rose-500 text-rose-500" : ""}`} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {miniBenefits.map((benefit) => {
          const displayTitle = benefitTitleKeys[benefit.title] ? t(benefitTitleKeys[benefit.title]) : benefit.title
          const displaySub = benefitSubKeys[benefit.subtitle] ? t(benefitSubKeys[benefit.subtitle]) : benefit.subtitle
          return (
            <div key={benefit.title} className="flex gap-2 rounded-2xl bg-zinc-50 p-2.5">
              <benefit.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-hoco-green" />
              <div>
                <p className="text-[11px] font-black text-foreground">{displayTitle}</p>
                <p className="text-[10px] text-muted-foreground">{displaySub}</p>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
