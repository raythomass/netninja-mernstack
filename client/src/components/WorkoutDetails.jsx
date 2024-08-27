import axios from 'axios'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

export default function WorkoutDetails({ workout }) {

  const { dispatch } = useWorkoutContext();

const handleClick = async () => {
  const response = await axios.delete('/api/workouts/' + workout._id) 
  console.log(response)

  if (response) {
    dispatch({type: "DELETE_WORKOUT", payload: response})
    window.location.reload()
  }
}

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load:</strong> {workout.load}</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}
