import React from 'react';
import ImageGrid from './ImageGrid';
import { Link } from 'react-router-dom';

const Inscripation = () => {
  return (
    <div className="px-5 md:px-10">
      <span className="font-medium text-[#dc6400] text-xl">Inspiration</span>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold w-full md:w-1/3 text-center md:text-left">
          Unleash Your Vibe
        </h1>
        <p className="text-sm md:text-base text-gray-500 w-full md:w-2/3 text-center md:text-left">
          When you choose AIKE, you're not just buying furniture—you're making a lasting investment in your home.
          Our commitment to quality, sustainability, and customer care makes us a brand you can trust.
        </p>
      </div>

      <div className="mt-10">
        <ImageGrid />
        
        <div className="flex justify-center mt-8">
          <button className="bg-transparent border border-black cursor-pointer text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-medium">
          <Link to ="/about">  Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inscripation;
