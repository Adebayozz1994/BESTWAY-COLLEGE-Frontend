
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/887584/pexels-photo-887584.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5671876/pexels-photo-5671876.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px]">
      <div className="overflow-hidden h-full">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover" />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1"
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
