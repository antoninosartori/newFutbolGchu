import { useEffect, useState } from 'react'
import { supabase } from './supabase-client';

function App() {
   async function fetchTablaDePosiciones(division) {
      setIsLoading(true)
      const { data: tabla_posiciones, error } = await supabase
         .from(`tabla_posiciones_${division}`)
         .select('*')
      setIsLoading(false)
      return { tabla_posiciones, error}
   }

   const [optionValue, setOptionValue] = useState('a')
   const [tabla, setTabla] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      fetchTablaDePosiciones(optionValue)
         .then( data => {
            console.log({data})
            const {tabla_posiciones, error} = data
            setTabla(tabla_posiciones)
            setError(error)
         })
      
   }, [optionValue])

      return(
         <>
         { isLoading && <h1>cargando...</h1> }
         { error && <h1>{error}</h1> }
         <form onChange={(event) => setOptionValue(event.target.value)}>
            <select name="" id="">
               <option value="a">division a</option>
               <option value="b">division b</option>
            </select>
         </form>

         <div>
            {
               tabla && !isLoading &&
               tabla?.map(equipo => (
                  <h5 key={equipo.equipo_id}>{`${equipo.equipo_nombre} - ${equipo.puntos} - Dif: ${equipo.dif}`}</h5>
               ))
            }
         </div>

         </>
      )
}

export default App
