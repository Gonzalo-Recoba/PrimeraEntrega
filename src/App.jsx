import './App.css'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer title={"Bienvenido a Agentur"} subtitle={"Tu próximo viaje comienza aquí"}/>
      <Footer/>
    </>
  )
}

export default App
