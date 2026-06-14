"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FloatingProductProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  /** subtle rotation sway range in degrees */
  rotate?: number
}

/**
 * Wrapper that gives any product image a gentle continuous float,
 * a slight rotation sway, an entrance animation and a hover lift.
 */
export function FloatingProduct({
  children,
  className = "",
  duration = 5,
  delay = 0,
  rotate = 3,
}: FloatingProductProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -14, 0],
        rotate: [-rotate, rotate, -rotate],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration, delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        rotate: {
          duration: duration * 1.6,
          delay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.08, zIndex: 40, transition: { duration: 0.15, ease: "easeOut", delay: 0 } }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface ProductImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

/**
 * Real product photo rendered inside a soft glass card with shadow,
 * used for the floating hero collage.
 */
export function ProductImage({ src, alt, width, height, priority = false }: ProductImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className="h-auto w-full select-none object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
    />
  )
}
