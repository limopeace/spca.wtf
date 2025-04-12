import React from 'react';
import SimpleCarousel from '../../components/SimpleCarousel';

interface SlideshowProps {
  className?: string;
  rotate?: boolean;
  fullWidth?: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({ className = '', rotate = true, fullWidth = false }) => {
  // Define the images for the carousel
  const slideshowImages = [
    {
      src: '/sourceDocs/slideshow/1.png',
      alt: 'SPCA Slideshow Image 1',
      caption: 'Current conditions at SPCA Chandigarh shelter facilities'
    },
    {
      src: '/sourceDocs/slideshow/2.png',
      alt: 'SPCA Slideshow Image 2',
      caption: 'Documentation of animal welfare concerns'
    },
    {
      src: '/sourceDocs/slideshow/3.png',
      alt: 'SPCA Slideshow Image 3',
      caption: 'Evidence of neglect at SPCA facilities'
    },
    {
      src: '/sourceDocs/slideshow/4.png',
      alt: 'SPCA Slideshow Image 4',
      caption: 'Photographic evidence of shelter conditions'
    },
    {
      src: '/sourceDocs/slideshow/5.png',
      alt: 'SPCA Slideshow Image 5',
      caption: 'Documentation from inside the shelter'
    },
    {
      src: '/sourceDocs/slideshow/6.png',
      alt: 'SPCA Slideshow Image 6',
      caption: 'Animal welfare investigation findings'
    },
    {
      src: '/sourceDocs/slideshow/7.png',
      alt: 'SPCA Slideshow Image 7',
      caption: 'Evidence of improper animal housing'
    },
    {
      src: '/sourceDocs/slideshow/8.png',
      alt: 'SPCA Slideshow Image 8',
      caption: 'SPCA facility photographic evidence'
    }
  ];

  // Add console logging to debug
  console.log('Slideshow images:', slideshowImages);

  return (
    <div className={`${className} w-full`}>
      <div className={`w-full ${rotate ? 'transform rotate-1' : ''} bg-white p-1 rounded-lg shadow-xl relative`}>
        <SimpleCarousel images={slideshowImages} />
      </div>
    </div>
  );
};

export default Slideshow; 