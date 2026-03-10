import './redes.css'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import telegram from './assets/telegram.svg'
import signal from './assets/signal.svg'
import buasap from './assets/whatssap.svg'

const Redes = () => {
    return(
        <div className="redes">
            <a target="_blank" href="https://www.linkedin.com/in/tecgramax/">
                <img width='25px' src={linkedin} alt="" />
            </a>
            <a target="_blank" href="sgnl://send?phone=+5492213043215">
              <img width='25px' src={signal} alt="" />
            </a>
            <a target="_blank" href="https://wa.me/+5492213043215">
                <img width='25px' src={buasap} alt="" />
            </a>
            <a target="_blank" href="https://github.com/TECGRAMAX?tab=repositories">
                <img width='25px' src={github} alt="" />
            </a>
            {/*
            <a target="_blank" href="https://t.me/+5492213043215">
                <img width='25px' src={telegram} alt="" />
            </a>
            */}
        </div>
    )
}

export default Redes;