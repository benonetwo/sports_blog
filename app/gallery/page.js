import Image from 'next/image';

const images = [
  "/1a.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5a.jpeg",
  "/6.jpeg",
  "/7.jpeg",
  // "/8.jpg"
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Image Gallery
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}