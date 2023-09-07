export default function Select({ children }) {
   return (
      <select className="bg-primary-700 text-white rounded-3xl p-2 text-lg">
         {children}
      </select>
   )
}