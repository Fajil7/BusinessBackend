import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const TestimonialCard = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 400
  };

  const { testimonialDetails } = props
  const { quote, author, position, image } = testimonialDetails
  return (
    <li>
      <div>
      <img src={image} className='img'/>
      <div>
        <p>{quote}</p>
        <p>{author}</p>
        <p>{position}</p>
      </div>
      </div>
    </li>
  )
}

export default TestimonialCard
