import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Industry from './Pages/Industry'
import Capability from './Pages/Capability'
import Career from './Pages/Career'
import ContactUs from './Pages/ContactUs'

function App() {
   return (
    <>
    <Navbar/>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/industry' element={<Industry/>}/>
        <Route path='/capability' element={<Capability/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
