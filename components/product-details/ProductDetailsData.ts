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

export function getProductDetailsBySlug(slug: string, language: string = "en"): ProductDetails | null {
  const baseProduct = products.find((p) => p.slug === slug)
  if (!baseProduct) return null

  let description = ""
  let features: { title: string; subtitle: string; icon: string }[] = []
  let specifications: [string, string][] = []
  
  const soldThisMonth = Math.floor(baseProduct.reviews * 1.5) + (baseProduct.id * 5)
  const brand = "HOCO"

  const lang = language === "fr" || language === "ar" ? language : "en"

  if (baseProduct.category === "Chargers") {
    const isWireless = baseProduct.imageType === "wireless-charger"
    const power = baseProduct.name.includes("30W") ? "30W" : "20W"
    
    if (lang === "en") {
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
    } else if (lang === "fr") {
      description = `${baseProduct.name} est un chargeur rapide haute performance conçu pour la sécurité et l'efficacité. Il intègre la technologie Power Delivery (PD) pour une charge rapide de tous les smartphones, tablettes et accessoires compatibles.`
      features = [
        { title: isWireless ? "15W Max" : `${power} Max`, subtitle: "Puissance de sortie", icon: "Zap" },
        { title: baseProduct.name.includes("Dual") ? "Double Port" : "Sortie Intelligente", subtitle: isWireless ? "Alignement Magnétique" : "USB-C + USB-A", icon: "BatteryCharging" },
        { title: "Charge Sécurisée", subtitle: "Multi-protection", icon: "ShieldCheck" },
        { title: "Universel", subtitle: "Large compatibilité", icon: "Smartphone" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", baseProduct.id === 1 ? "C88A" : baseProduct.id === 7 ? "CW35" : "N32"],
        ["Power Output", isWireless ? "15W / 10W / 7.5W / 5W" : `${power} Max`],
        ["Input", isWireless ? "9V/2A, 5V/2A" : "AC 100-240V, 50/60Hz, 0.6A"],
        ["Output Ports", "Qi Sans Fil", "USB-C (PD) + USB-A (QC)"],
        ["Material", "PC Ignifuge + ABS"],
        ["Safety Certification", "CE, FCC, RoHS"],
        ["Dimensions", isWireless ? "56 x 5,5 mm" : "82 x 42 x 29 mm"],
        ["Weight", isWireless ? "45g" : "55g"],
        ["Color", baseProduct.color === "white" ? "Blanc" : baseProduct.color === "black" ? "Noir" : baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
      ]
    } else { // ar
      description = `إن ${baseProduct.name} عبارة عن شاحن سريع عالي الأداء مصمم للأمان والكفاءة. يتميز بتقنية توصيل الطاقة (PD) المتقدمة للشحن السريع لجميع الهواتف الذكية والأجهزة اللوحية والملحقات المتوافقة.`
      features = [
        { title: isWireless ? "15 واط كحد أقصى" : `${power} كحد أقصى`, subtitle: "قوة الشحن", icon: "Zap" },
        { title: baseProduct.name.includes("Dual") ? "منفذ مزدوج" : "مخرج ذكي", subtitle: isWireless ? "محاذاة مغناطيسية" : "USB-C + USB-A", icon: "BatteryCharging" },
        { title: "شحن آمن", subtitle: "حماية متعددة", icon: "ShieldCheck" },
        { title: "متوافق عالمياً", subtitle: "توافق واسع", icon: "Smartphone" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", baseProduct.id === 1 ? "C88A" : baseProduct.id === 7 ? "CW35" : "N32"],
        ["Power Output", isWireless ? "15 واط / 10 واط / 7.5 واط / 5 واط" : `${power} كحد أقصى`],
        ["Input", isWireless ? "9 فولت/2 أمبير، 5 فولت/2 أمبير" : "تيار متناوب 100-240 فولت، 50/60 هرتز، 0.6 أمبير"],
        ["Output Ports", isWireless ? "شاحن لاسلكي Qi" : "USB-C (PD) + USB-A (QC)"],
        ["Material", "مقاوم للحريق PC + ABS"],
        ["Safety Certification", "CE, FCC, RoHS"],
        ["Dimensions", isWireless ? "56 x 5.5 ملم" : "82 x 42 x 29 ملم"],
        ["Weight", isWireless ? "45 غرام" : "55 غرام"],
        ["Color", baseProduct.color === "white" ? "أبيض" : baseProduct.color === "black" ? "أسود" : baseProduct.color]
      ]
    }
  } else if (baseProduct.category === "Earbuds" || baseProduct.imageType === "headphones") {
    const isOverEar = baseProduct.imageType === "headphones"
    if (lang === "en") {
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
    } else if (lang === "fr") {
      description = `${baseProduct.name} offre une qualité sonore supérieure avec des basses profondes, des aigus clairs et un design ergonomique très confortable. Profitez de la liberté du sans-fil pour la musique, les appels et le sport.`
      features = [
        { title: "Bluetooth 5.3", subtitle: "Connexion stable", icon: "Bluetooth" },
        { title: isOverEar ? "40 Heures" : "20 Heures", subtitle: "Autonomie totale", icon: "BatteryCharging" },
        { title: "Micro HD", subtitle: "Appels cristallins", icon: "Volume2" },
        { title: "Tactile Intelligent", subtitle: "Commandes faciles", icon: "Sparkles" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", isOverEar ? "W35" : "EW46"],
        ["Bluetooth Version", "v5.3"],
        ["Driver Unit", isOverEar ? "40mm" : "13mm dynamique"],
        ["Frequency Response", "20Hz - 20KHz"],
        ["Battery Capacity", isOverEar ? "400mAh (Casque)" : "30mAh (Écouteurs) / 300mAh (Boîtier)"],
        ["Charging Time", "Environ 1.5 - 2 heures"],
        ["Music/Talk Time", isOverEar ? "Jusqu'à 40 heures" : "Jusqu'à 4 heures (20h avec boîtier)"],
        ["Transmission Range", "10 mètres"],
        ["Weight", isOverEar ? "208g" : "45g"],
        ["Color", baseProduct.color === "white" ? "Blanc" : baseProduct.color === "black" ? "Noir" : baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
      ]
    } else { // ar
      description = `يوفر ${baseProduct.name} جودة صوت ممتازة مع صوت جهير (bass) عميق، ونغمات عالية واضحة، وتصميم مريح للغاية. استمتع بحرية لاسلكية للموسيقى والمكالمات والتمارين الرياضية.`
      features = [
        { title: "بلوتوث 5.3", subtitle: "اتصال مستقر", icon: "Bluetooth" },
        { title: isOverEar ? "40 ساعة" : "20 ساعة", subtitle: "وقت التشغيل الإجمالي", icon: "BatteryCharging" },
        { title: "ميكروفون HD", subtitle: "مكالمات واضحة وضوح الشمس", icon: "Volume2" },
        { title: "لمس ذكي", subtitle: "تحكم سهل", icon: "Sparkles" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", isOverEar ? "W35" : "EW46"],
        ["Bluetooth Version", "v5.3"],
        ["Driver Unit", isOverEar ? "40 ملم" : "13 ملم ديناميكي"],
        ["Frequency Response", "20Hz - 20KHz"],
        ["Battery Capacity", isOverEar ? "400 مللي أمبير (سماعة الرأس)" : "30 مللي أمبير (السماعات) / 300 مللي أمبير (العلبة)"],
        ["Charging Time", "حوالي 1.5 - 2 ساعة"],
        ["Music/Talk Time", isOverEar ? "حتى 40 ساعة" : "حتى 4 ساعات (20 ساعة مع العلبة)"],
        ["Transmission Range", "10 أمتار"],
        ["Weight", isOverEar ? "208 غرام" : "45 غرام"],
        ["Color", baseProduct.color === "white" ? "أبيض" : baseProduct.color === "black" ? "أسود" : baseProduct.color]
      ]
    }
  } else if (baseProduct.category === "Cables") {
    const isTypeC = baseProduct.imageType.includes("type-c")
    const length = baseProduct.name.includes("X21") ? "1.0m" : "1.2m"
    const current = baseProduct.name.includes("Reinforced") ? "3A Max" : "2.4A Max"
    
    if (lang === "en") {
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
    } else if (lang === "fr") {
      description = `Le ${baseProduct.name} est conçu pour résister à un usage quotidien intensif. Avec des connecteurs renforcés et un tressage haut de gamme, il prend en charge la charge rapide et le transfert de données ultra-rapide.`
      features = [
        { title: current, subtitle: "Courant de charge", icon: "Zap" },
        { title: "Renforcé", subtitle: "Structure anti-flexion", icon: "ShieldCheck" },
        { title: "480 Mbps", subtitle: "Synchro haute vitesse", icon: "RefreshCw" },
        { title: length, subtitle: "Longueur optimisée", icon: "Layers" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", baseProduct.name.includes("X88") ? "X88" : baseProduct.name.includes("X21") ? "X21" : "X100"],
        ["Connector Type", isTypeC ? "USB-A vers Type-C" : "USB-A vers Lightning"],
        ["Output Current", current],
        ["Length", length],
        ["Material", baseProduct.name.includes("Reinforced") ? "Nylon Tressé + TPE" : "Silicone Alimentaire"],
        ["Data Sync Speed", "Jusqu'à 480 Mbps"],
        ["Bending Test Lifetime", "Plus de 10 000 flexions"],
        ["Weight", "24g"],
        ["Color", baseProduct.color === "white" ? "Blanc" : baseProduct.color === "black" ? "Noir" : baseProduct.color === "green" ? "Vert" : baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
      ]
    } else { // ar
      description = `تم تصميم ${baseProduct.name} ليتحمل الاستخدام اليومي المكثف. مع موصلات معززة وجديلة عالية الجودة، فإنه يدعم الشحن السريع ونقل البيانات فائق السرعة.`
      features = [
        { title: current === "3A Max" ? "3 أمبير كحد أقصى" : "2.4 أمبير كحد أقصى", subtitle: "تيار الشحن", icon: "Zap" },
        { title: "معزز", subtitle: "هيكل مقاوم للانحناء", icon: "ShieldCheck" },
        { title: "480 ميجابت في الثانية", subtitle: "مزامنة عالية السرعة", icon: "RefreshCw" },
        { title: length === "1.0m" ? "1.0 متر" : "1.2 متر", subtitle: "طول مناسب", icon: "Layers" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", baseProduct.name.includes("X88") ? "X88" : baseProduct.name.includes("X21") ? "X21" : "X100"],
        ["Connector Type", isTypeC ? "USB-A إلى Type-C" : "USB-A إلى Lightning"],
        ["Output Current", current === "3A Max" ? "3 أمبير كحد أقصى" : "2.4 أمبير كحد أقصى"],
        ["Length", length === "1.0m" ? "1.0 متر" : "1.2 متر"],
        ["Material", baseProduct.name.includes("Reinforced") ? "نايلون مضفر + TPE" : "سيليكون آمن غذائياً"],
        ["Data Sync Speed", "حتى 480 ميجابت في الثانية"],
        ["Bending Test Lifetime", "أكثر من 10,000 انحناء"],
        ["Weight", "24 غرام"],
        ["Color", baseProduct.color === "white" ? "أبيض" : baseProduct.color === "black" ? "أسود" : baseProduct.color === "green" ? "أخضر" : baseProduct.color]
      ]
    }
  } else if (baseProduct.category === "Power Banks") {
    if (lang === "en") {
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
    } else if (lang === "fr") {
      description = `La ${baseProduct.name} offre une capacité de recharge portable massive pour vos déplacements. Équipée de plusieurs ports de sortie et d'une distribution intelligente d'énergie, elle est l'alliée idéale de vos voyages.`
      features = [
        { title: "20 000 mAh", subtitle: "Capacité ultra", icon: "BatteryCharging" },
        { title: "20W PD/QC", subtitle: "Charge rapide bidirectionnelle", icon: "Zap" },
        { title: "Écran LED", subtitle: "Affichage numérique du niveau", icon: "Sparkles" },
        { title: "Multi-Sécurité", subtitle: "9 couches de protection", icon: "ShieldCheck" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", "J86"],
        ["Battery Capacity", "20000mAh (74Wh)"],
        ["Rated Capacity", "11800mAh (5V TYP 3A)"],
        ["Input Ports", "Micro-USB / Type-C (18W Max)"],
        ["Output Ports", "USB-A 1/2 (22.5W Max) + Type-C (PD 20W Max)"],
        ["Total Output", "5V / 3A Max"],
        ["Battery Type", "Lithium Polymère de grade A+"],
        ["Dimensions", "142 x 68 x 28 mm"],
        ["Weight", "415g"],
        ["Color", baseProduct.color === "white" ? "Blanc" : baseProduct.color === "black" ? "Noir" : baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
      ]
    } else { // ar
      description = `يوفر ${baseProduct.name} طاقة محمولة هائلة لإبقاء أجهزتك مشحونة أثناء التنقل. مجهز بمنافذ إخراج متعددة وتوصيل طاقة ذكي، فهو الرفيق المثالي للسفر.`
      features = [
        { title: "20,000 مللي أمبير", subtitle: "سعة فائقة", icon: "BatteryCharging" },
        { title: "20 واط PD/QC", subtitle: "شحن سريع ثنائي الاتجاه", icon: "Zap" },
        { title: "شاشة LED", subtitle: "عرض رقمي للمستوى", icon: "Sparkles" },
        { title: "أمان متعدد", subtitle: "9 طبقات من الحماية", icon: "ShieldCheck" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", "J86"],
        ["Battery Capacity", "20000mAh (74Wh)"],
        ["Rated Capacity", "11800 مللي أمبير (5 فولت TYP 3A)"],
        ["Input Ports", "Micro-USB / Type-C (18 واط كحد أقصى)"],
        ["Output Ports", "USB-A 1/2 (22.5 واط كحد أقصى) + Type-C (PD 20 واط كحد أقصى)"],
        ["Total Output", "5 فولت / 3 أمبير كحد أقصى"],
        ["Battery Type", "ليثيوم بوليمر من الفئة A+"],
        ["Dimensions", "142 x 68 x 28 ملم"],
        ["Weight", "415 غرام"],
        ["Color", baseProduct.color === "white" ? "أبيض" : baseProduct.color === "black" ? "أسود" : baseProduct.color]
      ]
    }
  } else if (baseProduct.category === "Cases") {
    if (lang === "en") {
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
    } else if (lang === "fr") {
      description = `Protégez votre appareil avec la ${baseProduct.name}. Comprend des découpes précises, des boutons réactifs et une protection premium contre les chutes sans alourdir le profil élégant de votre téléphone.`
      features = [
        { title: "Protection Chute", subtitle: "Coins amortisseurs de chocs", icon: "ShieldCheck" },
        { title: "Profil Mince", subtitle: "Prise en main légère", icon: "Smartphone" },
        { title: "Rebords Surélevés", subtitle: "Protection écran & caméra", icon: "Shield" },
        { title: "Anti-Jaunissement", subtitle: "Clarté durable", icon: "Sparkles" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", "HOCO Clear Shield"],
        ["Compatibility", "iPhone 15 / iPhone 15 Pro"],
        ["Material", "TPU (Polyuréthane Thermoplastique) + PC (Polycarbonate)"],
        ["Thickness", "1.5 mm"],
        ["Finish", "Brillant & Transparent Cristal"],
        ["Wireless Charging", "Compatible avec MagSafe et Qi"],
        ["Weight", "28g"],
        ["Color", baseProduct.color === "white" ? "Blanc" : baseProduct.color === "black" ? "Noir" : baseProduct.color === "green" ? "Vert" : baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
      ]
    } else { // ar
      description = `احمِ جهازك مع ${baseProduct.name}. يتميز بفتحات دقيقة وأغطية أزرار سريعة الاستجابة وحماية فائقة من السقوط دون إضافة حجم زائد لشكل هاتفك الأنيق.`
      features = [
        { title: "واقي السقوط", subtitle: "زوايا ممتصة للصدمات", icon: "ShieldCheck" },
        { title: "شكل نحيف", subtitle: "استخدام خفيف الوزن", icon: "Smartphone" },
        { title: "حواف مرتفعة", subtitle: "حماية الشاشة والكاميرا", icon: "Shield" },
        { title: "مقاوم للاصفرار", subtitle: "شفافية تدوم طويلاً", icon: "Sparkles" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", "HOCO Clear Shield"],
        ["Compatibility", "iPhone 15 / iPhone 15 Pro"],
        ["Material", "TPU (بولي يوريثان حراري) + PC (بولي كربونات)"],
        ["Thickness", "1.5 ملم"],
        ["Finish", "لامع وشفاف للغاية"],
        ["Wireless Charging", "متوافق مع MagSafe و Qi"],
        ["Weight", "28 غرام"],
        ["Color", baseProduct.color === "white" ? "أبيض" : baseProduct.color === "black" ? "أسود" : baseProduct.color === "green" ? "أخضر" : baseProduct.color]
      ]
    }
  } else {
    const isHolder = baseProduct.imageType === "car-holder"
    if (lang === "en") {
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
    } else if (lang === "fr") {
      description = `Améliorez votre conduite avec le ${baseProduct.name}. Conçu pour le confort, la sécurité et la fiabilité sur toutes les routes.`
      features = [
        { title: isHolder ? "Fixation Forte" : "Double port USB", subtitle: isHolder ? "Support magnétique" : "Sortie de charge rapide", icon: isHolder ? "ShieldCheck" : "BatteryCharging" },
        { title: isHolder ? "Rotation 360°" : "Charge intelligente", subtitle: isHolder ? "Angle de vue flexible" : "Sécurité optimale de l'appareil", icon: isHolder ? "RefreshCw" : "Zap" },
        { title: "Bouclier Thermique", subtitle: "Structure ignifuge", icon: "Shield" },
        { title: "Format Compact", subtitle: "Économise l'espace", icon: "Car" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", isHolder ? "CA76" : "Z49"],
        ["Device Type", isHolder ? "Support Tableau de Bord / Pare-brise" : "Chargeur Voiture Double Port"],
        ["Input Voltage", isHolder ? "Non Applicable" : "DC 12V - 24V"],
        ["Output Rating", isHolder ? "Non Applicable" : "USB-1/2: 5V/2.4A (12W Max chacun)"],
        ["Material", isHolder ? "ABS + Silicone + Aimant" : "Alliage d'Aluminium + PC Ignifuge"],
        ["Dimensions", isHolder ? "115 x 75 x 180 mm" : "58 x 26 x 26 mm"],
        ["Weight", isHolder ? "130g" : "32g"],
        ["Color", baseProduct.color === "white" ? "Blanc" : baseProduct.color === "black" ? "Noir" : baseProduct.color.charAt(0).toUpperCase() + baseProduct.color.slice(1)]
      ]
    } else { // ar
      description = `ارتقِ بتجربة قيادتك مع ${baseProduct.name}. مصمم للراحة والأمان والموثوقية على أي طريق.`
      features = [
        { title: isHolder ? "ثبات قوي" : "منافذ USB مزدوجة", subtitle: isHolder ? "تثبيت مغناطيسي" : "مخرج شحن سريع", icon: isHolder ? "ShieldCheck" : "BatteryCharging" },
        { title: isHolder ? "دوران 360 درجة" : "شحن ذكي", subtitle: isHolder ? "زاوية رؤية مرنة" : "أمان مثالي للجهاز", icon: isHolder ? "RefreshCw" : "Zap" },
        { title: "واقي الحرارة", subtitle: "هيكل مقاوم للحرارة", icon: "Shield" },
        { title: "حجم مدمج", subtitle: "يوفر مساحة السيارة", icon: "Car" }
      ]
      specifications = [
        ["Brand", brand],
        ["Model", isHolder ? "CA76" : "Z49"],
        ["Device Type", isHolder ? "حامل للوحة القيادة / الزجاج الأمامي" : "شاحن سيارة ثنائي المنافذ"],
        ["Input Voltage", isHolder ? "غير متوفر" : "تيار مستمر 12 فولت - 24 فولت"],
        ["Output Rating", isHolder ? "غير متوفر" : "USB-1/2: 5 فولت/2.4 أمبير (12 واط كحد أقصى لكل منهما)"],
        ["Material", isHolder ? "ABS + سيليكون + مغناطيس" : "سبائك ألومنيوم + PC مقاوم للحريق"],
        ["Dimensions", isHolder ? "115 x 75 x 180 ملم" : "58 x 26 x 26 ملم"],
        ["Weight", isHolder ? "130 غرام" : "32 غرام"],
        ["Color", baseProduct.color === "white" ? "أبيض" : baseProduct.color === "black" ? "أسود" : baseProduct.color]
      ]
    }
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
