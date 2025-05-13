import React from 'react';
import BentifitBox from './benifitBox';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSofaLine } from 'react-icons/ri';

const Benifits = () => {
  return (
    <div className="px-5 md:px-15">
      <span className="font-medium text-[#dc6400] text-xl">Benefits</span>

      {/* Title and Description Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold w-full md:w-3/10 text-center md:text-left">
          Your One-Stop Shop <br /> for Furniture
        </h1>
        <p className="text-sm md:text-base text-gray-500 w-full md:w-7/10 text-center md:text-left">
          When you choose AIKE, you're not just buying furniture—you're making a lasting investment in your home. Our
          commitment to quality, sustainability, and customer care makes us a brand you can trust. Join the thousands of
          satisfied customers who have transformed their homes with our furniture and create a space that feels truly yours.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        <BentifitBox
          icon={<TbTruckDelivery />}
          headline="Free Shipping"
          describe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repudiandae!"
        />
        <BentifitBox
          icon={<RiSofaLine />}
          headline="Durable Materials"
          describe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae."
        />
        <BentifitBox
          icon={<TbTruckDelivery />}
          headline="Design Consolatation"
          describe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae."
        />
        <BentifitBox
          icon={<TbTruckDelivery />}
          headline="Design Consolatation"
          describe="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae."
        />
      </div>
    </div>
  );
};

export default Benifits;
