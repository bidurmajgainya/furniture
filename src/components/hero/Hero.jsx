import { CiDeliveryTruck } from "react-icons/ci";
import React, { Suspense, lazy } from 'react';
import { HiOutlineClock } from "react-icons/hi2";

// Lazy load Image component
const BentoImage = lazy(() => import("../Image/Image"));

const Hero = () => {
  const images = [
    'https://i.pinimg.com/736x/67/81/97/67819781a390d838108b4e236307a915.jpg',
    'https://i.pinimg.com/736x/1f/ab/44/1fab44c55028deef46f2ee608751f3d6.jpg',
    'https://i.pinimg.com/736x/5b/47/74/5b4774c300c426543ee415db163bc6d0.jpg',
  ];

  return (
    <div className="container mx-auto py-12 md:py-24 px-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className='font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight'>
            Discover elegant & affordable furniture for every room
          </h1>
          <p className='text-base md:text-lg text-gray-500 mt-4 mb-8 max-w-2xl'>
            Transform your space with sophisticated and stylish furniture, and create a serene and inviting home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className='bg-black text-white px-8 cursor-pointer py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium'>
              Shop Now
            </button>
            
            <div className="flex flex-wrap gap-6">
              <span className='flex gap-2 items-center text-gray-700'>
                <CiDeliveryTruck className="text-xl" />
                Free Delivery
              </span>
              <span className='flex gap-2 items-center text-gray-700'>
                <HiOutlineClock className="text-xl" />
                Always On-Time
              </span>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-3 h-[500px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden ${
                  index === 0 ? 'row-span-2' : 'row-span-1'
                }`}
              >
                <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                  <BentoImage
                    imagePath={img}
                    imageInfo="Furniture"
                    imageCss="w-full h-full object-cover hover:scale-101 transition-transform duration-300"
                  />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
