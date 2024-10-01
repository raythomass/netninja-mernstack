import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from '../hooks/useAuthContext';


export default function Home() {
  const {workouts, dispatch} = useWorkoutContext();
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:3001/api/workouts', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        console.log(response);
        const json = await response.json()
        
        if (response) {
          dispatch({type: "SET_WORKOUTS", payload: json})
        }
    };

    if(user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>

    </div>
  )
}
