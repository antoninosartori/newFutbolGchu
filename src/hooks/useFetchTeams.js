import { useEffect, useState } from "react"
import { getAllTeams } from "../utils/function"

export default function useFetchTeams(){
   const [teams, setTeams] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      setIsLoading(true)
      getAllTeams()
      .then(data => setTeams(data.equipos))
      .catch(err => {
         console.log(err)
         setError(err)
      })
      .finally(() => setIsLoading(false))
   }, [])

   return{
      teams, isLoading, error
   }
}