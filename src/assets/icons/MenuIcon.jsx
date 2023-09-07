export const MenuIcon = ({className, color = "currentColor", width = '24' , height= '24', onClickFunction}) => {
   const classNameFromComponent = `icon icon-tabler icon-tabler-menu-2 ${className}`
   return (
      <svg onClick={onClickFunction} xmlns="http://www.w3.org/2000/svg" className={classNameFromComponent} width={width} height={height} viewBox="0 0 24 24" strokeWidth="1" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M4 6l16 0"></path>
         <path d="M4 12l16 0"></path>
         <path d="M4 18l16 0"></path>
      </svg>
   )
}