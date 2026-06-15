"use client"

import Link from "next/link"
import { ChevronRight, Truck, Clock, ShieldCheck, MapPin } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const content = {
  en: {
    home: "Home",
    breadcrumb: "Shipping Information",
    badge: "Fast delivery across Algeria",
    title: "Shipping Information",
    desc: "We partner with Yalidine Express to offer quick, reliable, and trackable shipping directly to your home or local office.",
    card1Title: "Home Delivery",
    card1Desc: "Get your HOCO products delivered right to your front door. The courier will call you before delivery to coordinate the exact drop-off timing. Cash on delivery is accepted.",
    card2Title: "Yalidine Stop Desk Pickup",
    card2Desc: "Prefer to collect at your convenience? Ship to any local Yalidine office (Stop Desk). You will receive an SMS when your package arrives. Stop desk fees are typically cheaper than home delivery!",
    tableTitle: "Estimated Delivery Timelines",
    tableDesc: "Delivery timelines start after our customer support team confirms your order details over the phone.",
    thRegions: "Regions & Wilayas",
    thStopDesk: "Stop Desk Timeline",
    thHome: "Home Delivery Timeline",
    rows: [
      { reg: "Algiers (16)", stop: "1 business day", home: "1-2 business days", highlight: true },
      { reg: "Major Northern Wilayas (Blida, Oran, Constantine, Sétif...)", stop: "1-2 business days", home: "2-3 business days" },
      { reg: "Interior & Southern Wilayas (Biskra, Ghardaïa, El Oued...)", stop: "2-3 business days", home: "3-4 business days" },
      { reg: "Far Southern Wilayas (Tamanrasset, Adrar, Tindouf...)", stop: "3-5 business days", home: "4-6 business days" }
    ],
    policyTitle: "Order Verification Policy",
    policyDesc: "To prevent shipping mistakes and verify details, all orders placed on our store require a quick confirmation phone call from our team. We will call the phone number provided within 12 hours (excluding Fridays). Unverified orders will not be shipped, so please keep your phone nearby!"
  },
  fr: {
    home: "Accueil",
    breadcrumb: "Informations de Livraison",
    badge: "Livraison rapide sur toute l'Algérie",
    title: "Informations de Livraison",
    desc: "Nuus travaillons avec Yalidine Express pour offrir une livraison rapide, fiable et avec suivi directement à votre domicile ou bureau local.",
    card1Title: "Livraison à Domicile",
    card1Desc: "Faites vous livrer vos produits HOCO directement devant votre porte. Le livreur vous contactera par téléphone pour convenir de l'heure exacte. Paiement à la livraison accepté.",
    card2Title: "Retrait en Stop Desk Yalidine",
    card2Desc: "Vous préférez récupérer votre colis quand cela vous arrange ? Faites vous livrer dans n'importe quel bureau Yalidine (Stop Desk). Vous recevrez un SMS à l'arrivée. Les tarifs Stop Desk sont généralement moins chers !",
    tableTitle: "Délais de Livraison Estimés",
    tableDesc: "Les délais de livraison commencent après confirmation de votre commande par téléphone avec notre équipe.",
    thRegions: "Régions & Wilayas",
    thStopDesk: "Délai Stop Desk",
    thHome: "Délai à Domicile",
    rows: [
      { reg: "Alger (16)", stop: "1 jour ouvrable", home: "1-2 jours ouvrables", highlight: true },
      { reg: "Grandes Wilayas du Nord (Blida, Oran, Constantine, Sétif...)", stop: "1-2 jours ouvrables", home: "2-3 jours ouvrables" },
      { reg: "Wilayas de l'Intérieur & du Sud (Biskra, Ghardaïa, El Oued...)", stop: "2-3 jours ouvrables", home: "3-4 jours ouvrables" },
      { reg: "Wilayas de l'Extrême Sud (Tamanrasset, Adrar, Tindouf...)", stop: "3-5 jours ouvrables", home: "4-6 jours ouvrables" }
    ],
    policyTitle: "Politique de Validation des Commandes",
    policyDesc: "Pour éviter les erreurs d'adresse et valider vos coordonnées, toutes les commandes nécessitent un appel de confirmation rapide de notre équipe. Nous vous appellerons dans les 12 heures (hors vendredi). Les commandes non validées ne seront pas expédiées, gardez votre téléphone à portée de main !"
  },
  ar: {
    home: "الرئيسية",
    breadcrumb: "معلومات الشحن",
    badge: "توصيل سريع لجميع أنحاء الجزائر",
    title: "معلومات الشحن والتوصيل",
    desc: "نحن نتعاون مع ياليدين إكسبريس لتقديم خدمة شحن سريعة، موثوقة، وقابلة للتتبع مباشرة إلى منزلك أو لمكتب ياليدين القريب منك.",
    card1Title: "التوصيل للمنزل",
    card1Desc: "احصل على منتجات هوكو الخاصة بك مباشرة حتى باب منزلك. سيتصل بك عون التوصيل قبل القدوم لتنسيق موعد التسليم المناسب. الدفع عند الاستلام.",
    card2Title: "الاستلام من مكتب ياليدين (Stop Desk)",
    card2Desc: "هل تفضل استلام طلبيتك بنفسك في الوقت المناسب لك؟ اشحن إلى أي مكتب ياليدين محلي. ستتلقى رسالة SMS عند وصول طردك. رسوم التوصيل للمكتب أرخص عادة من التوصيل للمنزل!",
    tableTitle: "مواعيد التوصيل التقديرية",
    tableDesc: "تبدأ مواعيد التوصيل بعد تأكيد تفاصيل طلبك هاتفياً مع فريق دعم العملاء لدينا.",
    thRegions: "المناطق والولايات",
    thStopDesk: "مدة التوصيل للمكتب",
    thHome: "مدة التوصيل للمنزل",
    rows: [
      { reg: "الجزائر العاصمة (16)", stop: "يوم عمل واحد", home: "1-2 يوم عمل", highlight: true },
      { reg: "ولايات الشمال الكبرى (البليدة، وهران، قسنطينة، سطيف...)", stop: "1-2 يوم عمل", home: "2-3 أيام عمل" },
      { reg: "ولايات الداخلية والجنوب (بسكرة، غرداية، الوادي...)", stop: "2-3 أيام عمل", home: "3-4 أيام عمل" },
      { reg: "ولايات أقصى الجنوب (تمنراست، أدرار، تندوف...)", stop: "3-5 أيام عمل", home: "4-6 أيام عمل" }
    ],
    policyTitle: "سياسة تأكيد الطلبات",
    policyDesc: "لمنع أخطاء الشحن والتحقق من العنوان، تتطلب جميع الطلبات مكالمة تأكيد سريعة من فريقنا. سنتصل بك على الرقم المقدم في غضون 12 ساعة (باستثناء أيام الجمعة). لن يتم شحن الطلبات غير المؤكدة، لذا يرجى إبقاء هاتفك قريباً!"
  }
}

