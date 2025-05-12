import React from 'react'
import ProductSection from './Productlist'

const Product = () => {
  return (
  <div className="p-10 my-10">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated pieces that blend modern aesthetics with timeless functionality
          </p>
        </div>
    <ProductSection />
  </div>
  )
}

export default Product