import React from 'react';
import { FiAward, FiUsers } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const storySteps = [
  {
    id: 1,
    year: '2018',
    title: 'Humble Beginnings',
    description:
      'Founded in a small garage workshop, AIKE started with just three handcrafted chair designs...',
    icon: <FiUsers className="text-white text-xl" />,
    iconBg: 'bg-[#dc6400]',
  },
  {
    id: 2,
    year: '2020',
    title: 'First Collection Launch',
    description:
      'Our debut furniture line sold out in 72 hours, proving the demand for thoughtful design...',
    icon: <FiAward className="text-white text-xl" />,
    iconBg: 'bg-black',
  },
  {
    id: 3,
    year: '2022',
    title: 'Sustainability Commitment',
    description:
      'We transitioned to 100% responsibly sourced materials and achieved carbon-neutral shipping...',
    icon: <FaLeaf className="text-white text-xl" />,
    iconBg: 'bg-black',
  },
  {
    id: 4,
    year: 'Today',
    title: 'Trusted by Thousands',
    description:
      'With showrooms in 3 countries and an award-winning online store...',
    icon: <FiUsers className="text-white text-xl" />,
    iconBg: 'bg-[#dc6400]',
  },
];

const OurStory = () => {
  return (
    <section className="px-5 md:px-10 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-medium uppercase text-[#dc6400] text-sm tracking-wider mb-3">
            Our Journey
          </span>
         
        </div>

        {/* Vertical Process Line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          {storySteps.map((step, index) => (
            <div key={step.id} className="relative mb-16 last:mb-0">
              {/* Step Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md border border-white bg-black">
                {step.icon}
              </div>

              {/* Step Content Layout */}
              <div className="flex flex-col md:flex-row items-center justify-center">
                {/* Left or Right Block */}
                <div
                  className={`w-full md:w-1/2 px-4 md:px-6 flex justify-center mb-6 md:mb-0 ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg border border-black/10 shadow-sm hover:shadow-md transition-all max-w-md text-center md:text-left">
                    <span className="block text-sm font-medium text-[#dc6400] mb-1">
                      {step.year}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-black/70">{step.description}</p>
                  </div>
                </div>

                {/* Placeholder (to balance sides) */}
                <div
                  className={`hidden md:block md:w-1/2 px-6 ${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Meet the Makers Section */}
        <div className="mt-24">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/10">
            <div className="md:flex">
              <div className="md:w-1/3 bg-black/5 flex items-center justify-center">
                <div className="w-full h-64 md:h-auto bg-black/10 rounded-lg overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/0c/00/64/0c00644b156636cb909551ec13081320.jpg"
                    alt="Team Photo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Meet the Makers</h3>
                <p className="text-black/70 mb-6">
                  "What began as a solo passion project is now a family of 32 designers, craftspeople, and customer experience specialists..."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://i.pinimg.com/736x/9e/2c/8c/9e2c8ca95e2bfee9f9d876bce797a2e6.jpg"
                      alt="Jamie Chen"
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Jamie Chen</p>
                    <p className="text-sm text-black/50">Founder & Lead Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors font-medium inline-flex items-center gap-2">
            <FiArrowRight className="text-white text-lg" />
            Explore Our Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
