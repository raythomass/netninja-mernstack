import axios from 'axios'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

//DATE FNS
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext';

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext()

  const handleClick = async () => {
    if(!user) {
      return
    }

    const response = await fetch('http://localhost:3001/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    // const response = await axios.delete('/api/workouts/' + workout._id) 
    // console.log(response)

    if (response.ok) {
      dispatch({type: "DELETE_WORKOUT", payload: json})
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
