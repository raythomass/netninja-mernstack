import { useState } from "react"
import axios from 'axios'
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext";

export default function WorkoutForm() {
    const { dispatch } = useWorkoutContext();
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user) {
            setError('You must be logged in')
            return
        }

        const workout = {title, load, reps}

        const response = await fetch('http://localhost:3001/api/workouts', {
            method: 'POST', 
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New Workout Created', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title</label>
        <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />
        <label>Load (lbs): </label>
        <input
            type="text"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
        />
        <label>Reps: </label>
        <input
            type="text"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
        />
        <button>Add Workout</button>

    </form>
  )
}
