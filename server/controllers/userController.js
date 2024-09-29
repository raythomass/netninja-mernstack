const User = require('../models/user');

//LOGIN USER
const loginUser = async (req, res) => {
    res.json({mssg: 'Login User'})
}

//SIGNUP USER
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'Signup User'})
}


module.exports = {
    loginUser,
    signupUser
}