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
      alt: 'SPCA Shelter Conditions',
      caption: 'Shelter conditions documentation'
    },
    {
      src: '/sourceDocs/slideshow/2.png',
      alt: 'Animal Welfare Issues',
      caption: 'Animal welfare concerns'
    },
    {
      src: '/sourceDocs/slideshow/3.png',
      alt: 'SPCA Facility',
      caption: 'Evidence of facility neglect'
    },
    {
      src: '/sourceDocs/slideshow/4.png',
      alt: 'Shelter Conditions',
      caption: 'Photographic evidence'
    },
    {
      src: '/sourceDocs/slideshow/5.png',
      alt: 'Inside Documentation',
      caption: 'Inside the shelter'
    },
    {
      src: '/sourceDocs/slideshow/6.png',
      alt: 'Investigation Findings',
      caption: 'Investigation findings'
    },
    {
      src: '/sourceDocs/slideshow/7.png',
      alt: 'Animal Housing',
      caption: 'Improper animal housing'
    },
    {
      src: '/sourceDocs/slideshow/8.png',
      alt: 'Evidence Documentation',
      caption: 'SPCA facility evidence'
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