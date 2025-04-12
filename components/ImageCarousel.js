import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ images, autoplaySpeed = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Auto-advance the carousel every autoplaySpeed milliseconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [images.length, autoplaySpeed]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <button 
          className={`${styles.carouselButton} ${styles.prevButton}`} 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        
        <div className={styles.carouselSlide}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={image.src} 
                  alt={image.alt || `Slide ${index + 1}`} 
                  className={styles.carouselImage}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={`${styles.carouselButton} ${styles.nextButton}`} 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
      
      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 