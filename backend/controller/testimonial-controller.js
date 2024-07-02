const Testimonial = require('../models/testimonial.model')

const testimonials = async (req, res) => {
    try {
        const response = await Testimonial.find();
        res.status(200).json({msg: response})
    } catch (error) {
        console.log(`testimonials: ${error}`)
    }
}

module.exports = testimonials;