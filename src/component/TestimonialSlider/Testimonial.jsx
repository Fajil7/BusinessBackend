import React, { useState, useEffect } from 'react'
import axios from 'axios';


import './testimonial.css';
import TestimonialCard from '../TestimonialCard/TestimonialCard';



const TestimonialSlider = () => {
  const [testi, setTesti] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testi/testimonial')
      .then(response => {
        console.log('Fetched data:', response.data.msg);
        const logosData = response.data.msg

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
    <ul className=''>

      {testi.map(eachCard => (
        <TestimonialCard key={eachCard.id} testimonialDetails={eachCard}/>
      ))}

    </ul>
  );
}

export default TestimonialSlider



