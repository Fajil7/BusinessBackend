import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Listedmember from '../Listedmember/Listedmember';
import './directory.css'



function Directory() {

    return (
        <>
            <div>
                <img
                    src="https://img.freepik.com/free-photo/handshake_1098-17050.jpg?t=st=1719463308~exp=1719466908~hmac=377ba8a0f7f0057d584361a5a063e1742dc62a2e94eefe34ee5eb180bd811cca&w=840"
                    alt="Contact"
                    className="listing-form-img"
                />
            </div>
            <motion.h1

                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}

                className='listed-member'>Listed Members</motion.h1>
            <Listedmember />
        </>
    );
}

export default Directory;
