import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    console.log(url)
    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url)
                console.log(res.data.data[0]?.attributes.title)
                setData(res.data)
                console.log(data)
            } catch (error) {
                setError(true)
                console.log(error)
            }
            setLoading(false)
        }
        fetchData();
    }, [url])

    return {data, loading, error};

}

export default useFetch;