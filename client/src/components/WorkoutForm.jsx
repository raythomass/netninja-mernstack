import { useState } from "react"
import axios from 'axios'
import { useWorkoutContext } from "../hooks/useWorkoutContext"

export default function WorkoutForm() {
    const { dispatch } = useWorkoutContext();
    const [data, setData] = useState({
        title: "",
        load: "",
        reps: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {title, load, reps} = data
         try {
            const {data} = await axios.post('/api/workouts', {
                title, load, reps
            })
            if(data.error) {
                console.log(data.error)
            }else {
                dispatch({type: "CREATE_WORKOUT", payload: data})
            }
         } catch (error) {
            console.log(error)
         }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title</label>
        <input
            type="text"
            onChange={(e) => setData({...data, title:e.target.value})}
            value={data.title}
        />
        <label>Load: </label>
        <input
            type="text"
            onChange={(e) => setData({...data, load:e.target.value})}
            value={data.load}
        />
        <label>Reps: </label>
        <input
            type="text"
            onChange={(e) => setData({...data, reps: e.target.value})}
            value={data.reps}
        />
        <button>Add Workout</button>

    </form>
  )
}
