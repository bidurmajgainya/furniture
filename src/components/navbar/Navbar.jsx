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
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const categories = ['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden px-5 xl:flex justify-between items-center py-4 lg:px-10 bg-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl font-semibold text-gray-800">AIKE</h1>
          </Link>
          <nav className="ml-20">
            <ul className="flex items-center space-x-8 font-medium text-gray-700">
              <li
                className="relative group"
                onMouseEnter={() => setIsCategoryHovered(true)}
                onMouseLeave={() => setIsCategoryHovered(false)}
              >
                <button className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Category
                  <HiOutlineChevronDown
                    className={`ml-1 transition-transform ${isCategoryHovered ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isCategoryHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-56 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100"
                    >
                      {categories.map((category, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                        >
                          {category}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 outline-none border-b border-gray-300 focus:border-gray-500 transition-colors w-64"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center space-x-5">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <HiOutlineHeart className="text-xl text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <HiOutlineShoppingCart className="text-xl text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <HiOutlineUser className="text-xl text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="xl:hidden flex justify-between items-center p-4 bg-white shadow-lg sticky top-0 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaBars className="text-xl text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">AIKE</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
            <HiOutlineShoppingCart className="text-xl text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <HiOutlineUser className="text-xl text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed inset-0 z-50"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-transparent bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full  h-full bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b  flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">AIKE</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MdOutlineClose className="text-xl text-gray-700" />
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                    placeholder="Search..."
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                    >
                      <span className="font-medium">Category</span>
                      <HiOutlineChevronDown
                        className={`transition-transform ${mobileCategoryOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileCategoryOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 overflow-hidden"
                        >
                          <ul className="space-y-2 py-2">
                            {categories.map((category, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)} // Close the menu when a category is clicked
                                >
                                  {category}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)} // Close the menu when clicked
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)} // Close the menu when clicked
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)} // Close the menu when clicked
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Bottom Links */}
              <div className="p-4 border-t">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      <HiOutlineHeart className="mr-3 text-lg" />
                      Wishlist
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      <HiOutlineUser className="mr-3 text-lg" />
                      Account
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
