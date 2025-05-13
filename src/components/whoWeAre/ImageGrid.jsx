import React from 'react';

const images = [
  'https://i.pinimg.com/736x/b1/48/41/b14841b09b1922e24c5b5c43530c3ac2.jpg',
  'https://i.pinimg.com/736x/a4/5c/1d/a45c1d9a902d21b2ad9d83981a58884b.jpg',
  'https://i.pinimg.com/736x/92/e5/62/92e56274c2778000b0ea0d763cafdcff.jpg'
];

const ImageGrid = () => {
  return (
    <div className="p-10">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full h-60 overflow-hidden rounded-xl shadow-md">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
