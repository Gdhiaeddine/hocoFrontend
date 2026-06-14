import { 
  BatteryCharging, 
  CreditCard, 
  RotateCcw, 
  ShieldCheck, 
  Truck, 
  Zap, 
  Bluetooth, 
  Smartphone, 
  Shield, 
  Sparkles, 
  RefreshCw, 
  Layers,
  Volume2,
  Car
} from "lucide-react"
import { products, type Product } from "@/components/products/ProductData"

export type ProductDetails = Product & {
  brand: string
  soldThisMonth: number
  description: string
  features: { title: string; subtitle: string; icon: any }[]
  specifications: [string, string][]
}

export const product = {
  name: "HOCO 20W Fast Charger Dual Port",
  brand: "HOCO",
  slug: "hoco-20w-fast-charger-dual-port",
  price: "2,600 DZD",
  rating: 4.9,
  reviews: 320,
  soldThisMonth: 128,
  badge: "Best Seller",
  color: "White",
  description:
    "HOCO 20W wall charger with dual port (USB-C + USB-A) for fast and safe charging of all your devices.",
  features: [
    { title: "20W", subtitle: "Max power", icon: Zap },
    { title: "Dual Port", subtitle: "USB-C + USB-A", icon: BatteryCharging },
    { title: "Fast Charging", subtitle: "Power Delivery", icon: Zap },
    { title: "Advanced Safety", subtitle: "Smart protection", icon: ShieldCheck },
  ],
  specifications: [
    ["Brand", "HOCO"],
    ["Model", "C88A"],
    ["Power", "20W Max"],
    ["Input", "AC 100-240V, 50/60Hz, 0.5A"],
    ["USB-C Output", "5V/3A, 9V/2.22A, 12V/1.67A"],
    ["USB-A Output", "5V/3A, 9V/2A, 12V/1.5A"],
    ["Total Output", "5V/3A Max"],
    ["Material", "Fireproof PC"],
    ["Color", "White / Black"],
    ["Dimensions", "81 x 41 x 28 mm"],
    ["Weight", "52 g"],
  ],
}

export const miniBenefits = [
  { title: "Fast Delivery", subtitle: "All over Algeria", icon: Truck },
  { title: "12-Month Warranty", subtitle: "Authentic products", icon: ShieldCheck },
  { title: "Easy Return", subtitle: "7 days", icon: RotateCcw },
  { title: "Cash on Delivery", subtitle: "Or online", icon: CreditCard },
]

export const relatedProducts = [
  { id: 1, name: "HOCO 30W Fast Charger PD", price: "3,500 DZD", rating: 4.8, reviews: 186, badge: "New", imageType: "charger" },
  { id: 2, name: "HOCO N32 PD 30W Wall Charger", price: "3,100 DZD", rating: 4.8, reviews: 183, imageType: "black-charger" },
  { id: 3, name: "HOCO C100A 3-Port Charger 18W", price: "2,200 DZD", rating: 4.7, reviews: 142, imageType: "charger" },
  { id: 4, name: "HOCO X22 Type-C to Lightning Cable", price: "1,200 DZD", rating: 4.6, reviews: 96, imageType: "cable" },
  { id: 5, name: "HOCO Z40 Car Charger 18W", price: "1,500 DZD", rating: 4.6, reviews: 75, imageType: "car-charger" },
  { id: 6, name: "HOCO CW28 Wireless Charger 15W", price: "2,800 DZD", rating: 4.7, reviews: 120, imageType: "wireless" },
]

