import { useState } from "react"
import axios from 'axios'

export default function WorkoutForm() {
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
                setData([...data, {title, load, reps}])
            }
         } catch (error) {
            console.log(error)
         }
    }

    const handleReload = () => {
        window.location.reload()
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
        <button onClick={handleReload}>Add Workout</button>

    </form>
  )
}
