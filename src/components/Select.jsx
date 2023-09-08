export default function Select({ children, name = '', onChangeFunction}) {
   return (
      <select onChange={onChangeFunction} name={name}  className="bg-transparent text-primary-900 rounded-3xl p-2 text-lg border-border_1 border-primary-900">
         {children}
      </select>
   )
}