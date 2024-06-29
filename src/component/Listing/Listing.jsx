import React, { useState } from 'react'
import axios from 'axios';
import './listing.css'
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';


function Listing() {
    const [form, setForm] = useState({
        name: '',
        gender: '',
        whatsappno: '',
        alternateno: '',
        email: '',
        dob: '',
        doma: '',
        blood: '',
        interesrarea: '',
        businessname: '',
        businesscategory: '',
        nob: '',
        bs: '',
        ba: '',
        pincode: '',
        locality: '',
        city: '',
        wlink: '',
        textarea: '',
        yourphoto: '',
        yourlogo: '',
        chexkbox: ''

    })

    const [setErrorMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/submit', form);
            console.log('Response:', res);
            setSubmitMessage(res.data);
            setForm({
                name: '',
                gender: '',
                whatsappno: '',
                alternateno: '',
                email: '',
                dob: '',
                doma: '',
                blood: '',
                interesrarea: '',
                businessname: '',
                businesscategory: '',
                nob: '',
                bs: '',
                ba: '',
                pincode: '',
                locality: '',
                city: '',
                wlink: '',
                textarea: '',
                yourphoto: '',
                yourlogo: '',
                chexkbox: ''
            })

        } catch (err) {
            console.error('Error submitting form:', err);
            setErrorMessage('Failed to submit form');
        }
    }

    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/close-up-woman-s-hand-is-writing-paper_85574-4460.jpg?w=840"
                    className="listing-form-img"
                    alt="FormImage"
                />
            </div>
            <div className="form-content-container">
                <motion.div

                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}


                    className="heading-text-container">
                    <h1 className="listing-heading">Listing Form</h1>
                    <h3 className="text">Please Fill the Form Carefully.</h3>
                    <p className='text-2'>Informations shared by you is important for your Credential & Directory listing.</p>
                </motion.div>
                <div className='form-main-container'>
                    <form className="listing-form-container" onSubmit={handleSubmit}>
                        <div className="two-list-input-container">
                            <motion.div

                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="list-label">Name*</label>
                                <br />
                                <input type="text" required className="list-input" name='name' value={form.name}
                                    onChange={handleChange} />
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}

                                className="label-input-container">
                                <label className="list-label">Gender*</label>
                                <br />
                                <select className="list-input" name='gender' value={form.gender}
                                    onChange={handleChange}>
                                    <option className="option-element"></option>
                                    <option className="option-element">Male</option>
                                    <option className="option-element">Female</option>
                                    <option className="option-element">other</option>
                                </select>
                            </motion.div>
                        </div>
                        <div className="two-list-input-container">
                            <motion.div

                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}

                                className="label-input-container">
                                <label className="list-label">WhatsApp No.*</label>
                                <br />
                                <input type="text" required className="list-input" name='whatsappno' value={form.whatsappno}
                                    onChange={handleChange} />
                            </motion.div>
                            <motion.div

                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="unrequired-label">Alternate Contact No.</label>
                                <br />
                                <input type="text" className="list-input" name='alternateno' value={form.alternateno}
                                    onChange={handleChange} />
                            </motion.div>
                        </div>
                        <motion.div

                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}


                            className="single-frame-input-container">
                            <div className="single-input-container">
                                <label className="unrequired-label">Email ID</label>
                                <br />
                                <input type="text" className="single-list-input" name='email' value={form.email}
                                    onChange={handleChange} />
                            </div>
                        </motion.div>
                        <div className="two-list-input-container">
                            <motion.div

                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}



                                className="label-input-container">
                                <label className="list-label">Date of Birth*</label>
                                <br />
                                <input type="date" required className="list-input" name='dob' value={form.dob}
                                    onChange={handleChange} />
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}

                                className="label-input-container">
                                <label className="unrequired-label">Date of Marriage Anniversary</label>
                                <br />
                                <input type="date" className="list-input" name='doma' value={form.doma}
                                    onChange={handleChange} />
                            </motion.div>
                        </div>
                        <div className="two-list-input-container">
                            <motion.div

                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}



                                className="blood-input-container">
                                <label className="list-label">Blood Group*</label>
                                <br />
                                <select required className="blood-input" name='blood' value={form.blood}
                                    onChange={handleChange}>
                                    <option></option>
                                    <option className="option-element">A+</option>
                                    <option className="option-element">A-</option>
                                    <option className="option-element">B+</option>
                                    <option className="option-element">B-</option>
                                    <option className="option-element">AB+</option>
                                    <option className="option-element">AB-</option>
                                    <option className="option-element">O+</option>
                                    <option className="option-element">O-</option>
                                </select>
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="area-input-container">
                                <label className="unrequired-label">Interest Area</label>
                                <br />
                                <select className="area-input" name='interesrarea' value={form.interesrarea}
                                    onChange={handleChange}>
                                    <option></option>
                                    <option className="option-element">Business Only</option>
                                    <option className="option-element">Charity and Other National/Social Cause</option>
                                    <option className="option-element">Parties, get-togethers & such informal meets</option>
                                    <option className="option-element">Business, Charity and Other National/Social Cause</option>
                                    <option className="option-element">Business and Parties, get-togethers & such informal meets</option>
                                    <option className="option-element">Charity, National/Social Cause & Parties, Get-togethers, informal meets</option>
                                    <option className="option-element">Business, Charity and Get-togethers, Parties or informal meets</option>

                                </select>
                            </motion.div>
                        </div>
                        <div className="two-list-input-container">
                            <motion.div


                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="unrequired-label">Business Entity Name</label>
                                <br />
                                <input type="text" className="list-input" name='businessname' value={form.businessname}
                                    onChange={handleChange} />
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="list-label">Business Category*</label>
                                <br />
                                <select required className="list-input" name='businesscategory' value={form.businesscategory}
                                    onChange={handleChange}>
                                    <option className="option-element"></option>
                                    <option className="option-element">Accounting Services</option>
                                    <option className="option-element">Accupuncture & Accupressure</option>
                                    <option className="option-element">Administrative Services</option>
                                    <option className="option-element">Advertising & Marketing (Other)</option>
                                    <option className="option-element">Agriculturists & Agronomist</option>
                                    <option className="option-element">Alternative Wellness (Products)</option>
                                    <option className="option-element">Aluminium Profiles</option>
                                    <option className="option-element">Animals (Other)</option>
                                    <option className="option-element">Aquarium/Fish</option>
                                    <option className="option-element">Architectural & Engineering Services</option>
                                    <option className="option-element">Art & Entertainment (Other)</option>
                                    <option className="option-element">Art Dealer/Gallery Owner</option>
                                    <option className="option-element">Artist</option>
                                    <option className="option-element">Asset Finance</option>
                                    <option className="option-element">Astrologer/ Astrologist/ Numerologists/ Palmist</option>
                                    <option className="option-element">Auditor (Chartered Accountants)</option>
                                    <option className="option-element">Auto Glass</option>
                                    <option className="option-element">Auto/Car Body Shop/ Repair</option>
                                    <option className="option-element">Auto/Car Parts & Accessories</option>
                                    <option className="option-element">Auto/Car Rental/Leasing</option>
                                    <option className="option-element">Auto/Car Sales</option>
                                    <option className="option-element">Bakeries</option>
                                    <option className="option-element">Books & Publication Reseller</option>
                                    <option className="option-element">Bricklayer/Stonemason</option>
                                    <option className="option-element">Builder/General Contractor</option>
                                    <option className="option-element">Building Materials Reseller</option>
                                    <option className="option-element">Bulk SMS, WhatsApp & Email Reseller</option>
                                    <option className="option-element">Business Advisor/ Consultant</option>
                                    <option className="option-element">Business Financing</option>
                                    <option className="option-element">Business License Consultancy</option>
                                    <option className="option-element">Business Loan</option>
                                    <option className="option-element">Buying Agent</option>
                                    <option className="option-element">Car & Motorcycle (Other)</option>
                                    <option className="option-element">Carpenter</option>
                                    <option className="option-element">Carpet- Upholstery Cleaner</option>
                                    <option className="option-element">Caterer</option>
                                    <option className="option-element">CCTV & Other Security Survillance</option>
                                    <option className="option-element">Cement/Concrete Reseller</option>
                                    <option className="option-element">Chemical Products</option>
                                    <option className="option-element">Child Specialists/ Paediatrics</option>
                                    <option className="option-element">Chiropractor</option>
                                    <option className="option-element">Chocolatier</option>
                                    <option className="option-element">Cleaning Products</option>
                                    <option className="option-element">Cleaning Service</option>
                                    <option className="option-element">Clothing Accessories Retailer</option>
                                    <option className="option-element">Cloud Kitchen</option>
                                    <option className="option-element">Cloud Services (Data & Digital)</option>
                                    <option className="option-element">Commercial Vehicle Dealers</option>
                                    <option className="option-element">Company Secretary</option>
                                    <option className="option-element">Computer Repairs & Accessories</option>
                                    <option className="option-element">Computer Training</option>
                                    <option className="option-element">Consumer Loan</option>
                                    <option className="option-element">Copywriter/ Content Writer</option>
                                    <option className="option-element">Corporate Events</option>
                                    <option className="option-element">Corporate Gifting</option>
                                    <option className="option-element">Corrugated Boxes</option>
                                    <option className="option-element">Cosmetics/Skin Care</option>
                                    <option className="option-element">Counselor/Psychotherapist</option>
                                    <option className="option-element">Courier</option>
                                    <option className="option-element">Dance School/ Classes/ Trainer/ Professional Dancer</option>
                                    <option className="option-element">Data Security & Recovery</option>
                                    <option className="option-element">Demolition Contractor</option>
                                    <option className="option-element">Dentist/ Orthodontist/ Dental Clinic</option>
                                    <option className="option-element">Diamonds- Gold Jewellers</option>
                                    <option className="option-element">Digital Coach/ Trainer</option>
                                    <option className="option-element">Disc Jockey (DJ)</option>
                                    <option className="option-element">Doctor/Physician</option>
                                    <option className="option-element">Dog Trainer</option>
                                    <option className="option-element">Dry Cleaning/Laundry (Personal)</option>
                                    <option className="option-element">Dry Fruits & Exotic Fruits Seller</option>
                                    <option className="option-element">Eating Joints including Shakes & Juice Parlour</option>
                                    <option className="option-element">Education Counselling/ Admission Consultant</option>
                                    <option className="option-element">Education Services/ Classes</option>
                                    <option className="option-element">Electrical Accessories & Hardware</option>
                                    <option className="option-element">Electrical Contractor</option>
                                    <option className="option-element">Electrical Equipment Manufacture</option>
                                    <option className="option-element">Electrical Products Dealers (Switches- Boards- Sockets)</option>
                                    <option className="option-element">Electrical Tools & Equipments</option>
                                    <option className="option-element">Electrician - Commercial</option>
                                    <option className="option-element">Electricity & Gas Dealers</option>
                                    <option className="option-element">Electronics Retailer</option>
                                    <option className="option-element">Elevators</option>
                                    <option className="option-element">Embroidery</option>
                                    <option className="option-element">Employment/Labor Law Compliance</option>
                                    <option className="option-element">Energy Consulting</option>
                                    <option className="option-element">ENT Practitioner/ Doctor</option>
                                    <option className="option-element">Environmental Products/ Services</option>
                                    <option className="option-element">ERP Software (Reseller)</option>
                                    <option className="option-element">Event Rentals</option>
                                    <option className="option-element">Event Venue/Room Rental</option>
                                    <option className="option-element">Factory License Consultancy</option>
                                    <option className="option-element">Fences & Area Security (Civil)</option>
                                    <option className="option-element">Feng Shui- Tarot card</option>
                                    <option className="option-element">Fine/ Fashion/ Imitation Jewelry</option>
                                    <option className="option-element">Fire Protection</option>
                                    <option className="option-element">Fireplace & Oven Builder</option>
                                    <option className="option-element">Flooring Manufacture & Retail</option>
                                    <option className="option-element">Flooring Services (Tile & Marble Mistri)</option>
                                    <option className="option-element">Florist</option>
                                    <option className="option-element">Food & Beverage (Other)</option>
                                    <option className="option-element">Food Products (Reseller)</option>
                                    <option className="option-element">Foreign Currency Exchange</option>
                                    <option className="option-element">Funeral Planning/Services</option>
                                    <option className="option-element">Furniture Manufacturer & Retailer</option>
                                    <option className="option-element">Furniture Repair/Upholstery</option>
                                    <option className="option-element">Garage Doors</option>
                                    <option className="option-element">Garments Store (Retail & Wholesale)</option>
                                    <option className="option-element">General Insurance</option>
                                    <option className="option-element">Glass</option>
                                    <option className="option-element">Graphic Designer & Digital Marketing</option>
                                    <option className="option-element">Grooming (Look Enhancement)</option>
                                    <option className="option-element">Hair Color & Style Consultant</option>
                                    <option className="option-element">Handmade Giftings including Paintings</option>
                                    <option className="option-element">Hardware & Architectural Fittings</option>
                                    <option className="option-element">Health & Wellness Products</option>
                                    <option className="option-element">Health & Wellness Services</option>
                                    <option className="option-element">Health Coach (Personalised Home Service)</option>
                                    <option className="option-element">Health Facility/Gym/Club</option>
                                    <option className="option-element">Health Insurance</option>
                                    <option className="option-element">Hearing/Audiology</option>
                                    <option className="option-element">Home Appliance Sales & Service</option>
                                    <option className="option-element">Home Furnishings</option>
                                    <option className="option-element">Hotel- Resort & Lodge</option>
                                    <option className="option-element">Housing Loan & Education Loan</option>
                                    <option className="option-element">HVAC - Heating & Air</option>
                                    <option className="option-element">Hypnotherapist</option>
                                    <option className="option-element">Immigration Law</option>
                                    <option className="option-element">In-Home Care</option>
                                    <option className="option-element">Individual Leadership Coach</option>
                                    <option className="option-element">Insolvency Practitioner</option>
                                    <option className="option-element">Intellectual Property Law</option>
                                    <option className="option-element">Interior Designer</option>
                                    <option className="option-element">Investigative Services/Detective</option>
                                    <option className="option-element">IT & Networks</option>
                                    <option className="option-element">Jute Bags and Jute Products</option>
                                    <option className="option-element">Kids wear</option>
                                    <option className="option-element">Kitchen Construction</option>
                                    <option className="option-element">Lab Grown Diamond Jewellers</option>
                                    <option className="option-element">Landscape Services</option>
                                    <option className="option-element">Language Learning Centre</option>
                                    <option className="option-element">Lawyer</option>
                                    <option className="option-element">Leather Products</option>
                                    <option className="option-element">Legal & Accounting (Other)</option>
                                    <option className="option-element">Life Insurance Agent</option>
                                    <option className="option-element">Lighting Manufacture & Reseller</option>
                                    <option className="option-element">Machinery & Equipment Manufacture</option>
                                    <option className="option-element">Machinery & Equipment Repair</option>
                                    <option className="option-element">Magnetic Health Products</option>
                                    <option className="option-element">Marbles- Granites & Tiles</option>
                                    <option className="option-element">Martial Arts & Other Self Defence Training</option>
                                    <option className="option-element">Massage Therapist</option>
                                    <option className="option-element">Media Services (Print & TV/ News)</option>
                                    <option className="option-element">Mediator/ Liasoning Agent</option>
                                    <option className="option-element">Medical Furniture (Chairs- Beds- Tables- Creches)</option>
                                    <option className="option-element">Men's Wear</option>
                                    <option className="option-element">Metal Fabrication</option>
                                    <option className="option-element">Metal Work including Iron Grills</option>
                                    <option className="option-element">Mobile & Telecommunication Products</option>
                                    <option className="option-element">Moving Company</option>
                                    <option className="option-element">MSME Loan & CGTMSE</option>
                                    <option className="option-element">Musicians</option>
                                    <option className="option-element">Mutual Fund & SIP</option>
                                    <option className="option-element">Naturopaths</option>
                                    <option className="option-element">Non Metallic Minerals</option>
                                    <option className="option-element">Non-Profits/Fundraising Organizations</option>
                                    <option className="option-element">Nursery- Plantation & Tree Services</option>
                                    <option className="option-element">Nutritional Supplements</option>
                                    <option className="option-element">Occupational Safety</option>
                                    <option className="option-element">Office Equipment/Machines</option>
                                    <option className="option-element">Office Supplies & Stationeries</option>
                                    <option className="option-element">Offshore Company Set up</option>
                                    <option className="option-element">Optician</option>
                                    <option className="option-element">Orthopaedics</option>
                                    <option className="option-element">Others</option>
                                    <option className="option-element">Outdoor Furniture</option>
                                    <option className="option-element">Paint Manufacture & Reseller</option>
                                    <option className="option-element">Painter/ Painting Mistri</option>
                                    <option className="option-element">Paper & Paper Products</option>
                                    <option className="option-element">Paper Bags & Plastic Bags</option>
                                    <option className="option-element">Passport & Visa Services</option>
                                    <option className="option-element">Pathology Lab/ Testing Centre/ Diagnostic Centre</option>
                                    <option className="option-element">Payroll Service</option>
                                    <option className="option-element">Personal Services (Other)</option>
                                    <option className="option-element">Personal Trainer - Fitness</option>
                                    <option className="option-element">Pest Control & Fumigation</option>
                                    <option className="option-element">Pet Foods</option>
                                    <option className="option-element">Pharmaceuticals (Manufacturer)</option>
                                    <option className="option-element">Pharmacist & Pharmacy Store</option>
                                    <option className="option-element">Photographer - Commercial</option>
                                    <option className="option-element">Photographer - Personal (person)</option>
                                    <option className="option-element">Plumbing- Swerage & Sanitation Services</option>
                                    <option className="option-element">Pooja Store & Reseller of Idols/ Statue Deity </option>
                                    <option className="option-element">Pools- Spas & Saunas</option>
                                    <option className="option-element">Power Generator & Emergency Power Supply</option>
                                    <option className="option-element">Pranic Healer/ Healing</option>
                                    <option className="option-element">Pranic Healing</option>
                                    <option className="option-element">Printer - Digital</option>
                                    <option className="option-element">Printer - Large Format</option>
                                    <option className="option-element">Printer - Offset</option>
                                    <option className="option-element">Private Tutions/ Coaching</option>
                                    <option className="option-element">Public Relation</option>
                                    <option className="option-element">Real Estate Development</option>
                                    <option className="option-element">Real Estate Maintenance/Care Taker</option>
                                    <option className="option-element">Real Estate Planning Consultant</option>
                                    <option className="option-element">Recruiter</option>
                                    <option className="option-element">Residential Mortgages</option>
                                    <option className="option-element">Restaurant- Bars & Cafes</option>
                                    <option className="option-element">Restoration</option>
                                    <option className="option-element">Road Freight Service/ Logistics</option>
                                    <option className="option-element">Roofing & Gutters</option>
                                    <option className="option-element">Rubber & Plastic</option>
                                    <option className="option-element">Salon/Spa</option>
                                    <option className="option-element">Security (Other)</option>
                                    <option className="option-element">Security Personnel</option>
                                    <option className="option-element">Senior Citizen Service Provider</option>
                                    <option className="option-element">Septic Systems</option>
                                    <option className="option-element">Shutters & Awnings</option>
                                    <option className="option-element">Signage & Display Board</option>
                                    <option className="option-element">Silver & Silver Products</option>
                                    <option className="option-element">Social Event Manager/Planner</option>
                                    <option className="option-element">Software & Mobile Application Developer</option>
                                    <option className="option-element">Software Reseller (Antivirus- Tally- etc.)</option>
                                    <option className="option-element">Solar Systsem & Solar Products</option>
                                    <option className="option-element">Sophrologist</option>
                                    <option className="option-element">Special Furniture</option>
                                    <option className="option-element">Special Vehicle Transportation</option>
                                    <option className="option-element">Sports & Leisure (Other)</option>
                                    <option className="option-element">Sports Product/ Equipment Retailer</option>
                                    <option className="option-element">Stock Broker</option>
                                    <option className="option-element">Surveyor</option>
                                    <option className="option-element">Tarot Card Reader</option>
                                    <option className="option-element">Taxation Consultant</option>
                                    <option className="option-element">Textiles & Fabric Reseller</option>
                                    <option className="option-element">Tire Sales/Replacement</option>
                                    <option className="option-element">Tours Travels & Ticketing</option>
                                    <option className="option-element">Training & Coaching (Other)</option>
                                    <option className="option-element">Translator/Language Services</option>
                                    <option className="option-element">Transport & Shipping (Other)</option>
                                    <option className="option-element">Transportation Equipment</option>
                                    <option className="option-element">Travel Guide & Services</option>
                                    <option className="option-element">Uniforms Manufacturer & Reseller</option>
                                    <option className="option-element">UPS/Inverter/ DG Set/ Power Supply</option>
                                    <option className="option-element">Vastu Consultancy</option>
                                    <option className="option-element">Veterinarian</option>
                                    <option className="option-element">Videographer/Film Producer</option>
                                    <option className="option-element">Virtual Assistant & Answering Machine/ Services</option>
                                    <option className="option-element">Waste Disposal</option>
                                    <option className="option-element">Water Systems</option>
                                    <option className="option-element">Waterproofing-Weatherproofing</option>
                                    <option className="option-element">Web Design & Development- SEO</option>
                                    <option className="option-element">Window Cleaning</option>
                                    <option className="option-element">Windows & Doors</option>
                                    <option className="option-element">Wine Merchant/Wine Shop</option>
                                    <option className="option-element">Wires & Cables</option>
                                    <option className="option-element">Women's Wear</option>
                                    <option className="option-element">Wood & Cork (except Furniture)</option>
                                    <option className="option-element">Yoga/Pilates/Qi-gong Trainer</option>
                                </select>
                            </motion.div>
                        </div>
                        <div className="two-list-input-container">
                            <motion.div


                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="list-label">Nature of Business*</label>
                                <br />
                                <select required className="list-input" name='nob' value={form.nob}
                                    onChange={handleChange}>
                                    <option className="option-element"></option>
                                    <option className="option-element">Manufacturer </option>
                                    <option className="option-element">Retail  </option>
                                    <option className="option-element">Services</option>
                                    <option className="option-element">Professional</option>
                                    <option className="option-element">Other</option>
                                </select>
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="list-label">Business Segment*</label>
                                <br />
                                <select required className="list-input" name='bs' value={form.bs}
                                    onChange={handleChange}>
                                    <option className="option-element"></option>
                                    <option className="option-element">Advertising & Marketing </option>
                                    <option className="option-element">Agriculture</option>
                                    <option className="option-element">Animals </option>
                                    <option className="option-element">Architecture & Engineering </option>
                                    <option className="option-element">Art & Entertainment </option>
                                    <option className="option-element">Car & Motorcycle </option>
                                    <option className="option-element">Computer & Programming </option>
                                    <option className="option-element">Construction </option>
                                    <option className="option-element">Consulting </option>
                                    <option className="option-element">Employment Activities</option>
                                    <option className="option-element">Event & Business Service</option>
                                    <option className="option-element">Finance & Insurance</option>
                                    <option className="option-element">Food & Beverage </option>
                                    <option className="option-element">Health & Wellness</option>
                                    <option className="option-element">Legal & Accounting </option>
                                    <option className="option-element">Manufacturing</option>
                                    <option className="option-element">Organizations & Others</option>
                                    <option className="option-element">Personal Services</option>
                                    <option className="option-element">Real Estate Services</option>
                                    <option className="option-element">Repair</option>
                                    <option className="option-element">Retail </option>
                                    <option className="option-element">Security & Investigation</option>
                                    <option className="option-element">Sports & Leisure</option>
                                    <option className="option-element">Telecommunications</option>
                                    <option className="option-element">Training & Coaching </option>
                                    <option className="option-element">Transport & Shipping </option>
                                    <option className="option-element">Travel </option>
                                    <option className="option-element">Others</option>

                                </select>
                            </motion.div>
                        </div>
                        <motion.div


                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}


                            className="single-frame-input-container">
                            <div className="single-input-container">
                                <label className="list-label">Business Address*</label>
                                <br />
                                <input type="text" required className="single-list-input" name='ba' value={form.ba}
                                    onChange={handleChange} />
                            </div>
                        </motion.div>
                        <div className="two-list-input-container">
                            <motion.div


                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="blood-input-container">
                                <label className="list-label">PIN Code*</label>
                                <br />
                                <input required type="text" className="blood-input" name='pincode' value={form.pincode}
                                    onChange={handleChange} />
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="area-input-container">
                                <label className="list-label">Locality*</label>
                                <br />
                                <select required className="area-input" name='locality' value={form.locality}
                                    onChange={handleChange}>
                                    <option></option>
                                    <option className="option-element">Central Kolkata (MG Metro-Netaji Bhawan-Howrah-Sealdah) </option>
                                    <option className="option-element">South Kolkata Metro Area (Hazra to New Garia) </option>
                                    <option className="option-element">South Kolkata (Non Metro route Science City to Sonarpur Station)</option>
                                    <option className="option-element">New Metro South Kolkata (Taratala to Joka) </option>
                                    <option className="option-element">Industrial Area South Kolkata (Hyde Road, Behala) </option>
                                    <option className="option-element">North Kolkata Metro Area (Girish Park to Dakshineswar)  </option>
                                    <option className="option-element">North Kolkata E M Byepass VIP (Phool Bagan, Chingrihata Airport)</option>
                                    <option className="option-element">Extended North Kolkata (New town-Rajarhat-Salt Lake)</option>
                                    <option className="option-element">Howrah Area</option>
                                    <option className="option-element">Sodepur & Barasat </option>
                                    <option className="option-element">Others</option>
                                </select>
                            </motion.div>
                        </div>
                        <div className="two-list-input-container">
                            <motion.div

                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="list-label">City*</label>
                                <br />
                                <select required className="list-input" name='city' value={form.city}
                                    onChange={handleChange}>
                                    <option className="option-element"></option>
                                    <option className="option-element">Kolkata</option>
                                    <option className="option-element">Near Kolkata(within WB)</option>
                                    <option className="option-element">Outside West Begal</option>
                                    <option className="option-element">other</option>
                                </select>
                            </motion.div>
                            <motion.div


                                variants={fadeIn("lrft", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}



                                className="label-input-container">
                                <label className="unrequired-label">Website Link</label>
                                <br />
                                <input type="text" className="list-input" name='wlink' value={form.wlink}
                                    onChange={handleChange} />
                            </motion.div>
                        </div>
                        <motion.div


                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}



                            className="single-frame-input-container">
                            <div className="single-input-container">
                                <label className="unrequired-label">Business Description (Maximum 300 characters including spaces & special characters)</label>
                                <br />
                                <textarea rows="6" className="text-area" placeholder="Max. characters with space" cols="50" name='textarea' value={form.textarea}
                                    onChange={handleChange}></textarea>
                            </div>
                        </motion.div>
                        <div className="two-list-input-container">
                            <motion.div


                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="list-label">Upload Your Photo*<span className="required-element">(Upload JPEG, JPG or PNG file and Image size less than 2 MB. Direct Mobile camera photos size may exceed the size)</span></label>
                                <br />
                                <input type="file" accept="image/jpg, image/png, image/jpeg" required className="list-input" name='yourphoto' value={form.yourphoto}
                                    onChange={handleChange} />
                            </motion.div>
                            <motion.div


                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="label-input-container">
                                <label className="unrequired-label">Logo Upload<span className="required-element">(Upload a JPEG, JPG or PNG file)</span></label>
                                <br />
                                <input type="file" accept="image/jpg, image/png, image/jpeg" className="list-input" name='yourlogo' value={form.yourlogo}
                                    onChange={handleChange} />
                            </motion.div>
                        </div>
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}


                            className="captcha-container">

                            <ReCAPTCHA
                                sitekey="6Ld-AgQqAAAAACtwVITlM0f7Xrbb0MKwXds4TL2z"
                                className='my-google-captcha'

                            />
                            <motion.div

                                variants={fadeIn("left", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}



                                className="qr-img-container">
                                <img className="gpay-qr"
                                    src="https://businesssphere.info/images/GpayQR.jpeg"
                                />
                                <p className="gpay-text">Gpay, Paytm and Phonepay is at +91-9331177595</p>
                            </motion.div>
                        </motion.div>
                        <div className="checkbox-and-condition-container">
                            <motion.div

                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}


                                className="checkbox-input-container">
                                <input type="checkbox" className="checkbox-input" required name='chexkbox' value={form.chexkbox} onChange={handleChange} />
                                <p>
                                    I accept all the Terms & Conditions framed to manage the Forum & any changes therein. I have Paid/ Ready to pay Rs. 150 as Annual Website Listing Fees for Directory Listing and maintenance of Website. Form once filled will not be editable. Backend and support team to be requested for any changes, I accept it to be nominally charged.
                                </p>
                            </motion.div>
                        </div>
                        <div className="btn-container">
                            <button className="bg-amber-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-md " type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listing
