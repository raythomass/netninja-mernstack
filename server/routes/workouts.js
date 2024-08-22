const express = require('express');
const {
    getWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id', getOneWorkout);

router.post('/', createWorkout );

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router