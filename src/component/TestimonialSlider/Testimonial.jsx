import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css';

const testimonials = [
  {
    quote: "This is the best service I have ever used. My name is Sanjay Kumar Jha, founder of MSME DOST and SIMPLIFIED. We are into Website, Software and Technology aspect of compliances. We have got a few clients from this contact sphere and also a few solutions and services I am availing from members of Business Sphere. This is really useful and helpful.",
    author: "Sanjay Kumar Jha",
    position: "MSMEDOST and Simplified Management Solutions",
    image: "https://businesssphere.info/uploads/testimonial/8367771856983015.png"
  },
  {
    quote: "I am Shubham Jain from S.P. Hosiery and I am satisfied with this forum. I have got Business connects and referrals and got few Businesses too. Thanks to the member of the forum and I am happy with forums activities.",
    author: "Shubham Jain",
    position: "S.P. Jain Hosiery",
    image: "https://businesssphere.info/uploads/testimonial/804084144243608.jpg"
  }
];


const TestimonialSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className='testimonial-container flex flex-col items-center'>
        <div className='margin-container flex flex-col items-center'>
          <img
            src="https://businesssphere.info/uploads/testimonial/8367771856983015.png"
            class="testimonial-img"
          />
          <p class="tesi-into">
            My name is Sanjay Kumar Jha, founder of MSME DOST and SIMPLIFIED. We are into Website,
            Software and Technology aspect of compliances. We have got a few clients from this contact
            sphere and also a few solutions and
            services I am availing from members of Business Sphere. This is really useful and helpful.
          </p>
          <h6 class="testi-name"> Sanjay Kumar Jha</h6>
          <span class="testi-possition"> MSMEDOST and Simplified Management Solutions</span>

        </div>
      </div>
      <div className='testimonial-container'>
        <div className='margin-container flex flex-col items-center'>
          <img
            src="	https://businesssphere.info/uploads/testimonial/804084144243608.jpg"
            class="testimonial-img"
          />
          <p class="tesi-into">
          I am Shubham Jain from S.P. Hosiery and I am satisfied with this forum. I have got Business connects and referrals and got few Businesses too. Thanks to the member of the forum and I am happy with forums activities. 
          </p>
          <h6 class="testi-name">Shubham Jain</h6>
          <span class="testi-possition">S.P.Jain Hosiery</span>

        </div>
      </div>
    </Slider>
  );
};


export default TestimonialSlider



