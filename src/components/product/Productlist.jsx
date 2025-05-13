import React from 'react';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Modern Velvet Sofa',
      price: 899,
      originalPrice: 1099,
      rating: 4.8,
      reviewCount: 124,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      colors: ['#3A3A3A', '#C4A484', '#7D5260'],
      isNew: true
    },
    {
      id: 2,
      name: 'Minimalist Wooden Chair',
      price: 249,
      originalPrice: 299,
      rating: 4.6,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      colors: ['#5F4B32', '#E5C9A6', '#2C2C2C']
    },
    {
      id: 3,
      name: 'Scandinavian Dining Table',
      price: 699,
      originalPrice: 899,
      rating: 4.9,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80',
      colors: ['#E5E1D8', '#3A3A3A', '#966F33'],
      isBestSeller: true
    },
    {
      id: 4,
      name: 'Industrial Bookshelf',
      price: 459,
      originalPrice: 599,
      rating: 4.7,
      reviewCount: 67,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      colors: ['#2C2C2C', '#966F33', '#5F4B32']
    }
  ];

  return (
    <section className=" p-5 md:px-12 md:py-10  bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
      

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {product.isNew && (
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">New</span>
                )}
                {product.isBestSeller && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Bestseller</span>
                )}
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <FiHeart className="text-gray-700" />
              </button>

              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-4 h-4`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviewCount})</span>
                </div>

                <h3 className="font-medium text-lg mb-2">{product.name}</h3>

                {/* Color Options */}
                <div className="flex gap-2 mb-4">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      className="w-5 h-5 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-900 cursor-pointer text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;