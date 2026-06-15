"use client"

import { motion } from "framer-motion"
import { Navigation } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function OfficeMap() {
  const { t } = useLanguage()

  const mapLink = "https://www.google.com/maps/place/Hoco+Alg%C3%A9rie+-+Draria,+Alger/@36.2819213,2.7493286,9z/data=!4m10!1m2!2m1!1shoco+algerie!3m6!1s0x128faf9837a5b421:0x286a2bf15dca82b7!8m2!3d36.7209867!4d2.9935734!15sCgxob2NvIGFsZ2VyaWVaDiIMaG9jbyBhbGdlcmllkgERZWxlY3Ryb25pY3Nfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXpjM1JtVmtaM0VBReABAPoBBAhwEEw!16s%2Fg%2F11kgzszkv7?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"

  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-80px" }} 
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_24px_70px_-46px_rgba(0,139,58,0.4)] lg:grid-cols-[1fr_360px]"
      >
        {/* Google Maps Embed iframe */}
        <div className="relative min-h-[340px] overflow-hidden bg-zinc-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.814272186981!2d2.990998476837012!3d36.7209867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faf9837a5b421%3A0x286a2bf15dca82b7!2sHoco%20Alg%C3%A9rie%20-%20Draria!5e0!3m2!1sen!2sdz!4v1718471234567!5m2!1sen!2sdz" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: "340px" }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        {/* Office Details */}
        <div className="p-7 text-left rtl:text-right flex flex-col justify-center">
          <h2 className="font-heading text-2xl font-black text-foreground">{t("contact.office.title")}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{t("contact.office.desc")}</p>
          <a 
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-hoco-green px-6 py-3 text-sm font-black text-white shadow-lg shadow-hoco-green/25 transition-all hover:bg-hoco-green-dark hover:scale-105"
          >
            <Navigation className="h-4 w-4" />
            {t("contact.office.directions")}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
