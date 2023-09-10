import { supabase } from '../supabase/supabase-client';

export async function fetchTablaDePosiciones(viewName, limit) {
   if(!limit){
      const { data: tabla_posiciones, error } = await supabase
      .from(`tabla_posiciones_${viewName}`)
      .select('*')
   return { tabla_posiciones, error }
   }
   if(limit){
      const { data: tabla_posiciones, error } = await supabase
      .from(`tabla_posiciones_${viewName}`)
      .select('*')
      .limit(limit)
      return { tabla_posiciones, error }
   }
}

export async function getMatchesBy() {
   const { data: matches, error } = await supabase
      .from('partidos_a_primera')
      .select('*')
   return { matches, error }
}





