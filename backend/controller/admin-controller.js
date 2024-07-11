const Admin = require("../models/admin-model");


const admin = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        await Admin.create({ name, email, phone, password });
        res.status(200).send("Admin Form data added!")
    } catch (error) {
        console.log(error)
    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await Admin.findOne({ email });
        console.log(userExist)

        if (!userExist) {
            return res.status(404).json({ message: "Invalid Admin Details" })
        }

        const user = await userExist.comparePassword(password);


        if(user){
            res.status(200).json({
                msg: "Login Successful",
                // token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message: "Invalid email and password"});
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {admin, login};