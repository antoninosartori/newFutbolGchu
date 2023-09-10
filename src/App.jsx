import Header from './components/Header'
import { Route } from 'wouter'
import HomePage from './pages/HomePage'
import PosicionesPage from './pages/PosicionesPage'
import EquipoDetalles from './pages/EquipoDetalles'

function App() {
   
   
   return (
      <>
         <Header/>
         <main className='pt-headerTop font-roboto'>
            <Route path='/' component={HomePage} />
            <Route path='/posiciones' component={PosicionesPage} />
            <Route path="/equipos/:teamId" component={EquipoDetalles} />
         </main>

      </>
   )
}

export default App
