import './redes.css'
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';

const Redes = () => {
    return(
        <div className="redes">
          <a target="_blank" href="https://www.instagram.com/ot.vers.dragonball/" aria-label="Instagram">
            <img src={instagram} width='35px' />
          </a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61582967316588" aria-label="Facebook">
            <img src={facebook} width='30px' />
          </a>
        </div>
    )
}

export default Redes;