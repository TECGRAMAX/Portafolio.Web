import './estilos/dibujos.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BloqueDib from './f-dibujos/bloque.jsx'

import blackvsZeno from './f-dibujos/img/0-Rey-Rey.jpg'
import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram.png'
import tiktokLogo from '../assets/tiktok.png'
import xLogo from '../assets/donarx.png'

import img1 from '../assets/bdib.png'
import img2 from '../assets/abtomos.png'
import img3 from '../assets/cnotic.png'
import red1 from '../assets/tomosbri.png'
import red2 from '../assets/tomosbri.png'
import red3 from '../assets/tomosbri.png'
import red4 from '../assets/tomosbri.png'

const Dibujos = () => {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [dibujoSeleccionado, setDibujoSeleccionado] = useState(null)

  const tarjetas = [
    {
      image: blackvsZeno,
      nom: 'Black logra golpear a Zeno',
      descrip: 'Dibujo tradicional del artista ReyRey, enviado por Menseger',
      autor: '- ReyRey',
      redes: [
        { href: 'https://www.facebook.com/reiven.quiseno', logo: facebookLogo, alt: 'Facebook' },
        { href: 'https://vm.tiktok.com/ZS9dCSjr9V7PY-9xm07/', logo: tiktokLogo, alt: 'tiktok' },
      ],
      abredib: true,
    },
    { 
      image: img1, 
      nom: 'Nombre del dibujo', 
      descrip: 'Descripción', 
      autor: '- dibujante', 
      redes: ['#'],
      abredib: false 
    },
    {
      image: img2,
      nom: 'Nombre del dibujo',
      descrip: 'Descripción',
      autor: '- dibujante',
      redes: ['#'],
      abredib: false,
    },
    { 
      image: img3, 
      nom: 'Nombre del dibujo', 
      descrip: 'Descripción', 
      autor: '- dibujante', 
      redes: ['#'],
      abredib: false 
    },
  ]

  const location = useLocation()
  const esRutaDib = location.pathname.endsWith('/Dibujos/dibujo')

  const abrirModal = (card) => {
    setDibujoSeleccionado(card)
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setDibujoSeleccionado(null)
  }

  return (
    <>
      {!esRutaDib && (
        <section className="Dibujos">
          <h1>ÁLBUM</h1>
          <div className="album">
            {tarjetas.map((card, index) => (
              <div key={index} className="presentacion">
                <h2>{card.nom}</h2>
                <div className="dib">
                  {card.abredib ? (
                    <img
                      src={card.image}
                      alt={card.nom}
                      onClick={() => abrirModal(card)}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <img src={card.image} alt={card.nom} />
                  )}
                  <div className="descripcion">
                    <p>{card.descrip}</p>
                    <p>{card.autor}</p>
                    {card.redes.length > 0 && (
                      <div className="sociales">
                        <p>REDES:</p>
                        <div className="imagen">
                          {card.redes.some(red => red !== '#') ? (
                            // Caso con enlaces reales
                            card.redes.map((red, i) => (
                              <a key={i} href={red.href} target="_blank" rel="noopener noreferrer">
                                <img src={red.logo} alt={red.alt} className="redImg" />
                              </a>
                            ))
                          ) : (
                            // Caso con solo '#'
                            <>
                              <img src={red1} alt="Red 1" />
                              <img src={red2} alt="Red 2" />
                              <img src={red3} alt="Red 3" />
                              <img src={red4} alt="Red 4" />
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {modalAbierto && dibujoSeleccionado && (
        <BloqueDib dibujo={dibujoSeleccionado} onClose={cerrarModal} />
      )}
    </>
  )
}

export default Dibujos
