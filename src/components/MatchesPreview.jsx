import useFetchMatches from "../hooks/useFetchMatches"
import MatchCard from "./MatchCard"

export default function MatchesPreview (){
   const {matches, isLoading, error} = useFetchMatches()
   console.log({matches})
   return(
      <div className="flex flex-col w-full md:w-[20%] gap-4 bg-primary-900 rounded-3xl">
         {matches?.map(match => (
            <MatchCard key={match.partido_id} match={match} />
         ))}
      </div>
   )
}