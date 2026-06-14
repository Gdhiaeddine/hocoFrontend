"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type CartItem = {
  id: number
  name: string
  price: string // string like "2,600 DZD"
  priceNum: number // parsed number like 2600
  quantity: number
  color: string
  image?: string
  imageType: string
  slug: string
  category: string
}

type CartContextType = {
  cartItems: CartItem[]
  totalItems: number
  subtotal: number
  addToCart: (product: any, quantity: number, color: string) => void
  removeFromCart: (id: number, color: string) => void
  updateQuantity: (id: number, color: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function parsePrice(priceStr: string): number {
  if (!priceStr) return 0
  const parsed = parseInt(priceStr.replace(/[^0-9]/g, ""), 10)
  return isNaN(parsed) ? 0 : parsed
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("hoco-cart")
      if (stored) {
        setCartItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("hoco-cart", JSON.stringify(cartItems))
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error)
      }
    }
  }, [cartItems, isLoaded])

  const addToCart = (product: any, quantity: number, color: string) => {
    setCartItems((prevItems) => {
      // Find item with same ID and Color
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.color.toLowerCase() === color.toLowerCase()
      )

      const priceNumeric = parsePrice(product.price)

      if (existingIndex > -1) {
        const updated = [...prevItems]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }

      // Add as new item
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        priceNum: priceNumeric,
        quantity,
        color,
        image: product.image,
        imageType: product.imageType || "charger",
        slug: product.slug,
        category: product.category || "",
      }
      return [...prevItems, newItem]
    })
  };

  const removeFromCart = (id: number, color: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.color.toLowerCase() === color.toLowerCase()))
    )
  }

  const updateQuantity = (id: number, color: string, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color.toLowerCase() === color.toLowerCase()
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = cartItems.reduce((acc, item) => acc + item.priceNum * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
