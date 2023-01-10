import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { axiosWorkoutsInstance } from "../instance/Axios"

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    const workout = { title, load, reps }

    try {
      const response = await axiosWorkoutsInstance.post('/', workout, {
        headers: { 'Authorization': `Bearer ${user.data.token}` }
      })
      if (response.status === 200) {
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        setEmptyFields([])
        dispatch({ type: 'CREATE_WORKOUT', payload: response.data })
      }

    } catch (err) {
      if(err.response.status===400){
        if(!title){
          return setError('Please fill the title')
        }
        if(!load){
          return setError("Please fill the load")
        }
        if(!reps){
          return setError("Please fill the reps")
        }
        
      }
      
      console.log(err.response.status);
    }

  }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm