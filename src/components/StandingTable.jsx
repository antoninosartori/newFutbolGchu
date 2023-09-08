import useFetchPosiciones from "../hooks/useFetchPosiciones"
import Option from "./Option"
import Select from "./Select"
import { LoadingSpinner } from "./LoadingSpinner"

export default function StandingTable() {
   const { tabla, isLoading, error, handleCategoryChange, handleDivisionChange } = useFetchPosiciones()

   return (
      <section className="container mx-auto w-full">
         <form className="flex items-center justify-start gap-4 p-4">
            <Select onChangeFunction={handleCategoryChange} >
               <Option value='a' text='Division A' />
               <Option value='b' text='Division B' />
            </Select>
            <Select onChangeFunction={handleDivisionChange}>
               <Option value='primera' text='Primera' />
               <Option value='sub' text='Sub23' />
            </Select>
         </form>

         <div className=" m-auto ">
            <div className="grid  grid-cols-table_sm md:grid-cols-table_md uppercase bg-primary-900 text-white rounded-t-lg">
               <div className="md:p-4  grid place-items-center">pos</div>
               <div className="md:p-4  grid place-items-center"></div>
               <div className="md:p-4  grid place-items-center">equipo</div>
               <div className="grid place-items-center font-semibold md:p-4">pts</div>
               <div className="md:p-4  grid place-items-center">pj</div>
               <div className="md:p-4  grid place-items-center">pg</div>
               <div className="md:p-4  grid place-items-center">pe</div>
               <div className="md:p-4  grid place-items-center">pp</div>
               <div className="hidden md:grid place-items-center md:p-4">gf</div>
               <div className="hidden md:grid place-items-center md:p-4">gc</div>
               <div className="md:p-4  grid place-items-center">dif</div>
            </div>
            {isLoading &&
               <section className="w-full h-full flex items-center justify-center">
                  < LoadingSpinner />
               </section>
            }
            {error &&
               <p>{error?.message}</p>
            }
            {
               !isLoading && tabla && tabla?.map((team, idx) => (
                  <article className="grid  grid-cols-table_sm md:grid-cols-table_md odd:bg-slate-100 even:bg-slate-200 last:rounded-b-lg" key={team.equipo_id}>
                     <div className="md:p-4 table-hover grid place-items-center">{idx + 1}</div>
                     <div className="md:p-4 table-hover grid place-items-center">
                        <img className="h-5" src={team.equipo_escudo_url} alt="" />
                     </div>
                     <div className="md:p-4 table-hover">
                        <span className="hidden md:block capitalize">{team.equipo_nombre.replace('_sub23', '')}</span>
                        <span className="md:hidden uppercase">{team.equipo_nombre_corto}</span>
                     </div>
                     <div className="font-semibold md:p-4 table-hover  grid place-items-center">{team.puntos}</div>
                     <div className="md:p-4 table-hover  grid place-items-center">{team.pj}</div>
                     <div className="md:p-4 table-hover  grid place-items-center">{team.pg}</div>
                     <div className="md:p-4 table-hover  grid place-items-center">{team.pe}</div>
                     <div className="md:p-4 table-hover  grid place-items-center">{team.pp}</div>
                     <div className="hidden md:grid md:p-4 table-hover place-items-center" >{team.gf}</div>
                     <div className="hidden md:grid md:p-4 table-hover place-items-center" >{team.gc}</div>
                     <div className="md:p-4 table-hover grid place-items-center" >{team.dif}</div>
                  </article>
               ))
            }
         </div>


      </section>
   )
}