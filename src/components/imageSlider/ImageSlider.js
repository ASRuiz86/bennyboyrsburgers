import React, { useState } from 'react';
import { SLIDES } from '../../slideImages/slideImages';
import './imageSlider.scss'

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div className='left-arrow'>&#129172;</div>
      <div className='right-arrow'>&#129174;</div>
      <img className='slider-image' src={SLIDES[currentIndex].image} alt='Current Index' />
    </div>
  );
}

export default ImageSlider;
