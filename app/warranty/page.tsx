"use client"

import Link from "next/link"
import { ChevronRight, ShieldCheck, HelpCircle, Check, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const content = {
  en: {
    home: "Home",
    breadcrumb: "Warranty",
    badge: "100% Original Products",
    title: "Warranty Policy",
    desc: "All our products are imported directly from HOCO. We offer solid warranty coverage on electronic components so you can shop with peace of mind.",
    card1Title: "12-Month Coverage",
    card1Desc: "Electronic items (Chargers, Power Banks, Earbuds, Car Mount Chargers) are covered under a 12-Month Warranty from the date of receipt against manufacturing defects.",
    card2Title: "Cables & Mechanical",
    card2Desc: "Cables, Cases, and non-electronic Car Mounts include a 3-Month Warranty for internal wiring issues or structural manufacturing defects.",
    covTitle: "What Is Covered",
    covItems: [
      "Internal electronic circuit breakdowns (e.g. charger stops outputting power).",
      "Power banks failing to charge or hold capacity.",
      "Bluetooth connectivity failures or single earbud pairing dropouts."
    ],
    ncovTitle: "What Is Not Covered",
    ncovItems: [
      "Physical damage from drops, accidents, water submersion, or misuse.",
      "Natural wear and tear (scratches on housings, bent connector plugs).",
      "Product retail packaging damage (box is required to complete warranty returns)."
    ],
    claimTitle: "How to Claim Warranty",
    claimDesc: "To make a warranty claim, please contact our support team on WhatsApp at +213 550 123 456. Be prepared to provide:",
    claimList: [
      "Your original Order Reference (e.g. HC-2026-84193).",
      "A short video showing the issue (e.g. plugging in the charger and showing it does not charge).",
      "The original product box (must be retained to complete the warranty exchange)."
    ],
    claimFooter: "Once approved, we will arrange a replacement product to be dispatched to you via Yalidine Express."
  },
  fr: {
    home: "Accueil",
    breadcrumb: "Garantie",
    badge: "Produits 100% Originaux",
    title: "Politique de Garantie",
    desc: "Tous nos produits sont importés directement de chez HOCO. Nous offrons une garantie solide sur les composants électroniques afin que vous puissiez acheter en toute tranquillité.",
    card1Title: "Garantie de 12 Mois",
    card1Desc: "Les articles électroniques (Chargeurs, Batteries externes, Écouteurs, Supports auto chargeurs) sont couverts par une garantie de 12 mois à compter de la date de réception contre les défauts de fabrication.",
    card2Title: "Câbles & Mécanique",
    card2Desc: "Les câbles, étuis et supports de voiture non électroniques comprennent une garantie de 3 mois pour les problèmes de câblage interne ou les défauts de fabrication structurels.",
    covTitle: "Ce qui est couvert",
    covItems: [
      "Pannes de circuits électroniques internes (ex: le chargeur cesse de fournir du courant).",
      "Batteries externes qui ne chargent plus ou ne tiennent plus la charge.",
      "Problèmes de connexion Bluetooth ou perte de synchronisation d'un écouteur."
    ],
    ncovTitle: "Ce qui n'est pas couvert",
    ncovItems: [
      "Dommages physiques dus à des chutes, accidents, immersion dans l'eau ou mauvaise utilisation.",
      "Usure naturelle (rayures sur les boîtiers, fiches de connecteur pliées).",
      "Dommages à l'emballage d'origine du produit (la boîte est requise pour effectuer l'échange sous garantie)."
    ],
    claimTitle: "Comment faire une réclamation",
    claimDesc: "Pour faire une réclamation au titre de la garantie, veuillez contacter notre équipe de support sur WhatsApp au +213 550 123 456. Soyez prêt à fournir :",
    claimList: [
      "Votre référence de commande d'origine (ex: HC-2026-84193).",
      "Une courte vidéo montrant le problème (ex: brancher le chargeur et montrer qu'il ne charge pas).",
      "La boîte d'origine du produit (doit être conservée pour effectuer l'échange sous garantie)."
    ],
    claimFooter: "Une fois approuvé, nous organiserons l'envoi d'un produit de remplacement via Yalidine Express."
  },
  ar: {
    home: "الرئيسية",
    breadcrumb: "الضمان",
    badge: "منتجات أصلية 100%",
    title: "سياسة الضمان",
    desc: "جميع منتجاتنا مستوردة مباشرة من هوكو. نحن نقدم تغطية ضمان حقيقية على المكونات الإلكترونية لتتسوق بكل طمأنينة.",
    card1Title: "ضمان 12 شهراً",
    card1Desc: "المنتجات الإلكترونية (الشواحن، بنوك الطاقة، السماعات، شواحن السيارات) مغطاة بضمان لمدة 12 شهراً من تاريخ الاستلام ضد عيوب التصنيع.",
    card2Title: "الكابلات والمنتجات الميكانيكية",
    card2Desc: "تتضمن الكابلات، الأغطية، وحوامل الهواتف العادية للسيارات ضماناً لمدة 3 أشهر لمشاكل الأسلاك الداخلية أو عيوب التصنيع الهيكلية.",
    covTitle: "ما يشمله الضمان",
    covItems: [
      "أعطال الدوائر الإلكترونية الداخلية (مثال: الشاحن يتوقف عن تزويد الهاتف بالطاقة).",
      "فشل بنك الطاقة في الشحن أو عدم قدرته على الاحتفاظ بالبطارية.",
      "مشاكل اتصال البلوتوث أو انقطاع اقتران إحدى السماعتين."
    ],
    ncovTitle: "ما لا يشمله الضمان",
    ncovItems: [
      "الأضرار المادية الناتجة عن السقوط، الحوادث، التعرض للماء، أو سوء الاستخدام.",
      "الاهتراء الطبيعي الناتج عن الاستخدام (الخدوش، التواء رأس التوصيل).",
      "تلف علبة المنتج الأصلية (العلبة ضرورية جداً لإتمام عملية استبدال المنتج تحت الضمان)."
    ],
    claimTitle: "كيفية تقديم طلب الضمان",
    claimDesc: "لتقديم طلب ضمان، يرجى الاتصال بفريق الدعم لدينا عبر الواتساب على الرقم +213 550 123 456. يرجى توفير ما يلي:",
    claimList: [
      "مرجع الطلب الأصلي الخاص بك (مثال: HC-2026-84193).",
      "فيديو قصير يوضح المشكلة (مثال: توصيل الشاحن بالكهرباء وإظهار أنه لا يشحن).",
      "علبة المنتج الأصلية (يجب الاحتفاظ بها لإتمام عملية الاستبدال تحت الضمان)."
    ],
    claimFooter: "بمجرد قبول طلبك، سنقوم بترتيب إرسال منتج بديل إليك عبر ياليدين إكسبريس."
  }
}

export default function WarrantyPage() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.en

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            {t.home}
          </Link>
          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          <span className="text-foreground">{t.breadcrumb}</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left rtl:lg:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">{t.badge}</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base mx-auto lg:mx-0">
            {t.desc}
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Main Info Blocks */}
          <div className="grid gap-6 md:grid-cols-2 text-left rtl:text-right">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">{t.card1Title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t.card1Desc}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-muted-foreground">
                <HelpCircle className="h-6 w-6 text-hoco-green" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">{t.card2Title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t.card2Desc}
              </p>
            </div>
          </div>

          {/* Covered / Not Covered Comparison */}
          <div className="grid gap-6 md:grid-cols-2 text-left rtl:text-right">
            {/* What's Covered */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/20 p-6 shadow-sm sm:p-8">
              <h4 className="flex items-center gap-2 font-heading text-base font-black text-emerald-800 sm:text-lg">
                <Check className="h-5 w-5 text-emerald-600" />
                {t.covTitle}
              </h4>
              <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground leading-6">
                {t.covItems.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Covered */}
            <div className="rounded-3xl border border-rose-100 bg-rose-50/10 p-6 shadow-sm sm:p-8">
              <h4 className="flex items-center gap-2 font-heading text-base font-black text-rose-800 sm:text-lg">
                <AlertTriangle className="h-5 w-5 text-rose-600" />
                {t.ncovTitle}
              </h4>
              <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground leading-6">
                {t.ncovItems.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to claim */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-left rtl:text-right">
            <h3 className="font-heading text-lg font-black text-foreground sm:text-xl">{t.claimTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {language === "ar" ? (
                <>لتقديم طلب ضمان، يرجى الاتصال بفريق الدعم لدينا عبر الواتساب على الرقم <span className="font-bold text-hoco-green inline-block" dir="ltr">+213 550 123 456</span>. يرجى توفير ما يلي:</>
              ) : language === "fr" ? (
                <>Pour faire une réclamation au titre de la garantie, veuillez contacter notre équipe de support sur WhatsApp au <span className="font-bold text-hoco-green inline-block" dir="ltr">+213 550 123 456</span>. Soyez prêt à fournir :</>
              ) : (
                <>To make a warranty claim, please contact our support team on WhatsApp at <span className="font-bold text-hoco-green inline-block" dir="ltr">+213 550 123 456</span>. Be prepared to provide:</>
              )}
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground leading-7">
              {t.claimList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {t.claimFooter}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
