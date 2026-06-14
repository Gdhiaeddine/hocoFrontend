"use client"

import { Minus, Plus } from "lucide-react"

export type QuantitySelectorProps = {
  quantity: number
  onChange: (qty: number) => void
}

export function QuantitySelector({ quantity, onChange }: QuantitySelectorProps) {
  return (
    <div>
      <p className="text-sm font-black text-foreground">Quantity:</p>
      <div className="mt-3 inline-flex items-center rounded-full border border-border bg-white p-1 shadow-sm">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onChange(Math.max(1, quantity - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="flex h-10 min-w-12 items-center justify-center text-sm font-black text-foreground">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onChange(quantity + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-hoco-green-light hover:text-hoco-green"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
