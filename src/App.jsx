import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './components/Product'
import Dashbord from './components/Dashbord'
import Cart from './components/Cart'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Dashbord />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </>
  )
}

export default App
