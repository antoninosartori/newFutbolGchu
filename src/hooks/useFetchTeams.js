import { useEffect, useState } from "react"
import { getAllTeams, getOneTeam } from "../utils/function"
import { MAX_ID_AVAILABLE } from "../utils/const"
import { useLocation } from "wouter"

export default function useFetchTeams(isOneTeam, teamId){
   const [teams, setTeams] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [location, setLocation] = useLocation();
   const [error, setError] = useState(null)

   useEffect(() => {
      if(isOneTeam){return}
      setIsLoading(true)
      getAllTeams()
      .then(data => setTeams(data.equipos))
      .catch(err => {
         console.log(err)
         setError(err)
      })
      .finally(() => setIsLoading(false))
   }, [isOneTeam])

   useEffect(() => {
      if(!isOneTeam){return}
      setIsLoading(true)
      if(Number(teamId) > MAX_ID_AVAILABLE){
         return setLocation('/')
      }
      getOneTeam(teamId)
         .then(data => setTeams(data.equipo))
         .catch(err => {
            console.log(err)
            setError(err)
         })
         .finally(() => setIsLoading(false))

   }, [teamId])

   return{
      teams, isLoading, error
   }
}