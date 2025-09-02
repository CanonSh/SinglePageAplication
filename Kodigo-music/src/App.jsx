import './App.css'
import { Home } from './views/home/Home'
import { Biblioteca } from './views/biblioteca/Biblioteca'
import { Formulario } from './views/formulario/Formulario'
import {BrowserRouter,Route, Routes} from 'react-router'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Peticion' element={<Formulario/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
