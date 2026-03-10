import './menu.css'
import { Link } from 'react-router-dom';
import Redes from './redes.jsx';
import inicio from './assets/inicio.svg';
import plant from './assets/proyectos.svg';
import datos from './assets/datos.svg';


const Menu = () => {
    return(
        <header className="header">
            <span className="tecgramax">TECGRAMAX</span>

            <nav className="nav">

              <Link to='/'><span className="L">Inicio</span></Link>

              <Link to='/Datos'><span className="L">Datos</span></Link>

              <Link to='/Proyectos'><span className="L">Proyectos</span></Link>

            </nav>

            <nav className="navMobile">

              <Link to='/Datos'>
               <img width='40px' src={datos} alt="" />
              </Link>

              <Link to='/'>
                <img width='40px' src={inicio} alt="" />
              </Link>

              <Link to='/Proyectos'>
                <img width='40px' src={plant} alt="" />
              </Link>

            </nav>


            <Redes/>
            
        </header>
    )
}

export default Menu;