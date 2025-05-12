import React, { useState } from 'react';
import { HiOutlineHeart, HiOutlineUser, HiOutlineShoppingCart, HiOutlineChevronDown } from "react-icons/hi2";
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  
  // Sample categories data
  const categories = [
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Office",
    "Outdoor"
  ];

  return (
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
              
              {/* Dropdown Menu */}
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
  )
}

export default Navbar;