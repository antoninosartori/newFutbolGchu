import { Link } from "wouter";
import SoccerBall from "../assets/icons/SoccerBall";
import { MenuIcon } from "../assets/icons/MenuIcon";
import { useState } from "react";

export default function Header (){

   const [toggleMenu, setToggleMenu] = useState(false)

   const handleToggleMenu = () => {
      setToggleMenu(!toggleMenu)
   }

   return(
      <header className="fixed h-headerHeight w-screen bg-primary-900">
         <nav className="container mx-auto h-full flex items-center justify-between">
            <div className="flex items-center gap-0 h-full  ">
               < SoccerBall height={30} width={30} stroke='green' /> 
               <span className="text-blue-900 text-3xl font-bold">F</span>
               <span className="text-red-800 text-3xl font-semibold" >G</span>
            </div>
            < MenuIcon onClickFunction={handleToggleMenu} height="40" width="40" color='#fff' className='md:hidden' />
            <ul 
               className={
                  `flex grow items-center md:justify-end gap-6 absolute -left-full top-[80px] bg-primary-700 z-10 flex-col w-full h-screen justify-center text-3xl
                  ${toggleMenu ? 'left-0' : ''}
                  md:static md:h-full bg-transparent md:flex-row`
               }>
                  <Link className="text-lg text-white uppercase  hover:border-b hover:border-white " href="/">inicio</Link>
                  <Link className="text-lg text-white uppercase  hover:border-b hover:border-white " href="/posiciones">posiciones</Link>
                  <Link className="text-lg text-white uppercase  hover:border-b hover:border-white " href="/fixture">fixture</Link>
                  <Link className="text-lg text-white uppercase  hover:border-b hover:border-white " href="/goleadores">goleadores</Link>
                  <Link className="text-lg text-white uppercase  hover:border-b hover:border-white " href="/contacto">contacto</Link>
            </ul>
         </nav>
      </header>
   )
}