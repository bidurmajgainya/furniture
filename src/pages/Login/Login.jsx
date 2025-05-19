import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
  whileHover={{ scale: 1.15, rotate: 90 }}
  whileTap={{ scale: 0.95 }}
  className="absolute top-4 right-4 md:top-6 md:right-10 z-50"
>
  <Link
    to="/"
    aria-label="Close login form"
    className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-black hover:bg-gray-200 transition-colors duration-200"
  >
    <IoCloseSharp className="text-3xl" />
  </Link>
</motion.div>
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-5xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
      
        {/* Left Side - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-500 mb-6">Enter your email and password to access your account.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full mt-1 p-2 border rounded-md" placeholder="••••••••" />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember Me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full bg-orange-600 cursor-pointer text-white py-2 rounded-md hover:bg-orange-700">
              Log In
            </button>
          </form>

          <div className="my-4 text-center text-gray-500">or login with</div>

          <div className="flex justify-center space-x-4">
            <button className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-2 border rounded-md w-1/2">
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center space-x-2 px-4 py-2 border rounded-md w-1/2">
              <FaApple className="text-xl" />
              <span>Apple</span>
            </button>
          </div>

          <p className="mt-6 text-center text-sm">
            Don’t have an account? <Link to='/signUp' className="text-blue-600 cursor-pointer hover:underline">Register Now</Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex md:w-1/2  justify-center items-center p-8 ">
          <img
            src="https://i.pinimg.com/736x/45/60/bc/4560bc53b7f20439a6353c8b5d5adf4d.jpg"
            alt="dashboard"
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
