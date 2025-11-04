import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import { Home } from './pages/Home.jsx'
import {routes} from './utils/Routes.js'
import Contact from './pages/Contact.jsx'
import Alomamientos from './pages/Alojamientos.jsx'
import DestinosDetail from './components/idemDetail/DestinosDetail.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={ <Home/> } />
        <Route path={routes.alojamientos} element={ <Alomamientos/> } />
        <Route path={routes.contact} element={ <Contact/> } />
        <Route path={routes.destinosDetail} element={<DestinosDetail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
