import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import './header.css'

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const onShowList = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className='laptop-view  w-screen h-24  fixed z-20'>
        <div className='logo-contianer'>
          <Link to="/">
            <img src='https://businesssphere.info/uploads/web_photo_upload/171610104193261.png'
              className='logo'
              alt='logo'
            /></Link>
        </div>
        <div >
          <ul className=' flex gap-12 relative'>
            <li className='item-hover cursor-pointer'><Link to="/">Home</Link></li>
            <li className='item-hover cursor-pointer'><Link to="/listing">Directory Listing Form</Link></li>
            <li className='item-hover cursor-pointer'><Link to="/directory">Directory</Link></li>
            <li className='item-hover cursor-pointer'><Link to="/about">About</Link></li>
            <li className='item-hover cursor-pointer'><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>
        <button className="bg-amber-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md ">
          Login
        </button>
      </div>
      <div className=' h-24 w-screen mobile-hide'></div>
      <div className='mobile-view-nav-container '>
        <div>
          <Link to="/">
            <img src='https://businesssphere.info/uploads/web_photo_upload/171610104193261.png'
              className='logo'
              alt='logo'
            /></Link>
          <ul className='unorder-list-container' style={{ display: isToggled ? 'block' : 'none' }}>
            <li className='item-hover'><Link to='/'>Home</Link></li>
            <li className='item-hover'><Link to='/listing'>Directory Listing Form</Link></li>
            <li className='item-hover'><Link to='/directory'>Directory</Link></li>
            <li className='item-hover'><Link to='/about'>About</Link></li>
            <li className='item-hover'><Link to='/contact'>Contact us</Link></li>
            <button className="bg-amber-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md ">
              Login
            </button>
          </ul>

        </div>
        {isToggled ? (
          <RxCross1 className='cross-icon' onClick={onShowList} />
        ) : (
          <IoReorderThreeOutline className='icon' onClick={onShowList} />
        )}
      </div>
      

    </>
  )
}

export default Header
