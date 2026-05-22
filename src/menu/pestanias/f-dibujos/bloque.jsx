import { useEffect } from 'react' 
import xsalir from '../../assets/donarx.png'

import audio from './sonidos/Dragonball Super OST - Desperate Assault Theme [HQ Cover].MP3'

import facebookLogo from '../../assets/facebook.png'
import tiktokLogo from '../../assets/tiktok.png'

import '../estilos/bloque.css'

const BloqueDib = ({ dibujo, onClose }) => {
  // 🔊 Reproducir audio en bucle al montar el componente
  useEffect(() => {
    const bgAudio = new Audio(audio)
    bgAudio.loop = true
    bgAudio.volume = 0.5
    bgAudio.play().catch(err => {
      console.log("Autoplay bloqueado por el navegador:", err)
    })

    return () => {
      bgAudio.pause()
      bgAudio.currentTime = 0
    }
  }, [])

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="cerrar" onClick={onClose}>
          <img src={xsalir} alt="Cerrar" />
        </button>
        <div className="imagen-dibujo">
          <img src={dibujo.image} alt={dibujo.nom} />
        </div>
        <div className="redes-fila">
          {dibujo.redes.map((red, index) => (
            <a key={index} href={red.href} target="_blank" rel="noopener noreferrer">
              <img src={red.logo} alt={red.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BloqueDib
