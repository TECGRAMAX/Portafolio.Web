import './app.css'
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Menu from './menu/menu.jsx';
import Tomos from './menu/pestanias/tomos.jsx';
import Dibujos from './menu/pestanias/dibujos.jsx';
import Noticias from './menu/pestanias/noticias.jsx';
function App() {
      return (
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Navigate to="Tomos" />} />
            <Route path="/" element={<Navigate to="Noticias" />} />

            <Route path="/Tomos/*" element={<Tomos />} />
            <Route path="/Noticias/*" element={<Noticias />} />
            <Route path="/Dibujos/*" element={<Dibujos />} />
          </Routes>
        </div>
      );
    }

  export default App;
  