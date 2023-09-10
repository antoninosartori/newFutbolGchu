import { Button } from "../components/Button"
import MatchesPreview from "../components/MatchesPreview"
import StandingTable from "../components/StandingTable"
import TeamShields from "../components/TeamShields"

export default function HomePage() {

   return (
      <>
         < TeamShields />
         <section className="container mx-auto flex justify-center">
            <p>Tu publicidad puede estar aqui</p>
         </section>
         <section>
            < MatchesPreview />
         </section>
         <section className=" container m-auto flex flex-col gap-4">

            <div className="flex gap-4">
               < StandingTable limit={3} category="a" division="primera" />
               < StandingTable limit={3} category="b" division="primera" />
            </div>

            <Button href="/posiciones">más posiciones</Button>
         </section>

      </>
   )
}