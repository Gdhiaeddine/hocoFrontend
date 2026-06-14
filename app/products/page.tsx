"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Pagination } from "@/components/products/Pagination"
import { ProductCard } from "@/components/products/ProductCard"
import { products } from "@/components/products/ProductData"
import { ProductFilters } from "@/components/products/ProductFilters"
import { ProductsHero } from "@/components/products/ProductsHero"
import { ProductToolbar } from "@/components/products/ProductToolbar"
import { TrustBar } from "@/components/products/TrustBar"

const PAGE_SIZE = 12

function ProductsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const tagParam = searchParams.get("tag")
  const searchParam = searchParams.get("search")

  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string | null>(null)
  const [minPrice, setMinPrice] = useState<number>(500)
  const [maxPrice, setMaxPrice] = useState<number>(7000)
  const [sortBy, setSortBy] = useState<string>("Popularity")
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Synchronize category search query parameter to category state
  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  // Synchronize tag search query parameter to tag state
  useEffect(() => {
    setSelectedTag(tagParam)
  }, [tagParam])

  // Synchronize search query parameter to search state
  useEffect(() => {
    setSearchQuery(searchParam)
  }, [searchParam])

  // Custom wrappers that update the URL search params
  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category) {
      params.set("category", category)
    } else {
      params.delete("category")
    }
    router.replace(`/products?${params.toString()}`, { scroll: false })
  }

  const handleTagChange = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (tag) {
      params.set("tag", tag)
    } else {
      params.delete("tag")
    }
    router.replace(`/products?${params.toString()}`, { scroll: false })
  }

  // Reset page to 1 on filter parameter updates
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedColor, selectedTag, searchQuery, minPrice, maxPrice])

  // 1. Filtering logic
  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false
    }
    if (selectedColor && product.color.toLowerCase() !== selectedColor) {
      return false
    }
    if (selectedTag) {
      if (selectedTag === "best-seller" && product.badge !== "Best Seller") {
        return false
      }
      if (selectedTag === "new" && product.badge !== "New") {
        return false
      }
      if (selectedTag === "offers" && product.badge !== "Offer" && product.badge !== "Offers" && product.badge !== "Sale") {
        return false
      }
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      if (!product.name.toLowerCase().includes(q) && !product.category.toLowerCase().includes(q)) {
        return false
      }
    }
    const priceNum = parseFloat(product.price.replace(/[^0-9.]/g, ""))
    if (priceNum < minPrice || priceNum > maxPrice) {
      return false
    }
    return true
  })

  // 2. Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "LowToHigh") {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""))
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""))
      return priceA - priceB
    }
    if (sortBy === "HighToLow") {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""))
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""))
      return priceB - priceA
    }
    if (sortBy === "Newest") {
      return b.id - a.id
    }
    // Popularity: sort by reviews count
    return b.reviews - a.reviews
  })

  // 3. Pagination limits
  const totalCount = sortedProducts.length
  const totalPages = Math.ceil(totalCount / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + PAGE_SIZE)

  const showingStart = totalCount === 0 ? 0 : startIndex + 1
  const showingEnd = Math.min(startIndex + PAGE_SIZE, totalCount)

  const handleReset = () => {
    setSelectedColor(null)
    setMinPrice(500)
    setMaxPrice(7000)
    setSortBy("Popularity")
    setCurrentPage(1)
    router.replace("/products", { scroll: false })
  }

  const { t } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <ProductsHero />

      <section className="bg-gradient-to-b from-background via-hoco-mint/35 to-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <ProductFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedTag={selectedTag}
                setSelectedTag={handleTagChange}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                onReset={handleReset}
              />
            </div>
          </div>

          <div className="min-w-0">
            <ProductToolbar 
              onOpenFilters={() => setFiltersOpen(true)}
              totalCount={totalCount}
              showingStart={showingStart}
              showingEnd={showingEnd}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <motion.div
              key={`${selectedCategory}-${selectedColor}-${minPrice}-${maxPrice}-${sortBy}-${currentPage}`}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055 } } }}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-border p-6 shadow-sm">
                  <p className="text-base font-black text-foreground">{t("products.noProducts")}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{t("products.noProductsSub")}</p>
                  <button onClick={handleReset} className="mt-4 rounded-full bg-hoco-green px-5 py-2.5 text-xs font-black text-white hover:bg-hoco-green-dark transition-colors">
                    {t("products.resetBtn")}
                  </button>
                </div>
              )}
            </motion.div>
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-foreground/40 backdrop-blur-sm lg:hidden"
            onClick={() => setFiltersOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-[88vw] max-w-sm overflow-y-auto bg-white p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <ProductFilters
                mobile
                onClose={() => setFiltersOpen(false)}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedTag={selectedTag}
                setSelectedTag={handleTagChange}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                onReset={handleReset}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-hoco-green"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
