const express = require("express");
const router = express.Router();
const testimonials = require('../controller/testimonial-controller');


router.route("/testimonial").get(testimonials)


module.exports = router