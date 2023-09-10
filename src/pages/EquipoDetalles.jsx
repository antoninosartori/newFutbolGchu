import { useEffect, useState } from "react";
import { getOneTeam } from "../utils/function";
import { MAX_ID_AVAILABLE } from "../utils/const";
import { useLocation } from "wouter";

export default function EquipoDetalles({params}) {
   const {teamId} = params
   const [location, setLocation] = useLocation();
   const [team, setTeam] = useState([])

   useEffect(() => {
      if(Number(teamId) > MAX_ID_AVAILABLE){
         return setLocation('/')
      }
      getOneTeam(teamId)
         .then(data => setTeam(data.equipo))
         .catch(err => console.log(err))
   }, [teamId])

   const teamName = team[0]?.equipo_nombre
   const teamShield = team[0]?.equipo_escudo_url
   
   

   return (
      <section>
         <h1>{teamName}</h1>
         <img src={teamShield} alt="" />
      </section>
  )
}
