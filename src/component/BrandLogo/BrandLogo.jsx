import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';
import './brandLogo.css'


const BrandLogo = (props) => {
    const { cardDetails } = props
    const { image } = cardDetails
    return (
       
            <>
            <marquee direction="left" scrollamount="20" className="marquee flex">
                
                <img src={image} className="com-logo" />
               
            </marquee></>
      
    )
}
export default BrandLogo
