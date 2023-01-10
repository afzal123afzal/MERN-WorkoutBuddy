import axios from "axios";

export const axiosUserInstance = axios.create({
    baseURL : 'http://localhost:4000/api/user'
})

export const axiosWorkoutsInstance = axios.create({
    baseURL : 'http://localhost:4000/api/workouts'
})