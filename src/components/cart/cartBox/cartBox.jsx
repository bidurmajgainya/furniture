import React from 'react';
import { FaTrash } from 'react-icons/fa';

const CartBox = ({ items, onQuantityChange, onDelete }) => {
  return (
    <div className="lg:w-2/3">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/4 h-48 bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                  <p className="text-gray-600 mb-1">{item.category}</p>
                  <p className="text-gray-600 mb-1">Size: {item.size}</p>
                  <p className="text-gray-600 mb-3">Color: {item.color}</p>
                </div>
                <button 
                  onClick={() => onDelete(item.id)} 
                  className="text-black cursor-pointer text-lg"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    className="px-3 cursor-pointer  py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button 
                    className="px-3 cursor-pointer  py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartBox;
