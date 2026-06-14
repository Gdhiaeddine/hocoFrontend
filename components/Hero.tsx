"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  LayoutGrid,
  Lock,
  RotateCcw,
  Sparkles,
  Trophy,
  Truck,
  Zap,
} from "lucide-react";
import { FloatingBadge } from "./FloatingBadge";
import { FloatingProduct, ProductImage } from "./FloatingProduct";
import { useLanguage } from "@/context/LanguageContext";

const FEATURES = [
  {
    icon: BadgeCheck,
    titleKey: "hero.features.qualityTitle",
    subtitleKey: "hero.features.qualityDesc",
  },
  {
    icon: Truck,
    titleKey: "hero.features.deliveryTitle",
    subtitleKey: "hero.features.deliveryDesc",
  },
  {
    icon: RotateCcw,
    titleKey: "hero.features.returnsTitle",
    subtitleKey: "hero.features.returnsDesc",
  },
  {
    icon: Lock,
    titleKey: "hero.features.paymentTitle",
    subtitleKey: "hero.features.paymentDesc",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-muted min-[1150px]:h-screen">
      {/* Background glow circles */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-hoco-green/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-hoco-green/[0.06] blur-3xl" />

      {/* Floating particles */}
      {[
        { top: "12%", left: "20%", size: 8, dur: 6 },
        { top: "30%", left: "8%", size: 5, dur: 8 },
        { top: "65%", left: "15%", size: 6, dur: 7 },
        { top: "20%", left: "85%", size: 7, dur: 9 },
        { top: "75%", left: "78%", size: 5, dur: 6.5 },
        { top: "45%", left: "55%", size: 4, dur: 7.5 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute hidden rounded-full bg-hoco-green/20 sm:block"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{ y: [0, -24, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: p.dur,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 min-[1150px]:h-full min-[1150px]:grid-cols-[45%_55%] min-[1150px]:py-20">
        {/* Left content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center min-[1150px]:items-start min-[1150px]:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-hoco-green" />
            {t("hero.badge")}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            style={
              isRtl ? { alignSelf: "flex-end", textAlign: "right" } : undefined
            }
            className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl min-[1150px]:text-6xl xl:text-7xl"
          >
            {t("hero.titlePart1")}
            <br />
            <span className="text-hoco-green">{t("hero.titlePart2")}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[520px] text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
          >
            <Truck className="h-4 w-4 text-hoco-green" />
            <span>🇩🇿 {t("hero.delivery")}</span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-hoco-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-hoco-green/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-hoco-green/40"
            >
              {t("hero.shopNow")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted cursor-pointer"
            >
              <LayoutGrid className="h-4 w-4" />
              {t("hero.exploreCategories")}
            </button>
          </motion.div>

          {/* Feature row */}
          <motion.div
            variants={fadeUp}
            className="mt-10 grid w-full max-w-md grid-cols-2 gap-5 sm:max-w-none md:grid-cols-4 min-[1150px]:gap-4"
          >
            {FEATURES.map((f) => (
              <div key={f.titleKey} className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="text-left leading-tight">
                  <p className="text-xs font-bold text-foreground">
                    {t(f.titleKey)}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {t(f.subtitleKey)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right product collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual relative h-[480px] w-full min-[1150px]:h-[640px]"
        >
          <div className="hero-shine pointer-events-none absolute inset-0 z-10 rounded-[2rem]" />
          <div className="hero-spark hero-spark-1" />
          <div className="hero-spark hero-spark-2" />
          <div className="hero-spark hero-spark-3" />

          {/* Glowing platform */}
          <div className="hero-platform absolute bottom-10 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-hoco-green/10 blur-3xl sm:h-72 sm:w-72" />

          {/* Center phonecase */}
          <FloatingProduct
            className="left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 scale-90 sm:w-64 sm:scale-100 min-[1150px]:w-72"
            duration={6}
            rotate={2}
          >
            <ProductImage
              src="/hero/phonecase.png"
              alt="HOCO premium phone case"
              width={320}
              height={400}
              priority
            />
          </FloatingProduct>

          {/* Wall charger - upper left */}
          <FloatingProduct
            className="left-[12%] top-[14%] w-32 scale-90 sm:w-40 sm:scale-100"
            duration={5}
            delay={0.4}
          >
            <ProductImage
              src="/hero/chargeur.png"
              alt="HOCO premium wall charger"
              width={180}
              height={180}
            />
          </FloatingProduct>

          {/* Earbuds - lower left */}
          <FloatingProduct
            className="bottom-[12%] left-[6%] w-36 scale-90 sm:w-44 sm:scale-100"
            duration={5.5}
            delay={0.8}
          >
            <ProductImage
              src="/hero/airpods.png"
              alt="HOCO wireless airpods"
              width={200}
              height={200}
            />
          </FloatingProduct>

          {/* Power bank - lower right */}
          <FloatingProduct
            className="bottom-[14%] right-[6%] w-32 scale-90 sm:w-40 sm:scale-100"
            duration={6.5}
            delay={0.3}
          >
            <ProductImage
              src="/hero/powerbank.png"
              alt="HOCO premium power bank"
              width={180}
              height={180}
            />
          </FloatingProduct>

          {/* Car charger - front right */}
          <FloatingProduct
            className="right-[12%] top-[16%] w-28 scale-90 sm:w-36 sm:scale-100"
            duration={5}
            delay={1}
          >
            <ProductImage
              src="/hero/CarChargeur.png"
              alt="HOCO premium car charger"
              width={160}
              height={160}
            />
          </FloatingProduct>

          {/* Floating badges with price and text */}
          <FloatingBadge
            icon={Trophy}
            title="Best Seller"
            subtitle="HOCO 20W Charger"
            price="2,600 DZD"
            className="left-[2%] top-[2%] hidden sm:flex"
            duration={4.2}
            delay={0.2}
          />
          <FloatingBadge
            icon={Zap}
            title="Power Bank 20000mAh"
            subtitle="High capacity"
            price="5,400 DZD"
            className="bottom-[2%] right-[2%] hidden sm:flex"
            duration={4.8}
            delay={0.5}
          />
        </motion.div>
      </div>
    </section>
  );
}
