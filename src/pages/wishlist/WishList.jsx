import React, { useState } from 'react';
import WishlistGrid from '../../components/wishlist/WishlistGrid';
import WishlistSummary from '../../components/wishlist/WishlistSummary';
import { Link } from 'react-router-dom';
const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Scandinavian Lounge Chair',
      category: 'Seating',
      size: 'Standard (24"W × 32"D × 31"H)',
      color: 'Oak',
      price: 449,
      image: 'https://i.pinimg.com/736x/99/16/c3/9916c309f1df8bdc169605a511f95135.jpg'
    },
    {
      id: 2,
      name: 'Marble Coffee Table',
      category: 'Tables',
      size: 'Large (48"W × 24"D × 18"H)',
      color: 'White',
      price: 799,
      image: 'https://i.pinimg.com/736x/ce/75/6e/ce756e3434fb33b5c9269c17fbf2ed4e.jpg'
    },
    {
      id: 3,
      name: 'Industrial Floor Lamp',
      category: 'Lighting',
      size: 'Tall (72"H)',
      color: 'Black',
      price: 189,
      image: 'https://i.pinimg.com/736x/94/a9/92/94a992550e559851eed5080e4320b10b.jpg'
    }
  ]);

  const handleMoveToCart = (id) => {
    console.log(`Moving item ${id} to cart`);
  };

  const handleRemove = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const handleMoveAllToCart = () => {
    console.log('Moving all items to cart');
  };

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center text-gray-600 mb-6">
        <Link to="/" className="text-gray-600 hover:text-orange-600">
          <span className="mr-2">Home</span>
        </Link>
        <span className="mr-2">›</span>
        <span className="font-medium">Wishlist</span>
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      
        <div className="lg:w-3/4">
          {wishlistItems.length > 0 ? (
            <WishlistGrid 
              items={wishlistItems} 
              onMoveToCart={handleMoveToCart}
              onRemove={handleRemove}
            />
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-6">Save your favorite items here for later</p>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
          <div className="lg:w-1/4">
          <WishlistSummary 
            itemCount={wishlistItems.length} 
            totalValue={totalValue}
            onMoveAllToCart={handleMoveAllToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;