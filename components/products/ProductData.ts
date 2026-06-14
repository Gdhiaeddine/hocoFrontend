import type { LucideIcon } from "lucide-react"
import { BatteryCharging, Cable, Car, Headphones, PlugZap, Shield, Smartphone, Zap } from "lucide-react"

export type ProductImageType =
  | "charger"
  | "earbuds"
  | "cable"
  | "power-bank"
  | "case"
  | "car-charger"
  | "wireless-charger"
  | "type-c-cable"
  | "black-charger"
  | "headphones"
  | "black-cable"
  | "car-holder"

export type Product = {
  id: number
  name: string
  category: string
  price: string
  rating: number
  reviews: number
  badge?: string
  image?: string
  imageType: ProductImageType
  color: string
  slug: string
}

export type CategoryFilter = {
  name: string
  count: number
  icon: LucideIcon
  active?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "HOCO 20W Dual Port Fast Charger",
    category: "Chargers",
    price: "2,600 DZD",
    rating: 4.9,
    reviews: 320,
    badge: "Best Seller",
    image: "/hero/chargeur.png",
    imageType: "charger",
    color: "white",
    slug: "hoco-20w-dual-port-fast-charger",
  },
  {
    id: 2,
    name: "HOCO EW46 True Wireless Earbuds",
    category: "Earbuds",
    price: "4,500 DZD",
    rating: 4.8,
    reviews: 256,
    badge: "New",
    image: "/hero/airpods.png",
    imageType: "earbuds",
    color: "white",
    slug: "hoco-ew46-true-wireless-earbuds",
  },
  {
    id: 3,
    name: "HOCO X88 Lightning Fast Charging Cable",
    category: "Cables",
    price: "1,200 DZD",
    rating: 4.7,
    reviews: 198,
    badge: "New",
    image: "/products/cable.png",
    imageType: "cable",
    color: "green",
    slug: "hoco-x88-lightning-fast-charging-cable",
  },
  {
    id: 4,
    name: "HOCO J86 20000mAh Power Bank",
    category: "Power Banks",
    price: "5,400 DZD",
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
    image: "/hero/powerbank.png",
    imageType: "power-bank",
    color: "black",
    slug: "hoco-j86-20000mah-power-bank",
  },
  {
    id: 5,
    name: "HOCO Protective Case for iPhone 15",
    category: "Cases",
    price: "1,800 DZD",
    rating: 4.6,
    reviews: 145,
    image: "/hero/phonecase.png",
    imageType: "case",
    color: "green",
    slug: "hoco-protective-case-for-iphone-15",
  },
  {
    id: 6,
    name: "HOCO Z49 Dual USB Car Charger",
    category: "Car Accessories",
    price: "1,400 DZD",
    rating: 4.7,
    reviews: 174,
    badge: "Offer",
    image: "/hero/CarChargeur.png",
    imageType: "car-charger",
    color: "black",
    slug: "hoco-z49-dual-usb-car-charger",
  },
  {
    id: 7,
    name: "HOCO CW35 15W Wireless Magnetic Charger",
    category: "Chargers",
    price: "3,200 DZD",
    rating: 4.8,
    reviews: 213,
    badge: "Best Seller",
    imageType: "wireless-charger",
    color: "white",
    slug: "hoco-cw35-15w-wireless-magnetic-charger",
  },
  {
    id: 8,
    name: "HOCO X21 Fast Charging Type-C Cable",
    category: "Cables",
    price: "1,000 DZD",
    rating: 4.6,
    reviews: 132,
    badge: "Offer",
    imageType: "type-c-cable",
    color: "white",
    slug: "hoco-x21-fast-charging-type-c-cable",
  },
  {
    id: 9,
    name: "HOCO N32 PD 30W Wall Charger",
    category: "Chargers",
    price: "3,100 DZD",
    rating: 4.8,
    reviews: 183,
    imageType: "black-charger",
    color: "black",
    slug: "hoco-n32-pd-30w-wall-charger",
  },
  {
    id: 10,
    name: "HOCO W35 Wireless Bluetooth Headphones",
    category: "Earbuds",
    price: "6,200 DZD",
    rating: 4.7,
    reviews: 127,
    badge: "New",
    imageType: "headphones",
    color: "black",
    slug: "hoco-w35-wireless-bluetooth-headphones",
  },
  {
    id: 11,
    name: "HOCO X100 Reinforced Type-C Cable",
    category: "Cables",
    price: "900 DZD",
    rating: 4.6,
    reviews: 109,
    badge: "Offer",
    imageType: "black-cable",
    color: "black",
    slug: "hoco-x100-reinforced-type-c-cable",
  },
  {
    id: 12,
    name: "HOCO CA76 Magnetic Car Holder",
    category: "Car Accessories",
    price: "1,600 DZD",
    rating: 4.5,
    reviews: 89,
    imageType: "car-holder",
    color: "black",
    slug: "hoco-ca76-magnetic-car-holder",
  },
]

export const categories: CategoryFilter[] = [
  { name: "Chargers", count: 32, icon: PlugZap, active: true },
  { name: "Earbuds", count: 28, icon: Headphones },
  { name: "Cables", count: 45, icon: Cable },
  { name: "Power Banks", count: 18, icon: BatteryCharging },
  { name: "Cases", count: 56, icon: Smartphone },
  { name: "Car Accessories", count: 24, icon: Car },
]

export const brands = [
  { name: "HOCO", count: 136, checked: true },
  { name: "Apple", count: 12, checked: false },
  { name: "Samsung", count: 9, checked: false },
  { name: "Xiaomi", count: 7, checked: false },
  { name: "Anker", count: 6, checked: false },
]

export const colors = [
  { name: "Black", className: "bg-zinc-950" },
  { name: "White", className: "bg-white" },
  { name: "Light gray", className: "bg-zinc-200" },
  { name: "Dark gray", className: "bg-zinc-600" },
  { name: "Green", className: "bg-hoco-green" },
  { name: "Blue", className: "bg-blue-500" },
  { name: "Purple", className: "bg-purple-500" },
  { name: "Red", className: "bg-red-500" },
]

export const ratings = [
  { stars: 5, count: 98 },
  { stars: 4, count: 28 },
  { stars: 3, count: 7 },
  { stars: 2, count: 2 },
  { stars: 1, count: 1 },
]

export const productHeroItems = [
  { image: "/products/wall-charger.png", alt: "HOCO Charger", className: "left-[10%] top-[22%] w-28 sm:w-36", delay: 0 },
  { image: "/products/earbuds.png", alt: "HOCO Earbuds", className: "left-[35%] top-[8%] w-28 sm:w-40", delay: 0.3 },
  { image: "/products/power-bank.png", alt: "HOCO Power Bank", className: "bottom-[10%] left-[22%] w-36 sm:w-48", delay: 0.6 },
  { image: "/products/car-charger.png", alt: "HOCO Car Charger", className: "right-[14%] top-[28%] w-24 sm:w-32", delay: 0.9 },
  { image: "/products/cable.png", alt: "HOCO Cable", className: "bottom-[16%] right-[18%] w-28 sm:w-40", delay: 1.1 },
]
