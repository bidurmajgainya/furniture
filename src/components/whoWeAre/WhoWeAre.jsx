import React from 'react';
import ImageGrid from './ImageGrid';

const WhoWeAre = () => {
  return (
    <section className="px-5 md:px-10 py-10max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center md:text-left">
        <span className="inline-block font-medium uppercase text-[#dc6400] text-sm tracking-wider mb-2">
          About Us
        </span>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight md:w-1/2">
            AIKE is more than a furniture brand—we're your partners in creating spaces that inspire.
          </h1>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Founded in 2018, AIKE began with a simple vision: to create furniture that blends timeless design 
              with everyday functionality. What started as a small workshop has grown into a beloved brand trusted 
              by thousands of homes.
            </p>
            <p className="text-gray-600">
              We design pieces that inspire creativity, comfort, and connection—transforming houses into homes.
            </p>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: '🛠️',
            title: 'Handcrafted Quality',
            description: 'Each piece is built to last with sustainable materials and artisanal techniques'
          },
          {
            icon: '🎨',
            title: 'Design-Forward',
            description: 'Collaborations with award-winning designers for timeless aesthetics'
          },
          {
            icon: '🌱',
            title: 'Eco-Conscious',
            description: '100% responsibly sourced wood and fabrics with minimal environmental impact'
          }
        ].map((item, index) => (
          <div key={index} className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <span className="text-2xl">{item.icon}</span>
            <h3 className="text-xl font-semibold mt-3 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Image Grid */}
   
     
    </section>
  );
};

export default WhoWeAre;