const Brand = require("../models/sbrands-model");

const brands = async (req, res) => {
    try {
        const response = await Brand.find();
        res.status(200).json({msg: response})
    } catch (error) {
        console.log(`brand: ${error}`)
    }
}

module.exports = brands;