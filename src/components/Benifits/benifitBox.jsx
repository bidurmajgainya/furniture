import React from 'react';

const BenefitBox = ({ icon, headline, describe }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl text-gray-400 mb-4 group-hover:text-white transition-all duration-300">{icon}</span>
      <h1 className="text-xl sm:text-2xl font-medium mt-6 group-hover:text-white">{headline}</h1>
      <p className="text-sm sm:text-base text-gray-600 mt-3 text-center group-hover:text-white">{describe}</p>
    </div>
  );
};

export default BenefitBox;
