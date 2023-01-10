import { useEffect } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"


// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { axiosWorkoutsInstance } from '../instance/Axios'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {

      try {
        const response = await axiosWorkoutsInstance.get("/", {
          headers: { 'Authorization': `Bearer ${user.data.token}` }
        });
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: 'SET_WORKOUTS', payload: response.data })
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    if (user) {
      console.log(user.data.token);
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home