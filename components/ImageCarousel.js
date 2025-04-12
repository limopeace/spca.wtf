import React, { useState, useEffect, useRef } from 'react';
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ images, autoplaySpeed = 5000, aspectRatio = '16/9', fullWidth = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const intervalRef = useRef(null);

  // Debug log
  console.log('ImageCarousel component rendering with images:', images);
  console.log('Current image index:', currentIndex);

  // Reset timer when index changes
  useEffect(() => {
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplaySpeed);
    
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, images.length, autoplaySpeed]);

  const nextSlide = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    console.log('Image loaded!');
  };
  
  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset touch positions
    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!images || images.length === 0) {
    console.error('No images provided to ImageCarousel');
    return <div className={styles.carouselContainer}>No images to display</div>;
  }

  return (
    <div className={`${styles.carouselContainer} ${fullWidth ? styles.fullWidth : ''}`}>
      <div 
        className={styles.carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              <div className={styles.imageWrapper} style={{ aspectRatio }}>
                <img 
                  src={image.src} 
                  alt={image.alt || `Slide ${index + 1}`} 
                  className={styles.carouselImage}
                  onLoad={handleImageLoad}
                  onError={(e) => console.error(`Error loading image ${image.src}:`, e)}
                  style={{ aspectRatio }}
                />
                {image.caption && (
                  <div className={styles.caption}>
                    <p>{image.caption}</p>
                  </div>
                )}
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