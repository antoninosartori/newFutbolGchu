import { useEffect, useState } from "react"
import useDinamicFetch from '../hooks/useDinamicFetch'
import { fetchTablaDePosiciones } from '../utils/function'
import Option from "./Option"
import Select from "./Select"
import { LoadingSpinner } from "./LoadingSpinner"


export default function StandingTable() {
   const [selectedCategory, setSelectedCategory] = useState('a');
   const [selectedDivision, setSelectedDivision] = useState('primera');
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [data, setData] = useState([])
   const endpoint = `${selectedCategory}_${selectedDivision}`;

   useEffect(() => {
      setIsLoading(true)
      fetchTablaDePosiciones(endpoint)
         .then(data => {
            return setData(data)
         })
         .catch(err => {
            console.log(err)
            return setError(err?.message)
         })
         .finally(() => setIsLoading(false))
   }, [selectedCategory, selectedDivision])

   const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    const handleDivisionChange = (event) => {
      setSelectedDivision(event.target.value);
    };

    console.log({data})

   return (
      <section className="container mx-auto w-full">
         <form  className="flex items-center justify-center gap-4 p-4">
            <Select onChangeFunction={handleCategoryChange} >
               <Option value='a' text='Division A' />
               <Option value='b' text='Division B' />
            </Select>
            <Select onChangeFunction={handleDivisionChange}>
               <Option value='primera' text='Primera' />
               <Option value='sub' text='Sub23' />
            </Select>
         </form>

         <div className="md:max-w-[750px] m-auto">
            <div className="grid md:p-4 grid-cols-table_sm md:grid-cols-table_md uppercase bg-primary-700 text-white rounded-t-3xl">
               <div>pos</div>
               <div></div>
               <div>equipo</div>
               <div className="font-semibold">pts</div>
               <div>pj</div>
               <div>pg</div>
               <div>pe</div>
               <div>pp</div>
               <div className="hidden md:block">gf</div>
               <div className="hidden md:block">gc</div>
               <div>dif</div>
            </div>
            {isLoading && 
               <section className="w-full h-full flex items-center justify-center">
                  < LoadingSpinner />
               </section> 
            }
            {
               !isLoading && data && data.tabla_posiciones?.map((team, idx) => (
                  <article className="grid md:p-4 grid-cols-table_sm md:grid-cols-table_md odd:bg-slate-100 even:bg-slate-200 last:rounded-b-3xl" key={team.equipo_id}>
                     <div>{idx + 1}</div>
                     <div>
                        <img className="h-5" src={team.equipo_escudo_url} alt="" />
                     </div>
                     <div className="">
                        <span className="hidden md:block capitalize">{team.equipo_nombre.replace('_sub23','')}</span>
                        <span className="md:hidden uppercase">{team.equipo_nombre_corto}</span>
                     </div>
                     <div className="font-semibold">{team.puntos}</div>
                     <div>{team.pj}</div>
                     <div>{team.pg}</div>
                     <div>{team.pe}</div>
                     <div>{team.pp}</div>
                     <div className="hidden md:block" >{team.gf}</div>
                     <div className="hidden md:block" >{team.gc}</div>
                     <div>{team.dif}</div>
                  </article>
               ))
            }
         </div>


      </section>
   )
}