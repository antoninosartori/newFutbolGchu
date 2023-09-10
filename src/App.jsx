import Header from './components/Header'
import { Route } from 'wouter'
import HomePage from './pages/HomePage'
import PosicionesPage from './pages/PosicionesPage'

function App() {
   
   
   return (
      <>
         <Header/>
         <main className='pt-headerTop font-roboto'>
            <Route path='/' component={HomePage} />
            <Route path='/posiciones' component={PosicionesPage} />
         </main>

      </>
   )
}

export default App
