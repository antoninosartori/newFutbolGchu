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

   const fecha = new Date(fecha_dia).toISOString()
   console.log({fecha})

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
      <article className="grid grid-cols-3 py-4 text-white uppercase hover:bg-primary-700 first:rounded-t-3xl last:rounded-b-3xl">
         <div className="flex flex-col items-center justify-center">
            <img className="w-[30px] h-auto" src={local_escudo_url} alt="" />
            <p>{local_corto}</p>
         </div>
         <div className="grid place-content-center">{`${goles_local} - ${goles_visitante}`}</div>
         <div className="flex flex-col items-center justify-center">
            <img className="w-[30px] h-auto" src={visitante_escudo_url} alt="" />
            <p>{visitante_corto}</p>
         </div>
      </article>
   )
}

