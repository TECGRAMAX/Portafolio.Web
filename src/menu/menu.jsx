import './menu.css'
import { Link } from 'react-router-dom';
import Redes from './redes.jsx';

import Tomos from './pestanias/tomos.jsx';
import Dibujos from './pestanias/dibujos.jsx';
import Noticias from './pestanias/noticias.jsx';

import Logo from './assets/logo.png';
import tomos from './assets/tomos.png';
import dibujos from './assets/dibujos.png';
import noticias from './assets/noticias.png';

const Menu = () => {
    return(
        <header className="header">
            
            <span className="logo">
                <img src={Logo}/>
            </span>
            
            <nav className="nav">
              <Link to='/'><span className="L">Tomos</span></Link>
              <Link to='/Noticias'><span className="L">Noticias</span></Link>
              <Link to='/Dibujos'><span className="L">Dibujos</span></Link>
            </nav>

           <nav className="navMobile">

              <Link to='/'>
                <img src={tomos} width='40px' />
              </Link>


              <Link to='/Noticias'>
                <img src={noticias} width='40px' />
              </Link>


              <Link to='/Dibujos'>
              <img src={dibujos} width='40px' />
              </Link>

            </nav>

            <Redes/>
        </header>
    )
}

export default Menu;