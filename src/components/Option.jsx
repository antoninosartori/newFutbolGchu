export default function Option ({value = 'a', text = 'Division'}) {
   return(
      <option value={value}>{text}</option>
   )
}