import React, { useState } from 'react';
import { FiFilter, FiStar, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: 'Scandinavian Sofa',
      price: 899,
      originalPrice: 1099,
      rating: 4.8,
      category: 'living-room',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      colors: ['#3A3A3A', '#C4A484'],
      isNew: true
    },
    {
      id: 2,
      name: 'Minimalist Dining Table',
      price: 599,
      originalPrice: 799,
      rating: 4.6,
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80',
      colors: ['#E5E1D8', '#5F4B32'],
      isBestSeller: true
    },
  ];

  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'living-room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'dining', label: 'Dining' },
    { value: 'office', label: 'Office' },
    { value: 'outdoor', label: 'Outdoor' }
  ];

  return (
    <div className="bg-white">
      <div className="bg-gray-100 py-16 px-5 md:px-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Shop Our Collection</h1>
        <p className="text-gray-600">Handcrafted furniture for every space in your home</p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">

          {/* Mobile Category Dropdown */}
          <div className="md:hidden relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="border rounded-lg px-3 py-2 text-gray-700 flex items-center gap-2"
            >
              Category {showFilters ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {showFilters && (
              <ul className="absolute z-10 mt-2 w-48 bg-white border rounded shadow">
                {categories.map((category) => (
                  <li key={category.value}>
                    <button
                      className={`block w-full text-left px-4 py-2 ${selectedCategory === category.value ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => {
                        setSelectedCategory(category.value);
                        setShowFilters(false);
                      }}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc6400]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-full md:w-64 flex-shrink-0">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.value}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded ${selectedCategory === category.value ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedCategory(category.value)}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                      {product.isNew && <span className="bg-[#dc6400] text-white text-xs px-2 py-1 rounded-full">New</span>}
                      {product.isBestSeller && <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Bestseller</span>}
                    </div>
                    <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100">
                      <FiHeart className="text-gray-700" />
                    </button>
                    <div className="aspect-square overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-4 h-4`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                      </div>
                      <h3 className="font-medium text-lg mb-2">{product.name}</h3>
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
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-lg">${product.price}</span>
                          {product.originalPrice && <span className="text-gray-400 line-through ml-2">${product.originalPrice}</span>}
                        </div>
                        <button className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700">
                          <FiShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
