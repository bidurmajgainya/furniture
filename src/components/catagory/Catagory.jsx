const images = [
  "https://i.pinimg.com/736x/b1/48/41/b14841b09b1922e24c5b5c43530c3ac2.jpg",
  "https://i.pinimg.com/736x/a4/5c/1d/a45c1d9a902d21b2ad9d83981a58884b.jpg",
  "https://i.pinimg.com/736x/92/e5/62/92e56274c2778000b0ea0d763cafdcff.jpg",
  "https://i.pinimg.com/736x/15/f4/57/15f4579b683a1c1dd0fc9d445334a974.jpg",
  "https://i.pinimg.com/736x/6a/eb/4a/6aeb4a1b99752be7f9b7263d1609a749.jpg"
];


const GridItem = ({ image,  colSpan }) => (
  <div
    className={`bg-cover h-60 bg-center rounded-2xl shadow-sm border p-6 hover:shadow-lg transition text-white md:col-span-${colSpan}`}
    style={{ backgroundImage: `url(${image})` }}
  >
   
  </div>
);

export default function FurnitureBentoGrid() {
  return (
    <div className="space-y-4 p-6">
      {/* Top row: 2 + 3 = 5 (40/60) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <GridItem
          image={images[0]}
      
          colSpan={2}
        />
        <GridItem
          image={images[1]}
       
          colSpan={3}
        />
      </div>

      {/* Bottom row: 3 equal tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.slice(2).map((image, idx) => (
          <GridItem
            key={idx}
            image={image}
            colSpan={1}
          />
        ))}
      </div>
    </div>
  );
}
