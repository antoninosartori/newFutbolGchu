import useFetchMatches from "../hooks/useFetchMatches"
import MatchCard from "./MatchCard"

export default function MatchesPreview (){
   const {matches, isLoading, error} = useFetchMatches()
   console.log({matches})
   return(
      <div className="flex w-full rounded-3xl container m-auto py-4 gap-4 overflow-hidden">
         {matches?.map(match => (
            <MatchCard key={match.partido_id} match={match} />
         ))}
      </div>
   )
}