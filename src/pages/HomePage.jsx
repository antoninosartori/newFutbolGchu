import MatchesPreview from "../components/MatchesPreview"
import StandingTable from "../components/StandingTable"

export default function HomePage() {
   
   return (
      <>
         <section className="container mx-auto flex justify-center">
            <p>Tu publicidad puede estar aqui</p>
         </section>
         <section className=" container m-auto flex  items-start justify-between gap-4">

            < MatchesPreview />

            < StandingTable limit={3} category="a" division="primera" />
            < StandingTable limit={3} category="b" division="primera" />

            {/* < StandingTable isDinamic /> */}


         </section>
         
      </>
   )
}