import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-ibm-plex-arabic',
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: '--font-noto-kufi-arabic',
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HOCO — Premium Phone Accessories | Fast Delivery Across Algeria',
  description:
    'Shop original HOCO phone accessories — chargers, power banks, cables, earbuds and more. Premium quality, fast delivery across Algeria, secure payment.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: 'white',
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${ibmPlexSansArabic.variable} ${notoKufiArabic.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <CartProvider>
            <FavoritesProvider>
              <AnnouncementBar />
              <Suspense fallback={<div className="h-16 w-full border-b border-hoco-green-border/40 bg-card/80 backdrop-blur-xl animate-pulse" />}>
                <Navbar />
              </Suspense>
              {children}
              <Footer />
              {process.env.NODE_ENV === 'production' && <Analytics />}
            </FavoritesProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
