import { BenefitBar } from "@/components/product-details/BenefitBar"
import { ProductGallery } from "@/components/product-details/ProductGallery"
import { ProductInfo } from "@/components/product-details/ProductInfo"
import { getProductDetailsBySlug } from "@/components/product-details/ProductDetailsData"
import { ProductTabs } from "@/components/product-details/ProductTabs"
import { RelatedProducts } from "@/components/product-details/RelatedProducts"
import { WhyChooseHoco } from "@/components/product-details/WhyChooseHoco"
import { products } from "@/components/products/ProductData"
import { Breadcrumbs } from "@/components/product-details/Breadcrumbs"
import { ProductNotFound } from "@/components/product-details/ProductNotFound"

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params
  const currentProduct = getProductDetailsBySlug(slug)

  if (!currentProduct) {
    return <ProductNotFound />
  }

  // Fetch related products sharing same category (excluding current product)
  const categoryProducts = products.filter(
    (p) => p.category === currentProduct.category && p.slug !== currentProduct.slug
  )
  
  // If fewer than 6 related products, fill with other categories
  let related = [...categoryProducts]
  if (related.length < 6) {
    const others = products.filter(
      (p) => p.category !== currentProduct.category && p.slug !== currentProduct.slug
    )
    related = [...related, ...others].slice(0, 6)
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Breadcrumbs category={currentProduct.category} name={currentProduct.name} />

      <section className="bg-gradient-to-b from-background via-hoco-mint/35 to-background px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <ProductGallery product={currentProduct} />
          <ProductInfo product={currentProduct} />
        </div>
      </section>

      <BenefitBar />
      <ProductTabs product={currentProduct} />
      <RelatedProducts related={related} />
      <WhyChooseHoco />
    </main>
  )
}
