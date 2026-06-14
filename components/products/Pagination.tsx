"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="Products pagination" className="mt-10 flex items-center justify-center gap-2">
      <button 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:border-hoco-green-border hover:text-hoco-green disabled:opacity-50 disabled:pointer-events-none"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1
        const isActive = page === currentPage
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-11 min-w-11 items-center justify-center rounded-full border px-4 text-sm font-black transition-colors ${
              isActive
                ? "border-hoco-green bg-hoco-green text-white shadow-lg shadow-hoco-green/20"
                : "border-border bg-white text-foreground hover:border-hoco-green-border hover:text-hoco-green"
            }`}
          >
            {page}
          </button>
        )
      })}
      <button 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:border-hoco-green-border hover:text-hoco-green disabled:opacity-50 disabled:pointer-events-none"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}
