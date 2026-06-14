import Link from "next/link"
import { ChevronRight, ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm font-semibold text-muted-foreground sm:px-6 lg:px-8">
          <Link href="/" className="text-hoco-green transition-colors hover:text-hoco-green-dark">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Privacy Policy</span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-hoco-green">Data Protection</span>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            We value your privacy. Learn how we collect, protect, and use your personal information when you shop with us in Algeria.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] items-start">
          {/* Left Sticky Sidebar Navigation */}
          <aside className="hidden lg:sticky lg:top-24 lg:block rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h3 className="font-heading text-sm font-black uppercase tracking-wider text-foreground">Sections</h3>
            <ul className="mt-4 space-y-3 font-semibold text-xs text-muted-foreground">
              <li>
                <a href="#storage" className="block py-1 hover:text-hoco-green transition-colors">1. Data Storage</a>
              </li>
              <li>
                <a href="#sharing" className="block py-1 hover:text-hoco-green transition-colors">2. Advertising & Sharing</a>
              </li>
              <li>
                <a href="#usage" className="block py-1 hover:text-hoco-green transition-colors">3. How Data is Used</a>
              </li>
            </ul>
          </aside>

          {/* Right Main Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="storage" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <Lock className="h-5 w-5 text-hoco-green" />
                1. Secure Data Storage
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Your name, telephone number, and delivery address are stored in secure databases. We use standard encryption methods to prevent unauthorized access or disclosure of your customer profiles.
              </p>
            </div>

            {/* Section 2 */}
            <div id="sharing" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-4">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <EyeOff className="h-5 w-5 text-hoco-green" />
                2. No Third-party Advertising
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                We will never sell, lease, or rent your personal information to marketing networks or third-party advertisers. Your information is purely used to fulfill and verify your shopping requests.
              </p>
            </div>

            {/* Section 3 */}
            <div id="usage" className="scroll-mt-24 rounded-3xl border border-zinc-150 bg-white p-6 shadow-sm sm:p-8 space-y-5">
              <h3 className="flex items-center gap-2.5 font-heading text-lg font-black text-foreground sm:text-xl">
                <UserCheck className="h-5 w-5 text-hoco-green" />
                3. How Your Information Is Used
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground leading-7">
                <li className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-hoco-green mt-0.5" />
                  <div>
                    <strong className="text-foreground">Order Delivery Fulfillment:</strong> We share your name, phone number, and address details with Yalidine Express so they can contact you and deliver your products.
                  </div>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-hoco-green mt-0.5" />
                  <div>
                    <strong className="text-foreground">Telephone Confirmations:</strong> Our agents use your telephone number to confirm your order details and verify your address before dispatch.
                  </div>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-hoco-green mt-0.5" />
                  <div>
                    <strong className="text-foreground">Customer Support:</strong> If you contact us for returns, exchanges, or warranty claims, we retrieve your order history using your name or reference number.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
