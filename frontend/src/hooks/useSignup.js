import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosUserInstance } from "../instance/Axios";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()



    const signup = async (email, password) => {
     console.log("hi");
        
        // const user = { email, password }
        setIsLoading(true)
        setError(null)

        try {
            
            const result = await axiosUserInstance.post("/signup", { email, password })
            console.log(result);

            if (result.status === 200) {
                console.log("success");
                //save the user to local storage
                localStorage.setItem('user', JSON.stringify(result))

                //update the authContext
                dispatch({ type: 'LOGIN', payload: result })
                setIsLoading(false)
            }

        }
        catch (err) {
            console.log(err);
            if (err.response.status === 404) {
                const Error = err.response.data.error
                setIsLoading(false)
                setError(Error)
            }

        }

    }
    return { signup, isLoading, error }
}


