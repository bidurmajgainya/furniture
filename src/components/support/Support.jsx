import React from 'react';
import { FiMessageSquare, FiMail, FiPhone } from 'react-icons/fi';

const SupportSection = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Need a little help? Let's chat!
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Finding the perfect furniture for your unique space can feel overwhelming. 
            That is where we come in! Our friendly furniture specialists are passionate 
            about helping you create a home you love. Let's create a home that truly inspires you!
          </p>
          
          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#chat" 
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FiMessageSquare className="text-xl" />
              Live Chat
            </a>
            <a 
              href="mailto:help@example.com" 
              className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiMail className="text-xl" />
              Email Us
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiPhone className="text-xl" />
              Call Us
            </a>
          </div>
        </div>
        
        {/* Image Placeholder - Replace with your actual image */}
        <div className="md:w-1/3 hidden md:block">
          <div className="bg-gray-200 rounded-lg w-70 h-70 flex items-center justify-center">
            <img className="object-cover w-full h-full rounded-lg" src="https://i.pinimg.com/736x/bd/4f/90/bd4f900ee9c379546a7b75e81e9b74ec.jpg" alt="Support Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
