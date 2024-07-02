const {Schema, model} = require("mongoose");

const testimonialSchema = new Schema ({
  quote:  {type: String, required: true},
  author:  {type: String, required: true},
  position:  {type: String, required: true},
  imgUrl:  {type: String, required: true}

});

const testimonials = new model("Testi", testimonialSchema);

module.exports = testimonials