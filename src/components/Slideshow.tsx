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
      src: '/sourceDocs/slideshow/new1.png',
      alt: 'SPCA Shelter Conditions',
      caption: 'Shelter conditions documentation'
    },
    {
      src: '/sourceDocs/slideshow/new2.png',
      alt: 'Animal Welfare Issues',
      caption: 'Animal welfare concerns'
    },
    {
      src: '/sourceDocs/slideshow/new3.png',
      alt: 'SPCA Facility',
      caption: 'Evidence of facility neglect'
    },
    {
      src: '/sourceDocs/slideshow/new4.png',
      alt: 'Shelter Conditions',
      caption: 'Photographic evidence'
    },
    {
      src: '/sourceDocs/slideshow/new5.png',
      alt: 'Inside Documentation',
      caption: 'Inside the shelter'
    },
    {
      src: '/sourceDocs/slideshow/new6.png',
      alt: 'Investigation Findings',
      caption: 'Investigation findings'
    },
    // If new7.png and new8.png exist, uncomment these
    // {
    //   src: '/sourceDocs/slideshow/new7.png',
    //   alt: 'Animal Housing',
    //   caption: 'Improper animal housing'
    // },
    // {
    //   src: '/sourceDocs/slideshow/new8.png',
    //   alt: 'Evidence Documentation',
    //   caption: 'SPCA facility evidence'
    // }
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