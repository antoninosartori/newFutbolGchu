import { useState } from 'react'
import { fetchTablaDePosiciones } from './utils/function'
import useDinamicFetch from './hooks/useDinamicFetch'
import Header from './components/Header'

function App() {
   const [optionValue, setOptionValue] = useState('a')
   const { data, isLoading, error} = useDinamicFetch(fetchTablaDePosiciones, optionValue)
   const tabla = data.tabla_posiciones
   
   return (
      <>
         <Header/>
         <main className='pt-headerTop'>
            {isLoading && <h1>cargando...</h1>}
            {error && <h1>{error}</h1>}
            <form className='' onChange={(event) => setOptionValue(event.target.value)}>
               <select name="" id="">
                  <option value="a">division a</option>
                  <option value="b">division b</option>
               </select>
            </form>

            <div className=''>
               {
                  tabla && !isLoading &&
                  tabla?.map(equipo => (
                     <h5 key={equipo.equipo_id}>{`${equipo.equipo_nombre} - ${equipo.puntos} - Dif: ${equipo.dif}`}</h5>
                  ))
               }
            </div>
         </main>

      </>
   )
}

export default App
