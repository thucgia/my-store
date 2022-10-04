import { useState } from "react"

// https://betterprogramming.pub/clean-api-call-with-react-hooks-3bd6438a375a
export const useAPI = (apiFunc) => {
    const [ loading, setLoading ] = useState(false)

    const request = async (...args) => {
        setLoading(true)
        try {
            const result = await apiFunc(...args)
            return { status: true, result: result.data }
        }
        catch(err) {
            return { status: false, result: (err.response.data || "Unexpected Error!") }
        }
        finally {
            setLoading(false)
        }
    }

    return {
        loading,
        request
    }
}
