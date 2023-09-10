export default function MatchCard({ match = [] }) {
   const {
      partido_id,
      fecha_dia,
      fecha_partido,
      goles_local,
      goles_visitante,
      id_local,
      id_visitante,
      local,
      local_corto,
      local_escudo_url,
      visitante, 
      visitante_corto, 
      visitante_escudo_url 
   } = match

   const finished = goles_local !== null && goles_visitante !== null
   const [dateToShow, timeToShow] = new Date(fecha_dia).toLocaleDateString('es-ar', {day: 'numeric', month: "2-digit", hour: "2-digit", minute:"2-digit"}).split(',')
   
   return (
      // <article className="grid grid-cols-5 py-4 text-white uppercase hover:bg-primary-700 first:rounded-t-3xl last:rounded-b-3xl">
      //    <div className="grid place-items-end bold">{local_corto}</div>
      //    <div className="grid place-items-center">
      //       <img className="h-[30px]" src={local_escudo_url} alt="" />
      //    </div>
      //    <div className="grid place-items-center">{`${goles_local} - ${goles_visitante}`}</div>
      //    <div className="grid place-items-center">
      //       <img className="h-[30px]" src={visitante_escudo_url} alt="" />
      //    </div>
      //    <div className="grid place-items-start bold">{visitante_corto}</div>
      // </article>
      <article className="grid grid-cols-3 py-4 text-primary-900 uppercase hover:bg-primary-700 first:rounded-t-3xl last:rounded-b-3xl odd:bg-slate-100 even:bg-slate-200">
         <div className="flex flex-col items-center justify-center">
            <img className="w-[30px] h-auto" src={local_escudo_url} alt="" />
            <p>{local_corto}</p>
         </div>
         <div className="flex flex-col items-center">
            {finished && 
               <>
                  <span>{`${goles_local} - ${goles_visitante}`}</span>
                  <span>final</span>
               </>
            }
            {!finished &&  
               <>
                  <span>{dateToShow}</span>
                  <span>{timeToShow}</span>
               </>
            }
            
         </div>
         <div className="flex flex-col items-center justify-center">
            <img className="w-[30px] h-auto" src={visitante_escudo_url} alt="" />
            <p>{visitante_corto}</p>
         </div>
      </article>
   )
}

