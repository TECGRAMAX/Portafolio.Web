import './inicio.css'
import { Link } from 'react-router-dom';
import perfil from '../assets/perfil.svg'

// 🔹 Importamos las redes
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import telegram from '../assets/telegram.svg'
import signal from '../assets/signal.svg'
import buasap from '../assets/whatssap.svg'

const Inicio = () => {
    return (
        <section className="Inicio">
            {/* 🔹 Caja que contiene imagen + texto */}
            <div className="perfil-contenedor">
                <Link to='/Datos'>
                    <div className="logo">
                        <img src={perfil} alt="Perfil" />
                    </div>
                </Link>
                <article className="texto-perfil">
                    <p>ESPECIALISTA EN TECNOLOGÍA y DESARROLLO</p>
                </article>
            </div>

            {/* 🔹 Caja de comunicación (redes) */}
            <div className="comunicacion">
                <a target="_blank" href="https://github.com/TECGRAMAX?tab=repositories">
                    <img width='25px' src={github} alt="GitHub" />
                </a>
                <a target="_blank" href="sgnl://send?phone=+5492213043215">
                    <img width='25px' src={signal} alt="Signal" />
                </a>
                <a target="_blank" href="https://wa.me/+5492213043215">
                    <img width='25px' src={buasap} alt="WhatsApp" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tecgramax/">
                    <img width='25px' src={linkedin} alt="LinkedIn" />
                </a>
            </div>

            {/* 🔹 Botones de enlaces */}
            <div className="botones-enlaces">
                <a target="_blank" href="mailto:donmaximilianoiiidelaplata@gmail.com">GMAIL</a>
                <a href="https://hunter.io/search" target="_blank">Hunter.io</a>
            </div>
        </section>
    )
}

export default Inicio;


