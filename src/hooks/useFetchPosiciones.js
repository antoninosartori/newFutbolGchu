import { useEffect, useState } from "react";
import { fetchTablaDePosiciones } from "../utils/function";

export default function useFetchPosiciones() {
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [selectedCategory, setSelectedCategory] = useState('a');
   const [selectedDivision, setSelectedDivision] = useState('primera');
   const [tabla, setTabla] = useState([])

   const endpoint = `${selectedCategory}_${selectedDivision}`;

   useEffect(() => {
      setIsLoading(true)

      fetchTablaDePosiciones(endpoint)
         .then(data => {
            return setTabla(data)
         })
         .catch(err => {
            console.log(err)
            return setError(err?.message)
         })
         .finally(() => setIsLoading(false))
   },[endpoint])

   const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
   };

   const handleDivisionChange = (event) => {
      setSelectedDivision(event.target.value);
   };

   return {
      isLoading,
      error,
      tabla: tabla.tabla_posiciones,
      handleCategoryChange,
      handleDivisionChange
   }
}