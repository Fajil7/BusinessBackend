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
    <>
      <div className="cards">
        <div className="outer">
          <div className="card" style={{ '--delay': '-1' }}>
            <div className="header">
              <div className="profile">
                <div className="img">
                  <img src="https://businesssphere.info/uploads/testimonial/8367771856983015.png" />
                </div>
              </div>
              <div className="testimonial">
                <p> My name is Sanjay Kumar Jha, founder of MSME DOST and SIMPLIFIED. We are into Website,
                  Software and Technology aspect of compliances. We have got a few clients from this contact
                  sphere and also a few solutions and
                  services I am availing from members of Business Sphere. This is really useful and helpful.
                </p>
                <div className='name-position-container'>
                  <h4 className='sanjay'>-Sanjay Jha</h4>
                  <p className='sanjay-text'>MSMEDOST and Simplified Management Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ '--delay': '0' }}>
            <div className="header">
              <div className="profile">
                <div className="img">
                  <img src="https://businesssphere.info/uploads/testimonial/804084144243608.jpg" />
                </div>
              </div>
              <div className="testimonial">
                <p> I am Shubham Jain from S.P. Hosiery and I am satisfied with this forum. I have got Business connects and referrals and got few Businesses too. Thanks to the member of the forum and I am happy with forums activities.
                </p>
                <div className='name-position-container'>
                  <h4 className='sanjay'>-Shubham Jain</h4>
                  <p className='sanjay-text'>S.P. Jain Hosiery</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};


export default TestimonialSlider



