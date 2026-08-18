const User = require('../models/userModel')

//login user
const loginUser = async (req,res) =>{
    res.json('login user')
}

//signup user
const signupUser = async (req,res) =>{
    res.json('signup user')
}

module.exports = {signupUser, loginUser}