const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());

//allows app to use req.body in routes
app.use(express.json());

//middleware to console.log the path and method of requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

//Connnect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connnected to DB, Listening on Port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })
