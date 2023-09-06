import { useEffect, useState } from "react";

export default function useDinamicFetch(fetchFunction, dinamicValue) {
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [data, setData] = useState([])

   useEffect(() => {
      setIsLoading(true)
      if (!fetchFunction || !dinamicValue) { return }
      fetchFunction(dinamicValue)
         .then(data => {
            return setData(data)
         })
         .catch(err => {
            console.log(err)
            return setError(err?.message)
         })
         .finally(setIsLoading(false))
   }, [dinamicValue])

   return {
      isLoading, error, data
   }
}