import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const SlideshowTest: React.FC = () => {
  // Define image paths
  const imagePaths = [
    '/sourceDocs/slideshow/1.png',
    '/sourceDocs/slideshow/2.png',
    '/sourceDocs/slideshow/3.png',
    '/sourceDocs/slideshow/4.png',
    '/sourceDocs/slideshow/5.png',
    '/sourceDocs/slideshow/6.png',
    '/sourceDocs/slideshow/7.png',
    '/sourceDocs/slideshow/8.png'
  ];

  return (
    <>
      <Head>
        <title>Slideshow Test | SPCA.wtf</title>
      </Head>
      
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8">Slideshow Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {imagePaths.map((path, index) => (
            <div key={index} className="border rounded overflow-hidden">
              <img 
                src={path} 
                alt={`Slideshow image ${index + 1}`} 
                className="w-full h-auto"
                onError={(e) => {
                  console.error(`Error loading image ${path}`);
                  e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Error";
                }}
              />
              <div className="p-2 bg-gray-100">
                <p>Image {index + 1}: {path}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default SlideshowTest; 