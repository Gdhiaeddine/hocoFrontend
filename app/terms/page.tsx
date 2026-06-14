import Link from "next/link"
import { ChevronRight, FileText, Scale, ShoppingBag, AlertCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Terms & Conditions</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">Legal Agreement</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Please read these terms carefully before placing an order on HOCO Algeria. By ordering, you agree to these conditions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] items-start">
          {/* Left Sticky Sidebar Navigation */}
          <aside className="hidden lg:sticky lg:top-24 lg:block rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-foreground">Sections</h3>
            <ul className="mt-4 space-y-3 font-semibold text-xs text-muted-foreground">
              <li>
                <a href="#general" className="block py-1 hover:text-hoco-green transition-colors">1. General Terms</a>
              </li>
              <li>
                <a href="#verification" className="block py-1 hover:text-hoco-green transition-colors">2. Phone Verification</a>
              </li>
              <li>
                <a href="#payment" className="block py-1 hover:text-hoco-green transition-colors">3. Cash on Delivery</a>
              </li>
              <li>
                <a href="#shipping" className="block py-1 hover:text-hoco-green transition-colors">4. Shipping & Returns</a>
              </li>
            </ul>
          </aside>

          {/* Right Main Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="general" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <Scale className="h-5 w-5 text-hoco-green" />
                1. General Terms & Ordering
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                All orders placed on our website are subject to availability. Prices are listed in Algerian Dinar (DZD) and are inclusive of local taxes where applicable. We reserve the right to modify prices, update product listings, or stop selling any product at any time without prior notice.
              </p>
            </div>

            {/* Section 2 */}
            <div id="verification" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <AlertCircle className="h-5 w-5 text-hoco-green" />
                2. Phone Verification Requirement
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                To guarantee address accuracy and confirm the buyer's intent, all orders require telephone confirmation before dispatch. Our customer support team will attempt to call the phone number provided in the checkout form up to three times. If we cannot reach you within 48 hours, the order will be cancelled.
              </p>
            </div>

            {/* Section 3 */}
            <div id="payment" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <ShoppingBag className="h-5 w-5 text-hoco-green" />
                3. Cash on Delivery (COD) Payment
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Payments are collected in cash by the Yalidine courier upon delivery. When you sign for your package, you are obliged to pay the courier the exact total amount shown on your invoice (inclusive of product costs and shipping fees). Online payment methods (CIB, Edahabia) are available when specified at checkout.
              </p>
            </div>

            {/* Section 4 */}
            <div id="shipping" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <FileText className="h-5 w-5 text-hoco-green" />
                4. Shipping, Returns & Exchanges
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Shipping is carried out by third-party delivery services (principally Yalidine Express). Shipping times are estimates and start post-verification. For information on returns, exchanges, or warranty claims, please refer to our dedicated policies in the customer support sections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
