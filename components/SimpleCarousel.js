import React, { useState, useEffect } from 'react';

const SimpleCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ maxWidth: "100%" }}>
      {/* Image display */}
      <div style={{ position: 'relative', aspectRatio: '4/3' }}>
        <img 
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            console.error(`Error loading image: ${images[currentIndex].src}`);
            e.currentTarget.src = "https://via.placeholder.com/800x600?text=Image+Error";
          }}
        />
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          color: '#333',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          zIndex: 4
        }}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      
      <button 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          color: '#333',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          zIndex: 4
        }}
        aria-label="Next slide"
      >
        &#10095;
      </button>
      
      {/* Indicators - Improved positioning */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 5
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: index === currentIndex ? '12px' : '10px',
              height: index === currentIndex ? '12px' : '10px',
              borderRadius: '50%',
              background: index === currentIndex ? 'white' : 'rgba(255,255,255,0.6)',
              margin: '0 5px',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel; 