export default function ShippingPage() {
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
          {/* Shipping Methods */}
          <div className="grid gap-6 md:grid-cols-2 text-left rtl:text-right">
            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hoco-green-light text-hoco-green">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">{t.card1Title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t.card1Desc}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-muted-foreground">
                <MapPin className="h-6 w-6 text-hoco-green" />
              </div>
              <h3 className="mt-5 text-lg font-black text-foreground sm:text-xl">{t.card2Title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {t.card2Desc}
              </p>
            </div>
          </div>

          {/* Delivery Times */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-left rtl:text-right">
            <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
              <Clock className="h-5 w-5 text-hoco-green" />
              {t.tableTitle}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {t.tableDesc}
            </p>
            
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left rtl:text-right text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase font-black tracking-wider">
                    <th className="pb-3 pr-4 rtl:pr-0 rtl:pl-4">{t.thRegions}</th>
                    <th className="pb-3 px-4">{t.thStopDesk}</th>
                    <th className="pb-3 pl-4 rtl:pl-0 rtl:pr-4">{t.thHome}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 font-semibold text-foreground">
                  {t.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className={`py-4 pr-4 rtl:pr-0 rtl:pl-4 ${row.highlight ? "text-hoco-green font-black" : ""}`}>{row.reg}</td>
                      <td className="py-4 px-4">{row.stop}</td>
                      <td className="py-4 pl-4 rtl:pl-0 rtl:pr-4">{row.home}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Secure details card */}
          <div className="rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 text-left rtl:text-right">
            <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
              <ShieldCheck className="h-5 w-5 text-hoco-green" />
              {t.policyTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {t.policyDesc}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
