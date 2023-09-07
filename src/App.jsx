import Header from './components/Header'
import { Route } from 'wouter'
import HomePage from './pages/HomePage'

function App() {
   
   
   return (
      <>
         <Header/>
         <main className='pt-headerTop font-roboto'>
            <Route path='/' component={HomePage} />
         </main>

      </>
   )
}

export default App
