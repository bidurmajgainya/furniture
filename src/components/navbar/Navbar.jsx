import React, { useState } from 'react';
import {
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';
import { FaBars } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link to="/wishlist" className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors relative">
              <HiOutlineHeart className="text-xl text-gray-700" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors relative">
              <HiOutlineShoppingCart className="text-xl text-gray-700" />
            </Link>
            <Link to="/login" className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
              <HiOutlineUser className="text-xl text-gray-700" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="xl:hidden flex justify-between items-center p-4 bg-white shadow-lg sticky top-0 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <FaBars className="text-xl text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">AIKE</h1>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 transition-colors relative" aria-label="Cart">
            <HiOutlineShoppingCart className="text-xl text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
          </Link>
          <Link to="/login" className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="User account">
            <HiOutlineUser className="text-xl text-gray-700" />
          </Link>
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
              className="absolute inset-0 bg-black bg-opacity-30"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu overlay"
            ></div>

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-4/5 max-w-xs h-full bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">AIKE</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
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
                    aria-label="Search"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
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
                    <Link
                      to="/wishlist"
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <HiOutlineHeart className="mr-3 text-lg" />
                      Wishlist
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <HiOutlineUser className="mr-3 text-lg" />
                      Account
                    </Link>
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
