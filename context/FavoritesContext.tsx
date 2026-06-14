"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type FavoriteItem = {
  id: number
  name: string
  price: string
  category?: string
  image?: string
  imageType?: string
  slug: string
}

type FavoritesContextType = {
  favorites: FavoriteItem[]
  toggleFavorite: (product: any) => void
  isFavorite: (id: number) => boolean
  totalFavorites: number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

const getProductId = (product: any): number => {
  if (product.id) return Number(product.id)
  return Math.abs(product.name.split("").reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0))
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("hoco-favorites")
      if (stored) {
        setFavorites(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage:", error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save favorites to localStorage when they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("hoco-favorites", JSON.stringify(favorites))
      } catch (error) {
        console.error("Failed to save favorites to localStorage:", error)
      }
    }
  }, [favorites, isLoaded])

  const toggleFavorite = (product: any) => {
    const id = getProductId(product)
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((item) => item.id === id)
      if (exists) {
        // Remove from favorites
        return prevFavorites.filter((item) => item.id !== id)
      } else {
        // Add to favorites
        const newItem: FavoriteItem = {
          id,
          name: product.name,
          price: product.price,
          category: product.category || "",
          image: product.image,
          imageType: product.imageType || "charger",
          slug: product.slug,
        }
        return [...prevFavorites, newItem]
      }
    })
  }

  const isFavorite = (id: number) => {
    return favorites.some((item) => item.id === id)
  }

  const totalFavorites = favorites.length

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
