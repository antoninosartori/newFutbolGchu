import { Link } from "wouter"

export const Button = ({ children, href = '/'}) => {
   return (
      <Link className="flex m-auto py-2 px-4 items-center justify-center rounded-2xl text-primary-900 border-border_1 border-current uppercase hover:bg-primary-900 hover:text-white transition-all" href={href} >
         {children}
      </Link>
   )
} 