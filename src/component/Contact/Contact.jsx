import React, { useState } from 'react';
// import axios from 'axios';
import './Contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function Contact() {
    // const [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // });

    // const [setErrorMessage, setSubmitMessage] = useState('');
   


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm({
    //         ...form,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post('http://localhost:5000/submit', form);
    //         console.log('Response:', res);
    //         setSubmitMessage(res.data); // Set the success message
    //         setForm({
    //             name: '',
    //             phone: '',
    //             email: '',
    //             subject: '',
    //             message: ''
    //         }); // Optionally reset the form fields after successful submission
    //     } catch (err) {
    //         console.error('Error submitting form:', err);
    //         setErrorMessage('Failed to submit form'); // Set an error message state
    //     }
    // };

    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/close-up-contact-us-word_352439-2440.jpg?w=740"
                    alt="Contact"
                    className="contact-img"
                />
            </div>
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="contact-main-container"
            >
                <h1 className="contact-heading">Contact Us</h1>
                <div className="contact-container">
                    <p className="contact-way flex items-center"><FaPhoneAlt className='icon-footer' /> +91-85 82 84 84 34</p>
                    <p className="contact-way flex items-center"><IoMdMail className='icon-footer' /> sskjha2016@gmail.com</p>
                    <p className="contact-way flex items-center"><FaLocationDot className='icon-footer' /> Kolkata 700001</p>
                </div>
            </motion.div>
            <div className="img-and-form-container">
                <div className="img-container">
                    <motion.img
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        src="https://img.freepik.com/premium-vector/flat-design-customer-support-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-823.jpg?w=740"
                        alt="about"
                        className="cont-img"
                    />
                </div>
                <form >
                    <div className="two-input-container">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="input-container"
                        >
                            <label className="label required">Name*</label>
                            <br />
                            <input
                                type="text"
                                className="input"
                                name="name"
                                required
                                // value={form.name}
                                // onChange={handleChange}
                            />
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="input-container"
                        >
                            <label className="label required">Phone*</label>
                            <br />
                            <input
                                type="text"
                                className="input"
                                name="phone"
                                required
                                // value={form.phone}
                                // onChange={handleChange}
                            />
                        </motion.div>
                    </div>
                    <div className="two-input-container">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="input-container"
                        >
                            <label className="label">Email</label>
                            <br />
                            <input
                                type="text"
                                className="input"
                                name="email"
                                // value={form.email}
                                // onChange={handleChange}
                            />
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="input-container"
                        >
                            <label className="label required">Subject*</label>
                            <br />
                            <input
                                type="text"
                                className="input"
                                name="subject"
                                required
                                // value={form.subject}
                                // onChange={handleChange}
                            />
                        </motion.div>
                    </div>
                    <div className="align">
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="input-two"
                        >
                            <label className="label">Message</label>
                            <br />
                            <textarea
                                className="textarea"
                                rows="4"
                                cols="50"
                                placeholder="Max 350 characters"
                                name="message"
                                // value={form.message}
                                // onChange={handleChange}
                            ></textarea>
                        </motion.div>
                    </div>
                    <div className="btn-container">
                        <button type='submit' className="bg-amber-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
