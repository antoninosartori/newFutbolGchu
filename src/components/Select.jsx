export default function Select({ children, name = '', onChangeFunction}) {
   return (
      <select onChange={onChangeFunction} name={name}  className="bg-primary-700 text-white rounded-3xl p-2 text-lg">
         {children}
      </select>
   )
}