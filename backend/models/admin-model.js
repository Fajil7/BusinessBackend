const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  }
});

adminSchema.pre('save', async function(next) {
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
  
      // Hash the password with the salt
      const passwordHash = await bcrypt.hash(this.password, salt);
  
      // Replace plain text password with hashed password
      this.password = passwordHash;
      next();
    } catch (error) {
      next(error);
    }
  });
  



// Adding the comparePassword method
adminSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };


// Adding the generateToken method without expiration
// adminSchema.methods.generateToken = function() {
//     const token = jwt.sign({ id: this._id.toString(), email: this.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return token;
//   };
  

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