export function getProductDetailsBySlug(slug: string): ProductDetails | null {
  const baseProduct = products.find((p) => p.slug === slug)
  if (!baseProduct) return null

  let description = ""
  let features: { title: string; subtitle: string; icon: string }[] = []
  let specifications: [string, string][] = []
  
  const soldThisMonth = Math.floor(baseProduct.reviews * 1.5) + (baseProduct.id * 5)
  const brand = "HOCO"

  if (baseProduct.category === "Chargers") {
    const isWireless = baseProduct.imageType === "wireless-charger"
    const power = baseProduct.name.includes("30W") ? "30W" : "20W"
    
    description = `${baseProduct.name} is a high-performance fast charger designed for safety and efficiency. Features advanced Power Delivery (PD) technology for rapid charging of all compatible smartphones, tablets, and accessories.`
    
    features = [
      { title: isWireless ? "15W Max" : `${power} Max`, subtitle: "Power Output", icon: "Zap" },
      { title: baseProduct.name.includes("Dual") ? "Dual Port" : "Smart Output", subtitle: isWireless ? "Magnetic Alignment" : "USB-C + USB-A", icon: "BatteryCharging" },
      { title: "Safe Charge", subtitle: "Multi-protection", icon: "ShieldCheck" },
      { title: "Universal", subtitle: "Wide compatibility", icon: "Smartphone" }
    ]
    
    specifications = [
      ["Brand", brand],
      ["Model", baseProduct.id === 1 ? "C88A" : baseProduct.id === 7 ? "CW35" : "N32"],
      ["Power Output", isWireless ? "15W / 10W / 7.5W / 5W" : `${power} Max`],
      ["Input", isWireless ? "9V/2A, 5V/2A" : "AC 100-240V, 50/60Hz, 0.6A"],
      ["Output Ports", isWireless ? "Wireless Qi" : "USB-C (PD) + USB-A (QC)"],
      ["Material", "Fireproof PC + ABS"],
      ["Safety Certification", "CE, FCC, RoHS"],
      ["Dimensions", isWireless ? "56 x 5.5 mm" : "82 x 42 x 29 mm"],
      ["Weight", isWireless ? "45g" : "55g"],
      ["Color", baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
    ]
  } else if (baseProduct.category === "Earbuds" || baseProduct.imageType === "headphones") {
    const isOverEar = baseProduct.imageType === "headphones"
    description = `${baseProduct.name} delivers premium sound quality with deep bass, clear trebles, and a highly comfortable ergonomic design. Enjoy wireless freedom for music, calls, and workouts.`
    
    features = [
      { title: "Bluetooth 5.3", subtitle: "Stable connection", icon: "Bluetooth" },
      { title: isOverEar ? "40 Hours" : "20 Hours", subtitle: "Total playtime", icon: "BatteryCharging" },
      { title: "HD Mic", subtitle: "Crystal clear calls", icon: "Volume2" },
      { title: "Smart Touch", subtitle: "Easy controls", icon: "Sparkles" }
    ]
    
    specifications = [
      ["Brand", brand],
      ["Model", isOverEar ? "W35" : "EW46"],
      ["Bluetooth Version", "v5.3"],
      ["Driver Unit", isOverEar ? "40mm" : "13mm dynamic"],
      ["Frequency Response", "20Hz - 20KHz"],
      ["Battery Capacity", isOverEar ? "400mAh (Headphones)" : "30mAh (Earbuds) / 300mAh (Case)"],
      ["Charging Time", "About 1.5 - 2 hours"],
      ["Music/Talk Time", isOverEar ? "Up to 40 hours" : "Up to 4 hours (20h with case)"],
      ["Transmission Range", "10 meters"],
      ["Weight", isOverEar ? "208g" : "45g"],
      ["Color", baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
    ]
  } else if (baseProduct.category === "Cables") {
    const isTypeC = baseProduct.imageType.includes("type-c")
    const length = baseProduct.name.includes("X21") ? "1.0m" : "1.2m"
    const current = baseProduct.name.includes("Reinforced") ? "3A Max" : "2.4A Max"
    
    description = `The ${baseProduct.name} is built to survive daily heavy usage. With reinforced connectors and high-quality premium braiding, it supports fast charging and ultra-fast data transfer speeds.`
    
    features = [
      { title: current, subtitle: "Charging Current", icon: "Zap" },
      { title: "Reinforced", subtitle: "Anti-bending build", icon: "ShieldCheck" },
      { title: "480 Mbps", subtitle: "High-speed sync", icon: "RefreshCw" },
      { title: length, subtitle: "Optimized length", icon: "Layers" }
    ]
    
    specifications = [
      ["Brand", brand],
      ["Model", baseProduct.name.includes("X88") ? "X88" : baseProduct.name.includes("X21") ? "X21" : "X100"],
      ["Connector Type", isTypeC ? "USB-A to Type-C" : "USB-A to Lightning"],
      ["Output Current", current],
      ["Length", length],
      ["Material", baseProduct.name.includes("Reinforced") ? "Nylon Braided + TPE" : "Food-grade Silicone"],
      ["Data Sync Speed", "Up to 480 Mbps"],
      ["Bending Test Lifetime", "10,000+ bends"],
      ["Weight", "24g"],
      ["Color", baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
    ]
  } else if (baseProduct.category === "Power Banks") {
    description = `The ${baseProduct.name} offers massive portable power to keep your devices charged on the go. Equipped with multi-port outputs and smart power delivery, it's the perfect travel companion.`
    
    features = [
      { title: "20,000 mAh", subtitle: "Ultra capacity", icon: "BatteryCharging" },
      { title: "20W PD/QC", subtitle: "Bidirectional fast charge", icon: "Zap" },
      { title: "LED Screen", subtitle: "Digital level display", icon: "Sparkles" },
      { title: "Multi-Safe", subtitle: "9 layers of protection", icon: "ShieldCheck" }
    ]
    
    specifications = [
      ["Brand", brand],
      ["Model", "J86"],
      ["Battery Capacity", "20000mAh (74Wh)"],
      ["Rated Capacity", "11800mAh (5V TYP 3A)"],
      ["Input Ports", "Micro-USB / Type-C (18W Max)"],
      ["Output Ports", "USB-A 1/2 (22.5W Max) + Type-C (PD 20W Max)"],
      ["Total Output", "5V / 3A Max"],
      ["Battery Type", "A+ grade Lithium Polymer"],
      ["Dimensions", "142 x 68 x 28 mm"],
      ["Weight", "415g"],
      ["Color", baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
    ]
  } else if (baseProduct.category === "Cases") {
    description = `Safeguard your device with the ${baseProduct.name}. Features precise cutouts, responsive button covers, and premium drop protection without adding bulk to your sleek phone profile.`
    
    features = [
      { title: "Drop Guard", subtitle: "Shock absorbing corners", icon: "ShieldCheck" },
      { title: "Slim Profile", subtitle: "Lightweight handling", icon: "Smartphone" },
      { title: "Raised Bezel", subtitle: "Screen & camera shield", icon: "Shield" },
      { title: "Anti-Yellowing", subtitle: "Long-lasting clarity", icon: "Sparkles" }
    ]
    
    specifications = [
      ["Brand", brand],
      ["Model", "HOCO Clear Shield"],
      ["Compatibility", "iPhone 15 / iPhone 15 Pro"],
      ["Material", "TPU (Thermoplastic Polyurethane) + PC (Polycarbonate)"],
      ["Thickness", "1.5 mm"],
      ["Finish", "Glossy & Crystal Clear"],
      ["Wireless Charging", "Compatible with MagSafe and Qi"],
      ["Weight", "28g"],
      ["Color", baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
    ]
  } else {
    const isHolder = baseProduct.imageType === "car-holder"
    description = `Upgrade your drive with the ${baseProduct.name}. Designed for convenience, safety, and reliability on any road surface or charging destination.`
    
    features = [
      { title: isHolder ? "Strong Grip" : "Dual USB ports", subtitle: isHolder ? "Magnetic mount" : "Fast charging output", icon: isHolder ? "ShieldCheck" : "BatteryCharging" },
      { title: isHolder ? "360° Rotate" : "Smart charging", subtitle: isHolder ? "Flexible view angle" : "Optimal device safety", icon: isHolder ? "RefreshCw" : "Zap" },
      { title: "Heat Shield", subtitle: "Flame retardant built", icon: "Shield" },
      { title: "Compact Fit", subtitle: "Saves vehicle space", icon: "Car" }
    ]
    
    specifications = [
      ["Brand", brand],
      ["Model", isHolder ? "CA76" : "Z49"],
      ["Device Type", isHolder ? "Dashboard / Windshield Mount" : "Dual Port Car Charger"],
      ["Input Voltage", isHolder ? "N/A" : "DC 12V - 24V"],
      ["Output Rating", isHolder ? "N/A" : "USB-1/2: 5V/2.4A (12W Max each)"],
      ["Material", isHolder ? "ABS + Silicone + Magnet" : "Aluminum Alloy + Flame Retardant PC"],
      ["Dimensions", isHolder ? "115 x 75 x 180 mm" : "58 x 26 x 26 mm"],
      ["Weight", isHolder ? "130g" : "32g"],
      ["Color", baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
    ]
  }

  return {
    ...baseProduct,
    brand,
    soldThisMonth,
    description,
    features,
    specifications
  }
}
