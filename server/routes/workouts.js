const express = require('express');
const cors = require('cors');
const {
    getWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//REQUIRE AUTH FOR ALL WORKOUT ROUTES
router.use(requireAuth)

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.get('/', getWorkouts);

router.get('/:id', getOneWorkout);

router.post('/', createWorkout );

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router