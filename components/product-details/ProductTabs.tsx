"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { type ProductDetails, getProductDetailsBySlug } from "./ProductDetailsData"
import { useLanguage } from "@/context/LanguageContext"

function SpecsTable({ specifications }: { specifications: [string, string][] }) {
  const { t } = useLanguage()

  const specLabelMap: Record<string, string> = {
    "Brand": "specs.brand",
    "Model": "specs.model",
    "Power": "specs.power",
    "Input": "specs.input",
    "USB-C Output": "specs.usbCOutput",
    "USB-A Output": "specs.usbAOutput",
    "Total Output": "specs.totalOutput",
    "Material": "specs.material",
    "Color": "specs.color",
    "Dimensions": "specs.dimensions",
    "Weight": "specs.weight",
    "Power Output": "specs.powerOutput",
    "Output Ports": "specs.outputPorts",
    "Safety Certification": "specs.safetyCert",
    "Bluetooth Version": "specs.bluetoothVer",
    "Driver Unit": "specs.driverUnit",
    "Frequency Response": "specs.frequencyResp",
    "Battery Capacity": "specs.batteryCap",
    "Charging Time": "specs.chargingTime",
    "Music/Talk Time": "specs.musicTime",
    "Transmission Range": "specs.range",
    "Connector Type": "specs.connectorType",
    "Output Current": "specs.outputCurrent",
    "Length": "specs.length",
    "Data Sync Speed": "specs.dataSpeed",
    "Bending Test Lifetime": "specs.bendingLifetime",
    "Rated Capacity": "specs.ratedCap",
    "Battery Type": "specs.batteryType",
    "Compatibility": "specs.compatibility",
    "Thickness": "specs.thickness",
    "Finish": "specs.finish",
    "Wireless Charging": "specs.wirelessCharging",
    "Device Type": "specs.deviceType",
    "Input Voltage": "specs.inputVoltage",
    "Output Rating": "specs.outputRating",
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      {specifications.map(([label, value]) => {
        const displayLabel = specLabelMap[label] ? t(specLabelMap[label]) : label
        return (
          <div key={label} className="grid grid-cols-[42%_58%] border-b border-border last:border-b-0">
            <div className="bg-zinc-50 px-4 py-3 text-sm font-black text-foreground">{displayLabel}</div>
            <div className="px-4 py-3 text-sm text-muted-foreground">{value}</div>
          </div>
        )
      })}
    </div>
  )
}

const getCategoryBullets = (category: string, t: (k: string) => string) => {
  if (category === "Chargers") {
    return [
      t("bullets.chargers1"),
      t("bullets.chargers2"),
      t("bullets.chargers3"),
      t("bullets.chargers4")
    ]
  }
  if (category === "Earbuds" || category === "Audio") {
    return [
      t("bullets.earbuds1"),
      t("bullets.earbuds2"),
      t("bullets.earbuds3"),
      t("bullets.earbuds4")
    ]
  }
  if (category === "Cables") {
    return [
      t("bullets.cables1"),
      t("bullets.cables2"),
      t("bullets.cables3"),
      t("bullets.cables4")
    ]
  }
  if (category === "Power Banks") {
    return [
      t("bullets.powerBanks1"),
      t("bullets.powerBanks2"),
      t("bullets.powerBanks3"),
      t("bullets.powerBanks4")
    ]
  }
  if (category === "Cases" || category === "Protection") {
    return [
      t("bullets.cases1"),
      t("bullets.cases2"),
      t("bullets.cases3"),
      t("bullets.cases4")
    ]
  }
  return [
    t("bullets.default1"),
    t("bullets.default2"),
    t("bullets.default3"),
    t("bullets.default4")
  ]
}

export function ProductTabs({ product: propProduct }: { product: ProductDetails }) {
  const { t, language } = useLanguage()
  const product = getProductDetailsBySlug(propProduct.slug, language) || propProduct
  const tabs = [t("tabs.description"), t("tabs.specifications")]
  
  // Map active status to standard non-translated strings for local comparison logic
  const [activeIndex, setActiveIndex] = useState(0)
  const bullets = getCategoryBullets(product.category, t)

  return (
    <section className="bg-gradient-to-b from-background via-hoco-mint/30 to-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto border-b border-border">
          <div className="flex min-w-max gap-8">
            {tabs.map((tab, idx) => {
              const isActive = activeIndex === idx
              return (
                <button
                  key={tab}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative pb-4 text-sm font-black transition-colors ${
                    isActive ? "text-hoco-green" : "text-muted-foreground hover:text-hoco-green"
                  }`}
                >
                  {tab}
                  {isActive && <motion.span layoutId="product-tab" className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-hoco-green" />}
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {activeIndex === 0 && (
              <div className="grid gap-5 lg:grid-cols-2">
                <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <h2 className="font-heading text-2xl font-black text-foreground">{t("tabs.descriptionHeader")}</h2>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {product.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-hoco-green" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <h2 className="font-heading text-2xl font-black text-foreground">{t("tabs.specificationsHeader")}</h2>
                  <div className="mt-5">
                    <SpecsTable specifications={product.specifications} />
                  </div>
                </article>
              </div>
            )}
            {activeIndex === 1 && (
              <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h2 className="font-heading text-2xl font-black text-foreground">{t("tabs.detailedSpecsHeader")}</h2>
                <div className="mt-5">
                  <SpecsTable specifications={product.specifications} />
                </div>
              </article>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
