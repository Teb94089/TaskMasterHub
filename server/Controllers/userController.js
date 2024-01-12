const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res)=>{
   const{name,email, password} = req.body
   let user = await userModel.findOne({ email });

   if (user )
   return res.status(400).json("User with the given email already exists");

   if(!name || !email || !password)
   return res.status(400).json("All fields are required");

   if(validator.isEmail(email))
   return res.status(400).json("Please enter a valid email");

   if(validator.isStrongPassword(password))
   return res.status(400).json("Please enter strong password");

   user = new userModel({name, email, password})

   const salt = await bcrypt.genSalt(10)
   user.password = await bcrypt.hash(user.password, salt)

   await user.save();

};
module.exports = {registerUser}