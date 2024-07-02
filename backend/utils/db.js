const mongoose = require("mongoose");


const URI = "mongodb://localhost:27017/userListing";

// mongoose.connect(URI)

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("Databse connection failed")
    }
}
module.exports = connectDb;