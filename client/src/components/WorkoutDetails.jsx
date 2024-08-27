import axios from 'axios'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

//DATE FNS
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await axios.delete('/api/workouts/' + workout._id) 
    console.log(response)

    if (response) {
      dispatch({type: "DELETE_WORKOUT", payload: response.data})
      // window.location.reload()
    }
  }

  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (lb):</strong> {workout.load}</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}
