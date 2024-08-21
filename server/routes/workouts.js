const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json("GET all workouts")
})

router.get('/:id', (req, res) => {
    res.json("GET a single workout")
})

router.post('/', (req, res) => {
    res.json("POST a new workout")
})

router.delete('/:id', (req, res) => {
    res.json("DELETE a single workout")
})

router.patch('/:id', (req, res) => {
    res.json("UPDATE a single workout")
})

module.exports = router