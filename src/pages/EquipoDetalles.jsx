import useFetchTeams from "../hooks/useFetchTeams";
import {LoadingSpinner} from '../components/LoadingSpinner'

export default function EquipoDetalles({ params }) {
   const { teamId } = params
   const { isLoading, error, teams: team } = useFetchTeams(true, teamId)

   const teamName = team[0]?.equipo_nombre
   const teamShield = team[0]?.equipo_escudo_url

   return (
      <>
         {isLoading && < LoadingSpinner />}
         <section>
            <h1>{teamName}</h1>
            <img src={teamShield} alt="" />
         </section>
      </>
   )
}
