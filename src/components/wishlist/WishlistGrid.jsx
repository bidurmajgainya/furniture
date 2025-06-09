import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WishlistGrid = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Modern Velvet Sofa',
      category: 'Living Room',
      size: '3-Seater',
      color: 'Navy Blue',
      price: 899,
      image: 'https://i.pinimg.com/736x/c9/a9/c2/c9a9c2c010c30c3a120c1d2589ff29f7.jpg',
    },
    {
      id: 2,
      name: 'Oak Dining Table',
      category: 'Dining Room',
      size: '6-Seater',
      color: 'Natural Oak',
      price: 650,
      image: 'https://i.pinimg.com/736x/bd/04/e4/bd04e4a9107029ef41ee271bc16e7e27.jpg',
    },
    {
      id: 3,
      name: 'Industrial Bookshelf',
      category: 'Home Office',
      size: '5-Tier',
      color: 'Black',
      price: 299,
      image: 'https://i.pinimg.com/736x/23/2b/2d/232b2dea48bd8692970de10a7ac10319.jpg',
    },
  ]);

  // Handler for moving item to cart (for example, just remove from wishlist here)
  const handleMoveToCart = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    // You can also integrate cart logic here if you want
  };

  // Handler for removing item from wishlist
  const handleRemove = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
  
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">YOUR WISHLIST</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-700 mb-4">Your wishlist is empty.</p>
          <Link
            to="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 cursor-pointer rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Go to Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              <div className="sm:w-1/4 h-48 sm:h-auto relative group overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full md:w-48 md:h-48 rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="flex-1 p-5 flex flex-col sm:flex-row">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mt-1">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color.toLowerCase() }}
                      />
                      <span className="text-sm text-gray-600">{item.color}</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                    <span className="text-sm text-gray-600">{item.size}</span>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    This premium {item.name.toLowerCase()} features high-quality materials and craftsmanship. Perfect for modern living spaces.
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 sm:mt-0 sm:ml-6 sm:w-48 flex sm:flex-col justify-between sm:justify-center gap-3">
                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    className="px-4 py-2 cursor-pointer bg-black text-white text-sm font-medium rounded-lg hover:bg-transparent hover:text-black border-1 border-bborder-l-black transition-colors flex items-center justify-center gap-2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 border cursor-pointer border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistGrid;
