const User = require('../models/user');

//LOGIN USER
const loginUser = async (req, res) => {
    res.json({mssg: 'Login User'})
}

//SIGNUP USER
const signupUser = async (req, res) => {
    res.json({mssg: 'Signup User'})
}


module.exports = {
    loginUser,
    signupUser
}