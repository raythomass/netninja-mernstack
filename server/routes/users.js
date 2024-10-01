const express = require('express')
const cors = require('cors');
const {loginUser, signupUser} = require('../controllers/userController')

const router = express.Router()

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);


//LOGIN
router.post('/login', loginUser)

//SIGNUP
router.post('/signup', signupUser)


module.exports = router