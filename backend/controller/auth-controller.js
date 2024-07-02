const Form = require('../models/users.model');




const register = async (req, res) => {

    try {
        const { name, gender, whatsappno, alternateno, email, dob, doma, blood, interesrarea, businessname, businesscategory, nob, bs, ba, pincode, city, wlink, textarea, yourphoto, yourlogo } = req.body;

        await Form.create({ name, gender, whatsappno, alternateno, email, dob, doma, blood, interesrarea, businessname, businesscategory, nob, bs, ba, pincode, city, wlink, textarea, yourphoto, yourlogo });
        res.status(200).send('Form submitted successfully');
    } catch (err) {
        console.error('Error saving form:', err);
        res.status(500).send('Internal server error');
    }
}

const members = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        console.error('Error getting from ', error);
        res.status(200).send('Internal server error');
    }
}


module.exports = {register, members};
