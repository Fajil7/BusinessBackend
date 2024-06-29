import React from 'react'
import './about.css'

import {motion} from 'framer-motion'
import { fadeIn } from '../../variants' 



function About() {
    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/free-photo/teamwork-agreement-unity-togetherness-word_53876-122796.jpg?t=st=1718344407~exp=1718348007~hmac=3222fd5f8d79ff1a5c849491c9d154d61814ba67757ceb8b5cd8e8f2cd6fe90d&w=900"
                    alt="about"
                    className="about-img"
                />
            </div>
            <div className='about-section-container'>
                <motion.h1 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="about-main-heading">Welcome to The Business Sphere</motion.h1>
                <motion.h1 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="about-1-heading">About Us</motion.h1>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph">Welcome to Business Sphere, the pioneering networking
                    community redefining the landscape of business interactions in our city.
                    Unlike traditional networking organizations, Business Sphere breaks away from
                    the conventional membership model, offering an inclusive platform where business
                    professionals come together organically, driven by a shared passion for growth and collaboration.
                </motion.p>
                <motion.p 
                
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="paragraph">With a thriving community of over 5000 interconnected individuals,
                    Business Sphere is a testament to the power of collective synergy and shared expertise.
                    Our members, comprising seasoned business leaders, entrepreneurs, executives, and professionals
                    from diverse industries, unite under a common goal: to leverage their collective knowledge and
                    resources for mutual benefit.
                </motion.p>
                <motion.p 
                
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph">At Business Sphere, we believe in the philosophy of connection without constraints.
                    Our platform transcends the barriers of registration and membership, fostering an open environment
                    where meaningful relationships can flourish naturally. Whether you're a seasoned entrepreneur looking
                    to expand your network or a budding professional seeking mentorship and guidance, Business Sphere offers
                    a welcoming space to connect, learn, and grow.
                </motion.p>
                <hr className="line" />
                <motion.h1 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="about-1-heading">Our Mission</motion.h1>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph">At Business Sphere, our mission is clear and compelling. We aim to empower and
                    connect the experienced and dynamic business minds of Kolkata. Our purpose is to facilitate meaningful
                    interactions, leading to valuable business connections, referrals, and exciting opportunities. We are
                    committed to enhancing the local economy by bringing together a diverse group of professionals with a
                    shared vision for success.
                </motion.p>
                <hr className="line" />
                <motion.h1 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="about-1-heading">Our Vision</motion.h1>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph">Our vision at Business Sphere is to revolutionize the way business is conducted in our
                    city. By fostering a culture of collaboration, trust, and mutual support, we aim to reshape the economic
                    landscape and create new opportunities for growth and prosperity. We envision Business Sphere as a
                    catalyst for positive change, inspiring confidence, innovation, and entrepreneurship among our members
                    and beyond.
                </motion.p>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph">Join us on this journey of transformation and discover the limitless possibilities that await within the dynamic sphere of business networking.</motion.p>
                <hr className="line" />
                <motion.h1 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="about-1-heading">
                    Why Choose Business Sphere?</motion.h1>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="paragraph"><span className="span-element">Exclusive Networking:</span> Attend our quarterly networking sessions, where you can connect
                    with prominent business figures in Kolkata for 4-5 hours each time.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Guidance from Leaders: </span> Gain insights and vision from the city's renowned Business Tycoons and Conglomerates. Their guidance
                    can significantly influence your business journey.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Recognition and Awards:</span> As a member, you have the opportunity to be recognized and felicitated for your achievements, enhancing
                    your reputation within the business community.
                </motion.p>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Social Responsibility:</span> participate in meaningful social activities, showcasing your commitment to being a responsible
                    businessperson and contributing to society.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Strengthen Bonds: </span> Engage in activities that foster strong personal and professional relationships. These connections
                    can be invaluable for your business.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                
                className="paragraph"><span className="span-element">Diverse Networking Events:</span> Beyond quarterly meetings, we organize various networking occasions,
                    including get-togethers and parties, creating opportunities for expanded networking.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Business Growth:</span> Business Sphere's environment is conducive to discovering new opportunities, which can propel your business to new heights.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Community and Support:</span> Join a community that values ethics, integrity, and transparency. Receive mentorship and
                    support from experienced peers and leaders.
                </motion.p>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Shape Kolkata's Business Future:</span> Be part of our collective mission to redefine Kolkata's business landscape.
                    Your contribution can drive change and innovation.
                </motion.p>
                <hr className="line" />
                <motion.h1 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="about-1-heading">Key Features of Business Sphere:</motion.h1>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Inclusive Networking:</span> Unlike traditional networking groups that require formal membership, Business Sphere
                    welcomes all seasoned business professionals from our city. Our inclusive approach ensures that everyone has the opportunity to participate and contribute, regardless of their background or experience level.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}

                
                className="paragraph"><span className="span-element">Community-driven Collaboration: </span> At the heart of Business Sphere is a vibrant community driven by a spirit of collaboration and reciprocity. Through regular gatherings,
                    seminars, and events, we facilitate meaningful interactions that foster trust, camaraderie, and mutual support among our members.
                </motion.p>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="paragraph"><span className="span-element">Empowering Connections: </span> Business Sphere serves as a catalyst for meaningful connections and strategic alliances. Whether you're seeking new business opportunities,
                    referrals, or partnerships, our platform provides a fertile ground for cultivating fruitful relationships that drive business growth and success.
                </motion.p>
                <motion.p 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="paragraph"><span className="span-element">Celebrating Success:</span>  We believe in celebrating the achievements of our members and recognizing their contributions to the community. From milestone celebrations
                    to awards ceremonies, Business Sphere honors excellence and inspires others to reach greater heights of success.
                </motion.p>
                <motion.p 
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="paragraph"><span className="span-element">Value of Word-of-Mouth:</span> In an age dominated by digital marketing and advertising, we understand the enduring power of word-of-mouth referrals. Through our networking
                    events and gatherings, we emphasize the importance of personal recommendations and authentic connections in driving business growth and success.
                </motion.p>
                <hr className="line" />
                <motion.h1 
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                
                className="about-1-heading">Values:</motion.h1>
                <motion.ol
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                >
                    <li className="paragraph"><span className="span-element">1. Collaboration:</span> We believe in the power of working together, where diverse talents and ideas converge to create extraordinary outcomes.</li>
                    <li className="paragraph"> <span className="span-element">2. Networking:</span> We foster a community where meaningful connections are formed, leading to fruitful relationships and mutual growth.</li>
                    <li className="paragraph"><span className="span-element">3. Innovation:</span> We encourage forward-thinking and creativity, aiming to push the boundaries of traditional business practices.</li>
                    <li className="paragraph"><span className="span-element">4. Ethics:</span> Integrity and transparency are the cornerstones of our community, ensuring trust and credibility in all our interactions.</li>
                    <li className="paragraph"><span className="span-element">5. Community Growth:</span> are dedicated to not only enhancing individual businesses but also for the development of Kolkata's business landscape.</li>
                </motion.ol>
                <motion.h1 
                
                
                
                variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                
                className="buss-heading">Our Process</motion.h1>  
                <div 
                className='process-align-container'>
                    <motion.div 
                    
                    
                    variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                    
                    
                    className='one-process'>
                        <div className="process-detail-card">
                            <img
                                src="https://businesssphere.info/images/img-1.png"
                                className="profile"
                            />
                            <p className="apply-heading">Apply for Listing on Website</p>
                        </div>
                        <div className="process-detail-card">
                            <img
                                src="https://businesssphere.info/images/img-2.png"
                                className="profile"
                            />
                            <p className="possition">Review</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    
                    
                    variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                    
                    
                    
                    className='one-process'>
                        <div className="process-detail-card">
                            <img
                                src="https://businesssphere.info/images/img-3.png"
                                className="profile"
                            />
                            <p className="possition">Approval</p>
                        </div>
                        <div className="process-detail-card collaborate">
                            <img
                                src="https://businesssphere.info/images/img-4.png"
                                className="profile"
                            />
                            <p className="possition">Collaborate</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
