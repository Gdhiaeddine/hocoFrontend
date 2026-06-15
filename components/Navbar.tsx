"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, Search, ShoppingCart, User, X, Heart, Trash2, Check, Globe } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useFavorites } from "@/context/FavoritesContext"
import { categories, products } from "@/components/products/ProductData"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

const NAV_LINKS = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.categories", href: "#", hasChevron: true },
  { labelKey: "nav.bestSellers", href: "/products?tag=best-seller" },
  { labelKey: "nav.newArrivals", href: "/products?tag=new" },
  { labelKey: "nav.offers", href: "/products?tag=offers" },
  { labelKey: "nav.aboutUs", href: "/about" },
  { labelKey: "nav.contact", href: "/contact" },
]

const getTranslatedCategory = (name: string, t: (key: string) => string) => {
  const categoryKeys: Record<string, string> = {
    "Chargers": "categories.chargers",
    "Power Banks": "categories.powerBanks",
    "Cables": "categories.cables",
    "Earbuds": "categories.audio",
    "Car Accessories": "categories.car",
    "Cases": "categories.protection",
  }
  return categoryKeys[name] ? t(categoryKeys[name]) : name
}

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tagParam = searchParams.get("tag")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, addToCart } = useCart()
  const { favorites, toggleFavorite, totalFavorites } = useFavorites()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const [favoritesOpen, setFavoritesOpen] = useState(false)
  const [addedItemIds, setAddedItemIds] = useState<Record<number, boolean>>({})
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false)

  const handleAddFromWishlist = (product: any) => {
    const productId = product.id || Math.abs(product.name.split("").reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0))
    addToCart({ ...product, id: productId }, 1, "White")
    setAddedItemIds(prev => ({ ...prev, [productId]: true }))
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [productId]: false }))
    }, 1500)
  }
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim().length > 0) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSuggestionsOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-hoco-green-border/40 bg-card/80 shadow-[0_4px_30px_-10px_rgba(0,139,58,0.15)] backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-hoco-green">
            hoco
            <span className="text-hoco-green-dark">.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-0.5 xl:gap-1 min-[1150px]:flex">
          {NAV_LINKS.map((link) => {
            const label = t(link.labelKey)
            if (link.labelKey === "nav.categories") {
              return (
                <li key={link.labelKey} className="relative">
                  <button
                    onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                    className={`group relative flex items-center gap-1 rounded-lg px-2 py-2 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                      categoriesDropdownOpen ? "text-hoco-green" : "text-foreground/70 hover:text-hoco-green"
                    }`}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${categoriesDropdownOpen ? "rotate-180" : ""}`} />
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-hoco-green transition-transform duration-300 ${
                        categoriesDropdownOpen ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>

                  {/* Backdrop Overlay for outside click closing */}
                  {categoriesDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={() => setCategoriesDropdownOpen(false)} 
                    />
                  )}

                  {/* Dropdown Menu Card */}
                  <AnimatePresence>
                    {categoriesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute start-0 mt-2.5 w-64 rounded-2xl border border-zinc-150 bg-white p-2.5 shadow-xl shadow-zinc-200/40 z-50"
                      >
                        <ul className="space-y-1">
                          {categories.map((cat) => {
                            const Icon = cat.icon
                            return (
                              <li key={cat.name}>
                                <Link
                                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                                  onClick={() => setCategoriesDropdownOpen(false)}
                                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-foreground/80 hover:bg-hoco-green-light hover:text-hoco-green transition-colors"
                                >
                                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-100 text-muted-foreground group-hover:text-hoco-green">
                                    <Icon className="h-4.5 w-4.5 text-hoco-green" />
                                  </span>
                                  {getTranslatedCategory(cat.name, t)}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            }

            const linkTag = link.href.includes("?tag=") ? link.href.split("?tag=")[1] : null
            const isActive = linkTag 
              ? pathname === "/products" && tagParam === linkTag 
              : pathname === link.href
            return (
              <li key={link.labelKey}>
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1 rounded-lg px-2 py-2 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive ? "text-hoco-green" : "text-foreground/70 hover:text-hoco-green"
                  }`}
                >
                  {label}
                  {link.hasChevron && <ChevronDown className="h-3.5 w-3.5" />}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-hoco-green transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 min-[1150px]:flex">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="group flex items-center rounded-full border border-border bg-secondary/50 py-1 ps-4 pe-1 transition-colors focus-within:border-hoco-green">
              <input
                type="text"
                placeholder={t("nav.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setSuggestionsOpen(e.target.value.length > 1)
                }}
                onFocus={() => {
                  if (searchQuery.length > 1) setSuggestionsOpen(true)
                }}
                className="w-36 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none xl:w-44"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-hoco-green text-white transition-transform hover:scale-105"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            <AnimatePresence>
              {suggestionsOpen && (
                <SearchSuggestions
                  query={searchQuery}
                  onClose={() => {
                    setSuggestionsOpen(false)
                    setSearchQuery("")
                  }}
                />
              )}
            </AnimatePresence>
          </form>

          <button
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
          >
            <User className="h-5 w-5" />
          </button>

          {/* Desktop Favorites/Wishlist Icon */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
          >
            <Heart className="h-5 w-5" />
            {mounted && totalFavorites > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-hoco-green text-[10px] font-bold text-white">
                {totalFavorites}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
          >
            <ShoppingCart className="h-5 w-5" />
            {mounted && totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-hoco-green text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <Link href="/products" className="rounded-full bg-hoco-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-hoco-green/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-hoco-green/40">
            {t("nav.shopNow")}
          </Link>
        </div>

        {/* Mobile right actions */}
        <div className="flex items-center gap-1 min-[1150px]:hidden">

          {/* Mobile Favorites/Wishlist Icon */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
          >
            <Heart className="h-5 w-5" />
            {mounted && totalFavorites > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-hoco-green text-[10px] font-bold text-white">
                {totalFavorites}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
          >
            <ShoppingCart className="h-5 w-5" />
            {mounted && totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-hoco-green text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-hoco-green-border/40 bg-card min-[1150px]:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const label = t(link.labelKey)
                if (link.labelKey === "nav.categories") {
                  return (
                    <div key={link.labelKey} className="space-y-1">
                      <button
                        onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-hoco-green-light hover:text-hoco-green transition-colors"
                      >
                        {label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCategoriesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileCategoriesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ps-4 space-y-1"
                          >
                            {categories.map((cat) => {
                              const Icon = cat.icon
                              return (
                                <Link
                                  key={cat.name}
                                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                                  onClick={() => {
                                    setMobileOpen(false)
                                    setMobileCategoriesOpen(false)
                                  }}
                                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-foreground/75 hover:bg-hoco-green-light hover:text-hoco-green transition-colors"
                                >
                                  <Icon className="h-4 w-4 text-hoco-green" />
                                  {getTranslatedCategory(cat.name, t)}
                                </Link>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const linkTag = link.href.includes("?tag=") ? link.href.split("?tag=")[1] : null
                const isActive = linkTag 
                  ? pathname === "/products" && tagParam === linkTag 
                  : pathname === link.href
                return (
                  <Link
                    key={link.labelKey}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-hoco-green-light text-hoco-green"
                        : "text-foreground/80 hover:bg-hoco-green-light hover:text-hoco-green"
                    }`}
                  >
                    {label}
                    {link.hasChevron && <ChevronDown className="h-4 w-4" />}
                  </Link>
                )
              })}

              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <div className="flex items-center rounded-full border border-border bg-secondary/50 py-1 ps-4 pe-1">
                  <input
                    type="text"
                    placeholder={t("nav.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setSuggestionsOpen(e.target.value.length > 1)
                    }}
                    onFocus={() => {
                      if (searchQuery.length > 1) setSuggestionsOpen(true)
                    }}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-hoco-green text-white"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>

                <AnimatePresence>
                  {suggestionsOpen && (
                    <SearchSuggestions
                      query={searchQuery}
                      onClose={() => {
                        setSuggestionsOpen(false)
                        setSearchQuery("")
                      }}
                    />
                  )}
                </AnimatePresence>
              </form>

              <Link href="/products" onClick={() => setMobileOpen(false)} className="mt-2 block w-full rounded-full bg-hoco-green px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-hoco-green/30">
                {t("nav.shopNow")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function SearchSuggestions({ query, onClose }: { query: string; onClose: () => void }) {
  const router = useRouter()
  const { language, t } = useLanguage()
  const lowercaseQuery = query.toLowerCase()

  const matchedCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 3)

  const matchedProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(lowercaseQuery) ||
    prod.category.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 5)

  if (matchedCategories.length === 0 && matchedProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute end-0 top-full mt-2 w-72 rounded-2xl border border-zinc-150 bg-white p-4 shadow-xl z-50 text-center text-xs text-muted-foreground"
      >
        No suggestions found
      </motion.div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute end-0 top-full mt-2 w-72 rounded-2xl border border-zinc-150 bg-white p-3 shadow-xl z-50 text-start"
      >
        <ul className="space-y-4">
          {matchedCategories.length > 0 && (
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground px-2">Categories</p>
              <ul className="mt-1.5 space-y-1">
                {matchedCategories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      type="button"
                      onClick={() => {
                        router.push(`/products?category=${encodeURIComponent(cat.name)}`)
                        onClose()
                      }}
                      className="flex w-full items-center gap-2.5 rounded-xl px-2 py-1.5 text-start text-xs font-semibold text-foreground/80 hover:bg-hoco-green-light hover:text-hoco-green transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-hoco-green" />
                      {getTranslatedCategory(cat.name, t)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {matchedProducts.length > 0 && (
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground px-2">Products</p>
              <ul className="mt-1.5 space-y-1">
                {matchedProducts.map((prod) => (
                  <li key={prod.id}>
                    <button
                      type="button"
                      onClick={() => {
                        router.push(`/products/${prod.slug}`)
                        onClose()
                      }}
                      className="flex w-full items-start gap-2.5 rounded-xl px-2 py-1.5 text-start text-xs font-semibold text-foreground/80 hover:bg-hoco-green-light hover:text-hoco-green transition-colors"
                    >
                      <span className="mt-1 h-1 w-1 rounded-full bg-zinc-400" />
                      <div>
                        <p className="font-bold text-foreground leading-4">{prod.name}</p>
                        <p className="text-[9px] text-muted-foreground mt-0.5">{getTranslatedCategory(prod.category, t)} — {language === "ar" ? prod.price.replace("DZD", "دج") : prod.price}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ul>
      </motion.div>
    </>
  )
}
