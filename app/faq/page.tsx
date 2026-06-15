"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

type FAQItem = {
  q: string
  a: string
}

type FAQCategory = {
  title: string
  items: FAQItem[]
}

const faqDataLocalized = {
  en: [
    {
      title: "Orders & Verification",
      items: [
        {
          q: "Do I need to confirm my order over the phone?",
          a: "Yes. To prevent delivery issues, our team calls every customer to verify their address and order details before shipping. Unverified orders will not be dispatched.",
        },
        {
          q: "Can I cancel or modify my order after placing it?",
          a: "Yes, you can cancel or change your order as long as it has not been shipped. Once we call you for verification, you can modify items or addresses directly with the agent.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      items: [
        {
          q: "What delivery options do you offer in Algeria?",
          a: "We offer Home Delivery (Livraison à domicile) directly to your door, and Yalidine Stop Desk pickup where you can collect your package from a local Yalidine office.",
        },
        {
          q: "How long does delivery take?",
          a: "Delivery is very fast: Algiers takes 1-2 business days, Northern regions take 2-3 business days, and Southern regions take 3-5 business days.",
        },
        {
          q: "How much does shipping cost?",
          a: "Shipping costs depend on your Wilaya and selected delivery method. Home delivery ranges from 400 DZD to 900 DZD, while Yalidine Stop Desk is cheaper (typically 300 DZD to 600 DZD). Shipping is calculated in real time during checkout.",
        },
      ],
    },
    {
      title: "Payments & Invoices",
      items: [
        {
          q: "What payment methods do you support?",
          a: "We support Cash on Delivery (Paiement à la livraison) as the primary option. You pay the courier when they hand over the package. We also support CIB and Edahabia payments.",
        },
        {
          q: "Is there any hidden fee?",
          a: "No. The total price shown in your cart and order confirmation (including shipping fees) is the exact amount you will pay the Yalidine courier. No additional fees apply.",
        },
      ],
    },
    {
      title: "Product Authenticity & Warranty",
      items: [
        {
          q: "Are your HOCO products original?",
          a: "Yes, 100%. We guarantee that all products sold on our store are original HOCO accessories imported directly. Each box contains an authenticity scratch-off code that can be verified on HOCO's official website.",
        },
        {
          q: "What warranty do you provide?",
          a: "We provide a 12-Month Warranty on electronic products (chargers, earbuds, power banks) and a 3-Month Warranty on cables and mounts against manufacturing defects.",
        },
      ],
    },
  ],
  fr: [
    {
      title: "Commandes & Validation",
      items: [
        {
          q: "Dois-je confirmer ma commande par téléphone ?",
          a: "Oui. Pour éviter les erreurs de livraison, notre équipe appelle chaque client pour vérifier son adresse et les détails de sa commande avant l'expédition. Les commandes non validées ne seront pas expédiées.",
        },
        {
          q: "Puis-je annuler ou modifier ma commande après l'avoir passée ?",
          a: "Oui, vous pouvez annuler ou modifier votre commande tant qu'elle n'a pas été expédiée. Lors de notre appel de confirmation, vous pourrez modifier les articles ou l'adresse directement avec notre conseiller.",
        },
      ],
    },
    {
      title: "Expédition & Livraison",
      items: [
        {
          q: "Quelles options de livraison proposez-vous en Algérie ?",
          a: "Nous proposons la livraison à domicile directement à votre porte, ou le retrait en Stop Desk Yalidine où vous pouvez récupérer votre colis dans un bureau Yalidine local.",
        },
        {
          q: "Combien de temps prend la livraison ?",
          a: "La livraison est très rapide : Alger prend 1 à 2 jours ouvrables, les wilayas du Nord prennent 2 à 3 jours ouvrables, et le Sud prend 3 à 5 jours ouvrables.",
        },
        {
          q: "Combien coûtent les frais de livraison ?",
          a: "Les frais de livraison dépendent de votre wilaya et du mode de livraison choisi. La livraison à domicile varie de 400 DA à 900 DA, tandis que le Stop Desk Yalidine est moins cher (généralement 300 DA à 600 DA). Les frais sont calculés en temps réel lors de la commande.",
        },
      ],
    },
    {
      title: "Paiements & Factures",
      items: [
        {
          q: "Quels modes de paiement acceptez-vous ?",
          a: "Nous acceptons le paiement en espèces à la livraison (COD) comme option principale. Vous payez le livreur lors de la réception de votre colis. Nous acceptons également les paiements par CIB et Edahabia.",
        },
        {
          q: "Y a-t-il des frais cachés ?",
          a: "Non. Le montant total affiché dans votre panier et confirmation de commande (incluant la livraison) est le montant exact que vous paierez au livreur Yalidine. Aucun frais supplémentaire ne s'applique.",
        },
      ],
    },
    {
      title: "Authenticité & Garantie",
      items: [
        {
          q: "Vos produits HOCO sont-ils originaux ?",
          a: "Oui, 100%. Nous garantissons que tous les produits vendus sont des accessoires originaux HOCO importés directement. Chaque boîte contient un code d'authenticité à gratter vérifiable sur le site officiel de HOCO.",
        },
        {
          q: "Quelle garantie offrez-vous ?",
          a: "Nous offrons une garantie de 12 mois sur les produits électroniques (chargeurs, écouteurs, batteries externes) et une garantie de 3 mois sur les câbles et supports contre tout défaut de fabrication.",
        },
      ],
    },
  ],
  ar: [
    {
      title: "الطلبات والتأكيد",
      items: [
        {
          q: "هل يجب علي تأكيد طلبي هاتفياً؟",
          a: "نعم. لمنع مشاكل التوصيل، يتصل فريقنا بكل زبون للتحقق من عنوانه وتفاصيل طلبه قبل الشحن. لن يتم إرسال الطلبات غير المؤكدة.",
        },
        {
          q: "هل يمكنني إلغاء أو تعديل طلبي بعد تقديمه؟",
          a: "نعم، يمكنك إلغاء أو تغيير طلبك ما دام لم يتم شحنه بعد. بمجرد اتصالنا بك للتأكيد، يمكنك تعديل المنتجات أو العنوان مباشرة مع الوكيل.",
        },
      ],
    },
    {
      title: "الشحن والتوصيل",
      items: [
        {
          q: "ما هي خيارات التوصيل التي تقدمونها في الجزائر؟",
          a: "نحن نقدم خدمة التوصيل للمنزل مباشرة إلى باب بيتك، والاستلام من مكتب ياليدين (Stop Desk) حيث يمكنك استلام طردك من مكتب ياليدين المحلي القريب منك.",
        },
        {
          q: "كم يستغرق التوصيل؟",
          a: "التوصيل سريع جداً: العاصمة تأخذ 1-2 يوم عمل، ولايات الشمال تأخذ 2-3 أيام عمل، والولايات الجنوبية تأخذ 3-5 أيام عمل.",
        },
        {
          q: "كم تبلغ تكلفة الشحن؟",
          a: "تعتمد رسوم الشحن على ولايتك وطريقة التوصيل المحددة. يتراوح التوصيل للمنزل بين 400 دج و 900 دج، بينما مكتب ياليدين أرخص (عادة 300 دج إلى 600 دج). يتم حساب التوصيل مباشرة في صفحة الدفع.",
        },
      ],
    },
    {
      title: "الدفع والفواتير",
      items: [
        {
          q: "ما هي طرق الدفع المدعومة؟",
          a: "نحن ندعم الدفع عند الاستلام كخيار أساسي. تدفع لعون التوصيل عند استلام الطرد. كما ندعم الدفع عبر بطاقة CIB والذهبية.",
        },
        {
          q: "هل هناك أي رسوم خفية؟",
          a: "لا. السعر الإجمالي الموضح في سلتك وتأكيد طلبك (شاملاً رسوم التوصيل) هو المبلغ الدقيق الذي ستدفعه لعون توصيل ياليدين. لا توجد رسوم إضافية.",
        },
      ],
    },
    {
      title: "أصالة المنتجات والضمان",
      items: [
        {
          q: "هل منتجات هوكو الخاصة بكم أصلية؟",
          a: "نعم، 100%. نحن نضمن أن جميع المنتجات المباعة في متجرنا هي إكسسوارات هوكو أصلية مستوردة مباشرة. تحتوي كل علبة على كود أصالة قابل للخدش للتحقق منه على موقع هوكو الرسمي.",
        },
        {
          q: "ما هو الضمان الذي تقدمونه؟",
          a: "نحن نقدم ضماناً لمدة 12 شهراً على المنتجات الإلكترونية (الشواحن، السماعات، بنوك الطاقة) وضماناً لمدة 3 أشهر على الكابلات والحوامل ضد عيوب التصنيع.",
        },
      ],
    },
  ],
}

const generalContent = {
  en: {
    home: "Home",
    breadcrumb: "FAQs",
    badge: "Help Center",
    title: "Frequently Asked Questions",
    desc: "Find quick answers to common questions about shipping, returns, warranty, and ordering.",
    fallbackTitle: "Still have questions?",
    fallbackDesc: "Our team is ready to answer all your inquiries directly on WhatsApp.",
    fallbackBtn: "Ask Us a Question"
  },
  fr: {
    home: "Accueil",
    breadcrumb: "FAQs",
    badge: "Centre d'aide",
    title: "Foire Aux Questions",
    desc: "Trouvez des réponses rapides aux questions courantes sur la livraison, les retours, la garantie et les commandes.",
    fallbackTitle: "Vous avez encore des questions ?",
    fallbackDesc: "Notre équipe est prête à répondre à toutes vos questions directement sur WhatsApp.",
    fallbackBtn: "Posez-nous une question"
  },
  ar: {
    home: "الرئيسية",
    breadcrumb: "الأسئلة الشائعة",
    badge: "مركز المساعدة",
    title: "الأسئلة الشائعة",
    desc: "ابحث عن إجابات سريعة للأسئلة الشائعة حول الشحن، الاسترجاع، الضمان والطلب.",
    fallbackTitle: "هل لا يزال لديك أسئلة؟",
    fallbackDesc: "فريقنا مستعد للإجابة على جميع استفساراتك مباشرة على الواتساب.",
    fallbackBtn: "اطرح علينا سؤالاً"
  }
}

export default function FAQPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const t = generalContent[language as keyof typeof generalContent] || generalContent.en
  const faqData = faqDataLocalized[language as keyof typeof faqDataLocalized] || faqDataLocalized.en

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

        {/* Categories Pills */}
        <div className="mt-10 flex flex-wrap justify-center lg:justify-start rtl:lg:justify-end gap-2">
          {faqData.map((cat, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={cat.title}
                onClick={() => {
                  setActiveTab(idx)
                  setOpenIndex(0) // open first question of category by default
                }}
                className={`rounded-full px-5 py-2.5 text-xs font-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-hoco-green text-white shadow-md shadow-hoco-green/20"
                    : "bg-white border border-zinc-150 text-foreground hover:bg-hoco-green-light hover:text-hoco-green"
                }`}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Questions Accordion Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-3xl border border-zinc-150 bg-white p-5 shadow-sm sm:p-8 space-y-4 text-left rtl:text-right"
        >
          {faqData[activeTab].items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border p-4.5 transition-all ${
                  isOpen ? "border-hoco-green bg-hoco-green-light/10 shadow-sm" : "border-border hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left rtl:text-right font-black text-foreground text-sm sm:text-base cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-hoco-green" : "text-muted-foreground"}`} />
                    {item.q}
                  </span>
                  <ChevronDown className={`h-4.5 w-4.5 text-hoco-green shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3.5 pl-7 pr-0 rtl:pl-0 rtl:pr-7 text-sm leading-7 text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        {/* Contact fallback */}
        <div className="mt-12 text-center rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-hoco-green-light text-hoco-green">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-black text-foreground sm:text-xl">{t.fallbackTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground max-w-md mx-auto">{t.fallbackDesc}</p>
          <a 
            href="https://wa.me/213550123456"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-hoco-green px-7 py-3.5 text-sm font-black text-white hover:bg-hoco-green-dark transition-all shadow-lg shadow-hoco-green/20 hover:scale-105"
          >
            <MessageCircle className="h-4.5 w-4.5" />
            {t.fallbackBtn}
          </a>
        </div>
      </div>
    </main>
  )
}
