import React, { useState } from 'react';
import { 
  HiOutlineHeart, 
  HiOutlineUser, 
  HiOutlineShoppingCart, 
  HiOutlineChevronDown,
  HiOutlineMenu,
  HiOutlineX
} from "react-icons/hi2";
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const categories = [
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Office",
    "Outdoor"
  ];

  return (
    <>
      {/* Desktop Navbar (hidden on mobile) */}
      <div className='hidden xl:flex justify-between items-center pt-4 px-10'>
        <div className="flex justify-between items-center">
          <div><h1 className='text-3xl font-medium'>AIKE</h1></div>
          <nav>
            <ul className='font-medium text-[16px] ml-40 flex items-center space-x-6'>
              <li className='relative group'>
                <button 
                  className='flex items-center'
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  Category
                  <HiOutlineChevronDown className={`ml-1 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCategoryOpen && (
                  <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10'>
                    {categories.map((category, index) => (
                      <a 
                        key={index}
                        href="#"
                        className='block px-4 py-2 hover:bg-gray-100'
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li><a href="">Promo</a></li>
              <li><a href="">Interior Design</a></li>
              <li><a href="">Product Recomendation</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 outline-0 border-b border-gray-300"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center space-x-4 text-2xl cursor-pointer">
            <HiOutlineShoppingCart />
            <HiOutlineHeart />
            <HiOutlineUser />
          </div>
        </div>
      </div>

      {/* Mobile Navbar (visible on small screens) */}
      <div className="xl:hidden flex justify-between items-center p-4">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <HiOutlineMenu className="text-2xl" />
        </button>
        
        <h1 className="text-2xl font-medium">AIKE</h1>
        
        <div className="flex items-center space-x-4">
          <HiOutlineShoppingCart className="text-xl" />
          <HiOutlineUser className="text-xl" />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Sidebar Content */}
          <div className="relative w-4/5 max-w-sm h-full bg-white">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-medium">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <HiOutlineX className="text-2xl" />
              </button>
            </div>
            
            {/* Search Bar */}
            <div className="p-4 border-b">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  placeholder="Search..."
                />
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-4">
                <li className="border-b pb-2">
                  <button 
                    className="flex items-center justify-between w-full"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    <span>Category</span>
                    <HiOutlineChevronDown className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isCategoryOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {categories.map((category, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="block py-1 hover:text-gray-600"
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
                <li className="border-b pb-2"><a href="">Promo</a></li>
                <li className="border-b pb-2"><a href="">Interior Design</a></li>
                <li className="border-b pb-2"><a href="">Product Recomendation</a></li>
              </ul>
            </nav>
            
            {/* Bottom Menu */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <ul className="space-y-3">
                <li><a href="" className="flex items-center"><HiOutlineHeart className="mr-2" /> Wishlist</a></li>
                <li><a href="" className="flex items-center"><HiOutlineUser className="mr-2" /> Account</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;