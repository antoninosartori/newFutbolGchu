import { Link } from "wouter"
import useFetchTeams from "../hooks/useFetchTeams"
import { LoadingSpinner } from "./LoadingSpinner"

export default function TeamShields() {
   const {teams, isLoading, error} = useFetchTeams()

   return(
      <section className="flex container m-auto justify-between py-4 overflow-scroll md:overflow-hidden gap-4 md:gap-0">
         {isLoading && < LoadingSpinner />}
         {
            !isLoading && !error && teams && teams?.map(team => (
               <Link href={`equipos/${team.equipo_id}`} key={team.equipo_id}>
                  <img className="w-[50px] md:w-[30px] lg:w-[40px] h-auto cursor-pointer hover:opacity-25" src={team.equipo_escudo_url} alt="" />
               </Link>
            ))
         }
      </section>
   )
}
