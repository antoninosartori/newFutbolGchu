import SoccerBall from "../assets/icons/SoccerBall";

export default function Header (){
   return(
      <header className="fixed h-headerHeight w-screen bg-primary-900">
         <nav>
            <div className="flex items-center gap-1 h-full ">
               < SoccerBall className='h-full' stroke='green' /> 
               <span className="text-blue-900 text-3xl">F</span>
               <span className="text-red-800 text-3xl" >G</span>
            </div>
            <ul></ul>
         </nav>
      </header>
   )
}