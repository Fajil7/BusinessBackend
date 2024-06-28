import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className="footer">
		<div className="footer-container">
		  <div className="footer-section">
		 	 <img 
				src="https://businesssphere.info/uploads/web_photo_upload/171610104193261.png"
				className="logo-footer"                
            />
		  </div>
		  <div className="footer-section">
			<h4 className='h4-heading mobile-view-margin'>Useful Links</h4>
			<div className='footer-items'>
			<ul className='mobile-view-margin'>
			  <li><Link to="/" className='fotter-link-item'>Home</Link></li>
			  <li><Link to="/about" className='fotter-link-item'>About</Link></li>
			  <li><Link to="/directory" className='fotter-link-item'>Directory</Link></li>
			  <li><Link to="/contact" className='fotter-link-item'>Contact us</Link></li>
			</ul>
			<ul className='secound-item-container mobile-view-margin'>
			  <li><Link to="/faq" className='fotter-link-item'>FAQ</Link></li>
			  <li><Link to="/listing" className='fotter-link-item'>Listing Form</Link></li>
			  <li><Link to="/about" className='fotter-link-item'>Our Process</Link></li>
			  <li><Link to="/about" className='fotter-link-item'>Why Choose Us</Link></li>
			</ul>
			</div>
		  </div>
		  <div className="footer-section">
			<h4 className='mobile-view-margin'>Contact Us</h4>
			<p className='mobile-view-margin flex  items-center'><IoMdMail className='icon-footer'/> <a href="mailto: sskjha2016@gmail.com">sskjha2016@gmail.com</a></p>
			<p className='mobile-view-margin flex  items-center '><FaPhoneAlt className='icon-footer'/> <a href='tel: +91-85 82 84 84 34'>+91-85 82 84 84 34</a></p>
			<p className="mobile-view-margin flex  items-center"><FaLocationDot className='icon-footer'/> Kolkata 700001</p>
		  </div>
		</div>
		<div className="footer-bottom">
		  <p className='copy-right-text'>&copy; 2023-2024 BUSINESS SPHERE. DESIGNED BY MSMEDOST</p>
		</div>
	  </footer>
	)
}

export default Footer
