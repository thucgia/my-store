import { useState } from "react"

// https://betterprogramming.pub/clean-api-call-with-react-hooks-3bd6438a375a
export const useAPI = (apiFunc) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    const request = async (...args) => {
        setLoading(true)
        try {
            const result = await apiFunc(...args)
            setData(result.data)
        }
        catch(err) {
            setError(err.message || "Unexpected Error!")
        }
        finally {
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        error,
        request
    }
}
