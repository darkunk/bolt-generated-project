import React from 'react'
    import SponsoredBanner from '../components/sponsored/SponsoredBanner'
    import ProductGrid from '../components/products/ProductGrid'

    export default function Home() {
      return (
        <div className="container mx-auto px-4 py-8">
          {/* Sponsored Banner Section */}
          <div className="mb-8">
            <SponsoredBanner />
          </div>

          {/* Product Grid Section */}
          <ProductGrid />
        </div>
      )
    }
