const {Schema, model} = require("mongoose");


const brandsSchema = new Schema({
    imgUrl: {type: String, required: true}
});

const brands = new model("Sbrand", brandsSchema);

module.exports = brands;