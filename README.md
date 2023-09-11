# FutbolGChu
   Enrutado hecho con la libreria Wouter (doc)👇
   https://github.com/molefrog/wouter
# main.jsx 
   - Punto de entrada de la aplicacion

# App.jsx
   - Enrutado y layout de la app

# Hooks
   * Por el momento, todos devuelven un estado de carga, de error y datos.

   - useFetchMatches
      Simple, sin parametros.

   - useFetchPosiciones(isDinamic, category, division, limit)
      Tiene 4 parametros:
         - isDinamic: para indicarle que es una tabla dinamica que cambia con los selects/options
         - category: se le pasa cuando no es dinamica (!isDinamic). Es un string. Sirve para indicarle la categoria. Para que el fetch sea efectivo los parametros aceptados son solo dos: 'a' y 'b'
         - division: se le pasa cuando no es dinamica (!isDinamic). Es un string. Sirve para indicarle la division de un mismo equipo. Para que el fetch sea efectivo los parametros aceptados son solo dos: 'primera' y 'sub'.
         - limit: se le pasa cuando no es dinamica (!isDinamic). Es un number. Sirve para limitar las filas que se quieran traer. Ejemplo: limit = 4 => devuelve los 4 primeros.

   - useFetchTeams(isOneTeam, teamId)
      Recibe dos parametros:
         - isOneTeam: un valor booleano. True indica que se quiere obtener un solo equipo. 
         - teamId: valido si isOneTeam es true. Indica el id para buscar ese equipo en concreto.
         
         * Tiene una validacion para que no se acepten equipos sub23. Si el id que se le pasa como paremtro supera el numero 21 (mayor id de los equipos de categoria 'a' y division 'primera') hace una redireccion a HomePage 
# Funciones
   - Estan en la carpeta utlis/function.js

# Constantes
   - Crear las necesarias para que no haya 'magic strings'

