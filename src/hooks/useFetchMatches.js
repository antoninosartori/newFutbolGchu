import { useEffect, useState } from "react"
import { getMatchesBy } from "../utils/function"

export default function useFetchMatches () {
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [data, setData] = useState([])

   useEffect(() => {
      setIsLoading(true)

      getMatchesBy()
         .then(data => {
            return setData(data)
         })
         .catch(err => {
            setError(err?.message)
            console.log(err)
         })
         .finally(() => setIsLoading(false))
   }, [])

   return{
      matches: data.matches, error, isLoading
   }
} 