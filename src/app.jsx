import './app.css'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Inicio from './menu/inicio/inicio.jsx'
import Proyectos from './menu/proyectos/proyectos.jsx'
import Datos from './menu/datos/datos.jsx'
import Menu from './menu/menu.jsx'

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Navigate to="Inicio" />} />
        <Route path='Inicio' element={<Inicio/>}/>
        <Route path='/Proyectos' element={<Proyectos/>}/>
        <Route path='/Datos' element={<Datos/>}/>
      </Routes>
    </div>
  )
}

export default App

