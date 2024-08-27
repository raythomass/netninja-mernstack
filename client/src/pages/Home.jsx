import axios from "axios";
import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";


export default function Home() {
  const {workouts, dispatch} = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await axios.get('/api/workouts');
        console.log(response);
        
        if (response) {
          dispatch({type: "SET_WORKOUTS", payload: response.data})
        }
    };

    fetchWorkouts()
  }, [])

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
