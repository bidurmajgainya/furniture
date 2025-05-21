import React from 'react';

const WishlistSummary = ({ itemCount, totalValue, onMoveAllToCart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Wishlist Summary</h2>
        <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
          {itemCount} {itemCount === 1 ? '' : ''}
        </span>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 font-medium">Total Value</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">${totalValue.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-gray-700 font-medium">Saved For</span>
          </div>
          <span className="text-gray-900 font-semibold">30 days</span>
        </div>
      </div>

      <button 
        onClick={onMoveAllToCart}
        className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Move All to Cart
      </button>
    </div>
  );
};

export default WishlistSummary;
