const mongoose = require("mongoose");



const formSchema = new mongoose.Schema({
    name: {
        type: String,
                                       
    },
    gender: {
        type: String,
       
    },
    whatsappno: {
        type: String,
        
    },
    alternateno: {
        type: String,
    },
    email: {
        type: String,
        
    },
    dob: {
        type: String,
                                        
    },
    doma: {
        type: String,
        
    },
    blood: {
        type: String,
        
    },
    interesrarea: {
        type: String,
        
    },
    businessname: {
        type: String,
        
    },
    businesscategory: {
        type: String,
                                          
    },
    nob: {
        type: String,
        
    },
    bs: {
        type: String,
        
    },
    ba: {
        type: String,
        
    },
    pincode: {
        type: String,
        
    },
    city: {
        type: String,
                                         
    },
    wlink: {
        type: String,
       
    },
    textarea: {
        type: String,
        
    },
    yourphoto: {
        type: String,
        
    },
    yourlogo: {
        type: String,
        
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;