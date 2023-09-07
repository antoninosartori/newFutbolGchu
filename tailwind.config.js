/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         color: {
            primary: {
               900: '#1c2039',
               700: '#504e66'
            },
         }, 
         backgroundColor: {
            primary: {
               900: '#1c2039',
               700: '#504e66'
            },
         },
         height: {
            headerHeight: '80px'
         },
         padding: {
            headerTop: '80px'
         },
         gridTemplateColumns: {
            table_md: '1fr 1fr 250px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
         }
      },
   },
   plugins: [],
}

