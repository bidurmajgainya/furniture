import React, { useState } from 'react';
import {
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineChevronDown
} from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';
import { FaBars } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:flex justify-between items-center py-4 px-10 bg-white shadow sticky top-0 z-50">
        <div className="flex items-center">
          <h1 className="text-3xl font-medium">AIKE</h1>
          <nav className="ml-20">
            <ul className="flex items-center space-x-6 font-medium text-[16px]">
              <li className="relative">
                <button
                  className="flex items-center"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  Category
                  <HiOutlineChevronDown
                    className={`ml-1 transition-transform ${
                      isCategoryOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50"
                    >
                      {categories.map((category, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {category}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact us</a></li>
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

      {/* Mobile Navbar */}
      <div className="xl:hidden flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <FaBars className="text-2xl" />
        </button>
        <h1 className="text-2xl font-medium">AIKE</h1>
        <div className="flex items-center space-x-4 text-xl">
          <HiOutlineShoppingCart />
          <HiOutlineUser />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed inset-0 z-50 flex"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Sidebar Panel - Full Width */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full h-full bg-white overflow-y-auto z-50"
            >
              <div className="p-4 flex justify-between items-center">
                <h2 className="text-xl font-medium">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <MdOutlineClose className="text-2xl" />
                </button>
              </div>

              {/* Search */}
              <div className="p-4">
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
                  <li>
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    >
                      <span>Category</span>
                      <HiOutlineChevronDown
                        className={`transition-transform ${
                          isCategoryOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isCategoryOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {categories.map((category, index) => (
                            <a key={index} href="#" className="block py-1 hover:text-gray-600">
                              {category}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Interior Design</a></li>
                  <li><a href="#">Product Recommendation</a></li>
                </ul>
              </nav>

              {/* Bottom Links */}
              <div className="p-4 bg-white">
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center">
                      <HiOutlineHeart className="mr-2" /> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center">
                      <HiOutlineUser className="mr-2" /> Account
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
