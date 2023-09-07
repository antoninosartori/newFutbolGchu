export default function Option ({value = 'a', text = 'Division', name = ''}) {
   return(
      <option name={name} value={value}>{text}</option>
   )
}