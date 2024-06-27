const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userListing')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema and model for the form data


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

// Define a route to handle form submissions
app.post('/submit', async (req, res) => {
    const { name, gender, whatsappno, alternateno, email, dob, doma, blood, interesrarea, businessname, businesscategory, nob, bs, ba, pincode, city, wlink, textarea, yourphoto, yourlogo } = req.body;
    const newForm = new Form({name, gender, whatsappno, alternateno, email, dob, doma, blood, interesrarea, businessname, businesscategory, nob, bs, ba, pincode, city, wlink, textarea, yourphoto, yourlogo });

    try {
        await newForm.save();
        res.status(200).send('Form submitted successfully');
    } catch (err) {
        console.error('Error saving form:', err);
        res.status(500).send('Internal server error');
    }
});


// get the data from databse
app.get('/api/forms', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        console.error('Error fetching forms:', err);
        res.status(500).send('Internal server error');
    }
});












// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
