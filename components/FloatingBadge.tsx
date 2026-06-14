"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

interface FloatingBadgeProps {
  icon?: LucideIcon
  title: string
  subtitle: string
  price?: string
  className?: string
  /** seconds for the gentle float loop */
  duration?: number
  /** float delay so badges are out of sync */
  delay?: number
}

export function FloatingBadge({
  icon: Icon,
  title,
  subtitle,
  price,
  className = "",
  duration = 4,
  delay = 0,
}: FloatingBadgeProps) {
  const { language } = useLanguage()
  const displayPrice = price && language === "ar" ? price.replace("DZD", "دج") : price

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: delay + 0.6 },
        scale: { duration: 0.5, delay: delay + 0.6 },
        y: {
          duration,
          delay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.06, transition: { duration: 0.15, ease: "easeOut", delay: 0 } }}
      className={`absolute z-30 flex items-center gap-3 rounded-2xl border border-hoco-green-border/70 bg-card/80 px-3.5 py-2.5 shadow-[0_12px_40px_-12px_rgba(0,139,58,0.35)] backdrop-blur-md ${className}`}
    >
      {Icon && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
          <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
        </span>
      )}
      <div className="leading-tight">
        <p className="text-xs font-bold text-foreground">{title}</p>
        <p className="text-[11px] text-muted-foreground">{subtitle}</p>
        {price && <p className="text-xs font-extrabold text-hoco-green">{displayPrice}</p>}
      </div>
    </motion.div>
  )
}
