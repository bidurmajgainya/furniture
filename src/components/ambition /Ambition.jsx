import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Ambition = () => {
    return (
        <div className="container mx-auto py-10 px-5 md:px-10">
            <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                <div className="w-full lg:w-130 mx-auto rounded-xl">
                    <img 
                        className="w-full h-[400px] object-cover rounded-xl " 
                        src="https://i.pinimg.com/736x/bd/4f/90/bd4f900ee9c379546a7b75e81e9b74ec.jpg" 
                        alt="Ambition Image" 
                    />
                </div>
                <div className="lg:w-1/2">
                    <span className='font-normal uppercase text-xl'>Our Ambition</span>
                    <h1 className='font-medium text-2xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight'>
                        Crafting Spaces, Creating Memories
                    </h1>
                    <p className='text-base md:text-lg text-gray-500 mt-4 mb-8 max-w-2xl'>
                        Our ambition is to redefine the way people experience their homes. We believe that furniture is more than just functional—it’s about creating environments where families grow, friends gather, and memories are made. With a focus on innovative design, quality craftsmanship, and sustainability, we strive to bring beauty, comfort, and style into every room.
                    </p>

                    <button className='bg-black cursor-pointer text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium'>
                       <Link to="/"> Learn More</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ambition;
