const User = require('../model/signupModel');

const Bcrypt = require('bcrypt');

const signUpUser = ( async (req, res) => {
    const { name, email, password, phonenumber} = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ where: { email: email } });
    try{
      if (existingUser) {
        return res.status(400).json({
          error: 'User already exists'
        });
      } 
        Bcrypt.hash(password, 10, async(err, hash) => {
          console.log(err)
          const user = await User.create({name, email, password: hash, phonenumber});
        
          res.status(201).json({
          message: 'User created successfully'
        })
      });
    } catch(err) {
      res.status(500).json(err)
     }
  })


  module.exports = {
    signUpUser,
  }