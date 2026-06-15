"use client"

import Link from "next/link"
import { ChevronRight, RefreshCw, AlertCircle, PhoneCall, FileText } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const content = {
  en: {
    home: "Home",
    breadcrumb: "Returns & Exchanges",
    badge: "Hassle-Free policy",
    title: "Returns & Exchanges",
    desc: "We stand behind our product quality. Here is what you need to know about returning or exchanging your HOCO accessory in Algeria.",
    card1Title: "7-Day Return Window",
    card1Desc: "You can return or exchange any product within 7 days of delivery. The item must be unused, in the same condition as you received it, and in its original retail box with all seals intact.",
    card2Title: "Defective Items & Warranty",
    card2Desc: "Received a manufacturing defect or wrong product? We will exchange it completely free of charge! Contact us immediately via WhatsApp or phone, and we will send a courier to swap the item.",
    procTitle: "How to Request a Return or Exchange",
    step1Title: "Contact Support",
    step1Desc: "Contact our team on WhatsApp at +213 550 123 456 or via email with your Order Reference and product photos.",
    step2Title: "Review",
    step2Desc: "Our agent will confirm the issue and review details within 24 hours.",
    step3Title: "Pickup & Swap",
    step3Desc: "We dispatch Yalidine Express to pick up the item. If exchanging, the courier will hand over the new replacement product during pickup.",
    ctaTitle: "Need assistance with your return?",
    ctaDesc: "Our support agents are available Sunday to Thursday from 9 AM to 6 PM.",
    ctaBtn: "Contact Us"
  },
  fr: {
    home: "Accueil",
    breadcrumb: "Retours & Échanges",
    badge: "Politique sans tracas",
    title: "Retours & Échanges",
    desc: "Nous garantissons la qualité de nos produits. Voici ce que vous devez savoir pour retourner ou échanger votre accessoire HOCO en Algérie.",
    card1Title: "Délai de retour de 7 jours",
    card1Desc: "Vous pouvez retourner ou échanger tout produit dans les 7 jours suivant sa livraison. L'article doit être inutilisé, dans le même état que vous l'avez reçu, et dans sa boîte d'origine avec tous les scellés intacts.",
    card2Title: "Articles défectueux & Garantie",
    card2Desc: "Vous avez reçu un produit défectueux ou erroné ? Nous l'échangerons gratuitement ! Contactez-nous immédiatement par WhatsApp ou téléphone, et nous enverrons un livreur pour procéder à l'échange.",
    procTitle: "Comment demander un retour ou un échange",
    step1Title: "Contacter le support",
    step1Desc: "Contactez notre équipe sur WhatsApp au +213 550 123 456 ou par e-mail avec votre référence de commande et des photos du produit.",
    step2Title: "Examen",
    step2Desc: "Notre agent confirmera le problème et examinera les détails dans les 24 heures.",
    step3Title: "Collecte & Échange",
    step3Desc: "Nous envoyons Yalidine Express pour récupérer l'article. En cas d'échange, le livreur vous remettra le nouveau produit de remplacement lors de la collecte.",
    ctaTitle: "Besoin d'aide pour votre retour ?",
    ctaDesc: "Nos agents de support sont disponibles du dimanche au jeudi de 9h à 18h.",
    ctaBtn: "Contactez-nous"
  },
  ar: {
    home: "الرئيسية",
    breadcrumb: "الاسترجاع والاستبدال",
    badge: "سياسة مريحة وسهلة",
    title: "الاسترجاع والاستبدال",
    desc: "نحن نضمن جودة منتجاتنا. إليك كل ما تحتاج لمعرفته حول إرجاع أو استبدال إكسسوارات هوكو الخاصة بك في الجزائر.",
    card1Title: "مهلة إرجاع 7 أيام",
    card1Desc: "يمكنك إرجاع أو استبدال أي منتج في غضون 7 أيام من تاريخ الاستلام. يجب أن يكون المنتج غير مستخدم، وبنفس حالته الأصلية، وفي علبته الأصلية مع سلامة الأختام.",
    card2Title: "المنتجات المعيبة والضمان",
    card2Desc: "هل استلمت منتجاً به عيب مصنعي أو منتجاً خاطئاً؟ سنقوم باستبداله مجاناً تماماً! اتصل بنا فوراً عبر الواتساب أو الهاتف، وسنرسل عون توصيل لاستبدال المنتج.",
    procTitle: "كيفية طلب استرجاع أو استبدال",
    step1Title: "الاتصال بالدعم",
    step1Desc: "اتصل بفريقنا على الواتساب على الرقم +213 550 123 456 أو عبر البريد الإلكتروني مع ذكر مرجع الطلب وصور المنتج.",
    step2Title: "المراجعة والتحقق",
    step2Desc: "سيقوم وكيلنا بتأكيد المشكلة ومراجعة التفاصيل في غضون 24 ساعة.",
    step3Title: "الاستلام والتبديل",
    step3Desc: "نحن نرسل ياليدين إكسبريس لاستلام المنتج. في حالة الاستبدال، سيقوم عون التوصيل بتسليمك المنتج الجديد عند الاستلام.",
    ctaTitle: "هل تحتاج إلى مساعدة في الإرجاع؟",
    ctaDesc: "عملاؤنا متاحون من الأحد إلى الخميس من الساعة 9 صباحاً حتى 6 مساءً.",
    ctaBtn: "اتصل بنا"
  }
}

export default function ReturnsPage() {
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
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">{t.card1Title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t.card1Desc}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">{t.card2Title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t.card2Desc}
              </p>
            </div>
          </div>

          {/* Procedure Section */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-left rtl:text-right">
            <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
              <FileText className="h-5 w-5 text-hoco-green" />
              {t.procTitle}
            </h3>
            
            <ol className="mt-6 space-y-4 text-sm text-muted-foreground sm:text-base leading-7">
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hoco-green text-xs font-bold text-white mt-0.5">1</span>
                <div>
                  <strong className="text-foreground">{t.step1Title}:</strong> {language === "ar" ? (
                    <>تواصل مع فريقنا على الواتساب على الرقم <span className="font-bold text-hoco-green inline-block" dir="ltr">+213 550 123 456</span> أو عبر البريد الإلكتروني مع ذكر مرجع الطلب وصور المنتج.</>
                  ) : language === "fr" ? (
                    <>Contactez notre équipe sur WhatsApp au <span className="font-bold text-hoco-green inline-block" dir="ltr">+213 550 123 456</span> ou par e-mail avec votre référence de commande et des photos du produit.</>
                  ) : (
                    <>Contact our team on WhatsApp at <span className="font-bold text-hoco-green inline-block" dir="ltr">+213 550 123 456</span> or via email with your Order Reference and product photos.</>
                  )}
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hoco-green text-xs font-bold text-white mt-0.5">2</span>
                <div>
                  <strong className="text-foreground">{t.step2Title}:</strong> {t.step2Desc}
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hoco-green text-xs font-bold text-white mt-0.5">3</span>
                <div>
                  <strong className="text-foreground">{t.step3Title}:</strong> {t.step3Desc}
                </div>
              </li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="rounded-3xl bg-gradient-to-br from-hoco-green to-hoco-green-dark p-6 text-center text-white shadow-xl shadow-hoco-green/20 sm:p-10">
            <h3 className="font-heading text-xl font-black sm:text-2xl">{t.ctaTitle}</h3>
            <p className="mt-2 text-sm text-white/80">{t.ctaDesc}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-hoco-green shadow-sm hover:scale-105 transition-transform">
                <PhoneCall className="h-4.5 w-4.5" />
                {t.ctaBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
