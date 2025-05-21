import React, { useState } from 'react';
import CartBox from './cartBox/cartBox';
import Summary from './cartBox/Summary';
import { Link } from 'react-router-dom';

const CartGrid = () => {
  const [CartGridItems, setCartGridItems] = useState([
    {
      id: 1,
      name: 'Modern Velvet Sofa',
      category: 'Living Room',
      size: '3-Seater',
      color: 'Navy Blue',
      price: 899,
      quantity: 1,
      image: 'https://i.pinimg.com/736x/c9/a9/c2/c9a9c2c010c30c3a120c1d2589ff29f7.jpg'
    },
    {
      id: 2,
      name: 'Oak Dining Table',
      category: 'Dining Room',
      size: '6-Seater',
      color: 'Natural Oak',
      price: 650,
      quantity: 1,
      image: 'https://i.pinimg.com/736x/bd/04/e4/bd04e4a9107029ef41ee271bc16e7e27.jpg'
    },
    {
      id: 3,
      name: 'Industrial Bookshelf',
      category: 'Home Office',
      size: '5-Tier',
      color: 'Black',
      price: 299,
      quantity: 1,
      image: 'https://i.pinimg.com/736x/23/2b/2d/232b2dea48bd8692970de10a7ac10319.jpg'
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartGridItems(CartGridItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleDeleteItem = (id) => {
    setCartGridItems(CartGridItems.filter(item => item.id !== id));
  };

  const subtotal = CartGridItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * 0.15;
  const deliveryFee = 49;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-gray-600 mb-6">
        <Link to="/" className="text-gray-600 hover:text-orange-600">
          <span className="mr-2">Home</span>
        </Link>
        <span className="mr-2">›</span>
        <span className="font-medium">Cart</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

      {CartGridItems.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty.</p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded  hover:bg-transparent hover:text-black border-2 border-black transition-colors duration-300"
          >
            Go to Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <CartBox
            items={CartGridItems}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDeleteItem}
          />
          <Summary
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
            total={total}
          />
        </div>
      )}
    </div>
  );
};

export default CartGrid;
