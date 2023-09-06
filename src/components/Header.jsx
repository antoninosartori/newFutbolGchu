import { Link } from "wouter";
import SoccerBall from "../assets/icons/SoccerBall";

export default function Header (){
   return(
      <header className="fixed h-headerHeight w-screen bg-primary-900">
         <nav className="container mx-auto h-full flex items-center justify-between">
            <div className="flex items-center gap-0 h-full  ">
               < SoccerBall height={30} width={30} stroke='green' /> 
               <span className="text-blue-900 text-3xl font-bold">F</span>
               <span className="text-red-800 text-3xl font-semibold" >G</span>
            </div>
            <ul>
               <Link href="/contacto">Contacto</Link>
            </ul>
         </nav>
      </header>
   )
}