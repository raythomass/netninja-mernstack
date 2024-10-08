const Workout = require('../models/workout');
const mongoose = require('mongoose');

//GET all workouts
const getWorkouts = async (req, res) => {
    const user_id = req.user._id
    try {
        const workouts = await Workout.find({ user_id }).sort({createdAt: -1})
        res.status(200).json(workouts)
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
 }

//GET a single workout
const getOneWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(400).json({error: 'No Workout Found'})
    }

    res.status(200).json(workout)
}

//CREATE a new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const user_id = req.user._id
        const workout = await Workout.create({title, reps, load, user_id});
        res.status(200).json(workout);
    } 
    catch (err) {
        res.status(400).json({error: err.message})
    }
}

//DELETE a new workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//UPDATE a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}