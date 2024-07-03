import React from 'react';
import './Testimonial.css';

const TestimonialCard = ({ testimonialDetails }) => {
  return (
    <div className='testimonial-card'>
      <div className='img-container'>
      <img src={testimonialDetails.image} className='testinomial-img'/>
      </div>
      <p>{testimonialDetails.quote}</p>
      <p><strong>{testimonialDetails.author}</strong></p>
      <h3>{testimonialDetails.position}</h3>
    </div>
  );
}

export default TestimonialCard;
