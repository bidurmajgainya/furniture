import React from 'react';

const Summary = ({ subtotal, discount, deliveryFee, total }) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Discount (15%)</span>
            <span className="text-green-600">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium">${deliveryFee.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input 
              type="text" 
              placeholder="Add promo code" 
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700">
              Apply
            </button>
          </div>
        </div>

        <button className="w-full py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Summary;