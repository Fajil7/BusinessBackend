import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './testimonial.css';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  const [testi, setTesti] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testi/testimonial')
      .then(response => {
        const logosData = response.data.msg;
        setTesti(logosData);
      })
      .catch(error => {
        console.error('Error fetching the brands:', error);
        setError('Error fetching the brands');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='testimonial-container'>
      <Slider {...settings}>
        {testi.map(eachCard => (
          <TestimonialCard key={eachCard.id} testimonialDetails={eachCard} />
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
